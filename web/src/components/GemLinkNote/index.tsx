import { useSetAtom } from "jotai";
import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { gemLinksSelector } from "../../state/gem-links";
import { formStyles } from "../../styles";
import styles from "./styles.module.css";

export function GemLinkNote({
  groupIndex,
  note,
}: {
  groupIndex: number;
  note?: string;
}) {
  const setGemLinks = useSetAtom(gemLinksSelector);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(note ?? "");

  if (!editing) {
    return (
      <>
        {note && (
          <div className={styles.holder}>
            <div className={styles.note}>{note}</div>
          </div>
        )}
        <button
          type="button"
          className={styles.editButton}
          aria-label={note ? "编辑备注" : "添加备注"}
          title={note ? "编辑备注" : "添加备注"}
          onClick={() => {
            setDraft(note ?? "");
            setEditing(true);
          }}
        >
          <FiEdit2 aria-hidden="true" />
        </button>
      </>
    );
  }

  return (
    <div className={styles.holder}>
      <label>
        连法备注
        <textarea
          className={formStyles.formInput}
          rows={3}
          value={draft}
          autoFocus
          onChange={(event) => setDraft(event.target.value)}
        />
      </label>
      <div className={styles.actions}>
        <button
          type="button"
          className={formStyles.formButton}
          onClick={() => setEditing(false)}
        >
          取消
        </button>
        <button
          type="button"
          className={formStyles.formButton}
          onClick={() => {
            setGemLinks((groups) =>
              groups.map((group, index) =>
                index === groupIndex
                  ? { ...group, note: draft.trim() || undefined }
                  : group,
              ),
            );
            setEditing(false);
          }}
        >
          保存
        </button>
      </div>
    </div>
  );
}
