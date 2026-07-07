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
<div class="card opacity-0" id="border-width" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Border Width</h4></div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono fs-sm" bind:this={body}>
    <div class="w-full p-2 r-2 bg-subtle text-center b-0 b-accent">bw-0</div>
    <div class="w-full p-2 r-2 bg-subtle text-center b-1 b-accent">bw-1</div>
    <div class="w-full p-2 r-2 bg-subtle text-center b-2 b-accent">bw-2</div>
    <div class="w-full p-2 r-2 bg-subtle text-center b-3 b-accent">bw-3</div>
    <div class="w-full p-2 r-2 bg-subtle text-center b-3px b-accent">bw-3px</div>
    <div class="w-full p-2 r-4 bg-subtle text-center b-0.5em b-accent">bw-0.5rem</div>
    <div class="w-full p-2 r-4 bg-subtle text-center b-1/2em b-accent">bw-1/2em</div>
    
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="border/border-width">&lt;code&gt;</button>
  </div>
</div>
{/if}
