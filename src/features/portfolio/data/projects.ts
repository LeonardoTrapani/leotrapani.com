import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "rediredge",
    title: "Rediredge",
    period: {
      start: "11.2025",
    },
    link: "https://rediredge.app",
    skills: [
      "Go",
      "Next.js",
      "Redis",
      "Typescript",
      "Postgres",
      "Docker",
      "Bun",
      "Turborepo",
      "VPS",
      "DX",
      "Open Source",
    ],
    description: `blazing-fast, self-hostable domain redirector combining a Go edge with a Next.js control plane

- built stateless Go redirector with autocert-based HTTPS and sub-millisecond redis lookups
- implemented outbox + sync worker system for reliable Postgres→Redis propagation
- designed horizontally-scalable architecture separating control and data planes
- added async analytics pipeline and billing integration via Polar
- delivered one-command self-hosting through docker compose templates
- focused on minimal ui with bullet-proof UX`,
    logo: "/images/projects/rediredge.svg",
    isExpanded: true,
  },
  {
    id: "hyprvoice",
    title: "Hyprvoice",
    period: {
      start: "9.2025",
    },
    showStars: true,
    isPartialGithubLink: true,
    link: "leonardotrapani/hyprvoice",
    skills: ["Go", "Open Source", "Linux", "AUR"],
    description: `voice-powered typing system for wayland/hyprland (arch linux) using go

- implemented complex thread synchronization for parallel audio processing, transcription, and injection
- designed daemon architecture with state machine for audio recording, transcription, and text injection workflow
- real-time audio capture via pipewire and ai transcription
- active open source contributors, 1k+ arch linux users
`,
    isExpanded: true,
  },
];
