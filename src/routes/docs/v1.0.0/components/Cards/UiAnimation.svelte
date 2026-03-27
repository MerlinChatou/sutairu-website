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
  <div class="card opacity-0" id="ui-animation" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">UI Animations</h4>
      <div hidden>button</div>
    </div>
    <div class="body p-3 d-flex fd-col gap-2" bind:this={body}>
      <div class="d-flex jc-center gap-2">
        <button class="btn-close" aria-label="Button Close Animated"></button>
        <button class="btn-close hover:bg-gray/20" aria-label="Button Close Animated"></button>
        <button class="btn-close-accent text-accent" aria-label="Button Close Animated"></button>
        <button class="btn-close-yellow" aria-label="Button Close Animated"></button>
        <button class="btn-close-red" aria-label="Button Close Animated"></button>
        <button class="btn-close-green hover:bg-green/20" aria-label="Button Close Animated"></button>
      </div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="components/btn-close">&lt;code&gt;</button>
    </div>
  </div>
{/if}
