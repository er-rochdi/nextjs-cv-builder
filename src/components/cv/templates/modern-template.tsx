"use client";

/**
 * "Moderne" template — colored sidebar with contact/skills/languages,
 * main column for profile/experience/education.
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

export function ModernTemplate({ cv }: TemplateProps) {
  const experiences = visibleExperience(cv);
  const education = visibleEducation(cv);
  const skills = visibleSkills(cv);
  const languages = visibleLanguages(cv);
  const certifications = visibleCertifications(cv);

  return (
    <div className="flex min-h-[297mm] bg-white">
      {/* Sidebar */}
      <aside
        className="w-[32%] shrink-0 p-8 text-[var(--cv-on-accent)]"
        style={{ backgroundColor: "var(--cv-accent-strong)" }}
      >
        {cv.photo && (
          // eslint-disable-next-line @next/next/no-img-element -- local data URL
          <img
            src={cv.photo}
            alt={`Photo de ${cv.name}`}
            className="mx-auto mb-6 h-28 w-28 rounded-full border-4 border-white/30 object-cover"
          />
        )}

        {/* Contact */}
        {contactLines(cv).length > 0 && (
          <section className="mb-7">
            <SidebarHeading>Contact</SidebarHeading>
            <ul className="space-y-1.5 text-xs leading-relaxed text-white/85 break-words">
              {contactLines(cv).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section className="mb-7">
            <SidebarHeading>Compétences</SidebarHeading>
            <div className="space-y-3">
              {skills.map((s) => (
                <div key={s.id}>
                  <p className="text-xs font-bold uppercase tracking-wide text-white">
                    {s.category}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/80">
                    {s.items.filter(Boolean).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <section className="mb-7">
            <SidebarHeading>Langues</SidebarHeading>
            <ul className="space-y-1.5 text-xs text-white/85">
              {languages.map((l) => (
                <li key={l.id} className="flex justify-between gap-2">
                  <span className="font-semibold text-white">{l.language}</span>
                  {l.level && <span>{l.level}</span>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <SidebarHeading>Certifications</SidebarHeading>
            <ul className="space-y-2 text-xs text-white/85">
              {certifications.map((cert) => (
                <li key={cert.id}>
                  <p className="font-semibold text-white">{cert.name}</p>
                  {(cert.issuer || cert.year) && (
                    <p>
                      {[cert.issuer, cert.year].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </aside>

      {/* Main column */}
      <div className="flex-1 p-10">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            {cv.name || "Votre nom"}
          </h1>
          {cv.title && (
            <p className="mt-1 text-lg font-semibold text-[var(--cv-accent)]">
              {cv.title}
            </p>
          )}
          <div className="mt-4 h-1 w-16 rounded-full bg-[var(--cv-accent)]" />
        </header>

        {cv.summary.trim() !== "" && (
          <section className="mb-8">
            <MainHeading>Profil</MainHeading>
            <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700">
              {cv.summary}
            </p>
          </section>
        )}

        {experiences.length > 0 && (
          <section className="mb-8">
            <MainHeading>Expérience professionnelle</MainHeading>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <article
                  key={exp.id}
                  className="border-l-2 border-[var(--cv-accent)] pl-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      {exp.title}
                      {exp.company && (
                        <span className="font-medium text-slate-600">
                          {" · "}
                          {exp.company}
                        </span>
                      )}
                    </h3>
                    {exp.period && (
                      <span className="text-xs font-semibold uppercase tracking-wide text-[var(--cv-accent)]">
                        {exp.period}
                      </span>
                    )}
                  </div>
                  {exp.location && (
                    <p className="text-xs text-slate-500">{exp.location}</p>
                  )}
                  {exp.bullets.filter(Boolean).length > 0 && (
                    <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm leading-relaxed text-slate-700 marker:text-[var(--cv-accent)]">
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

        {education.length > 0 && (
          <section>
            <MainHeading>Formation</MainHeading>
            <div className="space-y-4">
              {education.map((edu) => (
                <article
                  key={edu.id}
                  className="border-l-2 border-[var(--cv-accent)] pl-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    {edu.period && (
                      <span className="text-xs font-semibold uppercase tracking-wide text-[var(--cv-accent)]">
                        {edu.period}
                      </span>
                    )}
                  </div>
                  {edu.school && (
                    <p className="text-sm text-slate-600">{edu.school}</p>
                  )}
                  {edu.details && (
                    <p className="mt-0.5 text-sm text-slate-700">{edu.details}</p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b border-white/30 pb-1 text-xs font-bold uppercase tracking-widest text-white">
      {children}
    </h2>
  );
}

function MainHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b-2 border-[var(--cv-accent)] pb-1 text-sm font-bold uppercase tracking-widest text-[var(--cv-accent-strong)]">
      {children}
    </h2>
  );
}
