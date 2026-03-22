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
<div class="card opacity-0" id="border-shade-modifier" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Border Shade Modifier</h4></div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono" bind:this={body}>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent-50">b-accent-50</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent-100">b-accent-100</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent-200">b-accent-200</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent-300">b-accent-300</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent-400">b-accent-400</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent-500">b-accent-500</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent-500">b-accent-600</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent-700">b-accent-700</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent-800">b-accent-800</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent-900">b-accent-900</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent-950">b-accent-950</div>
  </div>
  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="core/border-shade">&lt;code&gt;</button>
  </div>
</div>
{/if}