# Text opacity modifier

Text opacity utilities control the opacity of a color using numeric steps. Opacity range from **0** (transparent) to **100** (full opaque).

## Opacity scale

Use `text-opacity-<number>` to apply a specific opacity, from `0` to `100` (in steps of 10):

``` css
.text-opacity-{0|10|20|…|100}
```


⚠️ **Important:** Opacity utilities adjust the alpha channel of the current text color.
They must be combined with a text color utility (e.g., `text-accent`, `text-gray`) to define the base color.  
Using `text-opacity-*` alone (`text-opacity-50`, `hover:text-opacity-70`, etc.) has no effect.

<div class="card p-2 w-fit ff-mono">
  <div class="pb-1 text-accent text-opacity-0">.text-opacity-0</div>
  <div class="pb-1 text-accent text-opacity-20">.text-opacity-20</div>
  <div class="pb-1 text-accent text-opacity-50">.text-opacity-50</div>
  <div class="pb-1 text-accent text-opacity-70">.text-opacity-70</div>
  <div class="text-accent text-opacity-100">.text-opacity-100</div>
</div>


```html
<div class="text-accent text-opacity-0">.text-opacity-0</div>
<div class="text-accent text-opacity-20">.text-opacity-20</div>
<div class="text-accent text-opacity-50">.text-opacity-50</div>
<div class="text-accent text-opacity-70">.text-opacity-70</div>
<div class="text-accent text-opacity-100">.text-opacity-100</div>
```



## Dark mode variant

Override the opacity when dark mode is active using `dark:`.

<div class="card p-2 w-fit ff-mono">
  <div class="text-body text-opacity-100 dark:text-opacity-50">Adaptive shade</div>
</div>

```html
<p class="text-body text-opacity-100 dark:text-opacity-50">Adaptive shade</p>
```

* Default utilities apply to light mode.
* `dark:` replaces the shade in dark mode.



## State variants

To enable interactive state variants, install the complementary package:


``` bash
npm install @merlin-chatou/sutairu-extras
```

Import only the styles you need:

```css
@import "@merlin-chatou/sutairu-extras/text-opacity-hover/style";
@import "@merlin-chatou/sutairu-extras/text-opacity-focus/style";
@import "@merlin-chatou/sutairu-extras/text-opacity-focus-visible/style";
@import "@merlin-chatou/sutairu-extras/text-opacity-active/style";
@import "@merlin-chatou/sutairu-extras/text-opacity-disabled/style";
```


Text opacity can be combined with interactive state modifiers:

* `hover:` — applies on hover
* `focus:` — applies when focused
* `focus-visible:` — applies when focus is visible (keyboard navigation)
* `active:` — applies while active/pressed
* `disabled:` — applies when disabled


<div class="card p-2 w-fit ff-mono">
<button class="
  bg-accent bg-opacity-0 bw-0 p-2
  text-gray
  text-opacity-40
  hover:text-opacity-60
  focus:text-opacity-80  
  active:text-opacity-100
  disabled:text-opacity-20
  ">Interactive text
</button>
</div>

```html
<button class="
  text-gray
  text-opacity-40
  hover:text-opacity-60
  focus:text-opacity-80  
  active:text-opacity-100
  disabled:text-opacity-20">
  Interactive text
</button>
```


## Notes

* Variants can be combined with theme modifiers:


<div class="card p-2 w-fit ff-mono">
<button class="btn text-accent text-opacity-70 dark:text-opacity-80 hover:text-opacity-100 dark:hover:text-opacity-60">Combined variants</button>
</div>

```html
<button class="btn 
  text-accent 
  text-opacity-70 
  dark:text-opacity-80 
  hover:text-opacity-100 
  dark:hover:text-opacity-60">  
  Combined variants
</button>
```
