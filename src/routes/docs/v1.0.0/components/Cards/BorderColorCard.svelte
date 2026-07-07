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
<div class="card opacity-0" id="border-color" bind:this={cardEl}>
  <div class="header"  bind:this={header}><h4 class="h4">Border Color</h4></div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono"  bind:this={body}>
    <div class="w-full p-2 r-3 text-center border border">.border</div>
    <div class="w-full p-2 r-3 text-center border b-yellow">.b-yellow</div>
    <div class="w-full p-2 r-3 text-center border b-orange">.b-orange</div>
    <div class="w-full p-2 r-3 text-center border b-red">.b-red</div>
    <div class="w-full p-2 r-3 text-center border b-pink">.b-pink</div>
    <div class="w-full p-2 r-3 text-center border b-purple">.b-purple</div>
    <div class="w-full p-2 r-3 text-center border b-blue">.b-blue</div>
    <div class="w-full p-2 r-3 text-center border b-cyan">.b-cyan</div>
    <div class="w-full p-2 r-3 text-center border b-green">.b-green</div>
    <div class="w-full p-2 r-3 text-center border b-white">.b-white</div>
    <div class="w-full p-2 r-3 text-center border b-gray">.b-gray</div>
    <div class="w-full p-2 r-3 text-center border b-black">.b-black</div>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="border/border-color">&lt;code&gt;</button>
  </div>
</div>
{/if}