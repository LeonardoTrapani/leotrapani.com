import type { satteri } from "@astrojs/markdown-satteri";
import GithubSlugger from "github-slugger";

type HastPlugin = NonNullable<
  NonNullable<Parameters<typeof satteri>[0]>["hastPlugins"]
>[number];

/**
 * Wraps each post heading in a link to itself so sections can be shared.
 * Sets the id up front; Astro's own heading-ids pass keeps an existing id.
 */
export const headingLinks: HastPlugin = () => {
  const slugger = new GithubSlugger();
  return {
    name: "heading-links",
    element: {
      filter: ["h2", "h3"],
      visit(node, ctx) {
        const text = ctx.textContent(node);
        const id = slugger.slug(text);
        ctx.replaceNode(node, {
          type: "element",
          tagName: node.tagName,
          properties: { id },
          children: [
            {
              type: "element",
              tagName: "a",
              properties: { href: `#${id}` },
              children: [{ type: "text", value: text }],
            },
          ],
        });
      },
    },
  };
};
