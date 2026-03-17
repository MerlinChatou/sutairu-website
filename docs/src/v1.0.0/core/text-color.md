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
| `.text-transparent` | <span class="text-transparent">Sample text</span> |


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



## State variants


Interactive state variants are available as optional components to keep the core bundle lightweight.

### Installation


To enable interactive state variants, install the complementary package:


``` bash
npm install @merlin-chatou/sutairu-extras
```

Import only the styles you need:

```css
/* Colors */
@import "@merlin-chatou/sutairu-extras/text-hover/style";
@import "@merlin-chatou/sutairu-extras/text-focus/style";
@import "@merlin-chatou/sutairu-extras/text-focus-visible/style";
@import "@merlin-chatou/sutairu-extras/text-active/style";
@import "@merlin-chatou/sutairu-extras/text-disabled/style";
```

```css
/* Shades */
@import "@merlin-chatou/sutairu-extras/text-shade-hover/style";
@import "@merlin-chatou/sutairu-extras/text-shade-focus/style";
@import "@merlin-chatou/sutairu-extras/text-shade-focus-visible/style";
@import "@merlin-chatou/sutairu-extras/text-shade-active/style";
@import "@merlin-chatou/sutairu-extras/text-shade-disabled/style";
```

```css
/* Opacity */
@import "@merlin-chatou/sutairu-extras/text-opacity-hover/style";
@import "@merlin-chatou/sutairu-extras/text-opacity-focus/style";
@import "@merlin-chatou/sutairu-extras/text-opacity-focus-visible/style";
@import "@merlin-chatou/sutairu-extras/text-opacity-active/style";
@import "@merlin-chatou/sutairu-extras/text-opacity-disabled/style";
```

Or import all interactive variants at once:

```css
@import "@merlin-chatou/sutairu-extras/text-interactive/style";
```


### Available state prefixes


Apply colors based on interaction state:

* `.hover:`
* `.focus:`
* `.focus-visible:`
* `.active:`
* `.disabled:`

<div class="card w-fit d-flex fd-col p-3 gap-2">
<button class="bw-0 bg-white text-gray hover:text-accent active:text-purple p-3 r-3">
  Interactive text
</button>
</div>


```html
<button class="text-gray hover:text-accent active:text-purple">
  Interactive text
</button>
```

### Combining variants

Variants can be combined together, including theme variants:


<div class="card w-fit d-flex fd-col p-3 gap-2">
<div class="text-gray dark:hover:text-accent">
  Combined variants
</div>
</div>

```html
<div class="text-gray dark:hover:text-accent">
  Combined variants
</div>
```
