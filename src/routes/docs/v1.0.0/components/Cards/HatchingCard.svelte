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
<div class="card opacity-0" id="hatching" bind:this={cardEl}>
  <div class="header d-flex jc-between ai-center" bind:this={header}>
    <h4 class="h4">Hatching</h4>
    <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
  </div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono" bind:this={body}>
    <div class="w-full p-2 r-2 text-center hatching-yellow-300/80 b-1 b-yellow/30">.bg-hatching.fg-yellow</div>
    <div class="w-full p-2 r-2 text-center hatching-orange-300/80 b-1 b-orange/30">.bg-hatching.fg-orange</div>
    <div class="w-full p-2 r-2 text-center hatching-red-300/80 b-1 b-red/30">.bg-hatching.fg-red</div>
    <div class="w-full p-2 r-2 text-center hatching-pink-300/80 b-1 b-pink/30">.bg-hatching.fg-pink</div>
    <div class="w-full p-2 r-2 text-center hatching-purple-300/80 b-1 b-purple/30">.bg-hatching.fg-purple</div>
    <div class="w-full p-2 r-2 text-center hatching-blue-300/80 b-1 b-blue/30">.bg-hatching.fg-blue</div>
    <div class="w-full p-2 r-2 text-center hatching-cyan-300/80 b-1 b-cyan/30">.bg-hatching.fg-cyan</div>
    <div class="w-full p-2 r-2 text-center hatching-green-300/80 b-1 b-green/30">.bg-hatching.fg-green</div>
    <div class="w-full p-2 r-2 text-center hatching-white-300/80 b-1 b-white/30">.bg-hatching.fg-white</div>
    <div class="w-full p-2 r-2 text-center hatching-gray-300/80 b-1 b-gray/30">.bg-hatching.fg-gray</div>
    <div class="w-full p-2 r-2 text-center hatching-black-300/80 b-1 b-black/30">.bg-hatching.fg-black</div>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="extras/hatching">&lt;code&gt;</button>
  </div>
</div>



{/if}
