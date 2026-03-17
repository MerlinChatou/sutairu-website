// sutairu.config.js

const shades = Array.from({ length: 21 }, (_, i) => i * 50);
const colors = ["yellow", "orange", "red", "pink", "purple", "blue", "cyan", "green", "white", "gray", "black", "page", "container", "subtle"];
const allPossibleBgClasses = colors.flatMap((color) => {
  // Combine both standard and hover maps into one array and return it
  return [
    ...shades.map((shade) => `bg-${color}-${shade}`),
    ...shades.map((shade) => `hover:bg-${color}-${shade}`),
    ...shades.map((shade) => `b-${color}-${shade}`),
  ];
});

export default {
  watch: "./src, ./static",
  //watch: "/home/philippe/projects/merlin-chatou/sutairu/website/src/routes/docs/v1.0.0/__tests__/core/palette/",
  themes: "default,swiss,adjuvio",
  output: "./src/lib/generated/sutairu.css",
  ext: "html,svelte",
  verbose: false,
  //label: '',
  //safelist: [...allPossibleBgClasses],
};
