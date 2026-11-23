# Aspect Ratio

Utilities for controlling the aspect ratio of elements, ensuring precise proportional boxes for media containers, card layouts, and responsive grids.

## Semantic Utilities

A collection of pre-configured keywords mapping to standard digital media and cinema display standards.

| Utility Class | CSS Declaration         | Intended UI Context                                          |
| ------------- | ----------------------- | ------------------------------------------------------------ |
| `ar-auto`     | `aspect-ratio: auto;`   | Relies on the element's natural intrinsic dimensions.        |
| `ar-square`   | `aspect-ratio: 1 / 1;`  | Perfect square boxes (e.g., avatars, user profile thumbs).   |
| `ar-video`    | `aspect-ratio: 16 / 9;` | Standard widescreen format (e.g., modern web video players). |
| `ar-cinema`   | `aspect-ratio: 21 / 9;` | Ultra-widescreen cinematic view configurations.              |

<div class="card d-grid grid-cols-3 gap-2 p-3 w-fit ff-mono text-white ai-start">
  <div class="bg-accent min-w-100px p-3 align-cc r-2 ar-square">1/1</div>
  <div class="bg-accent min-w-100px p-3 align-cc r-2 ar-video">16/9</div>  
  <div class="bg-accent min-w-100px p-3 align-cc r-2 ar-cinema">21/9</div>    
</div>

```html
<div class="ar-square">1/1</div>
<div class="ar-video">16/9</div>
<div class="ar-cinema">21/9</div>
```

## Dynamic Patterns

The engine dynamically parses customized proportional values passed directly within class names. It accepts plain integers, decimals, or literal division fractions.

- **Syntax:** `ar-{value}` or `!ar-{value}`
- **Examples:** `ar-2`, `ar-1.5`, `ar-4/3`, `!ar-16/10`

<div class="card d-grid grid-cols-3 gap-2 p-3 w-fit ff-mono text-white ai-start">
  <div class="bg-accent min-w-100px p-3 align-cc r-2 ar-2">.ar-2</div>
  <div class="bg-accent min-w-100px p-3 align-cc r-2 ar-9/16">.ar-16/9</div>
  <div class="bg-accent min-w-100px p-3 align-cc r-2 ar-0.8">.ar-0.8</div>  
</div>

```html
<div class="ar-2">.ar-2</div>
<div class="ar-9/16">.ar-16/9</div>
<div class="ar-0.8">.ar-0.8</div> 
```
