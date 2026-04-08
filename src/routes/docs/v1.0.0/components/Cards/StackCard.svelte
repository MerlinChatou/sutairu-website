<script>
  // import "@merlin-chatou/sutairu-extras/typography/style";
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
    rawText = (header.innerText + " " + body.innerText).toLocaleLowerCase();
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
  <div class="card opacity-1" id="extended-typography" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Stack</h4>
    </div>

    <div class="body p-0 stack overflow-hidden" bind:this={body}>
      <img src="/images/vertical-landscape.jpg" class="w-full h-full object-cover ar-1" alt="Mountains" />
      <div class="stripes-accent/60 w-full h-full"></div>
      <div class="text-white fs-2.5rem fw-900">Stacked Items</div>
    </div>

    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="layout/stack">&lt;code&gt;</button>
    </div>
  </div>
{/if}
