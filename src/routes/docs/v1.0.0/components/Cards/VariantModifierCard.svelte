<script>
  import { onMount } from "svelte";
  import { searchState } from "../../state/search.svelte.js";
  import { containsAllSubstrings } from "#lib/utils/containAllSubstring.js";
  
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
<div class="card opacity-0" id="variant-modifier" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Variant Modifier</h4></div>

  <div class="body d-flex fd-col gap-2 p-4 text-center ff-mono" bind:this={body}>
    <div class="p-2 r-2 bg-gray sm:bg-accent text-white">sm:bg-accent</div>
    <div class="p-2 r-2 bg-gray md:bg-accent text-white">md:bg-accent</div>
    <div class="p-2 r-2 bg-gray lg:bg-accent text-white">lg:bg-accent</div>
    <div class="p-2 r-2 bg-gray xl:bg-accent text-white">xl:bg-accent</div>
    <div class="p-2 r-2 bg-gray xxl:bg-accent text-white">xxl:bg-accent</div>
    <div class="p-2 r-2 bg-gray is-odd:bg-green is-even:bg-blue text-white">is-even:bg-blue</div>
    <div class="p-2 r-2 bg-gray is-odd:bg-green is-even:bg-blue text-white">is-odd:bg-green</div>
    <div class="p-2 r-2 bg-gray hover:bg-pink text-white">hover:bg-pink</div>

  </div>

  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="core/variant-modifier">&lt;code&gt;</button>
  </div>
</div>
{/if}
