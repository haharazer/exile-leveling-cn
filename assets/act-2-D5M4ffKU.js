var e=`#section 第二幕
➞ {enter|1_2_1} #南部森林
➞ {enter|1_2_town} #森林營地
➞ {enter|1_2_2} #前哨原野
    #sub 向{dir|45}方向前进
#ifdef LEAGUE_START
    找到 {area|1_2_2a}，放置 {portal|set} #獸穴
#endif
➞ {enter|1_2_3} #危機叉路
    #sub 沿着道路前进
#ifdef LEAGUE_START
    {waypoint|1_2_town} #森林營地
        #sub 沿着道路前进
    使用 {portal|use}
    ➞ {enter|1_2_2a} #獸穴
    找到并击杀 {kill|白色巨獸}
    {logout}
    提交 {quest|a2q10} #白色巨獸
    {waypoint|1_2_3} #危機叉路
#endif
#ifndef LEAGUE_START
    获取 {waypoint_get}
#endif
➞ {enter|1_2_6_1} #罪孽之殿：第 1 層
    #sub 向{dir|315}方向前进
➞ {enter|1_2_6_2} #罪孽之殿：第 2 層
    #sub 沿着{waypoint}的方向前进
#ifdef LEAGUE_START
    完成 {trial}
#endif
击杀 {kill|悼靈者費德利塔斯}，取得 {quest_text|邪影寶石}
    #sub 寻找长走廊
    #sub 推荐等级：14-15
{logout}
提交 {quest|a2q6} #黑色入侵者
{waypoint|1_2_3} #危機叉路
➞ {enter|1_2_15} #墮道遺跡
    #sub 向{dir|135}方向前进
➞ {enter|1_2_5_1} #靜謐陵墓 1 樓
    #sub 沿着道路前进
#ifdef LEAGUE_START
    完成 {trial}
#endif
➞ {enter|1_2_5_2} #寂靜陵墓 2 樓
找到 {quest_text|祭壇}，取得 {quest_text|黃金之手}
{logout}
提交 {quest|a2q5} #夢中聖地
➞ {enter|1_2_7} #河道
    #sub 向{dir|225}方向前进
获取 {waypoint_get}
    #sub 沿着道路前进
➞ {enter|1_2_9} #西部密林
    #sub 沿着道路前进
获取 {waypoint_get}
    #sub 沿着道路前进
➞ {enter|1_2_10} #織網者巢穴
    #sub 往{waypoint}路边对面区域探索
➞ {arena|織網之巢}，击杀 {kill|巨蛛之母}，取得 {quest_text|馬雷格羅的尖刺}
    #sub 优先前往{dir|270}方向，若被阻挡则改走{dir|45}
    #sub 推荐等级：16
{logout}
提交 {quest|a2q4} #清理蜘蛛
#ifdef BANDIT_KILL
    {waypoint|1_2_3} #危機叉路
    ➞ {enter|1_2_4} #河畔斷橋
        #sub 向{dir|45}方向前进
    击杀 {kill|斷魂之刃克雷頓}，取得 {quest_text|克雷頓的古靈之記}
        #sub 沿着道路前进
    {logout}
    {waypoint|1_2_7} #河道
    ➞ {enter|1_2_12} #濕地
        #sub 在{waypoint}附近寻找两根石柱并沿着足迹（碎石路）前进
    找到并击杀 {kill|裂顱巨杵歐克}，取得 {quest_text|歐克的古靈之記}
    {waypoint|1_2_9} #西部密林
        #sub 在营地入口的反方向搜索
    击杀 {kill|禁忌祭者阿莉亞}，取得 {quest_text|阿莉亞的古靈之記}
        #sub 朝{dir|180}方向前进，寻找贴近道路的火炬
        #sub 沿着火炬指向的路线前进
    击杀 {kill|阿特力隊長}
        #sub 沿着道路往{dir|225}方向走
    使用 {quest_text|奇術徽章}，激活 {quest_text|奇術封印}
    {logout}
    提交 {quest|a2q7}，取得 {quest_text|巨靈之印} #與盜賊們打交道
    {waypoint|1_1_town} #獅眼守望
    提交 {quest|a1q9} #開路先鋒
    {waypoint|1_2_12} #濕地
    用毒杀 {quest_text|樹根} ➞ {enter|1_2_11} #瓦爾廢墟
#endif
#ifdef BANDIT_ALIRA
    {waypoint|1_2_3} #危機叉路
    ➞ {enter|1_2_4} #河畔斷橋
        #sub 向{dir|45}方向前进
    击杀 {kill|斷魂之刃克雷頓}，取得 {quest_text|克雷頓的古靈之記}
        #sub 沿着道路前进
    {logout}
    {waypoint|1_2_7} #河道
    ➞ {enter|1_2_12} #濕地
        #sub 在{waypoint}附近寻找两根石柱并沿着足迹（碎石路）前进
    找到并击杀 {kill|裂顱巨杵歐克}，取得 {quest_text|歐克的古靈之記}
    {waypoint|1_2_9} #西部密林
        #sub 在营地入口的反方向搜索
    帮助 {kill|禁忌祭者阿莉亞}，取得 {quest_text|巨靈之印}
        #sub 朝{dir|180}方向前进，寻找贴近道路的火炬
        #sub 沿着火炬指向的路线前进
    击杀 {kill|阿特力隊長}
        #sub 沿着道路往{dir|225}方向走
    使用 {quest_text|奇術徽章}，激活 {quest_text|奇術封印}
    {logout}
    {waypoint|1_1_town} #獅眼守望
    提交 {quest|a1q9} #開路先鋒
    {waypoint|1_2_12} #濕地
    用毒杀 {quest_text|樹根} ➞ {enter|1_2_11} #瓦爾廢墟
#endif
#ifdef BANDIT_KRAITYN
    {waypoint|1_2_7} #河道
    ➞ {enter|1_2_12} #濕地
        #sub 在{waypoint}附近寻找两根石柱并沿着足迹（碎石路）前进
    找到并击杀 {kill|裂顱巨杵歐克}，取得 {quest_text|歐克的古靈之記}
    {waypoint|1_2_9} #西部密林
        #sub 在营地入口的反方向搜索
    击杀 {kill|禁忌祭者阿莉亞}，取得 {quest_text|阿莉亞的古靈之記}
        #sub 朝{dir|180}方向前进，寻找贴近道路的火炬
        #sub 沿着火炬指向的路线前进
    击杀 {kill|阿特力隊長}
        #sub 沿着道路往{dir|225}方向走
    使用 {quest_text|奇術徽章}，激活 {quest_text|奇術封印}
    {logout}
    {waypoint|1_1_town} #獅眼守望
    提交 {quest|a1q9} #開路先鋒
    {waypoint|1_2_3} #危機叉路
    ➞ {enter|1_2_4} #河畔斷橋
        #sub 向{dir|45}方向前进
    帮助 {kill|斷魂之刃克雷頓}，取得 {quest_text|巨靈之印}
        #sub 沿着道路前进
    {logout}
    {waypoint|1_2_12} #濕地
    用毒杀 {quest_text|樹根} ➞ {enter|1_2_11} #瓦爾廢墟
#endif
#ifdef BANDIT_OAK
    {waypoint|1_2_3} #危機叉路
    ➞ {enter|1_2_4} #河畔斷橋
        #sub 向{dir|45}方向前进
    击杀 {kill|斷魂之刃克雷頓}，取得 {quest_text|克雷頓的古靈之記}
        #sub 沿着道路前进
    {logout}
    {waypoint|1_2_9} #西部密林
    击杀 {kill|禁忌祭者阿莉亞}，取得 {quest_text|阿莉亞的古靈之記}
        #sub 朝{dir|180}方向前进，寻找贴近道路的火炬
        #sub 沿着火炬指向的路线前进
    击杀 {kill|阿特力隊長}
        #sub 沿着道路往{dir|225}方向走
    使用 {quest_text|奇術徽章}，激活 {quest_text|奇術封印}
    {logout}
    {waypoint|1_1_town} #獅眼守望
    提交 {quest|a1q9} #開路先鋒
    {waypoint|1_2_7} #河道
    ➞ {enter|1_2_12} #濕地
        #sub 在{waypoint}附近寻找两根石柱并沿着足迹（碎石路）前进
    找到并协助 {kill|裂顱巨杵歐克}，取得 {quest_text|巨靈之印}
    用毒杀 {quest_text|樹根} ➞ {enter|1_2_11} #瓦爾廢墟
        #sub 在营地入口的反方向搜索
#endif
➞ {enter|1_2_8} #北部密林
    #sub S形或L形通道通向出口
➞ {enter|1_2_14_2} #瀑布洞穴
获取 {crafting}
➞ {enter|1_2_14_3} #古金字塔
➞ {arena|金字塔尖頂}，击杀 {kill|瓦爾超靈}
    #sub 一层的出口通常在三个角落之一
    #sub 其余楼层的出口位于入口的对角线方向
    #sub 推荐等级：20-22
获取 {crafting}
`;export{e as default};