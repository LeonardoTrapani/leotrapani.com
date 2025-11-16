import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "datapizza",
    companyName: "Datapizza",
    companyLogo: "/images/experiences/datapizza.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Software Developer",
        employmentPeriod: {
          start: "11.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Early employee (#8) at fast-growing startup (datapizza.tech) that scaled to 80+ employees across multiple product lines and codebases
- Led frontend technical strategy for Datapizza Jobs, making strategic technology decisions and implementing architecture using modern technologies
- Migrated the repository from 5 different frontend repositories to a single monorepo with Turborepo, from idea proposal, to managing team migration, codebase architecture, planning, and managing development itself
- Built and internal CRM system supporting 100,000+ candidate pipelines, driving key product decisions from conception to deployment 
- Mentored junior developers, conducting code reviews and establishing development frontend standards
`,
        skills: [
          "TypeScript",
          "Next.js",
          "Django",
          "Python",
          "AWS",
          "Turborepo",
          "Vite",
          "Tanstack",
          "ShadCN",
          "Tailwind CSS",
          "Agile",
        ],
        isExpanded: true,
      },
      {
        id: "cedd7adb-4118-4085-9983-ae00530b49e2",
        title: "Software Developer Intern",
        employmentPeriod: {
          start: "06.2023",
          end: "11.2023",
        },
        employmentType: "Internship",
        icon: "code",
        description: `Interned at 16, proving technical abilities despite young age`,
        isExpanded: false,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "freelance",
    companyName: "Freelance & Technical Founder",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "09.2022",
          end: "09.2025",
        },
        employmentType: "Self-Employed",
        description: `- Transformed startup and app ideas into working products, delivering full development lifecycle from planning and branding
- Build production-ready applications for startup growth, adapting technology stack to project requirements and client needs
- Built Nutrivetpet from zero to production: complete pet nutrition platform serving 3,000+ monthly paying users, earning
equity stake for technical leadership and strategic vision
- Developed mobile application for Sintesy featuring real-time socket connections to oxygen sensors for oxygen monitoring
`,
        icon: "idea",
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Bocconi Unversity",
        employmentPeriod: {
          start: "09.2025",
          end: "2028 (Expected)",
        },
        icon: "education",
        description: `- Currently studying for a Bachelor's degree in Economics, Management, and Computer Science
- Highly selective interdisciplinary program combining quantitative skills, data science, machine learning, and business
strategy`,
        skills: [
          "Mathematics",
          "Statistics",
          "Machine Learning",
          "Computer Science",
          "Economics",
          "Business",
          "Microeconomics",
          "Management",
          "Data-driven Decision Making",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
    ],
  },
];
