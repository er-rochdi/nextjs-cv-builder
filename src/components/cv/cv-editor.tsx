"use client";

import { useCv } from "./cv-context";
import { PhotoInput, TextArea, TextInput } from "./fields";
import { Repeater } from "./repeater";
import { TEMPLATES, THEMES } from "@/lib/cv/themes";
import type {
  Certification,
  Education,
  Experience,
  LanguageItem,
} from "@/lib/cv/types";

/** Collapsible section used to organize the editor. */
function EditorSection({
  title,
  children,
  open = false,
}: {
  title: string;
  children: React.ReactNode;
  open?: boolean;
}) {
  return (
    <details
      open={open}
      className="group rounded-lg border border-slate-200 bg-white shadow-sm"
    >
      <summary className="flex cursor-pointer select-none items-center justify-between px-4 py-3 text-sm font-bold text-slate-800 marker:content-none">
        {title}
        <span className="text-xs font-normal text-slate-400 transition group-open:rotate-180">
          ▼
        </span>
      </summary>
      <div className="space-y-3 border-t border-slate-100 p-4">{children}</div>
    </details>
  );
}

export function CvEditor() {
  const { draft, update, addItem } = useCv();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
      {/* Apparence */}
      <EditorSection title="Apparence (modèle & couleur)" open>
        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Modèle de CV
          </span>
          <div className="grid grid-cols-3 gap-2">
            {TEMPLATES.map((tpl) => {
              const selected = draft.template === tpl.id;
              return (
                <button
                  key={tpl.id}
                  type="button"
                  onClick={() => update((d) => { d.template = tpl.id; })}
                  aria-pressed={selected}
                  className={`rounded-lg border p-2 text-left transition ${
                    selected
                      ? "border-slate-800 bg-slate-800 text-white shadow"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  <span className="block text-sm font-bold">{tpl.label}</span>
                  <span
                    className={`mt-0.5 block text-[11px] leading-snug ${
                      selected ? "text-white/70" : "text-slate-400"
                    }`}
                  >
                    {tpl.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Couleur d&apos;accent
          </span>
          <div className="flex flex-wrap gap-2" role="radiogroup">
            {THEMES.map((theme) => {
              const selected = draft.accent === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  title={theme.label}
                  onClick={() => update((d) => { d.accent = theme.id; })}
                  style={{ backgroundColor: theme.accent }}
                  className={`h-9 w-9 rounded-full transition ${
                    selected
                      ? "ring-2 ring-slate-800 ring-offset-2"
                      : "hover:scale-110"
                  }`}
                >
                  {selected && (
                    <span className="text-sm leading-none text-white">✓</span>
                  )}
                </button>
              );
            })}
          </div>
          <p className="mt-1 text-xs text-slate-400">
            La couleur s&apos;applique instantanément à l&apos;aperçu.
          </p>
        </div>
      </EditorSection>

      {/* Identité */}
      <EditorSection title="Identité & photo" open>
        <TextInput
          label="Nom complet"
          value={draft.name}
          onChange={(v) => update((d) => { d.name = v; })}
          placeholder="Abdessamad Er-rochdi"
        />
        <TextInput
          label="Titre / poste"
          value={draft.title}
          onChange={(v) => update((d) => { d.title = v; })}
          placeholder="Senior Software Engineer"
        />
        <PhotoInput />
      </EditorSection>

      {/* Coordonnées */}
      <EditorSection title="Coordonnées">
        <TextInput
          label="Email"
          type="email"
          value={draft.contact.email}
          onChange={(v) => update((d) => { d.contact.email = v; })}
        />
        <TextInput
          label="Téléphone"
          type="tel"
          value={draft.contact.phone}
          onChange={(v) => update((d) => { d.contact.phone = v; })}
        />
        <TextInput
          label="Adresse"
          value={draft.contact.address}
          onChange={(v) => update((d) => { d.contact.address = v; })}
        />
        <TextInput
          label="LinkedIn"
          value={draft.contact.links.linkedin}
          onChange={(v) => update((d) => { d.contact.links.linkedin = v; })}
          placeholder="linkedin.com/in/…"
        />
        <TextInput
          label="GitHub"
          value={draft.contact.links.github}
          onChange={(v) => update((d) => { d.contact.links.github = v; })}
          placeholder="github.com/…"
        />
        <TextInput
          label="Portfolio"
          value={draft.contact.links.portfolio}
          onChange={(v) => update((d) => { d.contact.links.portfolio = v; })}
          placeholder="monsite.fr"
        />
      </EditorSection>

      {/* Profil */}
      <EditorSection title="Résumé / profil">
        <TextArea
          label="Profil professionnel"
          value={draft.summary}
          onChange={(v) => update((d) => { d.summary = v; })}
          rows={5}
        />
      </EditorSection>

      {/* Expériences */}
      <EditorSection title={`Expériences (${draft.experiences.length})`}>
        <Repeater<Experience>
          items={draft.experiences}
          addLabel="Ajouter une expérience"
          emptyLabel="Aucune expérience pour le moment."
          onAdd={() => addItem("experiences")}
          onRemove={(index) =>
            update((d) => { d.experiences.splice(index, 1); })
          }
          onMove={(index, direction) =>
            update((d) => {
              const [item] = d.experiences.splice(index, 1);
              d.experiences.splice(index + direction, 0, item);
            })
          }
          renderItem={(exp) => <ExperienceFields exp={exp} />}
        />
      </EditorSection>

      {/* Formations */}
      <EditorSection title={`Formations (${draft.education.length})`}>
        <Repeater<Education>
          items={draft.education}
          addLabel="Ajouter une formation"
          emptyLabel="Aucune formation pour le moment."
          onAdd={() => addItem("education")}
          onRemove={(index) => update((d) => { d.education.splice(index, 1); })}
          onMove={(index, direction) =>
            update((d) => {
              const [item] = d.education.splice(index, 1);
              d.education.splice(index + direction, 0, item);
            })
          }
          renderItem={(edu) => (
            <>
              <TextInput
                label="Diplôme"
                value={edu.degree}
                onChange={(v) =>
                  update((d) => {
                    const target = findItem(d.education, edu.id);
                    if (target) target.degree = v;
                  })
                }
              />
              <TextInput
                label="École / Université"
                value={edu.school}
                onChange={(v) =>
                  update((d) => {
                    const target = findItem(d.education, edu.id);
                    if (target) target.school = v;
                  })
                }
              />
              <div className="grid grid-cols-2 gap-3">
                <TextInput
                  label="Période"
                  value={edu.period}
                  onChange={(v) =>
                    update((d) => {
                      const target = findItem(d.education, edu.id);
                      if (target) target.period = v;
                    })
                  }
                />
                <TextInput
                  label="Détails (optionnel)"
                  value={edu.details}
                  onChange={(v) =>
                    update((d) => {
                      const target = findItem(d.education, edu.id);
                      if (target) target.details = v;
                    })
                  }
                />
              </div>
            </>
          )}
        />
      </EditorSection>

      {/* Compétences */}
      <EditorSection title={`Compétences (${draft.skills.length})`}>
        <Repeater
          items={draft.skills}
          addLabel="Ajouter un groupe de compétences"
          emptyLabel="Aucune compétence pour le moment."
          onAdd={() => addItem("skills")}
          onRemove={(index) => update((d) => { d.skills.splice(index, 1); })}
          onMove={(index, direction) =>
            update((d) => {
              const [item] = d.skills.splice(index, 1);
              d.skills.splice(index + direction, 0, item);
            })
          }
          renderItem={(skill) => (
            <>
              <TextInput
                label="Catégorie"
                value={skill.category}
                onChange={(v) =>
                  update((d) => {
                    const target = findItem(d.skills, skill.id);
                    if (target) target.category = v;
                  })
                }
              />
              <TextArea
                label="Compétences (séparées par des virgules)"
                rows={2}
                value={skill.items.join(", ")}
                onChange={(v) =>
                  update((d) => {
                    const target = findItem(d.skills, skill.id);
                    if (target)
                      target.items = v.split(",").map((s) => s.trim());
                  })
                }
              />
            </>
          )}
        />
      </EditorSection>

      {/* Langues */}
      <EditorSection title={`Langues (${draft.languages.length})`}>
        <Repeater<LanguageItem>
          items={draft.languages}
          addLabel="Ajouter une langue"
          emptyLabel="Aucune langue pour le moment."
          onAdd={() => addItem("languages")}
          onRemove={(index) => update((d) => { d.languages.splice(index, 1); })}
          onMove={(index, direction) =>
            update((d) => {
              const [item] = d.languages.splice(index, 1);
              d.languages.splice(index + direction, 0, item);
            })
          }
          renderItem={(lang) => (
            <div className="grid grid-cols-2 gap-3">
              <TextInput
                label="Langue"
                value={lang.language}
                onChange={(v) =>
                  update((d) => {
                    const target = findItem(d.languages, lang.id);
                    if (target) target.language = v;
                  })
                }
              />
              <TextInput
                label="Niveau"
                value={lang.level}
                onChange={(v) =>
                  update((d) => {
                    const target = findItem(d.languages, lang.id);
                    if (target) target.level = v;
                  })
                }
              />
            </div>
          )}
        />
      </EditorSection>

      {/* Certifications */}
      <EditorSection title={`Certifications (${draft.certifications.length})`}>
        <Repeater<Certification>
          items={draft.certifications}
          addLabel="Ajouter une certification"
          emptyLabel="Aucune certification pour le moment."
          onAdd={() => addItem("certifications")}
          onRemove={(index) =>
            update((d) => { d.certifications.splice(index, 1); })
          }
          onMove={(index, direction) =>
            update((d) => {
              const [item] = d.certifications.splice(index, 1);
              d.certifications.splice(index + direction, 0, item);
            })
          }
          renderItem={(cert) => (
            <>
              <TextInput
                label="Nom"
                value={cert.name}
                onChange={(v) =>
                  update((d) => {
                    const target = findItem(d.certifications, cert.id);
                    if (target) target.name = v;
                  })
                }
              />
              <div className="grid grid-cols-2 gap-3">
                <TextInput
                  label="Organisme"
                  value={cert.issuer}
                  onChange={(v) =>
                    update((d) => {
                      const target = findItem(d.certifications, cert.id);
                      if (target) target.issuer = v;
                    })
                  }
                />
                <TextInput
                  label="Année"
                  value={cert.year}
                  onChange={(v) =>
                    update((d) => {
                      const target = findItem(d.certifications, cert.id);
                      if (target) target.year = v;
                    })
                  }
                />
              </div>
            </>
          )}
        />
      </EditorSection>
    </form>
  );
}

function findItem<T extends { id: string }>(
  items: T[],
  id: string
): T | undefined {
  return items.find((item) => item.id === id);
}

function ExperienceFields({ exp }: { exp: Experience }) {
  const { update } = useCv();
  return (
    <>
      <TextInput
        label="Poste"
        value={exp.title}
        onChange={(v) =>
          update((d) => {
            const target = findItem(d.experiences, exp.id);
            if (target) target.title = v;
          })
        }
      />
      <TextInput
        label="Entreprise"
        value={exp.company}
        onChange={(v) =>
          update((d) => {
            const target = findItem(d.experiences, exp.id);
            if (target) target.company = v;
          })
        }
      />
      <div className="grid grid-cols-2 gap-3">
        <TextInput
          label="Période"
          value={exp.period}
          onChange={(v) =>
            update((d) => {
              const target = findItem(d.experiences, exp.id);
              if (target) target.period = v;
            })
          }
        />
        <TextInput
          label="Lieu"
          value={exp.location}
          onChange={(v) =>
            update((d) => {
              const target = findItem(d.experiences, exp.id);
              if (target) target.location = v;
            })
          }
        />
      </div>
      <TextArea
        label="Réalisations (une par ligne)"
        rows={4}
        value={exp.bullets.join("\n")}
        onChange={(v) =>
          update((d) => {
            const target = findItem(d.experiences, exp.id);
            if (target) target.bullets = v.split("\n");
          })
        }
        hint="Chaque ligne devient une puce dans le CV."
      />
    </>
  );
}
