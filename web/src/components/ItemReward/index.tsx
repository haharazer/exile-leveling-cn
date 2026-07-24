import { CopyToClipboard } from "../CopyToClipboard";
import { GemCost } from "../GemCost";
import { InlineFakeBlock } from "../InlineFakeBlock";
import { SplitRow } from "../SplitRow";
import styles from "./styles.module.css";
import classNames from "classnames";
import { Data, type RouteData } from "common";
import type { ReactNode } from "react";
import { MdCircle } from "react-icons/md";
import { useAtomValue } from "jotai";
import { localeSelector } from "../../state/locale";
import { gameText, message, type Locale } from "../../i18n";

function ItemRewardVerb(type: ItemRewardProps["rewardType"], locale: Locale) {
  switch (type) {
    case "quest":
      return <span>{message(locale, "take")}</span>;
    case "vendor":
      return <span>{message(locale, "buy")}</span>;
    default:
      return <></>;
  }
}

interface ItemRewardProps {
  item: string;
  count?: number;
  rewardType?: "quest" | "vendor";
  cost?: ReactNode;
}

export function ItemReward({ item, count, cost, rewardType }: ItemRewardProps) {
  const locale = useAtomValue(localeSelector);
  return (
    <>
      {ItemRewardVerb(rewardType, locale)}
      <span className={classNames(styles.default)}>
        {gameText(locale, item)}
      </span>
      {count && count > 1 && <span> x{count}</span>}
      {rewardType === "vendor" && cost !== undefined && (
        <div className={classNames(styles.noWrap)}>
          <span>{message(locale, "requires")}</span>
          <InlineFakeBlock child={cost} />
        </div>
      )}
    </>
  );
}

interface GemRewardProps {
  requiredGem: RouteData.RequiredGem;
  count: number;
  rewardType?: ItemRewardProps["rewardType"];
}

export function GemReward({ requiredGem, count, rewardType }: GemRewardProps) {
  const locale = useAtomValue(localeSelector);
  const gem = Data.Gems[requiredGem.id];

  if (!gem)
    return (
      <div className={classNames(styles.gemError)}>
        {message(locale, "gemMissing")} <b>{requiredGem.id}</b>
      </div>
    );

  return (
    <SplitRow
      left={
        <>
          <MdCircle
            color={Data.GemColours[gem.primary_attribute]}
            className={classNames("inlineIcon")}
          />
          <ItemReward
            item={gameText(locale, gem.name)}
            cost={<GemCost gem={gem} />}
            rewardType={rewardType}
            count={count}
          />
        </>
      }
      right={
        <div className={classNames(styles.rewardNote)}>
          {requiredGem.note}{" "}
          <CopyToClipboard text={gameText(locale, gem.name)} />
        </div>
      }
    />
  );
}
