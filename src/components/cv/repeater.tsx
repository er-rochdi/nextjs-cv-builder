"use client";

/**
 * Generic repeater for dynamic CV sections: renders one card per item
 * with remove / move up / move down controls, plus an "add" button.
 * The parent supplies how each item's fields are rendered.
 */

export function Repeater<T extends { id: string }>({
  items,
  onAdd,
  onRemove,
  onMove,
  addLabel,
  renderItem,
  emptyLabel,
}: {
  items: T[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  /** Move item at `index` by `direction` (-1 = up, +1 = down). */
  onMove: (index: number, direction: -1 | 1) => void;
  addLabel: string;
  renderItem: (item: T, index: number) => React.ReactNode;
  emptyLabel?: string;
}) {
  return (
    <div className="space-y-3">
      {items.length === 0 && emptyLabel && (
        <p className="rounded-md border border-dashed border-slate-300 px-3 py-4 text-center text-xs text-slate-400">
          {emptyLabel}
        </p>
      )}

      {items.map((item, index) => (
        <div
          key={item.id}
          className="rounded-lg border border-slate-200 bg-slate-50/60 p-3"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">
              #{index + 1}
            </span>
            <div className="flex items-center gap-1">
              <IconButton
                label="Monter"
                disabled={index === 0}
                onClick={() => onMove(index, -1)}
              >
                ↑
              </IconButton>
              <IconButton
                label="Descendre"
                disabled={index === items.length - 1}
                onClick={() => onMove(index, 1)}
              >
                ↓
              </IconButton>
              <IconButton label="Supprimer" danger onClick={() => onRemove(index)}>
                ✕
              </IconButton>
            </div>
          </div>
          {renderItem(item, index)}
        </div>
      ))}

      <button
        type="button"
        onClick={onAdd}
        className="w-full rounded-md border border-dashed border-slate-400 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-800 hover:text-slate-900"
      >
        + {addLabel}
      </button>
    </div>
  );
}

function IconButton({
  label,
  onClick,
  disabled,
  danger,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  danger?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={`flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 bg-white text-xs shadow-sm transition enabled:hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 ${
        danger ? "text-red-600" : "text-slate-600"
      }`}
    >
      {children}
    </button>
  );
}
