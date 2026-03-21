<script>
  import ColorSchemeSelector from "./ColorSchemeSelector.svelte";
  import ThemeSelector from "./ThemeSelector.svelte";
  import SearchBar from "./SearchBar.svelte";
  
  export let searchBarVisible = true; 
</script>


<nav class="z-sticky bg-container p-2 d-flex jc-between ai-center pos-stk w-full border bw-0 bb-2">
  <div class="d-flex ai-center">
    <a href="/" class="logo h-fit d-flex ai-center gap-1 td-none text-title">
      <img src="/images/logo/logo-no-bg.svg" alt="Sutairu Logo" class="bg-accent r-2 h-2rem" />
      <span class="d-none md:d-block -ls-md fs-2rem text-title fw-black">Sutairu</span>
    </a>
  </div>
  {#if searchBarVisible}
  <SearchBar />
  {:else}
  <div></div>
  {/if}

  <div class="d-flex ai-center gap-2">
    <ThemeSelector />
    <ColorSchemeSelector />
  </div>
</nav>

<style>
  /* For anchors i.e. #headings */
  :global(:target) {
    scroll-margin-top: 60px;
  }
</style>
