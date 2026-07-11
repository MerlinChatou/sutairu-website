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
  <div class="card opacity-0" id="form" bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Form</h4>
    </div>
    <div class="body d-flex fd-col gap-0" bind:this={body}>
      <div>
        <label for="exampleInputText" class="input-label">Text input</label>
        <input type="text" class="input" id="exampleInputText" placeholder="Default Input" />
      </div>

      <div>
        <label for="exampleInputPassword" class="input-label">Password</label>
        <input type="password" class="input" id="exampleInputPassword" placeholder="••••••••" autocomplete="off" />
      </div>

      <div>
        <label for="exampleInputTextarea" class="input-label">Textarea</label>
        <textarea class="input" id="exampleInputTextarea" rows="5" placeholder="Comments"></textarea>
      </div>

      <div>
        <label for="exampleInputFormFile" class="input-label">File input</label>
        <input class="input" type="file" id="exampleInputFormFile" />
      </div>

      <div>
        <label for="exampleInputSelect" class="input-label">Select</label>
        <select class="input" aria-label="Default select example" id="exampleInputSelect">
          <option selected>Select</option>
          <option value="1">First choice</option>
          <option value="2">Second choice</option>
          <option value="3">Third choice</option>
        </select>
      </div>

      <div>
        <label for="exampleInputDisabled" class="input-label">Disabled input</label>
        <input type="text" class="input" id="exampleInputDisabled" placeholder="Disabled Input" disabled />
      </div>

      <div>
        <label for="exampleInputValid" class="input-label">Valid input</label>
        <input type="text" class="input valid" id="exampleInputValid" placeholder="Valid Input" />
      </div>

      <div>
        <label for="exampleInputInvalid" class="input-label">Invalid input</label>
        <input type="text" class="input invalid" id="exampleInputInvalid" placeholder="Invalid Input" />
      </div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-primary ff-mono" data-open-modal="documentation-modal" data-documentation="components/input">&lt;code&gt;</button>
    </div>
  </div>
{/if}
