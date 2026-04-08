# Modal Dialogs

The `modal` component is a dialog box that can be shown or hidden dynamically.

## Installation

```sh
npm install @merlin-chatou/sutairu-extras
```

Import the stylesheet in your CSS:

```css
@import "@merlin-chatou/sutairu-extras/modal/style";
```

Import the JavaScript module (ESM):

```js
import Modal from "@merlin-chatou/sutairu-extras/modal";
```
After importing, initialize the modal system once by calling `Modal.init()`. It sets up all necessary event handlers for modal interactions:

```js
Modal.init();
```

## HTML Structure

Here is the HTML modal structure:

```html
<div id="modal-id" tabindex="-1" class="modal" data-close-modal>
  <div class="modal-content">
    <div class="header"></div>
    <div class="body"></div>
    <div class="footer"></div>
  </div>
</div>
```

The modal content is structured into the following elements:

- `.modal`: the backdrop container
- `.modal-content`: is the modal container
- `.header`: contains the modal title and close button.
- `.body`: main content area of the modal.
- `.footer`: footer of the modal

### Accessibility

- Add `aria-modal="true"` for screen readers.
- `tabindex="-1"` ensure modals receive focus when opened.
- `data-color-modal` allows closing the modal when user clicks on the backdrop.

## Opening Button

Use the `[data-open-modal]="modal-id"` attribute on a button to open a specific modal:

<button class="btn btn-accent" data-open-modal="modal-basic-example">Launch demo modal</button>

```html
<button class="btn btn-accent" data-open-modal="modal-id">Launch demo modal</button>
```

## Closing Button

Use the `[data-close-modal]` attribute on buttons to close the modal via
event delegation.

<button class="btn btn-accent" data-close-modal>Close modal</button>

```html
<button class="btn btn-accent" data-close-modal>Close modal</button>
```

Add a closing cross in the header with the following code after importing the UI animations styles:

```css
@import "@merlin-chatou/sutairu-extras/ui-anim/style";
```

Add a closing cross

```html
<div class="header">
  <h4 class="mt-0">Modal Title</h4>
  <button type="button" class="btn-close" data-close-modal aria-label="Close"></button>
</div>
```

## Additional classes

Add the following classes to the main container (`.modal`) for custom styles:

- `.centered` — center the modal in the viewport
- `.no-animation` — disable animations
- `.no-blur` — remove backdrop blur
- `w-*` — control modal width


## Long content

Natively, the scroll bar appears in the body. You can get a page scroll instead by adding a div with `.modal-scroll`:

```html
<div id="modal-id" tabindex="-1" aria-modal="true" class="modal" data-close-modal>
  <div class="modal-scroll">
    <div class="modal-content">
      <div class="header"></div>
      <div class="body"></div>
      <div class="footer"></div>
    </div>
  </div>
</div>
```

## JavaScript Usage

### Methods

The package exposes the following methods:

* `Modal.init()` initialize the modal class (set up listeners)
* `Modal.open(modalId)` opens the modal with a given ID
* `Modal.close(modalId)` closes the modal with a given ID
* `Modal.destroy()` removes all event listeners registered by the modal module


### Events

Each modal triggers the following events:

```js 
// On modal opening (before modal is visible)
modal.addEventListener("onModalOpen", (e) => { 
  console.log (e.triggerEvent);
});
```


```js 
// On modal opened (once modal is visible)
modal.addEventListener("onModalOpened", (e) => { 
  console.log (e.triggerEvent);
});
```


```js 
// On modal closing (before modal is hidden)
modal.addEventListener("onModalClose", (e) => { 
  console.log (e.triggerEvent);
});
```


```js 
// On modal closed (once modal is hidden)
modal.addEventListener("onModalClosed", (e) => { 
  console.log (e.triggerEvent);
});
```

