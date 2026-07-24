import styles from "./styles.module.css";
import classNames from "classnames";
import { type FallbackProps } from "react-error-boundary";
import { useAtomValue } from "jotai";
import { localeSelector } from "../../state/locale";
import { message } from "../../i18n";

export function ErrorFallback({}: FallbackProps) {
  const locale = useAtomValue(localeSelector);
  return (
    <span>
      {message(locale, "errorPrefix")}
      <span
        className={classNames(styles.reset)}
        onClick={() => {
          localStorage.clear();
          location.reload();
        }}
      >
        {message(locale, "here")}
      </span>
      {message(locale, "errorSuffix")}
    </span>
  );
}
