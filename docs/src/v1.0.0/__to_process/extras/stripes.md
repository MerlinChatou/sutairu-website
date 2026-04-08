# Striped Background

Adds a configurable striped background pattern.

## Installation

```sh
npm install @merlin-chatou/sutairu-extras
```

Import the stylesheet in your CSS:

```css
@import "@merlin-chatou/sutairu-extras/stripe/style";
```

## Usage

Add `.bg-stripes` to enable the striped background.

<div class="card p-3 w-fit">
  <div class="bg-stripes w-fit p-3">
    Content
  </div>
</div>

```html
<div class="bg-stripes">
  Content
</div>
```

## Colors

* **Background color**: `bg-<color>` optionally with `bg-<number>`
* **Stripe (foreground) color**: `fg-<color>` optionally with `fg-<number>`
* **Global opacity**: `bg-opacity-<number>`


<div class="card p-3 w-fit">
  <div class="bg-stripes bg-accent bg-600 fg-black fg-700 bg-opacity-50 w-fit p-3 text-white">
    Striped background
  </div>
</div>


```html
<div class="bg-stripes bg-red bg-600 fg-black fg-700 bg-opacity-50">
  Striped background
</div>
```

Colors automatically adapt to the active theme and color scheme.

