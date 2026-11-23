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
      <div hidden>spinner loading growing dots comet skeleton spinner spin indicator progress wait</div>      
    </div>
    <div class="body p-4 flex-y gap-4 ff-mono" bind:this={body}>
      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader text-gray"></span>
        <span class="loader b-7 text-blue b-subtle/60 fs-xl"></span>
        <span class="loader text-transparent b-green fs-xl"></span>
        <span class="loader text-accent fs-3xl anim-dur-2s"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-clip text-gray"></span>
        <span class="loader-clip text-blue fs-2xl"></span>
        <span class="loader-clip text-green b-subtle/60 fs-2xl"></span>
        <span class="loader-clip text-accent b-7 fs-3xl anim-dur-3s before:anim-dur-2s"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-grow bg-gray"></span>
        <span class="loader-grow text-blue fs-2xl"></span>
        <span class="loader-grow bg-green fs-2xl"></span>
        <span class="loader-grow bg-accent fs-3xl anim-dur-2s"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-dots-fade text-gray"></span>
        <span class="loader-dots-fade text-blue fs-2xl"></span>
        <span class="loader-dots-fade text-green fs-2xl"></span>
        <span class="loader-dots-fade text-accent fs-3xl anim-dur-2s"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-dots-spin text-gray fs-8px"></span>
        <span class="loader-dots-spin text-blue fs-2xl"></span>
        <span class="loader-dots-spin text-green fs-2xl"></span>
        <span class="loader-dots-spin text-accent fs-3xl anim-dur-2s"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-comet text-gray "></span>
        <span class="loader-comet text-blue fs-2xl"></span>
        <span class="loader-comet text-green fs-2xl"></span>
        <span class="loader-comet text-accent fs-3xl anim-dur-2s"></span>
      </div>
      <div class="w-full flex-y gap-2">
        <div class="loader-skeleton r-3 h-16px bg-black-100 dark:bg-black-450 text-white-50 dark:text-black-100"></div>
        <div class="loader-skeleton r-3 h-16px bg-blue-200 dark:bg-blue-650 text-blue-100 dark:text-blue-500"></div>
        <div class="loader-skeleton r-3 h-16px bg-green-200 dark:bg-green-650 text-green-100 dark:text-green-500"></div>
        <div class="loader-skeleton r-3 h-16px pa--45deg bg-accent-200 dark:bg-accent-650 text-white-100 dark:text-green-200 anim-dur-3s"></div>
      </div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="components/loader">&lt;code&gt;</button>
    </div>
  </div>
{/if}
