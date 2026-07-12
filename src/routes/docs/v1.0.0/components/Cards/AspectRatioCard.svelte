<script>
  import { onMount } from "svelte";
  import { searchState } from "../../state/search.svelte.js";
  import { containsAllSubstrings } from "$lib/utils/containAllSubstring.js";
  
  let header = $state();
  let body = $state();
  let cardEl = $state();
  let isVisible = $state(true);
  let rawText, cardId;

  // Get raw text on mount
  onMount(() => {
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
  <div class="card opacity-0" id="aspect-ratio" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Aspect Ratio</h4>
    </div>
    <div class="body d-grid grid-cols-3 gap-2 ff-mono fs-0.85rem text-center" bind:this={body}>
        
      <div class="b-1 b-accent/50 bg-accent-200/20 stripes-accent/20 p-2 r-2 ws-nowrap align-cc ar-16/9">.ar-16/9</div>
      <div class="b-1 b-accent/50 bg-accent-200/20 stripes-accent/20 p-2 r-2 ws-nowrap align-cc ar-square">.ar-square</div>
      <div class="b-1 b-accent/50 bg-accent-200/20 stripes-accent/20 p-2 r-2 ws-nowrap align-cc ar-0.6">.ar-0.6</div>
      
    </div>
        
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="layout/aspect-ratio">&lt;code&gt;</button>
    </div>
  </div>
{/if}
