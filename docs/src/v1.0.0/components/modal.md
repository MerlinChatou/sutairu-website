# Modal Dialogs

An accessible, lightweight, and smooth-transitioning modal system. It handles focus trapping, scroll restoration, sequential modal toggling, backdrop clicks, and keyboard navigation out of the box.

## Getting Started

Import the module and initialize the global event listeners. This sets up delegation for clicks, keydowns, and scroll resets.

```javascript
import { Modal } from "@merlin-chatou/sutairu";

// Initialize the modal listeners
Modal.init();
```

> ⚠️ **Important:** You must ensure that the DOM is fully loaded before calling `Modal.init()`. You can achieve this by placing your script at the bottom of the HTML `<body>` or wrapping the initialization in a `DOMContentLoaded` event listener.



## HTML Layout

To ensure the Javascript and CSS rules target your elements correctly, use the following HTML modal structure:

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
- `.header`: contains the modal title and optional close button.
- `.body`: main content area of the modal.
- `.footer`: footer of the modal

### Accessibility

Add the following properties to the main `.modal` element:
- `aria-modal="true"` for screen readers.
- `tabindex="-1"` ensure modals receive focus when opened.
- `data-color-modal` allows closing the modal when user clicks on the backdrop.

### HTML Template Example

This layout is the standard modal layout with a scrollable interior body.

```html
<div class="modal" id="modal-id">
  <div class="modal-content">
    <div class="header">
      <h2>Modal Title</h2>
      <button type="button" class="btn-close" data-close-modal aria-label="Close"></button>
    </div>    
    <div class="body">
      <p>This is the modal content area.</p>
    </div>    
    <div class="footer">
      <button data-close-modal class="btn btn-neutral">Close</button>
    </div>
  </div>
</div>
```

## Opening Button

Use the `[data-open-modal]="modal-id"` attribute on a button to open a specific modal:

<button class="btn btn-primary" data-open-modal="modal-basic-example">Launch demo modal</button>

```html
<button class="btn btn-primary" data-open-modal="modal-id">Launch demo modal</button>
```

## Closing Button

Use the `[data-close-modal]` attribute on buttons to close the modal via
event delegation.

<button class="btn btn-neutral" data-close-modal>Close modal</button>

```html
<button class="btn btn-neutral" data-close-modal>Close modal</button>
```

Add a closing cross in the modal header with the following code:

```html
<div class="header">
  <h2>Modal Title</h2>
  <button type="button" class="btn-close" data-close-modal aria-label="Close"></button>
</div>
```




## Additional classes

Add the following classes to the main container (`.modal`) for custom styles:

- `.centered` — center the modal in the viewport
- `.no-animation` — disable animations
- `.no-blur` — remove backdrop blur
- `.w-*` — control modal width

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

## JavaScript API

If you need programmatic control over your modals, use the exported API methods:

### Open Modal

`Modal.open(modalId, triggerEvent)` opens the modal matching the provided ID. If another modal is currently open, it safely closes that modal first before opening the new one.

* `modalId` *(string)*: The DOM ID of the target modal.
* `triggerEvent` *(Event, optional)*: The event that initiated the open action (useful for tracking triggers).

```javascript
import Modal from "./Modal.js";

Modal.open("modal-id");
```

### Close Modal

`Modal.close(modalId, triggerEvent, next)` closes the specified modal.

* `modalId` *(string)*: The DOM ID of the modal to close.
* `triggerEvent` *(Event, optional)*: The event that initiated the close action.
* `next` *(string, optional)*: ID of another modal to open immediately after this one finishes its transition.

```javascript
// Closes 'modal-id' and sequentially opens 'success-modal'
Modal.close("modal-id", null, "success-modal");
```

### Destroy

`Modal.destroy()` cleans up and removes all global event listeners registered by the modal module to prevent memory leaks.

```javascript
Modal.destroy();
```

## Custom Events

Modals dispatch lifecycle events that you can listen to on the individual `<modal>` elements:

| Event Name | Description |
| --- | --- |
| `onModalOpen` | Fires immediately when the modal begins its opening transition. |
| `onModalOpened` | Fires after the opening animation completes and the modal is fully visible. |
| `onModalClose` | Fires immediately when the modal begins its closing transition. |
| `onModalClosed` | Fires after the closing animation completes and the modal is fully hidden. |

### Event Example

```javascript
const myModal = document.getElementById("modal-id");

myModal.addEventListener("onModalOpened", (event) => {
  console.log("Modal is open and ready for user interaction!", event.triggerEvent);
});
```

## Focus & Accessibility (A11y)

The modal is built with solid accessibility defaults:

* **Focus Trap:** When a modal is active, focus is strictly trapped inside it. Users cannot tab out of the modal into the background page.
* **Auto-Focus:** Opening a modal automatically focuses the first focusable element inside it. If no focusable element is found, the modal container itself receives focus.
* **Focus Restoration:** Once closed, focus is automatically returned to the element that triggered the modal in the first place.
* **Escape Key:** Pressing the `Escape` key automatically closes the currently active modal.

