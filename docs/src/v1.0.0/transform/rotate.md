# Transforms: Rotation

Apply 2D rotations to elements. Under the hood, this utility updates a shared transform engine variable (`--su-rot`), allowing you to safely chain rotations with translation and scaling utilities without conflicts.

## Usage

Use the `rot-{value}` utility to rotate an element.

### Smart Unit Inference

You don't always need to specify a unit. The framework automatically infers the correct CSS unit based on your input style:

* **Degrees (`deg`):** Inferred if you provide a whole number (e.g., `90` $\rightarrow$ `90deg`).
* **Turns (`turn`):** Inferred if you provide a fraction or a decimal less than 1 (e.g., `1/4` or `0.25` $\rightarrow$ `0.25turn`).

| Utility | Generated CSS Variables | Combined Output CSS |
| --- | --- | --- |
| `rot-90` | `--su-rot: 90deg;` | `transform: rotate(90deg) ...;` |
| `rot-0.25` | `--su-rot: 0.25turn;` | `transform: rotate(0.25turn) ...;` |
| `rot-1/4` | `--su-rot: 0.25turn;` | `transform: rotate(0.25turn) ...;` |

<div class="flex-x px-8 gap-8 mb-8">
<div class="bg-accent p-3 r-2 align-cc text-white rot-30">rot-30</div>
<div class="bg-accent p-3 r-2 align-cc text-white rot-1/6">rot-1/6</div>
</div>

```html
<div class="rot-30">r-30</div>
<div class="rot-1/6">r-1/6</div>
```

### Explicit Units

If you prefer to be explicit, you can append `deg` or `turn` directly to the utility.

* `rot-45deg` => `--su-rot: 45deg;`
* `rot-0.5turn` => `--su-rot: 0.5turn;`

<div class="flex-x px-8 gap-8 my-8">
<div class="bg-accent p-3 r-2 align-cc text-white rot-30deg">rot-30deg</div>
<div class="bg-accent p-3 r-2 align-cc text-white rot-0.1turn">rot-0.1turn</div>
</div>

```html
<div class="rot-30deg">r-30deg</div>
<div class="rot-0.1turn">r-0.1turn</div>
```

## Negative Values

To rotate counter-clockwise, prefix the utility with a minus sign (`-`). If you are also using the important modifier (`!`), the exclamation mark always comes first.

<div class="flex-x px-8 gap-8 my-8">
<div class="bg-accent p-3 r-2 align-cc text-white -rot-30">-rot-30</div>
<div class="bg-accent p-3 r-2 align-cc text-white -rot-0.1turn">-rot-0.1turn</div>
</div>

```html
<div class="-rot-30deg">-r-30</div>
<div class="-rot-0.1turn">-r-0.1turn</div>
```

## Hardware Acceleration

Every rotation class automatically injects the framework's core transform engine. This ensures all translation, rotation, and scale properties stay perfectly synchronized on a single layer:

```css
transform: translateX(var(--su-tr-x, 0)) 
           translateY(var(--su-tr-y, 0)) 
           rotate(var(--su-rot, 0)) 
           scaleX(calc(var(--su-sc-x, 1) * var(--su-sc, 1))) 
           scaleY(calc(var(--su-sc-y, 1) * var(--su-sc, 1)));
```