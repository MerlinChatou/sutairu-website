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
  <div class="card opacity-0" id="loader" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Loaders</h4>
      <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
    </div>
    <div class="body p-3 v-flex gap-5 ff-mono" bind:this={body}>
      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader text-red ps-center"></span>
        <span class="loader h-48px w-48px ps-center"></span>
        <span class="loader b-purple text-white text-opacity-0 h-48px w-48px ps-center"></span>
        <span class="loader place-self-center b-white b-opacity-0 text-green h-48px w-48px anim-dur-2000 ps-center"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-clip text-red ps-center"></span>
        <span class="loader-clip h-48px w-48px ps-center"></span>
        <span class="loader-clip text-purple h-48px w-48px ps-center"></span>
        <span class="loader-clip text-green h-48px w-48px scale-150 anim-dur-2000 ps-center"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-grow bg-red ps-center"></span>
        <span class="loader-grow h-48px w-48px ps-center"></span>
        <span class="loader-grow bg-purple h-48px w-48px ps-center"></span>
        <span class="loader-grow bg-green h-64px w-64px ps-center"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-dots-fade text-red fs-2xs h-4px w-4px ps-center"></span>
        <span class="loader-dots-fade ps-center"></span>
        <span class="loader-dots-fade text-purple ps-center"></span>
        <span class="loader-dots-fade text-green anim-dur-2000 scale-150 ps-center"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-dots-spin text-red fs-2xs h-4px w-4px ps-center"></span>
        <span class="loader-dots-spin ps-center"></span>
        <span class="loader-dots-spin text-purple ps-center"></span>
        <span class="loader-dots-spin text-green anim-dur-2000 scale-150 ps-center"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4">
        <span class="loader-comet text-red fs-2xs h-4px w-4px ps-center"></span>
        <span class="loader-comet ps-center"></span>
        <span class="loader-comet text-purple ps-center"></span>
        <span class="loader-comet text-green anim-dur-2000 scale-150 ps-center"></span>
      </div>
      <div class="w-full v-flex gap-2">
        <div class="loader-skeleton r-3 h-16px"></div>
        <div class="loader-skeleton r-3 h-16px bg-red bg-200 dark:bg-700 fg-red fg-100 dark:fg-500"></div>
        <div class="loader-skeleton r-3 h-16px bg-blue bg-200 dark:bg-700 fg-blue fg-100 dark:fg-500"></div>
        <div class="loader-skeleton r-3 h-16px bg-green bg-200 dark:bg-700 fg-green fg-100 dark:fg-500"></div>
      </div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="extras/loader">&lt;code&gt;</button>
    </div>
  </div>
{/if}
