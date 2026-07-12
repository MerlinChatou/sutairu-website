<script>
  import { onMount } from "svelte";
  import { searchState } from "../../state/search.svelte.js";
  import { containsAllSubstrings } from "$lib/utils/containAllSubstring.js";
  
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
  <div class="card opacity-0" id="group" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Group</h4>
    </div>
    <div class="body d-flex fd-col gap-0" bind:this={body}>
        
      <div class="group-row border bg-container r-2">
        <img src="/images/rustine.png" alt="Rustine the dog" class="group-item h-10 w-10 shrink-0 m-2 r-circle bg-subtle-600 dark:bg-subtle-400" />
        <div class="group-item p-2 pb-4 grow-0">
          <div class="bold mt-2">Rustine the dog</div>
          <div class="mt-4 fs-0.9rem">Rustine is Merlin Chatou's faithful four-legged sidekick.</div>    
        </div>
      </div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="components/group">&lt;code&gt;</button>
    </div>
  </div>
{/if}
