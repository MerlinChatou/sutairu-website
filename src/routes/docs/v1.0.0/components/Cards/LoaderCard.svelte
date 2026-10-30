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
  <div class="card opacity-0" id="loader" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Loaders</h4>
    </div>
    <div class="body p-4 flex-y gap-4 ff-mono" bind:this={body}>
      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader text-accent"></span>
        <span class="loader b-7 text-accent b-subtle/60 h-48px w-48px"></span>
        <span class="loader text-transparent b-purple h-48px w-48px"></span>
        <span class="loader text-green h-48px w-48px anim-dur-2000"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-clip text-red"></span>
        <span class="loader-clip text-accent h-48px w-48px"></span>
        <span class="loader-clip text-purple b-gray/50 h-48px w-48px"></span>
        <span class="loader-clip text-green b-7 h-48px w-48px anim-dur-3s before:anim-dur-2s"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-grow bg-red ps-center"></span>
        <span class="loader-grow text-accent h-48px w-48px ps-center"></span>
        <span class="loader-grow bg-purple h-48px w-48px ps-center"></span>
        <span class="loader-grow bg-green h-64px w-64px ps-center anim-dur-2s"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-dots-fade text-red fs-xs h-4px w-4px"></span>
        <span class="loader-dots-fade text-blue"></span>
        <span class="loader-dots-fade text-purple"></span>
        <span class="loader-dots-fade text-green anim-dur-2000 sc-150"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-dots-spin text-red fs-xs h-4px w-4px"></span>
        <span class="loader-dots-spin text-blue"></span>
        <span class="loader-dots-spin text-purple"></span>
        <span class="loader-dots-spin text-green anim-dur-2000 sc-150"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-comet text-red fs-xs h-4px w-4px"></span>
        <span class="loader-comet text-blue"></span>
        <span class="loader-comet text-purple"></span>
        <span class="loader-comet text-green anim-dur-2000 scale-150"></span>
      </div>
      <div class="w-full flex-y gap-2">
        <div class="loader-skeleton r-2 h-32px bg-black-100 dark:bg-black-450 text-white-50 fg-100 dark:text-black-100"></div>
        <div class="loader-skeleton r-2 h-32px bg-red-200 dark:bg-red-650 text-red-100 fg-100 dark:text-red-500"></div>
        <div class="loader-skeleton r-2 h-32px bg-blue-200 dark:bg-blue-650 text-blue-100 dark:text-blue-500"></div>
        <div class="loader-skeleton r-2 h-32px pa--45deg bg-green-200 dark:bg-green-650 text-white-100 dark:text-green-200 anim-dur-4000"></div>
      </div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="components/loader">&lt;code&gt;</button>
    </div>
  </div>
{/if}
