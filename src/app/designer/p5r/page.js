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
      <section className="relative h-[65vh] flex items-end px-10 md:px-24 pb-16 overflow-hidden">
        <img
          src="/images/P5R-Banner.png"
          alt="Persona 5 Royal"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/60 to-transparent" />

        <div className="relative z-10 max-w-5xl">
          <p className="text-cyan-400 tracking-widest mb-4">
            案例研究 CASE STUDY
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            P5R斑目宫殿画廊关卡拆解
          </h1>

          <p className="text-gray-300 max-w-5xl leading-8 text-lg mb-10">
            本案例针对《女神异闻录5 皇家版》中斑目宫殿画廊区域进行关卡拆解，
            重点分析其空间结构、画作穿梭机制、解谜流程、环境叙事以及整体设计思路，
            并总结其中值得借鉴的关卡设计方法。
          </p>

          <div className="flex flex-wrap gap-3">
            {["关卡设计", "解谜流程", "空间复用", "玩家引导", "环境叙事"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/10 text-gray-300 text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="px-10 md:px-24 pb-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#151b2d] p-6 rounded-2xl border border-white/10">
            <p className="text-gray-400 mb-2">游戏</p>
            <h3 className="text-xl font-bold">《女神异闻录5 皇家版》</h3>
          </div>

          <div className="bg-[#151b2d] p-6 rounded-2xl border border-white/10">
            <p className="text-gray-400 mb-2">区域</p>
            <h3 className="text-xl font-bold">斑目宫殿·画廊区域</h3>
          </div>

          <div className="bg-[#151b2d] p-6 rounded-2xl border border-white/10">
            <p className="text-gray-400 mb-2">分析重点</p>
            <h3 className="text-xl font-bold">画作穿梭机制</h3>
          </div>
        </div>
      </section>

      <section className="px-10 md:px-24 py-16">
        <p className="text-cyan-400 tracking-widest mb-3">关卡概述</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          为什么这个关卡设计优秀？
        </h2>

        <p className="text-gray-400 max-w-5xl leading-8 text-lg">
          画廊区域并没有依赖大量战斗或复杂系统，而是围绕“穿越画作”这一核心机制展开设计。
          玩家不断进入画中、从不同位置离开，在重复利用同一批空间节点的同时，
          逐渐建立新的空间认知。整个关卡通过少量资源实现了丰富的探索体验，
          也充分体现了空间复用与渐进式教学的设计思路。
        </p>
      </section>

      <section className="px-10 md:px-24 py-10 space-y-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-[#151b2d] p-8 rounded-2xl border border-white/10"
          >
            <p className="text-cyan-400 tracking-widest text-sm mb-3">
              {section.subtitle}
            </p>

            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>

            <p className="text-gray-400 leading-8 text-lg">{section.text}</p>
          </div>
        ))}
      </section>

      <section className="px-10 md:px-24 py-16">
        <p className="text-cyan-400 tracking-widest mb-3">路线设计</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          三阶段解谜流程
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#151b2d] p-6 rounded-2xl border border-white/10">
            <p className="text-cyan-400 mb-3">第一阶段</p>
            <h3 className="text-2xl font-bold mb-3">理解规则</h3>
            <p className="text-gray-400 leading-7">
              玩家首次进入画作，学习画作之间互相连接的规则，并理解画作能够作为空间通道使用。
            </p>
          </div>

          <div className="bg-[#151b2d] p-6 rounded-2xl border border-white/10">
            <p className="text-cyan-400 mb-3">第二阶段</p>
            <h3 className="text-2xl font-bold mb-3">重构路线</h3>
            <p className="text-gray-400 leading-7">
              开启新的画作后，玩家需要重新进入之前经过的画作，并利用新的出口方向抵达此前无法到达的机关区域。
            </p>
          </div>

          <div className="bg-[#151b2d] p-6 rounded-2xl border border-white/10">
            <p className="text-cyan-400 mb-3">第三阶段</p>
            <h3 className="text-2xl font-bold mb-3">完成闭环</h3>
            <p className="text-gray-400 leading-7">
              最后一段路线将此前学习的所有规则组合起来，玩家利用新的连接关系完成整个空间闭环并抵达出口。
            </p>
          </div>
        </div>
      </section>

      <section className="px-10 md:px-24 py-16">
        <p className="text-cyan-400 tracking-widest mb-3">设计思考</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          我的设计收获
        </h2>

        <div className="bg-[#151b2d] p-8 rounded-2xl border border-white/10">
          <p className="text-gray-400 leading-8 text-lg">
            通过拆解这一关卡，我更加理解了优秀关卡设计真正关注的是玩家体验的组织方式。
            优秀的关卡不仅提供一条前进路线，更重要的是通过空间布局引导玩家学习规则、
            重新认识空间、理解剧情信息，并利用奖励不断激励玩家继续探索。
            这也是我在今后进行关卡设计时最希望实践的设计理念。
          </p>
        </div>
      </section>

      <section className="px-10 md:px-24 py-20 flex gap-4">
        <a
          href="/designer"
          className="inline-block px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg"
        >
          ← 返回作品集
        </a>

        <a
          href="/docs/P5R-Level-Breakdown.pdf"
          className="inline-block px-6 py-3 border border-white/20 rounded-lg text-white"
        >
          下载完整拆解 PDF
        </a>
      </section>
    </main>
  );
}