import type { Registry } from "shadcn/schema";

export const components: Registry["items"] = [
  {
    name: "shimmering-text",
    type: "registry:component",
    description: "Smooth shimmering text animation built with Motion.",
    title: "Shimmering Text",
    author: "leotrapani <ciao@leotrapani.com>",
    dependencies: ["motion"],
    registryDependencies: ["@leotrapani/utils"],
    files: [
      {
        path: "shimmering-text/shimmering-text.tsx",
        type: "registry:component",
      },
    ],
  },
];
