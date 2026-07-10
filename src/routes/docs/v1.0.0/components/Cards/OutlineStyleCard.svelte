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
<div class="card opacity-0" id="outline-style" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Outline Style</h4></div>
  <div class="body p-3 d-flex fd-col gap-3 ff-mono fs-sm" bind:this={body}>
    <div class="w-full p-2 r-2 bg-subtle text-center ol-2 ol-accent ol-none">b-none</div>
    <div class="w-full p-2 r-2 bg-subtle text-center ol-2 ol-accent ol-dotted">b-dotted</div>
    <div class="w-full p-2 r-2 bg-subtle text-center ol-2 ol-accent ol-dashed">b-dashed</div>
    <div class="w-full p-2 r-2 bg-subtle text-center ol-2 ol-accent ol-solid">b-solid</div>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="interactivity/outline-style">&lt;code&gt;</button>
  </div>
</div>
{/if}
