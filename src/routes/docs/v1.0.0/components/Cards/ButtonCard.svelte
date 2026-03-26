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
<div class="card opacity-0" id="buttons"  bind:this={cardEl}>
  <div class="header d-flex jc-between ai-center" bind:this={header}>
    <h4 class="h4">Buttons</h4>
  </div>
  <div class="body p-4 flex-y gap-3 ff-mono" bind:this={body}>
    <button class="btn btn-primary">btn-primary</button>
    <button class="btn btn-secondary">btn-secondary</button>
    <button class="btn btn-success">btn-success</button>
    <button class="btn btn-danger">btn-danger</button>
    <button class="btn btn-warning">btn-warning</button>
    <button class="btn btn-info">btn-info</button>
    <button class="btn btn-neutral">btn-neutral</button>
    <button class="btn btn-dark">btn-dark</button>
    
    <button class="btn btn-link">btn-link</button>
    <button class="btn btn-link td-underline">btn-link</button>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="extras/button">&lt;code&gt;</button>
  </div>
</div>
{/if}
