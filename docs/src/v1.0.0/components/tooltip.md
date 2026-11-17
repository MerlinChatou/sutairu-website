# Tooltips

Lightweight, CSS-driven tooltips that display contextual information when hovering over elements. Tooltips support automatic collision placement, directional modifiers (including left and end alignments), rich HTML content, and custom utility styling.

## Basic Structure

Wrap your trigger element with the `tip` class and include a `.tip-body` child element to define the tooltip content.

<button class="btn btn-secondary tip">
  Hover me
  <span class="tip-body">Tooltip message</span>
</button>

```html
<button class="btn btn-secondary tip">
  Hover me
  <span class="tip-body">Tooltip message</span>
</button>
```


## Placement Modifiers

By default, tooltips use automatic placement. You can explicitly position tooltips using modifier classes on the trigger element:

| Modifier | Description | Example Class |
| --- | --- | --- |
| **Default** | Automatically positions the tooltip based on available viewport space. | `tip` |
| **Top** | Positions the tooltip above the element. | `tip tip-top` |
| **Bottom** | Positions the tooltip below the element. | `tip tip-bottom` |
| **Start** | Positions the tooltip at the start alignment. | `tip tip-start` |
| **End** | Positions the tooltip at the end alignment. | `tip tip-end` |
| **Left** | Forces the tooltip to the left of the element. | `tip tip-left` |
| **Right** | Forces the tooltip to the right of the element. | `tip tip-right` |


## Automatic Placement & Fallback Mechanics

The framework leverages modern CSS Anchor Positioning (`position-area`, `@position-try`, and `position-try-fallbacks`) to handle collision detection and automatic repositioning.

When a tooltip overflows the viewport, the browser automatically cycles through the defined fallback sequence until it finds a position that fits.


### Fallback Behavior Summary

| Original Placement | 1st Fallback (The Flip) | 2nd & 3rd Fallbacks (Edge/Corner Adjustments) |
| --- | --- | --- |
| `tip-top` | Flips to the bottom | Slides into top-right or top-left corner alignments if crowded horizontally. |
| `tip-bottom` | Flips to the top | Slides into bottom-right or bottom-left corner alignments if crowded horizontally. |
| `tip-left` / `tip-start` | Flips to the right / end side | Shifts downward or upward along the vertical side edge if crowded vertically. |
| `tip-right` / `tip-end` | Flips to the left / start side | Shifts downward or upward along the vertical side edge if crowded vertically. |


### Examples


<div class="card flex-x gap-3 p-3 w-fit mt-3">
  <button class="btn btn-secondary tip tip-top">
    Tooltip top
    <span class="tip-body">Tooltip on top</span>
  </button>
  <button class="btn btn-secondary tip tip-right">
    Tooltip right
    <span class="tip-body">Tooltip on right</span>
  </button>
  <button class="btn btn-secondary tip tip-bottom">
    Tooltip bottom
    <span class="tip-body">Tooltip on bottom</span>
  </button>
  <button class="btn btn-secondary tip tip-left">
    Tooltip left
    <span class="tip-body">Tooltip on left</span>
  </button>
</div>




```html
<!-- Top placement -->
<button class="btn btn-secondary tip tip-top">
  Tooltip top
  <span class="tip-body">Tooltip on top</span>
</button>

<!-- Right placement -->
<button class="btn btn-secondary tip tip-right">
  Tooltip right
  <span class="tip-body">Tooltip on right</span>
</button>

<!-- Bottom placement -->
<button class="btn btn-secondary tip tip-bottom">
  Tooltip bottom
  <span class="tip-body">Tooltip on bottom</span>
</button>

<!-- Left placement -->
<button class="btn btn-secondary tip tip-left">
  Tooltip left
  <span class="tip-body">Tooltip on left</span>
</button>
```

## Rich HTML Content

Tooltips fully support embedded HTML:

<button class="btn btn-secondary tip">
  Hover me
  <span class="tip-body">
    <i class="icon i-comment-square-wide fs-2xl"></i> 
    <strong>Rich HTML</strong> tooltip with a <kbd>Ctrl+K</kbd> shortcut
  </span>
</button>


```html
<button class="btn btn-secondary tip">
  Hover me
  <span class="tip-body">
    <i class="icon i-comment-square-wide fs-2xl"></i> 
    <strong>Rich HTML</strong> tooltip with a <kbd>Ctrl+K</kbd> shortcut
  </span>
</button>
```

## Custom Styled Tooltips

You can apply framework utility classes directly to the `.tip-body` element to customize the tooltip:

<button class="btn btn-secondary tip">
  Hover me
  <span class="tip-body bg-accent text-white border b-5px b-orange r-pill tr-opacity-1s">
    Custom styled tooltip
  </span>
</button>


```html
<button class="btn btn-secondary tip">
  Hover me
  <span class="tip-body bg-accent text-white border b-5px b-orange r-pill tr-opacity-1s">
    Custom styled tooltip
  </span>
</button>
```