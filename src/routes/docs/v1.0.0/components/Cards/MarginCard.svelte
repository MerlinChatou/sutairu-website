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
<div class="card" id="margins" transition:fade={{ duration: 250 }} bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Margins</h4></div>
  <div class="body d-flex fd-col gap-2 text-center ai-center text-white" bind:this={body}>
    <div class="r-2 w-fit">
      <div class="m-0 bg-accent p-1 w-fit h-fit b-accent b-opacity-50 r-1">m-0</div>
    </div>
    <div class="r-2 w-fit b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
      <div class="m-1 bg-accent p-1 w-fit r-1">m-1</div>
    </div>
    <div class="r-2 w-fit b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
      <div class="m-2 bg-accent p-1 w-fit r-1">m-2</div>
    </div>
    <div class="r-2 w-fit b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
      <div class="m-3 bg-accent p-1 r-1">m-3</div>
    </div>
    <div class="r-2 w-fit b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
      <div class="m-4 bg-accent p-1 r-1">m-4</div>
    </div>
    <div class="r-2 w-fit b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
      <div class="m-5 bg-accent p-1 r-1">m-5</div>
    </div>
  </div>
  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="core/margin">&lt;code&gt;</button>
  </div>
</div>
{/if}
