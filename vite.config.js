import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
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
