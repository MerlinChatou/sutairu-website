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
<div class="card opacity-0" id="background-opacity" bind:this={cardEl}>
    <div class="header" bind:this={header}><h4 class="h4">Background Opacity</h4></div>
    <div class="body p-3 d-flex fd-col gap-2 ff-mono"  bind:this={body}>
      <div class="w-full p-2 r-2 text-center bg-accent bg-opacity-0"> bg-opacity-0</div>
      <div class="w-full p-2 r-2 text-center bg-accent bg-opacity-10">bg-opacity-10</div>
      <div class="w-full p-2 r-2 text-center bg-accent bg-opacity-20">bg-opacity-20</div>
      <div class="w-full p-2 r-2 text-center bg-accent bg-opacity-30">bg-opacity-30</div>
      <div class="w-full p-2 r-2 text-center bg-accent bg-opacity-40">bg-opacity-40</div>
      <div class="w-full p-2 r-2 text-center bg-accent bg-opacity-50">bg-opacity-50</div>
      <div class="w-full p-2 r-2 text-center bg-accent bg-opacity-60">bg-opacity-60</div>
      <div class="w-full p-2 r-2 text-center bg-accent bg-opacity-70">bg-opacity-70</div>
      <div class="w-full p-2 r-2 text-center bg-accent bg-opacity-80">bg-opacity-80</div>
      <div class="w-full p-2 r-2 text-center bg-accent bg-opacity-90">bg-opacity-90</div>
      <div class="w-full p-2 r-2 text-center bg-accent bg-opacity-100">bg-opacity-100</div>
    </div>
      <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="core/background-opacity">&lt;code&gt;</button>
  </div>
  </div>{/if}