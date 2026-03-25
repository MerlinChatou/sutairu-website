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
<div class="card opacity-0" id="font-weight" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Font Weight</h4></div>
  <div class="body d-grid grid-cols-auto-fr gap-4 text-center ai-center" bind:this={body}>
    <div><code>fw-thin</code></div>
    <div class="fw-thin">Thin</div>

    <div><code>fw-extra-light</code></div>
    <div class="fw-extra-light">Extra-light</div>

    <div><code>fw-light</code></div>
    <div class="fw-light">Light</div>

    <div><code>fw-normal</code></div>
    <div class="fw-normal">Normal</div>

    <div><code>fw-medium</code></div>
    <div class="fw-medium">Medium</div>

    <div><code>fw-semibold</code></div>
    <div class="fw-semibold">Semi-bold</div>

    <div><code>fw-bold</code></div>
    <div class="fw-bold">Bold</div>

    <div><code>fw-extra-bold</code></div>
    <div class="fw-extra-bold">Extra-bold</div>

    <div><code>fw-black</code></div>
    <div class="fw-black">Black</div>
  </div>
    <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="core/font-weight">&lt;code&gt;</button>
  </div>
</div>
{/if}
