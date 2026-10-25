export const SITE = {
  name: "Leonardo Trapani",
  title: "Leonardo Trapani – Building startups in Italy",
  description:
    "Founding engineer at Datapizza, building startups in Italy. Twenty years old, living in Milan.",
  url: "https://leotrapani.com",
  email: "ciao@leotrapani.com",
  locale: "en",
  twitterHandle: "@leo_trapani",
} as const;

export type Link = {
  label: string;
  href: string;
};

export const NAV: Link[] = [{ label: "Writing", href: "/blog" }];

export const SOCIAL_LINKS: Link[] = [
  { label: "X", href: "https://x.com/leo_trapani" },
  { label: "GitHub", href: "https://github.com/leonardotrapani" },
  { label: "LinkedIn", href: "https://linkedin.com/in/leonardotrapani" },
  { label: "YouTube", href: "https://www.youtube.com/@leotrapani" },
];
