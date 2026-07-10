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
<div class="card opacity-0" id="outline-color" bind:this={cardEl}>
  <div class="header"  bind:this={header}><h4 class="h4">Outline Color</h4></div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono"  bind:this={body}>
    <div class="w-full p-2 r-3 text-center ol-1 outline">.outline</div>
    <div class="w-full p-2 r-3 text-center ol-1 ol-solid ol-yellow">.ol-yellow</div>
    <div class="w-full p-2 r-3 text-center ol-1 ol-solid ol-orange">.ol-orange</div>
    <div class="w-full p-2 r-3 text-center ol-1 ol-solid ol-red">.ol-red</div>
    <div class="w-full p-2 r-3 text-center ol-1 ol-solid ol-pink">.ol-pink</div>
    <div class="w-full p-2 r-3 text-center ol-1 ol-solid ol-purple">.ol-purple</div>
    <div class="w-full p-2 r-3 text-center ol-1 ol-solid ol-blue">.ol-blue</div>
    <div class="w-full p-2 r-3 text-center ol-1 ol-solid ol-cyan">.ol-cyan</div>
    <div class="w-full p-2 r-3 text-center ol-1 ol-solid ol-green">.ol-green</div>
    <div class="w-full p-2 r-3 text-center ol-1 ol-solid ol-white">.ol-white</div>
    <div class="w-full p-2 r-3 text-center ol-1 ol-solid ol-gray">.ol-gray</div>
    <div class="w-full p-2 r-3 text-center ol-1 ol-solid ol-black">.ol-black</div>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="interactivity/outline-color">&lt;code&gt;</button>
  </div>
</div>
{/if}