<script>
  import { onMount } from "svelte";

  // Value passed from the parent component, representing the current search query
  export let value = '';

  // Reference to the search input element
  let searchIconsInput;

  // Clear the search bar and reset the value
  function clear() {
    value = '';
    if (searchIconsInput) searchIconsInput.value = '';
  }

  // Check for URL query parameter "q" and set the value accordingly
  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    // Check for URL query parameter "q" and set the value accordingly
    let urlQuery = params.get("q");
    if (urlQuery) value = urlQuery; 
  });
</script>

<div class="flex-x jc-center">
  <div class="input-group b-1 r-pill fs-sm md:w-md">
    <span><i class="icon i-search fs-2xl mx-1"></i></span>
    <input
      id="search-text"
      type="text"
      class="input br-0 fs-xl"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="Icon search bar"
      bind:this={searchIconsInput}
      bind:value={value}
    />
    <button id="search-clear" class="btn btn-primary" aria-label="Reset search bar" on:click={clear}>
      <i class="icon i-times-wide fs-3xl"></i>
    </button>
  </div>
</div>

<style>
</style>
