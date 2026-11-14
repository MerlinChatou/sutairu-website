<script>
  import ColorSchemeSelector from "./ColorSchemeSelector.svelte";
  import ThemeSelector from "./ThemeSelector.svelte";
  import SearchBar from "./Search/SearchBar.svelte";
  
  export let searchBarVisible = true;   
</script>


<nav class="pos-sticky top-0 z-sticky bg-container p-2 d-flex jc-between ai-center w-full border bw-0 bb-2">
  <div class="d-flex ai-center">
    <a href="/" class="logo h-fit d-flex ai-center gap-1 td-none text-title">
      
      <i class="icon i-sutairu fs-3xl m-0 as-center text-white-0 bg-accent r-2"></i>
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
