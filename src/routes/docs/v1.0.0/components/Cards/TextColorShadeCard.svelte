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
  <div class="card opacity-0" id="text-shade-modifier" bind:this={cardEl}>
    <div class="header" bind:this={header}><h4 class="h4">Text Shade Modifier</h4></div>
    <div class="body p-3 d-flex fd-col gap-3 ff-mono text-center" bind:this={body}>
      <div class="w-full r-2 text-accent text-50">.text-50</div>
      <div class="w-full r-2 text-accent text-100">.text-100</div>
      <div class="w-full r-2 text-accent text-200">.text-200</div>
      <div class="w-full r-2 text-accent text-300">.text-300</div>
      <div class="w-full r-2 text-accent text-400">.text-400</div>
      <div class="w-full r-2 text-accent text-500">.text-500</div>
      <div class="w-full r-2 text-accent text-600">.text-600</div>
      <div class="w-full r-2 text-accent text-700">.text-700</div>
      <div class="w-full r-2 text-accent text-800">.text-800</div>
      <div class="w-full r-2 text-accent text-900">.text-900</div>
      <div class="w-full r-2 text-accent text-950">.text-950</div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="core/text-shade">&lt;code&gt;</button>
    </div>
  </div>
{/if}
