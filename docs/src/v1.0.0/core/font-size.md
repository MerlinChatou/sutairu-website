# Font Size Utilities

Utility classes for controlling font size using a shared CSS variable (`--font-size`).  
Sizes are mobile-first and can be overridden at responsive breakpoints.

---

## Base usage

Apply a font size directly on any element:


<div class="card mb-3 w-fit d-flex fd-col p-3 gap-3">
  <div class="fs-xs">.fs-xs</div>
  <div class="fs-sm">.fs-sm</div>
  <div class="fs-md">.fs-md</div>
  <div class="fs-lg">.fs-lg</div>
  <div class="fs-xl">.fs-xl</div>
  <div class="fs-2xl">.fs-2xl</div>
  <div class="fs-3xl">.fs-3xl</div>
  <div class="fs-4xl">.fs-4xl</div>
</div>


```html
<div class="fs-xs">.fs-xs</div>
<div class="fs-sm">.fs-sm</div>
<div class="fs-md">.fs-md</div>
<div class="fs-lg">.fs-lg</div>
<div class="fs-xl">.fs-xl</div>
<div class="fs-2xl">.fs-2xl</div>
<div class="fs-3xl">.fs-3xl</div>
<div class="fs-4xl">.fs-4xl</div>
```


## Classes details

| Class    | Size | Pixels |
|----------|------|--------|
| `.fs-xs` | 0.75rem | 12px |
| `.fs-sm` | 0.875rem | 14px |
| `.fs-md` | 1rem | 16px (default) |
| `.fs-lg` | 1.125rem | 18px |
| `.fs-xl` | 1.25rem | 20px |
| `.fs-2xl` | 1.5rem | 24px |
| `.fs-3xl` | 1.875rem | 30px |
| `.fs-4xl` | 2.25rem | 36px |

## Responsive variants

Font sizes can be overridden at specific breakpoints :

<div class="card mb-3 p-3 w-fit">
  <p class="fs-xs md:fs-sm lg:fs-lg my-0">Responsive text</p>
</div>


```html
<p class="fs-xs md:fs-sm lg:fs-lg">Responsive text</p>
```

**Breakpoints**

* `sm:` ≥ 576px
* `md:` ≥ 768px
* `lg:` ≥ 1024px


## Extra font sizes

### Additional package

Add more font size by installing the extra packages:

```sh
npm install @merlin-chatou/sutairu-extras
```

### Font size in pixels

By importing the stylesheet in your CSS, you can use the `fs-<number>px` classes to set **exact font sizes in pixels**.

```css
@import "@merlin-chatou/sutairu-extras/font-size-px/style";
```

Use the `fs-*px` classes to set **exact font sizes in pixels**:

| Micro Scale | UI / Body Scale | Large Scale | Display / Hero Scale |
| ----------- | --------------- | ----------- | -------------------- |
| `.fs-1px`   | `.fs-12px`      | `.fs-32px`  | `.fs-80px`           |
| `.fs-2px`   | `.fs-14px`      | `.fs-36px`  | `.fs-96px`           |
| `.fs-3px`   | `.fs-16px`      | `.fs-40px`  | `.fs-112px`          |
| `.fs-4px`   | `.fs-18px`      | `.fs-48px`  | `.fs-128px`          |
| `.fs-5px`   | `.fs-20px`      | `.fs-56px`  | `.fs-144px`          |
| `.fs-6px`   | `.fs-24px`      | `.fs-64px`  | `.fs-160px`          |
| `.fs-7px`   | `.fs-28px`      | `.fs-72px`  | —                    |
| `.fs-8px`   | —               | —           | —                    |
| `.fs-9px`   | —               | —           | —                    |
| `.fs-10px`  | —               | —           | —                    |
| `.fs-11px`  | —               | —           | —                    |


#### Examples

<div class="card mb-3 p-3 d-flex fd-col gap-3">
<div class="fs-4px">Text with 4px font size</div>
<div class="fs-16px">Text with 16px font size</div>
<div class="fs-32px">Text with 32px font size</div>
<div class="fs-64px">Text with 64px font size</div>
</div>



```html
<div class="fs-4px">Text with 4px font size</div>
<div class="fs-16px">Text with 16px font size</div>
<div class="fs-32px">Text with 32px font size</div>
<div class="fs-64px">Text with 64px font size</div>
```

#### Range

* `.fs-1px` → 1px
* `.fs-2px` → 2px
* …
* `.fs-200px` → 200px


### Fluid Font Sizes (Responsive)

By importing the fluid typography stylesheet, you can use `fs-fluid-*` classes to create text that **scales automatically** between mobile and desktop dimensions without using media queries.

```css
@import "@merlin-chatou/sutairu-extras/font-size-fluid/style";
```

Unlike static pixel sizes, fluid sizes use the CSS `clamp()` function to stay readable on small screens while expanding to high-impact headings on larger displays.

<div class="card mb-3 p-3 d-flex fd-col gap-3">
<div class="fs-fluid-md">.fs-fluid-md</div>
<div class="fs-fluid-2xl">.fs-fluid-2xl</div>
<div class="fs-fluid-4xl">.fs-fluid-4xl</div>
</div>

```html
<div class="fs-fluid-md">.fs-fluid-md</div>
<div class="fs-fluid-2xl">.fs-fluid-2xl</div>
<div class="fs-fluid-4xl">.fs-fluid-4xl</div>
```

#### The Fluid Scale

The following table shows how each utility behaves at its minimum (mobile) and maximum (desktop/4K) limits.


| Class | Mobile Min | Desktop Max | Range Multiplier |
| --- | --- | --- | --- |
| `.fs-fluid-xs` | **0.7rem** | **0.85rem** | 0.2vmin |
| `.fs-fluid-sm` | **0.8rem** | **1rem** | 0.3vmin |
| `.fs-fluid-md` | **0.9rem** | **1.25rem** | 0.5vmin |
| `.fs-fluid-lg` | **1rem** | **1.5rem** | 0.8vmin |
| `.fs-fluid-xl` | **1.1rem** | **2rem** | 1.5vmin |
| `.fs-fluid-2xl` | **1.25rem** | **3rem** | 2.5vmin |
| `.fs-fluid-3xl` | **1.5rem** | **4.5rem** | 3.5vmin |
| `.fs-fluid-4xl` | **1.75rem** | **6rem** | 4.5vmin |
| `.fs-fluid-5xl` | **2rem** | **8rem** | 5.5vmin |
| `.fs-fluid-6xl` | **2.25rem** | **10rem** | 7vmin |
| `.fs-fluid-7xl` | **2.5rem** | **12rem** | 9vmin |
| `.fs-fluid-8xl` | **3rem** | **16rem** | 12vmin |




### Font Size in REM

By importing this stylesheet, you can use the `fs-<number>rem` classes to set **font sizes relative to the root element**.

```css
@import "@merlin-chatou/sutairu-extras/font-size-rem/style";

```

<div class="card p-3 d-flex fd-col gap-3">
<div class="fs-0_75rem">.fs-0_75rem</div>
<div class="fs-1rem">.fs-1rem</div>
<div class="fs-1_5rem">.fs-1_5rem</div>
<div class="fs-2_5rem">.fs-2_5rem</div>
</div>

```html
<div class="fs-0_75rem">.fs-0_75rem</div>
<div class="fs-1rem">.fs-1rem</div>
<div class="fs-1_5rem">.fs-1_5rem</div>
<div class="fs-2_5rem">.fs-2_5rem</div>
```

### Scale Reference

The classes follow a naming convention where `_` replaces the decimal point (e.g., `.fs-1_125rem` equals `1.125rem`).

| Micro Scale | Utility Scale | Large Scale | Hero Scale |
| --- | --- | --- | --- |
| `.fs-0_0625rem` | `.fs-1rem` | `.fs-2rem` | `.fs-5rem` |
| `.fs-0_125rem` | `.fs-1_125rem` | `.fs-2_25rem` | `.fs-6rem` |
| `.fs-0_25rem` | `.fs-1_25rem` | `.fs-2_5rem` | `.fs-7rem` |
| `.fs-0_5rem` | `.fs-1_5rem` | `.fs-3rem` | `.fs-8rem` |
| `.fs-0_75rem` | `.fs-1_75rem` | `.fs-3_5rem` | `.fs-9rem` |
| `.fs-0_875rem` | — | `.fs-4rem` | `.fs-10rem` |

