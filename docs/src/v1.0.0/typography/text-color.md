# Text Color

Control text color using utility classes. Colors automatically adapt to the active theme and color scheme.

## Available colors

| Class | Example |
|------|---------|
| `.text-yellow` | <span class="text-yellow">Sample text</span> |
| `.text-orange` | <span class="text-orange">Sample text</span> |
| `.text-pink` | <span class="text-pink">Sample text</span> |
| `.text-purple` | <span class="text-purple">Sample text</span> |
| `.text-blue` | <span class="text-blue">Sample text</span> |
| `.text-cyan` | <span class="text-cyan">Sample text</span> |
| `.text-green` | <span class="text-green">Sample text</span> |
| `.text-white` | <span class="text-white">Sample text</span> |
| `.text-gray` | <span class="text-gray">Sample text</span> |
| `.text-black` | <span class="text-black">Sample text</span> |
| `.text-title` | <span class="text-title">Sample text</span> |
| `.text-body` | <span class="text-body">Sample text</span> |
| `.text-accent` | <span class="text-accent">Sample text</span> |


<div class="card w-fit d-flex fd-col p-3 gap-2">
  <div class="text-orange">Orange text</div>
  <div class="text-title">Title text</div>
  <div class="text-accent">Accent text</div>
</div>

```html
<div class="text-orange">Orange text</div>
<div class="text-title">Title text</div>
<div class="text-accent">Accent text</div>
```


## Theme variants

Sutairu uses a **light-first** approach. Base utilities target light mode by default, while variants override styles for dark mode when active.

* `dark:` — apply styles only in dark mode

```html
<p class="text-gray dark:text-white">
  Adaptive color
</p>
```

**How it works**

* Default classes apply to light mode.
* `dark:` variants override styles when the dark theme is enabled.


## Advanced Color Control

Sutairu supports a granular color system using the `text-<color>-<shade>/<opacity>` pattern. This allows for precise typographic hierarchies without leaving your HTML.

### Shades and Opacity

You can append a numeric shade (usually **0–1000**) and an opacity percentage (**0–100**) to any base color.

| Class Pattern | Description |
| --- | --- |
| `.text-blue-600` | Applies a specific "600" weight of blue from the theme palette. |
| `.text-red/50` | Applies the base red color at **50% opacity**. |
| `.text-green-400/20` | Applies the "400" green shade at **20% opacity**. |

### Examples

Here are some example of advanced text colors:

<div class="card w-fit d-flex fd-col p-3 gap-2">
  <div class="text-orange-300">text-orange-300</div>
  <div class="text-orange-700">text-orange-700</div>
  <div class="text-green/50">text-green/50</div>
  <div class="text-green-400/50">text-green-400/50</div>
</div>


```html
<div class="text-orange-300">text-orange-300</div>
<div class="text-orange-700">text-orange-700</div>
<div class="text-green/50">text-green/50</div>
<div class="text-green-400/50">text-green-400/50</div>
```