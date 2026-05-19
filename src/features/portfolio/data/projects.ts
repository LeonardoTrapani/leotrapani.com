import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "hyprvoice",
    title: "Hyprvoice",
    period: {
      start: "9.2025",
    },
    showStars: true,
    isPartialGithubLink: true,
    link: "leonardotrapani/hyprvoice",
    skills: ["Go", "Linux"],
    description: `open-source voice typing for Wayland/Hyprland.

- press a key, speak, and inject text anywhere
- supports 26 cloud and local transcription models, including whisper.cpp
- ships with AUR packaging, onboarding, hot-reload config, and streaming support
`,
    isExpanded: false,
  },
  {
    id: "xschema",
    title: "XSchema",
    period: {
      start: "01.2026",
    },
    link: "https://xschema.dev",
    skills: ["Go", "TypeScript"],
    description: `JSON Schema toolchain for generating native validators across languages.

- one pipeline for parsing, fetching, validating, resolving refs, and generating code
- adapters for Zod, ArkType, Effect Schema, Valibot, Pydantic, and more
- compliance reports against the official JSON Schema Test Suite
`,
    logo: "/images/projects/xschema.svg",
    isExpanded: false,
  },
  {
    id: "rediredge",
    title: "Rediredge",
    period: {
      start: "11.2025",
    },
    link: "https://rediredge.app",
    skills: ["Go", "TypeScript"],
    description: `self-hostable redirect infrastructure for domains.

- manage domains and redirect rules from a dashboard
- serve redirects from a stateless Go data plane backed by Redis
- run hosted or self-host with Docker Compose`,
    logo: "/images/projects/rediredge.svg",
    isExpanded: false,
  },
];
