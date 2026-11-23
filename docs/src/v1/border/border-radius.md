# Border Radius

Utilities for controlling the border radius (corner rounding) of elements. Supports semantic aliases, unitless step scaling, percentage fractions, and explicit CSS units across all corners and sides.



## Dynamic Scales & Patterns

The system processes numeric variations dynamically using three scaling behaviors depending on the syntax format:

### 1. Step-Scaled Utilities (Rem)

When a raw, unitless number is passed (without any explicit unit or fraction forward-slash), it resolves on a **0.25rem per step scale**.

* **Syntax:** `{prefix}-{step}`
* **Examples:** `r-2` => `0.5rem`


<div class="card w-fit d-flex fd-row p-3 gap-2 ff-mono">
<div class="b-2 b-accent p-2 r-1">r-1</div>
<div class="b-2 b-accent p-2 r-2">r-2</div>
<div class="b-2 b-accent p-2 r-3">r-3</div>
<div class="b-2 b-accent p-2 r-4">r-4</div>
<div class="b-2 b-accent p-2 r-5">r-5</div>
</div>

```html
<div class="b-2 b-accent r-1">r-1</div>
<div class="b-2 b-accent r-2">r-2</div>
<div class="b-2 b-accent r-3">r-3</div>
<div class="b-2 b-accent r-4">r-4</div>
<div class="b-2 b-accent r-5">r-5</div>
```
### 2. Fractional Percentage Utilities

When a fraction string containing a forward slash (`/`) is passed, the engine converts it into an explicit percentage value.

* **Syntax:** `{prefix}-{numerator}/{denominator}`
* **Examples:** `r-1/2` $\rightarrow$ `50%`, `rl-1/4` $\rightarrow$ `25%`

<div class="card w-fit d-flex fd-row p-3 gap-2 ff-mono">
<div class="b-2 b-accent p-2 r-1/5">r-1/5</div>
<div class="b-2 b-accent p-2 r-1/2">r-1/2</div>
</div>


```html
<div class="b-2 b-accent r-1/5">r-1/5</div>
<div class="b-2 b-accent r-1/2">r-1/2</div>
```
### 3. Explicit Length Unit Utilities

When a number is coupled with an explicit CSS unit, the system bypasses step and percentage calculations, preserving the exact literal value. If no unit is provided but it hits this specific broad pattern fallback, it defaults to pixels (`px`).

* **Syntax:** `{prefix}-{value}{unit}`
* **Examples:** `r-12px`, `rt-5vh`, `r-10%`, `rbr-2rem`
* **Supported Units:** `px`, `rem`, `em`, `lh`, `rlh`, `vw`, `vh`, `vmin`, `vmax`, `svw`, `svh`, `lvw`, `lvh`, `dvw`, `dvh`, `vi`, `vb`, `svi`, `svb`, `lvi`, `lvb`, `dvi`, `dvb`, `ch`, `ex`, `cap`, `ic`, `cqw`, `cqh`, `cqi`, `cqb`, `cqmin`, `cqmax`, `cm`, `mm`, `in`, `pt`, `pc`, `%`

<div class="card w-fit d-flex fd-row p-3 gap-2 ff-mono">
<div class="b-2 b-accent p-2 r-0.5rem">r-0.5rem</div>
<div class="b-2 b-accent p-2 r-10px">r-10px</div>
</div>

```html
<div class="b-2 b-accent r-0.5rem">r-0.5rem</div>
<div class="b-2 b-accent r-10px">r-10px</div>
```


### Semantic Utilities

A collection of pre-configured keywords that map to standard design system shapes. These apply to all directional prefixes (e.g., `r-pill`, `rt-none`, `rbl-circle`).

| Keyword | Value | Description |
| --- | --- | --- |
| `none` | `0px` | Resets the corner rounding to sharp edges. |
| `pill` | `9999px` | Fully rounds opposing sides for a capsule shape. |
| `circle` | `50%` | Turns a perfect square element into a circle. |

<div class="card w-fit d-flex fd-row p-3 gap-2 ff-mono">
<div class="b-2 b-accent p-2 r-none">r-none</div>
<div class="b-2 b-accent p-2 r-pill">r-pill</div>
<div class="b-2 b-accent p-2 r-circle">r-full</div>
</div>

```html
<div class="b-2 b-accent r-none">r-none</div>
<div class="b-2 b-accent r-pill">r-pill</div>
<div class="b-2 b-accent r-circle">r-full</div>
```

## Directional Prefix Reference

Replace `{prefix}` with any of the keys below to target specific corners, structural boundaries, or the whole layout.

| Prefix | Targets | Maps to CSS Properties |
| --- | --- | --- |
| **`r`** | All Corners | `border-radius` |
| **`rt`** | Top Side | `border-top-left-radius`, `border-top-right-radius` |
| **`rb`** | Bottom Side | `border-bottom-left-radius`, `border-bottom-right-radius` |
| **`rl`** | Left Side | `border-top-left-radius`, `border-bottom-left-radius` |
| **`rr`** | Right Side | `border-top-right-radius`, `border-bottom-right-radius` |
| **`rtl`** | Top Left Corner | `border-top-left-radius` |
| **`rtr`** | Top Right Corner | `border-top-right-radius` |
| **`rbl`** | Bottom Left Corner | `border-bottom-left-radius` |
| **`rbr`** | Bottom Right Corner | `border-bottom-right-radius` |


<div class="card w-fit d-flex fd-row p-3 gap-2 ff-mono">
<div class="b-2 b-accent p-2 rt-2">rt-2</div>
<div class="b-2 b-accent p-2 rtl-2">rtl-2</div>
<div class="b-2 b-accent p-2 rr-2">rr-2</div>
</div>

```html
<div class="b-2 b-accent rt-2">rt-2</div>
<div class="b-2 b-accent rtl-2">rtl-2</div>
<div class="b-2 b-accent rr-2">rr-2</div>
```