var e=`#section 第四幕
➞ {enter|1_4_1} #水道遺跡
➞ {enter|1_4_town} #統治者之殿
➞ {enter|1_4_2} #乾涸湖岸
找到并击杀 {kill|帝王福爾}，取得 {quest_text|迪虛瑞特的紅旗}
获取 {crafting}
{logout}
破坏 {quest_text|德莎蕾特之封印}
提交 {quest|a4q2} #突破封印
➞ {enter|1_4_3_1} #漆黑礦坑：第 1 層
获取 {crafting}
➞ {enter|1_4_3_2} #漆黑礦坑：第 2 層
解救 {quest_text|德莎蕾特}
➞ {enter|1_4_3_3} #水晶礦脈
获取 {crafting}
{waypoint|1_4_town} #統治者之殿
提交 {quest|a4q6} #不屈意志
{waypoint|1_3_town} #薩恩營地
➞ {enter|Labyrinth_Airlock}，获得 {waypoint_get} #試煉者廣場
{ascend|normal}
获取 {crafting|1_Labyrinth_boss_3}
{waypoint|1_4_3_3} #水晶礦脈
➞ {enter|1_4_5_1} #德瑞索的幻境
➞ {enter|1_4_5_2} #大競技場
获取 {crafting}
{waypoint|1_4_3_3} #水晶礦脈
➞ {enter|1_4_4_1} #岡姆的幻境
➞ {enter|1_4_4_3} #岡姆的堡壘
    #sub 向{dir|45}方向前进
    #sub 沿着桥梁前进
获取 {crafting}
➞ {arena|火焰王之鍋}，击杀 {kill|國王岡姆}，取得 {quest_text|憤怒之眼}
{portal|use}
{waypoint|1_4_5_2} #大競技場
➞ {arena|刃環}，击杀 {kill|鬥劍之王德瑞索}，取得 {quest_text|欲望之眼}
    #sub 朝{dir|225}方向前进，出口保持{dir|270}方向
{logout}
{waypoint|1_4_3_3} #水晶礦脈
与 {generic|達拉夫人}对话
➞ {enter|1_4_6_1} #巨獸之腹：第 1 層
➞ {enter|1_4_6_2} #巨獸之腹：第 2 層
➞ {arena|獸腹深處}，击杀 {kill|派蒂, 憎恨夢魘}
与 {generic|派蒂}对话
获取 {crafting}
➞ {enter|1_4_6_3} #育靈之室
找到并击杀 {kill|禁忌祭者德瑞}，取得 {quest_text|瑪拉凱的鑰匙I}
找到并击杀 {kill|審判者馬雷葛蘿}，取得 {quest_text|瑪拉凱的鑰匙II}
找到并击杀 {kill|烏姆布拉的薛朗}，取得 {quest_text|瑪拉凱的鑰匙III}
提交 {quest|a4q5} #瑪拉凱遺骸
➞ {arena|黑核}，击杀 {kill|夢魘瑪拉凱}
{logout}
提交 {quest|a4q1} #永恆夢魘
➞ {enter|1_4_7} #岩岸陡坡
获取 {crafting}
激活 {quest_text|共鳴裝置}，使用 {quest_text|奧瑞亞傳送門}
`;export{e as default};