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
  <div class="card opacity-0" id="rotate" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Rotations</h4>
      <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
      <div hidden>rotate</div>
    </div>
    <div class="body d-grid grid-cols-2 p-4 text-center gap-4" bind:this={body}>
      <img class="mx-auto w-6 transform rotate-45 hover:rotate-0 bg-accent r-3 tr-transform tr-400" src="/images/rustine.png" alt="Rustine" />
      <img class="mx-auto w-6 transform rotate-0 hover:rotate-270 bg-accent r-3 tr-transform tr-400" src="/images/rustine.png" alt="Rustine" />
      <img class="mx-auto w-6 transform rotate-180 hover:rotate-0 bg-accent r-3 tr-transform tr-400" src="/images/rustine.png" alt="Rustine" />
      <img class="mx-auto w-6 transform rotate-135 hover:rotate-0 bg-accent r-3 tr-transform tr-400" src="/images/rustine.png" alt="Rustine" />
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="extras/rotate">&lt;code&gt;</button>
    </div>
  </div>
{/if}
