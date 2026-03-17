# Paddings

Control element inner spacing using padding utility classes.  
Values are based on the same spacing variables as margins and support responsive variants.

## Spacing scale

| Class  | Value     |
| ------ | --------- |
| `0`    | `0`       |
| `1`    | `0.25rem` |
| `2`    | `0.5rem`  |
| `3`    | `1rem`    |
| `4`    | `1.5rem`  |
| `5`    | `3rem`    |

## All sides


<div class="card p-3 w-fit d-flex gap-2 fd-row ai-center fw-wrap ff-mono">
  <div class="p-3 b-accent b-opacity-50 r-2 w-fit bg-stripes text-body bg-accent bg-200 fg-accent fg-opacity-20 bg-opacity-20">p-3</div>
</div>

```html
<div class="p-3">...</div>
```

## Directional

* Top: `pt-<n>`
* Right: `pr-<n>`
* Bottom: `pb-<n>`
* Left: `pl-<n>`


<div class="card p-3 w-fit d-flex gap-2 fd-row ai-center fw-wrap ff-mono">
  <div class="pt-2 pb-4 pl-3 b-accent b-opacity-50 r-2 w-fit bg-stripes text-body bg-accent bg-200 fg-accent fg-opacity-20 bg-opacity-20">pt-2 pb-4 pl-3</div>
</div>


```html
<div class="pt-2 pb-4 pl-3">pt-2 pb-4 pl-3</div>
```

## Axis-based

* Horizontal: `px-<n>`
* Vertical: `py-<n>`

<div class="card p-3 w-fit d-flex gap-2 fd-row ai-center fw-wrap ff-mono">
  <div class="px-5 py-2 b-accent b-opacity-50 r-2 w-fit bg-stripes text-body bg-accent bg-200 fg-accent fg-opacity-20 bg-opacity-20">px-5 py-2</div>
</div>

```html
<div class="px-5 py-2">px-5 py-2</div>
```

## Responsive variants

Apply paddings at breakpoints:

* `md:` ≥ 768px
* `lg:` ≥ 1024px


<div class="card p-3 w-fit d-flex gap-2 fd-row ai-center fw-wrap ff-mono">
  <div class="p-1 md:p-3 lg:p-5 b-accent b-opacity-50 r-2 w-fit bg-stripes text-body bg-accent bg-200 fg-accent fg-opacity-20 bg-opacity-20">p-1 md:p-3 lg:p-5</div>
</div>


```html
<div class="p-1 md:p-3 lg:p-5">p-1 md:p-3 lg:p-5</div>
```

All padding utilities use `!important` for predictable overrides.

