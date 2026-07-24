import { CopyToClipboard } from "../../CopyToClipboard";
import { InlineFakeBlock } from "../../InlineFakeBlock";
import { ItemReward } from "../../ItemReward";
import styles from "./styles.module.css";
import classNames from "classnames";
import { Data, type Fragments, type GameData } from "common";
import React from "react";
import { gameText, message, type Locale } from "../../../i18n";
import {
  BsArrowDownLeftSquare,
  BsArrowDownRightSquare,
  BsArrowDownSquare,
  BsArrowLeftSquare,
  BsArrowRightSquare,
  BsArrowUpLeftSquare,
  BsArrowUpRightSquare,
  BsArrowUpSquare,
} from "react-icons/bs";

function getImageUrl(path: string) {
  return new URL(`./images/${path}`, import.meta.url).href;
}

function minAreaLevel(areaLevel: number) {
  return Math.max(1, areaLevel - (3 + Math.floor(areaLevel / 16)));
}

function MinAreaLevelComponent(areaLevel: number) {
  return (
    <span className={classNames(styles.areaLevel)}>
      {minAreaLevel(areaLevel)}
      {"+"}
    </span>
  );
}

function EnemyComponent(enemy: string, locale: Locale) {
  return (
    <span className={classNames(styles.enemy)}>{gameText(locale, enemy)}</span>
  );
}

function AreaComponent(
  name: string,
  isTownArea: boolean,
  areaLevel: number | undefined,
  locale: Locale,
) {
  return (
    <div className={classNames(styles.noWrap)}>
      <span className={classNames(styles.area)}>{gameText(locale, name)}</span>
      {!isTownArea && areaLevel !== undefined && (
        <> {MinAreaLevelComponent(areaLevel)}</>
      )}
      {isTownArea && (
        <img
          src={getImageUrl("town.png")}
          className={classNames("inlineIcon")}
          alt=""
        />
      )}
    </div>
  );
}

function QuestComponent(fragment: Fragments.QuestFragment, locale: Locale) {
  const quest = Data.Quests[fragment.questId];

  const npcs = Array.from(
    new Set(
      fragment.rewardOffers
        .map((x) => quest.reward_offers[x]?.quest_npc)
        .filter((x) => x !== undefined)
    )
  );

  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("quest.png")}
        className={classNames("inlineIcon")}
        alt=""
      />
      <span className={classNames(styles.quest)}>
        {gameText(locale, quest.name)}
      </span>
      {npcs.length > 0 && (
        <>
          {" "}
          -{" "}
          {GenericComponent(
            Array.from(npcs)
              .map((npc) => gameText(locale, npc))
              .join(", "),
            locale,
          )}
        </>
      )}
    </div>
  );
}

function QuestTextComponent(text: string, locale: Locale) {
  return (
    <span className={classNames(styles.questText)}>
      {gameText(locale, text)}
    </span>
  );
}

function localizedAreaName(area: GameData.Area, locale: Locale) {
  if (area.map_name) {
    const localizedMapName = gameText(locale, area.map_name);
    if (localizedMapName !== area.map_name) return localizedMapName;
  }
  return gameText(locale, area.name);
}

function WaypointComponent(locale: Locale) {
  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("waypoint.png")}
        className={classNames("inlineIcon")}
        alt=""
      />
      <span className={classNames(styles.waypoint)}>
        {message(locale, "waypoint")}
      </span>
    </div>
  );
}

function TrialComponent(locale: Locale) {
  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("trial.png")}
        className={classNames("inlineIcon")}
        alt=""
      />
      <span className={classNames(styles.trial)}>
        {message(locale, "trial")}
      </span>
    </div>
  );
}

function LogoutComponent(area: GameData.Area, locale: Locale) {
  return (
    <>
      {GenericComponent(message(locale, "logout"), locale)}
      <span> ➞ </span>
      {AreaComponent(area.name, area.is_town_area, area.level, locale)}
    </>
  );
}

function PortalComponent(locale: Locale, area?: GameData.Area) {
  return (
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("portal.png")}
        className={classNames("inlineIcon")}
        alt=""
      />
      <span className={classNames(styles.portal)}>
        {message(locale, "portal")}
      </span>
      {area && (
        <>
          <span> ➞ </span>
          {AreaComponent(area.name, area.is_town_area, area.level, locale)}
        </>
      )}
    </div>
  );
}

const directions = [
  <InlineFakeBlock child={<BsArrowUpSquare />} />,
  <InlineFakeBlock child={<BsArrowUpRightSquare />} />,
  <InlineFakeBlock child={<BsArrowRightSquare />} />,
  <InlineFakeBlock child={<BsArrowDownRightSquare />} />,
  <InlineFakeBlock child={<BsArrowDownSquare />} />,
  <InlineFakeBlock child={<BsArrowDownLeftSquare />} />,
  <InlineFakeBlock child={<BsArrowLeftSquare />} />,
  <InlineFakeBlock child={<BsArrowUpLeftSquare />} />,
];

function DirectionComponent(dirIndex: number) {
  return <span>{directions[dirIndex]}</span>;
}

function GenericComponent(text: string, locale: Locale) {
  return (
    <span className={classNames(styles.default)}>{gameText(locale, text)}</span>
  );
}

function CraftingComponent(craftingRecipes: string[], locale: Locale) {
  return (
    <span>
      <div className={classNames(styles.noWrap)}>
        <img
          src={getImageUrl("crafting.png")}
          className={classNames("inlineIcon")}
          alt=""
        />
        {GenericComponent(message(locale, "crafting"), locale)}
      </div>
      {GenericComponent(
        craftingRecipes.map((recipe) => gameText(locale, recipe)).join(", "),
        locale,
      )}
    </span>
  );
}

const ASCEND_LOOKUP: Record<
  Fragments.AscendFragment["version"],
  { url: string; areaId: string }
> = {
  normal: { url: "https://www.poelab.com/gtgax", areaId: "1_Labyrinth_boss_3" },
  cruel: { url: "https://www.poelab.com/r8aws", areaId: "2_Labyrinth_boss_3" },
  merciless: {
    url: "https://www.poelab.com/riikv",
    areaId: "3_Labyrinth_boss_3",
  },
  eternal: {
    url: "https://www.poelab.com/wfbra",
    areaId: "EndGame_Labyrinth_boss_3",
  },
};

function AscendComponent(
  version: Fragments.AscendFragment["version"],
  locale: Locale,
): [React.ReactNode, React.ReactNode] {
  const { url, areaId } = ASCEND_LOOKUP[version];
  const area = Data.Areas[areaId];
  return [
    <div className={classNames(styles.noWrap)}>
      <img
        src={getImageUrl("trial.png")}
        className={classNames("inlineIcon")}
        alt=""
      />
      <span className={classNames(styles.trial)}>
        {message(locale, "trial")}
      </span>
      <> {MinAreaLevelComponent(area.level)}</>
    </div>,
    <a
      href={url}
      target="_blank"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {message(locale, "dailyLayout")}
    </a>,
  ];
}

export function Fragment(
  fragment: Fragments.AnyFragment,
  locale: Locale,
): [React.ReactNode, React.ReactNode] {
  if (typeof fragment === "string") return [<>{fragment}</>, null];

  switch (fragment.type) {
    case "kill":
      return [EnemyComponent(fragment.value, locale), null];
    case "arena":
      return [AreaComponent(fragment.value, false, undefined, locale), null];
    case "area": {
      const area = Data.Areas[fragment.areaId];
      return [
        AreaComponent(area.name, area.is_town_area, area.level, locale),
        null,
      ];
    }
    case "enter": {
      const area = Data.Areas[fragment.areaId];
      return [
        AreaComponent(area.name, area.is_town_area, area.level, locale),
        null,
      ];
    }
    case "logout":
      return [LogoutComponent(Data.Areas[fragment.areaId], locale), null];
    case "waypoint":
      return [WaypointComponent(locale), null];
    case "waypoint_use": {
      const dstArea = Data.Areas[fragment.dstAreaId];
      const srcArea = Data.Areas[fragment.srcAreaId];
      return [
        <>
          {WaypointComponent(locale)}
          <span> ➞ </span>
          {AreaComponent(
            localizedAreaName(dstArea, locale),
            dstArea.is_town_area,
            dstArea.level,
            locale,
          )}
          {dstArea.act !== srcArea.act &&
            dstArea.id !== "Labyrinth_Airlock" && (
              <>
                {" "}
                - {GenericComponent(message(locale, "act")(dstArea.act), locale)}
              </>
            )}
        </>,
        null,
      ];
    }
    case "waypoint_get":
      return [WaypointComponent(locale), null];
    case "portal_use":
      return [PortalComponent(locale, Data.Areas[fragment.dstAreaId]), null];
    case "portal_set":
      return [PortalComponent(locale), null];
    case "quest":
      return [QuestComponent(fragment, locale), null];
    case "quest_text":
      return [QuestTextComponent(fragment.value, locale), null];
    case "generic":
      return [GenericComponent(fragment.value, locale), null];
    case "reward_quest":
      return [<ItemReward item={fragment.item} rewardType="quest" />, null];
    case "reward_vendor":
      return [
        <ItemReward
          item={fragment.item}
          cost={fragment.cost}
          rewardType="vendor"
        />,
        null,
      ];
    case "trial":
      return [TrialComponent(locale), null];
    case "ascend":
      return AscendComponent(fragment.version, locale);
    case "crafting":
      return [CraftingComponent(fragment.crafting_recipes, locale), null];
    case "dir":
      return [DirectionComponent(fragment.dirIndex), null];
    case "copy":
      let output: [React.ReactNode | null, React.ReactNode | null] = [
        null,
        null,
      ];

      const node = <CopyToClipboard text={fragment.text} />;
      switch (fragment.side) {
        case "head":
          output[0] = node;
          break;
        case "tail":
          output[1] = node;
          break;
      }

      return output;
  }

  return [<>{`unmapped: ${JSON.stringify(fragment)}`}</>, null];
}
