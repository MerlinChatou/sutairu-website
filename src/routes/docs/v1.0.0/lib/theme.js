import { writable, derived } from 'svelte/store';
import { browser } from '$app/env';

export const THEMES = ['sutairu', 'swiss', 'adjuvio'];
const DEFAULT_THEME = 'sutairu';

function getInitialTheme() {
  if (!browser) return DEFAULT_THEME;
  return localStorage.getItem('theme') || DEFAULT_THEME;
}

/** Permanent theme (persisted)
 *  @type {import('svelte/store').Writable<string>} */
export const theme = writable(getInitialTheme());

/** Temporary theme (hover preview), null = no preview
 *  @type {import('svelte/store').Writable<string | null>} */
export const previewTheme = writable(null);

/** What is actually displayed */
export const activeTheme = derived(
  [theme, previewTheme],
  ([$theme, $previewTheme]) => $previewTheme ?? $theme
);

if (browser) {
  theme.subscribe((value) => {
    localStorage.setItem('theme', value);
  });

  activeTheme.subscribe((value) => {
    document.documentElement.dataset.theme = value;
  });
}