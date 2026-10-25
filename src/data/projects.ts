export type Project = {
  name: string;
  href: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    name: "XSchema",
    href: "https://xschema.dev",
    description: "JSON Schema to native validators, across languages.",
  },
  {
    name: "Rediredge",
    href: "https://rediredge.app",
    description: "Self-hostable redirect infrastructure for domains.",
  },
  {
    name: "Hyprvoice",
    href: "https://github.com/leonardotrapani/hyprvoice",
    description: "Open-source voice typing for Wayland and Hyprland.",
  },
];
