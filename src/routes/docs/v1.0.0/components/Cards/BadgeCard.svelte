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
  <div class="card opacity-0" id="disabled-buttons" bind:this={cardEl}>
    <div class="header d-flex jc-between" bind:this={header}>
      <h4 class="h4">Badges</h4>
    </div>
    <div class="body p-4 flex-y gap-3 ai-center" bind:this={body}>
      <span class="w-fit badge bg-orange text-white">.badge .bg-orange</span>
      <span class="w-fit badge bg-red text-white">.badge .bg-red</span>
      <span class="w-fit badge r-pill bg-pink text-white">.badge .r-pill</span>
      <span class="w-fit badge-outline text-blue b-blue">.badge-outline</span>
      <button class="btn btn-info">Notifications <span class="badge bg-white text-black ml-2 px-1">3</span></button>
      <span class="pos-rel">New mail <span class="pos-abs top-0 right-0 mv-x-120% badge-dot bg-green"></span></span>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="components/badge">&lt;code&gt;</button>
    </div>
  </div>
{/if}
