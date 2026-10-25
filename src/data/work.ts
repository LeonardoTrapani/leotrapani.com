export type Role = {
  organization: string;
  href?: string;
  title: string;
  start: number;
  end?: number;
};

export const WORK: Role[] = [
  {
    organization: "Datapizza",
    href: "https://datapizza.tech",
    title: "Founding Engineer, Technical Lead",
    start: 2023,
  },
  {
    organization: "Freelance",
    title: "Software Engineer",
    start: 2022,
    end: 2025,
  },
];
