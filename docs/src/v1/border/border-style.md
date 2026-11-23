# Border Style

Utilities for controlling the line style of an element's borders (e.g., solid, dashed, or decorative 3D effects).

## Core Utilities

The system dynamically processes combinations using the `b-` prefix followed by any valid standard CSS border style.

| Utility Class | CSS Declaration | Visual Appearance Description |
| --- | --- | --- |
| `b-solid` | `border-style: solid;` | A single, solid line. |
| `b-dashed` | `border-style: dashed;` | A series of short line segments. |
| `b-dotted` | `border-style: dotted;` | A series of round dots. |
| `b-double` | `border-style: double;` | Two parallel solid lines with space between them. |
| `b-none` | `border-style: none;` | Removes all borders entirely. |
| `b-auto` | `border-style: auto;` | Uses the user agent's default rendering behavior. |
| `b-groove` | `border-style: groove;` | A 3D groove carved into the canvas (depends on color). |
| `b-ridge` | `border-style: ridge;` | A 3D ridge rising out of the canvas (depends on color). |
| `b-inset` | `border-style: inset;` | Makes the element appear embedded inside the page layout. |
| `b-outset` | `border-style: outset;` | Makes the element appear embossed or raised off the page. |

## Examples

See below for a structural preview of how each border style renders on an element.


<div class="card w-fit min-w-25ch flex-y p-3 gap-2">
<div class="w-full p-2 r-2 bg-subtle text-center b-2 b-accent b-auto">b-auto</div>
<div class="w-full p-2 r-2 bg-subtle text-center b-2 b-accent b-none">b-none</div>
<div class="w-full p-2 r-2 bg-subtle text-center b-2 b-accent b-dotted">b-dotted</div>
<div class="w-full p-2 r-2 bg-subtle text-center b-2 b-accent b-dashed">b-dashed</div>
<div class="w-full p-2 r-2 bg-subtle text-center b-2 b-accent b-solid">b-solid</div>
<div class="w-full p-2 r-2 bg-subtle text-center b-10 b-accent b-double">b-double</div>
<div class="w-full p-2 r-2 bg-subtle text-center b-10 b-accent b-groove">b-groove</div>
<div class="w-full p-2 r-2 bg-subtle text-center b-10 b-accent b-ridge">b-ridge</div>
<div class="w-full p-2 r-2 bg-subtle text-center b-10 b-accent b-inset">b-inset</div>
<div class="w-full p-2 r-2 bg-subtle text-center b-10 b-accent b-outset">b-outset</div>
</div>

```html
<div class="b-2 b-accent b-auto">b-auto</div>
<div class="b-2 b-accent b-none">b-none</div>
<div class="b-2 b-accent b-dotted">b-dotted</div>
<div class="b-2 b-accent b-dashed">b-dashed</div>
<div class="b-2 b-accent b-solid">b-solid</div>
<div class="b-10 b-accent b-double">b-double</div>
<div class="b-10 b-accent b-groove">b-groove</div>
<div class="b-10 b-accent b-ridge">b-ridge</div>
<div class="b-10 b-accent b-inset">b-inset</div>
<div class="b-10 b-accent b-outset">b-outset</div>
```