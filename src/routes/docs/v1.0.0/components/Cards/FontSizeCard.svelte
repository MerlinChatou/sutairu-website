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
<div class="card opacity-0" id="font-size" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Font Size</h4></div>
  <div class="body d-grid grid-cols-auto-fr gap-4 text-center ai-center" bind:this={body}>

    <div><code>fs-xs</code></div>
    <div class="fs-xs">Extra-small</div>

    <div><code>fs-sm</code></div>
    <div class="fs-sm">Small</div>

    <div><code>fs-md</code></div>
    <div class="fs-md">Medium</div>

    <div><code>fs-lg</code></div>
    <div class="fs-lg">Large</div>

    <div><code>fs-xl</code></div>
    <div class="fs-xl">Extra-large</div>

    <div><code>fs-2xl</code></div>
    <div class="fs-2xl">2x Extra-large</div>

    <div><code>fs-3xl</code></div>
    <div class="fs-3xl">3x Extra-large</div>

    <div><code>fs-4xl</code></div>
    <div class="fs-4xl">4x Extra-large</div>

  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="core/font-size">&lt;code&gt;</button>
  </div>
</div>
{/if}
