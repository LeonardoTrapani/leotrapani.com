import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

import { SITE } from "@/data/site";
import { getPosts, postUrl } from "@/lib/posts";

export const GET: APIRoute = async (context) => {
  const posts = await getPosts();

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.createdAt,
      link: postUrl(post),
    })),
    customData: `<language>${SITE.locale}</language>`,
  });
};
