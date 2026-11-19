var e=`#section 第八幕
➞ {enter|2_8_1} #奇迹之墙
➞ {enter|2_8_town} #萨恩营地
➞ {enter|2_8_2_1} #剧毒管道
    #sub 向{dir|270}方向前进
➞ {enter|2_8_2_2} #德瑞的污水坑
    #sub 地面上的黑色油漆斑指向正确的前进方向
➞ {arena|熔汤之地}，击杀 {kill|恶毒者德瑞}
➞ {arena|下水道出口}
获取 {crafting}
➞ {enter|2_8_8} #中转码头
    #sub 向{dir|45}方向前进
找到并拾取 {quest_text|永恒十字架}
    #sub 贴着{dir|270}方向的墙前进
➞ {arena|复活之地}
    #sub 向{dir|135}方向前进
与 {generic|卡尔莉萨}对话，击杀 {kill|托尔曼}
➞ {enter|2_8_9} #稻穗之门
找到并击杀 {kill|宝石军团士兵}
    #sub 沿着门口倒下的守卫前进
    #sub 寻找书本图标
➞ {enter|2_8_10} #帝国平原
    #sub 沿着门口倒下的守卫前进
➞ {enter|2_8_12_1} #日耀神殿 1 层
    #sub 沿着道路前进直到{waypoint}
    #sub 向{dir|315}方向前进
获取 {waypoint_get}
➞ {enter|2_8_12_2} #日耀神殿 2 层
找到并击杀 {kill|日耀守卫者-黎明}，取得 {quest_text|日耀法珠}
获取 {crafting}
{logout}
提交 {quest|a8q1} #巫婆精华
提交 {quest|a8q7} #古灵使徒斗士
提交 {quest|a8q6} #葬爱
{waypoint|2_8_12_1} #日耀神殿 1 层
➞ {enter|2_8_11} #日耀广场
➞ {enter|2_8_13} #港湾大桥
    #sub 向{dir|225}方向前进
➞ {enter|2_8_6} #月影广场
获取 {waypoint_get}
    #sub 向{dir|315}方向前进
➞ {enter|2_8_7_1_} #月影神殿 1 层
➞ {enter|2_8_7_2} #月影神殿 2 层
找到并击杀 {kill|月影守卫者-暮色}，取得 {quest_text|月影法珠}
获取 {crafting}
{logout}
{waypoint|2_8_6} #月影广场
➞ {enter|2_8_13} #港湾大桥
    #sub 向{dir|135}方向前进
➞ {arena|天空神殿}，激活 {generic|姊妹塑像}
击杀 {kill|月影女神} 以及 {kill|日耀女神}
➞ {enter|2_9_1} #赤红通道
    #sub 刷怪等级：58-62
➞ {enter|2_9_town} #统治者之殿
{waypoint|2_8_6} #月影广场
➞ {enter|2_8_5} #古兵工厂
    #sub 向{dir|180}方向前进
#ifdef LEAGUE_START
    完成 {trial}
        #sub 在{dir|270}方向搜索
    获取 {crafting}
#endif
➞ {enter|2_8_4} #贵族花园
    #sub 在{dir|270}方向搜索
➞ {arena|恐惧之池}，击杀 {kill|恐惧之源 尤格尔}
{portal|use}
提交 {quest|a8q4} #恐惧映射
`;export{e as default};