<script>
  import colorScheme from "@merlin-chatou/color-scheme";
  import { onMount } from "svelte";
  import { searchState } from "../../state/search.svelte.js";
  import { containsAllSubstrings } from "$lib/utils/containAllSubstring.js";
  import ThemeButtons from "./ThemeButtons/ThemeButtons.svelte";
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
  <div class="card opacity-1" id="themes" bind:this={cardEl}>
    <div class="header" bind:this={header}><h4 class="h4">Themes</h4></div>

    <div class="body flex-y gap-2" bind:this={body}>
      <ThemeButtons theme="sutairu" />
      <ThemeButtons theme="swiss" />
      <ThemeButtons theme="adjuvio" />
    </div>

    <div class="footer text-right">
      <button class="btn btn-primary ff-mono tt-capitalize" data-open-modal="documentation-modal" data-documentation="core/color-scheme">&lt;code&gt;</button>
    </div>
  </div>
{/if}
