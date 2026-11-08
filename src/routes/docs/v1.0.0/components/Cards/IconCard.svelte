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
    <div class="body grid-y grid-cols-5 gap-2 p-2 text-black-350 dark:text-white-600" bind:this={body}>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-three-bars-thin"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-three-bars"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-three-bars-wide"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-three-bars-solid"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-collapse-menu-solid"></i></div>

      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-user-solid"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-user-lock-solid"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-user-unlock-solid"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-user-plus-solid"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-user-shield-solid -sc-x-1"></i></div>

      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-apple"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-google"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-paypal"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-instagram"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-friconix"></i></div>

      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in-solid"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in-solid rot-1/4"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in-solid rot-1/2"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in-solid rot-3/4"></i></div>
      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-sign-in-solid -rot-45deg"></i></div>

      <div class="bg-subtle r-2 ar-1 align-cc"><i class="h-80% w-80% icon i-warning"></i></div>
      <div class="stack bg-subtle r-2 ar-1 align-cc">
        <i class="h-80% w-80% icon i-circle"></i>
        <i class="h-80% w-80% icon i-warning"></i>
      </div>
      <div class="stack bg-subtle r-2 ar-1 align-cc">
        <i class="h-80% w-80% icon i-equilateral"></i>
        <i class="h-60% w-70% icon i-warning"></i>
      </div>
      <div class="stack bg-subtle r-2 ar-1 align-cc">
        <i class="h-80% w-80% icon i-square"></i>
        <i class="h-80% w-80% icon i-warning"></i>
      </div>
      <div class="stack bg-subtle r-2 ar-1 align-cc">
        <i class="h-80% w-80% icon i-octagon"></i>
        <i class="h-80% w-80% icon i-warning"></i>
      </div>

      <div class="stack bg-subtle r-2 ar-1 align-cc">
        <i class="h-80% w-80% text-green icon i-circle-solid"></i>
        <i class="h-80% w-80% text-white icon i-check"></i>
      </div>
      <div class="stack bg-subtle r-2 ar-1 align-cc">
        <i class="h-80% w-80% text-red icon i-circle-solid"></i>
        <i class="h-80% w-80% text-white icon i-times-solid"></i>
      </div>
      <div class="stack bg-subtle r-2 ar-1 align-cc">
        <i class="h-80% w-80% text-yellow-450 icon i-equilateral-solid"></i>
        <i class="h-80% w-80% text-orange-550 icon i-warning-solid"></i>
      </div>
      <div class="stack bg-subtle r-2 ar-1 align-cc">
        <i class="h-80% w-80% text-blue icon i-car-front-small"></i>
        <i class="h-80% w-80% text-red icon i-circle-line-wide"></i>
      </div>
      <div class="stack bg-subtle r-2 ar-1 align-cc">
        <i class="h-80% w-80% text-gray/20 icon i-octagon-solid-wide"></i>
        <i class="h-80% w-55% text-green-500 icon i-power-solid"></i>
      </div>
    </div>
    <div class="footer text-right">
      <a class="btn btn-primary" href="/docs/v1.0.0/icons/" target="_blank">More</a>
    </div>
  </div>
{/if}
