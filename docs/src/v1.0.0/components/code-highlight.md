# Code Highlighting

## Highlight.js

**Sutairu** uses [highlight.js](https://highlightjs.org/) to provide syntax highlighting in code blocks. 
- **highlight.js** parses and applies syntax tokens  
- **Sutairu** provides the color theme via generated CSS  

To get started, install highlight.js:

```bash
npm install highlight.js
```

Then import it in your JavaScript file:

```js
import hljs from 'highlight.js';
```

Finally, initialize highlighting:

```js
hljs.highlightAll();
```

## Sutairu Theme Colors

**Sutairu** includes custom highlight.js colors that match its themes. When the Sutairu engine detects any class like `language-*` (e.g. `language-js`, `language-css`),, it automatically adds syntax highlighting styles to your CSS. This applies custom colors consistent with your Sutairu theme.

## Example

<pre><code class="language-js">const hello = "world";</code></pre>

```html
<pre><code class="language-js">const hello = "world";</code></pre>
```