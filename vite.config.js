import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  plugins: [
    sveltekit({
      // SvelteKit options (previously inside kit: { ... } in svelte.config.js)
      adapter: adapter(),

      // Preprocessors and extensions (previously in svelte.config.js)
      extensions: ['.svelte', '.md'],
      preprocess: [
        mdsvex({
          extensions: ['.md'],
          // @ts-expect-error - mdsvex types mismatch with modern rehype plugins
          rehypePlugins: [rehypeSlug],
        }),
      ],
    })
  ],
  css: {
    devSourcemap: true // This is the key for DevTools clarity
  },
  ssr: {
    noExternal: ['@merlin-chatou/sutairu']
  },
  /*
  server: {
    fs: {
      // Allow Vite to serve files from the parent directory (the monorepo root)
      allow: ['..']
    }
  },  
  optimizeDeps: {
    // Tell Vite NOT to pre-bundle this package
    exclude: ['@merlin-chatou/sutairu']
  }
  */
});