# Dotted Background

Adds a configurable dotted background pattern.

## Installation

```sh
npm install @merlin-chatou/sutairu-extras
```

Import the stylesheet in your CSS:

```css
@import "@merlin-chatou/sutairu-extras/dotted/style";
```

## Usage

Add `.bg-dotted` to enable the dotted background.

<div class="card p-3 w-fit">
  <div class="bg-dotted w-fit p-3">
    Content
  </div>
</div>

```html
<div class="bg-dotted">
  Content
</div>
```

## Colors

* **Background color**: `bg-<color>` optionally with `bg-<number>`
* **Dotted (foreground) color**: `fg-<color>` optionally with `fg-<number>`
* **Global opacity**: `bg-opacity-<number>`


<div class="card p-3 w-fit">
  <div class="bg-dotted fg-accent fg-400 bg-opacity-50 w-fit p-3">
    Dotted background
  </div>
</div>


```html
<div class="bg-dotted fg-accent fg-400 bg-opacity-50">
  dotted background
</div>
```

Colors automatically adapt to the active theme and color scheme.

