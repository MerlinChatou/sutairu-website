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
  <div class="card opacity-0" id="grid" bind:this={cardEl}>
    <div class="header" bind:this={header}><h4 class="h4">Grid</h4></div>
    <div class="body p-4 d-flex fd-col gap-4 ff-mono text-white" bind:this={body}>
      <div class="grid-x gap-3 hatching-gray/20 b-1 b-gray/20 r-2">
        <div class="align-cc min-h-12 bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
        <div class="align-cc min-h-12 bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
        <div class="align-cc min-h-12 bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
      </div>

      <div class="d-grid grid-cols-4 jc-center gap-3 hatching-gray/20 b-1 b-gray/20 r-2">
        <div class="align-cc min-h-12  bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
        <div class="align-cc min-h-12  bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
        <div class="align-cc min-h-12  bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
        <div class="align-cc min-h-12  bg-accent bg-400 dark:bg-700 r-2 p-2">04</div>
        <div class="align-cc min-h-12  bg-accent bg-400 dark:bg-700 r-2 p-2">05</div>
        <div class="align-cc min-h-12  gc-span-2 bg-green bg-400 dark:bg-700 r-2 p-2">06</div>
        <div class="align-cc min-h-12  bg-accent bg-400 dark:bg-700 r-2 p-2">07</div>
        <div class="align-cc min-h-12  bg-accent bg-400 dark:bg-700 r-2 p-2">08</div>
        <div class="align-cc min-h-12  bg-accent bg-400 dark:bg-700 r-2 p-2">09</div>
      </div>

      <div class="grid-x grid-cols-3 grid-rows-3 jc-center gap-3 hatching-gray/20 b-1 b-gray/20 r-2">
        <div class="align-cc min-h-12 bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
        <div class="align-cc min-h-12 gr-span-2 bg-gray bg-400 dark:bg-700 r-2 p-2">02</div>
        <div class="align-cc min-h-12 bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
        <div class="align-cc min-h-12 gc-span-2 bg-green bg-400 dark:bg-700 r-2 p-2">04</div>
        <div class="align-cc min-h-12 bg-accent bg-400 dark:bg-700 r-2 p-2">05</div>
        <div class="align-cc min-h-12 bg-accent bg-400 dark:bg-700 r-2 p-2">06</div>
        <div class="align-cc min-h-12 bg-accent bg-400 dark:bg-700 r-2 p-2">07</div>        
      </div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="layout/grid">&lt;code&gt;</button>
    </div>
  </div>
{/if}
