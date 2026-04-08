# Cursor Utilities

Cursor utilities control the mouse cursor appearance when hovering an element.

## Usage

<div class="card p-3 h-flex gap-3 w-fit">
<button class="btn bg-accent cur-pointer">Click me</button>
<div class="cur-not-allowed r-3 p-3 b-gray">Disabled area</div>
<div class="cur-wait r-3 p-3 b-gray">Wait</div>
</div>

```html
<button class="cur-pointer">Click me</button>
<div class="cur-not-allowed">Disabled area</div>
<div class="cur-wait">Wait</div>
```


## Available Classes

| Class             | CSS                   | Description                                      | Example                                     |
| ----------------- | --------------------- | ------------------------------------------------ | ------------------------------------------- |
| `cur-auto`        | `cursor: auto`        | Default browser behavior.                        | <div class="cur-auto">Hover me</div>        |
| `cur-default`     | `cursor: default`     | Standard arrow cursor.                           | <div class="cur-default">Hover me</div>     |
| `cur-pointer`     | `cursor: pointer`     | Indicates clickable element.                     | <div class="cur-pointer">Hover me</div>     |
| `cur-text`        | `cursor: text`        | Indicates selectable text.                       | <div class="cur-text">Hover me</div>        |
| `cur-wait`        | `cursor: wait`        | Indicates background processing (blocking).      | <div class="cur-wait">Hover me</div>        |
| `cur-progress`    | `cursor: progress`    | Indicates processing (non-blocking).             | <div class="cur-progress">Hover me</div>    |
| `cur-help`        | `cursor: help`        | Indicates help information is available.         | <div class="cur-help">Hover me</div>        |
| `cur-crosshair`   | `cursor: crosshair`   | Crosshair cursor, often for precision selection. | <div class="cur-crosshair">Hover me</div>   |
| `cur-not-allowed` | `cursor: not-allowed` | Indicates action is not permitted.               | <div class="cur-not-allowed">Hover me</div> |
| `cur-zoom-in`     | `cursor: zoom-in`     | Indicates zoom-in capability.                    | <div class="cur-zoom-in">Hover me</div>     |
| `cur-zoom-out`    | `cursor: zoom-out`    | Indicates zoom-out capability.                   | <div class="cur-zoom-out">Hover me</div>    |
| `cur-grab`        | `cursor: grab`        | Indicates draggable element.                     | <div class="cur-grab">Hover me</div>        |
| `cur-grabbing`    | `cursor: grabbing`    | Indicates active drag state.                     | <div class="cur-grabbing">Hover me</div>    |
