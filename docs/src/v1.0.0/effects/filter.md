# Filters

Sutairu provides a set of highly performant, utility-first classes to apply visual filter effects directly to your images or elements. These classes wrap the native CSS `filter` property, allowing you to easily adjust tones, colors, and visibility without touching your stylesheet.



## Utility Classes Reference

Apply these classes directly to any `<img>` or visual container to achieve the desired effect.

| Class | CSS Equivalent | Description |
| --- | --- | --- |
| `.grayscale-[value]` | `filter: grayscale(value%)` | Converts the image to grayscale, desaturating its colors. |
| `.brightness-[value]` | `filter: brightness(value%)` | Adjusts the image brightness (values above 100 increase brightness). |
| `.blur-[value]` | `filter: blur(value rem/px)` | Applies a Gaussian blur to the element. |
| `.contrast-[value]` | `filter: contrast(value%)` | Adjusts the contrast (values above 100 increase contrast). |
| `.invert-[value]` | `filter: invert(value%)` | Inverts the samples in the element (e.g., creating a negative-like effect). |
| `.hue-rotate-[value]` | `filter: hue-rotate(value deg)` | Rotates the hue of the element's colors around the color wheel. |
| `.opacity-[value]` | `filter: opacity(value%)` | Controls the transparency level of the element. |
| `.saturate-[value]` | `filter: saturate(value%)` | Controls the color intensity/saturation of the element. |
| `.sepia-[value]` | `filter: sepia(value%)` | Converts the image to sepia, giving it a warm, vintage brown tone. |

> **Note:** The `.blur-[value]` and `.hue-rotate-[value]` utilities can accept optional unit suffixes (such as `px`, `rem`, `em` for blur, or `deg`, `grad`, `rad`, `turn` for hue-rotation) directly in the class name if a custom unit is preferred over the default configuration.

## Code Examples

Here is how you can use these classes in your markup:

<!-- <div class="card flex-x fw-wrap gap-2 p-2 w-fit max-w-max"> -->
<div class="card d-grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2 p-2 w-fit max-w-max">
  <img class="r-4 grayscale-90 hover:grayscale-0" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
  <img class="r-4 brightness-150 hover:brightness-100" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
  <img class="r-4 blur-4 hover:blur-0" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
  <img class="r-4 contrast-200 hover:contrast-100" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
  <img class="r-4 invert-80 hover:invert-0" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
  <img class="r-4 hue-rotate-180 hover:hue-rotate-0" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
  <img class="r-4 opacity-10 hover:opacity-100" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
  <img class="r-4 saturate-75 hover:saturate-100" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
  <img class="r-4 sepia-80 hover:sepia-0" src="/images/color-image-no-bg.png" alt="Colored pens to demonstrate filters">
</div>


```html
<img class="r-4 grayscale-90" src="image.png" alt="90% Grayscale filter">
<img class="r-4 brightness-150" src="image.png" alt="150% Brightness filter">
<img class="r-4 blur-4" src="image.png" alt="Blurred filter">
<img class="r-4 contrast-200" src="image.png" alt="200% Contrast filter">
<img class="r-4 invert-80" src="image.png" alt="80% Inverted filter">
<img class="r-4 hue-rotate-180" src="image.png" alt="180-degree Hue Rotate filter">
<img class="r-4 opacity-10" src="image.png" alt="10% Opacity filter">
<img class="r-4 saturate-75" src="image.png" alt="75% Saturation filter">
<img class="r-4 sepia-80" src="image.png" alt="80% Sepia filter">
```

## Performance & Optimization Tips

* **Hardware Acceleration:** Browser-level CSS filters run on the GPU. However, animating filters like `.blur` can sometimes be resource-intensive. For smooth animations, pair them with `will-change: filter`.
* **Combining Filters:** You can safely combine these utility classes on a single element (e.g., `class="grayscale-90 opacity-10"`), but keep in mind that the browser processes them in a specific order which can slightly affect the final look compared to a single custom class.