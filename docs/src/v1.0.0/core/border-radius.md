# Border Radius Utilities

The border-radius utilities provide fine-grained control over corner rounding.

## All Corners

Applies the same radius to all four corners.

| Class  | Radius    |
| ------ | --------- |
| `.r-0` | `0`       |
| `.r-1` | `0.25rem` |
| `.r-2` | `0.5rem`  |
| `.r-3` | `0.75rem` |
| `.r-4` | `1rem`    |
| `.r-5` | `1.5rem`  |
| `.r-6` | `3rem`    |

### Example

<div class="b-red r-3 w-fit p-3 px-5">.r-3</div>

```html
<div class="b-red r-3">r-3</div>
```

## Shape Utilities

These utilities are semantic helpers for common shapes.

| Class     | CSS                     |
| --------- | ----------------------- |
| `.r-pill` | `border-radius: 9999px` |
| `.r-circle` | `border-radius: 50%`    |

### Examples

<div class="h-flex ai-center gap-2">
  <div class="b-red r-pill w-fit p-3 px-5">.r-pill</div>
  <div class="bg-subtle r-pill w-fit p-3 px-5">.r-pill</div>
  <div class="bg-accent fs-lg r-circle w-fit ar-1/1 p-2"><i class="fa-solid fa-envelope"></i></div>
</div>

```html
<div class="b-red r-pill">r-pill</div>
<div class="bg-subtle r-pill">.r-pill</div>
<div class="bg-accent r-circle ar-1/1">email</div>
```


## Side and individual corners utilities

Control each corner or side independently.

| Class    | Affects                    |
| -------- | -------------------------- |
| `.rt-0`  | top-left + top-right       |
| `.rb-0`  | bottom-left + bottom-right |
| `.rl-0`  | top-left + bottom-left     |
| `.rr-0`  | top-right + bottom-right   |
| `.rtl-0` | top-left                   |
| `.rtr-0` | top-right                  |
| `.rbl-0` | bottom-left                |
| `.rbr-0` | bottom-right               |




### Examples


<div class="h-flex ai-center gap-2">
<div class="b-red r-4 rr-0 w-fit p-3">.r-4 .rr-0</div>
<div class="b-red r-4 rl-0 w-fit p-3">.r-4 .rl-0</div>
<div class="b-red r-4 rtl-0 rbr-0 w-fit p-3">.r-4 .rtl-0 .rbr-0</div>
</div>

```html
<div class="b-red r-4 rr-0">.r-4 .rr-0</div>
<div class="b-red r-4 rl-0">.r-4 .rl-0</div>
<div class="b-red r-4 rtl-0 rbr-0">.r-4 .rtl-0 .rbr-0</div>
```
## Extra font sizes

### Additional package

Add more border radius utilities by installing the extra packages:

```sh
npm install @merlin-chatou/sutairu-extras
```

### Border radius in pixels

By importing the stylesheet in your CSS, you can use the `r-<number>px` classes to set **exact border radius in pixels**.

```css
@import "@merlin-chatou/sutairu-extras/b-radius-px/style";
```

Use the following `r-*px` classes to set **exact border sizes in pixels**.

| Micro Scale | Small / UI Scale | Large Scale | Hero / Extreme Scale |
| ----------- | ---------------- | ----------- | -------------------- |
| `.r-0px`    | `.r-10px`        | `.r-32px`   | `.r-80px`            |
| `.r-1px`    | `.r-12px`        | `.r-40px`   | `.r-96px`            |
| `.r-2px`    | `.r-14px`        | `.r-48px`   | `.r-128px`           |
| `.r-3px`    | `.r-16px`        | `.r-56px`   | `.r-256px`           |
| `.r-4px`    | `.r-18px`        | `.r-64px`   | —                    |
| `.r-6px`    | `.r-20px`        | `.r-72px`   | —                    |
| `.r-8px`    | `.r-24px`        | —           | —                    |
| —           | `.r-28px`        | —           | —                    |




