# Sutairu Website (`sutairu.dev`)

The official website and documentation source for **Sutairu** (`sutairu.dev`), a lightweight, high-performance utility CSS framework with real-time file scanning, atomic CSS generation, themes, and on-demand compiled icons.

This repository (`sutairu-website`) contains **only the website**—the core CSS compiler CLI and interactive local playground live in the main [`sutairu`](https://github.com/MerlinChatou/sutairu) repository (`@merlin-chatou/sutairu`).


## Related Repositories

* **CSS Framework (`sutairu`):** [github.com/MerlinChatou/sutairu](https://github.com/MerlinChatou/sutairu) — Core CLI (`sutairu`), local playground (`sutairu-play`), themes, and icon sources.


## Local Development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

*(If your project uses `pnpm`, `yarn`, or `bun`, substitute your preferred package manager.)*

### Building for Production

Generate the production build and preview it locally:

```bash
npm run build
npm run preview
```



## Working with Sutairu in This Repo

Because this repository is the website itself, it consumes `@merlin-chatou/sutairu` to style its own pages and components.

```bash
npm install -D @merlin-chatou/sutairu
```

Typical workflows when updating site styles or testing framework features:

```bash
# Run the Sutairu CSS compiler
npx sutairu

# Launch the interactive local playground
npx sutairu-play
```

See the [`sutairu` README](https://www.google.com/search?q=https://github.com/MerlinChatou/sutairu%23readme) for full details on `sutairu.config.js`, CLI flags (`--watch`, `--output`, `--themes`, `--safelist`, `--theme-json`, `--ext`, `--verbose`, `--label`), and theme configuration.



## Contributing

Contributions to the `sutairu.dev` website—such as documentation improvements, examples, or UI refinements—are welcome via pull requests on [`MerlinChatou/sutairu-website`](https://github.com/MerlinChatou/sutairu-website).

* **Framework issues & features:** Open an issue or PR in [`MerlinChatou/sutairu`](https://github.com/MerlinChatou/sutairu).
* **Adding new icons:** Follow the [icon contribution guide](https://github.com/MerlinChatou/sutairu/blob/main/src/icons/README.md) in the framework repository.


## License

[MIT](https://opensource.org/licenses/MIT)