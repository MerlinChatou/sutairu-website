# Rotation Utilities

Rotation utilities use the same composed transform stack as scale utilities.

They mutate the `--rotate` CSS variable, which is consumed by the shared `transform` declaration.


## How It Works

All transform-related utilities mutate CSS variables.
A single composed `transform` declaration reads those variables.

<div class="border my-5 w-fit p-2 transform rotate-30 scale-80">Rotate and scale</div>

```html
<div class="transform rotate-30 scale-80">Rotate and scale</div>
```

Rotation combines safely with:

* `scale-*`
* `translate-*`
* any other transform utility using variables

No transform overrides occur.



## Base Rotation Classes

| Class        | CSS Variable        | Result             |
| ------------ | ------------------- | ------------------ |
| `rotate-0`   | `--rotate: 0deg;`   | No rotation        |
| `rotate-15`  | `--rotate: 15deg;`  | 15° rotation       |
| `rotate-30`  | `--rotate: 30deg;`  | 30° rotation       |
| `rotate-45`  | `--rotate: 45deg;`  | 45° rotation       |
| `rotate-60`  | `--rotate: 60deg;`  | 60° rotation       |
| `rotate-90`  | `--rotate: 90deg;`  | Quarter turn       |
| `rotate-120` | `--rotate: 120deg;` | 120° rotation      |
| `rotate-135` | `--rotate: 135deg;` | 135° rotation      |
| `rotate-180` | `--rotate: 180deg;` | Half turn          |
| `rotate-270` | `--rotate: 270deg;` | Three-quarter turn |
| `rotate-360` | `--rotate: 360deg;` | Full turn          |


## Hover Rotation


Each class can be combined with `hover:rotate-*`:

<div class="bg-accent text-white m-4 r-3 w-fit p-2 transform hover:rotate-90">Hover me</div>


```html
<div class="transform hover:rotate-90">Hover me</div>
```



## Transition

Add a transition to get smooth scaling with `tr-transform` and `tr-*` in milliseconds:

<div class="bg-accent text-white m-4 r-3 w-fit p-2 transform hover:rotate-90 tr-transform tr-500">Hover me</div>

```html
<div class="transform hover:rotate-90 tr-transform tr-500">Hover me</div>
```



## Transform Order

The transform order is fixed:

```
translate → scale → rotate
```

Because rotation is applied **after scaling**, scaling affects the rotated element’s size.

