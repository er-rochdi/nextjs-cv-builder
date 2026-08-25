/**
 * Color themes and layout templates for the CV preview.
 * Pure data + lookup helpers — no React here.
 */

import type { TemplateId } from "./types";

export interface CvTheme {
  id: string;
  label: string;
  /** Main accent (borders, headings, bullets). */
  accent: string;
  /** Darker shade (sidebar background, heading text). */
  accentStrong: string;
  /** Text color used on top of the accent. */
  onAccent: string;
}

export const THEMES: CvTheme[] = [
  { id: "slate", label: "Ardoise", accent: "#334155", accentStrong: "#1e293b", onAccent: "#ffffff" },
  { id: "blue", label: "Bleu", accent: "#2563eb", accentStrong: "#1e40af", onAccent: "#ffffff" },
  { id: "emerald", label: "Émeraude", accent: "#059669", accentStrong: "#065f46", onAccent: "#ffffff" },
  { id: "burgundy", label: "Bordeaux", accent: "#9f1239", accentStrong: "#881337", onAccent: "#ffffff" },
  { id: "violet", label: "Violet", accent: "#7c3aed", accentStrong: "#5b21b6", onAccent: "#ffffff" },
  { id: "amber", label: "Ambre", accent: "#d97706", accentStrong: "#92400e", onAccent: "#ffffff" },
];

const FALLBACK_THEME = THEMES[0];

/** Resolve a theme id, falling back to the default when unknown. */
export function getTheme(id: string): CvTheme {
  return THEMES.find((theme) => theme.id === id) ?? FALLBACK_THEME;
}

export interface CvTemplateInfo {
  id: TemplateId;
  label: string;
  description: string;
}

export const TEMPLATES: CvTemplateInfo[] = [
  {
    id: "classic",
    label: "Classique",
    description: "En-tête horizontal, mise en page intemporelle.",
  },
  {
    id: "modern",
    label: "Moderne",
    description: "Bandeau latéral coloré pour les infos clés.",
  },
  {
    id: "elegant",
    label: "Élégant",
    description: "En-tête centré, typographie serif raffinée.",
  },
  {
    id: "ats",
    label: "ATS",
    description:
      "Colonne unique, texte brut, sans photo : lisible par les logiciels de recrutement.",
  },
];
