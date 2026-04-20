# Tables

Sutairu provides minimal default styling for tables. Styles are designed to remain lightweight, inherit theme variables, and avoid opinionated layout constraints.

<div class="card w-fit p-3">
<table class="m-0">
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
<table>
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

Sutairu leverages state modifiers to create striped tables (also known as "zebra stripes"). Instead of a specific table-only utility, you can use the `odd:` or `even:` modifiers on the `<tbody>` or individual `<tr>` tags. 

To create a striped effect, apply a background color utility prefixed with `odd:` or `even:` to the `<tbody>` element. This will automatically style the corresponding child rows.

| Modifier | Effect |
| :--- | :--- |
| **`odd:bg-{color}`** | Applies the background to the 1st, 3rd, 5th rows, etc. |
| **`even:bg-{color}`** | Applies the background to the 2nd, 4th, 6th rows, etc. |

### Example

Using `odd:bg-accent/5` creates a subtle, modern stripe using your theme's accent color at 5% opacity.


<div class="card w-fit p-3">
<table class="text-center m-0">
  <thead>
    <tr>
      <th>#</th>
      <th>Striped</th>
    </tr>
  </thead>
  <tbody class="odd:bg-accent/5">
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
<table class="text-center">
  <thead>
    <tr>
      <th>#</th>
      <th>Striped</th>
    </tr>
  </thead>
  <tbody class="odd:bg-accent/5">
    <tr>
      <th>1</th>
      <td>Odd</td>
    </tr>    
    <tr>
      <th>2</th>
      <td>Even</td>
    </tr>

    ...
    
  </tbody>
</table>   
```