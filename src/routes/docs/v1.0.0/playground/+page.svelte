<script>
  import "../lib/generated/sutairu-v1-0-0.min.css";
  import { Modal } from "@merlin-chatou/sutairu";
  import Navbar from "../components/Navbar.svelte";
  import iconsMeta from "@merlin-chatou/sutairu/icons-meta";
  import iconsData from "@merlin-chatou/sutairu/icons-data";
  import MiniSearch from "minisearch";

  import { onMount } from "svelte";
  onMount(() => {
    Modal.init();
  });
</script>

<!-- Wrapper takes up the full viewport height -->
<div class="d-flex fd-col min-h-100vh">
  <Navbar />

  <!-- Container automatically stretches to fill the remaining space -->
  <div class="w-full grow-1 border b-red pos-rel">
    <button class="pos-abs tip tip- mt-5">
      Save
      <span class="tip-body">Saves to the <b>cloud</b> <kbd>⌘S</kbd></span>
    </button>

    <div class="pos-abs right-0 tip tip-bottom">
      top-right
      <span class="tip-body">Tooltip</span>
    </div>

    <p class="pos-abs bottom-0 tip tip-right" tabindex="-1">
      Non-interactive text
      <span class="tip-body"
        ><strong>Hello</strong><img
          src="https://yt3.googleusercontent.com/cZr7W7xAZOa1A6M3ow_NVjCwIBxJMYCPCr0maqCkr4nANmzNzJzagUXPMx9nxZ2b2RWW6tzu0lk=s160-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </span>
    </p>

    <div class="pos-abs right-0 bottom-0 tip m-3">
      top-right
      <span class="tip-body">Tooltip</span>
    </div>
  </div>
</div>

