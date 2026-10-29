<script>
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "#lib/generated/sutairu.min.css";
  import { Modal } from "@merlin-chatou/sutairu";
  import Navbar from "../components/Navbar.svelte";

  import { onMount } from "svelte";
  onMount(() => {
    Modal.init();
  });
</script>

<Navbar />
<div class="card w-350px m-5">
    <div class="body p-3 v-flex gap-5 ff-mono">
      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader text-accent"></span>
        <span class="loader b-7 text-accent b-subtle/60 h-48px w-48px"></span>
        <span class="loader text-transparent b-purple h-48px w-48px"></span>
        <span class="loader text-green h-48px w-48px anim-dur-2000"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-clip text-red"></span>
        <span class="loader-clip h-48px w-48px"></span>
        <span class="loader-clip text-purple b-7 h-48px w-48px"></span>
        <span class="loader-clip text-green b-gray/50 h-48px w-48px sc-150 anim-dur-3s before:anim-dur-2s"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-grow bg-red ps-center"></span>
        <span class="loader-grow h-48px w-48px ps-center"></span>
        <span class="loader-grow bg-purple h-48px w-48px ps-center"></span>
        <span class="loader-grow text-redbg-green h-64px w-64px ps-center"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-dots-fade text-red fs-2xs h-4px w-4px ps-center"></span>
        <span class="loader-dots-fade ps-center"></span>
        <span class="loader-dots-fade text-purple ps-center"></span>
        <span class="loader-dots-fade text-green anim-dur-2000 scale-150 ps-center"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4 pi-center">
        <span class="loader-dots-spin text-red fs-2xs h-4px w-4px ps-center"></span>
        <span class="loader-dots-spin ps-center"></span>
        <span class="loader-dots-spin text-purple ps-center"></span>
        <span class="loader-dots-spin text-green anim-dur-2000 scale-150 ps-center"></span>
      </div>

      <div class="w-full h-64px text-center d-grid grid-cols-4">
        <span class="loader-comet text-red fs-2xs h-4px w-4px ps-center"></span>
        <span class="loader-comet ps-center"></span>
        <span class="loader-comet text-purple ps-center"></span>
        <span class="loader-comet text-green anim-dur-2000 scale-150 ps-center"></span>
      </div>
      <div class="w-full v-flex gap-2">
        <div class="loader-skeleton r-3 h-16px"></div>
        <div class="loader-skeleton r-3 h-16px bg-red bg-200 dark:bg-700 fg-red fg-100 dark:fg-500"></div>
        <div class="loader-skeleton r-3 h-16px bg-blue bg-200 dark:bg-700 fg-blue fg-100 dark:fg-500"></div>
        <div class="loader-skeleton r-3 h-16px bg-green bg-200 dark:bg-700 fg-green fg-100 dark:fg-500"></div>
      </div>
    </div>

</div>

<span class="my-loader-clip text-red ps-center"></span>
<style>
  @layer components {
.my-loader-clip {
  aspect-ratio: 1;
  height: 2rem;
  border-radius: 50%;
  background: conic-gradient(red 25%, rgba(0, 0, 0, 0.1) 0);
  mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0);
  animation: spinner-rotation 1s linear infinite;
}
}
</style>