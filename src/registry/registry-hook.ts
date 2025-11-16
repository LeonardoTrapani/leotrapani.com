import type { Registry } from "shadcn/schema";

export const hook: Registry["items"] = [
  {
    name: "use-sound",
    type: "registry:hook",
    title: "Sound Hook",
    description:
      "Custom React hook to load and play a sound from a given URL using the Web Audio API.",
    files: [{ path: "src/hooks/use-sound.ts", type: "registry:hook" }],
  },
];
