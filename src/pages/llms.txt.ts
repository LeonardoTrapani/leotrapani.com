import type { APIRoute } from "astro";
import { experimental_AstroContainer as AstroContainer } from "astro/container";

import Intro from "@/components/home/Intro.astro";
import Now from "@/components/home/Now.astro";

import { PROJECTS } from "@/data/projects";
import { SITE, SOCIAL_LINKS } from "@/data/site";
import { WORK } from "@/data/work";
import { proseToMarkdown } from "@/lib/html-to-markdown";
import { getPosts, postUrl } from "@/lib/posts";

const section = (title: string, items: string[]) =>
  [`## ${title}`, items.map((item) => `- ${item}`).join("\n")].join("\n\n");

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const absolute = (path: string) => new URL(path, SITE.url).href;
  // Render the same components as the home page so this file never drifts from it.
  const container = await AstroContainer.create();
  const prose = async (
    component: Parameters<typeof container.renderToString>[0]
  ) => proseToMarkdown(await container.renderToString(component), SITE.url);

  const body = [
    `# ${SITE.name}`,
    `> ${SITE.description}`,
    await prose(Intro),
    ["## Now", await prose(Now)].join("\n\n"),
    section(
      "Work",
      WORK.map(
        (role) =>
          `${role.title}, ${role.organization} (${role.start}–${role.end ?? "present"})`
      )
    ),
    section(
      "Projects",
      PROJECTS.map(
        (project) =>
          `[${project.name}](${project.href}): ${project.description}`
      )
    ),
    section(
      "Blog",
      posts.map(
        (post) =>
          `[${post.data.title}](${absolute(postUrl(post))}): ${post.data.description}`
      )
    ),
    section("Contact", [
      `Email: ${SITE.email}`,
      ...SOCIAL_LINKS.map((link) => `${link.label}: ${link.href}`),
    ]),
  ].join("\n\n");

  return new Response(`${body}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
