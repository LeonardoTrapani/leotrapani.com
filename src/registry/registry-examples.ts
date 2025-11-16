import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "shimmering-text-demo",
    type: "registry:example",
    registryDependencies: ["@leotrapani/shimmering-text"],
    files: [
      {
        path: "examples/shimmering-text-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
