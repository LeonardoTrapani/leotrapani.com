export const SITE = {
  name: "Leonardo Trapani",
  title: "Leonardo Trapani – 20, building startups in Italy",
  description:
    "20, building startups in Italy. Founding engineer at Datapizza, based in Milan.",
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
];
