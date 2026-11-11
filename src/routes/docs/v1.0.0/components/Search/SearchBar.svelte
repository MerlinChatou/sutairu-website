<script>
  import { onMount } from "svelte";
  import { searchState } from "../../state/search.svelte.js";
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
  <div class="input-group b-1 r-pill fs-sm md:w-md">
    <!-- <span class="bg-opacity-0"><i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i></span> -->
    <span><i class="icon i-search fs-lg mx-1"></i></span>
    <input
      id="search-text"
      type="text"
      class="input br-0"
      placeholder="Search"
      autocomplete="off"
      aria-label="Search"
      aria-describedby="basic-addon1"
      bind:this={searchInput}
      on:input={handleInput}
    />
    <button id="search-clear" class="btn btn-primary" aria-label="Reset search bar" on:click={clear}>
      <i class="icon i-times-wide fs-2xl"></i>
    </button>
  </div>
</div>

<style>
</style>
