<script>
  import { iconOverlayUri } from "../../lib/icons/SearchEngine.js";

  // Accept the icon prop using $props(), with a fallback default value
  let { icon = { name: "Loading...", path: "" } } = $props();
</script>

<div class="card p-2">
  <div class="stack w-full max-w-300px ar-1 mx-auto group">
    {#if icon.path}
      <div class="w-full border opacity-0 group-hover:opacity-70 tr-opacity-1000">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"
          ><path
            style="fill:none;stroke:CurrentColor;stroke-width:0.8;stroke-opacity:1;"
            d="M0,0V1000 M125,0V1000 M250,0V1000 M375,0V1000 M500,0V1000 M625,0V1000 M750,0V1000 M875,0V1000 M1000,0V1000 M0,0H1000 M0,125H1000 M0,250H1000 M0,375H1000 M0,500H1000 M0,625H1000 M0,750H1000 M0,875H1000 M0,1000H1000"
          /></svg
        >
      </div>
      <i class="icon dynamic-icon text-accent/60 w-full" style:--icon-path={icon.path}></i>
      <i
        class="icon dynamic-icon w-full text-black dark:text-white opacity-0 group-hover:opacity-50 tr-opacity-1000"
        style:--icon-path={iconOverlayUri(icon.name)}
      ></i>
    {:else}
      <div class="loader-skeleton w-full h-full r-3"></div>
    {/if}
  </div>
</div>

<style>
  .dynamic-icon::before {
    mask-image: var(--icon-path);
  }
</style>
