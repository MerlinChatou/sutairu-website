# Outline Color

Control the outline color of elements using utility classes. Outlines are drawn outside the element's border edge and do not take up space in the layout flow. Like border colors, outline colors automatically adapt to the active theme and color scheme.

## Available Colors

| Class | Example |
| --- | --- |
| `.ol-yellow` | <span class="outline ol-yellow px-2 r-2">Sample block</span> |
| `.ol-orange` | <span class="outline ol-orange px-2 r-2">Sample block</span> |
| `.ol-red` | <span class="outline ol-red px-2 r-2">Sample block</span> |
| `.ol-pink` | <span class="outline ol-pink px-2 r-2">Sample block</span> |
| `.ol-purple` | <span class="outline ol-purple px-2 r-2">Sample block</span> |
| `.ol-blue` | <span class="outline ol-blue px-2 r-2">Sample block</span> |
| `.ol-cyan` | <span class="outline ol-cyan px-2 r-2">Sample block</span> |
| `.ol-green` | <span class="outline ol-green px-2 r-2">Sample block</span> |
| `.ol-white` | <span class="outline ol-white px-2 r-2">Sample block</span> |
| `.ol-gray` | <span class="outline ol-gray px-2 r-2">Sample block</span> |
| `.ol-black` | <span class="outline ol-black px-2 r-2">Sample block</span> |
| `.ol-accent` | <span class="outline ol-accent px-2 r-2">Sample block</span> |
| `.ol-container` | <span class="outline ol-container px-2 r-2">Sample block</span> |
| `.ol-page` | <span class="outline ol-page px-2 r-2">Sample block</span> |
| `.ol-subtle` | <span class="outline ol-subtle px-2 r-2">Sample block</span> |

> **Note:** Make sure your element has a defined outline width and style (e.g., `.outline` or explicit rules `.ol-1` and `ol-solid` ) for the outline color utility to be visible.

See below for a structural preview of how each outline color renders on an element:


<div class="card w-fit d-flex fd-col p-3 gap-2">
<div class="p-2 r-2 ol-1 outline ol-orange">Orange outline</div>
<div class="p-2 r-2 ol-1 outline ol-subtle">Subtle outline</div>
<div class="p-2 r-2 ol-1 outline ol-accent">Accent outline</div>
</div>

```html
<div class="outline ol-orange">Orange outline</div>
<div class="outline ol-subtle">Subtle outline</div>
<div class="outline ol-accent">Accent outline</div>
```

## Theme Variants

Sutairu uses a **light-first** approach. Base utilities target light mode by default, while variants override styles for dark mode when active.

* `dark:` — apply styles only in dark mode

```html
<div class="outline-1 ol-solid ol-gray dark:ol-black">
  Adaptive outline color
</div>
```

**How it works**

* Default classes apply to light mode.
* `dark:` variants override styles when the dark theme is enabled.


## Advanced Outline Color Control

Sutairu supports a granular color system using the `ol-<color>-<shade>/<opacity>` pattern. This allows for fine-tuned interactive focus rings, modern access indicators, and styling adjustments straight from your HTML markup.

### Shades and Opacity

You can append a numeric shade (usually **0–1000**) and an opacity percentage (**0–100**) to any base outline color.

| Class Pattern | Description |
| --- | --- |
| `.ol-blue-600` | Applies a specific "600" weight of blue from the theme palette. |
| `.ol-red/50` | Applies the base red color at **50% opacity**. |
| `.ol-green-400/20` | Applies the "400" green shade at **20% opacity**. |

### Examples

See below for a structural preview of advanced outline color scales:


<div class="card w-fit d-flex fd-col p-3 gap-2">
<div class="ol-2 ol-solid ol-red-400 p-2 r-2">ol-red-400</div>
<div class="ol-2 ol-solid ol-red-600 p-2 r-2">ol-red-600</div>
<div class="ol-2 ol-solid ol-green/50 p-2 r-2">ol-green/50</div>
<div class="ol-2 ol-solid ol-green-700/50 p-2 r-2">ol-green-700/50</div>
</div>


```html
<div class="ol-2 ol-solid ol-red-400">ol-red-400</div>
<div class="ol-2 ol-solid ol-red-600">ol-red-600</div>
<div class="ol-2 ol-solid ol-green/50">ol-green/50</div>
<div class="ol-2 ol-solid ol-green-700/50">ol-green-700/50</div>
```