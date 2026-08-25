"use client";

/**
 * "Élégant" template — serif typography, centered header,
 * thin horizontal rules. Sober and print-friendly.
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

export function ElegantTemplate({ cv }: TemplateProps) {
  const experiences = visibleExperience(cv);
  const education = visibleEducation(cv);
  const skills = visibleSkills(cv);
  const languages = visibleLanguages(cv);
  const certifications = visibleCertifications(cv);

  return (
    <div className="bg-white p-12 font-serif text-slate-800">
      {/* Centered header */}
      <header className="mb-8 border-b border-[var(--cv-accent)] pb-6 text-center">
        {cv.photo && (
          // eslint-disable-next-line @next/next/no-img-element -- local data URL
          <img
            src={cv.photo}
            alt={`Photo de ${cv.name}`}
            className="mx-auto mb-4 h-24 w-24 rounded-full object-cover ring-2 ring-[var(--cv-accent)]"
          />
        )}
        <h1 className="text-4xl font-bold uppercase tracking-[0.2em] text-slate-900">
          {cv.name || "Votre nom"}
        </h1>
        {cv.title && (
          <p className="mt-2 text-base italic text-[var(--cv-accent-strong)]">
            {cv.title}
          </p>
        )}
        <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-slate-600">
          {contactLines(cv).join("  ·  ")}
        </p>
      </header>

      {cv.summary.trim() !== "" && (
        <>
          <Rule />
          <section className="py-5">
            <CenteredHeading>Profil</CenteredHeading>
            <p className="whitespace-pre-line text-center text-sm italic leading-relaxed text-slate-700">
              {cv.summary}
            </p>
          </section>
        </>
      )}

      {experiences.length > 0 && (
        <>
          <Rule />
          <section className="py-5">
            <CenteredHeading>Expérience professionnelle</CenteredHeading>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <article key={exp.id}>
                  <div className="flex items-baseline justify-between gap-x-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      {exp.title}
                    </h3>
                    {exp.period && (
                      <span className="text-xs italic text-slate-500">
                        {exp.period}
                      </span>
                    )}
                  </div>
                  {(exp.company || exp.location) && (
                    <p className="text-sm italic text-[var(--cv-accent-strong)]">
                      {[exp.company, exp.location].filter(Boolean).join(", ")}
                    </p>
                  )}
                  {exp.bullets.filter(Boolean).length > 0 && (
                    <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700 marker:text-[var(--cv-accent)]">
                      {exp.bullets.filter(Boolean).map((b, i) => (
                        <li key={`${exp.id}-${i}`}>{b}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      {education.length > 0 && (
        <>
          <Rule />
          <section className="py-5">
            <CenteredHeading>Formation</CenteredHeading>
            <div className="space-y-4">
              {education.map((edu) => (
                <article key={edu.id}>
                  <div className="flex items-baseline justify-between gap-x-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    {edu.period && (
                      <span className="text-xs italic text-slate-500">
                        {edu.period}
                      </span>
                    )}
                  </div>
                  {edu.school && (
                    <p className="text-sm italic text-[var(--cv-accent-strong)]">
                      {edu.school}
                    </p>
                  )}
                  {edu.details && (
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-700">
                      {edu.details}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      {skills.length > 0 && (
        <>
          <Rule />
          <section className="py-5">
            <CenteredHeading>Compétences</CenteredHeading>
            <dl className="space-y-2 text-center text-sm">
              {skills.map((s) => (
                <div key={s.id}>
                  <dt className="inline font-bold text-slate-900">
                    {s.category}
                    {" : "}
                  </dt>
                  <dd className="inline text-slate-700">
                    {s.items.filter(Boolean).join(", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </>
      )}

      {(languages.length > 0 || certifications.length > 0) && (
        <>
          <Rule />
          <div
            className={`grid py-5 ${
              languages.length > 0 && certifications.length > 0
                ? "grid-cols-2 gap-8 text-left"
                : ""
            }`}
          >
            {languages.length > 0 && (
              <section>
                <LeftHeading>Langues</LeftHeading>
                <ul className="space-y-1 text-sm text-slate-700">
                  {languages.map((l) => (
                    <li key={l.id}>
                      <span className="font-bold text-slate-900">
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
                <LeftHeading>Certifications</LeftHeading>
                <ul className="space-y-2 text-sm text-slate-700">
                  {certifications.map((cert) => (
                    <li key={cert.id}>
                      <span className="font-bold text-slate-900">
                        {cert.name}
                      </span>
                      {(cert.issuer || cert.year) && (
                        <span className="italic">
                          {" — "}
                          {[cert.issuer, cert.year].filter(Boolean).join(", ")}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function Rule() {
  return <hr className="border-t border-dashed border-slate-300" />;
}

function CenteredHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-center text-xs font-bold uppercase tracking-[0.3em] text-[var(--cv-accent-strong)]">
      {children}
    </h2>
  );
}

function LeftHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[var(--cv-accent-strong)]">
      {children}
    </h2>
  );
}
