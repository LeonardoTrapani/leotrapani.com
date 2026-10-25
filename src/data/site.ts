export const SITE = {
  name: "Leonardo Trapani",
  title: "Leonardo Trapani – Building startups in Italy",
  description:
    "Building startups in Italy. 20 y/o founding engineer at Datapizza, based in Milan.",
  url: "https://leotrapani.com",
  email: "ciao@leotrapani.com",
  locale: "en",
  twitterHandle: "@leo_trapani",
  // Public Cloudflare Web Analytics token; it ships in every page.
  webAnalyticsToken: "258adf100be042ca87a40265a5714df5",
} as const;

export type Link = {
  label: string;
  href: string;
};

export const SOCIAL_LINKS: Link[] = [
  { label: "X", href: "https://x.com/leo_trapani" },
  { label: "GitHub", href: "https://github.com/leonardotrapani" },
  { label: "LinkedIn", href: "https://linkedin.com/in/leonardotrapani" },
];
