<script>
  import { iconUri } from "../../lib/icons/SearchEngine.js";
  let { icon } = $props();
</script>


<div class="card w-100% ar-1 max-w-100% mx-auto text-black-350 hover:text-black dark:text-white-580 d-flex dark:hover:text-white fd-col hover:b-accent/60 group hover:cur-pointer tr-border-250" data-open-modal="icon-modal" data-icon-name={icon.name}>
   <div class="header text-center flex-1 bb-0">
      <i class="icon dynamic-icon h-48px w-48px group-hover:sc-120 tr-all-250" style:--icon-path={iconUri(icon.name)}></i>
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