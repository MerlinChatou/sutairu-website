# Border Width

Utilities for controlling the border width of elements, supporting physical sides, logical properties, and various unit scales.

## Core Rules

| Utility Class | CSS Declarations | Description |
| --- | --- | --- |
| `border` | `border-width: 1px;` | Sets a uniform 1px border. |


## Dynamic Patterns

The system dynamically resolves border widths using two primary patterns: **Pixel-scaled (default)** and **Unit-explicit**.


### Pixel-Scaled Utilities

When no unit is provided, the number acts on a **1:1 pixel scale**. It supports integers, decimals, and fraction strings (rounded up to 3 decimal places).

* **Syntax:** `{type}-{value}`
* **Examples:** `b-1`, `bt-2.5`, `bx-1/2`


<div class="card w-fit d-flex fd-row p-3 gap-2">
<div class="b-1 b-accent p-2 r-2">b-1</div>
<div class="b-2 b-accent p-2 r-2">b-2</div>
<div class="b-5/2 b-accent p-2 r-2">b-5/2</div>
<div class="b-3 b-accent p-2 r-2">b-3</div>
<div class="b-4.5 b-accent p-2 r-2">b-4.5</div>
</div>


``` html
<div class="b-1">b-1</div>
<div class="b-2">b-2</div>
<div class="b-5/2">b-5/2</div>
<div class="b-3">b-3</div>
<div class="b-4.5">b-4.5</div>
```

### Unit-Explicit Utilities

When a specific CSS length unit is provided, the engine skips pixel scaling and applies the exact value.

* **Syntax:** `{type}-{value}{unit}`
* **Examples:** `b-2rem`, `by-4em`, `bs-10vw`
* **Supported Units:** `px`, `rem`, `em`, `vw`, `vh`, `vmin`, `vmax`, `vi`, `vb`, `ch`, `ex`, `cqw`, `cqh`, `cqi`, `qb`, `cqmin`, `cqmax`


<div class="card w-fit d-flex fd-row p-3 gap-2">
<div class="b-2px b-accent p-2 r-2">b-2px</div>
<div class="b-0.1rem b-accent p-2 r-2">b-0.1rem</div>
<div class="b-1/2vmin b-accent p-2 r-2">b-1/2vmin</div>
</div>


``` html
<div class="b-2px">b-2px</div>
<div class="b-0.1rem">b-0.1rem</div>
<div class="b-1/2vmin">b-1/2vmin</div>
```



## Target Reference Map

Use the prefixes below to target specific sides or axes. This handles both traditional physical boundaries and modern logical properties for bidirectional layouts.

### Physical Targets

| Prefix | Targets | Maps to CSS Property |
| --- | --- | --- |
| `b` | All Sides | `border-width` |
| `bt` | Top | `border-top-width` |
| `bb` | Bottom | `border-bottom-width` |
| `bl` | Left | `border-left-width` |
| `br` | Right | `border-right-width` |

### Logical & Axis Targets

| Prefix | Targets | Maps to CSS Property |
| --- | --- | --- |
| `bx` | Inline Axis (Left + Right) | `border-inline-width` |
| `by` | Block Axis (Top + Bottom) | `border-block-width` |
| `bs` | Inline Start (Left in LTR) | `border-inline-start-width` * |
| `be` | Inline End (Right in LTR) | `border-inline-end-width` * |



<div class="card w-fit d-flex fd-row p-3 gap-4">
<div class="bg-subtle bs-2 b-accent p-2">bs-2</div>
<div class="bg-subtle bt-2 br-2 b-accent p-2">bt-2 br-2</div>
<div class="bg-subtle bx-2 b-accent p-2">bx-2</div>
</div>


``` html
<div class="bs-2">bs-2</div>
<div class="bt-2 br-2">bt-2 br-2</div>
<div class="bx-2">bx-2</div>
```
