# Loaders

Loaders use a **utility-driven architecture**. Base classes handle shape and animation, while atomic utilities (`text-*`, `bg-*`, `b-*`, etc.) handle color, size, and timing dynamically.


## Overview

| Class | Description | Color / Styling Source |
| --- | --- | --- |
| `loader` | Classic rotating border ring | Inherits `currentColor` (`text-*`) |
| `loader-clip` | Dual-tone clipped spinner | Text & border utilities |
| `loader-grow` | Pulsing fill loader | Background (`bg-*`) / text utilities |
| `loader-dots-fade` | Staggered fading dots | Text color |
| `loader-dots-spin` | Orbiting spinning dots | Text color |
| `loader-comet` | Trailing comet animation | Text color |
| `loader-skeleton` | Content placeholder pulse | Background (`bg-*`) tokens |

Loaders scale automatically with font size (`em`), letting you adjust dimensions effortlessly using typography utilities like `fs-*`. Animation speeds can also be customized instantly with atomic duration classes like `anim-dur-*`.

## Classic Spinner

Standard rotating border loader (`.loader`). Inherits its stroke color from `text-*` and can be customized with custom borders and animation speeds.

<div class="card w-fit text-center d-grid grid-cols-4 gap-4 p-4 pi-center">
  <span class="loader text-accent"></span>
  <span class="loader b-7 text-accent b-subtle/60 fs-2xl"></span>
  <span class="loader text-transparent b-purple fs-2xl"></span>
  <span class="loader text-green fs-4xl anim-dur-2s"></span>
</div>


```html
<span class="loader text-accent"></span>
<span class="loader b-7 text-accent b-subtle/60 fs-2xl"></span>
<span class="loader text-transparent b-purple fs-2xl"></span>
<span class="loader text-green fs-4xl anim-dur-2s"></span>
```

## Clipped Spinner

A modern clipped-ring spinner design (`loader-clip`) that supports pseudo-element duration control (`before:anim-dur-*`). Inherits its primary stroke color from `text-*` and can be paired with custom border utilities (`b-*`) for multi-tone styling.


<div class="card w-fit text-center d-grid grid-cols-4 gap-4 p-4 pi-center">
  <span class="loader-clip text-red"></span>
  <span class="loader-clip text-accent fs-2xl"></span>
  <span class="loader-clip text-purple b-subtle/60 fs-2xl"></span>
  <span class="loader-clip text-green b-7 fs-4xl anim-dur-3s before:anim-dur-4s"></span>
</div>


```html
<span class="loader-clip text-red"></span>
<span class="loader-clip text-accent fs-2xl"></span>
<span class="loader-clip text-purple b-subtle/60 fs-2xl"></span>
<span class="loader-clip text-green b-7 fs-4xl anim-dur-3s before:anim-dur-4s"></span>
```
## Growing Loader

A pulsing scale loader (`loader-grow`) that utilizes background fills (`bg-*`) and centering utilities. It relies on background and text utilities for dynamic color and appearance customization.

<div class="card w-fit text-center d-grid grid-cols-4 gap-4 p-4 pi-center">
  <span class="loader-grow bg-red"></span>
  <span class="loader-grow text-accent fs-2xl"></span>
  <span class="loader-grow bg-purple fs-2xl"></span>
  <span class="loader-grow bg-green fs-4xl anim-dur-4s"></span>
</div>


```html
<span class="loader-grow bg-red"></span>
<span class="loader-grow text-accent fs-2xl"></span>
<span class="loader-grow bg-purple fs-2xl"></span>
<span class="loader-grow bg-green fs-4xl anim-dur-4s"></span>
```

## Dot Loaders

Multi-dot animation loaders (`loader-dots-fade`, `loader-dots-spin`) for subtle status indicators. They inherit their dot colors dynamically from text utilities (`text-*`).

<div class="card w-fit text-center d-grid grid-cols-4 gap-4 p-4 pi-center">
  <span class="loader-dots-fade text-red w-48px"></span>
  <span class="loader-dots-fade text-blue fs-2xl"></span>
  <span class="loader-dots-fade text-purple fs-2xl"></span>
  <span class="loader-dots-fade text-green anim-dur-3s fs-4xl"></span>
</div>

```html
<span class="loader-dots-fade text-red"></span>
<span class="loader-dots-fade text-blue fs-2xl"></span>
<span class="loader-dots-fade text-purple fs-2xl"></span>
<span class="loader-dots-fade text-green anim-dur-3s fs-4xl"></span>
```

<div class="card w-fit text-center d-grid grid-cols-4 gap-4 p-4 pi-center">
  <span class="loader-dots-spin text-red"></span>
  <span class="loader-dots-spin text-blue fs-2xl"></span>
  <span class="loader-dots-spin text-purple fs-2xl"></span>
  <span class="loader-dots-spin text-green anim-dur-3s fs-4xl"></span>
</div>


``` html
<span class="loader-dots-spin text-red"></span>
<span class="loader-dots-spin text-blue fs-2xl"></span>
<span class="loader-dots-spin text-purple fs-2xl"></span>
<span class="loader-dots-spin text-green anim-dur-3s fs-4xl"></span>
```

## Comet Loader

A smooth trailing comet animation loader (`loader-comet`) for dynamic progress indicators. It inherits its colors dynamically from text utilities (`text-*`).

<div class="card w-fit text-center d-grid grid-cols-4 gap-4 p-4 pi-center">
  <span class="loader-comet text-red"></span>
  <span class="loader-comet text-blue fs-2xl"></span>
  <span class="loader-comet text-purple fs-2xl"></span>
  <span class="loader-comet text-green anim-dur-3s fs-4xl"></span>
</div>

```html
<span class="loader-comet text-red"></span>
<span class="loader-comet text-blue fs-2xl"></span>
<span class="loader-comet text-purple fs-2xl"></span>
<span class="loader-comet text-green anim-dur-3s fs-4xl"></span>
```

## Skeleton Loader

A content placeholder skeleton loader (`loader-skeleton`) for loading states. It uses background (`bg-*`) and text utilities for colors (`text-*`), and its pattern angle can be customized using `pa-*` or `pattern-angle-*` utilities.

<div class="card w-fit text-center flex-y gap-4 p-4 pi-center">
  <div class="loader-skeleton r-3 w-md h-32px bg-gray text-gray-350"></div>
  <div class="loader-skeleton r-3 w-md h-64px bg-blue text-orange-200 pa--45deg anim-dur-3s"></div>
</div>

```html
<div class="loader-skeleton r-3 w-md h-32px bg-gray text-gray-350"></div>
<div class="loader-skeleton r-3 w-md h-64px bg-blue text-orange-200 pa--45deg anim-dur-3s"></div>
```