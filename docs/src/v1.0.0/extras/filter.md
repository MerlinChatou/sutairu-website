# Filter Utilities

Sutairu provides a comprehensive set of **filter utilities** that can be applied to elements via the `.filter` class. These utilities use CSS custom properties, allowing multiple filters to be combined without overriding each other.


## Installation

```sh
npm install @merlin-chatou/sutairu-extras
```

Import the stylesheet in your CSS:

```css
@import "@merlin-chatou/sutairu-extras/filter/style";
```
---


## Base Usage

Attach the `.filter` class to an element to enable filter utilities:

<div class="card p-3 w-md">
  <img class="r-4 filter grayscale-50 blur-4 brightness-125" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
</div>

```html
<div class="filter grayscale-50 blur-4 brightness-125"></div>
```

---


## Available Filters

### Blur

<div class="card p-3 w-md">
  <img class="r-4 filter blur-8" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
</div>

**Class pattern:** `.blur-<value>`
**Steps (px):** `0, 1, 2, 4, 8, 12, 16, 24, 32, 48, 64`

**Notes:**

* `blur-0` → no blur
* `blur-64` → heavy blur
* Hover variant: `.hover:blur-8`

---

### Grayscale

<div class="card p-3 w-md">
  <img class="r-4 filter grayscale-90" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
</div>


**Class pattern:** `.grayscale-<value>`
**Steps (%):** `0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100`

**Notes:**

* `0` → original color
* `100` → fully grayscale
* Hover variant: `.hover:grayscale-50`

---

### Contrast


<div class="card p-3 w-md">
  <img class="r-4 filter contrast-200" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
</div>


**Class pattern:** `.contrast-<value>`
**Steps (%):** `0, 25, 50, 75, 100, 125, 150, 175, 200`

**Notes:**

* `100` → normal contrast
* `<100` → lower contrast
* `>100` → higher contrast
* Hover variant: `.hover:contrast-150`

---

### Brightness

<div class="card p-3 w-md">
  <img class="r-4 filter brightness-200" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
</div>

**Class pattern:** `.brightness-<value>`
**Steps (%):** `0, 25, 50, 75, 100, 125, 150, 175, 200`

**Notes:**

* `100` → normal brightness
* `<100` → darker
* `>100` → brighter
* Hover variant: `.hover:brightness-125`

---

### Invert


<div class="card p-3 w-md">
  <img class="r-4 filter invert-100" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
</div>


**Class pattern:** `.invert-<value>`
**Steps (%):** `0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100`

**Notes:**

* `0` → original
* `100` → fully inverted
* Hover variant: `.hover:invert-100`

---

### Saturate


<div class="card p-3 w-md">
  <img class="r-4 filter saturate-200" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
</div>

**Class pattern:** `.saturate-<value>`
**Steps (%):** `0, 25, 50, 75, 100, 125, 150, 175, 200`

**Notes:**

* `100` → normal saturation
* `0` → completely desaturated
* `200` → double saturation
* Hover variant: `.hover:saturate-150`

---

### Sepia

<div class="card p-3 w-md">
  <img class="r-4 filter sepia-100" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
</div>



**Class pattern:** `.sepia-<value>`
**Steps (%):** `0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100`

**Notes:**

* `0` → original
* `100` → fully sepia
* Hover variant: `.hover:sepia-50`

---

### Hue Rotate


<div class="card p-3 w-md">
  <img class="r-4 filter hue-rotate-180" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
</div>



**Class pattern:** `.hue-rotate-<value>`
**Steps (deg):** `0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360`

**Notes:**

* Rotates colors around the color wheel
* Hover variant: `.hover:hue-rotate-180`

---

### Opacity


<div class="card p-3 w-md">
  <img class="r-4 filter opacity-10" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
</div>

**Class pattern:** `.opacity-<value>`
**Steps (%):** `0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100`

**Notes:**

* `100` → fully visible
* `0` → fully transparent
* Hover variant: `.hover:opacity-50`

---

## Hover Variants

All filters support hover variants using the `.hover:` prefix:

<div class="card p-3 w-md">
  <img class="r-4 filter blur-2 hover:blur-8" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
</div>



```html
<div class="filter blur-2 hover:blur-8"></div>
```

---


## Notes

1. All filters are **composable** via CSS variables, allowing multiple utilities on the same element.
2. Hover variants are optional and use the `hover:` prefix.






