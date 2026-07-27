var e=`#section 第十幕
{waypoint|2_10_town} #奥瑞亚港
➞ {enter|2_10_1} #教堂顶楼
➞ {arena|大教堂尖塔}，击杀 {kill|瘟疫之源}
    #sub 向{dir|0}方向前进
➞ {enter|2_10_2} #广场遗迹
放置 {portal|set} 在广场
➞ {enter|2_10_7} #控制区
    #sub 向{dir|180}方向前进
{waypoint|2_10_town} #奥瑞亚港
提交 {quest|a10q1} #安全通道
使用 {portal|use}
获取 {waypoint_get}
    #sub 向{dir|45}方向前进
#ifdef LEAGUE_START
    ➞ {enter|2_10_9} #藏古堂
    获取 {crafting}
    完成 {trial}
        #sub 与锯齿形墙壁前的机关互动，前往另一侧取得 {generic|隐藏宝石：裁决之镜}
    {logout}
#endif
{waypoint|2_10_7} #控制区
找到并击杀 {kill|薇伦塔}
{logout}
提交 {quest|a10q6} #薇伦塔的复仇
{waypoint|Labyrinth_Airlock}
{ascend|merciless}
获取 {crafting|3_Labyrinth_boss_3}
{waypoint|2_10_2} #广场遗迹
➞ {enter|2_10_3} #化作火海的高庭
    #sub 向{dir|135}方向前进
➞ {enter|2_10_4} #亵渎之间
    #sub 顺时针绕圈
获取 {crafting}
➞ {arena|纯洁圣殿}，击杀 {kill|重塑之阿瓦留斯}，取得 {quest_text|纯净之杖}
    #sub 向{dir|315}方向逆时针绕行
{logout}
与 {generic|巴农}对话
提交 {quest|a10q2} #死亡和重生
{waypoint|2_10_2} #广场遗迹
与 {generic|纯净}对话
    #sub 向{dir|45}方向前进
➞ {enter|2_10_5} #藏骸运河
➞ {enter|2_10_6} #饲槽
获取 {crafting}
与 {generic|罪}对话
➞ {arena|饕餮祭坛}，击杀 {kill|奇塔弗}
与 {generic|罪}对话 ➞ {enter|2_10_town} #奥瑞亚港
与 {generic|丽莉·罗斯}对话，从奥瑞亚启航
➞ {enter|2_11_endgame_town} #卡鲁海岸
获取 {crafting}
#ifdef BANDIT_KILL
    提交 {quest|a10q3} #饥饿的终点
        #sub 在聊天输入{generic|/passives}确认你已完成24个任务天赋点
#endif
#ifndef BANDIT_KILL
    提交 {quest|a10q3} #饥饿的终点
        #sub 在聊天输入{generic|/passives}确认你已完成23个任务天赋点
#endif
`;export{e as default};