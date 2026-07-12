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
<div class="card opacity-0" id="border-style" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Border Style</h4></div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono fs-sm" bind:this={body}>
    <div class="w-full p-2 r-2 bg-subtle text-center b-2 b-accent b-none">b-none</div>
    <div class="w-full p-2 r-2 bg-subtle text-center b-2 b-accent b-dotted">b-dotted</div>
    <div class="w-full p-2 r-2 bg-subtle text-center b-2 b-accent b-dashed">b-dashed</div>
    <div class="w-full p-2 r-2 bg-subtle text-center b-2 b-accent b-solid">b-solid</div>
    <div class="w-full p-2 r-2 bg-subtle text-center b-8 b-accent b-double">b-double</div>
    <div class="w-full p-2 r-2 bg-subtle text-center b-8 b-accent b-groove">b-groove</div>
    <div class="w-full p-2 r-2 bg-subtle text-center b-8 b-accent b-ridge">b-ridge</div>
    <div class="w-full p-2 r-2 bg-subtle text-center b-8 b-accent b-inset">b-inset</div>
    <div class="w-full p-2 r-2 bg-subtle text-center b-8 b-accent b-outset">b-outset</div>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="border/border-style">&lt;code&gt;</button>
  </div>
</div>
{/if}
