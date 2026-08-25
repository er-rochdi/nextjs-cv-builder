/**
 * Shared CV data model.
 * Used by both the editor (forms) and the preview (rendering),
 * so the two can never drift apart.
 */

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  /** One bullet per line (empty lines are ignored at render time). */
  bullets: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  details: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  items: string[];
}

export interface LanguageItem {
  id: string;
  language: string;
  level: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

/** Available CV layouts. */
export type TemplateId = "classic" | "modern" | "elegant";

export interface Links {
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
  links: Links;
}

export interface CvData {
  name: string;
  title: string;
  /** Layout template id (see lib/themes.ts TEMPLATES). */
  template: TemplateId;
  /** Color theme id (see lib/themes.ts THEMES). */
  accent: string;
  /** Image encoded as a data URL, or null when no photo is set. */
  photo: string | null;
  contact: Contact;
  summary: string;
  experiences: Experience[];
  education: Education[];
  skills: SkillGroup[];
  languages: LanguageItem[];
  certifications: Certification[];
}
