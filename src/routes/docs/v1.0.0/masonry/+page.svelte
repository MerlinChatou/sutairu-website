<script>
  import "$lib/generated/sutairu.min.css";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  //import { getContentWidth, debounce } from "@merlin-chatou/sutairu/utils";
  import { Masonry } from "@merlin-chatou/sutairu";

  onMount(() => {
    Masonry.init("#masonry", {
      targetWidth: 350,
      mode: "max",
      gap: 12,
      onReflow: (params) => {
        const items = Array.from(params.container.children);
        items.forEach((item) => {
          item.classList.remove("opacity-0");
        });
      },
    });
  });
  let item = $state([]);

  function hide(e) {
    item[e.target.id] = false;

    console.log(item);
    setTimeout(() => {
      Masonry.arrange("#masonry", {
        targetWidth: 350,
        mode: "max",
        gap: 12,
        onReflow: (params) => {
          const items = Array.from(params.container.children);
          items.forEach((item) => {
            item.classList.remove("opacity-0");
          });
        },
      });
    }, 300);
  }

  function reset() {
    item = [];
    setTimeout(() => {
      Masonry.arrange("#masonry", {
        targetWidth: 350,
        mode: "max",
        gap: 12,
        onReflow: (params) => {
          const items = Array.from(params.container.children);
          items.forEach((item) => {
            item.classList.remove("opacity-0");
          });
        },
      });
    }, 300);
  }
</script>

<h1 class="h1">Masonry</h1>

<div id="masonry" class="masonry b-1 p-6px bg-subtle ff-mono fs-4xl fw-900">
  {#if item[0] !== false}
    <div id="0" class="opacity-0 tr-transform-300 r-2 align-cc h-120px bg-green-200" onclick={hide}>00</div>
  {/if}
  {#if item[1] !== false}
    <div id="1" class="opacity-0 tr-transform-300 r-2 align-cc h-240px bg-gray-200" onclick={hide}>01</div>
  {/if}
  {#if item[2] !== false}
    <div id="2" class="opacity-0 tr-transform-300 r-2 align-cc h-300px bg-blue-200" onclick={hide}>02</div>
  {/if}
  {#if item[3] !== false}
    <div id="3" class="opacity-0 tr-transform-300 r-2 align-cc h-100px bg-green-200" onclick={hide}>03</div>
  {/if}
  {#if item[4] !== false}
    <div id="4" class="opacity-0 tr-transform-300 r-2 align-cc h-140px bg-blue-200" onclick={hide}>04</div>
  {/if}
  {#if item[5] !== false}
    <div id="5" class="opacity-0 tr-transform-300 r-2 align-cc h-140px bg-gray-200" onclick={hide}>05</div>
  {/if}
  {#if item[6] !== false}
    <div id="6" class="opacity-0 tr-transform-300 r-2 align-cc h-140px bg-blue-200" onclick={hide}>06</div>
  {/if}
</div>

<button onclick={reset}>Reset</button>

<style>
  .tr-transform-300 {
    transition:
      transform 300ms ease,
      opacity 300ms ease 300ms;
  }
</style>
