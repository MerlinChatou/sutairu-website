# Margin Utilities

Sutairu features a highly flexible dynamic margin system. It supports automatic margins, a standard proportional numeric scale, negative values, fractional offsets, and arbitrary CSS units—all while remaining fully compatible with logical properties for modern, multi-directional layouts (RTL/LTR).


## Direction Prefixes

Sutairu uses an intuitive mapping system to target specific sides or directions:

| Prefix | CSS Target Property | Description |
| --- | --- | --- |
| `m` | `margin` | All sides |
| `mt` / `mb` | `margin-top` / `margin-bottom` | Top or Bottom |
| `ml` / `mr` | `margin-left` / `margin-right` | Physical Left or Right |
| `mx` | `margin-inline` | Both Left and Right |
| `my` | `margin-block` | Both Top and Bottom |
| **`ms`** | `margin-inline-start` | **Logical Start** (Left in LTR, Right in RTL) |
| **`me`** | `margin-inline-end` | **Logical End** (Right in LTR, Left in RTL) |

<div class="r-2 w-fit b-1 b-accent/30 hatching-accent/30">
  <div class="m-4 bg-accent p-1 r-1">m-4</div>
</div>


```html
<div class="m-4">m-4</div>
```

## Auto and Reset Margins

Perfect for centering blocks or pushing items apart within flex and grid layouts.

| Class | CSS Equivalent |
| --- | --- |
| `.m-auto` | `margin: auto;` |
| `.mx-auto` | `margin-inline: auto;` (Centers a block horizontally) |
| `.ms-auto` | `margin-inline-start: auto;` (Pushes element to the end) |
| `.m-0` | `margin: 0;` (Clears all margins) |

*(Available for all direction prefixes: `mt-auto`, `mb-0`, etc.)*

## Standard Proportional Scale

The numeric scale is root-relative (`rem`). By default, **1 unit = 0.25rem (4px)**.

| Class | Rem Value | Pixel Equivalent (16px base) |
| --- | --- | --- |
| `.m-1` | `0.25rem` | 4px |
| `.m-2` | `0.5rem` | 8px |
| `.m-4` | `1rem` | 16px |
| `.m-12` | `3rem` | 48px |
| `.m-2.5` | `0.625rem` | 10px (Supports decimals) |



```html
<!-- Add 16px margin to the bottom -->
<div class="mb-4">Item 1</div>

<!-- Center a container horizontally with standard padding -->
<div class="mx-auto w-half">Centered Content</div>
```

## Negative and Fractional Margins

Need to intentionally overlap elements or map offsets to fractional grids? prepend a `-` for negative values, or use a `/` for fractions.

* **Negative Margin:** `.-mt-4` -> `margin-top: -1rem;`
* **Fractional Scale:** `.mx-1/2` -> `margin-inline: 0.125rem;` (0.5 * 0.25rem)
* **Negative Fraction:** `.-mb-3/4` ->  `margin-bottom: -0.188rem;`

```html
<!-- Pull a hero image up into a header header block -->
<img class="-mt-12 src="..." />
```

## Arbitrary Units (Literal Sizing)

If your layout requires exact physical constraints or viewport-fluid scaling, append the literal CSS unit directly to the class name. This breaks out of the standard `0.25rem` multiplier system.

| Class | Generated CSS | Use Case |
| --- | --- | --- |
| `.mt-16px` | `margin-top: 16px;` | Exact pixel matching |
| `.mb-2rem` | `margin-bottom: 2rem;` | Root-relative layout sizing |
| `.mx-5vw` | `margin-inline: 5vw;` | Dynamic fluid spacing |
| `.-ml-10px` | `margin-left: -10px;` | Literal negative adjustments |
| `.mt-1/3vh` | `margin-top: 0.333vh;` | Fractional viewport offsets |

```html
<!-- Add a responsive gutter that scales with viewport width -->
<div class="mx-5vw">Fluid Margins</div>
```