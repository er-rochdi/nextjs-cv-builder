"use client";

/**
 * "Classique" template — the original design, now accent-colored
 * via CSS variables set by the preview wrapper.
 */

import {
  contactLines,
  visibleCertifications,
  visibleEducation,
  visibleExperience,
  visibleLanguages,
  visibleSkills,
  type TemplateProps,
} from "./shared";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b-2 border-[var(--cv-accent)] pb-1 text-sm font-bold uppercase tracking-widest text-[var(--cv-accent-strong)]">
      {children}
    </h2>
  );
}

export function ClassicTemplate({ cv }: TemplateProps) {
  const experiences = visibleExperience(cv);
  const education = visibleEducation(cv);
  const skills = visibleSkills(cv);
  const languages = visibleLanguages(cv);
  const certifications = visibleCertifications(cv);

  return (
    <div className="bg-white p-12">
      {/* Header */}
      <header className="mb-8 flex items-start justify-between gap-6 border-b-4 border-[var(--cv-accent)] pb-6">
        <div className="flex items-start gap-5">
          {cv.photo && (
            // eslint-disable-next-line @next/next/no-img-element -- local data URL
            <img
              src={cv.photo}
              alt={`Photo de ${cv.name}`}
              className="h-24 w-24 shrink-0 rounded-full border-2 border-[var(--cv-accent)] object-cover"
            />
          )}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
              {cv.name || "Votre nom"}
            </h1>
            <p className="mt-1 text-lg font-medium text-slate-600">{cv.title}</p>
          </div>
        </div>
        <div className="text-right text-sm leading-relaxed text-slate-600">
          {contactLines(cv).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </header>

      {/* Summary */}
      {cv.summary.trim() !== "" && (
        <section className="mb-8">
          <SectionTitle>Profile</SectionTitle>
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700">
            {cv.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <section className="mb-8">
          <SectionTitle>Professional Experience</SectionTitle>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <article key={exp.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-base font-bold text-slate-900">
                    {exp.title}
                    {(exp.title || exp.company) && (
                      <span className="font-medium text-slate-600">
                        {" · "}
                        {exp.company}
                      </span>
                    )}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {[exp.period, exp.location].filter(Boolean).join(" · ")}
                  </span>
                </div>
                {exp.bullets.filter(Boolean).length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700 marker:text-[var(--cv-accent)]">
                    {exp.bullets.filter(Boolean).map((b, i) => (
                      <li key={`${exp.id}-${i}`}>{b}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-8">
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-4">
            {education.map((edu) => (
              <article key={edu.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-base font-bold text-slate-900">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {edu.period}
                  </span>
                </div>
                {edu.school && <p className="text-sm text-slate-600">{edu.school}</p>}
                {edu.details && (
                  <p className="mt-1 text-sm text-slate-700">{edu.details}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-8">
          <SectionTitle>Skills</SectionTitle>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {skills.map((s) => (
              <div key={s.id}>
                <dt className="font-semibold text-slate-900">{s.category}</dt>
                <dd className="mt-0.5 text-slate-700">
                  {s.items.filter(Boolean).join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Languages + Certifications side by side when both exist */}
      <div
        className={
          languages.length > 0 && certifications.length > 0
            ? "grid grid-cols-2 gap-8"
            : ""
        }
      >
        {languages.length > 0 && (
          <section>
            <SectionTitle>Languages</SectionTitle>
            <ul className="flex flex-col gap-1 text-sm text-slate-700">
              {languages.map((l) => (
                <li key={l.id}>
                  <span className="font-semibold text-slate-900">
                    {l.language}
                  </span>
                  {l.level && <> — {l.level}</>}
                </li>
              ))}
            </ul>
          </section>
        )}
        {certifications.length > 0 && (
          <section>
            <SectionTitle>Certifications</SectionTitle>
            <ul className="space-y-2 text-sm text-slate-700">
              {certifications.map((cert) => (
                <li
                  key={cert.id}
                  className="flex flex-wrap justify-between gap-x-4"
                >
                  <span>
                    <span className="font-semibold text-slate-900">
                      {cert.name}
                    </span>
                    {cert.issuer && <> — {cert.issuer}</>}
                  </span>
                  {cert.year && (
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {cert.year}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
