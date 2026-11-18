# Get Started with Sutairu

Install Sutairu, configure your project, and start styling in minutes.


## Install

Install Sutairu in your project as a development dependency using npm:

```bash
npm install -D @merlin-chatou/sutairu
```

## Configure Your Project

Create a `sutairu.config.js` file in the root folder of your project. This tells Sutairu which folders to watch for utility classes and where to save the generated CSS file.

```javascript
// sutairu.config.js

export default {
  watch: "./src",                     // Folder(s) containing your HTML/components
  output: "./dist/sutairu.css",       // Where the generated CSS will be saved
  ext: "html,js,jsx,ts,tsx,svelte",   // File extensions to scan
};
```

> **Tip:** Sutairu reads this configuration file once when it starts. If you make changes to `sutairu.config.js`, remember to restart the compiler.

## Link the Generated CSS

Include the output CSS file in the `<head>` of your main HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Sutairu App</title>
  <!-- Link to the output file defined in your config -->
  <link rel="stylesheet" href="./dist/sutairu.css">
</head>
<body>
  <h1 class="fs-4xl fw-bold text-blue-600">Hello, Sutairu!</h1>
</body>
</html>
```

##  Run the Compiler

Start Sutairu using `npx` to scan your files and generate your CSS automatically whenever you save changes:

```bash
npx sutairu
```


## Explore More Options & Resources

- **CLI Options & Configuration:** A complete list of command-line flags and configuration options is available on the [Sutairu GitHub Repository](https://github.com/MerlinChatou/sutairu).
- **Classes, Demos & Docs:** Explore the full documentation and demos on the [Sutairu Home Page](/docs/v1.0.0/).
- **Interactive Playground:** Experiment with utilities live in your browser in the [Live Playground](/docs/v1.0.0/playground).
- **Icon Registry:** Browse all available embedded icons in the [Icons Registry](/docs/v1.0.0/icons).
