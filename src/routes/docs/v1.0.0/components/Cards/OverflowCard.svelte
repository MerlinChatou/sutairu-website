<script>
  import { onMount } from "svelte";
  import { searchState } from "../../state/search.svelte.js";
  import { containsAllSubstrings } from "#lib/utils/containAllSubstring.js";

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
  <div class="card opacity-0" id="white-space" bind:this={cardEl}>
    <div class="header" bind:this={header}>
      <h4 class="h4">Overflow</h4>
      <div hidden></div>
    </div>
    <div class="body p-4" bind:this={body}>
      <div class="ov-hidden flex-y gap-4">
        <div>
          <code>ov-visible</code>
          <p class="border bg-subtle p-1 r-2 mt-2 mb-4 ml-3 w-80% ws-nowrap ov-visible fs-sm">
            My ego is way too big for this tiny container and I strictly refuse to be contained by your CSS borders!
          </p>
        </div>

        <div>
          <code>ov-hidden</code>
          <p class="border bg-subtle p-1 r-2 mt-2 mb-4 ml-3 w-80% ws-nowrap ov-hidden fs-sm">
            Nothing to see here, move along! Everything is totally fine and definitely not awkwardly cut off mid-sentence.
          </p>
        </div>
        <div>
          <code>ov-scroll</code>
          <p class="border bg-subtle p-1 r-2 mt-2 mb-4 ml-3 w-80% ws-nowrap ov-scroll fs-sm">
            Congratulations! You unlocked the legendary horizontal scrollbar. Keep scrolling right to claim your free pizza! 🍕
          </p>
        </div>
        <div>
          <code>ov-auto</code>
          <p class="border bg-subtle p-1 r-2 mt-2 mb-4 ml-3 w-80% ws-nowrap ov-auto fs-sm">
            I only show scrollbars when you actually need them, unlike my overachieving show-off cousin ov-scroll.
          </p>
        </div>
      </div>
    </div>
    <div class="footer text-right ws-normal">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="layout/overflow">&lt;code&gt;</button>
    </div>
  </div>
{/if}
