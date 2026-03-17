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
    // Get card text
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
  <div class="card" id="scale" transition:fade={{ duration: 250 }} bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Scale</h4>
      <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
    </div>
    <div class="body v-flex p-3 text-center gap-4" bind:this={body}>
      <div class="border mx-auto w-fit bg-subtle p-2 r-2 cur-pointer transform sc-50 hover:sc-100 tr-200">.scale-50</div>
      <div class="border mx-auto w-fit bg-subtle p-2 r-2 cur-pointer transform sc-75 hover:sc-100 tr-200">.scale-75</div>
      <div class="border mx-auto w-fit bg-subtle p-2 r-2 cur-pointer transform sc-90 hover:sc-100 tr-200">.scale-90</div>
      <div class="border mx-auto w-fit bg-subtle p-2 r-2 cur-pointer transform sc-95 hover:sc-100 tr-200">.scale-95</div>
      <div class="border mx-auto w-fit bg-subtle p-2 r-2 cur-pointer transform sc-100 hover:sc-100 tr-200">.scale-100</div>
      <div class="border mx-auto w-fit bg-subtle p-2 r-2 cur-pointer transform sc-105 hover:sc-100 tr-200">.scale-105</div>
      <div class="border mx-auto w-fit bg-subtle p-2 r-2 cur-pointer transform sc-110 hover:sc-100 tr-200">.scale-110</div>
      <div class="border mx-auto w-fit bg-subtle p-2 r-2 cur-pointer transform sc-125 hover:sc-100 tr-200">.scale-125</div>
      <div class="border mx-auto w-fit bg-subtle p-2 r-2 cur-pointer transform sc-150 hover:sc-100 tr-200">.scale-150</div>
    </div>
    <div class="footer text-right">
      <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="extras/scale">&lt;code&gt;</button>
    </div>
  </div>
{/if}
