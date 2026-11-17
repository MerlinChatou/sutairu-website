<script>
  import { browser } from "$app/env";
  import colorScheme from "@merlin-chatou/color-scheme";  
  import { theme, previewTheme } from '../../../lib/theme';
  let currentColorScheme = $state("light");

  let { buttonTheme } = $props();

  if (browser) {
    // Listen color scheme changes
    colorScheme.addEventListenerOnChange(() => {
      currentColorScheme = colorScheme.get().current;
    });

    // Set default color scheme on page load
    currentColorScheme = colorScheme.get().current;
  }
</script>

<button
  class="btn btn-secondary flex-x h-fit w-100% tt-capitalize"  
  class:b-accent={buttonTheme === $theme}  
  data-color-scheme={currentColorScheme}
  data-theme={buttonTheme}
  onmouseenter={() => { $previewTheme = buttonTheme} }
  onmouseleave={() => { $previewTheme = null} }
  onclick={() => {
    $theme = buttonTheme;
    $previewTheme = null;
    }
  }
>
  <i class="icon i-check text-accent" class:opacity-0={buttonTheme !== $theme}></i>
  <div class="grow-1 text-left ml-2">{buttonTheme}</div>
  <div class="bg-page-600 dark:bg-page-400 as-center p-1 d-flex gap-2 ml-2 r-pill">
    <span class="d-inline-block bg-accent r-pill h-2 w-2"></span>
    <span class="d-inline-block bg-body r-pill h-2 w-2"></span>
    <span class="d-inline-block bg-subtle r-pill h-2 w-2"></span>
  </div>
</button>
