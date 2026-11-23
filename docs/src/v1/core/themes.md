# Themes

Sutairu comes with a collection of curated themes, each defining a unique visual identity through distinct color palettes, typography scales, and UI spacing.

## Available Themes

| Theme | Description |
| :--- | :--- |
| `sutairu` | The default balanced look: modern, neutral, and highly legible. |
| `swiss` | High-contrast, bold typography, and a grid-focused aesthetic inspired by International Typographic Style. |
| `adjuvio` | A softer, professional palette designed for complex dashboard interfaces and readability. |


## Configuration

By default, `Sutairu` only loads the core sutairu theme to keep your CSS bundle size minimal. To enable additional themes, you must register them in your configuration or via the CLI.

### CLI option
Pass a comma-separated list to the `-t` flag:

```bash
sutairu -t "sutairu,swiss,adjuvio"
```

### Configuration file

You can provide themes as a comma-separated string:

```js
// sutairu.config.js

export default {
  // ...
  themes: "sutairu,swiss,adjuvio",
  // ...
};
```

## Set the theme
Sutairu uses the `data-theme` attribute on the `<html>` element to toggle between registered themes.

```html
<html data-theme="swiss"></html>
```

### Default Behavior

If the `data-theme` attribute is missing or contains an unregistered theme name, Sutairu automatically falls back to the default sutairu theme.

### Instant Switching

Because Sutairu themes are composed entirely of CSS Variables, switching themes is nearly instantaneous. There are no expensive JavaScript re-renders or layout shifts; the browser simply updates the variable values globally.

## Custom Themes

If the built-in themes don't fit your project, you can create a fully custom theme by defining your own CSS variable map.

### Creating a Theme

The fastest way to start is to use the default theme as a template:
1. Copy the default theme folder from the Sutairu repository: `/src/themes/sutairu`.
2. Rename the folder and the primary selectors to your new theme name.
3. Customize the CSS variables (colors, scales, shadows) to match your design.

### Loading Custom Themes

Once your CSS file is ready, ensure it is imported into your main entry point after the core Sutairu styles:

```css
/* main.css */
@import "/styles/sutairu.css";
@import "/styles/my-custom-theme.css";
```

You can then activate it just like a built-in theme:
```html
<html data-theme="my-custom-theme">
```
