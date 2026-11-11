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



<div class="flex-y border b-red p-4 w-fit h-200px gap-2">
  <div class="border b-blue">Header</div>
  <div class="border b-green grow-2">Body</div>
  <div class="border b-purple grow-1">Footer</div>
</div>