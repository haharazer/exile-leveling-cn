var e=`#section 第四幕
➞ {enter|1_4_1} #水道遗迹
➞ {enter|1_4_town} #统治者之殿
➞ {enter|1_4_2} #干涸湖岸
找到并击杀 {kill|帝王福尔}，取得 {quest_text|迪虚瑞特的红旗}
获取 {crafting}
{logout}
破坏 {quest_text|德莎蕾特之封印}
提交 {quest|a4q2} #突破封印
➞ {enter|1_4_3_1} #漆黑矿坑:第 1 层
获取 {crafting}
➞ {enter|1_4_3_2} #漆黑矿坑:第 2 层
解救 {quest_text|德莎蕾特}
➞ {enter|1_4_3_3} #水晶矿脉
获取 {crafting}
{waypoint|1_4_town} #统治者之殿
提交 {quest|a4q6} #不屈意志
{waypoint|1_3_town} #萨恩营地
➞ {enter|Labyrinth_Airlock}，获得 {waypoint_get} #试炼者广场
{ascend|normal}
获取 {crafting|1_Labyrinth_boss_3}
{waypoint|1_4_3_3} #水晶矿脉
➞ {enter|1_4_5_1} #德瑞索的幻境
➞ {enter|1_4_5_2} #大竞技场
获取 {crafting}
{waypoint|1_4_3_3} #水晶矿脉
➞ {enter|1_4_4_1} #冈姆的幻境
➞ {enter|1_4_4_3} #冈姆的堡垒
    #sub 向{dir|45}方向前进
    #sub 沿着桥梁前进
获取 {crafting}
➞ {arena|火焰王之锅}，击杀 {kill|卡鲁之王冈姆}，取得 {quest_text|愤怒之眼}
{portal|use}
{waypoint|1_4_5_2} #大竞技场
➞ {arena|刃环}，击杀 {kill|斗剑之王德瑞索}，取得 {quest_text|欲望之眼}
    #sub 朝{dir|225}方向前进，出口保持{dir|270}方向
{logout}
{waypoint|1_4_3_3} #水晶矿脉
与 {generic|达拉夫人}对话
➞ {enter|1_4_6_1} #巨兽沼泽 1 层
➞ {enter|1_4_6_2} #巨兽沼泽 2 层
➞ {arena|兽腹深处}，击杀 {kill|派蒂, 憎恨梦魇}
与 {generic|派蒂}对话
获取 {crafting}
➞ {enter|1_4_6_3} #收割者
找到并击杀 {kill|暗语者德瑞}，取得 {quest_text|玛拉凯的钥匙I}
找到并击杀 {kill|审判者马雷格罗}，取得 {quest_text|玛拉凯的钥匙II}
找到并击杀 {kill|黑影薛朗}，取得 {quest_text|玛拉凯的钥匙III}
提交 {quest|a4q5} #Corpus Malachus
➞ {arena|黑核}，击杀 {kill|梦魇玛拉凯}
{logout}
提交 {quest|a4q1} #永恒梦魇
➞ {enter|1_4_7} #奥瑞亚之道
获取 {crafting}
激活 {quest_text|共鸣装置}，使用 {quest_text|奥瑞亚传送门}
`;export{e as default};