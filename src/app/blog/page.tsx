import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { getBlogPosts } from "~~/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog about software development, entrepreneurship, and getting ahead as a 18 year old.",
  openGraph: {
    images: [
      {
        url: "https://leonardotrapani/og/home?title=leonardo trapani's blog",
      },
    ],
  },
};

export default function BlogPage() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  );

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">blog</h1>

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="flex w-full flex-col gap-y-1">
              <p className="text-lg font-medium group-hover:underline group-hover:decoration-neutral-400 group-hover:underline-offset-4 group-hover:dark:decoration-neutral-600">
                {post.metadata.title.toLowerCase()}
              </p>
              <p className="prose prose-neutral dark:prose-invert">
                {post.metadata.description.toLowerCase()}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {new Date(post.metadata.date)
                  .toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                  .toLowerCase()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
