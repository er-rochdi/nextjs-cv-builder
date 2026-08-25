"use client";

/**
 * "ATS" template — optimized for Applicant Tracking Systems.
 *
 * Single-column layout, plain-text contact info, standard section
 * headings, no photo, no icons and no multi-column grids, so the
 * reading order matches the visual order when parsed.
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
    <h2 className="mb-3 border-b border-slate-400 pb-1 text-sm font-bold uppercase tracking-widest text-black">
      {children}
    </h2>
  );
}

export function AtsTemplate({ cv }: TemplateProps) {
  const experiences = visibleExperience(cv);
  const education = visibleEducation(cv);
  const skills = visibleSkills(cv);
  const languages = visibleLanguages(cv);
  const certifications = visibleCertifications(cv);

  return (
    <div className="bg-white p-12 text-black">
      {/* Header — plain text only, no photo (ignored on purpose for ATS) */}
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">
          {cv.name || "Votre nom"}
        </h1>
        {cv.title && (
          <p className="mt-1 text-lg font-medium">{cv.title}</p>
        )}
        <div className="mt-3 text-sm leading-relaxed">
          {contactLines(cv).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </header>

      {/* Profile */}
      {cv.summary.trim() !== "" && (
        <section className="mb-8">
          <SectionTitle>Profil</SectionTitle>
          <p className="whitespace-pre-line text-sm leading-relaxed">
            {cv.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <section className="mb-8">
          <SectionTitle>Expérience professionnelle</SectionTitle>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <article key={exp.id}>
                <h3 className="text-base font-bold">{exp.title}</h3>
                {(exp.company || exp.location || exp.period) && (
                  <p className="text-sm">
                    {[exp.company, exp.location, exp.period]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                )}
                {exp.bullets.filter(Boolean).length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
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
          <SectionTitle>Formation</SectionTitle>
          <div className="space-y-4">
            {education.map((edu) => (
              <article key={edu.id}>
                <h3 className="text-base font-bold">{edu.degree}</h3>
                {(edu.school || edu.period) && (
                  <p className="text-sm">
                    {[edu.school, edu.period].filter(Boolean).join(" · ")}
                  </p>
                )}
                {edu.details && (
                  <p className="mt-1 text-sm leading-relaxed">{edu.details}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-8">
          <SectionTitle>Compétences</SectionTitle>
          <dl className="space-y-2 text-sm">
            {skills.map((s) => (
              <div key={s.id}>
                <dt className="inline font-bold">{s.category} : </dt>
                <dd className="inline">{s.items.filter(Boolean).join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section className="mb-8">
          <SectionTitle>Langues</SectionTitle>
          <ul className="space-y-1 text-sm">
            {languages.map((l) => (
              <li key={l.id}>
                <span className="font-bold">{l.language}</span>
                {l.level && <> — {l.level}</>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-8">
          <SectionTitle>Certifications</SectionTitle>
          <ul className="space-y-2 text-sm">
            {certifications.map((cert) => (
              <li key={cert.id}>
                <span className="font-bold">{cert.name}</span>
                {(cert.issuer || cert.year) && (
                  <>{" — "}{[cert.issuer, cert.year].filter(Boolean).join(", ")}</>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
