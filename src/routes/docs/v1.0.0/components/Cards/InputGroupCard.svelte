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
  <div class="card opacity-0" id="input-group" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Input Group</h4>
    </div>
    <div class="body d-flex fd-col gap-4" bind:this={body}>
      <div class="input-group">
        <span class="bg-subtle">$</span>
        <input type="text" class="input" placeholder="Amount" />
        <button class="btn btn-secondary">Donate</button>
      </div>

      <div class="input-group max-w-md r-pill">
        <span class="bg-subtle">$</span>
        <input type="text" class="input" placeholder="Amount" />
        <button class="btn btn-secondary">Donate</button>
      </div>

      <div class="input-group max-w-md fs-3xl">
        <span class="bg-subtle">$</span>
        <input type="text" class="input" placeholder="Amount" />
        <button class="btn btn-secondary">Donate</button>
      </div>

      <div class="input-group max-w-md">
        <span class="bg-subtle"><i class="fa-solid fa-user"></i></span>
        <input type="text" class="input" placeholder="Username" />
        <span class="bg-subtle"><i class="fa-solid fa-lock"></i></span>
        <input type="password" class="input" placeholder="••••••••" />
      </div>

      <div class="input-group max-w-md valid">
        <span class="bg-green-50 dark:bg-green-820"><i class="fa-solid fa-check text-green"></i></span>
        <input type="text" class="input" placeholder="Valid group" />
      </div>

      <div class="input-group max-w-md invalid">
        <span class="bg-red-50 dark:bg-red-820"><i class="fa-solid fa-xmark text-red"></i></span>
        <input type="text" class="input" placeholder="Invalid group" />
      </div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="components/input-group">&lt;code&gt;</button>
    </div>
  </div>
{/if}
