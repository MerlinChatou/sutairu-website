<script>
  //import "@merlin-chatou/sutairu-core";
  import "$lib/generated/sutairu.min.css";
</script>

<h1 class="h1">Sutairu</h1>
<h2 class="h2">Introduction</h2>
<p>
  Welcome to this deliberately over-engineered, unnecessarily verbose, and mildly self-aware introduction section. If you're reading this, chances are you're
  either exploring how Markdown works, testing a rendering pipeline, or simply looking for well-structured filler content that convincingly resembles something
  meaningful.
</p>
<p>
  This document exists as a showcase—a playground, even—where syntax meets structure, and where simplicity is dressed up to look far more important than it
  really is. Markdown, at its core, is beautifully minimal. And yet here we are, stretching it to its limits with paragraphs that say a lot while committing to
  very little.
</p>

<div class="bg-red hover:bg-blue p-5 tr-bg-500-linear">Hover me</div>

<div class="d-grid grid-cols-6 gap-4 w-fit m-4 text-center">
  <div>Regular</div>
  <div>Hover</div>
  <div>Focus</div>
  <div>Focus-visible</div>
  <div>active</div>
  <div>Disabled</div>

  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-primary hover">Primary</button>
  <button class="btn btn-primary focus">Primary</button>
  <button class="btn btn-primary focus-visible">Primary</button>
  <button class="btn btn-primary active">Primary</button>
  <button class="btn btn-primary disabled">Primary</button>

  <button class="btn btn-secondary">secondary</button>
  <button class="btn btn-secondary hover">secondary</button>
  <button class="btn btn-secondary focus">secondary</button>
  <button class="btn btn-secondary focus-visible">secondary</button>
  <button class="btn btn-secondary active">secondary</button>
  <button class="btn btn-secondary disabled">secondary</button>
</div>

<style>
  .btn {
    --su-btn-x-padding: 0.5em;
    --su-btn-y-padding: 1em;
    --su-btn-border-width: 1px;
    --su-btn-radius: 0.375rem;

    --su-btn-primary-bg: var(--su-blue);
    --su-btn-primary-text: var(--su-white);
    --su-btn-primary-border: var(--su-blue);
    --su-btn-primary-outline: 0;

    --su-btn-primary-bg-hover: color-mix(var(--su-btn-primary-bg), #000 10%);
    --su-btn-primary-text-hover: var(--su-btn-primary-text);
    --su-btn-primary-border-hover: var(--su-btn-primary-bg-hover);
    --su-btn-primary-outline-hover: 0;

    --su-btn-primary-bg-focus: var(--su-btn-primary-bg);
    --su-btn-primary-text-focus: var(--su-btn-primary-text);
    --su-btn-primary-border-focus: var(--su-btn-primary-bg-focus);
    --su-btn-primary-outline-focus: 0;

    --su-btn-primary-bg-focus-visible: var(--su-btn-primary-bg-hover);
    --su-btn-primary-text-focus-visible: var(--su-btn-primary-text);
    --su-btn-primary-border-focus-visible: var(--su-btn-secondary-bg-hover);
    --su-btn-primary-outline-focus-visible: 4px solid oklch(from var(--su-blue) l c h / 30%);

    --su-btn-primary-bg-active: color-mix(var(--su-blue), #000 20%);
    --su-btn-primary-text-active: var(--su-btn-primary-text);
    --su-btn-primary-border-active: var(--su-btn-primary-bg-active);
    --su-btn-primary-outline-active: inherit;

    --su-btn-primary-bg-disabled: color-mix(var(--su-blue), #fff 50%);
    --su-btn-primary-text-disabled: var(--su-btn-primary-text);
    --su-btn-primary-border-disabled: var(--su-btn-primary-bg-disabled);
    --su-btn-primary-outline-disabled: 0;


    --su-btn-secondary-bg: var(--su-white);
    --su-btn-secondary-text: var(--su-black);
    --su-btn-secondary-border: color-mix(var(--su-white), #000 15%);
    --su-btn-secondary-outline: 0;

    --su-btn-secondary-bg-hover: color-mix(var(--su-btn-secondary-bg), #000 5%);
    --su-btn-secondary-text-hover: var(--su-title);
    --su-btn-secondary-border-hover: var(--su-btn-secondary-bg-hover);
    --su-btn-secondary-outline-hover: 0;

    --su-btn-secondary-bg-focus: var(--su-btn-secondary-bg);
    --su-btn-secondary-text-focus: var(--su-btn-secondary-text);
    --su-btn-secondary-border-focus: var(--su-btn-secondary-border);
    --su-btn-secondary-outline-focus: 0;

    --su-btn-secondary-bg-focus-visible: var(--su-btn-secondary-bg-hover);
    --su-btn-secondary-text-focus-visible: var(--su-btn-secondary-text);
    --su-btn-secondary-border-focus-visible: var(--su-btn-secondary-border);
    --su-btn-secondary-outline-focus-visible: 4px solid oklch(from var(--su-gray) l c h / 10%);

    --su-btn-secondary-bg-active: color-mix(var(--su-blue), #000 20%);
    --su-btn-secondary-text-active: var(--su-btn-secondary-text);
    --su-btn-secondary-border-active: var(--su-btn-secondary-bg-active);
    --su-btn-secondary-outline-active: 0;

    --su-btn-secondary-bg-disabled: color-mix(var(--su-blue), #fff 50%);
    --su-btn-secondary-text-disabled: var(--su-btn-secondary-text);
    --su-btn-secondary-border-disabled: var(--su-btn-secondary-bg-disabled);
    --su-btn-secondary-outline-disabled: 0;



    appearance: button;
    display: inline-block;
    padding: var(--su-btn-x-padding) var(--su-btn-y-padding);
    border-radius: var(--su-btn-radius);
    border-width: var(--su-btn-border-width);
    border-style: solid;
    box-shadow: var(--su-btn-shadow);
  }

  .btn-primary {
    background-color: var(--su-btn-primary-bg);
    border-color: var(--su-btn-primary-border);
    color: var(--su-btn-primary-text);
    outline: var(--su-btn-primary-outline);
  }
  .btn-primary:hover,
  .btn-primary.hover {
    background-color: var(--su-btn-primary-bg-hover);
    border-color: var(--su-btn-primary-border-hover);
    color: var(--su-btn-primary-text-hover);
    outline: var(--su-btn-primary-outline-hover);
    cursor: pointer;
  }

  .btn-primary:focus,
  .btn-primary.focus {
    background-color: var(--su-btn-primary-bg-focus);
    border-color: var(--su-btn-primary-border-focus);
    color: var(--su-btn-primary-text-focus);
    outline: var(--su-btn-primary-outline-focus);
  }

  .btn-primary:focus-visible,
  .btn-primary.focus-visible {
    background-color: var(--su-btn-primary-bg-focus-visible);
    border-color: var(--su-btn-primary-border-focus-visible);
    color: var(--su-btn-primary-text-focus-visible);
    outline: var(--su-btn-primary-outline-focus-visible);
  }

  .btn-primary:active,
  .btn-primary.active {
    background-color: var(--su-btn-primary-bg-active);
    border-color: var(--su-btn-primary-border-active);
    color: var(--su-btn-primary-text-active);
    outline: var(--su-btn-primary-outline-active);
  }

  .btn-primary.disabled {
    background-color: var(--su-btn-primary-bg-disabled);
    border-color: var(--su-btn-primary-border-disabled);
    color: var(--su-btn-primary-text-disabled);
    outline: var(--su-btn-primary-outline-disabled);
    cursor: not-allowed;
  }




  .btn-secondary {
    background-color: var(--su-btn-secondary-bg);
    border-color: var(--su-btn-secondary-border);
    color: var(--su-btn-secondary-text);
    outline: var(--su-btn-secondary-outline);
  }
  .btn-secondary:hover,
  .btn-secondary.hover {
    background-color: var(--su-btn-secondary-bg-hover);
    border-color: var(--su-btn-secondary-border-hover);
    color: var(--su-btn-secondary-text-hover);
    outline: var(--su-btn-secondary-outline-hover);
    cursor: pointer;
  }

  .btn-secondary:focus,
  .btn-secondary.focus {
    background-color: var(--su-btn-secondary-bg-focus);
    border-color: var(--su-btn-secondary-border-focus);
    color: var(--su-btn-secondary-text-focus);
    outline: var(--su-btn-secondary-outline-focus);
  }

  .btn-secondary:focus-visible,
  .btn-secondary.focus-visible {
    background-color: var(--su-btn-secondary-bg-focus-visible);
    border-color: var(--su-btn-secondary-border-focus-visible);
    color: var(--su-btn-secondary-text-focus-visible);
    outline: var(--su-btn-secondary-outline-focus-visible);
  }

  .btn-secondary:active,
  .btn-secondary.active {
    background-color: var(--su-btn-secondary-bg-active);
    border-color: var(--su-btn-secondary-border-active);
    color: var(--su-btn-secondary-text-active);
    outline: var(--su-btn-secondary-outline-active);
  }

  .btn-secondary.disabled {
    background-color: var(--su-btn-secondary-bg-disabled);
    border-color: var(--su-btn-secondary-border-disabled);
    color: var(--su-btn-secondary-text-disabled);
    outline: var(--su-btn-secondary-outline-disabled);
    cursor: not-allowed;
  }
</style>
