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
<div class="card" id="tables" transition:fade={{ duration: 250 }} bind:this={cardEl}>
  <div class="header" bind:this={header}><h4 class="h4">Tables</h4></div>
  <div class="body" bind:this={body}>
    <table class="w-full">
      <thead>
        <tr>
          <th>#</th>
          <th>Columns</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>John</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Smith</td>
        </tr>
      </tbody>
    </table>

    <div class="ov-x-auto mb-4">
      <table class="bg-accent bg-100 dark:bg-900 text-black dark:text-body mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th class="tw-nowrap">Col 1</th>
            <th class="tw-nowrap">Col 2</th>
            <th class="tw-nowrap">Col 3</th>
            <th class="tw-nowrap">Col 4</th>
            <th class="tw-nowrap">Col 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>This</td>
            <td>is</td>
            <td>a</td>
            <td>large</td>
            <td>content</td>
          </tr>
          <tr>
            <th>2</th>
            <td>There</td>
            <td>is</td>
            <td>a</td>
            <td>colored</td>
            <td>background</td>
          </tr>
        </tbody>
      </table>
    </div>

    <table class="w-full text-center text-body">
      <thead>
        <tr>
          <th>#</th>
          <th>Striped</th>
        </tr>
      </thead>
      <tbody class="striped">
        <tr>
          <th>1</th>
          <td>Odd</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Even</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Odd</td>
        </tr>
        <tr>
          <th>4</th>
          <td>Even</td>
        </tr>
        <tr>
          <th>5</th>
          <td>Odd</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="core/table">&lt;code&gt;</button>
  </div>
</div>
{/if}
