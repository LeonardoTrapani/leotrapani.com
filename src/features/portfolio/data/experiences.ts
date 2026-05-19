import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "datapizza",
    companyName: "Datapizza",
    companyLogo: "/images/experiences/datapizza.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Founding Engineer / Technical Lead",
        employmentPeriod: {
          start: "06.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Joined as employee #8 and helped Datapizza grow to 90+ people
- Leading Dual, building an agent platform on top of enterprise systems
- Led Datapizza Jobs, building products for candidates, companies, and internal recruiters handling 100,000+ candidate pipelines
`,
        skills: ["Effect.ts", "TypeScript"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Software Engineer",
        employmentPeriod: {
          start: "09.2022",
          end: "09.2025",
        },
        employmentType: "Self-Employed",
        description: `Built commissioned projects and helped start small startups.

- Nutrivetpet: built a pet nutrition platform from zero to production, serving 3,000+ monthly paying users
- Sintesy: built a mobile app with real-time connections to oxygen sensors
- More: websites, internal tools, dashboards, and product MVPs
`,
        icon: "idea",
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    isCurrentEmployer: true,
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Bocconi University",
        employmentPeriod: {
          start: "09.2025",
          end: "2028 (Expected)",
        },
        icon: "education",
        description: `Bachelor's degree in Economics, Management, and Computer Science`,
        skills: [],
      },
    ],
  },
];
