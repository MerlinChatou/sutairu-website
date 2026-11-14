<script>
  import { onMount } from "svelte";
  import IconDetails from "./IconDetails.svelte";
  import CodeSnippet from "./CodeSnippet.svelte";
  import { iconUri } from "../../lib/icons/SearchEngine.js";

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
  <div class="modal-content w-md max-100">
    <div class="header">
      <h3><i class="icon dynamic-icon" style:--icon-path={icon.path}></i> {icon.name}</h3>
      <button type="button" class="btn-close" data-close-modal aria-label="Close"></button>
    </div>
    <div class="body flex-y gap-4 p-4">
      <IconDetails {icon} />
      <CodeSnippet name={icon.name} />
    </div>
    <div class="footer text-right">
      <button data-close-modal class="btn btn-neutral">Close</button>
    </div>
  </div>
</div>

<style>
  .dynamic-icon::before {
    mask-image: var(--icon-path);
  }
</style>
