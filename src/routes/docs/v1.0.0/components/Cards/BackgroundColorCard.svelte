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
<div class="card opacity-0" id="background-color" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Background Color</h4></div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono text-white" bind:this={body}>
    <div class="w-full p-2 r-2 text-center bg-yellow text-black">bg-yellow</div>
    <div class="w-full p-2 r-2 text-center bg-orange">bg-orange</div>
    <div class="w-full p-2 r-2 text-center bg-red">bg-red</div>
    <div class="w-full p-2 r-2 text-center bg-pink">bg-pink</div>
    <div class="w-full p-2 r-2 text-center bg-purple">bg-purple</div>
    <div class="w-full p-2 r-2 text-center bg-blue">bg-blue</div>
    <div class="w-full p-2 r-2 text-center bg-cyan">bg-cyan</div>
    <div class="w-full p-2 r-2 text-center bg-green">bg-green</div>
    <div class="w-full p-2 r-2 text-center bg-white text-black">bg-white</div>
    <div class="w-full p-2 r-2 text-center bg-gray">bg-gray</div>
    <div class="w-full p-2 r-2 text-center bg-black">bg-black</div>
  </div>
  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="core/background">&lt;code&gt;</button>
  </div>
</div>
{/if}