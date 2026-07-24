import styles from "./styles.module.css";
import classNames from "classnames";
import { FaRegClipboard } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAtomValue } from "jotai";
import { localeSelector } from "../../state/locale";
import { message } from "../../i18n";

interface CopyToClipboardProps {
  text: string;
}

export function CopyToClipboard({ text }: CopyToClipboardProps) {
  const locale = useAtomValue(localeSelector);
  return (
    <span
      className={classNames(styles.copy)}
      onClick={(e) => {
        navigator.clipboard.writeText(text);
        toast.success(
          <div>
            {message(locale, "copied")}
            <br />
            {text}
          </div>
        );
        e.stopPropagation();
      }}
    >
      <FaRegClipboard className={classNames("inlineIcon")} />
    </span>
  );
}
