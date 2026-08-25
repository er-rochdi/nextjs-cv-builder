/** Small helpers shared by the CV layout templates. */

import type { CvData } from "@/lib/cv/types";
import type { CvTheme } from "@/lib/cv/themes";

export interface TemplateProps {
  cv: CvData;
  theme: CvTheme;
}

/** CSS custom properties consumed by the template styles. */
export function accentStyle(theme: CvTheme): React.CSSProperties {
  return {
    "--cv-accent": theme.accent,
    "--cv-accent-strong": theme.accentStrong,
    "--cv-on-accent": theme.onAccent,
  } as React.CSSProperties;
}

/** Strip protocol for display, e.g. "https://github.com/x" -> "github.com/x". */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/** Contact lines actually filled in, in display order. */
export function contactLines(cv: CvData): string[] {
  return [
    cv.contact.email,
    cv.contact.phone,
    cv.contact.address,
    ...[cv.contact.links.linkedin, cv.contact.links.github, cv.contact.links.portfolio]
      .filter(Boolean)
      .map(displayUrl),
  ].filter(Boolean);
}

export const visibleExperience = (cv: CvData) =>
  cv.experiences.filter((e) => e.title || e.company || e.bullets.some(Boolean));

export const visibleEducation = (cv: CvData) =>
  cv.education.filter((e) => e.degree || e.school || e.details);

export const visibleSkills = (cv: CvData) =>
  cv.skills.filter((s) => s.category || s.items.some(Boolean));

export const visibleLanguages = (cv: CvData) =>
  cv.languages.filter((l) => l.language || l.level);

export const visibleCertifications = (cv: CvData) =>
  cv.certifications.filter((c) => c.name || c.issuer);
