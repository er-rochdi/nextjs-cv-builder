(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/cv/cv-app.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CvApp",
    ()=>CvApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cv/cv-editor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cv/cv-preview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cv/cv-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function Toolbar() {
    _s();
    const { isDirty, save, cancel, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCv"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur print:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-[1600px] flex-wrap items-center gap-2 px-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mr-auto flex items-center gap-2 text-sm font-bold text-slate-800",
                    children: [
                        "CV Builder",
                        isDirty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700",
                            children: "Modifications non enregistrées"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cv/cv-app.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cv/cv-app.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: save,
                    disabled: !isDirty,
                    className: "rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow transition enabled:hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40",
                    children: "Enregistrer"
                }, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-app.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: cancel,
                    disabled: !isDirty,
                    className: "rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition enabled:hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40",
                    children: "Annuler les modifications"
                }, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-app.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>{
                        if (window.confirm("Réinitialiser le CV avec les données d'exemple ? Les données enregistrées seront effacées.")) {
                            reset();
                        }
                    },
                    className: "rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-sm transition hover:bg-red-50",
                    children: "Réinitialiser"
                }, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-app.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>window.print(),
                    className: "rounded-md border border-slate-800 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-800 hover:text-white",
                    children: "Télécharger / Imprimer le CV"
                }, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-app.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cv/cv-app.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/cv/cv-app.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Toolbar, "H0CnOdGhYEfS7kVy3esEIHHuZ3w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCv"]
    ];
});
_c = Toolbar;
function BuilderLayout() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto grid max-w-[1600px] grid-cols-1 gap-6 p-4 lg:grid-cols-[minmax(360px,420px)_1fr] lg:items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                id: "editeur",
                "aria-label": "Éditeur du CV",
                className: "order-1 space-y-3 print:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CvEditor"], {}, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-app.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-app.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "apercu",
                "aria-label": "Aperçu du CV",
                className: "order-2 min-w-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PreviewColumn, {}, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-app.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-app.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cv/cv-app.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c1 = BuilderLayout;
/** Mobile anchor link so users can jump from the editor to the preview. */ function PreviewColumn() {
    _s1();
    const { draft } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCv"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#editeur",
                className: "mb-3 inline-block rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm lg:hidden print:hidden",
                children: "↑ Retour à l'éditeur"
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-app.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CvPreview"], {
                cv: draft
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-app.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cv/cv-app.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s1(PreviewColumn, "5Kh0WkfOer9UK5vPM9N9cRsTd04=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCv"]
    ];
});
_c2 = PreviewColumn;
function CvApp() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CvProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-200 print:bg-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toolbar, {}, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-app.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BuilderLayout, {}, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-app.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cv/cv-app.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/cv/cv-app.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c3 = CvApp;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Toolbar");
__turbopack_context__.k.register(_c1, "BuilderLayout");
__turbopack_context__.k.register(_c2, "PreviewColumn");
__turbopack_context__.k.register(_c3, "CvApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cv/cv-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CvProvider",
    ()=>CvProvider,
    "useCv",
    ()=>useCv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cv/default-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cv/storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const CvContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function parseSnapshot(snapshot) {
    if (snapshot === null) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCvData"];
    try {
        return {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCvData"],
            ...JSON.parse(snapshot)
        };
    } catch (error) {
        console.warn("Stored CV data is corrupted, using defaults.", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCvData"];
    }
}
function CvProvider({ children }) {
    _s();
    /**
   * The persisted value is read through useSyncExternalStore:
   * - server & hydration render see `null` -> defaults (no SSR mismatch),
   * - after hydration the client snapshot is used,
   * - `save()`/`reset()` notify subscribers, so `saved` refreshes automatically.
   * No setState-in-effect is needed anywhere.
   */ const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeCv"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCvSnapshot"], {
        "CvProvider.useSyncExternalStore[snapshot]": ()=>null
    }["CvProvider.useSyncExternalStore[snapshot]"]);
    const saved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CvProvider.useMemo[saved]": ()=>parseSnapshot(snapshot)
    }["CvProvider.useMemo[saved]"], [
        snapshot
    ]);
    /** Local edits; null means "in sync with saved". */ const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const data = draft ?? saved;
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CvProvider.useCallback[update]": (mutate)=>{
            setDraft({
                "CvProvider.useCallback[update]": (prevBase)=>{
                    const next = structuredClone(prevBase ?? saved);
                    mutate(next);
                    return next;
                }
            }["CvProvider.useCallback[update]"]);
        }
    }["CvProvider.useCallback[update]"], [
        saved
    ]);
    const save = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CvProvider.useCallback[save]": ()=>{
            // Read the draft from state directly: side effects (saveCv -> listeners)
            // are forbidden inside setState updater functions, which React may
            // re-run during render.
            if (draft !== null) {
                // Notifies subscribers -> `saved` recomputes from storage.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveCv"])(draft);
            }
            setDraft(null); // back in sync with saved
        }
    }["CvProvider.useCallback[save]"], [
        draft
    ]);
    const cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CvProvider.useCallback[cancel]": ()=>{
            setDraft(null); // discard edits, fall back to saved data
        }
    }["CvProvider.useCallback[cancel]"], []);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CvProvider.useCallback[reset]": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCv"])(); // notifies subscribers -> saved becomes defaults
            setDraft(null);
        }
    }["CvProvider.useCallback[reset]"], []);
    const addItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CvProvider.useCallback[addItem]": (key)=>{
            update({
                "CvProvider.useCallback[addItem]": (d)=>{
                    switch(key){
                        case "experiences":
                            d.experiences.push({
                                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newId"])(),
                                title: "",
                                company: "",
                                period: "",
                                location: "",
                                bullets: []
                            });
                            break;
                        case "education":
                            d.education.push({
                                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newId"])(),
                                degree: "",
                                school: "",
                                period: "",
                                details: ""
                            });
                            break;
                        case "skills":
                            d.skills.push({
                                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newId"])(),
                                category: "",
                                items: []
                            });
                            break;
                        case "languages":
                            d.languages.push({
                                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newId"])(),
                                language: "",
                                level: ""
                            });
                            break;
                        case "certifications":
                            d.certifications.push({
                                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newId"])(),
                                name: "",
                                issuer: "",
                                year: ""
                            });
                            break;
                    }
                }
            }["CvProvider.useCallback[addItem]"]);
        }
    }["CvProvider.useCallback[addItem]"], [
        update
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CvProvider.useMemo[value]": ()=>({
                draft: data,
                isDirty: draft !== null && JSON.stringify(draft) !== JSON.stringify(saved),
                update,
                save,
                cancel,
                reset,
                addItem
            })
    }["CvProvider.useMemo[value]"], [
        data,
        draft,
        saved,
        update,
        save,
        cancel,
        reset,
        addItem
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CvContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/cv/cv-context.tsx",
        lineNumber: 145,
        columnNumber: 10
    }, this);
}
_s(CvProvider, "YEkNZilnfNqHZrPfptWRmtkrlLA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = CvProvider;
function useCv() {
    _s1();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CvContext);
    if (!store) throw new Error("useCv must be used inside <CvProvider>");
    return store;
}
_s1(useCv, "Wl1jJrZzTCxjtMcqth/dX4wg3Uo=");
var _c;
__turbopack_context__.k.register(_c, "CvProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cv/cv-editor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CvEditor",
    ()=>CvEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cv/cv-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cv/fields.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$repeater$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cv/repeater.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
/** Collapsible section used to organize the editor. */ function EditorSection({ title, children, open = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        open: open,
        className: "group rounded-lg border border-slate-200 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: "flex cursor-pointer select-none items-center justify-between px-4 py-3 text-sm font-bold text-slate-800 marker:content-none",
                children: [
                    title,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-normal text-slate-400 transition group-open:rotate-180",
                        children: "▼"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-editor.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 border-t border-slate-100 p-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cv/cv-editor.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = EditorSection;
function CvEditor() {
    _s();
    const { draft, update, addItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCv"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: (e)=>e.preventDefault(),
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorSection, {
                title: "Identité & photo",
                open: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                        label: "Nom complet",
                        value: draft.name,
                        onChange: (v)=>update((d)=>{
                                d.name = v;
                            }),
                        placeholder: "Abdessamad Er-rochdi"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-editor.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                        label: "Titre / poste",
                        value: draft.title,
                        onChange: (v)=>update((d)=>{
                                d.title = v;
                            }),
                        placeholder: "Senior Software Engineer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-editor.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhotoInput"], {}, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-editor.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorSection, {
                title: "Coordonnées",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                        label: "Email",
                        type: "email",
                        value: draft.contact.email,
                        onChange: (v)=>update((d)=>{
                                d.contact.email = v;
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-editor.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                        label: "Téléphone",
                        type: "tel",
                        value: draft.contact.phone,
                        onChange: (v)=>update((d)=>{
                                d.contact.phone = v;
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-editor.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                        label: "Adresse",
                        value: draft.contact.address,
                        onChange: (v)=>update((d)=>{
                                d.contact.address = v;
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-editor.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                        label: "LinkedIn",
                        value: draft.contact.links.linkedin,
                        onChange: (v)=>update((d)=>{
                                d.contact.links.linkedin = v;
                            }),
                        placeholder: "linkedin.com/in/…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-editor.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                        label: "GitHub",
                        value: draft.contact.links.github,
                        onChange: (v)=>update((d)=>{
                                d.contact.links.github = v;
                            }),
                        placeholder: "github.com/…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-editor.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                        label: "Portfolio",
                        value: draft.contact.links.portfolio,
                        onChange: (v)=>update((d)=>{
                                d.contact.links.portfolio = v;
                            }),
                        placeholder: "monsite.fr"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-editor.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorSection, {
                title: "Résumé / profil",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextArea"], {
                    label: "Profil professionnel",
                    value: draft.summary,
                    onChange: (v)=>update((d)=>{
                            d.summary = v;
                        }),
                    rows: 5
                }, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorSection, {
                title: `Expériences (${draft.experiences.length})`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$repeater$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repeater"], {
                    items: draft.experiences,
                    addLabel: "Ajouter une expérience",
                    emptyLabel: "Aucune expérience pour le moment.",
                    onAdd: ()=>addItem("experiences"),
                    onRemove: (index)=>update((d)=>{
                            d.experiences.splice(index, 1);
                        }),
                    onMove: (index, direction)=>update((d)=>{
                            const [item] = d.experiences.splice(index, 1);
                            d.experiences.splice(index + direction, 0, item);
                        }),
                    renderItem: (exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExperienceFields, {
                            exp: exp
                        }, void 0, false, {
                            fileName: "[project]/src/components/cv/cv-editor.tsx",
                            lineNumber: 126,
                            columnNumber: 32
                        }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorSection, {
                title: `Formations (${draft.education.length})`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$repeater$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repeater"], {
                    items: draft.education,
                    addLabel: "Ajouter une formation",
                    emptyLabel: "Aucune formation pour le moment.",
                    onAdd: ()=>addItem("education"),
                    onRemove: (index)=>update((d)=>{
                            d.education.splice(index, 1);
                        }),
                    onMove: (index, direction)=>update((d)=>{
                            const [item] = d.education.splice(index, 1);
                            d.education.splice(index + direction, 0, item);
                        }),
                    renderItem: (edu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                    label: "Diplôme",
                                    value: edu.degree,
                                    onChange: (v)=>update((d)=>{
                                            const target = findItem(d.education, edu.id);
                                            if (target) target.degree = v;
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                    label: "École / Université",
                                    value: edu.school,
                                    onChange: (v)=>update((d)=>{
                                            const target = findItem(d.education, edu.id);
                                            if (target) target.school = v;
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                            label: "Période",
                                            value: edu.period,
                                            onChange: (v)=>update((d)=>{
                                                    const target = findItem(d.education, edu.id);
                                                    if (target) target.period = v;
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cv/cv-editor.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                            label: "Détails (optionnel)",
                                            value: edu.details,
                                            onChange: (v)=>update((d)=>{
                                                    const target = findItem(d.education, edu.id);
                                                    if (target) target.details = v;
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cv/cv-editor.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cv/cv-editor.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorSection, {
                title: `Compétences (${draft.skills.length})`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$repeater$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repeater"], {
                    items: draft.skills,
                    addLabel: "Ajouter un groupe de compétences",
                    emptyLabel: "Aucune compétence pour le moment.",
                    onAdd: ()=>addItem("skills"),
                    onRemove: (index)=>update((d)=>{
                            d.skills.splice(index, 1);
                        }),
                    onMove: (index, direction)=>update((d)=>{
                            const [item] = d.skills.splice(index, 1);
                            d.skills.splice(index + direction, 0, item);
                        }),
                    renderItem: (skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                    label: "Catégorie",
                                    value: skill.category,
                                    onChange: (v)=>update((d)=>{
                                            const target = findItem(d.skills, skill.id);
                                            if (target) target.category = v;
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextArea"], {
                                    label: "Compétences (séparées par des virgules)",
                                    rows: 2,
                                    value: skill.items.join(", "),
                                    onChange: (v)=>update((d)=>{
                                            const target = findItem(d.skills, skill.id);
                                            if (target) target.items = v.split(",").map((s)=>s.trim());
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cv/cv-editor.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorSection, {
                title: `Langues (${draft.languages.length})`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$repeater$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repeater"], {
                    items: draft.languages,
                    addLabel: "Ajouter une langue",
                    emptyLabel: "Aucune langue pour le moment.",
                    onAdd: ()=>addItem("languages"),
                    onRemove: (index)=>update((d)=>{
                            d.languages.splice(index, 1);
                        }),
                    onMove: (index, direction)=>update((d)=>{
                            const [item] = d.languages.splice(index, 1);
                            d.languages.splice(index + direction, 0, item);
                        }),
                    renderItem: (lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                    label: "Langue",
                                    value: lang.language,
                                    onChange: (v)=>update((d)=>{
                                            const target = findItem(d.languages, lang.id);
                                            if (target) target.language = v;
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                    label: "Niveau",
                                    value: lang.level,
                                    onChange: (v)=>update((d)=>{
                                            const target = findItem(d.languages, lang.id);
                                            if (target) target.level = v;
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cv/cv-editor.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorSection, {
                title: `Certifications (${draft.certifications.length})`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$repeater$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repeater"], {
                    items: draft.certifications,
                    addLabel: "Ajouter une certification",
                    emptyLabel: "Aucune certification pour le moment.",
                    onAdd: ()=>addItem("certifications"),
                    onRemove: (index)=>update((d)=>{
                            d.certifications.splice(index, 1);
                        }),
                    onMove: (index, direction)=>update((d)=>{
                            const [item] = d.certifications.splice(index, 1);
                            d.certifications.splice(index + direction, 0, item);
                        }),
                    renderItem: (cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                    label: "Nom",
                                    value: cert.name,
                                    onChange: (v)=>update((d)=>{
                                            const target = findItem(d.certifications, cert.id);
                                            if (target) target.name = v;
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                            label: "Organisme",
                                            value: cert.issuer,
                                            onChange: (v)=>update((d)=>{
                                                    const target = findItem(d.certifications, cert.id);
                                                    if (target) target.issuer = v;
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cv/cv-editor.tsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                            label: "Année",
                                            value: cert.year,
                                            onChange: (v)=>update((d)=>{
                                                    const target = findItem(d.certifications, cert.id);
                                                    if (target) target.year = v;
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cv/cv-editor.tsx",
                                            lineNumber: 316,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cv/cv-editor.tsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/cv/cv-editor.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cv/cv-editor.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(CvEditor, "by+8wYLYgeJZvBZnO5zAP2QxVJQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCv"]
    ];
});
_c1 = CvEditor;
function findItem(items, id) {
    return items.find((item)=>item.id === id);
}
function ExperienceFields({ exp }) {
    _s1();
    const { update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCv"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                label: "Poste",
                value: exp.title,
                onChange: (v)=>update((d)=>{
                        const target = findItem(d.experiences, exp.id);
                        if (target) target.title = v;
                    })
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                label: "Entreprise",
                value: exp.company,
                onChange: (v)=>update((d)=>{
                        const target = findItem(d.experiences, exp.id);
                        if (target) target.company = v;
                    })
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                        label: "Période",
                        value: exp.period,
                        onChange: (v)=>update((d)=>{
                                const target = findItem(d.experiences, exp.id);
                                if (target) target.period = v;
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-editor.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                        label: "Lieu",
                        value: exp.location,
                        onChange: (v)=>update((d)=>{
                                const target = findItem(d.experiences, exp.id);
                                if (target) target.location = v;
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-editor.tsx",
                        lineNumber: 377,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$fields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextArea"], {
                label: "Réalisations (une par ligne)",
                rows: 4,
                value: exp.bullets.join("\n"),
                onChange: (v)=>update((d)=>{
                        const target = findItem(d.experiences, exp.id);
                        if (target) target.bullets = v.split("\n");
                    }),
                hint: "Chaque ligne devient une puce dans le CV."
            }, void 0, false, {
                fileName: "[project]/src/components/cv/cv-editor.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cv/cv-editor.tsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
}
_s1(ExperienceFields, "/iAkSVWfDZ7XPb6sxOTxWqZByfM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCv"]
    ];
});
_c2 = ExperienceFields;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "EditorSection");
__turbopack_context__.k.register(_c1, "CvEditor");
__turbopack_context__.k.register(_c2, "ExperienceFields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cv/cv-preview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CvPreview",
    ()=>CvPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function SectionTitle({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: "mb-3 border-b-2 border-slate-800 pb-1 text-sm font-bold uppercase tracking-widest text-slate-800",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/cv/cv-preview.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = SectionTitle;
/** Strip protocol for display, e.g. "https://github.com/x" -> "github.com/x". */ function displayUrl(url) {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
function CvPreview({ cv }) {
    const links = [
        cv.contact.links.linkedin,
        cv.contact.links.github,
        cv.contact.links.portfolio
    ].filter(Boolean).map(displayUrl);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "cv-page mx-auto w-full max-w-[210mm] bg-white p-12 shadow-lg print:max-w-none print:p-0 print:shadow-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-8 flex items-start justify-between gap-6 border-b-4 border-slate-800 pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-5",
                        children: [
                            cv.photo && // eslint-disable-next-line @next/next/no-img-element -- local data URL
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: cv.photo,
                                alt: `Photo de ${cv.name}`,
                                className: "h-24 w-24 shrink-0 rounded-full border-2 border-slate-800 object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-extrabold tracking-tight text-slate-900",
                                        children: cv.name || "Votre nom"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-lg font-medium text-slate-600",
                                        children: cv.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right text-sm leading-relaxed text-slate-600",
                        children: [
                            cv.contact.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: cv.contact.email
                            }, void 0, false, {
                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                lineNumber: 56,
                                columnNumber: 32
                            }, this),
                            cv.contact.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: cv.contact.phone
                            }, void 0, false, {
                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                lineNumber: 57,
                                columnNumber: 32
                            }, this),
                            cv.contact.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: cv.contact.address
                            }, void 0, false, {
                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                lineNumber: 58,
                                columnNumber: 34
                            }, this),
                            links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: link
                                }, link, false, {
                                    fileName: "[project]/src/components/cv/cv-preview.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/cv-preview.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            cv.summary.trim() !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                        children: "Profile"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "whitespace-pre-line text-sm leading-relaxed text-slate-700",
                        children: cv.summary
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/cv-preview.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            cv.experiences.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                        children: "Professional Experience"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: cv.experiences.map((exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-baseline justify-between gap-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-slate-900",
                                                children: [
                                                    exp.title,
                                                    (exp.title || exp.company) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-slate-600",
                                                        children: [
                                                            " · ",
                                                            exp.company
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium uppercase tracking-wide text-slate-500",
                                                children: [
                                                    exp.period,
                                                    exp.location
                                                ].filter(Boolean).join(" · ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this),
                                    exp.bullets.filter(Boolean).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700",
                                        children: exp.bullets.filter(Boolean).map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: b
                                            }, `${exp.id}-${i}`, false, {
                                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                                lineNumber: 99,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, exp.id, true, {
                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/cv-preview.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this),
            cv.education.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                        children: "Education"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: cv.education.map((edu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-baseline justify-between gap-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-slate-900",
                                                children: edu.degree
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium uppercase tracking-wide text-slate-500",
                                                children: edu.period
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    edu.school && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-600",
                                        children: edu.school
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this),
                                    edu.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-slate-700",
                                        children: edu.details
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 128,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, edu.id, true, {
                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/cv-preview.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this),
            cv.skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                        children: "Skills"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "grid grid-cols-2 gap-x-8 gap-y-3 text-sm",
                        children: cv.skills.filter((s)=>s.category || s.items.some(Boolean)).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "font-semibold text-slate-900",
                                        children: s.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 145,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "mt-0.5 text-slate-700",
                                        children: s.items.filter(Boolean).join(", ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 146,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, s.id, true, {
                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                lineNumber: 144,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/cv-preview.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this),
            cv.languages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                        children: "Languages"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-wrap gap-x-8 gap-y-1 text-sm text-slate-700",
                        children: cv.languages.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-slate-900",
                                        children: l.language
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this),
                                    l.level && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            " — ",
                                            l.level
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 165,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, l.id, true, {
                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/cv-preview.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this),
            cv.certifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                        children: "Certifications"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2 text-sm text-slate-700",
                        children: cv.certifications.map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex flex-wrap justify-between gap-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-slate-900",
                                                children: cert.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this),
                                            cert.issuer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    " — ",
                                                    cert.issuer
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                                lineNumber: 183,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this),
                                    cert.year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium uppercase tracking-wide text-slate-500",
                                        children: cert.year
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                                        lineNumber: 186,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, cert.id, true, {
                                fileName: "[project]/src/components/cv/cv-preview.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/cv-preview.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/cv-preview.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cv/cv-preview.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c1 = CvPreview;
var _c, _c1;
__turbopack_context__.k.register(_c, "SectionTitle");
__turbopack_context__.k.register(_c1, "CvPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cv/fields.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>Field,
    "PhotoInput",
    ()=>PhotoInput,
    "TextArea",
    ()=>TextArea,
    "TextInput",
    ()=>TextInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cv/cv-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const inputClasses = "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-800 focus:ring-2 focus:ring-slate-800/20";
function Field({ label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/cv/fields.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cv/fields.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = Field;
function TextInput({ label, value, onChange, placeholder, type = "text" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
        label: label,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: type,
            className: inputClasses,
            value: value,
            placeholder: placeholder,
            onChange: (e)=>onChange(e.target.value)
        }, void 0, false, {
            fileName: "[project]/src/components/cv/fields.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/cv/fields.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c1 = TextInput;
function TextArea({ label, value, onChange, rows = 4, hint }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
        label: label,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: `${inputClasses} resize-y leading-relaxed`,
                rows: rows,
                value: value,
                onChange: (e)=>onChange(e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/components/cv/fields.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 block text-xs text-slate-400",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/cv/fields.tsx",
                lineNumber: 75,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cv/fields.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c2 = TextArea;
/** Downscale + convert the picked image to a data URL so it fits in localStorage. */ function fileToResizedDataUrl(file, maxSize = 400) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onerror = ()=>reject(new Error("read error"));
        reader.onload = ()=>{
            const img = new Image();
            img.onerror = ()=>reject(new Error("image error"));
            img.onload = ()=>{
                const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
                const canvas = document.createElement("canvas");
                canvas.width = Math.round(img.width * scale);
                canvas.height = Math.round(img.height * scale);
                const ctx = canvas.getContext("2d");
                if (!ctx) return reject(new Error("canvas error"));
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL("image/jpeg", 0.85));
            };
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    });
}
function PhotoInput() {
    _s();
    const { draft, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCv"])();
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    async function onPick(event) {
        const file = event.target.files?.[0];
        event.target.value = ""; // allow re-picking the same file
        if (!file) return;
        try {
            const dataUrl = await fileToResizedDataUrl(file);
            update((data)=>{
                data.photo = dataUrl;
            });
        } catch  {
            console.error("Could not process the image.");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            draft.photo ? // eslint-disable-next-line @next/next/no-img-element -- local data URL, next/image unnecessary
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: draft.photo,
                alt: "Photo de profil",
                className: "h-16 w-16 rounded-full border border-slate-200 object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/cv/fields.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-slate-300 text-xs text-slate-400",
                children: "—"
            }, void 0, false, {
                fileName: "[project]/src/components/cv/fields.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>fileRef.current?.click(),
                        className: "rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50",
                        children: "Choisir une photo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/fields.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    draft.photo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>update((data)=>{
                                data.photo = null;
                            }),
                        className: "text-left text-xs text-red-600 hover:underline",
                        children: "Supprimer la photo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cv/fields.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/fields.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileRef,
                type: "file",
                accept: "image/*",
                onChange: onPick,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/cv/fields.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cv/fields.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(PhotoInput, "9BucwBaljj5KoCTJ85ZAVJIa4Lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cv$2f$cv$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCv"]
    ];
});
_c3 = PhotoInput;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Field");
__turbopack_context__.k.register(_c1, "TextInput");
__turbopack_context__.k.register(_c2, "TextArea");
__turbopack_context__.k.register(_c3, "PhotoInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cv/repeater.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Repeater",
    ()=>Repeater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Repeater({ items, onAdd, onRemove, onMove, addLabel, renderItem, emptyLabel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            items.length === 0 && emptyLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-md border border-dashed border-slate-300 px-3 py-4 text-center text-xs text-slate-400",
                children: emptyLabel
            }, void 0, false, {
                fileName: "[project]/src/components/cv/repeater.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg border border-slate-200 bg-slate-50/60 p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold text-slate-400",
                                    children: [
                                        "#",
                                        index + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cv/repeater.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                                            label: "Monter",
                                            disabled: index === 0,
                                            onClick: ()=>onMove(index, -1),
                                            children: "↑"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cv/repeater.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                                            label: "Descendre",
                                            disabled: index === items.length - 1,
                                            onClick: ()=>onMove(index, 1),
                                            children: "↓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cv/repeater.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                                            label: "Supprimer",
                                            danger: true,
                                            onClick: ()=>onRemove(index),
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cv/repeater.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cv/repeater.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cv/repeater.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        renderItem(item, index)
                    ]
                }, item.id, true, {
                    fileName: "[project]/src/components/cv/repeater.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onAdd,
                className: "w-full rounded-md border border-dashed border-slate-400 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-800 hover:text-slate-900",
                children: [
                    "+ ",
                    addLabel
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cv/repeater.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cv/repeater.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Repeater;
function IconButton({ label, onClick, disabled, danger, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        title: label,
        "aria-label": label,
        disabled: disabled,
        onClick: onClick,
        className: `flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 bg-white text-xs shadow-sm transition enabled:hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 ${danger ? "text-red-600" : "text-slate-600"}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/cv/repeater.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c1 = IconButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "Repeater");
__turbopack_context__.k.register(_c1, "IconButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cv/default-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultCvData",
    ()=>defaultCvData,
    "newId",
    ()=>newId
]);
function newId() {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
        return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
const defaultCvData = {
    name: "John Doe",
    title: "Senior Software Engineer",
    template: "classic",
    accent: "slate",
    photo: null,
    contact: {
        email: "john.doe@email.com",
        phone: "+33 6 12 34 56 78",
        address: "123 Rue Example, 75000 Paris",
        links: {
            linkedin: "linkedin.com/in/johndoe",
            github: "github.com/johndoe",
            portfolio: ""
        }
    },
    summary: "Results-driven software engineer with 7+ years of experience building scalable web applications. Passionate about clean architecture, developer experience, and delivering products that users love. Proven track record of leading teams and modernizing complex systems.",
    experiences: [
        {
            id: newId(),
            title: "Senior Software Engineer",
            company: "Tech Corp",
            period: "2022 — Present",
            location: "Paris, France",
            bullets: [
                "Led the migration of a legacy monolith to a microservices architecture, reducing deploy time by 60%.",
                "Mentored 5 junior engineers and established code review standards.",
                "Designed and shipped a real-time analytics pipeline serving 2M+ daily events."
            ]
        },
        {
            id: newId(),
            title: "Software Engineer",
            company: "Startup Inc",
            period: "2019 — 2022",
            location: "Lyon, France",
            bullets: [
                "Built customer-facing web applications with React and Node.js.",
                "Improved API response times by 40% through query optimization and caching.",
                "Introduced automated testing, raising coverage from 20% to 85%."
            ]
        }
    ],
    education: [
        {
            id: newId(),
            degree: "MSc Computer Science",
            school: "Université Paris-Saclay",
            period: "2017 — 2019",
            details: "Specialization in distributed systems. Graduated with honors."
        },
        {
            id: newId(),
            degree: "BSc Computer Science",
            school: "Université Claude Bernard Lyon 1",
            period: "2014 — 2017",
            details: ""
        }
    ],
    skills: [
        {
            id: newId(),
            category: "Languages",
            items: [
                "TypeScript",
                "JavaScript",
                "Python",
                "SQL",
                "Go"
            ]
        },
        {
            id: newId(),
            category: "Frontend",
            items: [
                "React",
                "Next.js",
                "Tailwind CSS",
                "Vue"
            ]
        },
        {
            id: newId(),
            category: "Backend",
            items: [
                "Node.js",
                "PostgreSQL",
                "Redis",
                "GraphQL",
                "REST APIs"
            ]
        },
        {
            id: newId(),
            category: "Tools",
            items: [
                "Git",
                "Docker",
                "AWS",
                "CI/CD",
                "Jest"
            ]
        }
    ],
    languages: [
        {
            id: newId(),
            language: "French",
            level: "Native"
        },
        {
            id: newId(),
            language: "English",
            level: "Fluent (C1)"
        },
        {
            id: newId(),
            language: "Spanish",
            level: "Intermediate (B1)"
        }
    ],
    certifications: [
        {
            id: newId(),
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            year: "2023"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cv/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCv",
    ()=>clearCv,
    "getCvSnapshot",
    ()=>getCvSnapshot,
    "loadCv",
    ()=>loadCv,
    "saveCv",
    ()=>saveCv,
    "subscribeCv",
    ()=>subscribeCv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cv/default-data.ts [app-client] (ecmascript)");
;
/**
 * Persistence layer.
 *
 * Today: localStorage. Tomorrow: replace the three functions below with
 * fetch() calls to an API — nothing else in the app needs to change,
 * because every component goes through this module (via CvProvider).
 */ const STORAGE_KEY = "cv-app:data:v1";
function loadCv() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCvData"];
        return {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCvData"],
            ...JSON.parse(raw)
        };
    } catch (error) {
        console.warn("Failed to load CV data, falling back to defaults.", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cv$2f$default$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCvData"];
    }
}
function saveCv(data) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        notifyCvChanged();
    } catch (error) {
        console.error("Failed to save CV data (storage full?).", error);
        throw error;
    }
}
function clearCv() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.removeItem(STORAGE_KEY);
        notifyCvChanged();
    } catch (error) {
        console.warn("Failed to clear CV data.", error);
    }
}
/* ------------------------------------------------------------------ */ /* Subscription API — lets React read localStorage via                */ /* useSyncExternalStore without setState-in-effects.                   */ /* ------------------------------------------------------------------ */ const listeners = new Set();
function subscribeCv(onChange) {
    listeners.add(onChange);
    if ("TURBOPACK compile-time truthy", 1) {
        window.addEventListener("storage", onChange);
    }
    return ()=>{
        listeners.delete(onChange);
        if ("TURBOPACK compile-time truthy", 1) {
            window.removeEventListener("storage", onChange);
        }
    };
}
function getCvSnapshot() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return window.localStorage.getItem(STORAGE_KEY);
    } catch  {
        return null;
    }
}
function notifyCvChanged() {
    for (const listener of listeners)listener();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_05jhsiz._.js.map