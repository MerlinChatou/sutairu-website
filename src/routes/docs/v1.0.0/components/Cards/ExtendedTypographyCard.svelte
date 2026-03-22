<script>
  // import "@merlin-chatou/sutairu-extras/typography/style";
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
    rawText = (header.innerText + " " + body.innerText).toLocaleLowerCase();
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
  <div class="card opacity-0" id="extended-typography" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Extended Typography</h4>
      <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
    </div>

    <div class="body d-flex fd-col gap-4 p-4 ai-center" bind:this={body}>
      <div class="td-line">Strikethrough</div>
      <div class="hover:td-line">Strikethrough on hover</div>
      <div class="td-underline">Underline</div>
      <div class="hover:td-underline">Underline on hover</div>
      <div><a class="td-none" href="/">No decoration</a></div>
      <div><a class="td-underline hover:td-none" href="/">No decoration on hover</a></div>
      <ins>Inserted</ins>
      <del>Deleted</del>
      <div class="ff-handwritten">Handwritten</div>
      <div class="tt-lower">LOWERCASE TEXT</div>
      <div class="tt-capitalize">capitalize text</div>
      <div class="tt-upper">uppercase text</div>
    </div>

    <div class="footer text-right">
      <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="extras/extended-typography">&lt;code&gt;</button>
    </div>
  </div>
{/if}
