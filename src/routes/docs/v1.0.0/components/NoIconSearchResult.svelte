<script>
  //let isVisible = $state(false);
  import { fade } from 'svelte/transition';
  
  // Make isVisible bindable from the parent
  let { isVisible = $bindable(false) } = $props();
</script>


{#if isVisible}
  <div class="w-full text-center text-title/75 py-6 px-6" in:fade={{ delay: 250 }}>
    <i class="fa-regular fa-face-sad-tear fs-4xl"></i>
    <div class="my-3 fs-2xl md:fs-3xl">Hmm… we couldn't find any results for your search.</div>
    <div class="py-3">
      Can't find the icon you need? 
      <a href="https://github.com/MerlinChatou/sutairu/issues" class="underline" target="_blank" rel="noreferrer">Request it</a> 
      or 
      <a href="https://github.com/MerlinChatou/sutairu/tree/main/src/icons" class="underline" target="_blank" rel="noreferrer">submit a pull request</a>.
    </div>
  </div>
{/if}