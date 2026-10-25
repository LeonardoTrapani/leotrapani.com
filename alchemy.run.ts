import * as Cloudflare from "@alchemy.run/cloudflare";
import * as GitHub from "@alchemy.run/github";
import * as Alchemy from "alchemy";
import * as Output from "alchemy/Output";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

import { DNS_RECORDS } from "./dns";

const DOMAIN = "leotrapani.com";

// Set by the CI workflow on pull_request events.
const pullRequest = process.env.PULL_REQUEST
  ? Number(process.env.PULL_REQUEST)
  : undefined;

export default Alchemy.Stack(
  "LeoTrapani",
  {
    providers: Layer.mergeAll(Cloudflare.providers(), GitHub.providers()),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const stage = yield* Alchemy.Stage;
    // Only production serves the real domain; PR previews stay on workers.dev.
    const site = yield* Cloudflare.Website.Astro("Website", {
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
      // www 301s to the apex at the edge, before the Worker runs.
      domain:
        stage === "prod"
          ? { name: DOMAIN, redirects: [`www.${DOMAIN}`] }
          : undefined,
    });

    if (stage === "prod") {
      const zone = yield* Cloudflare.Zone.Zone("Zone", { name: DOMAIN });

      for (const [id, record] of Object.entries(DNS_RECORDS)) {
        yield* Cloudflare.DNS.Record(`Dns${id}`, {
          zoneId: zone.zoneId,
          ...record,
        });
      }

      // Cookieless Web Analytics; Cloudflare injects the beacon at the edge.
      yield* Cloudflare.Rum.Site("WebAnalytics", {
        zoneTag: zone.zoneId,
        autoInstall: true,
      });

      return { url: site.url, nameServers: zone.nameServers };
    }

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
