# Cursor

Utilities for controlling the mouse cursor behavior when hovering over elements, mapping directly to standard interactive web states.

## Core Utilities

The system builds these static rules using the `cur-` prefix. Every keyword automatically maps to its native CSS `cursor` value.

| Utility Class | CSS Declaration | Intended UI Context / Meaning |
| --- | --- | --- |
| `cur-auto` | `cursor: auto;` | Let the browser decide based on the context. |
| `cur-default` | `cursor: default;` | Platform-dependent default (usually an arrow). |
| `cur-pointer` | `cursor: pointer;` | Indicates a link, button, or interactive element. |
| `cur-wait` | `cursor: wait;` | Indicates the program is busy (spinning wheel/hourglass). |
| `cur-text` | `cursor: text;` | Indicates text can be selected or edited (I-beam). |
| `cur-move` | `cursor: move;` | Indicates something can be moved or dragged. |
| `cur-help` | `cursor: help;` | Indicates help information is available (often a question mark). |
| `cur-not-allowed` | `cursor: not-allowed;` | Indicates a disabled action or non-droppable zone. |
| `cur-none` | `cursor: none;` | Hides the mouse cursor entirely. |
| `cur-context-menu` | `cursor: context-menu;` | Indicates a context menu is available. |
| `cur-progress` | `cursor: progress;` | Background task running, but user can still interact. |
| `cur-cell` | `cursor: cell;` | Excel-style table cell selection indicator. |
| `cur-crosshair` | `cursor: crosshair;` | Precise bitmap selection or drawing cross. |
| `cur-vertical-text` | `cursor: vertical-text;` | Vertical text editing layout indicator. |
| `cur-alias` | `cursor: alias;` | Indicates a shortcut or alias is being created. |
| `cur-copy` | `cursor: copy;` | Indicates something is explicitly ready to be duplicated. |
| `cur-no-drop` | `cursor: no-drop;` | Item cannot be dropped at the current location. |
| `cur-grab` | `cursor: grab;` | Surface or item can be held/paned around. |
| `cur-grabbing` | `cursor: grabbing;` | Actively holding down and shifting a layout around. |
| `cur-all-scroll` | `cursor: all-scroll;` | Page or element can be scrolled in any direction. |
| `cur-col-resize` | `cursor: col-resize;` | Column width handle resizing. |
| `cur-row-resize` | `cursor: row-resize;` | Row height handle resizing. |


Hover over any of the elements below to see the respective mouse cursor behavior in action.


<div class="card w-fit d-flex fd-row fw-wrap p-3 gap-2">
<div class="bg-subtle p-3 r-2 text-center cur-pointer">cur-pointer</div>
<div class="bg-subtle p-3 r-2 text-center cur-wait">cur-wait</div>
<div class="bg-subtle p-3 r-2 text-center cur-text">cur-text</div>
<div class="bg-subtle p-3 r-2 text-center cur-help">cur-help</div>
<div class="bg-subtle p-3 r-2 text-center cur-crosshair">cur-crosshair</div>
<div class="bg-subtle p-3 r-2 text-center cur-not-allowed">cur-not-allowed</div>
<div class="bg-subtle p-3 r-2 text-center cur-zoom-in">cur-zoom-in</div>
<div class="bg-subtle p-3 r-2 text-center cur-zoom-out">cur-zoom-out</div>
<div class="bg-subtle p-3 r-2 text-center cur-grab">cur-grab</div>
<div class="bg-subtle p-3 r-2 text-center cur-grabbing">cur-grabbing</div>
<div class="bg-subtle p-3 r-2 text-center cur-progress">cur-progress</div>
<div class="bg-subtle p-3 r-2 text-center cur-default">cur-default</div>
<div class="bg-subtle p-3 r-2 text-center cur-auto">cur-auto</div>
</div>

``` html
<div class="cur-pointer">cur-pointer</div>
<div class="cur-wait">cur-wait</div>
<div class="cur-text">cur-text</div>
<div class="cur-help">cur-help</div>
<div class="cur-crosshair">cur-crosshair</div>
<div class="cur-not-allowed">cur-not-allowed</div>
<div class="cur-zoom-in">cur-zoom-in</div>
<div class="cur-zoom-out">cur-zoom-out</div>
<div class="cur-grab">cur-grab</div>
<div class="cur-grabbing">cur-grabbing</div>
<div class="cur-progress">cur-progress</div>
<div class="cur-default">cur-default</div>
<div class="cur-auto">cur-auto</div>
```