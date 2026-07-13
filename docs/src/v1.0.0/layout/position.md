# Position & Directional Coordinates

Control element positioning context alongside directional offsets and shorthand inset properties.

---

## Position Context

Establish the coordinate space or stacking context for an element.

| Utility | CSS Property Value |
| --- | --- |
| `pos-static` | `position: static;` |
| `pos-rel` | `position: relative;` |
| `pos-abs` | `position: absolute;` |
| `pos-fix` | `position: fixed;` |
| `pos-sticky` | `position: sticky;` |


<div class="card flex-x gap-8 p-8 w-fit">
  <div class="pos-rel r-1 w-100px ar-1 bg-blue/60 text-white">
    <div class="pos-abs r-2 align-cc w-50px ar-1 bg-green/60">pin</div>  
  </div>
</div>

```html
<div class="pos-rel">
  <div class="pos-abs">Pin</div>
</div>
```


## Directional Offsets

Position elements vertically or horizontally via `top`, `right`, `bottom`, `left`, or universal `inset` attributes.

### Sizing Scale & Inference

* **Unitless Numbers:** Interpreted as sizing steps multiplied by `0.25rem` (e.g., `4` => `1rem`).
* **Explicit Units:** Pass standard units seamlessly (e.g., `top-20px`, `left-2rem`).
* **Aliases:** Supports semantic helper targets like `full` (`100%`) and `auto` (`auto`).

| Utility Example | Generated CSS Output |
| --- | --- |
| `top-0` | `top: 0;` |
| `right-4` | `right: 1rem;` |
| `bottom-2rem` | `bottom: 2rem;` |
| `left-full` | `left: 100%;` |
| `inset-auto` | `inset: auto;` |

<div class="card flex-x gap-8 p-8 w-fit">
  <div class="pos-rel r-1 w-100px ar-1 bg-blue/60 text-white">
    <div class="pos-abs r-2 w-50px ar-1 bg-green/60 bottom-0 right-10% align-cc">pin</div>  
  </div>

  <div class="pos-rel r-1 w-100px ar-1 bg-blue/60 text-white">
    <div class="pos-abs r-2 w-50px ar-1 bg-green/60 inset-10% align-cc">pin</div>  
  </div>

  <div class="pos-rel r-1 w-100px ar-1 bg-blue/60 text-white">
    <div class="pos-abs r-2 w-50px ar-1 bg-green/60 top-middle left-70% align-cc">pin</div>  
  </div>
</div>


```html
<div class="pos-rel">
  <div class="pos-abs bottom-0 right-10%">Pin</div>
</div>

<div class="pos-rel">
  <div class="pos-abs inset-10%">Pin</div>
</div>

<div class="pos-rel">
  <div class="pos-abs top-middle left-70%">Pin</div>
</div>
```


## Inset Shorhands

Quickly set multiple coordinate edges at once using logical layout axes wrappers.

* **`inset-{value}`**: Sets all four sides simultaneously.
* **`inset-x-{value}`**: Sets horizontal edges via `inset-inline` (left & right).
* **`inset-y-{value}`**: Sets vertical edges via `inset-block` (top & bottom).

<div class="card flex-x gap-3 p-3 w-fit">
  <div class="pos-rel r-1 w-100px ar-1 bg-blue/60 text-white">
    <div class="pos-abs r-2 w-50px ar-1 bg-green/60 inset-x-5 inset-y-8 align-cc">pin</div>  
  </div>
</div>


```html
<div class="pos-rel">
  <div class="pos-abs inset-x-2 inset-y-5">Pin</div>
</div>
```


## The `middle` Centering Magic

Passing the `middle` keyword triggers a smart positional offset. It establishes a `50%` offset distance and automatically loads the hardware-accelerated transform engine to back-translate the element by `-50%`. This handles true pixel-perfect centering without complex layout boilerplate.

| Utility | Generated CSS Style Output |
| --- | --- |
| `left-middle` | `left: 50%; --su-tr-x: -50%; transform: translateX(-50%) ...;` |
| `top-middle` | `top: 50%; --su-tr-y: -50%; transform: translateY(-50%) ...;` |
| `inset-middle` | `inset: 50%; --su-tr-x: -50%; --su-tr-y: -50%; transform: ...;` |



<div class="card flex-x gap-3 p-3 w-fit">
  <div class="pos-rel r-1 w-100px ar-1 bg-blue/60 text-white">
    <div class="pos-abs r-2 w-50px ar-1 bg-green/60 top-middle align-cc">pin</div>  
  </div>

  <div class="pos-rel r-1 w-100px ar-1 bg-blue/60 text-white">
    <div class="pos-abs r-2 w-50px ar-1 bg-green/60 left-middle align-cc">pin</div>  
  </div>

  <div class="pos-rel r-1 w-100px ar-1 bg-blue/60 text-white">
    <div class="pos-abs r-2 w-50px ar-1 bg-green/60 inset-middle align-cc">pin</div>  
  </div>
</div>

```html
<div class="pos-rel">
  <div class="pos-abs top-middle">pin</div>  
</div>

<div class="pos-rel">
  <div class="pos-abs left-middle">pin</div>  
</div>

<div class="pos-rel">
  <div class="pos-abs inset-middle">pin</div>  
</div>
```

## Direction Modifiers

Prefix properties with a minus sign (`-`) to shift elements outward beyond boundary fields. Prepend the exclamation mark (`!`) at the absolute beginning for utility override rules.

* `-top-4` => `top: -1rem;`
* `-left-full` => `left: -100%;`
* `!-bottom-middle` => `bottom: calc(50% * -1) !important;`

<div class="card flex-x gap-3 p-8 w-fit">
  <div class="pos-rel r-1 w-100px ar-1 bg-blue/60 text-white">
    <div class="pos-abs r-2 w-50px ar-1 bg-green/60 -top-25px -left-25px align-cc">pin</div>  
  </div>

  <div class="pos-rel r-1 w-100px ar-1 bg-blue/60 text-white">
    <div class="pos-abs r-2 w-50px ar-1 bg-green/60 right-0 mv-x-50% top-0 -mv-y-50% align-cc">pin</div>  
  </div>
</div>

```html
<div class="pos-rel">
  <div class="pos-abs -top-25px -left-25px">pin</div>  
</div>

<div class="pos-rel">
  <div class="pos-abs right-0 top-0 mv-x-50% -mv-y-50%">pin</div>  
</div>
```