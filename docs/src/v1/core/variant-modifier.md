# Variant Modifiers (Prefixes)

Sutairu relies on a robust engine of **prefix modifiers** to handle state changes, responsive layout breakpoints, device orientations, and DOM structure styling. By prepending a variant prefix followed by a colon (`:`) to any utility class, you can control exactly when and where that style applies.

```html
<div class="bg-gray-100 hover:bg-gray-200 lg:w-200px">...</div>
```


## Responsive Breakpoints

These prefixes implement a **mobile-first** responsive design strategy. Base classes apply to the smallest viewports, while breakpoint modifiers override styles at specific minimum screen widths (`min-width`).

| Prefix | CSS Breakpoint Equivalent | Typical Target Device |
| --- | --- | --- |
| `sm:` | `@media (min-width: 40rem)` | Large Smartphones / Foldables |
| `md:` | `@media (min-width: 48rem)` | Tablets |
| `lg:` | `@media (min-width: 64rem)` | Laptops / Smaller Desktops |
| `xl:` | `@media (min-width: 80rem)` | Large Desktops |
| `xxl:` | `@media (min-width: 96rem)` | Ultra-Wide Displays |

### Example

In this layout, the component spans the full viewport width by default on mobile screens, scales down to occupy half the width on tablets (`md:`), and settles into a tight one-third width configuration once it reaches laptop-sized viewports (`lg:`).

```html
<div class="w-full md:w-1/2 lg:w-1/3">
  Content Container
</div>
```


## Interactive & Element States

These modifiers tap directly into native CSS pseudo-classes to style dynamic interactions, form focus management, and accessibility rings.

| Prefix | CSS Pseudo-class | Trigger Condition |
| --- | --- | --- |
| `hover:` | `:hover` | User positions a pointer over an element. |
| `active:` | `:active` | Element is actively being pressed/clicked by the user. |
| `focus:` | `:focus` | Element gains focus via pointer click or keyboard navigation. |
| `focus-visible:` | `:focus-visible` | Element gains focus **only** via keyboard navigation (highly recommended for accessibility rings). |
| `disabled:` | `:disabled` | Applied when a form control or button has its `disabled` attribute set. |
| `selected:` | `.selected` | Custom state modifier indicating a persistent choice (e.g., active tabs/toggles). |
| `placeholder:` | `::placeholder` | Targets the temporary hint text inside `<input>` or `<textarea>` tags. |


### Example

In this interface segment, the button transitions its background smoothly when a pointer enters its bounds (`hover:`), while the adjacent input fields apply distinct contextual color styling exclusively to their placeholder text targets (`placeholder:`).

<div class="card w-fit d-flex fd-col p-3 gap-2">
<button class="btn bg-blue text-white hover:bg-red-600">Hover me</button>
<input class="b-1 b-gray r-1 placeholder:text-red-300" placeholder="Your email..." />
</div>


```html
<button class="btn bg-blue hover:bg-red-600">Hover me</button>
<input class="placeholder:text-red-300" placeholder="Your email..." />
```


## Behavioral Layout Groups

Sutairu allows you to style an element based on the interaction state of its **parent container**. To achieve this, mark the parent container with the `.group` utility class, then apply these modifiers to the inner child nodes.

| Prefix | Trigger Condition |
| --- | --- |
| `group-hover:` | Styles the child element when *any* part of the parent `.group` is hovered. |
| `group-selected:` | Styles the child element when the parent container has the `.selected` class active. |


### Example

In this card component, applying the `group` utility to the wrapper allows the `group-hover:text-accent` class on the heading to trigger seamlessly as soon as a user hovers anywhere within the parent boundary.

<div class="card max-w-xs group w-fit">
  <h3 class="header group-hover:text-accent">Card Heading</h3>
  <div class="body text-gray-400">Hovering anywhere over the card wrapper flips the header color.</div>
</div>


```html
<div class="card group">
  <h3 class="header group-hover:text-accent">Card Heading</h3>
  <div class="body text-gray-400">Hovering anywhere over the card wrapper flips the header color.</div>
</div>
```



## Media & Hardware Orientation

These modifiers let you alter your interface presentation to best match user hardware positioning guidelines.

| Prefix | CSS Media Query | Context |
| --- | --- | --- |
| `portrait:` | `@media (orientation: portrait)` | Viewport width is less than or equal to its height (e.g., vertical phones). |
| `landscape:` | `@media (orientation: landscape)` | Viewport width is greater than its height (e.g., desktop view, turned tablets). |

### Example

In this layout, content stacks vertically in a column by default on narrow screens (`portrait`), but automatically shifts to a horizontal, side-by-side row configuration when the viewport width exceeds its height (`landscape`).


```html
<div class="d-flex fd-col landscape:fd-row">
  <aside>Sidebar / Top bar</aside>
  <main>Main Context</main>
</div>
```





## Structural DOM Pseudo-classes

Sutairu offers two ways to handle list loops, tables, and repeating UI nodes without polluting your database loop with conditional logic. You can use **Self-Targeting Modifiers** directly on child nodes, or **Parent-Driven Modifiers** on the wrapper element.

### Self-Targeting Modifiers

Apply these prefixes directly to individual items inside a loop. They target the element based on its own position relative to its siblings.

| Prefix | CSS Combined Target | Description |
| --- | --- | --- |
| `is-first:` | `:first-child` | Targets the element only if it is the absolute first sibling. |
| `is-last:` | `:last-child` | Targets the element only if it is the absolute last sibling. |
| `is-odd:` | `:nth-child(odd)` | Targets the element if its index is odd (1, 3, 5, etc.). |
| `is-even:` | `:nth-child(even)` | Targets the element if its index is even (2, 4, 6, etc.). |

#### Example

By applying these self-targeting modifiers directly to the repeating child nodes, each element independently evaluates its structural index to resolve its background treatment relative to its structural siblings.


<div class="card p-2 flex-x gap-1 w-fit">
  <div class="p-2 r-2 is-odd:bg-red is-even:bg-green is-first:!bg-yellow is-last:!bg-blue">Item 1</div>
  <div class="p-2 r-2 is-odd:bg-red is-even:bg-green is-first:!bg-yellow is-last:!bg-blue">Item 2</div>
  <div class="p-2 r-2 is-odd:bg-red is-even:bg-green is-first:!bg-yellow is-last:!bg-blue">Item 3</div>
  <div class="p-2 r-2 is-odd:bg-red is-even:bg-green is-first:!bg-yellow is-last:!bg-blue">Item 4</div>
  <div class="p-2 r-2 is-odd:bg-red is-even:bg-green is-first:!bg-yellow is-last:!bg-blue">Item 5</div>
  <div class="p-2 r-2 is-odd:bg-red is-even:bg-green is-first:!bg-yellow is-last:!bg-blue">Item 6</div>
  <div class="p-2 r-2 is-odd:bg-red is-even:bg-green is-first:!bg-yellow is-last:!bg-blue">Item 7</div>
</div>

```html

<div class="flex-x">
  <div class="is-odd:bg-red is-even:bg-green is-first:!bg-yellow is-last:!bg-blue">Item 1</div>
  <div class="is-odd:bg-red is-even:bg-green is-first:!bg-yellow is-last:!bg-blue">Item 2</div>
  <div class="is-odd:bg-red is-even:bg-green is-first:!bg-yellow is-last:!bg-blue">Item 3</div>
  ...
</div>
```



### Parent-Driven Modifiers

Apply these prefixes to a **parent container**. They automatically trickle down to target immediate child elements layout-wide. This is the cleanest approach when you don't want to repeat utility strings on every loop iteration.


Apply these prefixes directly to individual items inside a loop. They target the element based on its own position relative to its siblings.

| Prefix | CSS Pseudo-class | Description |
| --- | --- | --- |
| `first:` | `> :first-child` | Automatically styles the absolute first child inside this container.  |
| `last:` | `> :last-child` | Automatically styles the absolute last child inside this container. |
| `odd:` | `> :nth-child(odd)` | Automatically styles all odd-indexed children (1, 3, 5...). |
| `even:` | `> :nth-child(even)` | Automatically styles all even-indexed children (2, 4, 6...). |

#### Example

By declaring the child-targeting variants on the container element, the layout instantly coordinates alternating background patterns alongside specific treatments for the boundary items without requiring a single class on the inner children.


<div class="card p-2 flex-x gap-1 w-fit odd:bg-red even:bg-green first:!bg-yellow last:!bg-blue">
  <div class="p-2 r-2">Item 1</div>
  <div class="p-2 r-2">Item 2</div>
  <div class="p-2 r-2">Item 3</div>
  <div class="p-2 r-2">Item 4</div>
  <div class="p-2 r-2">Item 5</div>
  <div class="p-2 r-2">Item 6</div>
  <div class="p-2 r-2">Item 7</div>
</div>

```html
<div class="flex-x odd:bg-red even:bg-green first:!bg-yellow last:!bg-blue">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  ...
</div>
```






## Theme Settings

Handle accessibility considerations or user configuration choices cleanly via global theme flags.

Sutairu uses a **light-first** approach. Base utilities target light mode by default, while variants override styles for dark mode when active.

| Prefix | Target Condition |
| --- | --- |
| `dark:` | Triggers alternative style arrays when the system or application context has enabled its global dark mode profile. |


### Example

In this component, the base `bg-white` and `text-black` classes apply by default, while the `dark:bg-black` and `dark:text-white` modifiers seamlessly invert the color palette when a dark theme context is active.
<div class="card flex-x gap-2 w-fit p-2">
  <div class="b-1 b-gray p-2 r-2 w-fit bg-white text-black">
    Light mode
  </div>
  <div class="b-1 b-gray p-2 r-2 w-fit bg-black text-white">
    Dark mode
  </div>
</div>

```html
<div class="bg-white text-black dark:bg-black dark:text-white">
  Adaptive Sheet Content
</div>
```