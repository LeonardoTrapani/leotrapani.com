import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime()
  );
}

export function postUrl(post: Post): string {
  return `/blog/${post.id}`;
}

const longDate = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

const shortDate = new Intl.DateTimeFormat("en", {
  month: "2-digit",
  day: "2-digit",
  timeZone: "UTC",
});

export const formatLongDate = (date: Date): string => longDate.format(date);

export const formatShortDate = (date: Date): string => shortDate.format(date);
