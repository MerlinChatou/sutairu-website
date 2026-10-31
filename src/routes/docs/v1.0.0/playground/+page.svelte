<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "#lib/generated/sutairu.min.css";
  import { Modal } from "@merlin-chatou/sutairu";
  import Navbar from "../components/Navbar.svelte";

  import { onMount } from "svelte";
  onMount(() => {
    Modal.init();
  });
</script>

<Navbar />
<div class="card w-fit m-5 flex-x gap-2 p-3">
  <span class="i-twitter r-2"></span>
  <span class="i-github ol-blue"></span>
  <span class="i-discord"></span>
  <span class="i-search"></span>
  <p>This is a test of the Sutairu icon <span class="i-search"></span> bla <i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i> bla</p>
</div>

<span class="my-loader-clip text-red ps-center"></span>
