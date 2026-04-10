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
<div class="card opacity-0" id="flex" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Flex</h4></div>
  <div class="body p-3 d-flex fd-col gap-3 ff-mono text-white"  bind:this={body}>
    <div class="d-flex fd-row gap-1 hatching-gray/20 b-1 b-gray/20 r-2">
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
    </div>

    <div class="d-flex fd-row jc-center gap-1 hatching-gray/20 b-1 b-gray/20 r-2">
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
    </div>

    <div class="d-flex fd-row jc-end gap-1 hatching-gray/20 b-1 b-gray/20 r-2">
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
    </div>

    <div class="d-flex fd-row jc-between gap-1 hatching-gray/20 b-1 b-gray/20 r-2">
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
    </div>

    <div class="d-flex fd-row jc-around gap-1 hatching-gray/20 b-1 b-gray/20 r-2">
      <div class="ar-1/1  bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
      <div class="ar-1/1  bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
      <div class="ar-1/1  bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
    </div>

    <div class="d-flex fd-row jc-evenly gap-1 hatching-gray/20 b-1 b-gray/20 r-2">
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
      <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
    </div>


    <div class="ar-3/2 d-flex fd-row jc-between mt-3">
      <div class="d-flex fd-col jc-start gap-1 hatching-gray/20 b-1 b-gray/20 r-2">
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
      </div>

      <div class="d-flex fd-col jc-center gap-1 hatching-gray/20 b-gray b-opacity-20 r-2">
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
      </div>

      <div class="d-flex fd-col jc-end gap-1 hatching-gray/20 b-1 b-gray/20 r-2">
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
      </div>

      <div class="d-flex fd-col jc-between gap-1 hatching-gray/20 b-1 b-gray/20 r-2">
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
      </div>
      <div class="d-flex fd-col jc-around gap-1 hatching-gray/20 b-1 b-gray/20 r-2">
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
        <div class="ar-1/1 bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
      </div>
    </div>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="layout/flex">&lt;code&gt;</button>
  </div>
</div>
{/if}
