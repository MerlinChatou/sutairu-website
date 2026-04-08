# Flex Utilities


The flex utilities provide low-level control over layout using the CSS Flexible Box Layout (Flexbox). They are designed to be composable: combine multiple utilities to build precise layouts without writing custom CSS.

## Display

Enable flex layout on an element.

`.d-flex` creates a flex container:

<div class="card p-3 w-fit ff-mono">
  <div class="d-flex bg-hatching fg-gray fg-opacity-20 b-gray b-opacity-20 gap-2 r-2">
    <div class="bg-accent text-white r-2 p-2 ar-1/1">01</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">02</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">03</div>
  </div>
</div>

```html
<div class="d-flex">...</div>
```



`.h-flex` is a shortcut for a horizontal flex container:

<div class="card p-3 w-fit ff-mono">
  <div class="h-flex bg-hatching fg-gray fg-opacity-20 b-gray b-opacity-20 gap-2 r-2">
    <div class="bg-accent text-white r-2 p-2 ar-1/1">01</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">02</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">03</div>
  </div>
</div>



```html
<div class="h-flex">...</div>
```


`.v-flex` is a shortcut for a vertical flex container:



<div class="card p-3 w-fit ff-mono">
  <div class="v-flex bg-hatching fg-gray fg-opacity-20 b-gray b-opacity-20 gap-2 r-2">
    <div class="bg-accent text-white r-2 p-2 ar-1/1">01</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">02</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">03</div>
  </div>
</div>



```html
<div class="v-flex">...</div>
```



## Flex direction

Flex direction (`fd-`) controls the main axis direction.

| Class        | CSS                              |
| ------------ | -------------------------------- |
| `fd-row`     | `flex-direction: row`            |
| `fd-row-rev` | `flex-direction: row-reverse`    |
| `fd-col`     | `flex-direction: column`         |
| `fd-col-rev` | `flex-direction: column-reverse` |

Example:

<div class="card p-3 ff-mono w-fit">
  <div class="d-flex fd-row-rev bg-hatching fg-gray fg-opacity-20 b-gray b-opacity-20 gap-2 r-2">
    <div class="bg-accent text-white r-2 p-2 ar-1/1">01</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">02</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">03</div>
  </div>
</div>


```html
<div class="d-flex fd-row-rev">
  ...
</div>
```



## Gap utilities

Gap utilities control spacing between child elements inside flex and grid containers. They provide consistent layout spacing without relying on margins.

### Global gap 

`gap-*` Sets spacing between rows and columns simultaneously.

| Class   | CSS                     |
| ------- | ----------------------- |
| `gap-0` | `gap: 0`                |
| `gap-1` | `gap: 0.25rem` |
| `gap-2` | `gap: 0.5rem` |
| `gap-3` | `gap: 1rem` |
| `gap-4` | `gap: 1.5rem` |
| `gap-5` | `gap: 3rem` |


#### Example


<div class="card p-3 w-fit ff-mono">
  <div class="h-flex bg-hatching fg-gray fg-opacity-20 b-gray b-opacity-20 gap-5 r-2">
    <div class="bg-accent text-white r-2 p-2 ar-1/1">01</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">02</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">03</div>
  </div>
</div>


```html
<div class="d-flex gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```


### Directional gaps

**Row gap (`gap-row-*`)** controls vertical spacing between rows inside flex or grid containers. Useful for wrapped layouts or multi-row grids where you only want vertical separation.

**Column gap (`gap-col-*`)** controls horizontal spacing between columns or items. Use when you want horizontal spacing without affecting vertical gaps.


### Responsive variants

Gap utilities support responsive prefixes:

* `md:` — applies at ≥ 768px
* `lg:` — applies at ≥ 1024px


## Flex wrap

Flex wrap (`fw-`) Controls whether items wrap onto multiple lines.

| Class         | CSS                       |
| ------------- | ------------------------- |
| `fw-wrap`     | `flex-wrap: wrap`         |
| `fw-nowrap`   | `flex-wrap: nowrap`       |
| `fw-wrap-rev` | `flex-wrap: wrap-reverse` |

Example:


<div class="card p-3 ff-mono w-fit">
  <div class="d-flex w-6 fw-wrap bg-hatching fg-gray fg-opacity-20 b-gray b-opacity-20 gap-2 r-2">
    <div class="bg-accent text-white r-2 p-2 ar-1/1">01</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">02</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">03</div>
  </div>
</div>

```html
<div class="d-flex fw-wrap">
  ...
</div>
```



## Alignment utilities

Alignment utilities control how flex (and grid) items are positioned along the main axis and cross axis. These utilities apply to flex containers, grid containers, or individual items depending on the property.

### Align items

Align items (`ai-*`) controls how items align along the **cross axis** inside a flex or grid container.

| Class         | CSS                     |
| ------------- | ----------------------- |
| `ai-start`    | `align-items: start`    |
| `ai-center`   | `align-items: center`   |
| `ai-end`      | `align-items: end`      |
| `ai-stretch`  | `align-items: stretch`  |
| `ai-baseline` | `align-items: baseline` |

#### Example


<div class="card p-3 ff-mono w-fit">
  <div class="d-flex ai-center h-6 bg-hatching fg-gray fg-opacity-20 b-gray b-opacity-20 gap-2 r-2">
    <div class="bg-accent text-white r-2 p-2 ar-1/1">01</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">02</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">03</div>
  </div>
</div>

```html
<div class="d-flex ai-center">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```



### Align content

Align content (`ac-*`) controls how multiple lines are distributed along the cross axis.

⚠️ Only applies when:

* items wrap (`fw-wrap`)
* there are multiple lines.

| Class        | CSS                            |
| ------------ | ------------------------------ |
| `ac-start`   | `align-content: start`         |
| `ac-center`  | `align-content: center`        |
| `ac-end`     | `align-content: end`           |
| `ac-between` | `align-content: space-between` |
| `ac-around`  | `align-content: space-around`  |
| `ac-stretch` | `align-content: stretch`       |

#### Example

<div class="card p-3 ff-mono w-fit">
  <div class="h-flex h-6 w-6 fw-wrap ac-between bg-hatching fg-gray fg-opacity-20 b-gray b-opacity-20 gap-2 r-2">
    <div class="bg-accent text-white r-2 p-2 ar-1/1">01</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">02</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">03</div>
  </div>
</div>

```html
<div class="h-flex fw-wrap ac-between">
  ...
</div>
```


### Justify content

Justify content (`jc-*`) controls alignment along the **main axis**.

| Class        | CSS                              |
| ------------ | -------------------------------- |
| `jc-start`   | `justify-content: start`         |
| `jc-center`  | `justify-content: center`        |
| `jc-end`     | `justify-content: end`           |
| `jc-between` | `justify-content: space-between` |
| `jc-around`  | `justify-content: space-around`  |
| `jc-evenly`  | `justify-content: space-evenly`  |

#### Example

<div class="card p-3 w-fit ff-mono">
  <div class="h-flex jc-evenly w-md bg-hatching fg-gray fg-opacity-20 b-gray b-opacity-20 gap-2 r-2">
    <div class="bg-accent text-white r-2 p-2 ar-1/1">01</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">02</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">03</div>
  </div>
</div>


```html
<div class="h-flex jc-evenly">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Align self

Align self (`as-*`) overrides the container’s `align-items` value for a single item.

| Class         | CSS                      |
| ------------- | ------------------------ |
| `as-auto`     | `align-self: auto`       |
| `as-start`    | `align-self: flex-start` |
| `as-center`   | `align-self: center`     |
| `as-end`      | `align-self: flex-end`   |
| `as-stretch`  | `align-self: stretch`    |
| `as-baseline` | `align-self: baseline`   |

#### Example

<div class="card p-3 w-fit ff-mono">
  <div class="h-flex h-5 ai-center w-md bg-hatching fg-gray fg-opacity-20 b-gray b-opacity-20 gap-2 r-2">
    <div class="bg-accent text-white r-2 p-2 ar-1/1">01</div>
    <div class="as-start bg-accent text-white r-2 p-2 ar-1/1">02</div>
    <div class="bg-accent text-white r-2 p-2 ar-1/1">03</div>
  </div>
</div>

```html
<div class="h-flex ai-center">
  <div>01</div>
  <div class="as-start">02</div>
  <div>03</div>
</div>
```


## Flex grow

Flex grow (`fg-`) controls how items grow to fill available space.

| Class  | CSS            |
| ------ | -------------- |
| `grow-0` | `flex-grow: 0` |
| `grow-1` | `flex-grow: 1` |

Example:

<div class="card p-3 ff-mono w-fit ta-center">
  <div class="d-flex w-md fw-wrap bg-hatching grow-gray fg-opacity-20 b-gray b-opacity-20 gap-2 r-2">
    <div class="bg-accent text-white r-2 p-2 ar-1/1">01</div>
    <div class="fg-1 bg-accent text-white r-2 p-2">02</div>
  </div>
</div>


```html
<div class="d-flex">
  <div>01</div>
  <div class="fg-1">02</div>
</div>
```



## Flex shrink

Flex shrink (`shrink-`) controls how items shrink when space is limited.

| Class   | CSS              |
| ------- | ---------------- |
| `shrink-0` | `flex-shrink: 0` |
| `shrink-1` | `flex-shrink: 1` |

Example:

<div class="card p-3 ff-mono w-fit ta-center">
  <div class="h-flex w-md fw-nowrap bg-hatching fg-gray fg-opacity-20 b-gray b-opacity-20 gap-2 r-2 ov-hidden">
    <div class="shrink-0 bg-accent text-white r-2 p-2" style="width:250px">01</div>
    <div class="shrink-1 bg-accent text-white r-2 p-2" style="width:250px">02</div>
    <div class="shrink-0 bg-accent text-white r-2 p-2" style="width:250px">03</div>
  </div>
</div>

```html
<div class="h-flex w-md">
  <div class="shrink-0">01</div>
  <div class="shrink-1">02</div>
  <div class="shrink-0">03</div>
</div>
```



## Flex shorthand

Predefined combinations of grow, shrink, and basis.

| Class       | CSS              |
| ----------- | ---------------- |
| `flex-auto` | `flex: 1 1 auto` |
| `flex-init` | `flex: 0 1 auto` |
| `flex-none` | `flex: none`     |

### Examples

```html
<div class="flex-auto">Flexible item</div>
<div class="flex-none">Fixed size</div>
```

