# Input Elements

Utilities for styling semantic form components, including text inputs, dropdown select selectors, file upload elements, and explicit validation feedback hooks.

## Core Utilities

These classes provide base resets and design-token variables mapped to components to ensure design consistency.

| Utility Class |  Description |
| --- |  --- |
| `input-label` |  Sets labels to `inline-block` with structured top spacing parameters. |
| `input` | Standardizes full-width block sizing, typography metrics, and border token styles. |


<div class="card flex-y gap-2 p-2 w-fit">
  <div>
    <label for="exampleInputText" class="input-label">Text input</label>
    <input type="text" class="input" id="exampleInputText" placeholder="Default Input" />
  </div>
  <div>
    <label for="exampleInputPassword" class="input-label">Password</label>
    <input type="password" class="input" id="exampleInputPassword" placeholder="••••••••" autocomplete="off" />
  </div>
  <div>
    <label for="exampleInputTextarea" class="input-label">Textarea</label>
    <textarea class="input" id="exampleInputTextarea" rows="5" placeholder="Comments"></textarea>
  </div>
</div>

```html
<div>
  <label for="exampleInputText" class="input-label">Text input</label>
  <input type="text" class="input" id="exampleInputText" placeholder="Default Input" />
</div>

<div>
  <label for="exampleInputPassword" class="input-label">Password</label>
  <input type="password" class="input" id="exampleInputPassword" placeholder="••••••••" autocomplete="off" />
</div>

<div>
  <label for="exampleInputTextarea" class="input-label">Textarea</label>
  <textarea class="input" id="exampleInputTextarea" rows="5" placeholder="Comments"></textarea>
</div>
```



## Form Selectors

Adding the standard native `<select>` element alongside the utility applies an automated custom background mask layout:

* Hides default native platform arrows via `appearance: none`.
* Injects a clean arrow shape resource (`--su-input-select-image`) aligned safely inside the right edge.
* Activates an implicit cursor hover modifier tracking (`cursor: pointer`).

<div class="card flex-y gap-2 p-2 w-fit">
  <div>
    <label for="exampleInputSelect" class="input-label">Drop-down list</label>
    <select class="input" aria-label="Default select example" id="exampleInputSelect">
      <option selected>Select</option>
      <option value="1">First choice</option>
      <option value="2">Second choice</option>
      <option value="3">Third choice</option>
    </select>
  </div>
</div>

```html
<div>
  <label for="exampleInputSelect" class="input-label">Select</label>
  <select class="input" aria-label="Default select example" id="exampleInputSelect">
    <option selected>Select</option>
    <option value="1">First choice</option>
    <option value="2">Second choice</option>
    <option value="3">Third choice</option>
  </select>
</div>
```


## File Pickers

Isolates systemic styles down to native sub-elements using `::file-selector-button`:

* Normalizes uniform inner button padding parameters while zeroing margins cleanly.
* Handles operational transitions on user pointer action surfaces.


<div class="card flex-y gap-2 p-2 w-fit">
  <div>
    <label for="exampleInputFormFile" class="input-label">File input</label>
    <input class="input" type="file" id="exampleInputFormFile" />
  </div>
</div>

```html
<div>
  <label for="exampleInputFormFile" class="input-label">File input</label>
  <input class="input" type="file" id="exampleInputFormFile" />
</div>
```

## Component Disabled Modifiers

Applies a clean structural fallback state instantly across elements when explicitly marking components with `:disabled` or semantic `aria-disabled="true"` validation attributes:

* Forces a contextual fallback cursor reset (`cursor: not-allowed`).
* Diminishes inner text, button components, and active custom placeholder values.

<div class="card flex-y gap-2 p-2 w-fit">
  <div>
    <label for="exampleInputDisabled" class="input-label">Disabled input</label>
    <input type="text" class="input" id="exampleInputDisabled" placeholder="Disabled Input" disabled />
  </div>
</div>

```html
<div>
  <label for="exampleInputDisabled" class="input-label">Disabled input</label>
  <input type="text" class="input" id="exampleInputDisabled" placeholder="Disabled Input" disabled />
</div>
```
## Validation Indicators

Provide fast structural indicator hooks using state modifiers attached directly to the primary selector node.

| Sub-state Modifier Selector | Intent Context Mapping |
| --- | --- | 
| `input.valid`  | Clear confirmation check validations. |
| `input.invalid` | Alerts missing data or parsing format failures. |

<div class="card flex-y gap-2 p-2 w-fit">
  <div>
    <label for="exampleInputValid" class="input-label">Valid input</label>
    <input type="text" class="input valid" id="exampleInputValid" placeholder="Valid Input" />
  </div>

  <div>
    <label for="exampleInputInvalid" class="input-label">Invalid input</label>
    <input type="text" class="input invalid" id="exampleInputInvalid" placeholder="Invalid Input" />
  </div>
</div>

```html
<div>
  <label for="exampleInputValid" class="input-label">Valid input</label>
  <input type="text" class="input valid" id="exampleInputValid" placeholder="Valid Input" />
</div>

<div>
  <label for="exampleInputInvalid" class="input-label">Invalid input</label>
  <input type="text" class="input invalid" id="exampleInputInvalid" placeholder="Invalid Input" />
</div>
```

