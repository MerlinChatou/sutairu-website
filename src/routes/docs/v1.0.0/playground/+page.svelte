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

<Navbar />



<div class="flex-x fs-3xl gap-2">
  <i class="icon i-prohibitory-line-wide"></i>
  <i class="icon i-circle-solid"></i>
  <i class="icon i-circle-line-wide"></i>
  <i class="icon i-square-solid"></i>
  <i class="icon i-square-line-wide"></i>
  <i class="icon i-triangle-solid"></i>
  <i class="icon i-triangle-line-wide"></i>  
  <i class="icon i-equilateral-solid"></i>
  <i class="icon i-equilateral-line-wide"></i>  
  <i class="icon i-octagon-solid"></i>
  <i class="icon i-octagon-line-wide"></i>
  <i class="icon i-hexagon-solid"></i>
  <i class="icon i-hexagon-line-wide"></i>
</div>