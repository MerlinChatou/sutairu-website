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
<div class="card opacity-0" id="dotted-grid" bind:this={cardEl}>
  <div class="header d-flex jc-between ai-center" bind:this={header}>
    <h4 class="h4">Dotted Grid</h4>
    <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
  </div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono" bind:this={body}>
    <div class="w-full p-2 r-2 text-center dotted-yellow-300 dark:dotted-yellow-300 b-1 b-yellow/50 ">.bg-dotted.fg-yellow</div>
    <div class="w-full p-2 r-2 text-center dotted-orange-300 dark:dotted-orange-300 b-1 b-orange/50 ">.bg-dotted.fg-orange</div>
    <div class="w-full p-2 r-2 text-center dotted-red-300 dark:dotted-red-300 b-1 b-red/50 ">.bg-dotted.fg-red</div>
    <div class="w-full p-2 r-2 text-center dotted-pink-300 dark:dotted-pink-300 b-1 b-pink/50 ">.bg-dotted.fg-pink</div>
    <div class="w-full p-2 r-2 text-center dotted-purple-300 dark:dotted-purple-300 b-1 b-purple/50 ">.bg-dotted.fg-purple</div>
    <div class="w-full p-2 r-2 text-center dotted-blue-300 dark:dotted-blue-300 b-1 b-blue/50 ">.bg-dotted.fg-blue</div>
    <div class="w-full p-2 r-2 text-center dotted-cyan-300 dark:dotted-cyan-300 b-1 b-cyan/50 ">.bg-dotted.fg-cyan</div>
    <div class="w-full p-2 r-2 text-center dotted-green-300 dark:dotted-green-300 b-1 b-green/50 ">.bg-dotted.fg-green</div>
    <div class="w-full p-2 r-2 text-center dotted-white-300 dark:dotted-white-300 b-1 b-white/50 ">.bg-dotted.fg-white</div>
    <div class="w-full p-2 r-2 text-center dotted-gray-300 dark:dotted-gray-300 b-1 b-gray/50 ">.bg-dotted.fg-gray</div>
    <div class="w-full p-2 r-2 text-center dotted-black-300 dark:dotted-black-300 b-1 b-black/50 ">.bg-dotted.fg-black</div>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="extras/dotted">&lt;code&gt;</button>
  </div>
</div>



{/if}
