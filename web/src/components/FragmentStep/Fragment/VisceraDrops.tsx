import type { Locale } from "../../../i18n";
import { useAtomValue } from "jotai";
import { configSelector } from "../../../state/config";
import snapshot from "../../../data/viscera.json";
import styles from "./styles.module.css";

interface Drop {
  id: string;
  tier: string;
  "zh-CN": { name: string; boss: string; effects: string[] };
  "zh-TW": { name: string; boss: string; effects: string[] };
}

const dropsByArea: Readonly<Record<string, readonly Drop[]>> = snapshot.areas;

export function VisceraDrops({
  areaId,
  locale,
}: {
  areaId: string;
  locale: Locale;
}) {
  const config = useAtomValue(configSelector);
  if (config.showViscera !== true) return null;
  const drops = dropsByArea[areaId];
  if (!drops?.length) return null;
  const sourceLocale = locale === "zh-TW" ? "tw" : "cn";

  return (
    <span className={styles.visceraDrops} data-viscera-area={areaId}>
      {" 【肢体："}
      {drops.map((drop, index) => {
        const { name, boss, effects } = drop[locale];
        const tier = drop.tier === "Low" ? "LOW" : "未分档（剧情可掉落）";
        return (
          <span key={drop.id}>
            {index > 0 && "；"}
            <a
              className={styles.visceraDrop}
              href={`https://poedb.tw/${sourceLocale}/${drop.id}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`${boss} · ${name}\n${tier} · 概率掉落\n点击查看 PoEDB 部件详情`}
              onClick={(event) => event.stopPropagation()}
            >
              {effects.join(" / ")}
              <span className={styles.visceraBoss}>（{boss}）</span>
            </a>
          </span>
        );
      })}
      {"】"}
    </span>
  );
}
