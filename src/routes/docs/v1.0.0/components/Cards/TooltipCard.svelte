<script>
  import { onMount } from "svelte";
  import { searchState } from "../../state/search.svelte.js";
  import { containsAllSubstrings } from "#lib/utils/containAllSubstring.js";
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
  <div class="card opacity-0 ov-visible" id="tooltips" bind:this={cardEl} style=" transform: none; filter: none; contain: none; ">
    <div class="header d-flex jc-between ai-center" bind:this={header} style=" transform: none; filter: none; contain: none; ">
      <h4 class="h4">Tooltips</h4>
    </div>
    <div class="body p-4 flex-y ai-center gap-3 " bind:this={body} style=" transform: none; filter: none; contain: none; ">
      <button class="btn btn-secondary w-fit tip" style=" transform: none; filter: none; contain: none; ">
        Hover me
        <span class="tip-body">Automatic placement</span>
      </button>

      <button class="btn btn-secondary w-fit tip tip-right">
        Hover me
        <span class="tip-body">Placed on the right</span>
      </button>

      <button class="btn btn-secondary w-fit tip tip-start">
        Hover me
        <span class="tip-body">Placed at the start</span>
      </button>

      <button class="btn btn-secondary w-fit tip tip-top">
        Hover me
        <span class="tip-body">Placed on top</span>
      </button>

      <button class="btn btn-secondary w-fit tip tip-bottom">
        Hover me
        <span class="tip-body">Placed on the bottom</span>
      </button>

      <button class="btn btn-secondary w-fit tip">
        Hover me
        <span class="tip-body">
          <i class="icon i-comment-square-wide fs-2xl"></i> <strong>Rich HTML</strong> tooltip with a <kbd>Ctrl+K</kbd> shortcut 
        </span>
      </button>

      <button class="btn btn-secondary w-fit tip">
        Hover me
        <span class="tip-body bg-accent text-white border b-5px b-orange r-pill tr-opacity-1s">
          Custom styled tooltip
        </span>
      </button>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="components/tooltip">&lt;code&gt;</button>
    </div>
  </div>
{/if}


