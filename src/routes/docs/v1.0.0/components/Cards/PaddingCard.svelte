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
<div class="card opacity-0" id="paddings" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Paddings</h4></div>
  <div class="body d-flex fd-col gap-2 text-center ai-center ff-mono text-black dark:text-white" bind:this={body}>
    <div class="p-0 b-accent b-opacity-50 r-2 w-fit bg-stripes text-body bg-accent bg-200 fg-accent fg-opacity-20 bg-opacity-20">p-0</div>
    <div class="p-1 b-accent b-opacity-50 r-2 w-fit bg-stripes text-body bg-accent bg-200 fg-accent fg-opacity-20 bg-opacity-20">p-1</div>
    <div class="p-2 b-accent b-opacity-50 r-2 w-fit bg-stripes text-body bg-accent bg-200 fg-accent fg-opacity-20 bg-opacity-20">p-2</div>
    <div class="p-3 b-accent b-opacity-50 r-2 w-fit bg-stripes text-body bg-accent bg-200 fg-accent fg-opacity-20 bg-opacity-20">p-3</div>
    <div class="p-4 b-accent b-opacity-50 r-2 w-fit bg-stripes text-body bg-accent bg-200 fg-accent fg-opacity-20 bg-opacity-20">p-4</div>
    <div class="p-5 b-accent b-opacity-50 r-2 w-fit bg-stripes text-body bg-accent bg-200 fg-accent fg-opacity-20 bg-opacity-20">p-5</div>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="core/padding">&lt;code&gt;</button>
  </div>
</div>
{/if}
