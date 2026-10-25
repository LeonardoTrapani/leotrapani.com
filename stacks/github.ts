import * as Cloudflare from "@alchemy.run/cloudflare";
import * as GitHub from "@alchemy.run/github";
import * as Alchemy from "alchemy";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";

const owner = "LeonardoTrapani";
const repository = "leotrapani.com";

/**
 * Mints the scoped Cloudflare token GitHub Actions deploys with and stores it
 * as repository secrets. Deploy once with a profile that can create API tokens:
 *
 *   pnpm alchemy deploy --config stacks/github.ts --profile leotrapani-admin
 *
 * Re-run it to rotate the token or change its permissions.
 */
export default Alchemy.Stack(
  "LeoTrapaniGitHub",
  {
    providers: Layer.mergeAll(Cloudflare.providers(), GitHub.providers()),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const { accountId } = yield* yield* Cloudflare.CloudflareEnvironment;

    const token = yield* Cloudflare.ApiToken.AccountApiToken("CIToken", {
      accountId,
      policies: [
        {
          effect: "allow",
          permissionGroups: [
            "Workers Scripts Write",
            // The Alchemy state store binds a Secrets Store secret on every run.
            "Secrets Store Write",
            // Web Analytics (RUM) sites are managed under account settings;
            // listing them needs Read, which Write does not include.
            "Account Settings Read",
            "Account Settings Write",
            "Workers Tail Read",
          ],
          resources: { [`com.cloudflare.api.account.${accountId}`]: "*" },
        },
        {
          effect: "allow",
          // Production manages the leotrapani.com zone, its DNS records, the
          // Worker custom domain and the www redirect rule. Cloudflare's
          // Write groups do not include Read, so both are listed.
          permissionGroups: [
            "Zone Read",
            "Zone Write",
            "DNS Read",
            "DNS Write",
            "Workers Routes Read",
            "Workers Routes Write",
            "Dynamic URL Redirects Read",
            "Dynamic URL Redirects Write",
          ],
          resources: {
            [`com.cloudflare.api.account.${accountId}`]: {
              "com.cloudflare.api.account.zone.*": "*",
            },
          },
        },
      ],
    });

    yield* GitHub.Secret("CloudflareApiToken", {
      owner,
      repository,
      name: "CLOUDFLARE_API_TOKEN",
      value: token.value,
    });

    yield* GitHub.Secret("CloudflareAccountId", {
      owner,
      repository,
      name: "CLOUDFLARE_ACCOUNT_ID",
      value: Redacted.make(accountId),
    });
  })
);
