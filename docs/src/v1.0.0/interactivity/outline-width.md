# Outline Width

Utilities for controlling the outline width of elements, supporting universal scaling and various unit scales without affecting layout geometry.

## Core Rules

| Utility Class | CSS Declarations | Description |
| --- | --- | --- |
| `outline` | `outline-width: 1px; outline-style: solid;` | Sets a uniform 1px solid outline. |


## Dynamic Patterns

The system dynamically resolves outline widths using two primary patterns: **Pixel-scaled (default)** and **Unit-explicit**.

### Pixel-Scaled Utilities

When no unit is provided, the number acts on a **1:1 pixel scale**. It supports integers, decimals, and fraction strings (rounded up to 3 decimal places).

* **Syntax:** `ol-{value}`
* **Examples:** `ol-1`, `ol-2.5`, `ol-1/2`

See below for a structural preview of pixel-scaled outlines on elements:


<div class="card w-fit d-flex fd-row p-3 gap-2">
<div class="ol-solid ol-accent ol-1 p-2 r-2">ol-1</div>
<div class="ol-solid ol-accent ol-2 p-2 r-2">ol-2</div>
<div class="ol-solid ol-accent ol-5/2 p-2 r-2">ol-5/2</div>
<div class="ol-solid ol-accent ol-3 p-2 r-2">ol-3</div>
<div class="ol-solid ol-accent ol-4.5 p-2 r-2">ol-4.5</div>
</div>


``` html
<div class="ol-solid ol-accent ol-1">ol-1</div>
<div class="ol-solid ol-accent ol-2">ol-2</div>
<div class="ol-solid ol-accent ol-5/2">ol-5/2</div>
<div class="ol-solid ol-accent ol-3">ol-3</div>
<div class="ol-solid ol-accent ol-4.5">ol-4.5</div>
```

### Unit-Explicit Utilities

When a specific CSS length unit is provided, the engine skips pixel scaling and applies the exact value.

* **Syntax:** `ol-{value}{unit}`
* **Examples:** `ol-2rem`, `ol-4em`, `ol-10vw`
* **Supported Units:** `px`, `rem`, `em`, `vw`, `vh`, `vmin`, `vmax`, `vi`, `vb`, `ch`, `ex`, `cqw`, `cqh`, `cqi`, `qb`, `cqmin`, `cqmax`

See below for a structural preview of unit-explicit outlines on elements:


<div class="card w-fit d-flex fd-row p-3 gap-2">
<div class="ol-solid ol-accent ol-2px p-2 r-2">ol-2px</div>
<div class="ol-solid ol-accent ol-0.1rem p-2 r-2">ol-0.1rem</div>
<div class="ol-solid ol-accent ol-1/2vmin p-2 r-2">ol-1/2vmin</div>
</div>


``` html
<div class="ol-solid ol-accent ol-2px">ol-2px</div>
<div class="ol-solid ol-accent ol-0.1rem">ol-0.1rem</div>
<div class="ol-solid ol-accent ol-1/2vmin">ol-1/2vmin</div>
```
