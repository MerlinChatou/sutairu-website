# Outline Style

Utilities for controlling the line style of an element's outlines (e.g., solid, dashed, or decorative 3D effects) without affecting surrounding layout geometry.

## Core Utilities

The system dynamically processes combinations using the `ol-` prefix followed by any valid standard CSS outline style.

| Utility Class | CSS Declaration | Visual Appearance Description |
| --- | --- | --- |
| `ol-solid` | `outline-style: solid;` | A single, solid line. |
| `ol-dashed` | `outline-style: dashed;` | A series of short line segments. |
| `ol-dotted` | `outline-style: dotted;` | A series of round dots. |
| `ol-double` | `outline-style: double;` | Two parallel solid lines with space between them. |
| `ol-none` | `outline-style: none;` | Removes all outlines entirely. |
| `ol-auto` | `outline-style: auto;` | Uses the user agent's default rendering behavior (often a custom focus ring). |
| `ol-groove` | `outline-style: groove;` | A 3D groove carved into the canvas (depends on color). |
| `ol-ridge` | `outline-style: ridge;` | A 3D ridge rising out of the canvas (depends on color). |
| `ol-inset` | `outline-style: inset;` | Makes the element appear embedded inside the page layout. |
| `ol-outset` | `outline-style: outset;` | Makes the element appear embossed or raised off the page. |

## Examples

See below for a structural preview of how each outline style renders on an element.


<div class="card w-fit min-w-25ch flex-y p-3 gap-2 gap-y-7">
<div class="w-full p-2 r-1 bg-subtle text-center ol-2 ol-accent ol-auto">ol-auto</div>
<div class="w-full p-2 r-1 bg-subtle text-center ol-2 ol-accent ol-none">ol-none</div>
<div class="w-full p-2 r-1 bg-subtle text-center ol-2 ol-accent ol-dotted">ol-dotted</div>
<div class="w-full p-2 r-1 bg-subtle text-center ol-2 ol-accent ol-dashed">ol-dashed</div>
<div class="w-full p-2 r-1 bg-subtle text-center ol-2 ol-accent ol-solid">ol-solid</div>
<div class="w-full p-2 r-1 bg-subtle text-center ol-10 ol-accent ol-double">ol-double</div>
<div class="w-full p-2 r-1 bg-subtle text-center ol-10 ol-accent ol-groove">ol-groove</div>
<div class="w-full p-2 r-1 bg-subtle text-center ol-10 ol-accent ol-ridge">ol-ridge</div>
<div class="w-full p-2 r-1 bg-subtle text-center ol-10 ol-accent ol-inset">ol-inset</div>
<div class="w-full p-2 r-1 bg-subtle text-center ol-10 ol-accent ol-outset">ol-outset</div>
</div>


```html
<div class="ol-2 ol-accent ol-auto">ol-auto</div>
<div class="ol-2 ol-accent ol-none">ol-none</div>
<div class="ol-2 ol-accent ol-dotted">ol-dotted</div>
<div class="ol-2 ol-accent ol-dashed">ol-dashed</div>
<div class="ol-2 ol-accent ol-solid">ol-solid</div>
<div class="ol-10 ol-accent ol-double">ol-double</div>
<div class="ol-10 ol-accent ol-groove">ol-groove</div>
<div class="ol-10 ol-accent ol-ridge">ol-ridge</div>
<div class="ol-10 ol-accent ol-inset">ol-inset</div>
<div class="ol-10 ol-accent ol-outset">ol-outset</div>
```