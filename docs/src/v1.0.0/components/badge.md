# Badges

Badges are compact UI elements used to highlight status, counts, or labels. They are typically inline and can be combined with utility classes for styling, positioning, and sizing.

## Basic usage

<span class="badge bg-yellow text-black">.badge .bg-yellow</span>
<span class="badge bg-orange text-white">.badge .bg-orange</span>
<span class="badge bg-red text-white">.badge .bg-red</span>
<span class="badge bg-pink text-white">.badge .bg-pink</span>
<span class="badge bg-purple text-white">.badge .bg-purple</span>
<span class="badge bg-blue text-white">.badge .bg-blue</span>
<span class="badge bg-cyan text-white">.badge .bg-cyan</span>
<span class="badge bg-green text-white">.badge .bg-green</span>
<span class="badge bg-white text-black">.badge .bg-white</span>
<span class="badge bg-gray text-white">.badge .bg-gray</span>
<span class="badge bg-black text-white">.badge .bg-black</span>

```html
<span class="badge bg-yellow text-black">.badge .bg-yellow</span>
<span class="badge bg-orange text-white">.badge .bg-orange</span>
<span class="badge bg-red text-white">.badge .bg-red</span>
<span class="badge bg-pink text-white">.badge .bg-pink</span>
<span class="badge bg-purple text-white">.badge .bg-purple</span>
<span class="badge bg-blue text-white">.badge .bg-blue</span>
<span class="badge bg-cyan text-white">.badge .bg-cyan</span>
<span class="badge bg-green text-white">.badge .bg-green</span>
```

- `.badge` provides the base styling (padding, font-size, border-radius)
- Combine with background and text utilities for color control

## Pill badge

`.r-pill` makes the badge fully rounded:

<span class="badge r-pill bg-accent text-white">.badge .r-pill</span>

```html
<span class="badge r-pill bg-accent text-white">.badge .r-pill</span>
```

## Outline badge

<span class="badge-outline text-blue b-blue">.badge-outline</span>

```html
<span class="badge-outline text-blue b-blue">.badge-outline</span>
```

- `.badge-outline` removes background
- Use border and text color utilities to define appearance

## Notification dot

`.badge-dot` creates a small circular indicator:

<div class="card w-fit p-4 pr-4">
<span>New mail <span class="badge-dot bg-green">&nbsp;</span></span>
</div>

```html
<span>New mail <span class="badge-dot bg-green">&nbsp;</span></span>
```

For precise placement, wrap with a positioned parent:

<div class="card w-fit p-4 pr-6">
<span class="pos-rel">
  New mail
  <span class="pos-abs top-0 right-0 mv-x-120% badge-dot bg-green"></span>
</span>
</div>

```html
<span class="pos-rel">
  New mail
  <span class="pos-abs top-0 right-0 mv-x-120% badge-dot bg-green"></span>
</span>
```