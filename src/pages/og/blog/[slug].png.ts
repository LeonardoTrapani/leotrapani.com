import type { APIRoute } from "astro";

import { renderOgImage } from "@/lib/og";
import { formatLongDate, getPostPaths, type Post } from "@/lib/posts";

export const getStaticPaths = getPostPaths;

export const GET: APIRoute<{ post: Post }> = async ({ props }) => {
  const png = await renderOgImage({
    title: props.post.data.title,
    subtitle: formatLongDate(props.post.data.createdAt),
  });
  return new Response(png, { headers: { "Content-Type": "image/png" } });
};
