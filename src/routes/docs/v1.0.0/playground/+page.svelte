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
<div class="card w-350px m-5">
  <div class="body p-4 flex-y gap-4 ff-mono">
    <div class="card w-fit text-center d-grid grid-cols-4 gap-4 p-4 pi-center">
      <span class="loader-dots-spin text-red"></span>
      <span class="loader-dots-spin text-blue"></span>
      <span class="loader-dots-spin text-purple"></span>
      <span class="loader-dots-spin text-green anim-dur-2000 fs-2xl"></span>
    </div>
  </div>
</div>

<span class="my-loader-clip text-red ps-center"></span>
