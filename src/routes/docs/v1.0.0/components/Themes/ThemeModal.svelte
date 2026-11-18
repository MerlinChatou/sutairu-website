<script>
  import { THEMES } from "../../lib/theme.js";
  import ThemeButtons from "../Themes/ThemeButtons.svelte";
</script>

<div class="modal no-blur" id="themes-picker-modal">
  <div class="modal-content w-screen max-w-600px">
    <div class="header">
      <h2 class="h2 my-0">Themes</h2>
      <button type="button" class="btn-close" data-close-modal aria-label="Close"></button>
    </div>
    <div class="body flex-y gap-2">
      {#each THEMES as theme}
        <ThemeButtons buttonTheme={theme} />
      {/each}
    </div>
    <div class="footer text-right">
      <button data-close-modal class="btn btn-neutral">Close</button>
    </div>
  </div>
</div>
