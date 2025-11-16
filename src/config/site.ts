import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://leotrapani.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const GITHUB_USERNAME = "leonardotrapani";
export const SOURCE_CODE_GITHUB_REPO = "leonardotrapani/leotrapani.com";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/leonardotrapani/leotrapani.com";

export const UTM_PARAMS = {
  utm_source: "leotrapani.com",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};
