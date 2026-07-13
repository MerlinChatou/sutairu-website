# Grid Layout

A fast, atomic grid system designed to build efficient layouts with minimal overhead.

## Grid Container Types

Initialize a grid container and control its auto-flow direction using these foundational classes.

| Utility | CSS Equivalent | Description |
| --- | --- | --- |
| `grid-x`, `grid-row` | `display: grid; grid-auto-flow: column;` | Creates a horizontal grid (items append inline). |
| `grid-y`, `grid-col` | `display: grid; grid-auto-flow: row;` | Creates a vertical grid (items append stacked). |

### Examples

<div class="card p-2 w-fit">
  <div class="grid-x gap-2 text-white text-center">
    <div class="bg-accent p-2 r-2">Item 1</div>
    <div class="bg-accent p-2 r-2">Item 2</div>
    <div class="bg-accent p-2 r-2">Item 3</div>
  </div>
</div>

```html
<div class="grid-x">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

<div class="card p-2 w-fit">
  <div class="grid-col gap-2 text-white text-center">
    <div class="bg-accent p-2 r-2">Item 1</div>
    <div class="bg-accent p-2 r-2">Item 2</div>
    <div class="bg-accent p-2 r-2">Item 3</div>
  </div>
</div>

```html
<div class="grid-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```




## Grid Templates

Define explicit track sizing for columns and rows.

### Columns

* **Numeric:** `grid-cols-{number}` creates equal-width columns using `repeat(n, minmax(0, 1fr))`.
* **Keywords:** `none` or `subgrid`.
* **Custom Sizing:** Pass explicit CSS values inside square brackets `[...]`. Use **underscores (`_`)** to denote spaces.

| Utility | Generated CSS |
| --- | --- |
| `grid-cols-3` | `grid-template-columns: repeat(3, minmax(0, 1fr));` |
| `grid-cols-none` | `grid-template-columns: none;` |
| `grid-cols-subgrid` | `grid-template-columns: subgrid;` |
| `grid-cols-[200px_1fr]` | `grid-template-columns: 200px 1fr;` |


<div class="card p-2 w-fit">
  <div class="grid-y grid-cols-3 gap-2 text-white text-center">
    <div class="bg-accent p-2 r-2">Item 1</div>
    <div class="bg-accent p-2 r-2">Item 2</div>
    <div class="bg-accent p-2 r-2">Item 3</div>
    <div class="bg-accent p-2 r-2">Item 4</div>
    <div class="bg-accent p-2 r-2">Item 5</div>
  </div>
</div>

```html
<div class="grid-y grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>
```

### Rows

* **Numeric:** `grid-rows-{number}` creates equal-height rows.
* **Keywords:** `none` or `subgrid`.

| Utility | Generated CSS |
| --- | --- |
| `grid-rows-4` | `grid-template-rows: repeat(4, minmax(0, 1fr));` |
| `grid-rows-none` | `grid-template-rows: none;` |
| `grid-rows-subgrid` | `grid-template-rows: subgrid;` |


<div class="card p-2 w-fit">
  <div class="grid-x grid-rows-3 gap-2 text-white text-center">
    <div class="bg-accent p-2 r-2">Item 1</div>
    <div class="bg-accent p-2 r-2">Item 2</div>
    <div class="bg-accent p-2 r-2">Item 3</div>
    <div class="bg-accent p-2 r-2">Item 4</div>
    <div class="bg-accent p-2 r-2">Item 5</div>
  </div>
</div>

```html
<div class="grid-x grid-rows-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>
```



## Item Spanning

Control how many tracks a grid item should span across columns or rows.

### Column Spanning

| Utility | Generated CSS | Description |
| --- | --- | --- |
| `gc-span-{number}` | `grid-column: span {number};` | Spans a specific number of columns. |
| `gc-span-full` | `grid-column: 1 / -1;` | Spans the entire width of the grid. |



<div class="card p-2 w-fit">
  <div class="grid-y grid-cols-3 gap-2 text-white text-center">
    <div class="bg-accent p-2 r-2">Item 1</div>
    <div class="bg-green p-2 r-2 gr-span-3">Item 2</div>
    <div class="bg-accent p-2 r-2">Item 3</div>
    <div class="bg-accent p-2 r-2">Item 4</div>
    <div class="bg-accent p-2 r-2">Item 5</div>
    <div class="bg-accent p-2 r-2">Item 6</div>
  </div>
</div>

```html
<div class="grid-y grid-cols-3">
  <div>Item 1</div>
  <div class="gr-span-3">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
```


### Row Spanning

| Utility | Generated CSS | Description |
| --- | --- | --- |
| `gr-span-{number}` | `grid-row: span {number};` | Spans a specific number of rows. |
| `gr-span-full` | `grid-row: 1 / -1;` | Spans the entire height of the grid. |



<div class="card p-2 w-fit">
  <div class="grid-y grid-cols-3 gap-2 text-white text-center">
    <div class="bg-accent p-2 r-2">Item 1</div>
    <div class="bg-accent p-2 r-2">Item 2</div>
    <div class="bg-accent p-2 r-2">Item 3</div>
    <div class="bg-green p-2 r-2 gc-span-2">Item 4</div>
    <div class="bg-accent p-2 r-2">Item 5</div>
    <div class="bg-accent p-2 r-2">Item 6</div>
  </div>
</div>

```html
<div class="grid-y grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div class="gc-span-2">Item 4</div>
  <div>Item 5</div>
  <div>Item 5</div>
</div>
```
