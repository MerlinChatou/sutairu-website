<script>
  import { browser } from "$app/environment";
  import colorScheme from "@merlin-chatou/color-scheme";

  let currentColorScheme = $state("light");
  let { theme } = $props();
  let currentTheme;

  if (browser) {
    // Listen color scheme changes
    colorScheme.addEventListenerOnChange(() => {
      currentColorScheme = colorScheme.get().current;
    });

    // Set default color scheme on page load
    currentColorScheme = colorScheme.get().current;
  }

  function handleEnter() {
    currentTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", theme);
  }

  function handleLeave() {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }
</script>

<button
  class="btn btn-secondary d-flex jc-between h-fit w-100% tt-capitalize"
  data-color-scheme={currentColorScheme}
  data-theme={theme}
  onmouseenter={handleEnter}
  onmouseleave={handleLeave}
>
  <div>{theme}</div>
  <div class="bg-page-600 dark:bg-page-400 as-center p-1 d-flex gap-2 ml-2 r-pill">
    <span class="d-inline-block bg-accent r-pill h-2 w-2"></span>
    <span class="d-inline-block bg-body r-pill h-2 w-2"></span>
    <span class="d-inline-block bg-subtle r-pill h-2 w-2"></span>
  </div>
</button>
