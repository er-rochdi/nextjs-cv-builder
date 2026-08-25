import { defaultCvData } from "./default-data";
import type { CvData } from "./types";

/**
 * Persistence layer.
 *
 * Today: localStorage. Tomorrow: replace the three functions below with
 * fetch() calls to an API — nothing else in the app needs to change,
 * because every component goes through this module (via CvProvider).
 */

const STORAGE_KEY = "cv-app:data:v1";

/** Returns the saved CV, the default data when nothing is stored, or null during SSR. */
export function loadCv(): CvData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultCvData;
    return { ...defaultCvData, ...(JSON.parse(raw) as CvData) };
  } catch (error) {
    console.warn("Failed to load CV data, falling back to defaults.", error);
    return defaultCvData;
  }
}

export function saveCv(data: CvData): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    notifyCvChanged();
  } catch (error) {
    console.error("Failed to save CV data (storage full?).", error);
    throw error;
  }
}

export function clearCv(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    notifyCvChanged();
  } catch (error) {
    console.warn("Failed to clear CV data.", error);
  }
}

/* ------------------------------------------------------------------ */
/* Subscription API — lets React read localStorage via                */
/* useSyncExternalStore without setState-in-effects.                   */
/* ------------------------------------------------------------------ */

const listeners = new Set<() => void>();

/** Subscribe to CV data changes (same tab + other tabs via `storage` events). */
export function subscribeCv(onChange: () => void): () => void {
  listeners.add(onChange);
  if (typeof window !== "undefined") {
    window.addEventListener("storage", onChange);
  }
  return () => {
    listeners.delete(onChange);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onChange);
    }
  };
}

/** Raw stored JSON (referentially stable while unchanged). Null during SSR. */
export function getCvSnapshot(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function notifyCvChanged(): void {
  for (const listener of listeners) listener();
}
