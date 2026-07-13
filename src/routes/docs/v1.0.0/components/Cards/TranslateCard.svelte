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
  <div class="card opacity-0" id="translate" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Translate</h4>
      <div hidden>translating move transform</div>
    </div>
    <div class="body flex-y p-3 text-center gap-6 ai-center" bind:this={body}>
      <div class="stack w-100px ar-1 fs-2xl text-white ff-mono group">
        <div class="w-80px r-2 ar-1 align-cc bg-green/60">From</div>  
        <div class="w-80px r-2 ar-1 align-cc bg-blue/60 mv-x-10px mv-y-10px group-hover:mv-x-0 group-hover:mv-y-0 tr-transform-400">To</div>
      </div>

      <div class="stack w-100px ar-1 fs-2xl text-white ff-mono group">
        <div class="w-80px r-2 ar-1 align-cc bg-green/60">From</div>
        <div class="w-80px r-2 ar-1 align-cc bg-blue/60 -mv-x-60px -mv-y-20% group-hover:mv-x-0 group-hover:mv-y-0 tr-transform-400">To</div>  
      </div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="transform/translate">&lt;code&gt;</button>
    </div>
  </div>
{/if}
