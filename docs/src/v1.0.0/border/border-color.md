# Border Color

Control the border color of elements using utility classes. Like background colors, border colors automatically adapt to the active theme and color scheme.

## Available colors

| Class | Example |
| --- | --- |
| `.b-yellow` | <span class="b-1 b-yellow px-2 r-2">Sample block</span> |
| `.b-orange` |  <span class="b-1 b-orange px-2 r-2">Sample block</span>  |
| `.b-red` |  <span class="b-1 b-red px-2 r-2">Sample block</span>  |
| `.b-pink` |  <span class="b-1 b-pink px-2 r-2">Sample block</span>  |
| `.b-purple` |  <span class="b-1 b-purple px-2 r-2">Sample block</span>  |
| `.b-blue` |  <span class="b-1 b-blue px-2 r-2">Sample block</span>  |
| `.b-cyan` |  <span class="b-1 b-cyan px-2 r-2">Sample block</span>  |
| `.b-green` |  <span class="b-1 b-green px-2 r-2">Sample block</span>  |
| `.b-white` |  <span class="b-1 b-white px-2 r-2">Sample block</span>  |
| `.b-gray` |  <span class="b-1 b-gray px-2 r-2">Sample block</span>  |
| `.b-black` |  <span class="b-1 b-black px-2 r-2">Sample block</span>  |
| `.b-accent` |  <span class="b-1 b-accent px-2 r-2">Sample block</span>  |
| `.b-container` |  <span class="b-1 b-container px-2 r-2">Sample block</span>  |
| `.b-page` |  <span class="b-1 b-page px-2 r-2">Sample block</span>  |
| `.b-subtle` |  <span class="b-1 b-subtle px-2 r-2">Sample block</span>  |


> **Note:** Make sure your element has a defined border width (e.g., `.b-1` or `.border`) for the border color utility to be visible.


<div class="card w-fit d-flex fd-col p-2 gap-2">
<div class="p-2 r-2 b-1 b-orange">Orange border</div>
<div class="p-2 r-2 b-1 b-subtle">Subtle border</div>
<div class="p-2 r-2 b-1 b-accent">Accent border</div>
</div>


```html
<div class="b-1 b-orange">Orange border</div>
<div class="b-1 b-subtle">Title border</div>
<div class="b-1 b-accent">Accent border</div>
```


## Theme variants

Sutairu uses a **light-first** approach. Base utilities target light mode by default, while variants override styles for dark mode when active.

* `dark:` — apply styles only in dark mode

```html
<div class="b-1 b-gray dark:b-black">
  Adaptive border color
</div>

```

**How it works**

* Default classes apply to light mode.
* `dark:` variants override styles when the dark theme is enabled.


## Advanced Border Color Control

Sutairu supports a granular color system using the `b-<color>-<shade>/<opacity>` pattern. This allows for fine-tuned UI dividers, card outlines, and interactive focus states straight from your HTML markup.

### Shades and Opacity

You can append a numeric shade (usually **0–1000**) and an opacity percentage (**0–100**) to any base border color.

| Class Pattern | Description |
| --- | --- |
| `.b-blue-600` | Applies a specific "600" weight of blue from the theme palette. |
| `.b-red/50` | Applies the base red color at **50% opacity**. |
| `.b-green-400/20` | Applies the "400" green shade at **20% opacity**. |

### Examples

Here are some examples of advanced border colors:

<div class="card w-fit d-flex fd-col p-3 gap-2">
<div class="b-1 b-red-400 p-2 r-2">b-red-400</div>
<div class="b-1 b-red-600 p-2 r-2">b-red-600</div>
<div class="b-1 b-green/50 p-2 r-2">b-green/50</div>
<div class="b-1 b-green-700/50 p-2 r-2">b-green-700/50</div>
</div>

```html
<div class="b-1 b-red-400">b-red-400</div>
<div class="b-1 b-red-600">b-red-600</div>
<div class="b-1 b-green/50">b-green/50</div>
<div class="b-1 b-green-700/50">b-green-700/50</div>
```