import type { APIRoute } from "astro";

import { SITE } from "@/data/site";
import { renderOgImage } from "@/lib/og";

export const GET: APIRoute = async () => {
  const png = await renderOgImage({
    eyebrow: "leotrapani.com",
    title: SITE.name,
    subtitle: "Building startups in Italy.",
    accent: true,
  });
  return new Response(png, { headers: { "Content-Type": "image/png" } });
};
