<script>
  import NoIconSearchResult from "../components/NoIconSearchResult.svelte";
  import { onDestroy } from "svelte";

  export let results = [];
  export let iconUri;
  export let pageSize = 60;
  export let loadDelay = 150; //150;

  let count = pageSize;
  let loading = false;
  let version = 0; // forces a fresh sentinel/observer
  let timer;

  function reset() {
    clearTimeout(timer);
    count = pageSize;
    loading = false;
    version++;
  }

  $: results, reset();

  $: shown = results.slice(0, count);
  $: hasMore = count < results.length;

  function loadMore() {
    if (loading || !hasMore) return;
    loading = true;
    timer = setTimeout(() => {
      count += pageSize;
      loading = false;
      version++;
    }, loadDelay);
  }

  function onVisible(node, callback) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) callback();
      },
      { rootMargin: "300px" }
    );
    observer.observe(node);
    return { destroy: () => observer.disconnect() };
  }

  onDestroy(() => clearTimeout(timer));
</script>
<div class="fs-xs mb-0 mt-5">
  {results.length} icon{results.length === 1 ? "" : "s"}  
</div>

<hr class="b-subtle/50 mb-3 md:mb-7" />

<NoIconSearchResult isVisible={results.length === 0} />

{#if results.length !== 0}
  <div class="">
    <div class="flex-x jc-center fw-wrap gap-1 pb-5vh">
      {#each shown as icon (icon.name)}
        <div class="card w-100px flex-y gap-1 p-2 m-1 as-center jc-center">
          <i class="icon dynamic-icon fs-5xl" style:--icon-path={iconUri(icon.name)}></i>
          <small class="fs-0.5em">{icon.name}</small>
        </div>
      {/each}
      {#if hasMore}
      {#key version}
        <div class="card w-100px min-h-50px flex-y" use:onVisible={loadMore} aria-live="polite">
          <span class="loader-skeleton w-100% h-100% anim-dur-1.5s align-cc fs-xs" role="status" aria-label="Loading more icons">Loading</span>
        </div>
      {/key}
    {/if}
    </div>


  </div>
{/if}

<style>
  .dynamic-icon::before {
    mask-image: var(--icon-path);
  }
</style>