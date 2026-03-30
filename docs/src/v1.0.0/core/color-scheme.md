# Color Scheme

Sutairu features semantic support for **light** and **dark** modes. Sutairu’s utilities are designed to be context-aware, automatically adapting to the active environment.

To control the color scheme globally, apply the `data-color-scheme` attribute to the `<html>` element:

### Default (Light Mode)

If the attribute is omitted, Sutairu renders the standard light variants.

```html
<html>
```

### Dark Mode

To shift the framework into its dark-mode variant, explicitly set the attribute to `dark`.

```html
<html data-color-scheme="dark">
```


## Light/Dark Utility Prefixes

Many classes support the `dark:` prefix to apply a style **only in dark mode**.

<div class="card w-fit ta-center ff-mono">
  <div class="p-3 r-2 bg-red dark:bg-green text-white">Light = red / Dark = green</div>  
</div>



```html
<!-- Container is red in light mode and green in dark mode -->
<div class="bg-red dark:bg-green">Light = red / Dark = green</div>
```



## Design Philosophy: Light-First

Sutairu is built on a **deterministic, light-first architecture**.

* **The Norm:** Light mode serves as the baseline for all component structures and color scales.
* **The Exception:** Dark mode is treated as an adaptive layer. When the `.dark` context is active, the framework dynamically remaps the underlying color variables to their dark-variant counterparts.



| Value | Mode | Description |
| --- | --- | --- |
| *(None)* | **Light** | **The Norm.** The baseline state for all utilities. |
| `dark` | **Dark** | **The Exception.** Activates the adaptive dark-mode layer. |



To keep the core lightweight, Sutairu intentionally avoids localized theme overrides. Nested color schemes are not supported and may result in unpredictable rendering and CSS variable conflicts.

