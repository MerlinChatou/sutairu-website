# Icons

Sutairu includes a robust, utility-friendly icon system designed for crisp rendering at any size. Icons integrate seamlessly with your layout and typography utilities, supporting custom colors, smooth rotations, multi-layer stacking, and hover animations.

**Icon Search Engine:** You can browse the full library, copy class names, and preview symbols live using the online search tool.


<div class="flex-x jc-center">
<a href="/docs/v1.0.0/icons" target="_blank" class="btn btn-primary">Browse Icon Library</a>
</div>



## Basic Usage

To render an icon, use an empty element (such as `<i>` or `<span>`) combined with the base `.icon` class and a specific icon identifier starting with `i-<icon-name>`.


<div class="card w-fit flex-x gap-4 p-4 fs-3.5rem">  
  <i class="icon i-home-solid"></i>
  <i class="icon i-user-thin"></i>
  <i class="icon i-apple"></i>
  <i class="icon i-thumb-solid"></i>
</div>

```html
<i class="icon i-home-solid"></i>
<i class="icon i-user-thin"></i>
<i class="icon i-apple"></i>
<i class="icon i-thumb-solid"></i>
```

## Color & Styling

Because icons inherit text formatting properties, you can color them instantly using standard Sutairu text color utilities (`text-{color}`) or place them inside styled containers.

<div class="card w-fit flex-x gap-4 p-4 fs-3.5rem">    
  <i class="icon i-warning-solid text-orange"></i>  
  <i class="icon i-sign-in-solid bg-accent/50"></i>
  <i class="icon i-plus-solid text-red bg-white r-2"></i>  
  <i class="icon i-check-alt text-white bg-green r-pill"></i>
</div>


```html
<i class="icon i-warning-solid text-orange"></i>  
<i class="icon i-sign-in-solid bg-accent/50"></i>
<i class="icon i-plus-solid text-red bg-white r-2"></i>  
<i class="icon i-check-alt text-white bg-green r-pill"></i>
```


## Rotation

You can rotate icons using fractional step modifiers or explicit angle specifications.

| Utility | Description |
| --- | --- |
| `.rot-1/4` | Rotates 90 degrees clockwise (1/4 turn) |
| `.rot-1/2` | Rotates 180 degrees (1/2 turn) |
| `.rot-3/4` | Rotates 270 degrees (3/4 turn) |
| `.-rot-45deg` | Rotates 45 degrees counter-clockwise |


<div class="card w-fit flex-x gap-4 p-4 fs-3.5rem">    
  <i class="icon i-skateboard"></i>
  <i class="icon i-skateboard rot-1/4"></i>
  <i class="icon i-skateboard rot-1/2"></i>
  <i class="icon i-skateboard -rot-45deg"></i>
</div>


```html
<i class="icon i-skateboard"></i>
<i class="icon i-skateboard rot-1/4"></i>
<i class="icon i-skateboard rot-1/2"></i>
<i class="icon i-skateboard -rot-45deg"></i>
```

## Stacking Icons

By combining the `.stack` layout container with multiple icon layers, you can create complex badge notifications, status pins, and containerized indicators.


<div class="card w-fit flex-x gap-4 p-4 fs-3.5rem">    
  <div class="stack">
    <i class="icon i-equilateral-solid text-yellow-450"></i>
    <i class="icon i-warning-solid text-orange-550"></i>
  </div>
  <div class="stack">
    <i class="icon i-car-front-small text-blue"></i>
    <i class="icon i-circle-line-wide text-red"></i>
  </div>
  <div class="stack">
    <i class="icon i-octagon-solid-wide text-gray/20"></i>
    <i class="icon i-power-solid text-green-500"></i>
  </div>
  <div class="stack">
    <i class="icon i-square-wide text-purple/50 "></i>
    <i class="icon i-eight-wide text-purple "></i>
  </div>
</div>

```html
<div class="stack">
  <i class="icon i-equilateral-solid text-yellow-450"></i>
  <i class="icon i-warning-solid text-orange-550"></i>
</div>

<div class="stack">
  <i class="icon i-car-front-small text-blue"></i>
  <i class="icon i-circle-line-wide text-red"></i>
</div>

<div class="stack">
  <i class="icon i-octagon-solid-wide text-gray/20"></i>
  <i class="icon i-power-solid text-green-500"></i>
</div>

<div class="stack">
  <i class="icon i-square-wide text-purple/50 "></i>
  <i class="icon i-eight-wide text-purple "></i>
</div>
```


Let's refine that phrasing to sound much more professional. Instead of "Most of the time," we can frame it as a common layout pattern.

Here is the updated **Stacking Icons** section:

Here is the updated **Geometric Base Shapes** table including the prohibitory line-wide icon, which is ideal for creating "forbidden", "disabled", or "restricted" status badges.

### Geometric Base Shapes & Overlays

When stacking icons using the `.stack` layout container, base shapes and overlays are commonly used to form notification badges, status markers, and warning indicators.

Sutairu applies a consistent modifier suffix convention to control stroke weight and fill style across all geometric primitives.

#### 1. Style Suffixes

| Suffix / Modifier | Style Type | Description |
| --- | --- | --- |
| **`-thin`** | Stroke | Fine, delicate line weight for standard icons. |
| **(Default)** | Stroke | Balanced, standard line weight. |
| **`-wide`** | Stroke | Bold, high-visibility line weight. |
| **`-solid`** | Fill | Solid silhouette fill (unavailable for prohibitory overlays). |
| **`line-thin`** | Outline | Fine line weight specifically for geometric shapes. |
| **`line`** *(or base)* | Outline | Standard line weight for geometric shapes. |
| **`line-wide`** | Outline | Bold line weight for geometric shapes and warning frames. |


#### 2. Available Shapes

| Shape Name | Base Identifier | Example Combinations |
| --- | --- | --- |
| **Circle** | `i-circle` | `i-circle-solid`, `i-circle-line-wide` |
| **Square** | `i-square` | `i-square-solid`, `i-square-line-thin` |
| **Triangle** | `i-triangle` | `i-triangle-solid`, `i-triangle-line` |
| **Equilateral** | `i-equilateral` | `i-equilateral-solid`, `i-equilateral-line-wide` |
| **Octagon** | `i-octagon` | `i-octagon-solid`, `i-octagon-line` |
| **Hexagon** | `i-hexagon` | `i-hexagon-solid`, `i-hexagon-line-thin` |
| **Prohibitory** | `i-prohibitory` | `i-prohibitory-line-thin`, `i-prohibitory-line-wide` |


<div class="card w-fit grid-y grid-cols-9 gap-4 p-4 fs-2rem">    
  <i class="icon i-none"></i>
  <i class="icon i-none"></i>
  <i class="icon i-none"></i>  
  <i class="icon i-prohibitory-line-thin"></i>
  <i class="icon i-prohibitory-line"></i>
  <i class="icon i-prohibitory-line-wide"></i>
  <i class="icon i-none"></i>
  <i class="icon i-none"></i>
  <i class="icon i-none"></i>
  <i class="icon i-circle-thin"></i>
  <i class="icon i-circle"></i>
  <i class="icon i-circle-wide"></i>  
  <i class="icon i-circle-line-thin"></i>
  <i class="icon i-circle-line"></i>
  <i class="icon i-circle-line-wide"></i>  
  <i class="icon i-circle-solid"></i>
  <i class="icon i-none"></i>  
  <i class="icon i-none"></i>  
  <i class="icon i-square-thin"></i>
  <i class="icon i-square"></i>
  <i class="icon i-square-wide"></i>  
  <i class="icon i-square-line-thin"></i>
  <i class="icon i-square-line"></i>
  <i class="icon i-square-line-wide"></i>  
  <i class="icon i-square-solid-thin"></i>
  <i class="icon i-square-solid"></i>
  <i class="icon i-square-solid-wide"></i>
  <i class="icon i-triangle-thin"></i>
  <i class="icon i-triangle"></i>
  <i class="icon i-triangle-wide"></i>  
  <i class="icon i-triangle-line-thin"></i>
  <i class="icon i-triangle-line"></i>
  <i class="icon i-triangle-line-wide"></i>  
  <i class="icon i-triangle-solid-thin"></i>
  <i class="icon i-triangle-solid"></i>
  <i class="icon i-triangle-solid-wide"></i>
  <i class="icon i-equilateral-thin"></i>
  <i class="icon i-equilateral"></i>
  <i class="icon i-equilateral-wide"></i>  
  <i class="icon i-equilateral-line-thin"></i>
  <i class="icon i-equilateral-line"></i>
  <i class="icon i-equilateral-line-wide"></i>  
  <i class="icon i-equilateral-solid-thin"></i>
  <i class="icon i-equilateral-solid"></i>
  <i class="icon i-equilateral-solid-wide"></i>
  <i class="icon i-hexagon-thin"></i>
  <i class="icon i-hexagon"></i>
  <i class="icon i-hexagon-wide"></i>  
  <i class="icon i-hexagon-line-thin"></i>
  <i class="icon i-hexagon-line"></i>
  <i class="icon i-hexagon-line-wide"></i>  
  <i class="icon i-hexagon-solid-thin"></i>
  <i class="icon i-hexagon-solid"></i>
  <i class="icon i-hexagon-solid-wide"></i>
  <i class="icon i-octagon-thin"></i>
  <i class="icon i-octagon"></i>
  <i class="icon i-octagon-wide"></i>  
  <i class="icon i-octagon-line-thin"></i>
  <i class="icon i-octagon-line"></i>
  <i class="icon i-octagon-line-wide"></i>  
  <i class="icon i-octagon-solid-thin"></i>
  <i class="icon i-octagon-solid"></i>
  <i class="icon i-octagon-solid-wide"></i>
</div>

```html
<!-- Prohibitory -->
<i class="icon i-prohibitory-line-thin"></i>
<i class="icon i-prohibitory-line"></i>
<i class="icon i-prohibitory-line-wide"></i>
<!-- Circles -->
<i class="icon i-circle-thin"></i>
<i class="icon i-circle"></i>
<i class="icon i-circle-wide"></i>  
<i class="icon i-circle-line-thin"></i>
<i class="icon i-circle-line"></i>
<i class="icon i-circle-line-wide"></i>  
<i class="icon i-circle-solid"></i>
<!-- Squares -->
<i class="icon i-square-thin"></i>
<i class="icon i-square"></i>
<i class="icon i-square-wide"></i>  
<i class="icon i-square-line-thin"></i>
<i class="icon i-square-line"></i>
<i class="icon i-square-line-wide"></i>  
<i class="icon i-square-solid-thin"></i>
<i class="icon i-square-solid"></i>
<i class="icon i-square-solid-wide"></i> 
<!-- Triangles -->
...
```




## Effect Transforms & Scaling

Combine scale transitions, hover states, and mirroring utilities to build responsive interactive icons.

| Utility | Description |
| --- | --- |
| `.hover:sc-110` | Scales the element up to 110% on mouse hover. |
| `.-sc-x-1` | Flips/mirrors the icon horizontally across the X-axis. |



<div class="card w-fit flex-x gap-4 p-4 fs-4rem">  
  <i class="icon i-collapse-menu-solid hover:sc-120 tr-transform-250ms"></i>
  <i class="icon i-dancer-alt-solid -rot-20deg hover:rot-20deg tr-transform-250ms"></i>
</div>



```html
<i class="icon i-collapse-menu-solid hover:sc-120 tr-transform-250ms"></i>
<i class="icon i-dancer-alt-solid -rot-20deg hover:rot-20deg tr-transform-250ms"></i>
```



## Requesting New Icons

If your design requires a symbol not currently present in the Sutairu library:

* Open an [issue on the Sutairu repository](https://github.com/MerlinChatou/sutairu/issues) to request a new icon.
* Design your icon and submit a pull request by following [the instructions on the GitHub Sutairu icon page](https://github.com/MerlinChatou/sutairu/tree/main/src/icons).

