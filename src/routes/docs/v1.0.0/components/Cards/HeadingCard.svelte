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
<div class="card" id="heading" transition:fade={{ duration: 250 }} bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Heading</h4></div>
  <div class="body p-3 d-flex fd-col gap-2" bind:this={body}>
    <h1 class="h1">Heading 1</h1>
    <h2 class="h2">Heading 2</h2>
    <h3 class="h3">Heading 3</h3>
    <h4 class="h4">Heading 4</h4>
    <h5 class="h5">Heading 5</h5>
    <h6 class="h6">Heading 6</h6>
  </div>
  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="core/heading">&lt;code&gt;</button>
  </div>
</div>
{/if}
