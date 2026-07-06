# Background Color

Control background color using utility classes. Colors automatically adapt to the active theme and color scheme.

## Available colors

| Class | Example |
| --- | --- |
| `.bg-yellow` | <span class="bg-yellow px-2">Sample block</span> |
| `.bg-orange` | <span class="bg-orange px-2">Sample block</span> |
| `.bg-red` | <span class="bg-red px-2">Sample block</span> |
| `.bg-pink` | <span class="bg-pink px-2">Sample block</span> |
| `.bg-purple` | <span class="bg-purple px-2">Sample block</span> |
| `.bg-blue` | <span class="bg-blue px-2">Sample block</span> |
| `.bg-cyan` | <span class="bg-cyan px-2">Sample block</span> |
| `.bg-green` | <span class="bg-green px-2">Sample block</span> |
| `.bg-white` | <span class="bg-white px-2">Sample block</span> |
| `.bg-gray` | <span class="bg-gray px-2">Sample block</span> |
| `.bg-black` | <span class="bg-black px-2">Sample block</span> |
| `.bg-accent` | <span class="bg-accent px-2">Sample block</span> |
| `.bg-container` | <span class="bg-container px-2">Sample block</span> |
| `.bg-page` | <span class="bg-page px-2">Sample block</span> |
| `.bg-subtle` | <span class="bg-subtle px-2">Sample block</span> |
| `.bg-body` | <span class="bg-body px-2">Sample block</span> |
| `.bg-title` | <span class="bg-title px-2">Sample block</span> |
| `.bg-transparent` | <span class="bg-transparent px-2">Sample block</span> |


<div class="card w-fit d-flex fd-col p-3 gap-2">
<div class="bg-orange p-2 r-2">Orange background</div>
<div class="bg-subtle p-2 r-2">Subtle background</div>
<div class="bg-accent p-2 r-2">Accent background</div>
</div>


```html
<div class="bg-orange">Orange background</div>
<div class="bg-title">Title background</div>
<div class="bg-accent">Accent background</div>
```


## Theme variants

Sutairu uses a **light-first** approach. Base utilities target light mode by default, while variants override styles for dark mode when active.

* `dark:` — apply styles only in dark mode

```html
<div class="bg-gray dark:bg-black">
  Adaptive background color
</div>

```

**How it works**

* Default classes apply to light mode.
* `dark:` variants override styles when the dark theme is enabled.

---

## Advanced Color Control

Sutairu supports a granular color system using the `bg-<color>-<shade>/<opacity>` pattern. This allows for complex surfaces, card backing depths, and modern design layers straight from your HTML markup.

### Shades and Opacity

You can append a numeric shade (usually **0–1000**) and an opacity percentage (**0–100**) to any base background color.

| Class Pattern | Description |
| --- | --- |
| `.bg-blue-600` | Applies a specific "600" weight of blue from the theme palette. |
| `.bg-red/50` | Applies the base red color at **50% opacity**. |
| `.bg-green-400/20` | Applies the "400" green shade at **20% opacity**. |

### Examples

Here are some examples of advanced background colors:


<div class="card w-fit d-flex fd-col p-3 gap-2 stripes-gray-150 dark:stripes-gray-700">
<div class="bg-red-400 p-2 r-2">bg-red-400</div>
<div class="bg-red-600 p-2 r-2">bg-red-600</div>
<div class="bg-green/50 p-2 r-2">bg-green/50</div>
<div class="bg-green-700/50 p-2 r-2">bg-green-700/50</div>
</div>

```html
<div class="bg-red-400">bg-red-400</div>
<div class="bg-red-600">bg-red-600</div>
<div class="bg-green/50">bg-green/50</div>
<div class="bg-green-700/50">bg-green-700/50</div>
```