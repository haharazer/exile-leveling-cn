import { atom } from "jotai";
import { persistentAtom } from ".";
import { gemLinksSelector } from "./gem-links";

export const gemNotesAtom = persistentAtom<Record<string, string>>(
  "gem-user-notes",
  {},
  0,
);

export const gemSourceModeAtom = persistentAtom<"first" | "all">(
  "gem-source-mode",
  "first",
  0,
);

export const gemSourcesAtom = atom((get) => {
  const sources: Record<string, string[]> = {};
  for (const group of get(gemLinksSelector)) {
    const title = group.title.trim();
    if (!title) continue;
    for (const gem of [...group.primaryGems, ...group.secondaryGems]) {
      const titles = (sources[gem.id] ??= []);
      if (!titles.includes(title)) titles.push(title);
    }
  }
  return sources;
});

export const removeGemNoteAtom = atom(null, (get, set, id: string) => {
  const notes = { ...get(gemNotesAtom) };
  delete notes[id];
  set(gemNotesAtom, notes);
});
