import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import { headingLinks } from "./src/lib/heading-links";

// Deployed by Cloudflare.Website.Astro (see alchemy.run.ts), which injects the
// Cloudflare adapter, so no adapter is declared here.
export default defineConfig({
  site: "https://leotrapani.com",
  output: "static",
  trailingSlash: "never",
  build: {
    // Emit /blog/slug.html so posts keep their slash-less URLs on Cloudflare.
    format: "file",
  },
  integrations: [sitemap()],
  markdown: {
    processor: satteri({ hastPlugins: [headingLinks] }),
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
});
