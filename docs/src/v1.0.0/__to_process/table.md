# Tables

Sutairu provides minimal default styling for tables through the `core` layer. Styles are designed to remain lightweight, inherit theme variables, and avoid opinionated layout constraints.

<div class="card w-fit p-3">
<table class="w-full m-0">
  <thead>
    <tr>
      <th>#</th>
      <th>Columns</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>John</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Smith</td>
    </tr>
  </tbody>
</table>
</div>

```html
<table class="w-full">
  <thead>
    <tr>
      <th>#</th>
      <th>Columns</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>John</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Smith</td>
    </tr>
  </tbody>
</table>
```

## Striped tables

Add `.striped` to `<tbody>` to enable alternating row backgrounds.

```html
<tbody class="striped"></tbody>
```

Behavior:

- Odd rows:
  - user defined background color `bg-<color>`
  - fallback: accent-based translucent color `bg-accent` + `bg-opacity-10`

- Even rows:
  - user defined foreground color `fg-<color>`
  - fallback: `transparent`

All nested elements reset background to avoid cascade conflicts.

<div class="card w-fit p-3">
  <table class="w-100 ta-center m-0">
    <thead class="bg-green">
      <tr>
        <th>#</th>
        <th>Striped</th>
      </tr>
    </thead>
    <tbody class="striped bg-green bg-opacity-20 fg-purple text-body">
      <tr>
        <th>1</th>
        <td>Odd</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Even</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Odd</td>
      </tr>
      <tr>
        <th>4</th>
        <td>Even</td>
      </tr>
      <tr>
        <th>5</th>
        <td>Odd</td>
      </tr>
    </tbody>
  </table>
</div>


```html
<table>
  <thead class="bg-green">
    
  </thead>
  <tbody class="striped bg-green bg-opacity-20 fg-purple text-body">

  </tbody>
</table>    
```