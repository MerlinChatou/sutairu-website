<script>
  import "#lib/generated/sutairu.min.css";
  import { Modal } from "@merlin-chatou/sutairu";
  import Navbar from "../components/Navbar.svelte";
  import iconsMeta from "@merlin-chatou/sutairu/icons-meta";
  import iconsData from "@merlin-chatou/sutairu/icons-data";
  import MiniSearch from "minisearch";

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

<Navbar />

<div class="card w-xs grid-y grid-cols-4 gap-3 p-3">
  <div class="bg-subtle text-title r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-user-thin"></i></div>
  <div class="bg-subtle text-title r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-user"></i></div>
  <div class="bg-subtle text-title r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-user-wide"></i></div>
  <div class="bg-subtle text-title r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-user-solid"></i></div>
  <div class="bg-subtle text-title r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in"></i></div>
  <div class="bg-subtle text-title r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in rot-1/4"></i></div>
  <div class="bg-subtle text-title r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in rot-1/2"></i></div>
  <div class="bg-subtle text-title r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in rot-3/4"></i></div>
  <div class="bg-subtle text-title r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-apple"></i></div>
  <div class="bg-subtle text-title r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-google"></i></div>
  <div class="bg-subtle text-title r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-paypal"></i></div>
  <div class="bg-subtle text-title r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-instagram"></i></div>
  <div class="stack bg-subtle text-black r-4 ar-1 align-cc">
      <i class="h-80% w-80% text-green icon i-circle-solid"></i>
      <i class="h-80% w-80% text-white icon i-check"></i>
  </div>
  <div class="stack bg-subtle text-black r-4 ar-1 align-cc">
      <i class="h-80% w-80% text-red icon i-circle-solid"></i>
      <i class="h-80% w-80% text-white icon i-times-solid"></i>
  </div>
  <div class="stack bg-subtle text-black r-4 ar-1 align-cc">
      <i class="h-80% w-80% text-yellow-450 icon i-equilateral-solid"></i>
      <i class="h-80% w-80% text-orange-550 icon i-warning-solid"></i>
  </div>
    <div class="stack bg-subtle text-black r-4 ar-1 align-cc">
      <i class="h-80% w-80% text-blue icon i-car-front-small"></i>
      <i class="h-80% w-80% text-red icon i-circle-line-wide"></i>
  </div>
</div>

<div class="max-w-md">
  <label for="exampleInputText" class="input-label">Search</label>
  <input type="text" class="input" id="icon-search" placeholder="keywords" autocomplete="off" bind:value={query} />
</div>

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

<div class="card w-fit m-5 flex-x gap-2 p-3">
  <span class="icon i-twitter r-2"></span>
  <span class="icon i-github ol-blue"></span>
  <span class="icon i-discord"></span>
  <span class="icon i-search"></span>
  <span class="icon i-none bg-accent"></span>

  <span class="icon i-sign-in-solid"></span>
  <span class="icon i-sign-in-solid rot-90"></span>
  <span class="icon i-sign-in-solid rot-180"></span>
  <span class="icon i-sign-in-solid -rot-90"></span>

  <span class="icon i-user-solid text-blue bg-blue-200 r-1 fs-5xl"></span>

  <div class="stack fs-5xl h-fit">
    <span class="icon i-car-front-small text-blue"></span>
    <span class="icon i-circle-line-wide text-red"></span>
  </div>
  <span class="icon i-times-wide"></span>
  text
  <p>This is a test of the Sutairu icon <span class="icon i-search"></span> bla <i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i> bla</p>
</div>

<button class="btn btn-primary" aria-label="Twitter">
  <i class="icon i-twitter"></i>
</button>
<button class="btn btn-primary">btn-primary</button>

<span class="my-loader-clip text-red ps-center"></span>

<style>
  .dynamic-icon::before {
    mask-image: var(--icon-path);
  }
</style>
