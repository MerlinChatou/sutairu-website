# Card Component

A structured, flexible container component with automatic internal layout adjustments, conditional borders, and smart border-radius management.


## Structure & Classes

The card component relies on a parent wrapper and designated direct children to build unified UI segments.

* **`card`**: The main container wrapper. Manages the outer border, shadows, base background, and automatically strips internal padding if structural child components are present.
* **`header`**: The top section. Can contain typography or a banner image. Automatically adds a bottom border unless it's an image or the final element.
* **`body`**: The main content area. Handles standard content padding and conditional borders.
* **`footer`**: The bottom action or information bar.


## Basic Usage

Mix and match the internal structural classes to assemble standard, partial, or asset-led card variations.

### Standard Complex Card

Includes a header, content body, and an action footer.


<div class="card max-w-xs">
  <div class="header">
    <h4 class="my-0">Card Title</h4>
  </div>
  <div class="body">
    <p>This is the primary content area of the card component.</p>
  </div>
  <div class="footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>


```html
<div class="card">
  <div class="header">
    <h3>Card Title</h3>
  </div>
  <div class="body">
    <p>This is the primary content area of the card component.</p>
  </div>
  <div class="footer">
    <button>Action</button>
  </div>
</div>
```

### Clean Body Card

A simplified variation using only the `body` element for text-heavy widgets.



<div class="card max-w-xs">
  <div class="body">
    <p>A simple card variant containing only core text contents.</p>
  </div>
</div>


```html
<div class="card">
  <div class="body">
    <p>A simple card variant containing only core text contents.</p>
  </div>
</div>
```

### Media Card

Use an `img` tag with the `header` class to seamlessly snap images to the outer top boundaries without manual cropping.


<div class="card max-w-xs">
  <img class="header bg-accent" src="/images/card-header.png" alt="Merlin Chatou" />
  <div class="body">
    <p>Media contents integrate perfectly with the smart border clipping.</p>
  </div>
</div>

```html
<div class="card">
  <img class="header" src="image.png" />
  <div class="body">
    <p>Media contents integrate perfectly with the smart border clipping.</p>
  </div>
</div>
```
