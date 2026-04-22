# Font Size Utilities

Utility classes for controlling font size.

## Semantic Sizing
Apply a font size directly on any element:


<div class="card mb-3 w-fit d-flex fd-col p-3 gap-3">
  <div class="fs-xs">.fs-xs</div>
  <div class="fs-sm">.fs-sm</div>
  <div class="fs-md">.fs-md</div>
  <div class="fs-lg">.fs-lg</div>
  <div class="fs-xl">.fs-xl</div>
  <div class="fs-2xl">.fs-2xl</div>
  <div class="fs-3xl">.fs-3xl</div>
  <div class="fs-4xl">.fs-4xl</div>
</div>


```html
<div class="fs-xs">.fs-xs</div>
<div class="fs-sm">.fs-sm</div>
<div class="fs-md">.fs-md</div>
<div class="fs-lg">.fs-lg</div>
<div class="fs-xl">.fs-xl</div>
<div class="fs-2xl">.fs-2xl</div>
<div class="fs-3xl">.fs-3xl</div>
<div class="fs-4xl">.fs-4xl</div>
```


## Classes details

| Class    | Size | Pixels |
|----------|------|--------|
| `.fs-xs` | 0.75rem | 12px |
| `.fs-sm` | 0.875rem | 14px |
| `.fs-md` | 1rem | 16px (default) |
| `.fs-lg` | 1.125rem | 18px |
| `.fs-xl` | 1.25rem | 20px |
| `.fs-2xl` | 1.5rem | 24px |
| `.fs-3xl` | 1.875rem | 30px |
| `.fs-4xl` | 2.25rem | 36px |


## Literal & Custom Sizing

For cases where the semantic scale isn't enough, Sutairu provides utilities for literal pixel values, rem units, viewport units, and even fractional calculations.

### Numeric Scale (Rem-based)

Sutairu includes a numeric scale where each unit typically represents `0.25rem` (4px by default).

| Class | CSS Value | Result (at 16px base) |
| :--- | :--- | :--- |
| `.fs-4` | `font-size: 1rem;` | 16px |
| `.fs-8` | `font-size: 2rem;` | 32px |
| `.fs-15/2` | `font-size: 1.875rem;` | 30px |

### Arbitrary Units

You can define exact sizes using pixels, rems, or viewport units directly in the class name for one-off requirements.

| Class | CSS Value | Usage |
| :--- | :--- | :--- |
| `.fs-16px` | `font-size: 16px;` | Exact pixel control |
| `.fs-2rem` | `font-size: 2rem;` | Scalable root-based sizing |
| `.fs-1.5vh` | `font-size: 1.5vh;` | Fluid sizing based on viewport height |
| `.fs-100/6vw` | `font-size: 16.667vw;` | Fluid scaling based on viewport width proportions |


### Fractional Sizing

When you need precise typographic ratios, you can use fractional syntax. This is particularly useful for matching mathematical design grids.

  * **Example:** `.fs-5/3rem`
  * **CSS:** `font-size: calc(5/3 * 1rem);` (\~26.6px)



### Examples

<div class="card w-fit d-flex fd-col gap-2 p-3">
  <div class="fs-10px">.fs-10px (Fixed)</div>
  <div class="fs-4">.fs-4 (1rem)</div>
  <div class="fs-2.5rem">.fs-2.5rem (Large)</div>
</div>

```html
<div class="fs-10px">.fs-10px (Fixed)</div>
<div class="fs-4">.fs-4 (1rem)</div>
<div class="fs-2.5rem">.fs-2.5rem (Large)</div>
```


## Fluid Font Size Utility

The `fs-fluid` utility provides **responsive typography** that scales linearly between a minimum and maximum viewport width. This eliminates the need for multiple media queries by using the CSS `clamp()` function.


### Basic Syntax

```css
fs-fluid-[min]-[max][unit]
```

* **`min`**: The font size at the minimum viewport width (360px).
* **`max`**: The font size at the maximum viewport width (1200px).
* **`unit`**: Optional. Supports `rem` (default) and `px`.


### How it Works

The utility calculates a **linear scale** (the "slope") between two defined points. As the browser window resizes, the font size adjusts smoothly until it hits the defined boundaries.

### Usage Examples

| Utility | CSS Output (Approximate) | Description |
| :--- | :--- | :--- |
| `fs-fluid-1-2` | `clamp(16px, 12.86px + 0.87vmin, 32px)` | Scales from 1rem to 2rem. |
| `fs-fluid-16-32px` | `clamp(16px, 9.14px + 1.90vmin, 32px)` | Scales from 16px to 32px. |
| `!fs-fluid-2-4` | `font-size: clamp(...) !important;` | Forces importance on the fluid utility. |
| `fs-fluid-1/2-1` | `clamp(8px, 4.57px + 0.95vmin, 16px)` | Supports fractions 0.5rem to 1rem. |



### Examples

<div class="card w-fit d-flex fd-col gap-2 p-3">
  <div class="fs-fluid-1-2">.fs-fluid-1-2</div>
  <div class="fs-fluid-16-64px">.fs-fluid-16-64px</div>
</div>

```html
<div class="fs-fluid-1-2">.fs-fluid-1-2</div>
<div class="fs-fluid-16-64px">.fs-fluid-16-64px</div>
```
