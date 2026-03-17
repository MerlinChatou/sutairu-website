<script>
  
  import { docsVersion } from "$lib/stores/docs.js";
  import { onMount } from "svelte";  
  import { getCurrentVersionFromPath } from "$lib/utils/version.js"
  import { get } from "svelte/store";

  onMount(() => {
    // Update the current doc version in store from URL requested
    $docsVersion.current = getCurrentVersionFromPath() || $docsVersion.latest;
  })

</script>