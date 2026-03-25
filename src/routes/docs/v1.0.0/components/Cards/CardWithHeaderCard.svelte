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
<div class="card opacity-0" id="card-with-header" bind:this={cardEl}>
  <div class="header d-flex jc-between ai-center"  bind:this={header}>
    <h4 class="h4">Card with Headers</h4>
    <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
  </div>

  <div class="body" bind:this={body}>Example of card with several <b>headers</b>.</div>
  <div class="header">
    <h4 class="h4">Another Header</h4>
  </div>

  <div class="body">
    You can insert multiple <b>headers</b> in a single card.
  </div>

  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="extras/card">&lt;code&gt;</button>
  </div>
</div>
{/if}
