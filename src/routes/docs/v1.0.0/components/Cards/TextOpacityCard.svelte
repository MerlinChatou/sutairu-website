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
<div class="card opacity-0" id="text-opacity" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Text Opacity</h4></div>
  <div class="body p-3 d-flex fd-col gap-3 ff-mono fw-black text-center" bind:this={body}>
    <div class="w-full r-2 text-accent text-opacity-0">.text-opacity-0</div>
    <div class="w-full r-2 text-accent text-opacity-10">.text-opacity-10</div>
    <div class="w-full r-2 text-accent text-opacity-20">.text-opacity-20</div>
    <div class="w-full r-2 text-accent text-opacity-30">.text-opacity-30</div>
    <div class="w-full r-2 text-accent text-opacity-40">.text-opacity-40</div>
    <div class="w-full r-2 text-accent text-opacity-50">.text-opacity-50</div>
    <div class="w-full r-2 text-accent text-opacity-60">.text-opacity-60</div>
    <div class="w-full r-2 text-accent text-opacity-70">.text-opacity-70</div>
    <div class="w-full r-2 text-accent text-opacity-80">.text-opacity-80</div>
    <div class="w-full r-2 text-accent text-opacity-90">.text-opacity-90</div>
    <div class="w-full r-2 text-accent text-opacity-100">.text-opacity-100</div>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="core/text-opacity">&lt;code&gt;</button>
  </div>
</div>
{/if}
