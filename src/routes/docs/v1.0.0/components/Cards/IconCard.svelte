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
  <div class="card opacity-0" id="icon" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Icons</h4>
      <div hidden>icon icons glyph symbol pictogram shape svg font-icon asset</div>
    </div>
    <div class="body grid-y grid-cols-4 gap-3 p-3 text-black-350 dark:text-white-600" bind:this={body}>
      <div class="bg-subtle r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-user-thin"></i></div>
      <div class="bg-subtle r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-user"></i></div>
      <div class="bg-subtle r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-user-wide"></i></div>
      <div class="bg-subtle r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-user-solid"></i></div>

      <div class="bg-subtle r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-apple"></i></div>
      <div class="bg-subtle r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-google"></i></div>
      <div class="bg-subtle r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-paypal"></i></div>
      <div class="bg-subtle r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-instagram"></i></div>

      <div class="bg-subtle r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in-solid"></i></div>
      <div class="bg-subtle r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in-solid rot-1/4"></i></div>
      <div class="bg-subtle r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in-solid rot-1/2"></i></div>
      <div class="bg-subtle r-4 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in-solid rot-3/4"></i></div>

      <div class="stack bg-subtle text-black r-4 ar-1 align-cc">
        <i class="h-80% w-80% text-green icon i-circle-solid"></i>
        <i class="h-80% w-80% text-white icon i-check"></i>
      </div>
      <div class="stack bg-subtle text-black r-4 ar-1 align-cc">
        <i class="h-80% w-80% text-red icon i-circle-solid"></i>
        <i class="h-80% w-80% text-white icon i-times-solid"></i>
      </div>
      <div class="stack bg-subtle text-black r-4 ar-1 align-cc">
        <i class="h-80% w-80% text-yellow-450 icon i-equilateral-solid"></i>
        <i class="h-80% w-80% text-orange-550 icon i-warning-solid"></i>
      </div>
      <div class="stack bg-subtle text-black r-4 ar-1 align-cc">
        <i class="h-80% w-80% text-blue icon i-car-front-small"></i>
        <i class="h-80% w-80% text-red icon i-circle-line-wide"></i>
      </div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary" data-open-modal="documentation-modal" data-documentation="components/loader">More</button>
    </div>
  </div>
{/if}
