<script>
  //let isVisible = $state(false);
  import { searchState } from "../state/search.svelte.js";
  import { fade } from 'svelte/transition';
  let isVisible =$state(false);

  // Check searchState.queries because mutating a Set does not trigger reactivity.
  $effect(() => {
    console.log( searchState.visibleCards)
    isVisible = searchState.queries.length !==0 && searchState.visibleCards.size === 0;
  });
  
  
  
</script>

{#if isVisible}
  <div class="w-full text-center text-title" in:fade={{ delay: 250 }}>
    <i class="fa-regular fa-face-sad-tear fs-4xl"></i>
    <div class="my-3 fs-3xl">Hmm… we couldn't find any results for your search.</div>
    <div>Please try a different keyword or check for typos.</div>
  </div>
{/if}
