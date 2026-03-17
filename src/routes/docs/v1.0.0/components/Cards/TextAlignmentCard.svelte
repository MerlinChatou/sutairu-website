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
  <div class="card" id="text-alignment" transition:fade={{ duration: 250 }} bind:this={cardEl}>
    <div class="header" bind:this={header}>
      <h4 class="h4">Text Alignment</h4>
    </div>
    <div class="body" bind:this={body}>
      <code>text-left</code>
      <p class="text-left pt-3 px-5 fs-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend nisl metus, nec venenatis sapien efficitur vitae.
      </p>
    </div>
    <div class="body">
      <code>text-center</code>
      <p class="text-center pt-3 px-5 fs-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend nisl metus, nec venenatis sapien efficitur vitae.
      </p>
    </div>

    <div class="body">
      <code>text-right</code>
      <p class="text-right pt-3 px-5 fs-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend nisl metus, nec venenatis sapien efficitur vitae.
      </p>
    </div>

    <div class="body">
      <code>ta-justify</code>
      <p class="ta-justify pt-3 px-5 fs-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend nisl metus, nec venenatis sapien efficitur vitae.
      </p>
    </div>
    <div class="footer text-right">
      <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="core/text-alignment">&lt;code&gt;</button>
    </div>
  </div>
{/if}
