# Stack Utility

The `stack` utility is a layout-driven pattern that allows you to layer multiple elements on top of one another without the complexity of `position: absolute`. It leverages CSS Grid to create a single coordinate space where all children are pinned to the same area.


## Basic Usage

Apply the `stack` class to a container. All direct children will automatically overlap in the center of the container.

<div class="stack max-w-300px r-4 ov-hidden">
  <img src="/images/vertical-landscape.jpg" class="of-cover ar-1" />  
  <div class="stripes-accent/60 w-full h-full"></div>  
  <h1 class="text-white h1 text-center">Stacked elements</h1>
</div>


```html
<div class="stack">
  <img src="/images/vertical-landscape.jpg" class="of-cover" />  
  <div class="stripes-accent/60 w-full h-full"></div>  
  <h1 class="text-white">Stacked elements</h1>
</div>
```

