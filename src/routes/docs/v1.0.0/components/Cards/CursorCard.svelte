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
<div class="card opacity-0" id="cursor" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Cursor</h4></div>
  <div class="body p-4 d-flex fd-col gap-2 ff-mono" bind:this={body}>
    <div class="bg-subtle p-3 r-2 text-center cur-pointer">cur-pointer</div>
    <div class="bg-subtle p-3 r-2 text-center cur-wait">cur-wait</div>
    <div class="bg-subtle p-3 r-2 text-center cur-text">cur-text</div>
    <div class="bg-subtle p-3 r-2 text-center cur-help">cur-help</div>
    <div class="bg-subtle p-3 r-2 text-center cur-crosshair">cur-crosshair</div>
    <div class="bg-subtle p-3 r-2 text-center cur-not-allowed">cur-not-allowed</div>
    <div class="bg-subtle p-3 r-2 text-center cur-zoom-in">cur-zoom-in</div>
    <div class="bg-subtle p-3 r-2 text-center cur-zoom-out">cur-zoom-out</div>
    <div class="bg-subtle p-3 r-2 text-center cur-grab">cur-grab</div>
    <div class="bg-subtle p-3 r-2 text-center cur-grabbing">cur-grabbing</div>
    <div class="bg-subtle p-3 r-2 text-center cur-progress">cur-progress</div>
    <div class="bg-subtle p-3 r-2 text-center cur-default">cur-default</div>
    <div class="bg-subtle p-3 r-2 text-center cur-auto">cur-auto</div>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="core/cursor">&lt;code&gt;</button>
  </div>
</div>
{/if}
