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
  <div class="card opacity-0" id="white-space" bind:this={cardEl}>
    <div class="header" bind:this={header}><h4 class="h4">White Space</h4></div>
    <div class="body p-3 d-flex fd-col gap-3" bind:this={body}>
      <div class="ov-hidden">
        <code>ws-normal</code>
        <p class=" border p-1 r-2 mt-2 mb-4 ml-3 w-2rem/3 ws-normal fs-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Pellentesque eleifend nisl metus, nec venenatis sapien efficitur vitae.
        </p>

        <code>ws-pre</code>
        <p class=" border p-1 r-2 mt-2 mb-4 ml-3 ws-pre w-2rem/3 fs-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Pellentesque eleifend nisl metus, nec venenatis sapien efficitur vitae.
        </p>


        <code>ws-pre-wrap</code>
        <p class=" border p-1 r-2 mt-2 mb-4 ml-3 ws-pre-wrap w-2rem/3 fs-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque eleifend nisl metus, nec venenatis sapien efficitur vitae.
        </p>

      </div>
    </div>
    <div class="footer text-right ws-normal">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="typography/white-space">&lt;code&gt;</button>
    </div>
  </div>
{/if}
