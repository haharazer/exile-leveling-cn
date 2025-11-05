import { RouteData } from "../../../../common/route-processing/types";
import { SplitRow } from "../SplitRow";
import styles from "./styles.module.css";
import classNames from "classnames";

const CLASS_LABELS: Record<string, string> = {
  Marauder: "野蛮人",
  Duelist: "决斗者",
  Ranger: "游侠",
  Shadow: "暗影",
  Witch: "女巫",
  Templar: "圣堂武僧",
  Scion: "贵族",
};

const BANDIT_LABELS: Record<string, string> = {
  None: "全部击杀",
  'Kill All': "全部击杀",
  Alira: "阿丽拉",
  Kraityn: "克雷顿",
  Oak: "欧克",
};

interface BuildInfoFormProps {
  buildData: RouteData.BuildData;
  onSubmit: (buildData: RouteData.BuildData) => void;
}

export function BuildInfoForm({ buildData, onSubmit }: BuildInfoFormProps) {
  return (
    <div className={classNames(styles.form)}>
      <SplitRow
        left={<div className={classNames(styles.label)}>职业</div>}
        right={
          <div className={classNames(styles.value)}>
            {CLASS_LABELS[buildData.characterClass] ?? buildData.characterClass}
          </div>
        }
      />
      <SplitRow
        left={<div className={classNames(styles.label)}>强盗选择</div>}
        right={
          <div className={classNames(styles.value)}>
            {BANDIT_LABELS[buildData.bandit] ?? buildData.bandit}
          </div>
        }
      />
      <SplitRow
        left={<div className={classNames(styles.label)}>赛季开荒模式</div>}
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
              aria-label="赛季开荒模式"
            />
          </div>
        }
      />
      <SplitRow
        left={<div className={classNames(styles.label)}>图书馆支线</div>}
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
              aria-label="图书馆支线"
            />
          </div>
        }
      />
    </div>
  );
}
