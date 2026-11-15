# Overflow 

Control how content handles overflow behavior relative to its container using concise atomic classes. Both full (`overflow`) and shorthand (`ov`) prefixes are supported, along with directional axes and importance modifiers.


## Syntax

```text
[!]{overflow|ov}[-x|-y]-{value}
```

* `!` *(Optional)*: Prepends an importance flag (`!important`).
* `overflow` or `ov`: Base utility prefix.
* `-x` or `-y` *(Optional)*: Restricts the rule to the horizontal or vertical axis. Omit to apply to both.
* `{value}`: The desired overflow behavior (see table below).


## Supported Values

| Value | CSS Property Output | Description |
| --- | --- | --- |
| `auto` | `overflow: auto;` | Clips content and adds scrollbars only when content overflows. |
| `hidden` | `overflow: hidden;` | Clips overflowing content without rendering scrollbars. |
| `clip` | `overflow: clip;` | Clips content at the padding box boundary (disables all scrolling). |
| `visible` | `overflow: visible;` | Leaves overflowing content unclipped outside the element box. |
| `scroll` | `overflow: scroll;` | Always renders scrollbars regardless of whether content overflows. |


## Examples

<div class="card bg-subtle mt-4 p-4 max-w-xs ov-visible ws-nowrap">
My ego is way too big for this tiny container and I strictly refuse to be contained by your CSS borders!
</div>
<div class="card bg-subtle mt-4 p-4 max-w-xs ov-hidden ws-nowrap">
Nothing to see here, move along! Everything is totally fine and definitely not awkwardly cut off mid-sentence.
</div>
<div class="card bg-subtle mt-4 p-4 max-w-xs ov-scroll ws-nowrap">
Congratulations! You unlocked the legendary horizontal scrollbar. Keep scrolling right to claim your free pizza! 🍕
</div>
<div class="card bg-subtle mt-4 p-4 max-w-xs ov-x-scroll ws-nowrap">
I only throw a horizontal scrollbar tantrum when my text is too wide to fit, but hey, at least you get to swipe sideways like a VIP!
</div>
<div class="card bg-subtle mt-4 p-4 max-w-xs ov-auto ws-nowrap">
I only show scrollbars when you actually need them, unlike my overachieving show-off cousin ov-scroll.
</div>

```html
<div class="ws-nowrap ov-visible">
My ego is way too big for this tiny container and I strictly refuse to be contained by your CSS borders!
</div>
<div class="ws-nowrap ov-hidden">
Nothing to see here, move along! Everything is totally fine and definitely not awkwardly cut off mid-sentence.
</div>
<div class="ws-nowrap ov-scroll">
Congratulations! You unlocked the legendary horizontal scrollbar. Keep scrolling right to claim your free pizza! 🍕
</div>
<div class="ws-nowrap ov-x-scroll">
I only throw a horizontal scrollbar tantrum when my text is too wide to fit, but hey, at least you get to swipe sideways like a VIP!
</div>
<div class="ws-nowrap ov-auto">
I only show scrollbars when you actually need them, unlike my overachieving show-off cousin ov-scroll.
</div>
```
