var e=`#section 第五幕
➞ {enter|1_5_1} #奴役監牢
找到并击杀 {kill|監工庫爾}
    #sub 向{dir|180}方向前进，直到找到被吊起的卡鲁人
    #sub 顺时针绕行以抵达{dir|270}方向
➞ {enter|1_5_town} #監守高塔
提交 {quest|a5q1b} #重返奧瑞亞
➞ {enter|1_5_2} #鎮壓地帶
找到并拾取 {quest_text|米亞斯表}
    #sub 尽量保持朝{dir|270}方向前进
找到并击杀 {kill|判官卡斯蒂克斯}，取得 {quest_text|狂巫之眼}
    #sub 从{quest_text|米亞斯表}处朝{dir|45}方向前进
➞ {enter|1_5_3} #奧瑞亞大廣場
➞ {enter|1_5_4} #神聖大教堂
    #sub 向{dir|45}方向前进
➞ {enter|1_5_5} #無罪之室
    #sub 顺时针绕圈
    #sub 刷怪等级：40-42
获取 {crafting}
➞ {arena|純潔圣殿}，击杀 {kill|聖宗伊爾莉斯}
    #sub 向{dir|315}方向逆时针绕行
{logout}
提交 {quest|a5q2} #自由之鑰
提交 {quest|a5q3} #服務至上
提交 {quest|a5q4} #死得其所
{waypoint|1_5_5} #無罪之室
➞ {enter|1_5_4b} #焚燒大教堂
➞ {enter|1_5_3b} #大廣場廢墟
    #sub 逆时针绕圈
获取 {waypoint_get}
    #sub 向{dir|315}方向前进
➞ {enter|1_5_6} #葬骨禮堂
找到并拾取 {quest_text|純凈之印}
获取 {crafting}
{logout}
{waypoint|1_5_3b} #大廣場廢墟
➞ {enter|1_5_7} #聖物間
    #sub 朝{dir|225}方向前进，找到广场
    #sub 向{dir|180}方向前进
收集3个{quest_text|奇塔弗之痛}，在地图角落搜索
获取 {crafting}
{logout}
提交 {quest|a5q7} #奇塔弗的折磨
{waypoint|1_5_3b} #大廣場廢墟
➞ {enter|1_5_8} #聖堂屋頂
    #sub 向{dir|225}方向前进
➞ {arena|大教堂尖塔}，击杀 {kill|貪得無厭奇塔弗}
与 {generic|莉莉羅斯}对话，启航前往瓦尔克拉斯
`;export{e as default};