# Code Highlighting

## Highlight.js

**Sutairu** uses [highlight.js](https://highlightjs.org/) to provide syntax highlighting in code blocks. To get started, install highlight.js:

```bash
npm install highlight.js
```

Then import it in your JavaScript file:

```js
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // or any theme
```

Finally, initialize highlighting:

```js
hljs.highlightAll();
```





## Sutairu Theme Colors

**Sutairu** includes custom highlight.js colors that match its themes. To use them, import the `code-highlight` package:

```css
@import "@merlin-chatou/sutairu-extras/code-highlight/style";
```


This applies custom colors coherent with your Sutairu theme.