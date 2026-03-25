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
  <div class="card opacity-0" id="sizing" bind:this={cardEl}>
    <div class="header" bind:this={header}>
      <h4 class="h4">Sizing</h4>
      <div hidden>width height size</div>
    </div>
    <div class="body p-3 d-flex fd-col ff-mono gap-2 text-center fs-sm" bind:this={body}>
      <div class="h-flex gap-2">
        <span>.w-1</span>
        <div class="w-1 h-4rem bg-subtle b-accent b-opacity-40 r-1"></div>
      </div>
      <div class="h-flex gap-2">
        <span>.w-2rem</span>
        <div class="w-2rem h-4rem bg-subtle b-accent b-opacity-40 r-1"></div>
      </div>
      <div class="h-flex gap-2">
        <span>.w-4</span>
        <div class="w-4rem h-4rem bg-subtle b-accent b-opacity-40 r-1"></div>
      </div>
      <div class="h-flex gap-2">
        <span>.w-8</span>
        <div class="w-8 h-4rem bg-subtle b-accent b-opacity-40 r-1"></div>
      </div>
      <div class="h-flex gap-2">
        <span>.w-16</span>
        <div class="w-16 h-4rem bg-subtle b-accent b-opacity-40 r-1"></div>
      </div>
      <div class="h-flex gap-2">
        <span>.w-3rem2</span>
        <div class="w-3rem2 h-4rem bg-subtle b-accent b-opacity-40 r-1"></div>
      </div>
      <hr />
      <div class="h-flex jc-between">
        <div class="v-flex gap-2 text-center">
          <span>.h-1</span>
          <div class="mx-auto b-accent b-opacity-40 h-1 w-4rem bg-subtle r-1"></div>
        </div>
        <div class="v-flex gap-2 text-center">
          <span>.h-2rem</span>
          <div class="mx-auto b-accent b-opacity-40 h-2rem w-4rem bg-subtle r-1"></div>
        </div>
        <div class="v-flex gap-2 text-center">
          <span>.h-4</span>
          <div class="mx-auto b-accent b-opacity-40 h-4rem w-4rem bg-subtle r-1"></div>
        </div>
        <div class="v-flex gap-2 text-center">
          <span>.h-8</span>
          <div class="mx-auto b-accent b-opacity-40 h-8 w-4rem bg-subtle r-1"></div>
        </div>
        <div class="v-flex gap-2 text-center">
          <span>.h-16</span>
          <div class="mx-auto b-accent b-opacity-40 h-16 w-4rem bg-subtle r-1"></div>
        </div>
        <div class="v-flex gap-2 text-center">
          <span>.h-3rem2</span>
          <div class="mx-auto b-accent b-opacity-40 h-3rem2 w-4rem bg-subtle r-1"></div>
        </div>
      </div>
      <hr />
      <div class="v-flex gap-3 py-3 bg-hatching fg-accent fg-opacity-20 b-accent b-opacity-20 r-3">
        <div class="w-1/4 h-4rem bg-subtle b-accent b-opacity-40 r-1">.w-1/4</div>
        <div class="w-1/3 h-4rem bg-subtle b-accent b-opacity-40 r-1">.w-1/3</div>
        <div class="w-1/2 h-4rem bg-subtle b-accent b-opacity-40 r-1">.w-1/2</div>
        <div class="w-2rem/3 h-4rem bg-subtle b-accent b-opacity-40 r-1">.w-2rem/3</div>
        <div class="w-3rem/4 h-4rem bg-subtle b-accent b-opacity-40 r-1">.w-3rem/4</div>
        <div class="w-full h-4rem bg-subtle b-accent b-opacity-40 r-1">.w-full</div>
      </div>
      <hr />
      <div class="h-flex jc-between">
        <span>.h-1/4</span>
        <span>.h-1/3</span>
        <span>.h-1/2</span>
        <span>.h-2rem/3</span>
        <span>.h-3rem/4</span>
        <span>.h-full</span>
      </div>
      <div class="h-flex jc-between h-2rem4 bg-hatching fg-accent fg-opacity-20 b-accent b-opacity-20 r-3">
        <div class="mx-auto b-accent b-opacity-40 h-1/4 w-4rem bg-subtle r-1"></div>
        <div class="mx-auto b-accent b-opacity-40 h-1/3 w-4rem bg-subtle r-1"></div>
        <div class="mx-auto b-accent b-opacity-40 h-1/2 w-4rem bg-subtle r-1"></div>
        <div class="mx-auto b-accent b-opacity-40 h-2rem/3 w-4rem bg-subtle r-1"></div>
        <div class="mx-auto b-accent b-opacity-40 h-3rem/4 w-4rem bg-subtle r-1"></div>
        <div class="mx-auto b-accent b-opacity-40 h-full w-4rem bg-subtle r-1"></div>
      </div>
    </div>
    <div class="footer text-right ws-normal">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="core/sizing">&lt;code&gt;</button>
    </div>
  </div>
{/if}
