import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Leonardo",
  lastName: "Trapani",
  displayName: "Leonardo Trapani",
  username: "leotrapani",
  gender: "male",
  bio: "Technical Founder & Startup Engineer",
  flipSentences: [
    "Founding Engineer",
    "Technical Founder",
    "Startup Engineer",
    "Open-source Builder",
  ],
  address: "Milan, Italy",
  phoneNumber: "KzM5MzM5MzI2MDc1OQ==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "Y2lhb0BsZW90cmFwYW5pLmNvbQ==", // base64 encoded
  website: "https://leotrapani.com",
  jobTitle: "Technical Founder & Startup Engineer",
  jobs: [
    {
      title: "Founding Engineer / Technical Lead",
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
20 y/o technical founder and startup engineer based in Milan.

At [Datapizza](https://datapizza.tech) (#8), I'm leading Dual, building an agent platform that brings AI into enterprises.

Outside of work I ship and contribute to open-source projects, train MMA, and live my university life in Milan.
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
