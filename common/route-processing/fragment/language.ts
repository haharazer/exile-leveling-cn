export namespace Language {
  export type Fragment =
    | "kill"
    | "arena"
    | "area"
    | "enter"
    | "logout"
    | "waypoint"
    | "waypoint_get"
    | "portal"
    | "quest"
    | "quest_text"
    | "generic"
    | "reward_quest"
    | "reward_vendor"
    | "trial"
    | "ascend"
    | "crafting"
    | "dir"
    | "copy";

  export interface FragmentParameter {
    name: string;
    description: string;
  }

  export interface FragmentVariant {
    description: string;
    parameters: FragmentParameter[];
  }

  export const FragmentDescriptionLookup: Record<Fragment, FragmentVariant[]> =
    {
      ["kill"]: [
        {
          description: "击杀目标（部分首领会解锁传送点）",
          parameters: [{ name: "text", description: "显示的文字内容" }],
        },
      ],
      ["arena"]: [
        {
          description: "区域内的子区域名称",
          parameters: [{ name: "text", description: "显示的文字内容" }],
        },
      ],
      ["area"]: [
        {
          description: "查找区域信息",
          parameters: [
            {
              name: "area_id",
              description: "游戏内部使用的区域 ID",
            },
          ],
        },
      ],
      ["enter"]: [
        {
          description: "进入指定区域",
          parameters: [
            {
              name: "area_id",
              description: "游戏内部使用的区域 ID",
            },
          ],
        },
      ],
      ["logout"]: [
        {
          description: "登出或返回角色选择界面，会移除传送门",
          parameters: [],
        },
      ],
      ["waypoint"]: [
        {
          description: "标记当前区域的传送点",
          parameters: [],
        },
        {
          description: "使用传送点",
          parameters: [
            {
              name: "area_id",
              description: "游戏内部使用的区域 ID",
            },
          ],
        },
      ],
      ["waypoint_get"]: [
        {
          description: "解锁当前区域的传送点",
          parameters: [],
        },
      ],
      ["portal"]: [
        {
          description: "在当前区域设置传送门",
          parameters: [
            {
              name: "set",
              description: "关键字",
            },
          ],
        },
        {
          description:
            "使用当前区域的传送门，必要时会放置传送门",
          parameters: [
            {
              name: "use",
              description: "关键字",
            },
          ],
        },
      ],
      ["quest"]: [
        {
          description:
            "提交任务并领取所有奖励（会生成宝石步骤）",
          parameters: [
            {
              name: "quest_id",
              description: "游戏内部使用的任务 ID",
            },
          ],
        },
        {
          description:
            "提交任务并领取指定奖励（会生成宝石步骤）",
          parameters: [
            {
              name: "quest_id",
              description: "游戏内部使用的任务 ID",
            },
            {
              name: "reward_offer_id",
              description: "游戏内部使用的奖励选项 ID",
            },
          ],
        },
      ],
      ["quest_text"]: [
        {
          description: "任务文本",
          parameters: [{ name: "text", description: "显示的文字内容" }],
        },
      ],
      ["generic"]: [
        {
          description: "通用文本",
          parameters: [{ name: "text", description: "显示的文字内容" }],
        },
      ],
      ["reward_quest"]: [
        {
          description: "建议领取的任务奖励",
          parameters: [{ name: "text", description: "显示的文字内容" }],
        },
      ],
      ["reward_vendor"]: [
        {
          description: "建议购买的商店奖励",
          parameters: [
            { name: "text", description: "显示的文字内容" },
            {
              name: "cost",
              description:
                "所需货币：智慧卷轴/改造石/改良石/机遇石/炼金石",
            },
          ],
        },
      ],
      ["trial"]: [
        {
          description: "完成当前区域的升华试炼",
          parameters: [],
        },
      ],
      ["ascend"]: [
        {
          description: "完成升华迷宫",
          parameters: [
            {
              name: "version",
              description:
                "迷宫难度：普通/残酷/残暴/永恒",
            },
          ],
        },
      ],
      ["crafting"]: [
        {
          description: "获取当前区域的工艺配方",
          parameters: [],
        },
      ],
      ["dir"]: [
        {
          description: "指示方向",
          parameters: [
            {
              name: "number",
              description: "以 45 度为单位的角度表示，0 代表正上方",
            },
          ],
        },
      ],
      ["copy"]: [
        {
          description: "一键复制文本",
          parameters: [
            {
              name: "text",
              description: "需要复制的文本",
            },
          ],
        },
      ],
    };
}
