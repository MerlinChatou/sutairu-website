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

### Arbitrary Units

You can define exact sizes using pixels, rems, or viewport units directly in the class name for one-off requirements.

| Class | CSS Value | Usage |
| :--- | :--- | :--- |
| `.fs-16px` | `font-size: 16px;` | Exact pixel control |
| `.fs-2rem` | `font-size: 2rem;` | Scalable root-based sizing |
| `.fs-1.5vh` | `font-size: 1.5vh;` | Fluid sizing based on viewport height |


### Example Preview

<div class="card d-flex fd-col gap-2 p-3">
  <div class="fs-10px">.fs-10px (Fixed)</div>
  <div class="fs-4">.fs-4 (1rem)</div>
  <div class="fs-2.5rem">.fs-2.5rem (Large)</div>
</div>

```html
<div class="fs-10px">.fs-10px (Fixed)</div>
<div class="fs-4">.fs-4 (1rem)</div>
<div class="fs-2.5rem">.fs-2.5rem (Large)</div>
```