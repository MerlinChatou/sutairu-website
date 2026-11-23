# Sizing Utilities

Sutairu features a fully integrated layout engine to control `width` and `height`, along with their `min`/`max` constraints. The system combines a fixed semantic scale, a step-based spacing scale, layout percentages (fractions), explicit unit overrides, and a bracket-based escape hatch for complex CSS calculations.

## Property Prefixes

Sutairu uses descriptive prefixes to handle sizing parameters:

| Prefix | CSS Target Property |
| --- | --- |
| `w` / `h` | `width` / `height` |
| `min-w` / `min-h` | `min-width` / `min-height` |
| `max-w` / `max-h` | `max-width` / `max-height` |

## Semantic Scale

These semantic keywords allow you to build fluid layouts, constrain readable line lengths, or stretch items relative to the viewport boundaries.

| Class | CSS Value | Description |
| --- | --- | --- |
| `*-auto` | `auto` | Browser default sizing behavior |
| `*-full` | `100%` | Stretches to fill parent container |
| `*-screen` | `100vw` / `100vh` | Viewport-bound scaling (`w-` uses `vw`, `h-` uses `vh`) |
| `*-screen-w` | `100vw` | Forces viewport width |
| `*-screen-h` | `100vh` | Forces viewport height |
| `*-min` | `min-content` | Shrinks element to match smallest inner item |
| `*-max` | `max-content` | Expands element to fit longest inner string/item |
| `*-fit` | `fit-content` | Uses available space, capping at max-content |
| **`max-w-prose`** | `65ch` | **Optimized reading constraint** (~65 characters wide) |

```html
<!-- Main page container with constrained readability width -->
<article class="max-w-prose mx-auto">
  <h1>Readable Article Heading</h1>
</article>

<!-- Full-screen splash section -->
<section class="w-screen h-screen bg-neutral">
  <div>Splash Content</div>
</section>
```

## Standard Steps & Fractions

Sutairu splits its core numeric sizing utilities into two logical processing models based on layout context: **Steps** (for spacing) and **Fractions** (for grid distributions).

### Proportional Steps (Rem-based)

When passing a simple decimal or integer without a fraction or unit, it evaluates against the standard scale where **1 unit = 0.25rem (4px)**.

* `.w-4` -> `width: 1rem;` (16px)
* `.h-64` -> `height: 16rem;` (256px)

### Layout Fractions (Percentage-based)

When a forward slash `/` is present, Sutairu computes it as a fluid percentage out of 100.

* `.w-1/2` -> `width: 50%;`
* `.w-3/4` -> `width: 75%;`
* `.min-h-1/3` -> `min-height: 33.333%;`

```html
<!-- Classic two-column layout distribution -->
<div class="d-flex">
  <main class="w-3/4">75% Main Layout</main>
  <aside class="w-1/4">25% Sidebar</aside>
</div>
```

## Sizing Constants (Breakpoint Envelopes)

Sutairu bundles fixed rem boundaries useful for building responsive card widths, floating panels, or viewport step constraints.

| Class | CSS Equivalent Value | Layout Context |
| --- | --- | --- |
| `*-0` | `0px` | Total reset |
| `*-xs` | `20rem` (320px) | Mobile boundaries / Small widgets |
| `*-sm` | `32rem` (512px) | Compact layout structures |
| `*-md` | `36rem` (576px) | Standard content cards |
| `*-lg` | `48rem` (768px) | Tablet width targets |
| `*-xl` | `64rem` (1024px) | Desktop layout wrappers |
| `*-2xl` | `72rem` (1152px) | Wide display envelopes |
| `*-3xl` | `80rem` (1280px) | Ultra-wide content tracks |

```html
<!-- Card layout constrained to standard container bounds -->
<div class="max-w-md p-4 bg-white shadow">
  <h3>Card Layout Component</h3>
</div>
```

## Literal Units & Arbitrary Escape Hatches

When exact layout restrictions are needed, Sutairu offers two literal syntax escape hatches.

### Explicit Units

Append the targeted CSS measurement unit directly to the end of your size definition:

* `.w-16px` -> `width: 16px;`
* `.h-1/2rem` -> `height: 0.5rem;`
* `.max-w-100%` -> `max-width: 100%;`
* `.min-h-50vh` -> `min-height: 50vh;`

### Bracket Notation

For absolute control over arbitrary calculations, variable evaluation, or complex math layout functions, wrap your value inside square brackets (`[...]`). Use underscores `_` to represent spaces in complex rules:

* `.w-[150px]` -> `width: 150px;`
* `.max-h-[calc(100vh-2rem)]` -> `max-height: calc(100vh - 2rem);`

```html
<!-- Dynamic window banner minus tracking headers -->
<div class="h-[calc(100vh-60px)] bg-accent">
  Dynamic App Workspace
</div>
```