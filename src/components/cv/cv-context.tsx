"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

import { defaultCvData, newId } from "@/lib/cv/default-data";
import {
  clearCv,
  getCvSnapshot,
  saveCv,
  subscribeCv,
} from "@/lib/cv/storage";
import type { CvData } from "@/lib/cv/types";

interface CvStore {
  /** Live data — updated on every keystroke, drives the preview. */
  draft: CvData;
  /** True when draft differs from the last saved version. */
  isDirty: boolean;
  update(mutate: (data: CvData) => void): void;
  save(): void;
  cancel(): void;
  reset(): void;
  addItem<K extends "experiences" | "education" | "skills" | "languages" | "certifications">(
    key: K
  ): void;
}

const CvContext = createContext<CvStore | null>(null);

function parseSnapshot(snapshot: string | null): CvData {
  if (snapshot === null) return defaultCvData;
  try {
    return { ...defaultCvData, ...(JSON.parse(snapshot) as CvData) };
  } catch (error) {
    console.warn("Stored CV data is corrupted, using defaults.", error);
    return defaultCvData;
  }
}

export function CvProvider({ children }: { children: React.ReactNode }) {
  /**
   * The persisted value is read through useSyncExternalStore:
   * - server & hydration render see `null` -> defaults (no SSR mismatch),
   * - after hydration the client snapshot is used,
   * - `save()`/`reset()` notify subscribers, so `saved` refreshes automatically.
   * No setState-in-effect is needed anywhere.
   */
  const snapshot = useSyncExternalStore(
    subscribeCv,
    getCvSnapshot,
    () => null
  );
  const saved = useMemo(() => parseSnapshot(snapshot), [snapshot]);

  /** Local edits; null means "in sync with saved". */
  const [draft, setDraft] = useState<CvData | null>(null);
  const data = draft ?? saved;

  const update = useCallback(
    (mutate: (data: CvData) => void) => {
      setDraft((prevBase) => {
        const next = structuredClone(prevBase ?? saved);
        mutate(next);
        return next;
      });
    },
    [saved]
  );

  const save = useCallback(() => {
    // Read the draft from state directly: side effects (saveCv -> listeners)
    // are forbidden inside setState updater functions, which React may
    // re-run during render.
    if (draft !== null) {
      // Notifies subscribers -> `saved` recomputes from storage.
      saveCv(draft);
    }
    setDraft(null); // back in sync with saved
  }, [draft]);

  const cancel = useCallback(() => {
    setDraft(null); // discard edits, fall back to saved data
  }, []);

  const reset = useCallback(() => {
    clearCv(); // notifies subscribers -> saved becomes defaults
    setDraft(null);
  }, []);

  const addItem = useCallback(
    <K extends "experiences" | "education" | "skills" | "languages" | "certifications">(
      key: K
    ) => {
      update((d) => {
        switch (key) {
          case "experiences":
            d.experiences.push({
              id: newId(),
              title: "",
              company: "",
              period: "",
              location: "",
              bullets: [],
            });
            break;
          case "education":
            d.education.push({ id: newId(), degree: "", school: "", period: "", details: "" });
            break;
          case "skills":
            d.skills.push({ id: newId(), category: "", items: [] });
            break;
          case "languages":
            d.languages.push({ id: newId(), language: "", level: "" });
            break;
          case "certifications":
            d.certifications.push({ id: newId(), name: "", issuer: "", year: "" });
            break;
        }
      });
    },
    [update]
  );

  const value = useMemo<CvStore>(
    () => ({
      draft: data,
      isDirty:
        draft !== null &&         JSON.stringify(draft) !== JSON.stringify(saved),
      update,
      save,
      cancel,
      reset,
      addItem,
    }),
    [data, draft, saved, update, save, cancel, reset, addItem]
  );

  return <CvContext.Provider value={value}>{children}</CvContext.Provider>;
}

export function useCv(): CvStore {
  const store = useContext(CvContext);
  if (!store) throw new Error("useCv must be used inside <CvProvider>");
  return store;
}
