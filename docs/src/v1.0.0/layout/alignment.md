# Alignments

## Text Alignement

Sutairu provides a straightforward set of utilities to control the horizontal alignment of your text.

| Class           | Description                                            |
| :-------------- | :----------------------------------------------------- |
| `.text-left`    | Aligns text to the **left** side of the container.     |
| `.text-right`   | Aligns text to the **right** side of the container.    |
| `.text-center`  | Centers text horizontally.                             |
| `.text-justify` | Stretches the lines so that each line has equal width. |
| `.text-start`   | Aligns text to the start (Left in LTR, Right in RTL).  |
| `.text-end`     | Aligns text to the end (Right in LTR, Left in RTL).    |

### Example

<div class="card">
<p class="text-center">This text will be centered.</p>
<p class="text-right">This text will be right-aligned.</p>
</div>


```html
<p class="text-center">This text will be centered.</p>
<p class="text-right">This text will be right-aligned.</p>
```



## Positional Alignment Utilities

Beyond simple text alignment, Sutairu includes **Positional Alignment** utilities. These classes are typically used on container elements (like `flex` or `grid` parents) to quickly position child elements along both the vertical and horizontal axes.

You can use full descriptive names or high-speed aliases to control layout positioning.

| Full Class             | Alias           | Position                      |
| :--------------------- | :-------------- | :---------------------------- |
| `.align-top-left`      | **`.align-tl`** | Top Left                      |
| `.align-top-center`    | **`.align-tc`** | Top Center                    |
| `.align-top-right`     | **`.align-tr`** | Top Right                     |
| `.align-center-left`   | **`.align-cl`** | Middle Left                   |
| `.align-center-center` | **`.align-cc`** | Absolute Center (Dead Center) |
| `.align-center-right`  | **`.align-cr`** | Middle Right                  |
| `.align-bottom-left`   | **`.align-bl`** | Bottom Left                   |
| `.align-bottom-center` | **`.align-bc`** | Bottom Center                 |
| `.align-bottom-right`  | **`.align-br`** | Bottom Right                  |


### Usage with Stack or Flex

These utilities are extremely powerful when combined with the `.stack` component or `.flex` layouts to position overlays or badges.

### Examples

Centering content in a hero section

<div class="card h-40 align-cc">
  <div class="p-4 bg-accent/20 r-2 shadow">I am dead centered</div>
</div>


```html
<div class="h-40 align-cc">
  <div>I am dead centered</div>
</div>
```

Positioning top right


<div class="card h-40 align-top-right">
  <div class="p-4 bg-accent/20 r-2 shadow">Top  Right</div>
</div>


```html
<div class="h-40 align-top-right">
  <div>Top Right</div>
</div>
```

