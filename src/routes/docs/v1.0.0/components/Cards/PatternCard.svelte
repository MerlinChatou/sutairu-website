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
  <div class="card opacity-1" id="dotted-grid" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Patterns</h4>
      <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
    </div>
    <div class="body p-3 d-flex fd-col gap-2 ff-mono text-center" bind:this={body}>
      <div class="w-full p-3 r-2 stripes-accent-300 bg-accent-200 dark:stripes-accent-700 dark:bg-accent-650">.stripes-accent</div>
      <div class="w-full p-3 r-2 stripes-accent-300 bg-accent-200 dark:stripes-accent-700 dark:bg-accent-650 pa-20deg">.pattern-angle-20deg</div>
      <div class="w-full p-3 r-2 dotted-pink/50 b-1 b-pink/50">.dotted-pink</div>
      <div class="w-full p-3 r-2 dotted-pink/50 b-1 b-pink/50 pp-5px">.pattern-period-5px</div>
      <div class="w-full p-3 r-2 hatching-purple-300/40 b-1 b-purple-300/40">.hatching-purple</div>
      <div class="w-full p-3 r-2 hatching-purple-300/40 b-1 b-purple-300/40 pw-3px">.pattern-width-3px</div>
      
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="background/patterns">&lt;code&gt;</button>
    </div>
  </div>
{/if}
