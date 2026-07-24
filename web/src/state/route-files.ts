import { RESET } from "jotai/utils";
import { persistentAtom } from ".";
import { globImportLazy } from "../utility";
import { localeSelector } from "./locale";
import type { Locale } from "../i18n";
import { type RouteData } from "common";
import { atom } from "jotai";

const ROUTE_PROGRESS_VERSION = 1;

export const RouteSourceLookup = globImportLazy<string>(
  import.meta.glob("/../common/data/routes/**/*.txt", {
    query: "?raw",
    import: "default",
  }),
  (key) => /routes\/(.*?).txt$/.exec(key)![1],
  (value) => value,
);

async function loadDefaultRouteFiles(locale: Locale) {
  const { getRouteFiles } = await import("common");

  const routeSources = await Promise.all(
    Array.from(
      { length: 10 },
      (_, index) => RouteSourceLookup[`${locale}/act-${index + 1}`],
    ),
  );

  return getRouteFiles(routeSources);
}

const routeFilesAtom = persistentAtom<
  Partial<Record<Locale, RouteData.RouteFile[]>>
>(
  "route-files",
  {},
  ROUTE_PROGRESS_VERSION + 1,
);

export const routeFilesSelector = atom(
  async (get) => {
    const locale = get(localeSelector);
    const data = get(routeFilesAtom)[locale];

    if (data === undefined) {
      return await loadDefaultRouteFiles(locale);
    }

    return data;
  },
  (get, set, value: RouteData.RouteFile[] | typeof RESET) => {
    const locale = get(localeSelector);
    if (value === RESET) {
      const next = { ...get(routeFilesAtom) };
      delete next[locale];
      set(routeFilesAtom, next);
      return;
    }
    set(routeFilesAtom, { ...get(routeFilesAtom), [locale]: value });
  },
);
