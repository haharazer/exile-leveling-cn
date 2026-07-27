var e=`#section 第三幕
➞ {enter|1_3_1} #萨恩城废墟
获取 {crafting}
帮助并与 {generic|卡尔莉萨}对话
➞ {enter|1_3_town} #萨恩营地
➞ {enter|1_3_2} #贫民窟
    #sub 向{dir|0}方向前进
➞ {enter|1_3_3_1} #火葬场
    #sub 沿着楼梯前进
#ifdef LEAGUE_START
    完成 {trial}
#endif
找到并击杀 {kill|派蒂}，取得 {quest_text|托尔曼的手镯}
获取 {crafting}
{logout}
与 {generic|卡尔莉萨}对话，取得 {quest_text|下水道钥匙}
提交 {quest|a3q1} #迷失的爱情
➞ {enter|1_3_2} #贫民窟
    #sub 向{dir|0}方向前进
➞ {enter|1_3_10_1} #下水道
收集1个{quest_text|白金半身像}
获取 {waypoint_get}
收集2个{quest_text|白金半身像}
➞ {enter|1_3_5} #市集地带
获取 {waypoint_get}
#ifdef LEAGUE_START
    ➞ {enter|1_3_6} #黑石陵墓
        #sub 在传送点附近寻找
    完成 {trial}
    获取 {crafting}
#endif
{logout}
提交 {quest|a3q11} #维多里奥的秘宝
{waypoint|1_3_5} #市集地带
➞ {enter|1_3_7} #激战广场
    #sub 向{dir|0}方向搜索
获取 {waypoint_get}
    #sub 向{dir|315}方向前进
找到并拾取 {quest_text|缎带之轴}
    #sub 向{dir|225}方向前进
➞ {enter|1_3_8_1} #日耀神殿 1 层
    #sub 向{dir|45}方向前进
➞ {enter|1_3_8_2} #日耀神殿 2 层
➞ {arena|永恒实验室}，获得 {crafting}
{waypoint|1_3_7} #激战广场
➞ {enter|1_3_9} #不朽海港
    #sub 向{dir|315}方向前进
找到并拾取 {quest_text|托麦迪克亚硫酸}
{logout}
{waypoint|1_3_8_2} #日耀神殿 2 层
与 {generic|达拉夫人}对话
提交 {quest|a3q4} #丝带线轴
提交 {quest|a3q5}，取得 {quest_text|炼狱之粉} #余烬之尘
{waypoint|1_3_10_1} #下水道
焚烧 {quest_text|永生者障碍}
获取 {crafting}
➞ {enter|1_3_13} #乌旗守卫兵营
获取 {waypoint_get}
击杀 {kill|格拉维奇将军}
    #sub 向{dir|315}方向前进
➞ {enter|1_3_14_1} #月影神殿 1 层
➞ {enter|1_3_14_2} #月影神殿 2 层
找到并击杀 {kill|派蒂}，取得 {quest_text|神塔之钥}
    #sub 沿着向上的楼梯前进
    #sub 在有马车的岔路口选择只有一辆马车的道路
获取 {crafting}
{logout}
提交 {quest|a3q9} #派蒂的宠物
提交 {quest|a3q8} #铲除左右手
{waypoint|1_3_13} #乌旗守卫兵营
➞ {enter|1_3_15} #皇家花园
    #sub 向{dir|45}方向前进
获取 {waypoint_get}
    #sub 沿着道路前进
#ifdef LEAGUE_START
    完成 {trial}
        #sub 向{dir|0}方向前进
    获取 {crafting}
    {logout}
    {waypoint|1_3_15} #皇家花园
#endif
#ifdef LIBRARY
    ➞ {enter|1_3_17_1} #图书馆
        #sub 向{dir|315}方向前进
    获取 {waypoint_get}
    找到 {generic|松动的蜡烛} ➞ {enter|1_3_17_2} #档案室
        #sub 在狭窄走廊中寻找蜡烛
    获取 {crafting}
    收集4个{quest_text|黄金之页}
    {logout}
    {waypoint|1_3_17_1} #图书馆
        #sub 将购买技能宝石所需的通货放进背包
    提交 {quest|a3q12} #命运之语
    {waypoint|1_3_15} #皇家花园
#endif
➞ {enter|1_3_18_1} #神权之塔
➞ {enter|1_3_18_2} #上层神权之塔
    #sub 楼梯会生成在某个角落
➞ {arena|塔顶}，击杀 {kill|圣宗神主}
    #sub 寻找路障
`;export{e as default};