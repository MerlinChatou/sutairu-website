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
<div class="card" id="text-colors" transition:fade={{ duration: 250 }} bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Text Colors</h4></div>
  <div class="body p-3 d-flex fd-col gap-3 ff-mono text-center" bind:this={body}>
    <div class="w-full r-2 text-yellow">text-yellow</div>
    <div class="w-full r-2 text-orange">text-orange</div>
    <div class="w-full r-2 text-pink">text-pink</div>
    <div class="w-full r-2 text-purple">text-purple</div>
    <div class="w-full r-2 text-blue">text-blue</div>
    <div class="w-full r-2 text-cyan">text-cyan</div>
    <div class="w-full r-2 text-green">text-green</div>
    <div class="w-full r-2 text-white">text-white</div>
    <div class="w-full r-2 text-gray">text-gray</div>
    <div class="w-full r-2 text-black">text-black</div>
  </div>
  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="core/text-color">&lt;code&gt;</button>
  </div>
</div>
{/if}
