<script>
  import { iconUri } from "../../lib/icons/SearchEngine.js";
  let { icon } = $props();
</script>


<div class="card w-100% ar-1 max-w-100% mx-auto d-flex fd-col">
   <div class="header text-center flex-1 bb-0">
      <i class="icon dynamic-icon h-48px w-48px" style:--icon-path={iconUri(icon.name)}></i>
  </div>
  <div class="footer bg-subtle fs-0.75rem text-center align-cc p-3 grow-1">
    <span>{icon.name}</span>
  </div>
</div>



<style>
  .dynamic-icon::before {
    mask-image: var(--icon-path);
  }
</style>