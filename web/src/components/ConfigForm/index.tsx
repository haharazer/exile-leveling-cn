import type { Config } from "../../state/config";
import { SplitRow } from "../SplitRow";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useAtomValue } from "jotai";
import { localeSelector } from "../../state/locale";
import { message } from "../../i18n";

interface ConfigFormProps {
  config: Config;
  onSubmit: (config: Config) => void;
}

export function ConfigForm({ config, onSubmit }: ConfigFormProps) {
  const locale = useAtomValue(localeSelector);
  return (
    <div className={classNames(styles.form)}>
      <SplitRow
        left={
          <div className={classNames(styles.label)}>
            {message(locale, "gemsOnly")}
          </div>
        }
        right={
          <div className={classNames(styles.value)}>
            <input
              type="checkbox"
              checked={config.gemsOnly}
              onChange={(evt) => {
                onSubmit({
                  ...config,
                  gemsOnly: evt.target.checked,
                });
              }}
              aria-label={message(locale, "gemsOnly")}
            />
          </div>
        }
      />
      <SplitRow
        left={
          <div className={classNames(styles.label)}>
            {message(locale, "showSubsteps")}
          </div>
        }
        right={
          <div className={classNames(styles.value)}>
            <input
              type="checkbox"
              checked={config.showSubsteps}
              onChange={(evt) => {
                onSubmit({
                  ...config,
                  showSubsteps: evt.target.checked,
                });
              }}
              aria-label={message(locale, "showSubsteps")}
            />
          </div>
        }
      />
    </div>
  );
}
