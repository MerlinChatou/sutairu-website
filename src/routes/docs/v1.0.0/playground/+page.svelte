<script>
  import "../lib/generated/sutairu-v1-0-0.min.css";
  import { compileCSS } from "@merlin-chatou/sutairu/compiler";
  import Navbar from "../components/Navbar.svelte";
  import hljs from "highlight.js";
  import beautify from "js-beautify";
  import { onMount } from "svelte";

  let outputEl; 
  let inputEl;

  // Shared compilation & formatting function
  async function updateCSS(text) {
    const classes = (text || "").split(/\s+/).filter(Boolean);
    const rawCss = await compileCSS(classes);

    const formattedCss = /** @type {any} */ (beautify).css(rawCss, {
      indent_size: 2,
      space_around_combinator: true,
    });

    if (outputEl) {
      outputEl.textContent = formattedCss;
      delete outputEl.dataset.highlighted;
      outputEl.classList.remove("hljs");
      hljs.highlightElement(outputEl);
    }
  }

  function handleInput(event) {
    updateCSS(event.target.value);
  }

  // Run immediately when the component mounts
  onMount(() => {
    if (inputEl) {
      updateCSS(inputEl.value);
    }
  });
</script>

<div class="d-flex fd-col h-100vh ov-hidden">
  <Navbar />
  <div class="w-full grow-1 min-h-0 d-grid grid-rows-[minmax(0,1fr)minmax(0,2fr)]">
    <div class="pos-rel ov-hidden flex-y bb-0">
      <div class="label pos-abs top-0 left-0 pe-none px-4 py-1.5 fw-bold fs-xs ls-1px text-white bg-accent z-10">INPUT (SPACE SEPARATED)</div>
      <textarea
        bind:this={inputEl}
        on:input={handleInput}
        class="grow-1 resize-none input ff-mono m-0 b-0 p-4 pt-8 lh-1.5"
        placeholder="m-3 !bg-blue-123/83 m-5"></textarea>
    </div>
    <div class="pos-rel ov-hidden flex-y">
      <div class="label pos-abs top-2px left-0 pe-none px-4 py-1.5 fw-bold fs-xs ls-1px text-white bg-accent z-10">GENERATED CSS</div>
      <pre class="w-full grow-1 bt-2 flex-y m-0 ov-auto">
        <code bind:this={outputEl} class="language-css w-full grow-1 ov-auto ff-mono m-0 lh-1.5 !p-4 !pt-8 b-0 d-block"></code>
      </pre>
    </div>
  </div>
</div>