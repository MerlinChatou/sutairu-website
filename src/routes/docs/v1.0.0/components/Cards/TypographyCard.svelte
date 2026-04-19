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
<div class="card opacity-0" id="typography" bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Typography</h4></div>

  <div class="body d-flex fd-col gap-0 p-4 ai-center" bind:this={body}>
    <p>This is a paragraph followed with an horizontal rule.</p>

    <hr class="w-full" />
    <div class="d-flex fd-col gap-4 ai-center m-0">
      <abbr title="Abbreviation">Abbr.</abbr>
      <div class="bold">Bold</div>
      <div class="italic">Italic</div>
      <div class="td-o">Overlined</div>
      <div class="td-s">Strikethrough</div>      
      <div class="td-u">Underlined</div>
      
      <div><a href="/">This is a Link</a></div>
      <small>Small</small>
      <div class="ff-mono">Monospace</div>
      <mark>Highlighted</mark>
      <code>Inline Code</code>
      <div><kbd>Ctrl</kbd> + <kbd>F</kbd></div>
      <div>Text <sub>Sub</sub></div>
      <div>Text <sup>Sub</sup></div>
      <ins>Inserted</ins>
      <del>Deleted</del>
      <div class="ff-handwritten">Handwritten</div>
      <div class="tt-lower">LOWERCASE TEXT</div>
      <div class="tt-capitalize">capitalize text</div>
      <div class="tt-upper">uppercase text</div>
    </div>
  </div>

  <div class="footer text-right">
    <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="typography/typography">&lt;code&gt;</button>
  </div>
</div>
{/if}
