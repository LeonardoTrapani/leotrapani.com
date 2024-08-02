import { MetadataRoute } from "next";
import { getBlogPosts } from "~~/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultPages = [
    {
      url: "https://leotrapani.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://leotrapani.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ] satisfies MetadataRoute.Sitemap;

  const postSlugs = getBlogPosts();

  const sitemap = [
    ...defaultPages,
    ...postSlugs.map((e: any) => ({
      url: `https://leotrapani.com/blog/${e.slug}`,
      lastModified: e.modified_at,
      changeFrequency: "daily" as "daily",
      priority: 0.8,
    })),
  ] satisfies MetadataRoute.Sitemap;

  return sitemap;
}