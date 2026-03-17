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
<div class="card" id="text-color-on-hover" transition:fade={{ duration: 250 }} bind:this={cardEl}>
  <div class="header d-flex jc-between ai-center" bind:this={header}>
    <h4 class="h4">Interactive Text</h4>
  </div>
  <div class="body p-3 d-flex fd-col gap-2 ff-mono text-body" bind:this={body}>
    <button class="btn w-full p-2 r-2 text-center border bg-opacity-0 hover:text-accent">.hover:text-accent</button>
    <button class="btn w-full p-2 r-2 text-center border bg-opacity-0 focus:text-accent">.focus:text-accent</button>
    <button class="btn w-full p-2 r-2 text-center border bg-opacity-0 focus-visible:text-accent">.focus-visible:text-accent</button>
    <button class="btn w-full p-2 r-2 text-center border bg-opacity-0 active:text-accent">.active:text-accent</button>
    <button class="btn w-full p-2 r-2 text-center border disabled:bg-opacity-10 disabled:border disabled:text-accent" disabled>.disabled:text-accent</button>

    <button class="btn w-full p-2 r-2 text-center border bg-opacity-0 text-accent hover:text-400">.hover:text-400</button>
    <button class="btn w-full p-2 r-2 text-center border bg-opacity-0 text-accent focus:text-700">.focus:text-700</button>
    <button class="btn w-full p-2 r-2 text-center border bg-opacity-0 text-accent focus-visible:text-300">.focus-visible:text-300</button>
    <button class="btn w-full p-2 r-2 text-center border bg-opacity-0 text-accent active:text-350">.active:text-350</button>
    <button class="btn w-full p-2 r-2 text-center border disabled:bg-opacity-10 disabled:border  disabled:text-accent disabled:text-opacity-40" disabled>.disabled:text-opacity-40</button>
  </div>  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="core/text-color">&lt;code&gt;</button>
  </div>
</div>
{/if}
