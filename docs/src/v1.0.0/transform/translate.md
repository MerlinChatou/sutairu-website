# Translate

Displace elements along the horizontal or vertical axes using hardware-accelerated GPU translation. This utility alters the `--su-tr-x` and `--su-tr-y` variables, allowing seamless combinations with scaling and rotation without causing utility overrides.

## Usage

Use the `mv-{axis}-{value}{unit}` utility to translate an element.

* **Axes:** Use `x` for horizontal movement and `y` for vertical movement.
* **Default Unit:** If no unit is explicitly provided, the framework defaults to `px`. Supported units include `px`, `rem`, `%`, and `em`.

| Utility | Generated CSS Variables | Combined Output CSS |
| --- | --- | --- |
| `mv-x-20` | `--su-tr-x: 20px;` | `transform: translateX(20px) ...;` |
| `mv-y-2rem` | `--su-tr-y: 2rem;` | `transform: translateY(2rem) ...;` |
| `mv-x-50%` | `--su-tr-x: 50%;` | `transform: translateX(50%) ...;` |


<div class="stack w-100px ar-1 fs-2xl text-white ff-mono">
  <div class="w-80px r-2 ar-1 align-cc bg-yellow/60">01</div>  
  <div class="w-80px r-2 ar-1 align-cc bg-blue/60 mv-x-40px mv-y-20%">02</div>  
</div>


```html
<div class="stack">
  <div class="bg-yellow/60">01</div>  
  <div class="bg-blue/60 mv-x-40px mv-y-20%">02</div>
</div>
```


## Negative & Important Modifiers

To move an element in the opposite direction (left or up), prefix the utility with a minus sign (`-`). Combine it with `!` at the very beginning to force rule priority.

* `-mv-x-50%` => `--su-tr-x: -50%;` *(Shifts left by half its width)*
* `!-mv-y-10` => `--su-tr-y: -10px !important;` *(Shifts up by 10px with high priority)*

<div class="stack w-100px ar-1 fs-2xl text-white ff-mono">
  <div class="w-80px r-2 ar-1 align-cc bg-yellow/60">01</div>  
  <div class="w-80px r-2 ar-1 align-cc bg-blue/60 -mv-x-10px -mv-y-20%">02</div>  
</div>


```html
<div class="stack">
  <div class="bg-yellow/60">01</div>  
  <div class="bg-blue/60 -mv-x-10px -mv-y-20%">02</div>
</div>
```


## Core Engine Synchronization

Every translation class automatically injects the framework's central transform engine. This safeguards your styles so that mixing `mv-`, `rot-`, and `sc-` utilities together on a single element behaves exactly as expected:

```css
transform: translateX(var(--su-tr-x, 0)) 
           translateY(var(--su-tr-y, 0)) 
           rotate(var(--su-rot, 0)) 
           scaleX(calc(var(--su-sc-x, 1) * var(--su-sc, 1))) 
           scaleY(calc(var(--su-sc-y, 1) * var(--su-sc, 1)));
```