# Close Button

Lightweight, close buttons are designed for modals, alerts, drawers, and dismissible components. Supports semantic color variants and utility-driven hover states.

## Basic Usage

Use the base `btn-close` class on a `<button>` element. Always include an `aria-label` for screen reader accessibility.

<div class="card p-3 w-fit">
<button class="btn-close" aria-label="Close"></button>
</div>

```html
<button class="btn-close" aria-label="Close"></button>
```

## Variants & Customization

You can customize close buttons using specialized color classes or combine them with framework utility classes (such as hover backgrounds and text colors).

<div class="card flex-x gap-3 p-3 w-fit">
<button class="btn-close hover:bg-gray/20" aria-label="Close"></button>
<button class="btn-close-accent text-accent" aria-label="Close"></button>
<button class="btn-close-yellow" aria-label="Close"></button>
<button class="btn-close-red" aria-label="Close"></button>
<button class="btn-close-green hover:bg-green/20" aria-label="Close"></button>
</div>


```html
<button class="btn-close hover:bg-gray/20" aria-label="Close"></button>
<button class="btn-close-accent text-accent" aria-label="Close"></button>
<button class="btn-close-yellow" aria-label="Close"></button>
<button class="btn-close-red" aria-label="Close"></button>
<button class="btn-close-green hover:bg-green/20" aria-label="Close"></button>
```
