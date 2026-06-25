export default function IceFactoryGDDPage() {
  const systems = [
    {
      title: "战斗体验",
      text: "玩家可以投掷冰锥、冰球、冰砖等冰质道具攻击敌人，其中冰砖可以起到防御作用，也可以利用场景中的可破坏冰面和悬挂冰锥完成环境战斗。",
    },
    {
      title: "解谜体验",
      text: "关卡围绕悬挂冰锥的掉落、冰块融化后的不同尺寸以及压力板机关展开，让玩家通过观察环境与操作道具完成谜题。",
    },
    {
      title: "探索体验",
      text: "玩家从森林进入冰雕工厂，依次经过原料加工区、原料生产区、控制区、高塔和滑梯区域，在推进流程中逐步了解故事背景。",
    },
  ];

  const rules = [
    "冰质道具系统",
    "敌人巡逻 / 守卫 AI",
    "可破坏冰面",
    "冰块融化机制",
    "压力板机关",
    "钥匙开关",
    "塔吊与缆车",
    "火焰系统",
  ];

  const flow = [
    {
      title: "森林教学区",
      text: "作为开场教学区域，引导玩家学习移动、跳跃、拾取、投掷、NPC 对话与钥匙机关等基础交互，并通过冰雕和机器人建立世界观。",
    },
    {
      title: "缆车过渡场景",
      text: "作为节奏缓冲与环境叙事段落，通过远景镜头展示雪山冰雕群，让玩家感受到当地冰雕文化与工厂所在空间的位置关系。",
    },
    {
      title: "原料加工区",
      text: "首次引入可破坏冰面机制，玩家需要利用投掷物或悬挂冰锥击碎冰面，打开通往下层区域的道路。",
    },
    {
      title: "冰块融化谜题",
      text: "围绕火区、普通冰与坚冰的体积变化设计谜题，玩家需要判断不同尺寸冰块的用途，并利用压力板机关完成通路开启。",
    },
    {
      title: "塔吊过渡场景",
      text: "通过大型工业机关完成区域转移，既符合工厂主题，也利用远景镜头展示关卡空间层次和下一目标方向。",
    },
    {
      title: "原料生产区战斗",
      text: "正式引入敌人战斗，玩家需要使用冰质道具攻击敌人，也可以结合可破坏冰面和悬挂冰锥完成环境击杀。",
    },
    {
      title: "控制区",
      text: "作为后期机制组合区域，引入火焰喷射器与坚冰墙，要求玩家利用融化机制开启通路，并为最终 Boss 战做准备。",
    },
    {
      title: "最终高塔与滑梯离场",
      text: "高塔承担最终挑战与剧情收束功能，滑梯则作为节奏释放段落，引导玩家离开工厂并看到逐渐融化的冰雕文明景观。",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <section className="relative h-[65vh] flex items-end px-10 md:px-24 pb-16 overflow-hidden">
        <img
          src="/images/IceBanner.png"
          alt="Ice Sculpture Factory"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/60 to-transparent" />

        <div className="relative z-10 max-w-5xl">
          <p className="text-cyan-400 tracking-widest mb-4">
            游戏设计文档 GAME DESIGN DOCUMENT
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            《冰雕工厂》Demo 设计文档
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-8">
            《冰雕工厂》Demo 的游戏设计文档页面，主要展示项目的设计目标、
            核心体验、关卡规则、系统设计、线性流程以及后续可优化方向。
          </p>
        </div>
      </section>

      <section className="px-10 md:px-24 py-16 grid md:grid-cols-4 gap-6">
        {[
          ["类型", "动作解谜 Demo"],
          ["职责", "游戏策划 / 关卡策划"],
          ["引擎", "Unity"],
          ["重点", "关卡流程与系统设计"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="bg-[#151b2d] p-6 rounded-2xl border border-white/10"
          >
            <p className="text-gray-400 mb-2">{label}</p>
            <h3 className="text-xl font-bold">{value}</h3>
          </div>
        ))}
      </section>

      <section className="px-10 md:px-24 py-12">
        <p className="text-cyan-400 tracking-widest mb-3">Design Goal</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          项目目标
        </h2>

        <p className="text-gray-400 max-w-5xl leading-8 text-lg">
          本 Demo 目标是构建一个线性推进的第三人称动作解谜关卡。玩家需要学习并使用
          冰质道具、可破坏冰面、冰块融化、工业机关和敌人战斗等机制，在废弃的冰雕工厂中
          逐步推进流程。同时，关卡通过冰雕和工厂遗迹来表达记忆、传统与文明衰退的主题。
        </p>
      </section>

      <section className="px-10 md:px-24 py-12">
        <p className="text-cyan-400 tracking-widest mb-3">Three Core Experiences</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          核心体验
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {systems.map((item) => (
            <div
              key={item.title}
              className="bg-[#151b2d] p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-8">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 md:px-24 py-12">
        <p className="text-cyan-400 tracking-widest mb-3">Gameplay Rules</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          系统设计
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {rules.map((rule) => (
            <div
              key={rule}
              className="bg-white/10 px-5 py-4 rounded-xl text-gray-200"
            >
              {rule}
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 md:px-24 py-12">
        <p className="text-cyan-400 tracking-widest mb-3">关卡结构</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Linear Level Flow
        </h2>

        <div className="space-y-4">
        {flow.map((step, index) => (
          <div
            key={step.title}
            className="flex gap-6 items-center bg-[#151b2d] p-6 rounded-2xl border border-white/10"
          >
            <div className="text-cyan-400 text-2xl font-bold w-12">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-gray-400 mt-2">
                {step.text}
              </p>
            </div>
          </div>
        ))}
        </div>
      </section>

      <section className="px-10 md:px-24 py-12">
        <p className="text-cyan-400 tracking-widest mb-3">Teaching → Application → Challenge</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          设计逻辑 教学 → 应用 → 综合挑战
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#151b2d] p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">教学阶段</h3>
            <p className="text-gray-400 leading-8">
              森林区域用于引入基础移动、交互、投掷、掉落冰锥、NPC 对话和钥匙开关等基础规则。
              该阶段压力较低，主要目标是让玩家安全理解核心操作。
            </p>
          </div>

          <div className="bg-[#151b2d] p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">应用阶段</h3>
            <p className="text-gray-400 leading-8">
              工厂区域要求玩家使用冰质道具、可破坏冰面、冰块融化和压力板等机制解决空间谜题，
              让玩家将前面学到的单一规则应用到更复杂的场景中。
            </p>
          </div>

          <div className="bg-[#151b2d] p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">综合挑战</h3>
            <p className="text-gray-400 leading-8">
              后期区域将战斗、可破坏环境、敌人 AI、火焰道具和垂直移动结合起来，
              让玩家在更高压力下综合运用之前学习到的能力。
            </p>
          </div>
        </div>
      </section>

      <section className="px-10 md:px-24 py-12">
        <p className="text-cyan-400 tracking-widest mb-3">Future Improvements</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          复盘与优化
        </h2>

        <div className="bg-[#151b2d] p-8 rounded-2xl border border-white/10">
          <p className="text-gray-400 leading-8 text-lg">
            由于时间限制 (项目总体耗时8天,还要撰写GDD和设计方案)，最终 Boss 战和部分灯光系统没有完全实现。后续版本中，
            Boss 战应作为核心机制的最终综合考验，结合地面破坏、冰甲弱点、火焰攻击、
            移动压力和多阶段战斗，让玩家完整运用前面学习到的投掷、破冰、融化和战斗机制。
          </p>
        </div>
      </section>

      <section className="px-10 md:px-24 py-20 flex gap-4">
        <a
          href="/designer"
          className="inline-block px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg"
        >
          ← 返回策划作品集
        </a>

        <a
          href="/docs/IceFactory-GDD.pdf"
          className="inline-block px-6 py-3 border border-white/20 rounded-lg text-white"
        >
          下载 GDD
        </a>
      </section>
    </main>
  );
}