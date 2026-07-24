import { SplitRow } from "../SplitRow";
import styles from "./styles.module.css";
import classNames from "classnames";
import type { RouteData } from "common";
import { useAtomValue } from "jotai";
import { localeSelector } from "../../state/locale";
import {
  banditLabels,
  characterLabels,
  message,
} from "../../i18n";

interface BuildInfoFormProps {
  buildData: RouteData.BuildData;
  onSubmit: (buildData: RouteData.BuildData) => void;
}

export function BuildInfoForm({ buildData, onSubmit }: BuildInfoFormProps) {
  const locale = useAtomValue(localeSelector);
  return (
    <div className={classNames(styles.form)}>
      <SplitRow
        left={
          <div className={classNames(styles.label)}>
            {message(locale, "characterClass")}
          </div>
        }
        right={
          <div className={classNames(styles.value)}>
            {characterLabels[locale][buildData.characterClass] ??
              buildData.characterClass}
          </div>
        }
      />
      <SplitRow
        left={
          <div className={classNames(styles.label)}>
            {message(locale, "bandit")}
          </div>
        }
        right={
          <div className={classNames(styles.value)}>
            {banditLabels[locale][buildData.bandit] ?? buildData.bandit}
          </div>
        }
      />
      <SplitRow
        left={
          <div className={classNames(styles.label)}>
            {message(locale, "leagueStart")}
          </div>
        }
        right={
          <div className={classNames(styles.value)}>
            <input
              type="checkbox"
              checked={buildData.leagueStart}
              onChange={(evt) => {
                onSubmit({
                  ...buildData,
                  leagueStart: evt.target.checked,
                });
              }}
              aria-label={message(locale, "leagueStart")}
            />
          </div>
        }
      />
      <SplitRow
        left={
          <div className={classNames(styles.label)}>
            {message(locale, "library")}
          </div>
        }
        right={
          <div className={classNames(styles.value)}>
            <input
              type="checkbox"
              checked={buildData.library}
              onChange={(evt) => {
                onSubmit({
                  ...buildData,
                  library: evt.target.checked,
                });
              }}
              aria-label={message(locale, "library")}
            />
          </div>
        }
      />
    </div>
  );
}
