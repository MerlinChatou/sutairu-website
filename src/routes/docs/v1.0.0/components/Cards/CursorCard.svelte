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
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-pointer">cur-pointer</button>
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-wait">cur-wait</button>
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-text">cur-text</button>
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-help">cur-help</button>
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-crosshair">cur-crosshair</button>
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-not-allowed">cur-not-allowed</button>
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-zoom-in">cur-zoom-in</button>
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-zoom-out">cur-zoom-out</button>
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-grab">cur-grab</button>
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-grabbing">cur-grabbing</button>
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-progress">cur-progress</button>
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-default">cur-default</button>
    <button class="w-full p-2 r-3 text-center bg-subtle b-accent cur-auto">cur-auto</button>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="core/cursor">&lt;code&gt;</button>
  </div>
</div>
{/if}
