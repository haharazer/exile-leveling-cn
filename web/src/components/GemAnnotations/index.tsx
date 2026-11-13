import { useAtom, useAtomValue } from "jotai";
import { useState, type ReactNode } from "react";
import type { RouteData } from "common";
import {
  gemNotesAtom,
  gemSourceModeAtom,
  gemSourcesAtom,
} from "../../state/gem-annotations";
import { formStyles } from "../../styles";
import styles from "./styles.module.css";

export function GemSourceOptions() {
  const [mode, setMode] = useAtom(gemSourceModeAtom);
  return (
    <div className={styles.options}>
      <label>
        技能来源展示规则{" "}
        <select
          className={formStyles.formInput}
          value={mode}
          onChange={(event) => setMode(event.target.value as "first" | "all")}
        >
          <option value="all">全部展示</option>
          <option value="first">仅展示首次出现位置</option>
        </select>
      </label>
    </div>
  );
}

export function GemAnnotations({
  gem,
  children,
}: {
  gem: RouteData.RequiredGem;
  children: ReactNode;
}) {
  const mode = useAtomValue(gemSourceModeAtom);
  const sources = useAtomValue(gemSourcesAtom)[gem.id] ?? [];
  const titles =
    mode === "all" && sources.length > 0
      ? sources
      : [gem.note || sources[0]].filter(Boolean);

  return (
    <div className={styles.annotations}>
      <div className={styles.sources}>
        {titles.length > 0 && <span>{titles.join(" / ")}</span>}
        {children}
      </div>
    </div>
  );
}

export function GemUserNote({ gemId }: { gemId: string }) {
  const note = useAtomValue(gemNotesAtom)[gemId];
  return note ? <div className={styles.note}>备注：{note}</div> : null;
}

export function GemNoteEditor({
  gemId,
  onClose,
}: {
  gemId: string;
  onClose: () => void;
}) {
  const [notes, setNotes] = useAtom(gemNotesAtom);
  const [draft, setDraft] = useState(notes[gemId] ?? "");
  return (
    <div className={styles.editor} onClick={(event) => event.stopPropagation()}>
      <label>
        个人备注
        <textarea
          className={formStyles.formInput}
          rows={3}
          value={draft}
          placeholder="例如：第二颗放副手练级，第三幕后替换旧技能"
          autoFocus
          onChange={(event) => setDraft(event.target.value)}
        />
      </label>
      <div className={styles.actions}>
        <button
          type="button"
          className={formStyles.formButton}
          onClick={onClose}
        >
          取消
        </button>
        <button
          type="button"
          className={formStyles.formButton}
          onClick={() => {
            const next = { ...notes };
            const text = draft.trim();
            if (text) next[gemId] = text;
            else delete next[gemId];
            setNotes(next);
            onClose();
          }}
        >
          保存
        </button>
      </div>
    </div>
  );
}
