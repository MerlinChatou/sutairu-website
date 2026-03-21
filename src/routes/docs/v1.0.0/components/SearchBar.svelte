<script>
  // import "@merlin-chatou/sutairu-extras/input-group/style";
  import { onMount } from "svelte";
  import { searchState } from "../state/search.svelte.js";
  let searchInput;

  function clear() {
    searchState.queries = [];
    searchInput.value = "";
    searchInput.focus();
  }

  function handleInput(event) {
    const query = event.target.value.toLowerCase();
    // At least 2 character to start search
    if (query.length > 2) searchState.queries = query.split(/\s+/);
    else searchState.queries = [];
  }
  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    let urlQuery = params.get("q");
    if (urlQuery) {
      searchInput.value = urlQuery;
      searchState.queries = urlQuery.split(/\s+/);
    }
  });
</script>

<div class="md:pos-abs md:left-middle d-none md:d-block">
  <div class="group-fluid b-1 ov-hidden r-pill fs-sm md:w-md">
    <span class="group-item bg-subtle bg-opacity-0 br-0 p-2"><i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i></span>
    <input
      id="search-text"
      type="text"
      class="group-item-fluid input br-0"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="basic-addon1"
      bind:this={searchInput}
      on:input={handleInput}
    />
    <button id="search-clear" class="group-item btn hover:bg-accent p-2" aria-label="Reset search bar" on:click={clear}>
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
</div>

<style>
</style>
