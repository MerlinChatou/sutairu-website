<script>
  import colorScheme from "@merlin-chatou/color-scheme";
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
  <div class="card opacity-0" id="color-scheme" bind:this={cardEl}>
    <div class="header" bind:this={header}><h4 class="h4">Color Scheme</h4></div>

    <div class="body p-0" bind:this={body}>
      <div class="flex-x p-4 gap-8 w-full ff-mono text-center">
        <div class="r-4 b-1 b-gray/20 grow-1 ov-hidden">
          <div class="bg-gray/20 rb-0 p-3 fw-bold b-gray/-20 bw-0 bb-1 text-black">light</div>
          <div class="bg-white-250 p-2 bold d-flex fd-col gap-2">
            <div class="bg-gray-100 r-4 h-16"></div>
            <button
              class="btn bg-accent r-4 h-12 text-accent hover:text-white"
              aria-label="Switch to light mode"
              onclick={() => colorScheme.setUserChoice("light")}>Light</button
            >
          </div>
        </div>

        <div class="r-4 b-gray/20 b-1 grow-1 ov-hidden">
          <div class="bg-black-900 rb-0 p-3 fw-bold b-1 b-gray/20 bw-0 bb-1 text-white">dark</div>
          <div class="bg-gray-700 p-2 bold d-flex fd-col gap-2">
            <div class="bg-gray-600 r-4 h-16"></div>
            <button
              class="btn bg-accent r-4 h-12 text-accent hover:text-white"
              aria-label="Switch to dark mode"
              onclick={() => colorScheme.setUserChoice("dark")}>Dark</button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="footer text-right">
      <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="core/color-scheme">&lt;code&gt;</button>
    </div>
  </div>
{/if}
