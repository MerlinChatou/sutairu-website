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
<div class="card" id="interactive-background" transition:fade={{ duration: 250 }} bind:this={cardEl}>
  <div class="header" bind:this={header}>
    <h4 class="h4">Interactive Background</h4>
  </div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono" bind:this={body}>
    <button class="btn w-full p-2 r-2 text-center border bg-gray hover:bg-accent">.hover:bg-accent</button>
    <button class="btn w-full p-2 r-2 text-center border bg-gray focus:bg-accent">.focus:bg-accent</button>
    <button class="btn w-full p-2 r-2 text-center border bg-gray active:bg-accent">.active:bg-accent</button>
    <button class="btn w-full p-2 r-2 text-center border bg-accent disabled:bg-gray" disabled>.disabled:bg-gray</button>

    <button class="btn w-full p-2 r-2 text-center border bg-accent hover:bg-opacity-30">.hover:bg-opacity-30</button>
    <button class="btn w-full p-2 r-2 text-center border bg-accent focus:bg-200">.focus:bg-200</button>
    <button class="btn w-full p-2 r-2 text-center border bg-accent active:bg-750">.active:bg-750</button>
    <button class="btn w-full p-2 r-2 text-center border bg-accent bg-accent disabled:bg-300" disabled>.disabled:bg-300</button>
  </div>
  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="core/background">&lt;code&gt;</button>
  </div>
</div>
{/if}
