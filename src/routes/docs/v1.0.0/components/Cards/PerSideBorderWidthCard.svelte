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
<div class="card opacity-0" id="per-side-border-widths" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Per-Side Border Widths</h4></div>
  <div class="body p-3 d-flex fd-col gap-3 ff-mono fs-sm" bind:this={body}>
    <div class="w-full p-1 text-center b-accent bg-subtle bw-0 bt-3">bt-3</div>
    <div class="w-full p-1 text-center b-accent bg-subtle bw-0 br-3">br-3</div>
    <div class="w-full p-1 text-center b-accent bg-subtle bw-0 bl-3">br-3</div>
    <div class="w-full p-1 text-center b-accent bg-subtle bw-0 bb-3">bb-3</div>
    <div class="w-full p-1 text-center b-accent bg-subtle bw-0 bx-3">bx-3</div>
    <div class="w-full p-1 text-center b-accent bg-subtle bw-0 by-3">by-3</div>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="core/border-width">&lt;code&gt;</button>
  </div>
</div>
{/if}
