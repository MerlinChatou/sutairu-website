# Scale Utilities

Scale utilities use a composed transform stack.


They mutate the `--scale` CSS variable, which is consumed by the shared `transform` declaration.

## How It Works

All transform-related utilities mutate CSS variables.
A single composed `transform` declaration reads those variables.

<div class="border my-5 w-fit p-2 transform rotate-30 scale-80">Rotate and scale</div>

```html
<div class="transform rotate-30 scale-80">Rotate and scale</div>
```

Scaling combines safely with:

* `rotate-*`
* `translate-*`
* any other transform utility using variables

No transform overrides occur.



## Base Scale Classes

| Class       | CSS Variable     | Result       |
| ----------- | ---------------- | ------------ |
| `scale-50`  | `--scale: 0.5;`  | 50% size     |
| `scale-75`  | `--scale: 0.75;` | 75% size     |
| `scale-80`  | `--scale: 0.8;`  | 80% size     |
| `scale-90`  | `--scale: 0.9;`  | 90% size     |
| `scale-95`  | `--scale: 0.95;` | 95% size     |
| `scale-98`  | `--scale: 0.98;` | 98% size     |
| `scale-100` | `--scale: 1;`    | Default size |
| `scale-102` | `--scale: 1.02;` | 102% size    |
| `scale-105` | `--scale: 1.05;` | 105% size    |
| `scale-110` | `--scale: 1.1;`  | 110% size    |
| `scale-120` | `--scale: 1.2;`  | 120% size    |
| `scale-125` | `--scale: 1.25;` | 125% size    |
| `scale-150` | `--scale: 1.5;`  | 150% size    |
| `scale-200` | `--scale: 2;`    | 200% size    |

Each class can be combined with `hover:scale-*`:

<div class="bg-accent text-white m-4 r-3 w-fit p-2 transform hover:scale-150">Hover me</div>


```html
<div class="transform hover:scale-150">Hover me</div>
```


## Transition

Add a transition to get smooth scaling with `tr-transform` and `tr-*` in milliseconds:

<div class="bg-accent text-white m-4 r-3 w-fit p-2 transform hover:scale-150 tr-transform tr-500">Hover me</div>

```html
<div class="transform hover:scale-150 tr-transform tr-500">Hover me</div>
```



## Transform Order

The transform order is fixed: 

```
translate → scale → rotate
```

