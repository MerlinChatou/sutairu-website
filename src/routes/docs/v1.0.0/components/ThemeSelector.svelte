<script>  
  import { onMount } from "svelte";

  let themes = ["sutairu", "swiss", "adjuvio"];
  let currentThemeIndex = 0;

  function applyTheme(name) {
    console.log("apply ", name);
    // 1. Set data-theme attribute
    document.documentElement.setAttribute("data-theme", name);

    // 3. Persist choice (optional)
    localStorage.setItem("theme", name);
    console.log("save => ", name);
  }

  let theme = "sutairu";

  function change() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    theme = themes[currentThemeIndex];

    console.log(theme);
    applyTheme(theme);
  }
  /* function change() {
    if (theme == "swiss") theme = "sutairu";
    else theme = "swiss";
    console.log(theme);
    applyTheme(theme);
  }
*/
  onMount(() => {
    const saved = localStorage.getItem("theme");
    console.log("load ", saved);
    if (saved) theme = saved;
    applyTheme(theme);
  });
</script>

<button class="btn bg-page bw-1 b-gray-300 dark:b-gray-700 r-pill p-1px d-flex fd-row gap-1 ai-center text-center fs-xs" on:click={() => change()}>
  <i class="fa-solid fa-palette d-block fs-sm d-none md:d-block"></i>

  <span class="d-none md:d-block mr-1">{theme}</span>
  <span class="bg-container r-pill w-fit d-flex p-1px gap-1">
    <span class="bg-accent w-12px h-12px r-pill d-inline-block m-0"></span>
    <span class="bg-subtle w-12px h-12px r-pill d-inline-block m-0"></span>
  </span>
</button>

<!-- </span>-->

<style>
  .p-1px {
    padding: 3px;
  }
</style>
