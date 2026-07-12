# Input Group

Utilities for seamlessly stacking buttons, text add-ons, and form controls together into unified horizontal fields.


## Core Utilities

These components establish a Flexbox context and manage structural styling rules for child nodes, normalizing text indicators and layout wrappers.

| Utility Class | Target | Description |
| --- | --- | --- |
| `input-group` | Wrapper Box | Establishes a seamless, full-width structural layout container with standard theme outlines. |

<div class="card p-4 flex-y gap-4 max-w-sm">
  <div class="input-group">
    <span class="bg-subtle">$</span>
    <input type="text" class="input" placeholder="Amount" />
    <button class="btn btn-primary">Donate</button>
  </div>

  <div class="input-group">
    <span class="bg-container"><i class="fa-solid fa-user"></i></span>
    <input type="text" class="input" placeholder="Username" />
    <span class="bg-container"><i class="fa-solid fa-lock"></i></span>
    <input type="password" class="input" placeholder="••••••••" />
  </div>
</div>

```html
<div class="input-group">
  <span class="bg-subtle">$</span>
  <input type="text" class="input" placeholder="Amount" />
  <button class="btn btn-primary">Donate</button>
</div>

<div class="input-group">
  <span class="bg-container"><i class="fa-solid fa-user"></i></span>
  <input type="text" class="input" placeholder="Username" />
  <span class="bg-container"><i class="fa-solid fa-lock"></i></span>
  <input type="password" class="input" placeholder="••••••••" />
</div>
```





## Validation Status Blocks

Provide immediate structural theme indications across the collective outline boundary box using active status modifier flags.

| Sub-state Modifier Selector | Context Objective |
| --- | --- |
| `input-group.valid`  | Signals successful collection fields. |
| `input-group.invalid` | Signals block errors or incomplete inputs. |



<div class="card p-4 flex-y gap-4 max-w-sm">
  <div class="input-group max-w-md valid">
    <span class="bg-green-50 dark:bg-green-820"><i class="fa-solid fa-check text-green"></i></span>
    <input type="text" class="input" placeholder="Valid group" />
  </div>

  <div class="input-group max-w-md invalid">
    <span class="bg-red-50 dark:bg-red-820"><i class="fa-solid fa-xmark text-red"></i></span>
    <input type="text" class="input" placeholder="Invalid group" />
  </div>
</div>


```html
<div class="input-group max-w-md valid">
  <span class="bg-green-50 dark:bg-green-820"><i class="fa-solid fa-check text-green"></i></span>
  <input type="text" class="input" placeholder="Valid group" />
</div>

<div class="input-group max-w-md invalid">
  <span class="bg-red-50 dark:bg-red-820"><i class="fa-solid fa-xmark text-red"></i></span>
  <input type="text" class="input" placeholder="Invalid group" />
</div>
```