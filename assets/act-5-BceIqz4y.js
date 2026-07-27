var e=`#section 第五幕
➞ {enter|1_5_1} #奴隶深坑
找到并击杀 {kill|监工头克劳}
    #sub 向{dir|180}方向前进，直到找到被吊起的卡鲁人
    #sub 顺时针绕行以抵达{dir|270}方向
➞ {enter|1_5_town} #狱卒之塔
提交 {quest|a5q1b} #回到奥瑞亚
➞ {enter|1_5_2} #控制区
找到并拾取 {quest_text|米亚斯表}
    #sub 尽量保持朝{dir|270}方向前进
找到并击杀 {kill|审判长卡斯提克斯}，取得 {quest_text|狂巫之眼}
    #sub 从{quest_text|米亚斯表}处朝{dir|45}方向前进
➞ {enter|1_5_3} #奥瑞亚广场
➞ {enter|1_5_4} #圣堂高庭
    #sub 向{dir|45}方向前进
➞ {enter|1_5_5} #纯净圣殿
    #sub 顺时针绕圈
    #sub 刷怪等级：40-42
获取 {crafting}
➞ {arena|纯洁圣殿}，击杀 {kill|神主阿瓦留斯}
    #sub 向{dir|315}方向逆时针绕行
{logout}
提交 {quest|a5q2} #自由之钥
提交 {quest|a5q3} #为科学服务
提交 {quest|a5q4} #灭亡纯净教
{waypoint|1_5_5} #纯净圣殿
➞ {enter|1_5_4b} #化作火海的高庭
➞ {enter|1_5_3b} #广场遗迹
    #sub 逆时针绕圈
获取 {waypoint_get}
    #sub 向{dir|315}方向前进
➞ {enter|1_5_6} #藏古堂
找到并拾取 {quest_text|纯净之印}
获取 {crafting}
{logout}
{waypoint|1_5_3b} #广场遗迹
➞ {enter|1_5_7} #遗物圣所
    #sub 朝{dir|225}方向前进，找到广场
    #sub 向{dir|180}方向前进
收集3个{quest_text|奇塔弗之痛}，在地图角落搜索
获取 {crafting}
{logout}
提交 {quest|a5q7} #奇塔弗的受难
{waypoint|1_5_3b} #广场遗迹
➞ {enter|1_5_8} #教堂顶楼
    #sub 向{dir|225}方向前进
➞ {arena|大教堂尖塔}，击杀 {kill|奇塔弗}
与 {generic|丽莉·罗斯}对话，启航前往瓦尔克拉斯
`;export{e as default};