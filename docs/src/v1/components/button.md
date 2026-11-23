# Buttons

The `.btn` utility provides a base structure for buttons, which can then be themed using semantic color modifiers. These are designed to be consistent, accessible, and highly customizable through the inclusion of other utility classes.



## Semantic Variants

To apply color to a button, combine the base `.btn` class with a `.btn-{color}` modifier. These colors are tied to your **Theme configuration**, ensuring they update automatically when switching between themes.

<div class="card d-flex gap-2 p-2 fw-wrap">
<button class="btn btn-primary">btn-primary</button>
<button class="btn btn-secondary">btn-secondary</button>
<button class="btn btn-success">btn-success</button>
<button class="btn btn-danger">btn-danger</button>
<button class="btn btn-warning">btn-warning</button>
<button class="btn btn-info">btn-info</button>
<button class="btn btn-neutral">btn-neutral</button>
<button class="btn btn-dark">btn-dark</button>
</div>


```html
<button class="btn btn-primary">btn-primary</button>
<button class="btn btn-secondary">btn-secondary</button>
<button class="btn btn-success">btn-success</button>
<button class="btn btn-danger">btn-danger</button>
<button class="btn btn-warning">btn-warning</button>
<button class="btn btn-info">btn-info</button>
<button class="btn btn-neutral">btn-neutral</button>
<button class="btn btn-dark">btn-dark</button>
```

## Link Buttons

The `.btn-link` variant removes the background and border, making the button look like a standard hyperlink while maintaining the padding and hit-area of a button.

<div class="card d-flex gap-2 p-2 fw-wrap">
<button class="btn btn-link">btn-link</button>
<button class="btn btn-link td-u">btn-link</button>
<button class="btn btn-link" disabled>btn-link</button>
</div>


```html
<!-- Basic Link -->
<button class="btn btn-link">btn-link</button>

<!-- Underlined Link -->
<button class="btn btn-link td-u">btn-link</button>

<!-- Disabled Link -->
<button class="btn btn-link" disabled>btn-link</button>
```





