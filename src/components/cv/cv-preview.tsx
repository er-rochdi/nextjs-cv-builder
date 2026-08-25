"use client";

/**
 * Preview shell: resolves the color theme, exposes it to templates
 * as CSS variables, and renders the selected layout.
 * Receives the live draft — changes appear while typing.
 */

import { getTheme } from "@/lib/cv/themes";
import type { CvData } from "@/lib/cv/types";
import { accentStyle, type TemplateProps } from "./templates/shared";
import { ClassicTemplate } from "./templates/classic-template";
import { ModernTemplate } from "./templates/modern-template";
import { ElegantTemplate } from "./templates/elegant-template";

const TEMPLATES: Record<
  CvData["template"],
  (props: TemplateProps) => React.ReactNode
> = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  elegant: ElegantTemplate,
};

export function CvPreview({ cv }: { cv: CvData }) {
  const theme = getTheme(cv.accent);
  const Template = TEMPLATES[cv.template] ?? ClassicTemplate;

  return (
    <main
      style={accentStyle(theme)}
      className="cv-page mx-auto w-full max-w-[210mm] overflow-hidden shadow-lg print:max-w-none print:shadow-none"
    >
      <Template cv={cv} theme={theme} />
    </main>
  );
}
