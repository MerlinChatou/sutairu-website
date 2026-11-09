<script>
  import "#lib/generated/sutairu.min.css";
  import { Modal } from "@merlin-chatou/sutairu";
  import Navbar from "../components/Navbar.svelte";
  import iconsMeta from "@merlin-chatou/sutairu/icons-meta";
  import iconsData from "@merlin-chatou/sutairu/icons-data";
  import MiniSearch from "minisearch";
  import SearchBarIcons from "../components/SearchBarIcons.svelte";

  import { onMount } from "svelte";
  onMount(() => {
    Modal.init();
  });

  const MAX_RESULTS = 120; // displayed at once, the counter still shows the real total
  const MIN_QUERY_LENGTH = 2; // a single letter would match half of the icons
  const STYLE_SUFFIX = /-(solid|thin|wide-alt|wide)$/;

  // ---- search index (built once, ~ms for 1600 icons) ----------------------
  // "name" is tokenized on hyphens by MiniSearch's default tokenizer, so
  // "close-envelope-thin" is indexed as: close, envelope, thin.
  const index = new MiniSearch({
    fields: ["name", "tags", "related"],
    storeFields: ["name", "category", "style"],
  });

  index.addAll(
    iconsMeta.icons.map((icon) => ({
      id: icon.name,
      name: icon.name,
      tags: icon.tags.join(" "),
      related: icon.related.join(" "),
      category: icon.category,
      style: icon.style,
    })),
  );

  // ---- icon rendering ------------------------------------------------------
  // Search results only carry the stored fields (name, category, style), so the
  // SVG is looked up by name at render time. The data URI is built lazily, only
  // for the icons actually displayed, then cached.
  const uriCache = new Map();
  function iconUri(name) {
    if (!uriCache.has(name)) {
      const d = iconsData[name];
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 024 24"><path d="${d}"/></svg>`;
      uriCache.set(name, d ? `url("data:image/svg+xml,${encodeURIComponent(svg)}")` : "none");
    }
    return uriCache.get(name);
  }

  let query = "";
  let style = "all";
  let category = "all";

  function search(q, style, category) {
    console.log(q)
    const matchesFilters = (icon) => (style === "all" || icon.style === style) && (category === "all" || icon.category === category);

    const term = q.trim();

    // No (or too short) query: browse everything, alphabetical, filters applied
    if (term.length < MIN_QUERY_LENGTH) {
      return iconsMeta.icons.filter(matchesFilters);
    }

    const hits = index.search(term, {
      boost: { name: 3, tags: 2, related: 0.5 }, // name > tags > related
      prefix: true, // "env" finds "envelope" while typing
      fuzzy: (t) => (t.length > 3 ? 0.2 : false), // typo tolerance, not on short words
      combineWith: "AND", // "paper plane" requires both words
      filter: matchesFilters,
      // on equal relevance, the plain icon comes before its -solid / -thin / -wide variants
      boostDocument: (id) => (STYLE_SUFFIX.test(id) ? 1 : 1.15),
    });

    // An exact match on the icon name always comes first:
    // "search" -> search, search-solid, search-thin... then the other icons by score
    const wanted = term.toLowerCase().replace(/\s+/g, "-");
    const rank = (r) => (r.name === wanted ? 0 : r.name.replace(STYLE_SUFFIX, "") === wanted ? 1 : 2);
    return hits.sort((a, b) => rank(a) - rank(b) || b.score - a.score);
  }

  // style and category are passed as arguments so Svelte re-runs this on change
  $: results = search(query, style, category);
  $: shown = results.slice(0, MAX_RESULTS);
</script>

<Navbar searchBarVisible={false}/>
<div class="px-1 tg-glow dotted-black-30 dark:dotted-white-875 min-h-100vh">
  <div class="d-flex fd-row gap-2 as-center jc-center mt-0 mb-2 pt-3">
    <img src="/images/logo/logo-no-bg.svg" alt="Sutairu Logo" height="50" class="d-inline m-0 as-center bg-accent r-3" />
    <h1 class="h1 d-inline my-0">Sutairu Icons</h1>
  </div>
  <p class="max-w-lg mx-auto text-center mb-4 md:mb-5">
    Browse Sutairu’s vector icons and drop them into your HTML with a single class; only the icons you use are automatically embedded in your CSS bundle, with no extra setup.
  </p>

  <SearchBarIcons bind:value={query}/>
  

<!--
<div class="max-w-md">
  <label for="exampleInputText" class="input-label">Search</label>
  <input type="text" class="input" id="icon-search" placeholder="keywords" autocomplete="off" bind:value={query} />
</div>
-->
<p>
  {results.length} icon{results.length === 1 ? "" : "s"}
  {#if results.length > MAX_RESULTS}(showing the first {MAX_RESULTS}){/if}
</p>

{#if results.length === 0}
  <p>No icon found for "{query.trim()}". Try a more generic word.</p>
{:else}
  <div class="flex-x w-max-screen fw-wrap">
    {#each shown as icon (icon.name)}
      <div class="card flex-y gap-1 p-2 m-1 as-center jc-center">
        <i class="icon dynamic-icon fs-5xl" style:--icon-path={iconUri(icon.name)}></i>
        <small class="fs-0.5em">{icon.name}</small>
      </div>
    {/each}
  </div>
{/if}
</div>

<style>
  .dynamic-icon::before {
    mask-image: var(--icon-path);
  }
</style>
