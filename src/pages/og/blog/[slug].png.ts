import type { APIRoute, GetStaticPaths } from "astro";

import { renderOgImage } from "@/lib/og";
import { formatLongDate, getPosts, type Post } from "@/lib/posts";

export const getStaticPaths = (async () => {
  const posts = await getPosts();
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ post: Post }> = async ({ props }) => {
  const png = await renderOgImage({
    title: props.post.data.title,
    subtitle: formatLongDate(props.post.data.createdAt),
  });
  return new Response(png, { headers: { "Content-Type": "image/png" } });
};
