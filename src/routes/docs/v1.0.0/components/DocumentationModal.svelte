<script>
  import { docsVersion } from "$lib/stores/docs";
  import { onMount } from "svelte";
  import { Scroll } from "@merlin-chatou/sutairu/utils";

  import hljs from "highlight.js";

  // import "@merlin-chatou/sutairu-extras/ui-anim/style";

  import { beforeNavigate } from "$app/navigation";

  let bodyContentEl = $state();
  let docTitle = $state("");
  let isLoading = $state(true);
  let isFailing = $state(false);

  // Get current version
  let version;
  let modal;

  // Populate the modal on opening
  onMount(() => {
    isLoading = true;
    isFailing = false;
    modal.addEventListener("onModalOpen", populateModal);
    return () => {
      modal.removeEventListener("onModalOpen", populateModal);
    };
  });

  // Unlock the scroll bar on route change
  beforeNavigate(() => {
    isLoading = true;
    isFailing = false;
    Scroll.unlock();
  });

  function highlightModalCode(modalEl) {
    modalEl.querySelectorAll("pre code").forEach((block) => {
      if (!block.dataset.highlighted) {
        hljs.highlightElement(block);
        block.dataset.highlighted = "true";
      }
    });
  }

  let bodyContent = "";
  async function populateModal(event) {
    isLoading = true;
    isFailing = false;

    // Get trigger button and documentation ID
    const triggerElement = event.triggerEvent.target;
    const documentationId = triggerElement.dataset.documentation;

    // Fetch content from server
    const res = await fetch(`/docs/${$docsVersion.current}/${documentationId}.html`);
    if (!res.ok) {
      isFailing = true;
      isLoading = false;
      throw new Error(`Failed to load documentation: ${res.status}`);
    }

    // Append content to body
    bodyContentEl.innerHTML = await res.text();

    // Get documentation title
    const titleEl = bodyContentEl.querySelector("h1");

    // Apply documentation title to the header
    docTitle = titleEl.textContent;
    // Remove the title from body
    titleEl.remove();

    // Show the modal content
    isLoading = false;
    isFailing = false;

    //hljs.highlightAll();
    highlightModalCode(modal);
  }
</script>

<div id="documentation-modal" role="dialog" tabindex="-1" bind:this={modal} aria-modal="true" class="modal" data-close-modal>
  <div class="modal-content w-xl max-100">
    <div class="header">
      <div>
        <div class="h2 m-0" class:d-none={!isLoading}>Loading...</div>
        <div class="h2 m-0" class:d-none={!isFailing}><i class="fa-solid fa-circle-exclamation"></i> Something wrong occured</div>
        <h1 class="h1 m-0" class:d-none={isLoading || isFailing}>{docTitle}</h1>
      </div>
      <button type="button" class="btn-close hover:bg-gray/10" data-close-modal aria-label="Close"></button>
    </div>
    <div class="body py-4">
      <div id="documentation-modal-loader" class="v-flex gap-3" class:d-none={!isLoading}>
        <div class="loader-skeleton h-2rem0px r-3 dark:fg-subtle dark:fg-400"></div>
        <div class="loader-skeleton h-64px w-1/2 r-3 dark:fg-subtle dark:fg-400"></div>
        <div class="loader-skeleton h-2rem0px r-3 dark:fg-subtle dark:fg-400"></div>
        <div class="loader-skeleton h-2rem0px r-3 dark:fg-subtle dark:fg-400"></div>
        <div class="loader-skeleton h-2rem0px r-3 dark:fg-subtle dark:fg-400"></div>
      </div>
      <!--
      <div id="documentation-modal-loader" class="text-center" class:d-none={!isLoading}>
        <div class="mb-5">Documentation is loading, please wait.</div>
        <span class="loader h-64px"></span>
      </div>
-->
      <div id="documentation-modal-error" class="text-center" class:d-none={!isFailing}>
        <i class="fa-regular fa-face-frown fs-64px text-orange"></i>
        <div class="text-orange my-4">Documentation is unreachable, please try later or reload page.</div>
      </div>

      <div id="documentation-modal-content" class:d-none={isFailing || isLoading} bind:this={bodyContentEl}>{@html bodyContent}</div>
    </div>
    <div class="footer text-right">
      <button class="btn btn-neutral" data-close-modal>Close</button>
    </div>
  </div>
</div>
