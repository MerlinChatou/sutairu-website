# Loaders

The framework provides different loader styles, each animated with CSS. They can be customized with size, color, scaling, and animation utilities.


## Circular Spinner

`.loader` creates a **circular spinner** that rotates a bordered ring.

- Use `.text-<color>` to set the primary stroke color.
- Use `.b-<color>` to set the background stroke color.

### Examples

<div class="h-flex ai-center gap-3 mt-4 mb-2">
<span class="loader ps-center"></span>
<span class="loader text-orange ps-center"></span>
<span class="loader text-yellow b-green ps-center"></span>
<span class="loader text-green b-transparent ps-center"></span>
<span class="loader text-transparent b-cyan ps-center"></span>
</div>


```html
<span class="loader"></span>
<span class="loader text-orange"></span>
<span class="loader text-yellow border-green"></span>
<span class="loader text-green b-transparent"></span>
<span class="loader text-transparent b-cyan"></span>
```




## Clipped Border Spinner

`.loader-clip` creates a **clipped border spinner** that animates as a rotating arc.

- Use `.color-*` to change the spinner color.

### Examples

<div class="h-flex gap-3 mt-4 mb-2">
<span class="loader-clip"></span>
<span class="loader-clip text-red"></span>
<span class="loader-clip text-green anim-dur-2000"></span>
</div>


```html
<span class="loader-clip"></span>
<span class="loader-clip text-red"></span>
<span class="loader-clip text-green anim-dur-2000"></span>
```



## Pulsing Loader

`.loader-grow` creates a **pulsing loader** that expands and fades in/out.

- Use `.bg-*` to set the fill color.

### Examples

<div class="h-flex gap-3 mt-4 mb-2">
<span class="loader-grow"></span>
<span class="loader-grow bg-red"></span>
<span class="loader-grow bg-green anim-dur-2000"></span>
</div>

```html
<span class="loader-grow"></span>
<span class="loader-grow bg-red"></span>
<span class="loader-grow bg-green anim-dur-2000"></span>
```







## Fading Dots

`.loader-dots-fade` creates three **fading dots** that appear and disappear sequentially.

- Use `.color-*` to change the dots color.

### Examples

<div class="d-flex gap-3 mt-4 mb-2">
<div class="w-48px h-48px d-grid"><span class="loader-dots-fade ps-center"></span></div>
<div class="w-48px h-48px d-grid"><span class="loader-dots-fade text-red ps-center"></span></div>
<div class="w-48px h-48px d-grid"><span class="loader-dots-fade text-green anim-dur-2000 ps-center"></span></div>
</div>

```html
<span class="loader-dots-fade"></span>
<span class="loader-dots-fade text-red"></span>
<span class="loader-dots-fade text-green anim-dur-2000"></span>
```


## Rotating Dots

`.loader-dots-spin` creates three **rotating dots** arranged in a circular path.

- Use `.color-*` to change the dots color.

### Examples

<div class="h-flex gap-3 mt-4 mb-2">
<div class="w-48px h-48px d-grid"><span class="loader-dots-spin ps-center"></span></div>
<div class="w-48px h-48px d-grid"><span class="loader-dots-spin text-red  ps-center"></span></div>
<div class="w-48px h-48px d-grid"><span class="loader-dots-spin text-green anim-dur-2000 ps-center"></span></div>
</div>

```html
<span class="loader-dots-spin"></span>
<span class="loader-dots-spin text-red"></span>
<span class="loader-dots-spin text-green anim-dur-2000"></span>
```




## Comet-Style Loader

`.loader-comet`creates a **comet-style loader** where dots rotate with a trailing fade effect.

- Use `.color-*` to change the dots color.


### Examples

<div class="h-flex gap-3 mt-4 mb-2">
<div class="w-48px h-48px d-grid"><span class="loader-comet ps-center"></span></div>
<div class="w-48px h-48px d-grid"><span class="loader-comet text-red  ps-center"></span></div>
<div class="w-48px h-48px d-grid"><span class="loader-comet text-green anim-dur-2000 ps-center"></span></div>
</div>

```html
<span class="loader-comet"></span>
<span class="loader-comet text-red"></span>
<span class="loader-comet text-green anim-dur-2000"></span>
```


## Skeleton-Style Loader

`.loader-skeleton` creates a **shimmering placeholder** effect, often used to indicate that content is loading in a specific layout.

* Use `.h-*` and `.w-*` to define the dimensions of the skeleton (height is mandatory).
* Use `.bg-*` to set the background color.
* Use `.fg-*` to set the shimer color.


### Examples

<div class="v-flex gap-3 max-w-md mt-4 mb-2">
<span class="loader-skeleton h-16px r-3"></span>
<span class="loader-skeleton h-16px r-3 bg-green fg-blue"></span>
<span class="loader-skeleton h-32px w-1/2  r-3 anim-dur-1000"></span>
</div>

```html
<span class="loader-skeleton h-16px"></span>
<span class="loader-skeleton h-16px bg-green fg-blue"></span>
<span class="loader-skeleton h-32px w-1/2 anim-dur-1000"></span>
```



## Sizing

There are several ways to size the loaders. The most flexible option is to use the utility class `.scale-[ratio]`.


<div class="h-flex gap-4 mt-4 mb-2">
<div class="w-48px h-48px d-grid"><span class="loader scale-50 ps-center"></span></div>
<div class="w-48px h-48px d-grid"><span class="loader-clip scale-75 ps-center"></span></div>
<div class="w-48px h-48px d-grid"><span class="loader-grow ps-center"></span></div>
<div class="w-48px h-48px d-grid"><span class="loader-dots-fade scale-110 ps-center"></span></div>
<div class="w-48px h-48px d-grid"><span class="loader-dots-spin scale-120 ps-center"></span></div>
<div class="w-48px h-48px d-grid"><span class="loader-comet scale-150 ps-center"></span></div>
</div>

``` html
<span class="loader scale-50"></span>
<span class="loader-clip scale-75"></span>
<span class="loader-grow"></span>
<span class="loader-dots-fade scale-110"></span>
<span class="loader-dots-spin scale-120"></span>
<span class="loader-comet scale-150"></span>
```

For `.loader-dots-fade`, `.loader-dots-spin` and `.loader-comet`, dots are generated with `box-shadow`. 

* The **dot size** depends on the element’s height.
* The **loader’s overall size** is relative to the element’s font size.

You can adjust both independently to fine-tune the effect:

<div class="h-flex gap-3 mt-4">
<div class="w-64px h-64px d-grid"><span class="loader-dots-fade fs-xs ps-center"></span></div>
<div class="w-64px h-64px d-grid"><span class="loader-dots-spin h-16px ps-center"></span></div>
<div class="w-64px h-64px d-grid"><span class="loader-comet fs-5xl h-4px ps-center"></span></div>
</div>

```html
<span class="loader-dots-fade fs-xs"></span>
<span class="loader-dots-spin h-16px"></span>
<span class="loader-comet fs-5xl h-4px"></span>
```