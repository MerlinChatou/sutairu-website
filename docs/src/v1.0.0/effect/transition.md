# Transitions

An elegant, real-time shorthand utility engine for managing element transitions and animations with automatic unit processing.


## Utility Structure

Transition classes use an intuitive, declarative pattern to customize your animations on the fly. Components are separated by hyphens: 

```
tr-{property}-{duration}-{delay}-{easing}
```

> **Note:** Only the property key is strictly required. Missing parameters automatically fallback to design system defaults.


## Properties

Choose which CSS properties should morph smoothly over time.

| Key | Targets Properties | Description |
| --- | --- | --- |
| `tr-none` | `none` | Disables transitions entirely. |
| `tr-all` | `all` | Tracks all animatable properties. |
| `tr-base` | `color, background-color, border-color, transform, opacity, ...` | Default core transition target combo. |
| `tr-colors` | `color, background-color, border-color, fill, stroke, ...` | Targets color and paint states. |
| `tr-layout` | `width, height, margin, padding, top, right, bottom, left, gap` | Coordinates structural changes. |


<div class="bg-blue text-white hover:bg-green hover:text-black p-4 r-2 w-fit tr-colors-1000">.tr-colors</div>

```html
<div class="bg-blue hover:bg-yellow tr-colors">.tr-colors</div>
```


### Single Property Helpers

You can also pinpoint individual properties cleanly:


| Key | Targets Property | Description |
| --- | --- | --- |
| **`tr-opacity`** | `opacity` | Smoothly handles opacity changes. |
| **`tr-transform`** | `transform` | Smoothly handles translations, scales, and rotations. |
| **`tr-filter`** | `filter` | Animates graphical filters (blur, brightness, etc.). |
| **`tr-shadow`** | `box-shadow` | Animates depth and shadow changes. |
| **`tr-bg`** | `background-color` | Targets the element's background color. |
| **`tr-color`** | `color` | Targets foreground text color. |
| **`tr-radius`** | `border-radius` | Animates corner rounding transitions. |
| **`tr-width`** | `width` | Targets the element width. |
| **`tr-height`** | `height` | Targets the element height. |
| **`tr-border`** | `border-color` | Targets outer border color changes. |
| **`tr-fill`** | `fill` | Targets SVG path fills. |
| **`tr-outline`** | `outline-color` | Targets element accessibility outlines. |


<div class="bg-blue text-white hover:bg-green hover:text-black p-4 r-2 w-fit tr-bg-1000">.tr-bg</div>

```html
<div class="bg-blue hover:bg-yellow tr-bg">.tr-bg</div>
```


## Timing (Duration & Delay)

* **Duration:** Inferred as the **first numeric value** after the property key (defaults to `150ms`). Pass as a raw integer representing milliseconds.
* **Delay:** Inferred as the **second numeric value** following duration.

<div class="card flex-x p-3 w-fit gap-2">
<div class="bg-blue text-white hover:bg-green hover:text-black p-4 r-2 w-fit tr-bg-1500">.tr-bg-1500</div>
<div class="bg-blue text-white hover:bg-green hover:text-black p-4 r-2 w-fit tr-bg-0-300">.tr-bg-0-300</div>
</div>

```html
<div class="bg-blue hover:bg-yellow tr-bg-1500">.tr-bg-1500</div>
<div class="bg-blue hover:bg-yellow tr-bg-1500">.tr-bg-0-300</div>
```

## Easing Curves

Control acceleration pacing by appending keyword easings, cubic beziers, or step counters.

### Native Keyword Presets

Append `linear`, `ease`, `ease-in`, `ease-out`, or `ease-in-out` at the tail end of the utility token.


<div class="card flex-y p-3 w-375px gap-2 group text-center">
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-linear">linear</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-ease-in-out">ease-in-out</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-ease-in">ease-in</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-ease-out">ease-out</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-ease">ease</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-step-start">step-start</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-step-end">step-end</div>
</div>



```html
<div class="hover:mv-x-200px tr-transform-750-linear">linear</div>
<div class="hover:mv-x-200px tr-transform-750-ease-in-out">ease-in-out</div>
<div class="hover:mv-x-200px tr-transform-750-ease-in">ease-in</div>
<div class="hover:mv-x-200px tr-transform-750-ease-out">ease-out</div>
<div class="hover:mv-x-200px tr-transform-750-ease">ease</div>
<div class="hover:mv-x-200px tr-transform-750-step-start">step-start</div>
<div class="hover:mv-x-200px tr-transform-750-step-end">step-end</div>
```

### Advanced Complex Easings

Pass explicit geometric arguments or stepping functions wrapped inside standard parentheses. The parser maps these directly to standard CSS types:

* `cubic(...)` translates into `cubic-bezier(...)`
* `step(...)` translates into `steps(...)`



<div class="card flex-y p-3 w-375px gap-2 group text-center">
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-cubic(0.25,1,0.5,1)">cubic()</div>
<div class="bg-blue text-white group-hover:mv-x-200px p-2 r-2 w-150px tr-transform-750-step(4, end)">step()</div>
</div>

```html
<div class="hover:mv-x-200px tr-transform-750-cubic(0.25,1,0.5,1)">cubic()</div>
<div class="hover:mv-x-200px tr-transform-750-step(4, end)">step()</div>
```
