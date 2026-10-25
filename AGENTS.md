# AI Agent Guidelines for leotrapani.com

Personal site and blog of Leonardo Trapani (@leo_trapani). The design goal is calm and minimal: one narrow column, text first, generous whitespace, no cards, icons or badges.

## Stack

- **Framework**: Astro 7, `output: "static"` (every page is prerendered)
- **Deployment**: Cloudflare Workers static assets via Alchemy v2 (`alchemy.run.ts`, `Cloudflare.Website.Astro`). Alchemy injects the Cloudflare adapter; never add an `adapter` to `astro.config.ts`.
- **Styling**: plain CSS. Global tokens in `src/styles/global.css`, component styles in scoped `<style>` blocks. Light/dark follows `prefers-color-scheme`.
- **Content**: Astro content collection `blog` (Markdown in `src/content/blog`, schema in `src/content.config.ts`)
- **Package manager**: pnpm, Node.js 24.11.1+

## Project structure

```
alchemy.run.ts          Cloudflare stack (Effect program); posts the PR preview comment in CI
dns.ts                  DNS records for the leotrapani.com zone (prod stage only)
stacks/github.ts        One-off stack that mints the CI Cloudflare token into GitHub secrets
.github/workflows/ci.yml Checks, PR previews (pr-N stages), prod deploy from main, preview cleanup
astro.config.ts         Astro config (site URL, sitemap, Shiki themes)
public/                 Static files; _redirects holds legacy URL redirects
src/
├── components/         SiteHeader, BackLink, SiteFooter, Section, EntryList, PostList; home/ holds the Intro and Now prose (also rendered into llms.txt)
├── content/blog/       Blog posts (Markdown)
├── content.config.ts   Blog collection schema
├── data/               site.ts, work.ts, projects.ts: the editable content
├── layouts/            BaseLayout (head, meta, OG tags, header, footer)
├── lib/                posts.ts (queries, dates), og.ts (Satori OG renderer)
├── pages/              Routes, plus rss.xml, llms.txt and og/*.png endpoints
└── styles/global.css   Design tokens and base styles
```

## Common tasks

- **Edit bio or sections**: intro and Now prose in `src/components/home/` (llms.txt renders them too), layout in `src/pages/index.astro`, structured data in `src/data/`.
- **Add a post**: new `.md` file in `src/content/blog/` with `title`, `description`, `createdAt` (`YYYY-MM-DD`), optional `summary` (short line for the home Writing column and the OG card), `updatedAt`, `pinned`, `draft`. Posts are served at `/blog/<file-name>`. Drafts show up in `pnpm dev` only; production builds skip them.
- **Retire a URL**: add a line to `public/_redirects`.
- **Change DNS**: edit `dns.ts`; the prod deploy from `main` applies it. Keep the Rediredge wildcard DNS-only. The apex and `www` (301 to the apex) belong to the Website's custom domain in `alchemy.run.ts`.

## Commands

```bash
pnpm dev          # dev server on port 1408
pnpm check        # astro check (types for .astro and .ts)
pnpm build        # static build into dist/
pnpm format:write # Prettier (with prettier-plugin-astro)
pnpm deploy       # alchemy deploy (needs a Cloudflare profile)
```

Run `pnpm check`, `pnpm build` and `pnpm format:check` before committing.

## Code guidelines

- Type-safe TypeScript; descriptive names over comments. Comment only the non-obvious "why".
- No emojis in code, comments or commit messages.
- Keep the design restrained: reuse the tokens in `global.css` (`--foreground`, `--strong`, `--muted`, `--border`) instead of new colors, and prefer whitespace over borders to separate sections.
- Ship zero client JavaScript unless a feature truly needs it.
