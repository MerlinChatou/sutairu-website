# Translate

Displace elements along the horizontal or vertical axes using hardware-accelerated GPU translation. This utility alters the `--su-tr-x` and `--su-tr-y` variables, allowing seamless combinations with scaling and rotation without causing utility overrides.

## Usage

Use the `mv-{axis}-{value}{unit}` utility to translate an element along a specific axis, or omit the axis entirely (`mv-{value}{unit}`) to apply the movement to **both** axes simultaneously.

- **Axes:** Use `x` for horizontal movement and `y` for vertical movement. Leave the axis out (e.g., `mv-20`) to apply to both `x` and `y`.
- **Default Unit:** If no unit is explicitly provided, the framework defaults to `px`. Supported units include `px`, `rem`, `%`, and `em`.
- **Middle Alignment Shorthand:** Use the keyword `middle` to instantly offset an element by `-50%`. This is ideal for perfect absolute centering.

| Utility       | Generated CSS Variables                | Combined Output CSS                                 |
| ------------- | -------------------------------------- | --------------------------------------------------- |
| `mv-x-20`     | `--su-tr-x: 20px;`                     | `transform: translateX(20px) ...;`                  |
| `mv-y-2rem`   | `--su-tr-y: 2rem;`                     | `transform: translateY(2rem) ...;`                  |
| `mv-2px`      | `--su-tr-x: 2px;<br>--su-tr-y: 2px;`   | `transform: translateX(2px) translateY(2px) ...;`   |
| `mv-middle`   | `--su-tr-x: -50%;<br>--su-tr-y: -50%;` | `transform: translateX(-50%) translateY(-50%) ...;` |
| `mv-x-middle` | `--su-tr-x: -50%;`                     | `transform: translateX(-50%) ...;`                  |

<div class="card p-10 flex-x w-fit gap-16">
  <div class="stack w-100px ar-1 fs-2xl text-white ff-mono">
    <div class="w-80px r-2 ar-1 align-cc bg-green/60">01</div>  
    <div class="w-80px r-2 ar-1 align-cc bg-blue/60 mv-x-40px mv-y-20%">02</div>  
  </div>

  <div class="stack w-100px ar-1 fs-2xl text-white ff-mono">
    <div class="w-80px r-2 ar-1 align-cc bg-green/60">01</div>  
    <div class="w-80px r-2 ar-1 align-cc bg-blue/60 mv-middle">02</div>  
  </div>
</div>

```html
<div class="stack">
  <div>01</div>  
  <div class="mv-x-40px mv-y-20%">02</div>  
</div>

<div class="stack">
  <div>01</div>  
  <div class="mv-middle">02</div>  
</div>
```

## Negative & Important Modifiers

To move an element in the opposite direction (left or up), prefix the utility with a minus sign (`-`). Combine it with `!` at the very beginning to force rule priority.

> [!NOTE]
> When using `-` with the `middle` keyword, the negative flags invert the default `-50%` output into a positive `50%` value.

- `-mv-x-50%` => `--su-tr-x: -50%;` _(Shifts left by half its width)_
- `!-mv-y-10` => `--su-tr-y: -10px !important;` _(Shifts up by 10px with high priority)_
- `-mv-middle` => `--su-tr-x: 50%; --su-tr-y: 50%;` _(Shifts right and down by half its size)_

<div class="stack w-100px ar-1 my-2 fs-2xl text-white ff-mono">
  <div class="w-80px r-2 ar-1 align-cc bg-green/60">01</div>  
  <div class="w-80px r-2 ar-1 align-cc bg-blue/60 -mv-10px">02</div>  
</div>

```html
<div class="stack">
  <div class="bg-green/60">01</div>
  <div class="bg-blue/60 -mv-10px">02</div>
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
