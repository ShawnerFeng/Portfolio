export default function P5RPage() {
  const sections = [
    {
      title: "核心机制：穿梭于画作之间",
      subtitle: "核心机制",
      text: "画廊区域将画作设计成可穿越的空间。玩家进入画中后，会从另一幅画中离开，使二维艺术作品成为连接不同区域的空间通道。这一设计将美术主题与关卡机制紧密结合，使“在画中行走”真正成为关卡导航方式。",
    },
    {
      title: "空间结构设计",
      subtitle: "空间设计",
      text: "整个关卡围绕五幅画作、脚手架、平台与机关展开。脚手架提供了清晰的垂直空间层次，而缺失的画作则自然引导玩家寻找机关，在探索过程中逐步理解关卡规则。",
    },
    {
      title: "三阶段路线推进",
      subtitle: "解谜流程",
      text: "整个谜题被划分为三个阶段。每一阶段都会重新利用已有的画作节点，但通过改变进入方向、出口位置和目标，让相同空间不断产生新的玩法体验，在有限资源下实现丰富的探索循环。",
    },
    {
      title: "叙事与空间结合",
      subtitle: "环境叙事",
      text: "斑目宫殿将现实中贫穷狭小的住所包装成豪华美术馆，而画廊本身则成为由艺术品构成的心理迷宫。关卡空间不仅承担玩法功能，也映射了角色扭曲的价值观，实现了剧情与关卡设计的统一。",
    },
    {
      title: "美术与玩法融合",
      subtitle: "视觉表现",
      text: "关卡采用浮世绘风格与超现实空间表现。玩家穿越森林、沙漠、海浪等画中世界，获得仿佛置身艺术作品内部的体验，使美术风格与解谜玩法密不可分。",
    },
    {
      title: "设计启发",
      subtitle: "设计总结",
      text: "这一关卡让我认识到，优秀的关卡设计不仅是摆放敌人与机关，更重要的是通过统一的核心机制，引导玩家学习规则、控制节奏、重复利用空间，并借助环境传递叙事与探索奖励。",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">

      {/* Banner */}
      <section className="relative h-[65vh] flex items-end px-10 md:px-24 pb-16 overflow-hidden">
        <img
          src="/images/P5R-Banner.png"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/60 to-transparent" />

        <div className="relative z-10 max-w-5xl">
          <p className="text-cyan-400 tracking-widest mb-4">
            CASE STUDY
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            P5R 斑目宫殿画廊关卡拆解
          </h1>

          <p className="text-gray-300 leading-8 text-lg">
            本案例针对画廊区域进行关卡拆解，分析其空间结构、画作穿梭机制与多阶段解谜设计。
          </p>
        </div>
      </section>

      {/* Info */}
      <section className="px-10 md:px-24 pb-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#151b2d] p-6 rounded-2xl">
            <p className="text-gray-400">游戏</p>
            <h3 className="text-xl font-bold">Persona 5 Royal</h3>
          </div>

          <div className="bg-[#151b2d] p-6 rounded-2xl">
            <p className="text-gray-400">区域</p>
            <h3 className="text-xl font-bold">斑目宫殿·画廊</h3>
          </div>

          <div className="bg-[#151b2d] p-6 rounded-2xl">
            <p className="text-gray-400">核心机制</p>
            <h3 className="text-xl font-bold">画作空间穿梭</h3>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-10 md:px-24 py-16">
        <p className="text-cyan-400 tracking-widest mb-3">关卡概述</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          为什么这个关卡设计优秀？
        </h2>

        <p className="text-gray-400 leading-8 max-w-5xl text-lg mb-10">
          画廊区域围绕“穿越画作”这一核心机制展开，通过有限空间节点的重复利用，
          实现复杂的路径变化与探索体验，是典型的“空间复用 + 机制驱动”设计案例。
        </p>

        {/* 白膜图 */}
        <div className="bg-[#151b2d] p-6 rounded-2xl border border-white/10">
        <img
          src="/images/p5r/blockout_overview.png"
          alt="Whitebox Overview"
          className="max-w-full max-h-[580px] w-auto h-auto rounded-xl"
        />
          <p className="text-gray-400 mt-4 text-sm">
            图：画廊区域白膜结构图（用于展示画作连接关系与空间布局）
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="px-10 md:px-24 py-10 space-y-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-[#151b2d] p-8 rounded-2xl border border-white/10"
          >
            <p className="text-cyan-400 tracking-widest text-sm mb-3">
              {section.subtitle}
            </p>

            <h2 className="text-3xl font-bold mb-4">
              {section.title}
            </h2>

            <p className="text-gray-400 leading-8 text-lg">
              {section.text}
            </p>
          </div>
        ))}
      </section>

      {/* 三阶段流程（改成图 + 文交替） */}
      <section className="px-10 md:px-24 py-16">
        <p className="text-cyan-400 tracking-widest mb-3">
          三阶段解谜流程
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          关卡结构拆解
        </h2>

        <div className="space-y-16">

          {/* 阶段1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/p5r/stage1_loop.jpg"
              className="rounded-2xl w-full"
            />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                第一阶段：理解规则
              </h3>
              <p className="text-gray-400 leading-8">
                玩家首次接触画作穿梭机制，通过入口与出口建立空间认知，
                理解“画作=传送节点”的基础规则。
              </p>
            </div>
          </div>

          {/* 阶段2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <img
                src="/images/p5r/stage2_loop.jpg"
                className="rounded-2xl w-full"
              />
            </div>

            <div className="md:order-1">
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                第二阶段：路线重构
              </h3>
              <p className="text-gray-400 leading-8">
                通过新增画作改变已有空间连接关系，
                引导玩家重新利用旧路径，形成“空间回流”结构。
              </p>
            </div>
          </div>

          {/* 阶段3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/p5r/stage3_loop.jpg"
              className="rounded-2xl w-full"
            />

            <div>
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                第三阶段：闭环完成
              </h3>
              <p className="text-gray-400 leading-8">
                多条路径最终汇聚形成完整空间闭环，
                玩家利用所有画作节点完成最终出口路径。
              </p>
            </div>
          </div>

          {/* 阶段4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="md:order-2">
              <img
                src="/images/p5r/stage4_loop.jpg"
                className="rounded-2xl w-full"
              />
            </div>

            <div className="md:order-1">
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                总体探索路径：空间扩展与探索延伸
              </h3>

              <p className="text-gray-400 leading-8">
                关卡通过有限数量的画作节点继续产生新的连接关系，
                玩家可以重新访问已探索区域，但通过不同的入口与出口组合形成新的路径选择。
                虽然画作数量有限，但空间结构通过循环连接被进一步扩展，
                使探索体验从“线性完成”转向“多路径探索”，增强关卡的重玩性与空间深度。
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Design */}
      <section className="px-10 md:px-24 py-16">
        <p className="text-cyan-400 tracking-widest mb-3">
          设计总结
        </p>

        <div className="bg-[#151b2d] p-8 rounded-2xl">
          <p className="text-gray-400 leading-8 text-lg">
            该关卡的核心价值在于“空间复用 + 规则渐进 + 机制驱动探索”，
            通过少量资源构建高复杂度路径变化，是典型优秀箱庭解谜设计。
          </p>
        </div>
      </section>

    </main>
  );
}