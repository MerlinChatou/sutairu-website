# Text shade modifier

Text shade utilities control the lightness level of a color using numeric steps. Shades range from **50** (lightest) to **950** (darkest).

## Shade scale

Use `text-<number>` to apply a specific shade, from `50` to `950`
(in steps of 50):

``` css
.text-{50|100|150|…|950}
```




⚠️ **Important:** Shade modifiers must be combined with a text color utility.
Using a shade alone (`text-500`, `hover:text-700`, etc.) has no effect.

<div class="card p-2 w-fit ff-mono">
  <div class="pb-1 text-body text-50">.text-50</div>
  <div class="pb-1 text-body text-350">.text-350</div>
  <div class="pb-1 text-body text-500">.text-500</div>
  <div class="pb-1 text-body text-700">.text-700</div>
  <div class="text-body text-950">.text-950</div>
</div>


```html
<div class="text-body text-50">.text-50</div>
<div class="text-body text-350">.text-350</div>
<div class="text-body text-500">.text-500</div>
<div class="text-body text-700">.text-700</div>
<div class="text-body text-950">.text-950</div>
```



## Dark mode variant

Override the shade when dark mode is active using `dark:`.

<div class="card p-2 w-fit ff-mono">
  <div class="text-accent text-950 dark:text-50">Adaptive shade</div>
</div>

```html
<p class="text-accent text-950 dark:text-50">Adaptive shade</p>
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
@import "@merlin-chatou/sutairu-extras/text-shade-hover/style";
@import "@merlin-chatou/sutairu-extras/text-shade-focus/style";
@import "@merlin-chatou/sutairu-extras/text-shade-focus-visible/style";
@import "@merlin-chatou/sutairu-extras/text-shade-active/style";
@import "@merlin-chatou/sutairu-extras/text-shade-disabled/style";
```


Text shades can be combined with interactive state modifiers:

* `hover:` — applies on hover
* `focus:` — applies when focused
* `focus-visible:` — applies when focus is visible (keyboard navigation)
* `active:` — applies while active/pressed
* `disabled:` — applies when disabled


<div class="card p-2 w-fit ff-mono">
<button class="
  bg-accent bg-opacity-0 bw-0 p-2
  text-gray
  text-700
  hover:text-50
  focus:text-800
  focus-visible:text-900
  active:text-950
  disabled:text-300
">Interactive text
</button>
</div>

```html
<button class="
  text-gray
  text-700
  hover:text-50
  focus:text-800
  focus-visible:text-900
  active:text-950
  disabled:text-300
">Interactive text
</button>
```


## Notes

* State variants override the base shade when active.
* Variants can be combined with theme modifiers:


<div class="card p-2 w-fit ff-mono">
<button class="btn text-accent text-700 dark:text-200 hover:text-200 dark:hover:text-800">Combined variants</button>
</div>

```html
<button class="btn text-accent text-700 dark:text-200 hover:text-200 dark:hover:text-800">
  Combined variants
</button>
```
