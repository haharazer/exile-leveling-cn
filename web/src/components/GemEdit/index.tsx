import { formStyles, interactiveStyles } from "../../styles";
import { GemReward } from "../ItemReward";
import styles from "./styles.module.css";
import classNames from "classnames";
import type { RouteData } from "common";
import { HiChevronDoubleUp, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { GemNoteEditor } from "../GemAnnotations";
import { removeGemNoteAtom } from "../../state/gem-annotations";

interface GemOrderProps {
  requiredGem: RouteData.RequiredGem;
  onMoveTop?: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onDelete?: () => void;
  onCountChange?: (value: number) => void;
}

export function GemEdit({
  requiredGem,
  onMoveTop,
  onMoveUp,
  onMoveDown,
  onDelete,
  onCountChange,
}: GemOrderProps) {
  const [editingNote, setEditingNote] = useState(false);
  const removeNote = useSetAtom(removeGemNoteAtom);
  return (
    <div className={classNames(styles.holder)}>
      <GemReward requiredGem={requiredGem} count={1} />
      <div
        className={classNames(styles.buttonGroup)}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.noteButton}
          aria-expanded={editingNote}
          onClick={(event) => {
            event.stopPropagation();
            setEditingNote(!editingNote);
          }}
        >
          备注
        </button>
        <label className={styles.quantity} title="需要准备的同名宝石数量">
          数量
          <input
            type="number"
            min={1}
            step={1}
            className={classNames(formStyles.formInput, styles.inputCount)}
            value={requiredGem.count}
            onFocus={(e) => {
              e.currentTarget.select();
            }}
            onChange={(e) => {
              if (onCountChange) {
                const num = Number(e.target.value);
                if (Number.isInteger(num) && num > 0) onCountChange(num);
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </label>
        <button
          className={classNames(styles.button, interactiveStyles.activePrimary)}
          onClick={(e) => {
            e.stopPropagation();
            if (onMoveUp) onMoveUp();
          }}
        >
          <HiChevronUp className={classNames(styles.buttonImage)} />
        </button>
        <button
          className={classNames(styles.button)}
          onClick={(e) => {
            e.stopPropagation();
            if (onMoveDown) onMoveDown();
          }}
        >
          <HiChevronDown className={classNames(styles.buttonImage)} />
        </button>
        <button
          className={classNames(styles.button)}
          onClick={(e) => {
            e.stopPropagation();
            if (onMoveTop) onMoveTop();
          }}
        >
          <HiChevronDoubleUp className={classNames(styles.buttonImage)} />
        </button>
        <button
          className={classNames(styles.button)}
          onClick={(e) => {
            e.stopPropagation();
            if (onDelete) {
              removeNote(requiredGem.id);
              onDelete();
            }
          }}
        >
          <MdDeleteOutline className={classNames(styles.buttonImage)} />
        </button>
      </div>
      {editingNote && (
        <GemNoteEditor
          gemId={requiredGem.id}
          onClose={() => setEditingNote(false)}
        />
      )}
    </div>
  );
}
