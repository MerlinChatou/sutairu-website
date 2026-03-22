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
<div class="card opacity-0" id="border-opacity" bind:this={cardEl}>
  <div class="header d-flex jc-between ai-center" bind:this={header}>
    <h4 class="h4">Border Opacity</h4>
    <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
  </div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono" bind:this={body}>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent b-opacity-0">b-opacity-0</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent b-opacity-10">b-opacity-10</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent b-opacity-20">b-opacity-20</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent b-opacity-30">b-opacity-30</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent b-opacity-40">b-opacity-40</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent b-opacity-50">b-opacity-50</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent b-opacity-50">b-opacity-50</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent b-opacity-70">b-opacity-70</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent b-opacity-80">b-opacity-80</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent b-opacity-90">b-opacity-90</div>
    <div class="w-full p-2 r-3 bg-subtle text-center bw-2rem b-accent b-opacity-100">b-opacity-100</div>
  </div>
  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="extras/border-opacity">&lt;code&gt;</button>
  </div>
</div>
{/if}