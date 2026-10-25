/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  "*.{js,mjs,ts,astro,css,md,json}": "prettier --write",
};

export default lintStagedConfig;
