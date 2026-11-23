# Gap utilities

Gap utilities control spacing between child elements inside flex and grid containers. They provide consistent layout spacing without relying on margins.

## Syntaxe


* Use `gap-*` to set spacing between rows and columns simultaneously.
* Use `gap-x-*` to control horizontal spacing between columns. 
* Use `gap-y-*` to control vertical spacing between rows.

| Class   | CSS                     |
| ------- | ----------------------- |
| `gap-0` | `gap: 0`                |
| `gap-1` | `gap: 0.25rem` |
| `gap-2` | `gap: 0.5rem` |
| `gap-x-3` | `column-gap: 0.75rem` |
| `gap-20px` | `gap: 20px` |
| `gap-y-5vw` | `row-gap: 5vw` |


## Examples


See below for a structural preview of a horizontal flex layout displaying uniform spacing on a single axis using the `gap-4` utility.

<div class="card p-3 w-fit ff-mono">
  <div class="flex-x hatching-gray/20 b-1 b-gray/20 gap-4 r-2 text-white">
    <div class="bg-accent r-2 p-2 ar-1/1">01</div>
    <div class="bg-accent r-2 p-2 ar-1/1">02</div>
    <div class="bg-accent r-2 p-2 ar-1/1">03</div>
  </div>
</div>


```html
<div class="flex-x gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

See below for a structural preview of a multi-row grid layout using `gap-x-8` and `gap-y-2` to apply independent horizontal and vertical gutter dimensions.

<div class="card p-3 w-fit ff-mono">
  <div class="d-grid grid-cols-4 gap-x-8 gap-y-2 hatching-gray/20 b-1 b-gray/20 r-2 text-white">
    <div class="bg-accent bg-400 dark:bg-700 r-2 p-2">01</div>
    <div class="bg-accent bg-400 dark:bg-700 r-2 p-2">02</div>
    <div class="bg-accent bg-400 dark:bg-700 r-2 p-2">03</div>
    <div class="bg-accent bg-400 dark:bg-700 r-2 p-2">04</div>
    <div class="bg-accent bg-400 dark:bg-700 r-2 p-2">05</div>
    <div class="bg-accent bg-400 dark:bg-700 r-2 p-2">06</div>
    <div class="bg-accent bg-400 dark:bg-700 r-2 p-2">07</div>
    <div class="bg-accent bg-400 dark:bg-700 r-2 p-2">08</div>
    <div class="bg-accent bg-400 dark:bg-700 r-2 p-2">09</div>
    <div class="bg-accent bg-400 dark:bg-700 r-2 p-2">10</div>
    <div class="bg-accent bg-400 dark:bg-700 r-2 p-2">11</div>
    <div class="bg-accent bg-400 dark:bg-700 r-2 p-2">12</div>
  </div>
</div>

```html
<div class="d-grid grid-cols-4 gap-x-8 gap-y-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  ...
</div>
```