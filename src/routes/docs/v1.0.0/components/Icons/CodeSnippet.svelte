<script>
  import hljs from "highlight.js";
  import copy from "clipboard-copy";

  // Accept the icon name as a prop
  let { name = "" } = $props();
  let copied = $state(false);

  // Reactively build the code string and highlight it
  let codeString = $derived(`<i class="icon i-${name}"></i>`);
  let highlightedCode = $derived(name ? hljs.highlight(codeString, { language: "html" }).value : "");

  async function handleCopy() {
    await copy(codeString);
    copied = true;
    setTimeout(() => (copied = false), 1200);
  }
</script>

<div class="pos-rel">
  {#if name}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->

    <pre class="py-0 my-0"><code class="language-html my-0 w-full cur-pointer" onclick={handleCopy}>{@html highlightedCode}</code></pre>
    {#if copied}
      <div class="pos-abs left-middle top-middle left-0 top-0">
        <div class="bg-accent-300 dark:bg-accent-700 p-3 r-2 anim-move-up anim-dur-1200">
          Copied!
        </div>
      </div>
    {/if}
  {/if}
</div>

<style>
.anim-move-up {
  animation-name: moveUp;  
}
@keyframes moveUp {
  from { transform: translateY(0); }
  to { transform: translateY(-80px); }
}
</style>