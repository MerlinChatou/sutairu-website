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
  <span class="icon i-twitter r-2"></span>
  <span class="icon i-github ol-blue"></span>
  <span class="icon i-discord"></span>
  <span class="icon i-search"></span>  
  <span class="icon i-none bg-accent"></span>  
  <span class="icon i-user-solid text-blue bg-blue-200 r-1 fs-5xl"></span>  
  <span class="icon i-sign-in-solid"></span>  
  <span class="icon i-sign-in-solid rot-90"></span>  
  <span class="icon i-sign-in-solid rot-180"></span>  
  <span class="icon i-sign-in-solid -rot-90"></span>  
  <div class="stack fs-5xl h-fit">
    <span class="icon i-car-front-small text-blue"></span>
    <span class="icon i-circle-line-wide text-red"></span>
  </div>
  <span class="icon i-times-wide"></span>
  text
  <p>This is a test of the Sutairu icon <span class="icon i-search"></span> bla <i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i> bla</p>
</div>

<button class="btn btn-primary" aria-label="Twitter">
  <i class="icon i-twitter"></i>
</button>
<button class="btn btn-primary">btn-primary</button>

<span class="my-loader-clip text-red ps-center"></span>
