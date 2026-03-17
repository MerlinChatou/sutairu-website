# Text Alignment

Utility classes for text alignment, with responsive variants.

## Alignment


<div class="card p-2 w-128px">
<p class="my-2 ta-left">Left</p>
<hr>
<p class="my-2 ta-center">Center</p>
<hr>
<p class="my-2 ta-right">Right</p>
<hr>
<p class="my-2 ta-justify">This is a justified text</p>
</div>


```html
<p class="ta-left">Left</p>
<p class="ta-center">Center</p>
<p class="ta-right">Right</p>
<p class="ta-justify">Justified</p>
```

## Responsive alignment

Apply alignment from a breakpoint and up.

<div class="card p-2">
<p class="ta-right md:ta-center my-0">Responsive text</p>
</div>

```html
<p class="ta-right md:ta-center">Responsive text</p>
```

**Breakpoints**

* `md:` ≥ 768px
* `lg:` ≥ 1024px

