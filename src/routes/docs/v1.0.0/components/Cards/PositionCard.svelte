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
    <div class="body flex-y p-8 text-center gap-8" bind:this={body}>
      <div class="pos-rel r-1 w-full ar-video bg-blue/60 text-white">
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 right-0"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 bottom-0 right-0"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 bottom-0"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 top-50% left-50%"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 bottom-50% right-50%"></div>
      </div>

      <div class="pos-rel r-1 w-full ar-video bg-blue/60 text-white">
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 left-0 top-0 mv-middle"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 left-100 top-0 mv-middle"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 left-0 top-100 mv-middle"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 left-100 top-100 mv-middle"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 left-100 top-100 mv-middle"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 left-middle top-100 mv-middle"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 left-middle top-0 mv-middle"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 left-0 top-middle mv-middle"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 left-100 top-middle mv-middle"></div>
        <div class="pos-abs r-2 align-cc w-10% ar-1 bg-green/60 left-middle top-middle mv-middle"></div>
      </div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="layout/position">&lt;code&gt;</button>
    </div>
  </div>
{/if}
