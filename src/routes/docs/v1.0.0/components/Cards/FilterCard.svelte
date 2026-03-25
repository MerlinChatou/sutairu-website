<script>
  
  import { onMount } from "svelte";
  import { searchState } from "../../state/search.svelte.js";
  import { containsAllSubstrings } from "$lib/utils/containAllSubstring.js";
  import { fade } from "svelte/transition";

    
  let header = $state();
  let body = $state();
  let cardEl = $state();
  let isVisible = $state(true);
  let rawText, cardId;

  // Get raw text on mount
  onMount(() => {
    // Get card text
    rawText = (header.textContent + " " + body.textContent).toLocaleLowerCase();
    cardId = cardEl.id;
  });

  // On query change
  $effect(() => {
    // If query is empty, show all cards otherwise show if in search query
    if (searchState.queries.length === 0) isVisible = true;
    else isVisible = containsAllSubstrings(rawText, searchState.queries);
        if (isVisible) searchState.visibleCards.add(cardId);
    else searchState.visibleCards.delete(cardId);
    });
</script>

{#if isVisible}
  <div class="card opacity-0" id="filter" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Filters</h4>
      <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
      <div hidden>brightness blur grayscale contrast invert hue rotate hue sepia opacity</div>
    </div>
    <div class="body d-flex fd-col gap-3" bind:this={body}>
      <img class="r-4 filter grayscale-90 hover:grayscale-0" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
      <img class="r-4 filter brightness-150 hover:brightness-100" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
      <img class="r-4 filter blur-4 hover:blur-0" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
      <img class="r-4 filter contrast-200 hover:contrast-100" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
      <img class="r-4 filter invert-80 hover:invert-0" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
      <img class="r-4 filter hue-rotate-180 hover:hue-rotate-0" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
      <img class="r-4 filter opacity-10 hover:opacity-100" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
      <img class="r-4 filter saturate-75 hover:saturate-100" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
      <img class="r-4 filter sepia-80 hover:sepia-0" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
      
      
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="extras/filter">&lt;code&gt;</button>
    </div>
  </div>
{/if}
