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
    <div class="body p-3 d-flex fd-col gap-2 ff-mono text-black dark:text-white text-center" bind:this={body}>
      <div class="w-full p-2 r-2 stripes-yellow-300 dark:stripes-yellow-800 bg-yellow-200 dark:bg-yellow-900">.bg-stripes.bg-yellow</div>
      <div class="w-full p-2 r-2 stripes-orange-300 dark:stripes-orange-800 bg-orange-200 dark:bg-orange-900">.bg-stripes.bg-orange</div>
      <div class="w-full p-2 r-2 stripes-red-300 dark:stripes-red-800 bg-red-200 dark:bg-red-900">.bg-stripes.bg-red</div>
      <div class="w-full p-2 r-2 stripes-pink-300 dark:stripes-pink-800 bg-pink-200 dark:bg-pink-900">.bg-stripes.bg-pink</div>
      <div class="w-full p-2 r-2 stripes-purple-300 dark:stripes-purple-800 bg-purple-200 dark:bg-purple-900">.bg-stripes.bg-purple</div>
      <div class="w-full p-2 r-2 stripes-blue-300 dark:stripes-blue-800 bg-blue-200 dark:bg-blue-900">.bg-stripes.bg-blue</div>
      <div class="w-full p-2 r-2 stripes-cyan-300 dark:stripes-cyan-800 bg-cyan-200 dark:bg-cyan-900">.bg-stripes.bg-cyan</div>
      <div class="w-full p-2 r-2 stripes-green-300 dark:stripes-green-800 bg-green-200 dark:bg-green-900">.bg-stripes.bg-green</div>
      <div class="w-full p-2 r-2 stripes-white-300 dark:stripes-white-800 bg-white-200 dark:bg-white-900">.bg-stripes.bg-white</div>
      <div class="w-full p-2 r-2 stripes-gray-300 dark:stripes-gray-800 bg-gray-200 dark:bg-gray-900">.bg-stripes.bg-gray</div>
      <div class="w-full p-2 r-2 stripes-black-300 dark:stripes-black-800 bg-black-200 dark:bg-black-900">.bg-stripes.bg-black</div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="extras/stripes">&lt;code&gt;</button>
    </div>
  </div>
{/if}
