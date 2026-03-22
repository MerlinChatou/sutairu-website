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
<div class="card opacity-0" id="disabled-buttons" bind:this={cardEl}>
  <div class="header d-flex jc-between ai-center" bind:this={header}>
    <h4 class="h4">Disabled Buttons</h4>    
  </div>
  <div class="body p-4 d-grid grid-cols-2 gap-3 ff-mono" bind:this={body}>
    
    <button disabled class="btn bg-yellow">bg-yellow</button>
    <button disabled class="btn bg-yellow btn-outline">bg-yellow</button>
    <button disabled class="btn bg-orange">bg-orange</button>
    <button disabled class="btn bg-orange btn-outline">bg-orange</button>
    <button disabled class="btn bg-red">bg-red</button>
    <button disabled class="btn bg-red btn-outline">bg-red</button>
    <button disabled class="btn bg-pink">bg-pink</button>
    <button disabled class="btn bg-pink btn-outline">bg-pink</button>
    <button disabled class="btn bg-purple">bg-purple</button>
    <button disabled class="btn bg-purple btn-outline">bg-purple</button>
    <button disabled class="btn bg-blue">bg-blue</button>
    <button disabled class="btn bg-blue btn-outline">bg-blue</button>
    <button disabled class="btn bg-cyan">bg-cyan</button>
    <button disabled class="btn bg-cyan btn-outline">bg-cyan</button>
    <button disabled class="btn bg-green">bg-green</button>
    <button disabled class="btn bg-green btn-outline">bg-green</button>
    <button disabled class="btn bg-white">bg-white</button>
    <button disabled class="btn bg-white btn-outline">bg-white</button>
    <button disabled class="btn bg-gray">bg-gray</button>
    <button disabled class="btn bg-gray btn-outline">bg-gray</button>
    <button disabled class="btn bg-black">bg-black</button>
    <button disabled class="btn bg-black btn-outline">bg-black</button>
    <button disabled class="btn bg-accent">bg-accent</button>
    <button disabled class="btn bg-accent btn-outline">bg-accent</button>
    <button disabled class="btn btn-link">btn-link</button>



  </div>
  <div class="footer text-right">
    <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="extras/button">&lt;code&gt;</button>
  </div>
</div>
{/if}
