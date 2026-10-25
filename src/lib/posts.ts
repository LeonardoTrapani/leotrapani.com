import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export async function getPosts(): Promise<Post[]> {
  // Drafts are built in dev so they can be previewed and linked locally.
  const posts = await getCollection(
    "blog",
    ({ data }) => import.meta.env.DEV || !data.draft
  );
  return posts.sort(
    (a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime()
  );
}

export async function getPinnedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.data.pinned);
}

export async function getPost(id: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((post) => post.id === id);
}

/** Static paths shared by every per-post route (article page, OG image). */
export async function getPostPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
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
