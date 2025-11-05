import { Data } from "../../../../common/data";
import { RouteData } from "../../../../common/route-processing/types";
import { CopyToClipboard } from "../CopyToClipboard";
import { GemCost } from "../GemCost";
import { InlineFakeBlock } from "../InlineFakeBlock";
import { SplitRow } from "../SplitRow";
import styles from "./styles.module.css";
import classNames from "classnames";
import { ReactNode } from "react";
import { MdCircle } from "react-icons/md";

function ItemRewardVerb(type: ItemRewardProps["rewardType"]) {
  switch (type) {
    case "quest":
      return <span>领取 </span>;
    case "vendor":
      return <span>购买 </span>;
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
  return (
    <>
      {ItemRewardVerb(rewardType)}
      <span className={classNames(styles.default)}>{item}</span>
      {count && count > 1 && <span> x{count}</span>}
      {rewardType === "vendor" && cost !== undefined && (
        <div className={classNames(styles.noWrap)}>
          <span> 需要 </span>
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
  const gem = Data.Gems[requiredGem.id];

  if (!gem)
    return (
      <div className={classNames(styles.gemError)}>
        糟糕，未找到 <b>{requiredGem.id}</b> 的宝石数据
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
            item={gem.name}
            cost={<GemCost gem={gem} />}
            rewardType={rewardType}
            count={count}
          />
        </>
      }
      right={
        <div className={classNames(styles.rewardNote)}>
          {requiredGem.note} <CopyToClipboard text={gem.name} />
        </div>
      }
    />
  );
}
