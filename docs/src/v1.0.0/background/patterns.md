# Background Patterns

Sutairu provides a set of utility classes for applying decorative background patterns like stripes, dots, and hatching directly to your elements. These utilities are designed to be composable, allowing you to control color, angle, spacing, and stroke width.

This library provides a set of utility classes for applying decorative background patterns like **stripes**, **dots**, and **hatching** directly to your elements. These utilities are designed to be composable, allowing you to control color, angle, spacing, and stroke width.


##  Stripes 
The stripes utility creates a repeating diagonal background.

**Usage:** Apply `.stripes-{color}` along with a background color.

The pattern utilities support the full range of your color palette, including shades and transparency. You can fine-tune the visual weight of a pattern by using the standard `{color}-{shade}/{opacity}` syntax.


Example: 

<div class="my-2 p-3 px-8 w-fit r-2 stripes-yellow-300 bg-yellow-200">.stripes-yellow-300</div>

```html
<div class="stripes-yellow-300 bg-yellow-200">.stripes-yellow-300</div>
```


 ### Modifiers

Customize the visual behavior of your background patterns with modifiers that allow you to adjust the orientation, spacing, and stroke thickness to fit your design requirements.


* Use `.pattern-angle-{angle}` to change the orientation.
* Use `.pattern-period-{size}` to control the interval or frequency of the pattern repetition.
* Use `.pattern-width-{size}` to adjust the thickness of the lines.


Using aliases allows you to compose complex backgrounds with minimal code:

* **Rotated Stripes:** Instead of `.pattern-angle-90deg`, use **`.pa-90deg`**.
* **Dense Dots:** Instead of `.pattern-period-4px`, use **`.pp-4px`**.
* **Bold Hatching:** Instead of `.pattern-width-5px`, use **`.pw-5px`**.


### Examples



<div class="my-2 p-3 px-8 w-fit r-2 stripes-orange/50 bg-orange/50">.stripes-orange/50</div>

```html
<div class="stripes-orange/50 bg-orange/50">.stripes-orange/50</div>
```


<div class="my-2 p-3 px-8 w-fit r-2 stripes-accent-300 bg-accent-200 pa-20deg">.pattern-angle-20deg</div>

```html
<div class="stripes-accent-300 bg-accent-200 pattern-angle-20deg">.pattern-angle-20deg</div>
```

<div class="my-2 p-3 px-8 w-fit r-2 stripes-accent-300 bg-accent-200 pattern-period-60px">.pattern-period-60px</div>

```html
<div class="stripes-accent-300 bg-accent-200 pattern-period-60px">.pattern-period-60px</div>
```

<div class="my-2 p-3 px-8 w-fit r-2 stripes-accent-300 bg-accent-200 pattern-period-60px pattern-width-40px">.pattern-width-40px</div>

```html
<div class="stripes-accent-300 bg-accent-200 pattern-period-60px pattern-width-40px">.pattern-width-40px</div>
```


## Dots

The dots utility applies a repeating radial point pattern.

* **Usage:** Apply `.dotted-{color}`.
* **Customization:** Use `.pp-{size}` to control the density.


### Example

<div class="my-2 w-fit p-3 px-8 r-2 dotted-pink/50 b-1 b-pink/50">.dotted-pink</div>

```html
<div class="dotted-pink/50 b-1 b-pink/50">.dotted-pink</div>
```


## Hatching

The hatching utility creates a dense, fine-lined shaded effect when stripes can't support thin lines.

* **Usage:** Apply `.hatching-{color}`.
* Use `.pa-{angle}` to adjust the orientation (only multiples of 45 degrees)
* Use `.pattern-period-{size}` to control the interval or frequency of the pattern repetition.
* Use `.pattern-width-{size}` to adjust the thickness of the lines.


### Example

<div class="my-2 w-fit p-3 px-8 r-2 hatching-purple-300/40 b-1 b-purple-300/40">.hatching-purple</div>

```html
<div class="w-full p-3 r-2 hatching-purple-300/40 b-1 b-purple-300/40">.hatching-purple</div>
```
