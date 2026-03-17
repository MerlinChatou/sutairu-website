<script>
  import hljs from "highlight.js";
  import { escapeHtml } from "$lib/utils/escapeHtml";
  import { onMount } from "svelte";
  import { searchState } from "../../state/search.svelte.js";
  import { containsAllSubstrings } from "$lib/utils/containAllSubstring.js";
  import { fade } from "svelte/transition";

  // import "@merlin-chatou/sutairu-extras/code-highlight/style";

  const jsCode = `// JavaScript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));`;

  const cssCode = `/* CSS */
p { color: green }`;

  const htmlCode = `<!-- HTML -->
<div class="bg-page">
  Dark mode
</div>`;

  const pyCode = escapeHtml(`# Python
adj = ["green", "big"]
fruits = ["apple", "banana"]

for x in adj:
  for y in fruits:
    print(x, y)`);

  function highlightAll() {
    if (!body) return;

    // Get all <code> elements inside the container
    const codeEls = body.querySelectorAll("code");

    codeEls.forEach((el) => {
      // set text content safely to prevent warning
      el.textContent = el.dataset.code; 
      // Remove Highlight.js flag so it can re-highlight
      delete el.dataset.highlighted;
      // Re-run Highlight.js
      hljs.highlightElement(el);
    });
  }


  let header = $state();
  let body = $state();
  let cardEl = $state();
  let isVisible = $state(true);
  let rawText, cardId;

  // Get raw text on mount
  onMount(() => {
    // Get card text
    rawText = (header.textContent + " " + body.textContent).toLocaleLowerCase();
    cardId = cardEl.id;
    // Highlight codes
    highlightAll();
  });

  // On query change
  $effect(() => {
    // If query is empty, show all cards otherwise show if in search query
    if (searchState.queries.length === 0) isVisible = true;
    else isVisible = containsAllSubstrings(rawText, searchState.queries);
        if (isVisible) searchState.visibleCards.add(cardId);
    else searchState.visibleCards.delete(cardId);
    highlightAll();
  });
</script>

{#if isVisible}
  <div class="card" id="code" transition:fade={{ duration: 250 }} bind:this={cardEl}>
    <div class="header d-flex jc-between ai-center" bind:this={header}>
      <h4 class="h4">Code Highlight</h4>
      <i class="fa-solid fa-puzzle-piece fs-xl text-accent text-200 dark:text-700" title="Optional Add-on"></i>
    </div>
    <div class="body" bind:this={body}>
      <pre><code class="language-js rounded-2 w-full my-0" data-code={jsCode}></code></pre>
      <pre><code class="language-css rounded w-full mb-0" data-code={cssCode}></code></pre>
      <pre><code class="language-html rounded w-full mb-0" data-code={htmlCode}></code></pre>
      <pre><code class="language-python rounded w-full mb-0" data-code={ pyCode}></code></pre>
    </div>
    <div class="footer text-right">
      <button class="btn bg-accent ff-mono" data-open-modal="documentation-modal" data-documentation="extras/code-highlight">&lt;code&gt;</button>
    </div>
  </div>
{/if}
