# Haching Background

Adds a configurable hatching background pattern.

## Installation

```sh
npm install @merlin-chatou/sutairu-extras
```

Import the stylesheet in your CSS:

```css
@import "@merlin-chatou/sutairu-extras/hatching/style";
```

## Usage

Add `.bg-hatching` to enable the hatching background.

<div class="card p-3 w-fit">
  <div class="bg-hatching w-fit p-3">
    Content
  </div>
</div>

```html
<div class="bg-hatching">
  Content
</div>
```

## Colors

* **Background color**: `bg-<color>` optionally with `bg-<number>`
* **Hatching (foreground) color**: `fg-<color>` optionally with `fg-<number>`
* **Global opacity**: `bg-opacity-<number>`


<div class="card p-3 w-fit">
  <div class="bg-hatching fg-accent fg-400 bg-opacity-50 w-fit p-3">
    Hatching background
  </div>
</div>


```html
<div class="bg-hatching fg-accent fg-400 bg-opacity-50">
  Hatching background
</div>
```

Colors automatically adapt to the active theme and color scheme.

