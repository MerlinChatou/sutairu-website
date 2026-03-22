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
<div class="card opacity-0" id="background-shade-modifier" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Background Shade Modifier</h4></div>
  <div class="body p-3 d-flex fd-col gap-2 text-white text-center ff-mono" bind:this={body}>
    <div class="w-full bg-50 hover:bg-100 p-2 r-2 bg-accent text-black">bg-50</div>
    <div class="w-full bg-100 hover:bg-200 p-2 r-2 bg-accent text-black">bg-100</div>
    <div class="w-full bg-200 hover:bg-300 p-2 r-2 bg-accent text-black">bg-200</div>
    <div class="w-full bg-300 hover:bg-400 p-2 r-2 bg-accent text-black">bg-300</div>
    <div class="w-full bg-400 hover:bg-500 p-2 r-2 bg-accent text-black">bg-400</div>
    <div class="w-full bg-500 hover:bg-600 p-2 r-2 bg-accent text-black">bg-500</div>
    <div class="w-full bg-600 hover:bg-500 p-2 r-2 bg-accent">bg-600</div>
    <div class="w-full bg-700 hover:bg-600 p-2 r-2 bg-accent">bg-700</div>
    <div class="w-full bg-800 hover:bg-700 p-2 r-2 bg-accent">bg-800</div>
    <div class="w-full bg-900 hover:bg-800 p-2 r-2 bg-accent">bg-900</div>
    <div class="w-full bg-950 hover:bg-900 p-2 r-2 bg-accent">bg-950</div>
  </div>
  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="core/background-shade">&lt;code&gt;</button>
  </div>
</div>
{/if}