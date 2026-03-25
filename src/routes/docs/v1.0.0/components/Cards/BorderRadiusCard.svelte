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
  <div class="card opacity-0" id="border-radius" bind:this={cardEl}>
    <div class="header" bind:this={header}><h4 class="h4">Border Radius</h4></div>
    <div class="body p-3 d-flex fd-col gap-2 ff-mono fs-sm" bind:this={body}>
    <div class="w-full p-1 r-0 bg-subtle text-center b-accent">r-0</div>
    <div class="w-full p-1 r-1 bg-subtle text-center b-accent">r-1</div>
    <div class="w-full p-1 r-2 bg-subtle text-center b-accent">r-2</div>
    <div class="w-full p-1 r-3 bg-subtle text-center b-accent">r-3</div>
    <div class="w-full p-1 r-4 bg-subtle text-center b-accent">r-4</div>
    <div class="w-full p-1 r-5 p-4 bg-subtle text-center b-accent v-flex jc-center">r-5</div>
    <div class="w-full p-1 r-6 p-5 bg-subtle text-center b-accent v-flex jc-center">r-6</div>
    <div class="w-full p-1 r-4 rr-0 bg-subtle text-center b-accent v-flex jc-center">r-4 rr-0</div>
    <div class="w-full p-1 r-4 rb-0 bg-subtle text-center b-accent v-flex jc-center">r-4 rb-0</div>    
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="core/border-radius">&lt;code&gt;</button>
    </div>
  </div>
{/if}
