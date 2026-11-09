<script>
  import "../lib/generated/sutairu-v1-0-0.min.css";
  import { Modal } from "@merlin-chatou/sutairu";
  import iconsMeta from "@merlin-chatou/sutairu/icons-meta";
  import iconsData from "@merlin-chatou/sutairu/icons-data";
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";
  import SearchBarIcons from "../components/SearchBarIcons.svelte";
  import IconResults from "../components/IconResults.svelte";
  import { createIconSearch, createIconUri } from "../lib/icons/createIconSearch.js";

  onMount(() => Modal.init());

  const search = createIconSearch(iconsMeta);
  const iconUri = createIconUri(iconsData);

  let query = "";
  let style = "all";
  let category = "all";

  $: results = search(query, style, category);
</script>

<Navbar searchBarVisible={false} />
<div class="px-1 tg-glow dotted-black-30 dark:dotted-white-875 min-h-100vh">
  <div class="d-flex fd-row gap-2 as-center jc-center mt-0 mb-2 pt-3">
    <i class="icon i-sutairu fs-5xl d-inline m-0 as-center text-white-0 bg-accent r-3"></i>
    <h1 class="h1 d-inline my-0">Sutairu Icons</h1>
  </div>
  <p class="max-w-lg mx-auto text-center mb-4 md:mb-5 fs-0.95em md:fs-1em">
    Browse Sutairu's vector icons and drop them into your HTML with a single class; only the icons you use are automatically embedded in your CSS bundle, with
    no extra setup.
  </p>

  <SearchBarIcons bind:value={query} />
  <IconResults {results} {iconUri} {query} />
</div>
