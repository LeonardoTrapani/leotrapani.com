import * as Cloudflare from "@alchemy.run/cloudflare";
import * as GitHub from "@alchemy.run/github";
import * as Alchemy from "alchemy";
import * as Output from "alchemy/Output";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

// Set by the CI workflow on pull_request events.
const pullRequest = process.env.PULL_REQUEST
  ? Number(process.env.PULL_REQUEST)
  : undefined;

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
    providers: Layer.mergeAll(Cloudflare.providers(), GitHub.providers()),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const site = yield* Website;

    if (pullRequest) {
      // A stable logical ID keeps one comment per PR, edited on every push.
      yield* GitHub.Comment("PreviewComment", {
        owner: "LeonardoTrapani",
        repository: "leotrapani.com",
        issueNumber: pullRequest,
        body: Output.interpolate`
          **Preview:** ${site.url}

          Built from ${process.env.COMMIT_SHA?.slice(0, 7) ?? "local"}.
        `,
      });
    }

    return { url: site.url };
  })
);
