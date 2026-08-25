"use client";

import { CvEditor } from "./cv-editor";
import { CvPreview } from "./cv-preview";
import { CvProvider, useCv } from "./cv-context";

function Toolbar() {
  const { isDirty, save, cancel, reset } = useCv();

  return (
    <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-2 px-4 py-3">
        <span className="mr-auto flex items-center gap-2 text-sm font-bold text-slate-800">
          CV Builder
          {isDirty && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
              Modifications non enregistrées
            </span>
          )}
        </span>

        <button
          type="button"
          onClick={save}
          disabled={!isDirty}
          className="rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow transition enabled:hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Enregistrer
        </button>
        <button
          type="button"
          onClick={cancel}
          disabled={!isDirty}
          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition enabled:hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Annuler les modifications
        </button>
        <button
          type="button"
          onClick={() => {
            if (
              window.confirm(
                "Réinitialiser le CV avec les données d'exemple ? Les données enregistrées seront effacées."
              )
            ) {
              reset();
            }
          }}
          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-sm transition hover:bg-red-50"
        >
          Réinitialiser
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-md border border-slate-800 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-800 hover:text-white"
        >
          Télécharger / Imprimer le CV
        </button>
      </div>
    </div>
  );
}

function BuilderLayout() {
  return (
    <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 p-4 lg:grid-cols-[minmax(360px,420px)_1fr] lg:items-start">
      {/* Éditeur */}
      <aside
        id="editeur"
        aria-label="Éditeur du CV"
        className="order-1 space-y-3 print:hidden"
      >
        <CvEditor />
      </aside>

      {/* Aperçu temps réel */}
      <section
        id="apercu"
        aria-label="Aperçu du CV"
        className="order-2 min-w-0"
      >
        <PreviewColumn />
      </section>
    </div>
  );
}

/** Mobile anchor link so users can jump from the editor to the preview. */
function PreviewColumn() {
  const { draft } = useCv();
  return (
    <>
      <a
        href="#editeur"
        className="mb-3 inline-block rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm lg:hidden print:hidden"
      >
        ↑ Retour à l&apos;éditeur
      </a>
      <CvPreview cv={draft} />
    </>
  );
}

export function CvApp() {
  return (
    <CvProvider>
      <div className="bg-slate-200 print:bg-white">
        <Toolbar />
        <BuilderLayout />
      </div>
    </CvProvider>
  );
}
