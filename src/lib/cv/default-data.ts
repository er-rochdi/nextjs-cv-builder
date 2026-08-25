import type { CvData } from "./types";

export function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export const defaultCvData: CvData = {
  name: "John Doe",
  title: "Senior Software Engineer",
  template: "classic",
  accent: "slate",
  photo: null,
  contact: {
    email: "john.doe@email.com",
    phone: "+33 6 12 34 56 78",
    address: "123 Rue Example, 75000 Paris",
    links: {
      linkedin: "linkedin.com/in/johndoe",
      github: "github.com/johndoe",
      portfolio: "",
    },
  },
  summary:
    "Results-driven software engineer with 7+ years of experience building scalable web applications. Passionate about clean architecture, developer experience, and delivering products that users love. Proven track record of leading teams and modernizing complex systems.",
  experiences: [
    {
      id: newId(),
      title: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2022 — Present",
      location: "Paris, France",
      bullets: [
        "Led the migration of a legacy monolith to a microservices architecture, reducing deploy time by 60%.",
        "Mentored 5 junior engineers and established code review standards.",
        "Designed and shipped a real-time analytics pipeline serving 2M+ daily events.",
      ],
    },
    {
      id: newId(),
      title: "Software Engineer",
      company: "Startup Inc",
      period: "2019 — 2022",
      location: "Lyon, France",
      bullets: [
        "Built customer-facing web applications with React and Node.js.",
        "Improved API response times by 40% through query optimization and caching.",
        "Introduced automated testing, raising coverage from 20% to 85%.",
      ],
    },
  ],
  education: [
    {
      id: newId(),
      degree: "MSc Computer Science",
      school: "Université Paris-Saclay",
      period: "2017 — 2019",
      details:
        "Specialization in distributed systems. Graduated with honors.",
    },
    {
      id: newId(),
      degree: "BSc Computer Science",
      school: "Université Claude Bernard Lyon 1",
      period: "2014 — 2017",
      details: "",
    },
  ],
  skills: [
    { id: newId(), category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "Go"] },
    { id: newId(), category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vue"] },
    { id: newId(), category: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "REST APIs"] },
    { id: newId(), category: "Tools", items: ["Git", "Docker", "AWS", "CI/CD", "Jest"] },
  ],
  languages: [
    { id: newId(), language: "French", level: "Native" },
    { id: newId(), language: "English", level: "Fluent (C1)" },
    { id: newId(), language: "Spanish", level: "Intermediate (B1)" },
  ],
  certifications: [
    { id: newId(), name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
  ],
};
