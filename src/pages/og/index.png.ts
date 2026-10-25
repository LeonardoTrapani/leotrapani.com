import type { APIRoute } from "astro";

import { renderOgImage } from "@/lib/og";

export const GET: APIRoute = async () => {
  const png = await renderOgImage({
    title: "Technical founder and startup engineer.",
    subtitle: "leotrapani.com",
    accent: true,
  });
  return new Response(png, { headers: { "Content-Type": "image/png" } });
};
