export const links = [
  { title: "resume", href: "/resume.pdf" },
  { title: "email", href: "mailto:ciao@leotrapani.com" },
  { title: "github", href: "https://github.leotrapani.com" },
  { title: "linkedin", href: "https://linkedin.leotrapani.com" },
  { title: "book a call", href: "https://cal.leotrapani.com" },
  { title: "x.com", href: "https://x.com/leo_trapani" },
]

export const projects = [
  {
    title: "rediredge",
    description: "blazing-fast, self-hostable domain redirector combining a Go edge with a Next.js control plane",
    role: "creator",
    "period": "2025 - present",
    achievements: [
      "built stateless Go redirector with autocert-based HTTPS and sub-millisecond redis lookups",
      "implemented outbox + sync worker system for reliable Postgres→Redis propagation",
      "designed horizontally-scalable architecture separating control and data planes",
      "added async analytics pipeline and billing integration via Polar",
      "delivered one-command self-hosting through docker compose templates",
      "focused on minimal ui with bullet-proof UX"
    ],
    technologies: ["go", "next.js", "redis", "postgres", "docker", "turborepo", "bun"],
    href: "https://github.com/leonardotrapani/rediredge"
  },
  {
    title: "hyprvoice",
    description:
      "voice-powered typing system for wayland/hyprland (arch linux) using go",
    role: "creator",
    period: "2025 - present",
    achievements: [
      "implemented complex thread synchronization for parallel audio processing, transcription, and injection",
      "designed daemon architecture with state machine for audio recording, transcription, and text injection workflow",
      "real-time audio capture via pipewire and ai transcription",
    ],
    technologies: ["go"],
    href: "https://github.com/leonardotrapani/hyprvoice",
  },
  // {
  //   title: "juggle content",
  //   description:
  //     "content management system that transforms single content pieces into 15+ platform",
  //   role: "creator",
  //   period: "2025 - present",
  //   achievements: [
  //     "optimized content repurposing using ai agents",
  //     "built full agent workflow with external api calls (youtube, twitter api...)",
  //     "organized the entire project with a pleasing ui and a solid architecture",
  //   ],
  //   technologies: [
  //     "typescript",
  //     "next.js",
  //     "trpc",
  //     "prisma",
  //     "tailwind css",
  //     "auth.js",
  //     "shadcn ui",
  //   ],
  //   href: "https://jugglecontent.trapani.sh",
  // },
  // {
  //   title: "omarchy",
  //   description:
  //     "contribution to omarchy (arch linux based linux distro), and built and maintained a fork to adapt it to my own workflow",
  //   role: "contributor, fork maintainer",
  //   period: "2025 - present",
  //   achievements: [
  //     "contributed on bug fixes and features to omarchy",
  //     "created my own opinionated fork by adapting it to my specific needs",
  //     "added custom installations and configurations like tmux with theme sync, neovim, and other cli tools",
  //   ],
  //   technologies: ["bash", "arch linux"],
  //   href: "https://github.com/leonardotrapani/omarchy",
  // },
]

export const work = [
  {
    title: "datapizza",
    role: "software developer",
    period: "jun 2023 - present",
    description:
      "early employee (#8) at fast-growing startup that scaled to 80+ employees. led frontend technical strategy for datapizza jobs and built internal crm system supporting 100,000+ candidate pipelines. mentored junior developers and established development standards",
    href: "https://datapizza.tech",
  },
  {
    title: "freelance developer & technical founder",
    role: "self-employed",
    period: "sep 2022 - present",
    description:
      "transform startup and app ideas into working products, delivering full development lifecycle. built nutrivetpet from zero to production: complete pet nutrition platform serving 3,000+ monthly paying users, earning equity stake for technical leadership",
    href: "https://trapani.sh",
  },
]
