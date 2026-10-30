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
  <div class="body p-4 flex-y gap-4 ff-mono"></div>
</div>

<span class="my-loader-clip text-red ps-center"></span>

