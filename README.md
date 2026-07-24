# Exile Leveling 中文版

本项目翻译并同步自
[HeartofPhos/exile-leveling](https://github.com/HeartofPhos/exile-leveling)，
是一份带 Path of Building 导入、技能树、宝石规划和自动进度功能的
Path of Exile 剧情升级指南。

## 语言支持

- 简体中文：简体界面、简体路线说明及简中游戏专名。
- 繁体中文（繁中客户端术语）：界面和“找到并击杀”“向某方向探索”等说明仍使用简体，
  只有区域、任务、NPC、怪物、技能和任务物品等游戏内名称采用台湾服繁中译名。
- 区域、任务、NPC、怪物和技能宝石以英文稳定名称为键，在显示时按语言查表。
- 简繁两种语言的自定义路线分别保存在浏览器中，切换语言不会覆盖另一份路线。
- 找不到可靠译名时保留英文，避免通过猜测或单纯字形转换产生错误游戏名。

语言可通过顶部的“简体中文 / 繁体中文”切换按钮选择。“繁体中文”面向日常使用简体中文、
但在繁体客户端游玩的用户；它不会把整页文字机械转换成繁体。

## 本地开发

```bash
npm ci
npm run dev
```

正式构建：

```bash
npm run build
```

## 更新三语专名

项目提交了生成后的语言资源。若本地同时存在 `poe-trans-data`，可以重新生成：

```powershell
python scripts/build_i18n.py `
  --translation-root C:\Users\hanpe\Desktop\poe-trans-data\data\poe1\output `
  --base-ref 11c7e5ab12afa706f7b71c807230ccad85d0e4e9 `
  --translated-ref f2723cf
```

生成器会优先采用 PoEDB 的简中/英文/繁中对照，并从旧中文数据补充
PoEDB 未单独列出的地图别名和工艺文本。`opencc-python-reimplemented`
只用于缺少正式对照的游戏实体名称后备转换，不会转换界面或路线说明。

同步上游路线顺序并重建简繁路线：

```powershell
python scripts/sync_localized_routes.py `
  --base-ref 11c7e5ab12afa706f7b71c807230ccad85d0e4e9 `
  --translated-ref f2723cf `
  --upstream-ref upstream/main
```

## 数据更新

天赋树：

```bash
npm run seed tree -w seeding
```

其他游戏数据所需的 `.dat.json` 文件见 `seeding/src/data/index.ts`，可使用
[HeartofPhos/exile-export](https://github.com/HeartofPhos/exile-export) 导出，然后运行：

```bash
npm run seed data -w seeding
```

路线内容会尽量跟随英文上游当前的竞速策略。用户也可以在应用的“编辑路线”
页面导入、导出或维护自己的版本。
