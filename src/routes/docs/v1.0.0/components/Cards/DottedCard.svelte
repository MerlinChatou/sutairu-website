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
<div class="card" id="dotted-grid" transition:fade={{ duration: 250 }} bind:this={cardEl}>
  <div class="header d-flex jc-between ai-center" bind:this={header}>
    <h4 class="h4">Dotted Grid</h4>
    <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
  </div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono" bind:this={body}>
    <div class="w-full p-2 r-2 text-center bg-dotted b-opacity-50 b-yellow fg-300 dark:fg-800 fg-yellow ">.bg-dotted.fg-yellow</div>
    <div class="w-full p-2 r-2 text-center bg-dotted b-opacity-50 b-orange fg-300 dark:fg-800 fg-orange ">.bg-dotted.fg-orange</div>
    <div class="w-full p-2 r-2 text-center bg-dotted b-opacity-50 b-red fg-300 dark:fg-800 fg-red ">.bg-dotted.fg-red</div>
    <div class="w-full p-2 r-2 text-center bg-dotted b-opacity-50 b-pink fg-300 dark:fg-800 fg-pink ">.bg-dotted.fg-pink</div>
    <div class="w-full p-2 r-2 text-center bg-dotted b-opacity-50 b-purple fg-300 dark:fg-800 fg-purple ">.bg-dotted.fg-purple</div>
    <div class="w-full p-2 r-2 text-center bg-dotted b-opacity-50 b-blue fg-300 dark:fg-800 fg-blue ">.bg-dotted.fg-blue</div>
    <div class="w-full p-2 r-2 text-center bg-dotted b-opacity-50 b-cyan fg-300 dark:fg-800 fg-cyan ">.bg-dotted.fg-cyan</div>
    <div class="w-full p-2 r-2 text-center bg-dotted b-opacity-50 b-green fg-300 dark:fg-800 fg-green ">.bg-dotted.fg-green</div>
    <div class="w-full p-2 r-2 text-center bg-dotted b-opacity-50 b-white fg-300 dark:fg-800 fg-white ">.bg-dotted.fg-white</div>
    <div class="w-full p-2 r-2 text-center bg-dotted b-opacity-50 b-gray fg-200 dark:fg-800 fg-gray ">.bg-dotted.fg-gray</div>
    <div class="w-full p-2 r-2 text-center bg-dotted b-opacity-50 b-black fg-300 dark:fg-600 fg-black ">.bg-dotted.fg-black</div>
  </div>
  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="extras/dotted">&lt;code&gt;</button>
  </div>
</div>



{/if}
