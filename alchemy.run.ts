import * as Cloudflare from "@alchemy.run/cloudflare";
import * as Alchemy from "alchemy";
import * as Effect from "effect/Effect";

export const Website = Cloudflare.Website.Astro("Website", {
  astro: { output: "static" },
  // OG images are rendered with native resvg bindings, which need Node.
  prerenderEnvironment: "node",
  assets: { notFoundHandling: "404-page" },
  // Only these inputs affect the build; unchanged sources skip the rebuild.
  memo: {
    include: [
      "src/**",
      "public/**",
      "package.json",
      "pnpm-lock.yaml",
      "astro.config.ts",
      "tsconfig.json",
    ],
  },
});

export default Alchemy.Stack(
  "LeoTrapani",
  {
    providers: Cloudflare.providers(),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const site = yield* Website;
    return { url: site.url };
  })
);
