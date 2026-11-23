# Padding Utilities

Sutairu features a highly flexible dynamic padding system that mirrors the margin engine. It supports the standard proportional numeric scale, decimal adjustments, fractional spacing, and arbitrary CSS units—all while using logical properties to ensure native support for multi-directional layouts (RTL/LTR).

Unlike margins, padding handles internal spacing, meaning it does not support `auto` values or negative dimensions.

## Direction Prefixes

Sutairu uses a consistent prefix system to isolate specific interior directions:

| Prefix | CSS Target Property | Description |
| --- | --- | --- |
| `p` | `padding` | All internal sides |
| `pt` / `pb` | `padding-top` / `padding-bottom` | Top or Bottom interior |
| `pl` / `pr` | `padding-left` / `padding-right` | Physical Left or Right interior |
| `px` | `padding-inline` | Both Left and Right interiors |
| `py` | `padding-block` | Both Top and Bottom interiors |
| **`ps`** | `padding-inline-start` | **Logical Start** (Left in LTR, Right in RTL) |
| **`pe`** | `padding-inline-end` | **Logical End** (Right in LTR, Left in RTL) |

<div class="p-5 b-1 b-accent/50 r-2 w-fit stripes-accent/20 text-body bg-accent-200/20">p-5</div>

```html
<div class="p-5">p-5</div>
```

## Reset and Proportional Scale

The numeric scale is root-relative (`rem`). By default, **1 unit = 0.25rem (4px)**.

| Class | Rem Value | Pixel Equivalent (16px base) |
| --- | --- | --- |
| `.p-0` | `0rem` | 0px (Clears all padding) |
| `.p-1` | `0.25rem` | 4px |
| `.p-2` | `0.5rem` | 8px |
| `.p-4` | `1rem` | 16px |
| `.p-12` | `3rem` | 48px |
| `.p-2.5` | `0.625rem` | 10px (Supports decimals) |

```html
<!-- Create a evenly padded content card -->
<div class="p-4 bg-white">
  <p>Content inside card.</p>
</div>

<!-- Add asymmetrical breathing room: 32px top/bottom, 16px left/right -->
<section class="py-8 px-4">
  <h2>Section Heading</h2>
</section>
```



## Fractional Padding

When building component structures like compact buttons or complex table cells, you can use fractional syntax to get spaces tighter than the default `0.25rem` step.

* **Fractional Scale:** `.py-1/2` -> `padding-block: 0.125rem;` (0.5 * *0.25rem)
* **Micro Spacing:** `.px-1/4` -> `padding-inline: 0.063rem;` (0.25 * 0.25rem)

```html
<!-- High-density table cell styling -->
<td class="py-1/2 px-2">Table Data</td>
```

## Arbitrary Units (Literal Sizing)

For rigid layouts, custom designs, or viewport-responsive elements, you can append the literal CSS unit directly into the utility string. This drops the default framework multiplier.

| Class | Generated CSS | Use Case |
| --- | --- | --- |
| `.pt-20px` | `padding-top: 20px;` | Exact pixel target |
| `.pb-3rem` | `padding-bottom: 3rem;` | Explicit root-relative element height |
| `.px-10vw` | `padding-inline: 10vw;` | Ultra-wide liquid layout gutters |
| `.pt-100/3vw` | `padding-top: 33.333vw;` | Fluid fractional canvas block |

```html
<!-- Full-width hero section with responsive viewport-percentage padding -->
<div class="py-10vh px-5vw bg-accent">
  <h1>Fluid Hero Screen</h1>
</div>
```
