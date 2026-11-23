// sutairu.config.js

export default {
  watch: "./src, ./static",
  themes: "sutairu,adjuvio,amelie,swiss",
  output: "./src/routes/docs/v1/lib/generated/sutairu-v1.css",
  ext: "html,svelte,md",
  verbose: false,
  //label: '',
  //safelist: [...allPossibleBgClasses],
  themesJson: "./src/routes/docs/v1/lib/generated/themes-v1.json",
};
