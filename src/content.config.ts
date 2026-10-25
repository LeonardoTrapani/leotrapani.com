import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string().optional(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
