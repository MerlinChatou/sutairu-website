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
  <div class="card opacity-0" id="buttons" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Buttons</h4>
    </div>
    <div class="body p-4 v-flex gap-2 ff-mono" bind:this={body}>
      <button class="btn-primary">btn-primary</button>
      <button class="btn-primary" disabled>disabled</button>
      <button class="btn-outline-primary">btn-outline-primary</button>      
      <button class="btn-outline-primary" disabled>disabled</button>     
       
      <button class="btn-secondary">btn-secondary</button>
      <button class="btn-outline-secondary">btn-outline-secondary</button>
      <button class="btn-success">btn-success</button>
      <button class="btn-outline-success">btn-outline-success</button>
      <button class="btn-danger">btn-danger</button>
      <button class="btn-outline-danger">btn-outline-danger</button>
      <button class="btn-warning">btn-warning</button>
      <button class="btn-outline-warning">btn-outline-warning</button>

    </div>
    <div class="footer text-right">
      <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="extras/button">&lt;code&gt;</button>
    </div>
  </div>
{/if}
