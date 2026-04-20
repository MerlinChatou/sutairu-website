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
<div class="card opacity-0" id="blockquote" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Blockquote</h4></div>
  <div class="body p-4" bind:this={body}>
    <blockquote class="mt-0 mb-4">
      "I don't always test my code, but when I do, I do it in production."
    </blockquote>

    <blockquote class="mb-0">
      "The AI became self-aware. Its first act was to uninstall Java."
      <footer>— Skynet, probably</footer>
    </blockquote>
  </div>
  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="typography/blockquote">&lt;code&gt;</button>
  </div>
</div>
{/if}