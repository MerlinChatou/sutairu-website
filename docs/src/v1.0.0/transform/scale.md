# Transforms: Scale

Control the sizing scale of your elements across both axes, or target individual axes independently using hardware-accelerated GPU transforms.


## Usage

Use the `sc-{value}` utility to modify an element's scale.

### Smart Scale Inference

The utility intelligently interprets numbers based on how they are written:

* **Integers greater than 10:** Treated as percentages (e.g., `150` => `1.5` scale factor).
* **Integers 10 or less:** Treated as direct multipliers (e.g., `2` => `2`x scale factor).
* **Decimals and Fractions:** Treated as direct multipliers (e.g., `0.5` or `1/2` => half size).

| Utility | Generated CSS Variables | Combined Output CSS |
| --- | --- | --- |
| `sc-150` | `--su-sc: 1.5;` | `transform: scaleX(calc(1 * 1.5)) scaleY(calc(1 * 1.5)) ...;` |
| `sc-2` | `--su-sc: 2;` | `transform: scaleX(calc(1 * 2)) scaleY(calc(1 * 2)) ...;` |
| `sc-1/2` | `--su-sc: 0.5;` | `transform: scaleX(calc(1 * 0.5)) scaleY(calc(1 * 0.5)) ...;` |



<div class="flex-x px-8 gap-8 my-8">
<div class="bg-accent p-3 w-80px r-2 align-cc text-white sc-3/4">sc-3/4</div>
<div class="bg-accent p-3 w-80px r-2 align-cc text-white sc-1">sc-1</div>
<div class="bg-accent p-3 w-80px r-2 align-cc text-white sc-110">sc-110</div>
<div class="bg-accent p-3 w-80px r-2 align-cc text-white sc-1.2">sc-1.2</div>
</div>

```html
<div class="sc-3/4">sc-3/4</div>
<div class="sc-1">sc-1</div>
<div class="sc-110">sc-110</div>
<div class="sc-1.2">sc-1.2</div>
```

## Directional Scaling

Target specific axes by injecting `x` or `y` into the utility pattern: `sc-{axis}-{value}`.

* **`sc-x-{value}`**: Scales only the horizontal axis (`--su-sc-x`).
* **`sc-y-{value}`**: Scales only the vertical axis (`--su-sc-y`).

<div class="flex-x px-8 gap-8 my-8">
<div class="bg-accent p-3 w-100px ar-1 r-2 align-cc text-white sc-1">sc-1</div>
<div class="bg-accent p-3 w-100px ar-1 r-2 align-cc text-white sc-y-150">sc-y-120</div>
<div class="bg-accent p-3 w-100px ar-1 r-2 align-cc text-white sc-x-150">sc-x-120</div>
</div>

```html
<div class="sc-1">sc-1</div>
<div class="sc-y-150">sc-y-120</div>
<div class="sc-x-150">sc-x-120</div>
```


## Negative & Important Modifiers

To flip or invert the axis calculation, prefix the utility with a minus sign (`-`). Combine it with `!` at the very beginning to force rule overriding.

* `-sc-1` => `--su-sc: -1;` *(Inverts the element completely)*
* `!-sc-x-2` => `--su-sc-x: -2 !important;` *(Inverts and stretches horizontally with high priority)*

<div class="flex-x px-8 gap-8 my-8">
<div class="bg-accent p-3 w-100px ar-1 r-2 align-cc text-white -sc-y-1">-sc-y-1</div>
<div class="bg-accent p-3 w-100px ar-1 r-2 align-cc text-white -sc-x-80">-sc-x-80</div>
</div>

```html
<div class="-sc-y-1">-sc-y-1</div>
<div class="-sc-x-80">-sc-x-80</div>
```

## Core Engine Synchronization

Every scaling class automatically loads the global transform engine. This allows you to safely mix `sc-`, `rot-`, and `tr-` utilities on the same HTML tag without losing previous transformations:

```css
transform: translateX(var(--su-tr-x, 0)) 
           translateY(var(--su-tr-y, 0)) 
           rotate(var(--su-rot, 0)) 
           scaleX(calc(var(--su-sc-x, 1) * var(--su-sc, 1))) 
           scaleY(calc(var(--su-sc-y, 1) * var(--su-sc, 1)));
```