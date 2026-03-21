<script>
  import "$lib/generated/sutairu.min.css";
  import { onMount } from "svelte";
  //import { getContentWidth, debounce } from "@merlin-chatou/sutairu/utils";
  import { Masonry } from "@merlin-chatou/sutairu";


  onMount(() => {
    Masonry.init('#masonry', {
      "targetWidth":350,
      "columnMode": "max",
      "gap" : 0,
      'onReflow': (params) => {
        console.log (params);
      }
    });
  })
  

  /*
  function getColumnCount(containerWidth, targetWidth, gap, mode) {
    const raw = (containerWidth + gap) / (targetWidth + gap);
    switch (mode) {
      case "max":
        return Math.max(1, Math.ceil(raw)); // More columns = skinnier items
      case "closest":
        return Math.max(Math.round(raw)); // Nearest fit
      case "min": // Fewer columns = wider items
      default:
        return Math.max(Math.floor(raw));
    }
  }

  function performLayout(container, settings) {
    // Get container width and childrens
    const containerWidth = getContentWidth(container);
    const items = Array.from(container.children);
    // Safety check: If the element doesn't exist, exit early
    if (!container) {
      console.error("Masonry: Container not found.");
      return;
    }

    // Calculate columns and dynamic width
    // min: The targetWidth is the smallest a column can be. It will try to fit as many columns as possible. (Common for mobile-first).
    // max: The targetWidth is the largest a column can be. It will force fewer, wider columns.
    // closest: It calculates which whole number of columns gets the actual width nearest to the targetWidth.
    //     let columnsCount = Math.ceil((containerWidth + settings.gap) / (settings.targetWidth + settings.gap));
    //  columnsCount = Math.max(1, columnsCount);
    const columnsCount = getColumnCount(containerWidth, settings.targetWidth, settings.gap, settings.mode);
    // Calculate the actual width so columns fill the space perfectly
    const totalGapsWidth = (columnsCount - 1) * settings.gap;
    const actualColumnWidth = (containerWidth - totalGapsWidth) / columnsCount;

    // 5. Layout Execution
    let columnHeights = new Array(columnsCount).fill(0);

    items.forEach((item) => {
      item.style.width = `${actualColumnWidth}px`;
      const minHeight = Math.min(...columnHeights);
      const columnIndex = columnHeights.indexOf(minHeight);

      // X calculation: column index * (width + gap)
      const x = columnIndex * (actualColumnWidth + settings.gap);
      const y = minHeight;

      item.style.transform = `translate(${x}px, ${y}px)`;

      // 3. Re-enable transitions for future resizes (using a tiny timeout)
      setTimeout(() => {
        item.style.transition = ""; // This lets the CSS file take over
      }, 100);

      // Update the tracker for this column
      columnHeights[columnIndex] += item.offsetHeight + settings.gap;
    });

    // 6. Set container height so it wraps the absolute children
    const containerStyle = window.getComputedStyle(container);
    const paddingTop = parseFloat(containerStyle.paddingTop);
    const paddingBottom = parseFloat(containerStyle.paddingBottom);
    const totalContentHeight = Math.max(...columnHeights) - settings.gap;
    const finalHeight = totalContentHeight + paddingTop + paddingBottom;
    container.style.height = `${finalHeight}px`;

    // 7. Trigger Callback
    // We use a small check to ensure it's a function
    if (typeof settings.onLayout === "function") {
      settings.onLayout({
        container,
        columns: columnsCount,
        height: finalHeight,
      });
    }
  }

  function createMasonry(selector, options = {}) {
    // Resolve the container (Handle ID string or Element)
    const container = typeof selector === "string" ? document.querySelector(selector) : selector;

    // Set Defaults using an Options Object
    const settings = {
      targetWidth: options.targetWidth || 250,
      columnMode: options.columnMode || "closest",
      gap: options.gap || 16,
      onLayout: options.onLayout || (() => {}),
      ...options,
    };
    performLayout(container, settings);

    // 2. Set up ResizeObserver with a debounce
    const debouncedLayout = debounce(() => performLayout(container, settings), 150);
    const ro = new ResizeObserver(() => debouncedLayout());
    ro.observe(container);

    // Return a way to disconnect if needed (cleanup)
    return () => ro.disconnect();
  }

  onMount(() => {
    let container = document.getElementById("masonry");
    createMasonry(container, { targetWidth: 350, gap: 10, mode: "min" });
  });

  */
</script>

<h1 class="h1">Masonry</h1>

<div id="masonry" class="masonry b-1 p-10px bg-subtle ff-mono fs-4xl fw-900">
  <div class="masonry-item r-2 align-cc h-120px bg-green-200">00</div>
  <div class="masonry-item r-2 align-cc h-240px bg-gray-200">01</div>
  <div class="masonry-item r-2 align-cc h-300px bg-blue-200">02</div>
  <div class="masonry-item r-2 align-cc h-100px bg-green-200">03</div>
  <div class="masonry-item r-2 align-cc h-140px bg-blue-200">04</div>
  <div class="masonry-item r-2 align-cc h-140px bg-gray-200">05</div>
  <div class="masonry-item r-2 align-cc h-140px bg-blue-200">06</div>
</div>
<h2>Something here</h2>
{#if false}
  <span class="masonry"><span class="is-ready"></span></span>
{/if}
