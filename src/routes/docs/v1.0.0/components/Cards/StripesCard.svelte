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
<div class="card opacity-0" id="stripes-background" bind:this={cardEl}>
  <div class="header d-flex jc-between ai-center" bind:this={header}>
    <h4 class="h4">Stripes background</h4>
    <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
  </div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono" bind:this={body}>
    <div class="w-full p-2 r-2 text-center bg-stripes bg-200 fg-300 dark:bg-900 dark:fg-800 fg-yellow bg-yellow text-black dark:text-white">.bg-stripes.bg-yellow</div>
    <div class="w-full p-2 r-2 text-center bg-stripes bg-200 fg-300 dark:bg-900 dark:fg-800 fg-orange bg-orange text-black dark:text-white">.bg-stripes.bg-orange</div>
    <div class="w-full p-2 r-2 text-center bg-stripes bg-200 fg-300 dark:bg-900 dark:fg-800 fg-red bg-red text-black dark:text-white">.bg-stripes.bg-red</div>
    <div class="w-full p-2 r-2 text-center bg-stripes bg-200 fg-300 dark:bg-900 dark:fg-800 fg-pink bg-pink text-black dark:text-white">.bg-stripes.bg-pink</div>
    <div class="w-full p-2 r-2 text-center bg-stripes bg-200 fg-300 dark:bg-900 dark:fg-800 fg-purple bg-purple text-black dark:text-white">.bg-stripes.bg-purple</div>
    <div class="w-full p-2 r-2 text-center bg-stripes bg-200 fg-300 dark:bg-900 dark:fg-800 fg-blue bg-blue text-black dark:text-white">.bg-stripes.bg-blue</div>
    <div class="w-full p-2 r-2 text-center bg-stripes bg-200 fg-300 dark:bg-900 dark:fg-800 fg-cyan bg-cyan text-black dark:text-white">.bg-stripes.bg-cyan</div>
    <div class="w-full p-2 r-2 text-center bg-stripes bg-200 fg-300 dark:bg-900 dark:fg-800 fg-green bg-green text-black dark:text-white">.bg-stripes.bg-green</div>
    <div class="w-full p-2 r-2 text-center bg-stripes bg-50 fg-500 dark:bg-900 dark:fg-800 fg-white bg-white text-black dark:text-white">.bg-stripes.bg-white</div>
    <div class="w-full p-2 r-2 text-center bg-stripes bg-200 fg-300 dark:bg-900 dark:fg-800 fg-gray bg-gray text-black dark:text-white">.bg-stripes.bg-gray</div>
    <div class="w-full p-2 r-2 text-center bg-stripes bg-200 fg-300 dark:bg-900 dark:fg-600 fg-black bg-black text-black dark:text-white">.bg-stripes.bg-black</div>
    <div class="w-full p-2 r-2 text-center bg-stripes fg-700 dark:fg-800 fg-yellow bg-black text-white dark:text-white">custom</div>
  </div>
  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="extras/stripes">&lt;code&gt;</button>
  </div>
</div>



{/if}
