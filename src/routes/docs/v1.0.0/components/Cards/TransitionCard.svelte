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
  <div class="card opacity-0" id="transition" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Transition</h4>
    </div>
    <div class="body flex-y p-3 text-center gap-1 group text-center" bind:this={body}>
      <div class="bg-subtle group-hover:mv-x-150% px-2 py-1 b-1 b-accent r-2 w-40% tr-transform-2500">delay</div>
      <div class="bg-subtle group-hover:mv-x-150% px-2 py-1 b-1 b-accent r-2 w-40% tr-transform-750-1000">duration</div>
      <div class="bg-subtle group-hover:mv-x-150% px-2 py-1 b-1 b-accent r-2 w-40% tr-transform-750-linear">linear</div>
      <div class="bg-subtle group-hover:mv-x-150% px-2 py-1 b-1 b-accent r-2 w-40% tr-transform-750-ease-in-out">ease-in-out</div>
      <div class="bg-subtle group-hover:mv-x-150% px-2 py-1 b-1 b-accent r-2 w-40% tr-transform-750-ease-in">ease-in</div>
      <div class="bg-subtle group-hover:mv-x-150% px-2 py-1 b-1 b-accent r-2 w-40% tr-transform-750-ease-out">ease-out</div>
      <div class="bg-subtle group-hover:mv-x-150% px-2 py-1 b-1 b-accent r-2 w-40% tr-transform-750-ease">ease</div>
      <div class="bg-subtle group-hover:mv-x-150% px-2 py-1 b-1 b-accent r-2 w-40% tr-transform-750-step-start">step-start</div>
      <div class="bg-subtle group-hover:mv-x-150% px-2 py-1 b-1 b-accent r-2 w-40% tr-transform-750-step-end">step-end</div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="effect/transition">&lt;code&gt;</button>
    </div>
  </div>
{/if}
