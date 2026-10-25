export const SITE = {
  name: "Leonardo Trapani",
  title: "Leonardo Trapani – Technical Founder & Startup Engineer",
  description:
    "Technical founder and startup engineer based in Milan. Leading Dual at Datapizza.",
  url: "https://leotrapani.com",
  email: "ciao@leotrapani.com",
  locale: "en",
  twitterHandle: "@leo_trapani",
  resumeUrl: "/resume.pdf",
} as const;

export type Link = {
  label: string;
  href: string;
};

export const NAV: Link[] = [{ label: "Blog", href: "/blog" }];

export const SOCIAL_LINKS: Link[] = [
  { label: "X", href: "https://x.com/leo_trapani" },
  { label: "GitHub", href: "https://github.com/leonardotrapani" },
  { label: "LinkedIn", href: "https://linkedin.com/in/leonardotrapani" },
  { label: "YouTube", href: "https://www.youtube.com/@leotrapani" },
];
