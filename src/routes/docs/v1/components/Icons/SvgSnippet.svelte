<script>
  import hljs from "highlight.js";
  import copy from "clipboard-copy";
  import { fly } from "svelte/transition";
  import { cubicOut } from 'svelte/easing';
  import { iconPath } from "../../lib/icons/SearchEngine";


  // Accept the icon name as a prop
  let { name = "" } = $props();
  let copied = $state(false);

  // Reactively build the code string and highlight it
  let codeString = $derived(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#000" d="${iconPath(name)}"/></svg>`);
  let highlightedCode = $derived(name ? hljs.highlight(codeString, { language: "html" }).value : "");

  async function handleCopy() {
    await copy(codeString);
    copied = true;
    setTimeout(() => (copied = false), 50);
  }
</script>

<div class="pos-rel">
  {#if name}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->

    <pre class="py-0 my-0"><code class="language-html ws-pre-wrap wb-word my-0 w-full cur-pointer" onclick={handleCopy}>{@html highlightedCode}</code></pre>
    {#if copied}
      <div class="pos-abs left-middle top-middle left-0 top-0">
        <div out:fly={{ y: -120, duration: 1200, opacity: 0 , easing: cubicOut }} class="bg-accent-300 border b-body dark:bg-accent-700 p-3 r-2">Copied!</div>
      </div>
    {/if}
  {/if}
</div>