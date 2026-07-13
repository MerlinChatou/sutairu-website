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
  <div class="card opacity-0" id="position" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Position</h4>
      <div hidden>static relative absolute fixed sticky</div>
    </div>
    <div class="body flex-y p-3 text-center gap-1" bind:this={body}>
      <div class="border mx-auto my-0 w-85px bg-subtle p-2 r-2 cur-pointer transform sc-1/2 hover:sc-100 tr-200">.sc-1/2</div>
      <div class="border mx-auto my-1 w-85px bg-subtle p-2 r-2 cur-pointer transform sc-0.75 hover:sc-100 tr-200">.sc-0.75</div>
      <div class="border mx-auto my-1 w-85px bg-subtle p-2 r-2 cur-pointer transform sc-90 hover:sc-100 tr-200">.sc-90</div>
      <div class="border mx-auto my-1 w-85px bg-subtle p-2 r-2 cur-pointer transform sc-95 hover:sc-100 tr-200">.sc-95</div>
      <div class="border mx-auto my-2 w-85px bg-subtle p-2 r-2 cur-pointer transform sc-100 hover:sc-100 tr-200">.sc-100</div>
      <div class="border mx-auto my-2 w-85px bg-subtle p-2 r-2 cur-pointer transform sc-1.05 hover:sc-100 tr-200">.sc-1.05</div>
      <div class="border mx-auto my-2 w-85px bg-subtle p-2 r-2 cur-pointer transform sc-110 hover:sc-100 tr-200">.sc-110</div>
      <div class="border mx-auto my-2 w-85px bg-subtle p-2 r-2 cur-pointer transform sc-125 hover:sc-100 tr-200">.sc-125</div>
      <div class="border mx-auto my-4 w-85px bg-subtle p-2 r-2 cur-pointer transform sc-3/2 hover:sc-100 tr-200">.sc-3/2</div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="layout/position">&lt;code&gt;</button>
    </div>
  </div>
{/if}
