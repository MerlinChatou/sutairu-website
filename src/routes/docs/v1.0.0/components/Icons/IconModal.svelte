<script>
  import { onMount } from "svelte";
  import { iconUri, iconOverlayUri } from "../../lib/icons/SearchEngine.js";
  // Get current version
  let modal;
  let icon = $state({ name: "Loading...", path: "hourglass-half-solid" });

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
    icon.name = triggerElement.dataset.iconName;
    icon.path = iconUri(icon.name);
  }
</script>

<div class="modal" id="icon-modal"  data-close-modal bind:this={modal}>
  <div class="modal-content w-md max-100">
    <div class="header">
      <h3><i class="icon dynamic-icon" style:--icon-path={icon.path}></i> {icon.name}</h3>
      <button type="button" class="btn-close" data-close-modal aria-label="Close"></button>
    </div>
    <div class="body">
      <div class="card p-2">
        {#if icon.path}
        <div class="stack w-full max-w-300px ar-1 mx-auto group">      
          <div class="w-full border opacity-0 group-hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path style="fill:none;stroke:CurrentColor;stroke-width:0.8;stroke-opacity:1;" d="M0,0V1000 M125,0V1000 M250,0V1000 M375,0V1000 M500,0V1000 M625,0V1000 M750,0V1000 M875,0V1000 M1000,0V1000 M0,0H1000 M0,125H1000 M0,250H1000 M0,375H1000 M0,500H1000 M0,625H1000 M0,750H1000 M0,875H1000 M0,1000H1000"/></svg>  
          </div>
          <i class="icon dynamic-icon text-accent/60 w-full" style:--icon-path={icon.path}></i>
          <i class="icon dynamic-icon w-full text-black dark:text-white opacity-0 group-hover:opacity-50" style:--icon-path={iconOverlayUri(icon.name)}></i>
        </div>
        {:else}
          <p>Loading...</p>
        {/if}
        
      </div>
    </div>
    <div class="footer">
      <button data-close-modal class="btn btn-neutral">Close</button>
    </div>
  </div>
</div>

<style>
  .dynamic-icon::before {
    mask-image: var(--icon-path);
  }
</style>
