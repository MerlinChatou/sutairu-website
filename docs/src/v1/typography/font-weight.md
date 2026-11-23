# Font Weight

Sutairu provides a comprehensive set of utilities to control the weight (thickness) of your typography.

## Semantic Weights

Use these classes for standard design requirements. They map to the most common font-weight values used in modern web typography.

| Class | CSS Value | Weight Name |
| :--- | :--- | :--- |
| `.fw-thin` | `100` | Thin / Hairline |
| `.fw-extralight` | `200` | Extra Light |
| `.fw-light` | `300` | Light |
| `.fw-normal` | `400` | Normal / Regular |
| `.fw-medium` | `500` | Medium |
| `.fw-semibold` | `600` | Semi Bold |
| `.fw-bold` | `700` | Bold |
| **`.bold`** | `700` | **Alias for Bold** |
| `.fw-extrabold` | `800` | Extra Bold |
| `.fw-black` | `900` | Black / Heavy |

### Example

<div class="card w-fit d-flex fd-col p-3 gap-2">
  <div class="fw-thin">.fw-thin</div>
  <div class="fw-extralight">.fw-extra-light</div>
  <div class="fw-light">.fw-light</div>
  <div class="fw-normal">.fw-normal</div>
  <div class="fw-medium">.fw-medium</div>
  <div class="fw-semibold">.fw-semibold</div>
  <div class="fw-bold">.fw-bold</div>
  <div class="fw-extrabold">.fw-extra-bold</div>
  <div class="fw-black">.fw-black</div>
</div>

```html
<div class="fw-thin">.fw-thin</div>
<div class="fw-extralight">.fw-extra-light</div>
<div class="fw-light">.fw-light</div>
<div class="fw-normal">.fw-normal</div>
<div class="fw-medium">.fw-medium</div>
<div class="fw-semibold">.fw-semibold</div>
<div class="fw-bold">.fw-bold</div>
<div class="fw-extrabold">.fw-extra-bold</div>
<div class="fw-black">.fw-black</div>
```

## Numeric & Variable Weights

For projects using **Variable Fonts** or specific brand requirements that fall between standard weights (e.g., `450` or `750`), you can use the numeric utility pattern.

* **Pattern:** `.fw-{number}`
* **Example:** `.fw-450`, `.fw-750`, `.fw-900`

### Example

<div class="card w-fit d-flex fd-col p-3 gap-2">
<p class="fw-light">Lightweight body text.</p>
<p class="fw-550">Specifically weighted medium-bold text.</p>
</div>

```html
<p class="fw-light">Lightweight body text.</p>
<p class="fw-550">Specifically weighted medium-bold text.</p>
```

> **Note:** Ensure your chosen font family supports the weight you are applying. If a font does not have a `600` weight, the browser will typically fall back to the nearest available weight (usually `700`).


