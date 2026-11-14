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
      <h4 class="h4">Word Break</h4>
      <div hidden></div>
    </div>
    <div class="body p-3 d-flex fd-col gap-3" bind:this={body}>
      <div class="ov-hidden">
        <code>wb-normal</code>
        <p class="border p-1 r-2 mt-2 mb-4 ml-3 w-2rem/3 wb-normal fs-sm">
          https://very-long-url-example-that-does-not-contain-any-spaces-and-might-overflow.com/profile/settings/security/tokens
        </p>

        <code>wb-all</code>
        <p class="border p-1 r-2 mt-2 mb-4 ml-3 wb-all w-2rem/3 fs-sm">
          https://very-long-url-example-that-does-not-contain-any-spaces-and-might-overflow.com/profile/settings/security/tokens
        </p>

        <code>wbreak-keep</code>
        <p class="wb p-1 r-2 mt-2 mb-4 ml-3 wb-keep w-2rem/3 fs-sm">
          https://very-long-url-example-that-does-not-contain-any-spaces-and-might-overflow.com/profile/settings/security/tokens
        </p>

        <code>wb-word</code>
        <p class="border p-1 r-2 mt-2 mb-4 ml-3 wb-word w-2rem/3 fs-sm">
          https://very-long-url-example-that-does-not-contain-any-spaces-and-might-overflow.com/profile/settings/security/tokens
        </p>
      </div>
    </div>
    <div class="footer text-right ws-normal">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="typography/word-break">&lt;code&gt;</button>
    </div>
  </div>
{/if}
