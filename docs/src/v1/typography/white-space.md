# White-Space Utilities

White-space utilities control how inline content handles spaces, tabs, and line breaks.

They map directly to the CSS `white-space` property.

## Class Reference

| Class         | CSS                          | Description                                                                       |
| ------------- | ---------------------------- | --------------------------------------------------------------------------------- |
| `ws-normal`   | `white-space: normal;`       | Default behavior. Collapses whitespace and wraps text when needed.                |
| `ws-nowrap`   | `white-space: nowrap;`       | Collapses whitespace but prevents line wrapping.                                  |
| `ws-pre`      | `white-space: pre;`          | Preserves whitespace and line breaks. No automatic wrapping.                      |
| `ws-pre-wrap` | `white-space: pre-wrap;`     | Preserves whitespace and line breaks while allowing wrapping.                     |
| `ws-pre-line` | `white-space: pre-line;`     | Collapses whitespace but preserves line breaks.                                   |
| `ws-break`    | `white-space: break-spaces;` | Preserves whitespace and allows breaking at any point, including trailing spaces. |


## Behavior Overview

### Normal

* Sequences of spaces are collapsed.
* Text wraps automatically.
* Line breaks in source are ignored.

<div class="card p-3">
<span class="ws-normal">
  This    text     will wrap normally.
</span>
</div>

```html
<p class="ws-normal">
  This    text     will wrap normally.
</p>
```



### Nowrap

* Spaces collapse.
* Text never wraps.
* Useful for buttons, badges, short inline labels.

<div class="card p-3">
<span class="ws-nowrap">
  Single 
    line 
  only
</span>
</div>

```html
<span class="ws-nowrap">
  Single 
    line 
  only
</span>
```

---

### Pre

* Preserves all spaces and line breaks.
* No automatic wrapping.
* Behaves like a `<pre>` element.


<div class="card p-3">
<div class="ws-pre">
Line 1
    Indented line
Line 3
</div>
</div>

```html
<div class="ws-pre">
Line 1
    Indented line
Line 3
</div>
```

---

### Pre-wrap

* Preserves whitespace.
* Allows wrapping when needed.
* Ideal for formatted text blocks that must remain responsive.

<div class="card p-3">
<div class="ws-pre-wrap">
Line 1
    Indented but responsive
Line 3
</div>
</div>


```html
<div class="ws-pre-wrap">
Line 1
    Indented but responsive
Line 3
</div>
```

---

### Pre-line

* Collapses consecutive spaces.
* Preserves line breaks.
* Good for user-generated content with intentional line breaks.


<div class="card p-3">
<div class="ws-pre-line">
Line 1

Line 3
</div>
</div>

```html
<div class="ws-pre-line">
Line 1

Line 3
</div>
```

---

### Break

* Preserves whitespace including trailing spaces.
* Allows wrapping at preserved spaces.
* Useful for code-like formatting with controlled wrapping.




<div class="card p-3">
<div class="ws-break">
Text     with     preserved     spacing
</div>
</div>


```html
<div class="ws-break">
Text     with     preserved     spacing
</div>
```
