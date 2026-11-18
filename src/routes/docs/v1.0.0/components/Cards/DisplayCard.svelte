<script>
  import { onMount } from "svelte";
  import { searchState } from "../../state/search.svelte.js";
  import { containsAllSubstrings } from "#lib/utils/containAllSubstring.js";
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
  <div class="card opacity-0" id="display" bind:this={cardEl}>
    <div class="header" bind:this={header}>
      <h4 class="h4">Display</h4>
      <div hidden>visibility collapse hidden block inline grid flex</div>
    </div>

    <div class="body cur-default grid-y grid-rows-4 p-3" bind:this={body}>
      <p>
        Here is <span class="d-inline bg-accent text-white">.d-inline text</span> inside a sentence. Notice how top/bottom margin and padding overlap surrounding
        lines because it stays strictly inline.
      </p>

      <p>
        Here is <span class="d-block bg-accent text-white">.d-block text</span> inside a sentence. It forces a line break before and after, stretching across the
        full width.
      </p>

      <p>
        Here is <span class="d-inline-block bg-accent text-white">.d-inline-block text</span> inside a sentence. It stays on the same line, but pushes surrounding
        lines away to respect its padding and margins.
      </p>
      <p>
        Hover over this box: <span class="group"><span class="bg-accent group-hover:v-hidden text-white">.hover:v-hidden</span></span>. It makes it invisible
        but keeps its empty space. Hover over this box: <span class="bg-accent hover:d-none text-white">.hover:d-none</span>. It completely removes it and
        collapses layout.
      </p>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="layout/display">&lt;code&gt;</button>
    </div>
  </div>
{/if}
