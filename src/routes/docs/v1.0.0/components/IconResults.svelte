<script>
  export let results = [];
  export let iconUri;
  export let query = "";
  export let max = 120;

  $: shown = results.slice(0, max);
</script>

<p>
  {results.length} icon{results.length === 1 ? "" : "s"}
  {#if results.length > max}(showing the first {max}){/if}
</p>

{#if results.length === 0}
  <p>No icon found for "{query.trim()}". Try a more generic word.</p>
{:else}
  <div class="">
    <div class="flex-x jc-center fw-wrap gap-1">
      {#each shown as icon (icon.name)}
        <div class="card w-100px flex-y gap-1 p-2 m-1 as-center jc-center">
          <i class="icon dynamic-icon fs-5xl" style:--icon-path={iconUri(icon.name)}></i>
          <small class="fs-0.5em">{icon.name}</small>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .dynamic-icon::before {
    mask-image: var(--icon-path);
  }
</style>
