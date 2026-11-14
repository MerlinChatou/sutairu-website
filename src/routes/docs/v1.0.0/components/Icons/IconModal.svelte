<script>
  import { onMount } from "svelte";
  import IconDetails from "./IconDetails.svelte";
  import HtmlSnippet from "./HtmlSnippet.svelte";
  import SvgSnippet from "./SvgSnippet.svelte";
  import { iconUri } from "../../lib/icons/SearchEngine.js";
  import { getCategoryByName } from "../../lib/icons/SearchEngine.js";

  // Get current version
  let modal;
  let icon = $state({ name: "", path: "" });
  // Reference to bind the <code> DOM element
  
  // Populate the modal on opening
  onMount(() => {
    modal.addEventListener("onModalOpen", populateModal);
    return () => {
      modal.removeEventListener("onModalOpen", populateModal);
    };
  });

  async function populateModal(event) {
    // Get trigger button and documentation ID
    const triggerElement = event.triggerEvent.target.closest("[data-icon-name]");
    if (triggerElement) {
      icon.name = triggerElement.dataset.iconName;
      icon.path = iconUri(icon.name);
    }
  }
</script>

<div class="modal" id="icon-modal" data-close-modal bind:this={modal}>
  <div class="modal-scroll">
    <div class="modal-content w-md max-100">
      <div class="header">
        <h3 class="h3 flex-x ai-center gap-2">
          <i class="icon dynamic-icon fs-2xl text-body/50" style:--icon-path={icon.path}></i>
          {icon.name}
          <span class="fs-md text-body/50">({getCategoryByName(icon.name)})</span>
        </h3>
        <button type="button" class="btn-close" data-close-modal aria-label="Close"></button>
      </div>
      <div class="body flex-y gap-4 p-4">
        <IconDetails {icon} />
        <div class="flex-y">
          <span class="pb-1 fs-sm">HTML</span>
          <HtmlSnippet name={icon.name} />
        </div>

        <div class="flex-y">
          <span class="pb-1 fs-sm">SVG</span>
          <SvgSnippet name={icon.name} />
        </div>

      </div>
      <div class="footer text-right">
        <button data-close-modal class="btn btn-neutral">Close</button>
      </div>
    </div>
  </div>
</div>

<style>
  .dynamic-icon::before {
    mask-image: var(--icon-path);
  }
</style>
