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
  <div class="card opacity-0" id="sizing" bind:this={cardEl}>
    <div class="header" bind:this={header}>
      <h4 class="h4">Sizing</h4>
      <div hidden>width height size</div>
    </div>
    <div class="body p-3 d-grid grid-cols-[max-content_1fr] ff-mono gap-2 text-center fs-sm" bind:this={body}>
      <span class="align-cr">.w-1</span>
      <div class="w-1 h-1rem bg-accent b-accent b-opacity-40 r-1"></div>
      <span class="align-cr">.w-2</span>
      <div class="w-2 h-1rem bg-accent b-accent b-opacity-40 r-1"></div>
      <span class="align-cr">.w-4</span>
      <div class="w-4 h-1rem bg-accent b-accent b-opacity-40 r-1"></div>
      <span class="align-cr">.w-8</span>
      <div class="w-8 h-1rem bg-accent b-accent b-opacity-40 r-1"></div>
      <span class="align-cr">.w-16</span>
      <div class="w-16 h-1rem bg-accent b-accent b-opacity-40 r-1"></div>
      <span class="align-cr">.w-32 .h-12</span>
      <div class="w-32 h-12 bg-accent b-accent b-opacity-40 r-1"></div>     
    </div>
    <div class="footer text-right ws-normal">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="layout/sizing">&lt;code&gt;</button>
    </div>
  </div>
{/if}
