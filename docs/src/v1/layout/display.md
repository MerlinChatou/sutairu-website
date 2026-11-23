# Display

Control the display behavior and visibility of elements in your layout using atomic utility classes.

## Display

Set the `display` property of an element instantly using the `d-{value}` syntax.

| Class | CSS Property Output | Description |
| --- | --- | --- |
| **`d-block`** | `display: block;` | Generates a block box, stacking elements vertically. |
| **`d-inline-block`** | `display: inline-block;` | Generates an inline-level block container. |
| **`d-inline`** | `display: inline;` | Forces inline flow behavior. |
| **`d-flex`** | `display: flex;` | Establishes a flexbox container. |
| **`d-inline-flex`** | `display: inline-flex;` | Establishes an inline-level flexbox container. |
| **`d-grid`** | `display: grid;` | Establishes a CSS grid container. |
| **`d-inline-grid`** | `display: inline-grid;` | Establishes an inline-level grid container. |
| **`d-contents`** | `display: contents;` | Discards the element box itself, making its children act as direct children of its parent. |
| **`d-list-item`** | `display: list-item;` | Turns the element into a list item (with bullet points). |
| **`d-none`** / **`d-hidden`** | `display: none;` | Removes the element completely from the layout flow. |
| **`d-table`** | `display: table;` | Behaves like an HTML table element. |
| **`d-flow-root`** | `display: flow-root;` | Creates a block container with its own block formatting context (BFC). |

### Examples 


<div class="card p-3 mt-3">
<div class="d-block bg-subtle p-4 my-2">.d-block</div>
<span class="d-none">.d-none</span>
<div class="d-inline-block bg-subtle p-4 my-2">.d-inline block</div>
<div class="d-inline-block bg-subtle p-4 my-2">.d-inline block</div>
</div>

```html
<!-- Block element example -->
<div class="d-block">.d-block</div>

<!-- Completely hidden element -->
<span class="d-none">.d-none</span>

<!-- Inline block element example -->
<div class="d-inline-block">.d-inline block</div>
<div class="d-inline-block">.d-inline block</div>
```


## Visibility 

Control whether an element is rendered or hidden without altering the document layout flow using `v-{value}` classes or their standard aliases.

| Class / Alias | CSS Property Output | Description |
| --- | --- | --- |
| **`v-visible`**  | `visibility: visible;` | The element is fully visible and rendered. |
| **`v-hidden`**  | `visibility: hidden;` | The element is hidden from view but still takes up its original spatial footprint in the layout. |
| **`v-collapse`**  | `visibility: collapse;` | Used primarily for table rows/columns to remove them, but behaves like `hidden` on other elements. |



### Examples


<div class="card p-3 mt-3">
<!-- Hidden element that preserves its box dimensions -->
<div class=" bg-subtle p-4 my-2 v-hidden">This content is invisible, but its space remains occupied.</div>

<!-- Using the standard alias -->
<div class=" bg-subtle p-4 my-2 v-visible">.v-visible</div>
</div>


```html
<!-- Hidden element that preserves its box dimensions -->
<div class="v-hidden">.v-hidden</div>

<!-- Visible element -->
<div class="v-visible">.v-visible</div>

```