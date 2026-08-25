"use client";

import { useRef } from "react";

import type { CvData } from "@/lib/cv/types";
import { useCv } from "./cv-context";

const inputClasses =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-800 focus:ring-2 focus:ring-slate-800/20";

export function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </span>
      {children}
    </label>
  );
}

export function TextInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "url";
}) {
  return (
    <Field label={label}>
      <input
        type={type}
        className={inputClasses}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </Field>
  );
}

export function TextArea({
  label,
  value,
  onChange,
  rows = 4,
  hint,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  hint?: string;
}) {
  return (
    <Field label={label}>
      <textarea
        className={`${inputClasses} resize-y leading-relaxed`}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {hint && <span className="mt-1 block text-xs text-slate-400">{hint}</span>}
    </Field>
  );
}

/** Downscale + convert the picked image to a data URL so it fits in localStorage. */
function fileToResizedDataUrl(file: File, maxSize = 400): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("read error"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("image error"));
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("canvas error"));
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export function PhotoInput() {
  const { draft, update } = useCv();
  const fileRef = useRef<HTMLInputElement>(null);

  async function onPick(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = ""; // allow re-picking the same file
    if (!file) return;
    try {
      const dataUrl = await fileToResizedDataUrl(file);
      update((data: CvData) => {
        data.photo = dataUrl;
      });
    } catch {
      console.error("Could not process the image.");
    }
  }

  return (
    <div className="flex items-center gap-3">
      {draft.photo ? (
        // eslint-disable-next-line @next/next/no-img-element -- local data URL, next/image unnecessary
        <img
          src={draft.photo}
          alt="Photo de profil"
          className="h-16 w-16 rounded-full border border-slate-200 object-cover"
        />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-slate-300 text-xs text-slate-400">
          —
        </div>
      )}
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          Choisir une photo
        </button>
        {draft.photo && (
          <button
            type="button"
            onClick={() => update((data) => { data.photo = null; })}
            className="text-left text-xs text-red-600 hover:underline"
          >
            Supprimer la photo
          </button>
        )}
      </div>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={onPick}
        className="hidden"
      />
    </div>
  );
}
