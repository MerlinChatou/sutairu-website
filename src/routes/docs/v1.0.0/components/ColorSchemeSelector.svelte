<script>
  import { browser } from "$app/environment";
  import colorScheme from "@merlin-chatou/color-scheme";

  let currentColorScheme = $state('light dark');

  if (browser) {
    // Initialize color scheme module
    colorScheme.setup();

    // Listen color scheme changes
    colorScheme.addEventListenerOnChange(setCssColorScheme);

    // Set default color scheme on page load
    setCssColorScheme(colorScheme.get());
  }

  /**
   * @param {{ user: string; current: string; }} status
   */
  function setCssColorScheme(status) {
    document.documentElement.setAttribute("data-color-scheme", status.current);
    currentColorScheme = status.user;
  }
</script>

<span
  class="bg-gray-200 dark:bg-gray-700 p-1 r-pill w-fit h-fit fs-sm d-flex fd-row gap-1"
>
  <button
    class="btn btn-primary r-pill p-1 md:px-2 fs-xs d-flex fd-row gap-1 jc-center ai-center text-center"    
    class:active={(currentColorScheme == 'light')}     
    onclick={() => colorScheme.setUserChoice("light")}
  >
    <i class="fa-solid fa-sun fs-sm"></i>
    <span class="d-none md:d-block">light</span>
  </button>

  <button
    class="btn btn-primary r-pill p-1 md:px-2 fs-xs d-flex gap-1 fd-row ai-center"
    class:active={(currentColorScheme == 'light dark')}
    onclick={() => colorScheme.setUserChoice("light dark")}
  >
    <i class="fa-solid fa-display fs-sm"></i>
    <span class="d-none md:d-block">system</span>
  </button>

  <button
    class="btn btn-primary r-pill p-1 md:px-2 fs-xs d-flex gap-1 fd-row ai-center"
    class:active={(currentColorScheme == 'dark')}
    onclick={() => colorScheme.setUserChoice("dark")}
  >
    <i class="fa-solid fa-moon fs-sm"></i>
    <span class="d-none md:d-block">dark</span>
  </button>

  
</span>
