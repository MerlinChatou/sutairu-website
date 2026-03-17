# Margins

Control element spacing using margin utility classes.  
Values are based on shared spacing variables and support responsive variants.

## Spacing scale

| Class  | Value     |
| ------ | --------- |
| `0`    | `0`       |
| `1`    | `0.25rem` |
| `2`    | `0.5rem`  |
| `3`    | `1rem`    |
| `4`    | `1.5rem`  |
| `5`    | `3rem`    |
| `auto` | `auto`    |

## All sides

- `m-<n>`
- `m-auto`


<div class="card w-fit p-3 d-flex gap-3 fd-row ai-center fw-wrap ff-mono text-white">
  <div class="r-2 w-fit">
    <div class="m-0 bg-accent p-2 t w-fit h-fit b-accent b-opacity-30 r-1">m-0</div>
  </div>
  <div class="r-2 w-fit b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
    <div class="m-1 bg-accent p-2 w-fit r-1">m-1</div>
  </div>  
  <div class="r-2 w-fit b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
    <div class="m-2 bg-accent p-2 w-fit r-1">m-2</div>
  </div>
  <div class="r-2 w-fit b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
    <div class="m-3 bg-accent p-2 r-1">m-3</div>
  </div>
  <div class="r-2 w-fit b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
    <div class="m-4 bg-accent p-2 r-1">m-4</div>
  </div>    
  <div class="r-2 w-fit b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
    <div class="m-5 bg-accent p-2 r-1">m-5</div>
  </div>
  
</div>


```html
<div class="m-3">...</div>
```

## Directional

- Top: `mt-<n>`
- Right: `mr-<n>`
- Bottom: `mb-<n>`
- Left: `ml-<n>`


<div class="card w-fit p-3 d-flex gap-2 fd-row ai-center fw-wrap ff-mono text-white">
  <div class="r-2 w-fit b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
    <div class="mt-2 mb-4 ml-3 bg-accent p-2 r-1">mt-2 mb-4 ml-3</div>
  </div>
</div>

```html
<div class="mt-2 mb-4 ml-3">mt-2 mb-4 ml-3</div>
```

## Axis-based

- Horizontal: `mx-<n>` / `mx-auto`
- Vertical: `my-<n>` / `my-auto`


<div class="card p-3 d-flex gap-2 fd-row ai-center fw-wrap ff-mono text-white">
  <div class="r-2 w-full b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
    <div class="mx-auto my-3 w-fit bg-accent p-2 r-1">mx-auto my-3</div>
  </div>
</div>

```html
<div class="mx-auto my-3">mx-auto my-3</div>
```

## Responsive variants

Apply margins at breakpoints:

- `md:` ≥ 768px
- `lg:` ≥ 1024px


<div class="card p-3 w-fit d-flex gap-2 fd-row ai-center fw-wrap ff-mono text-white">
  <div class="r-2 w-fit b-accent b-opacity-30 bg-hatching fg-accent fg-opacity-30">
    <div class="m-1 md:m-3 lg:m-5 w-fit bg-accent p-2 r-1">m-1 md:m-3 lg:m-5</div>
  </div>
</div>


```html
<div class="m-1 md:m-3 lg:m-5">m-1 md:m-3 lg:m-5</div>
```

All utilities use `!important` to ensure predictable overrides.

