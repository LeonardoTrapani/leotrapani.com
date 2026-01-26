import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Leonardo",
  lastName: "Trapani",
  displayName: "Leonardo Trapani",
  username: "leotrapani",
  gender: "male",
  bio: "Software Developer",
  flipSentences: [
    "Software Developer",
    "Student",
    "Entrepreneur",
    "Open Source Contributor",
  ],
  address: "Milan, Italy",
  phoneNumber: "KzM5MzM5MzI2MDc1OQ==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "Y2lhb0BsZW90cmFwYW5pLmNvbQ==", // base64 encoded
  website: "https://leotrapani.com",
  jobTitle: "Software Developer",
  jobs: [
    {
      title: "Software Developer",
      company: "Datapizza",
      website: "https://datapizza.tech",
    },
    {
      title: "Student",
      company: "Bocconi",
      website: "https://unibocconi.it",
    },
  ],
  about: `
19 y/o software developer, entrepreneur, and undergrad student at Bocconi.

Started coding young, landed first internship at 16. Joined [Datapizza](https://datapizza.tech) as early employee (#8), watched it scale to 90+ employees while leading the team and the technical strategy of [Jobs](https://datapizza.tech/jobs/), and all internal tools.

On the side, I study in university, and build Open Source projects:
- **[Rediredge](https://rediredge.app)**: blazing-fast self-hostable domain redirector built with Go, Next.js, Redis. Horizontally-scalable architecture with analytics pipeline
- **[Hyprvoice](https://github.leotrapani.com/hyprvoice)**: voice-powered typing for Linux Wayland/Hyprland. 100+ github starts, active open source contributors
- **[Nutrivetpet](https://nutrivetpet.com)**: pet nutrition platform with 3k+ monthly paying users (equity stake for technical leadership)

Deep into systems: Go, infrastructure, scalability, Docker. Focusing on TypeScript/Next.js/React for full-stack execution.

When I'm not programming, you can find me developing my custom linux distribution, fixing my vim config, playing rugby or MMA, or enjoying uni life in Milan.
`,
  avatar: "/images/pfp.jpeg",
  ogImage: "/og",
  timeZone: "Europe/Rome",
  keywords: [
    "Leonardo Trapani",
    "Leo Trapani",
    "leotrapani",
    "leonardotrapani",
  ],
  dateCreated: "2025-11-16", // YYYY-MM-DD,
  resumeUrl: "/resume.pdf",
};
