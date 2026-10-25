# [leotrapani.com](https://leotrapani.com)

Personal site and blog of Leonardo Trapani. Plain text, one column, nothing in the way.

## Stack

- [Astro](https://astro.build), fully static output
- [Alchemy](https://alchemy.run) + [Effect](https://effect.website) to deploy to Cloudflare Workers static assets
- Plain CSS with system light/dark mode, Inter and Newsreader via Fontsource

## What's inside

- Home with bio, work, projects, writing and contact links
- Blog from Markdown files in `src/content/blog`, with Shiki code highlighting
- RSS feed at `/rss.xml`, sitemap, and [`/llms.txt`](https://llmstxt.org)
- Open Graph images rendered at build time with Satori

## Development

Requires Node.js 24.11.1+ and pnpm.

```bash
pnpm install
pnpm dev          # http://localhost:1408
pnpm check        # type-check Astro and TypeScript files
pnpm build        # static build into dist/
pnpm format:write # format with Prettier
```

### Writing a post

Add a Markdown file to `src/content/blog/`. The file name becomes the URL (`/blog/<file-name>`).

```md
---
title: "Post title"
description: "One-sentence summary used in lists, RSS and previews."
createdAt: "2026-10-25"
draft: false
---
```

### Deploying

The Cloudflare stack lives in `alchemy.run.ts`.

```bash
pnpm alchemy profile edit --add Cloudflare # once, to connect your account
pnpm deploy
```

## License

Licensed under the [MIT license](./LICENSE). You're free to reuse the code; please remove all personal information before publishing your own site.
