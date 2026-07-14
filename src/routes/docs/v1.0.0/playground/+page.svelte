<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "$lib/generated/sutairu.min.css";
  import { Modal } from "@merlin-chatou/sutairu";
  import Navbar from "../components/Navbar.svelte";

  import { onMount } from "svelte";
  onMount(() => {
    Modal.init();
  });
</script>

<Navbar />
<div class="container p-4 flex-y gap-4"></div>

<button class="btn btn-primary" data-open-modal="modal-id">Launch demo modal</button>

<div class="modal no-blur" id="modal-id">
  <div class="modal-content">
    <div class="header">
      <h2>Modal Title</h2>
      <button type="button" class="btn-close" data-close-modal aria-label="Close"></button>
    </div>    
    <div class="body">
      <p>This is the modal content area.</p>
    </div>    
    <div class="footer">
      <button data-close-modal class="btn btn-neutral">Close</button>
    </div>
  </div>
</div>

<div class="modal">
  <div class="modal-content">
    <div class="header">
      <h3>Modal Title</h3>
    </div>

    <div class="body">
      <p>Your content goes here...</p>
    </div>

    <div class="footer">
      <button>Cancel</button>
      <button class="primary">Confirm</button>
    </div>
  </div>
</div>
