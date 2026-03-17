# Sizing Utilities

## Numeric sizing

Numeric sizing utilities use a linear `rem` scale.

### Width (`w-*`)

| Class  | Width  |
| ------ | ------ |
| `.w-0` | `0`    |
| `.w-1` | `1rem` |
| `.w-2` | `2rem` |
| `.w-3` | `3rem` |
| `.w-4` | `4rem` |
| `.w-5` | `5rem` |
| `.w-6` | `6rem` |

### Height (`h-*`)

| Class  | Height |
| ------ | ------ |
| `.h-0` | `0`    |
| `.h-1` | `1rem` |
| `.h-2` | `2rem` |
| `.h-3` | `3rem` |
| `.h-4` | `4rem` |
| `.h-5` | `5rem` |
| `.h-6` | `6rem` |

### Min / Max Sizing

The numeric min/max sizing utilities are part of the extras package.
They are not included in the core framework, so you need to install and import them separately.

``` bash
npm install @merlin-chatou/sutairu-extras
```

Import only the styles you need:

```css
@import "@merlin-chatou/sutairu-extras/min-height-numeric/style";
@import "@merlin-chatou/sutairu-extras/max-height-numeric/style";
@import "@merlin-chatou/sutairu-extras/min-width-numeric/style";
@import "@merlin-chatou/sutairu-extras/max-width-numeric/style";
```


The numeric scale supports **minimum and maximum dimensions**:

| Class Prefix | Description    |
| ------------ | -------------- |
| `.min-w-*`   | Minimum width  |
| `.max-w-*`   | Maximum width  |
| `.min-h-*`   | Minimum height |
| `.max-h-*`   | Maximum height |

Values follow the same scale (`0` → `0`, `1` → `1rem`, `2` → `2rem`, …).

### Variants

Numeric sizing utilities support:

- Breakpoints: `sm:`, `md:`, `lg:`
- Orientation: `portrait:`, `landscape:`
- Combined: `sm:portrait:`, `sm:landscape:`, etc.

### Examples

<div class="h-flex ai-center gap-1">
<div class="bg-subtle b-accent r-2 h-3 w-6"></div>
<div class="bg-subtle b-accent r-2 h-3 w-3 md:w-5 lg:w-6"></div>
<div class="bg-subtle b-accent r-2 h-3 w-4 portrait:w-6 landscape:w-3"></div>
</div>

```html
<!-- Fixed size card -->
<div class="w-6 h-3"></div>
<!-- Responsive block -->
<div class="w-3 md:w-5 lg:w-6"></div>
<!-- Orientation-adaptive component -->
<div class="w-4 portrait:w-6 landscape:w-3"></div>
```

---

## Semantic Sizing

Semantic sizing utilities provide **meaningful, fixed widths** based on common design breakpoints. They are ideal for layout containers, cards, and components that follow a consistent responsive grid.

### Semantic Width

| Class    | Width   | Pixels |
| -------- | ------- | ------ |
| `.w-sm`  | `32rem` | 512px  |
| `.w-md`  | `36rem` | 576px  |
| `.w-lg`  | `48rem` | 768px  |
| `.w-xl`  | `64rem` | 1024px |
| `.w-2xl` | `72rem` | 1152px |
| `.w-3xl` | `80rem` | 1280px |

### Semantic height

| Class    | Height  | Pixels |
| -------- | ------- | ------ |
| `.h-sm`  | `32rem` | 512px  |
| `.h-md`  | `36rem` | 576px  |
| `.h-lg`  | `48rem` | 768px  |
| `.h-xl`  | `64rem` | 1024px |
| `.h-2xl` | `72rem` | 1152px |
| `.h-3xl` | `80rem` | 1280px |

### Min / Max Semantic Sizing

The semantic min/max sizing utilities are part of the extras package.
They are not included in the core framework, so you need to install and import them separately.

``` bash
npm install @merlin-chatou/sutairu-extras
```

Import only the styles you need:

```css
@import "@merlin-chatou/sutairu-extras/min-height-semantic/style";
@import "@merlin-chatou/sutairu-extras/max-height-semantic/style";
@import "@merlin-chatou/sutairu-extras/min-width-semantic/style";
@import "@merlin-chatou/sutairu-extras/max-width-semantic/style";
```


The numeric scale supports **minimum and maximum dimensions**:

| Class Prefix | Description    |
| ------------ | -------------- |
| `.min-w-*`   | Minimum width  |
| `.max-w-*`   | Maximum width  |
| `.min-h-*`   | Minimum height |
| `.max-h-*`   | Maximum height |

All semantic values follow the same scale.

### Variants

Semantic sizing supports:

- Breakpoints: `sm:`, `md:`, `lg:`
- Orientation: `portrait:`, `landscape:`
- Combined: `sm:portrait:`, `sm:landscape:`, etc.

### Examples

<div class="v-flex gap-1">
  <div class="bg-subtle b-accent r-2 h-3 w-sm"></div>
  <div class="bg-subtle b-accent r-2 h-3 w-sm md:w-md"></div>
  <div class="bg-subtle b-accent r-2 h-3 w-sm landscape:w-md"></div>
</div>

```html
<!-- Fixed semantic width -->
<div class="w-sm h-3"></div>
<!-- Responsive semantic width -->
<div class="w-md md:w-lg lg:w-xl"></div>
<!-- Orientation-adaptive semantic width -->
<div class="w-sm landscape:w-md"></div>
```




---

## Relative Sizing

Relative sizing utilities provide **percent-based, auto, and intrinsic widths**. They are ideal for fluid layouts, flexible grids, and content-driven sizing.

---

### Width (`w-*`)

| Class     | Width         | Description                           |
| --------- | ------------- | ------------------------------------- |
| `.w-1/2`  | `50%`         | Half of the container                 |
| `.w-1/3`  | `33.333333%`  | One-third of the container            |
| `.w-2/3`  | `66.666667%`  | Two-thirds of the container           |
| `.w-1/4`  | `25%`         | One-quarter of the container          |
| `.w-3/4`  | `75%`         | Three-quarters of the container       |
| `.w-full` | `100%`        | Full width of container               |
| `.w-100`  | `100%`        | Alias for full width                  |
| `.w-auto` | `auto`        | Width based on content / default flow |
| `.w-fit`  | `fit-content` | Width shrinks to fit content          |
| `.w-min`  | `min-content` | Minimum intrinsic width               |
| `.w-max`  | `max-content` | Maximum intrinsic width               |


### Variants

All relative sizing utilities support:

* Breakpoints: `sm:`, `md:`, `lg:`
* Orientation: `portrait:`, `landscape:`
* Combined: `sm:portrait:`, `sm:landscape:`, etc.

**Example:**
`md:w-1/2` → width 50% at `md` breakpoint
`sm:portrait:w-fit` → width fit-content on small screens in portrait mode


### Examples

<div class="card p-1 v-flex gap-1">
  <div class="bg-subtle b-accent r-2 w-1/2 h-3"></div>
  <div class="bg-subtle b-accent r-2 w-1/3 md:w-2/3 lg:w-full h-3"></div>
  <div class="bg-subtle b-accent r-2 portrait:w-full landscape:w-1/4 h-3"></div>
</div>

```html
<!-- Half-width block -->
<div class="w-1/2 h-3"></div>
<!-- Responsive percent widths -->
<div class="w-1/3 md:w-2/3 lg:w-full h-3"></div>
<!-- Intrinsic / fit-content block -->
<div class="portrait:w-full landscape:w-1/4 h-3"></div>
```

---

## Fixed Pixel Dimensions

Use `w-*px` and `h-*px` to apply **fixed pixel widths or heights**.

```
w-*px → width
h-*px → height
```

Utilities support **responsive** and **orientation** variants.

```html
<div class="w-48px h-48px sm:w-96px md:portrait:h-128px"></div>
```

| Variant     | Example               |
| ----------- | --------------------- |
| Breakpoint  | `sm:w-256px`          |
| Orientation | `portrait:h-512px`    |
| Combined    | `md:portrait:h-256px` |

---

### Available Values

| Micro    | Small UI  | Medium    | Large      | XL / Layout |
| -------- | --------- | --------- | ---------- | ----------- |
| `.w-1px` | `.w-12px` | `.w-32px` | `.w-96px`  | `.w-512px`  |
| `.w-2px` | `.w-16px` | `.w-40px` | `.w-112px` | `.w-576px`  |
| `.w-4px` | `.w-20px` | `.w-48px` | `.w-128px` | `.w-640px`  |
| `.w-8px` | `.w-24px` | `.w-56px` | `.w-160px` | `.w-704px`  |
| —        | `.w-28px` | `.w-64px` | `.w-192px` | `.w-768px`  |
| —        | —         | `.w-72px` | `.w-224px` | `.w-832px`  |
| —        | —         | `.w-80px` | `.w-256px` | `.w-896px`  |
| —        | —         | —         | `.w-384px` | `.w-960px`  |
| —        | —         | —         | `.w-448px` | `.w-1024px` |
| —        | —         | —         | —          | `.w-1152px` |
| —        | —         | —         | —          | `.w-1280px` |
| —        | —         | —         | —          | `.w-1440px` |
| —        | —         | —         | —          | `.w-1536px` |
| —        | —         | —         | —          | `.w-1600px` |
| —        | —         | —         | —          | `.w-1728px` |
| —        | —         | —         | —          | `.w-1920px` |

Height utilities follow the same scale:

```
h-1px → h-1920px
```

### Examples

<div class="h-flex gap-1">
  <div class="bg-subtle b-accent r-2 h-32px w-32px"></div>
  <div class="bg-subtle b-accent r-2 h-48px w-64px"></div>
  <div class="bg-subtle b-accent r-2 h-72px w-128px"></div>
</div>

```html
  <div class="h-32px w-32px"></div>
  <div class="h-48px w-64px"></div>
  <div class="h-72px w-128px"></div>
```
