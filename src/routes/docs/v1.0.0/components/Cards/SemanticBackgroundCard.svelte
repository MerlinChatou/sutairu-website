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
<div class="card opacity-0" id="semantic-backgrounds" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Semantic Backgrounds</h4></div>
  <div class="body p-3 d-flex fd-col gap-2" bind:this={body}>
    <div class="w-full ff-mono p-3 r-2 text-center bg-page">
      bg-page
      <div class="m-3 border p-3 r-2 text-center bg-container">
        bg-container
        <div class="m-3 p-3 border px-2 r-2 text-center bg-subtle">
          bg-subtle
          <div class="m-3 r-2 p-2 text-center bg-accent text-white">bg-accent</div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="core/background-color">&lt;code&gt;</button>
  </div>
</div>
{/if}
