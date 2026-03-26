<script>
  import { Modal } from "@merlin-chatou/sutairu";


  import { onMount } from "svelte";
  onMount(() => {
    Modal.init();
    rawText = (header.textContent + " " + body.textContent).toLocaleLowerCase();
    cardId = cardEl.id;
  });

  import { searchState } from "../../state/search.svelte.js";
  import { containsAllSubstrings } from "$lib/utils/containAllSubstring.js";
  import { fade } from "svelte/transition";
  let header = $state();
  let body = $state();
  let cardEl = $state();
  let isVisible = $state(true);
  let rawText, cardId;

  // Get raw text on mount
  onMount(() => {});

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
  <div class="card opacity-0" id="modals" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Modals</h4>
      <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
    </div>
    <div class="body p-4 d-flex fd-col gap-3" bind:this={body}>
      <button class="btn btn-secondary" data-open-modal="modal-basic-example">Launch demo modal</button>
      <button class="btn btn-secondary" data-open-modal="modal-no-animation"> No animation </button>
      <button class="btn btn-secondary" data-open-modal="modal-no-backdrop-blur">No backdrop blur</button>
      <button class="btn btn-secondary" data-open-modal="modal-centered">Centered modal</button>
      <button class="btn btn-secondary" data-open-modal="modal-long-content">Long content</button>
      <button class="btn btn-secondary" data-open-modal="modal-long-content-page-scroll">Page Scroll</button>
      <button class="btn btn-secondary" data-open-modal="toggle-modal-1">Toogle between modals</button>
      <button class="btn btn-secondary" data-open-modal="modal-fix-width">Responsive fix width</button>
      <button class="btn btn-secondary" data-open-modal="full-width-modal">Full width</button>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="extras/modal">&lt;code&gt;</button>
    </div>
  </div>


{/if}
