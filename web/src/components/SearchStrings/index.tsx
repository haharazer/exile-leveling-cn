import type { SearchString } from "../../state/search-strings";
import { borderListStyles, interactiveStyles } from "../../styles";
import styles from "./styles.module.css";
import classNames from "classnames";
import { FaRegClipboard } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAtomValue } from "jotai";
import { localeSelector } from "../../state/locale";
import { message } from "../../i18n";

interface SearchStringsProps {
  values: SearchString[];
}

export function SearchStrings({ values }: SearchStringsProps) {
  const locale = useAtomValue(localeSelector);
  return (
    <div className={classNames(styles.searchStrings)}>
      {values.map((value, i) => (
        <div
          key={i}
          className={classNames(
            borderListStyles.itemRound,
            interactiveStyles.hoverPrimary,
            interactiveStyles.activePrimary,
            styles.searchString
          )}
          onClick={() => {
            navigator.clipboard.writeText(value.text);
            toast.success(message(locale, "copied"));
          }}
        >
          <div>
            <FaRegClipboard className={classNames("inlineIcon")} />
          </div>
          {value.alias || value.text}
        </div>
      ))}
    </div>
  );
}
