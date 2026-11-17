<script>   
  import ThemeModal from "./ThemeModal.svelte";
  import { theme, previewTheme } from '../../lib/theme';
</script>

<button class="btn btn-secondary r-pill p-3px gap-1 fs-xs" data-open-modal="modal-id">  
  <i class="icon i-palette-solid fs-lg d-none md:d-inline-flex text-accent/80"></i>

  <span class="d-none md:d-block mr-1">{$previewTheme ?? $theme}</span>
  <span class="bg-container r-pill w-fit d-flex p-1px gap-1">
    <span class="bg-accent w-12px h-12px r-pill d-inline-block m-0"></span>
    <span class="bg-subtle w-12px h-12px r-pill d-inline-block m-0"></span>
  </span>
</button>



<ThemeModal />


