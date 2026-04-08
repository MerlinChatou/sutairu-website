# Font Weight Utilities

Utility classes for controlling `font-weight`.  

## Base usage

Apply a font weight directly on any element:

<div class="card w-fit d-flex fd-col p-3 gap-2">
  <div class="fw-thin">.fw-thin</div>
  <div class="fw-extra-light">.fw-extra-light</div>
  <div class="fw-light">.fw-light</div>
  <div class="fw-normal">.fw-normal</div>
  <div class="fw-medium">.fw-medium</div>
  <div class="fw-semibold">.fw-semibold</div>
  <div class="fw-bold">.fw-bold</div>
  <div class="fw-extra-bold">.fw-extra-bold</div>
  <div class="fw-black">.fw-black</div>
</div>

```html
<div class="fw-thin">.fw-thin</div>
<div class="fw-extra-light">.fw-extra-light</div>
<div class="fw-light">.fw-light</div>
<div class="fw-normal">.fw-normal</div>
<div class="fw-medium">.fw-medium</div>
<div class="fw-semibold">.fw-semibold</div>
<div class="fw-bold">.fw-bold</div>
<div class="fw-extra-bold">.fw-extra-bold</div>
<div class="fw-black">.fw-black</div>
```

---

## Classes details

| Class             | Weight        |
| ----------------- | ------------- |
| `.fw-thin`        | 100           |
| `.fw-extra-light` | 200           |
| `.fw-light`       | 300           |
| `.fw-normal`      | 400 (default) |
| `.fw-medium`      | 500           |
| `.fw-semibold`    | 600           |
| `.fw-bold`        | 700           |
| `.fw-extra-bold`  | 800           |
| `.fw-black`       | 900           |

---

## Responsive variants

Font weights can be overridden at specific breakpoints:

<div class="card p-3 w-fit">
  <p class="md:fw-light lg:fw-black my-0">Responsive weight</p>
</div>

```html
<p class="md:fw-light lg:fw-black">Responsive weight</p>
```

**Breakpoints**

* `sm:` ≥ 576px
* `md:` ≥ 768px
* `lg:` ≥ 1024px

