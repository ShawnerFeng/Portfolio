import ImageSection from "@/components/ImageSection";

export default function IceFactoryPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <section className="relative h-[70vh] flex items-end px-10 md:px-24 pb-16 overflow-hidden">
        <img
          src="/images/IceBanner.png"
          alt="Ice Sculpture Factory"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/50 to-transparent" />

        <div className="relative z-10 max-w-8xl">
          <p className="text-cyan-400 tracking-widest mb-4">
            UNITY 关卡设计项目
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            《冰雕工厂》Demo
          </h1>

          <p className="text-xl text-gray-300 leading-8">
            一款第三人称动作解谜冒险 Demo。玩家在废弃的冰雕工厂中探索，
            通过投掷冰质道具、破坏冰面、利用火焰、触发机关并应对敌人 AI，
            推进完整的线性关卡流程。
          </p>
        </div>
      </section>

      <section className="px-10 md:px-24 py-20 grid md:grid-cols-4 gap-6">
        <div className="bg-[#151b2d] p-6 rounded-xl">
          <p className="text-gray-400">职责</p>
          <h3 className="text-xl font-bold">关卡策划 / Unity 开发</h3>
        </div>

        <div className="bg-[#151b2d] p-6 rounded-xl">
          <p className="text-gray-400">引擎</p>
          <h3 className="text-xl font-bold">Unity</h3>
        </div>

        <div className="bg-[#151b2d] p-6 rounded-xl">
          <p className="text-gray-400">工具</p>
          <h3 className="text-xl font-bold">C# / Blender / ProBuilder</h3>
        </div>

        <div className="bg-[#151b2d] p-6 rounded-xl">
          <p className="text-gray-400">类型</p>
          <h3 className="text-xl font-bold">动作解谜 Demo</h3>
        </div>
      </section>

      <section className="px-10 md:px-24 py-10">
        <h2 className="text-4xl font-bold mb-6">项目概述</h2>
        <p className="text-gray-400 max-w-5xl leading-8">
          本项目以“雪山中的废弃冰雕工厂”为主题，围绕冰质道具、可破坏冰面、
          火焰融化、压力板、塔吊、电梯和敌人遭遇等内容构建完整的可玩流程。
          关卡采用线性推进结构，通过教学、应用和综合挑战逐步引导玩家理解核心机制。
        </p>
      </section>

      <section className="px-10 md:px-24 py-10">
        <h2 className="text-4xl font-bold mb-8">Demo 演示视频</h2>

      <div className="max-w-6xl mx-auto">
          <div className="bg-[#151b2d] p-6 rounded-2xl">
              <video controls className="w-full rounded-xl">
                  <source src="/videos/ice-factory-demo.mp4" type="video/mp4" />
              </video>
          </div>
      </div>
      </section>

      <section className="px-10 md:px-24 pt-20">
        <p className="text-cyan-400 tracking-widest mb-3">
          关卡设计展示
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Design Highlights
        </h2>

        <p className="text-gray-400 max-w-4xl leading-8">
          这一部分通过六个角度展示《冰雕工厂》的设计思路：
          空间概念、核心机制、机关设计、战斗节奏、环境叙事和关卡流程。
          重点不是简单展示截图，而是说明每个设计点在玩家体验中的作用。
        </p>
      </section>

      <ImageSection
        image="/images/IceFactory/Factory01.png"
        subtitle="空间概念"
        title="工厂整体空间"
        description="关卡建立在雪山内部的废弃冰雕工厂之中。工业结构与冰雪环境结合，既强化了场景主题，也为玩家提供了清晰的空间识别点和探索方向。"
      />

      <ImageSection
        image="/images/IceFactory/Factory02.png"
        subtitle="核心玩法"
        title="投掷与破冰机制"
        description="投掷冰锥是本关卡的核心玩法之一。玩家通过拾取和投掷冰质道具来破坏脆弱冰面、攻击敌人或触发场景机关。该机制按照教学、应用和挑战的顺序逐步展开。"
        reverse
      />

      <ImageSection
        image="/images/IceFactory/Factory03.png"
        subtitle="机关设计"
        title="塔吊移动机关"
        description="塔吊不仅承担区域移动功能，也用于改变玩家的观察视角和空间位置。相比普通传送，它更符合工厂主题，并让区域转换过程具有更强的演出感和记忆点。"
      />

      <ImageSection
        image="/images/IceFactory/Factory04.png"
        subtitle="战斗节奏"
        title="敌人遭遇设计"
        description="战斗段落被安排在解谜流程之间，用于调节关卡节奏。敌人遭遇提供短暂压力，让玩家在完成环境谜题后重新进入紧张状态，再回到探索和解谜之中。"
        reverse
      />

      <ImageSection
        image="/images/IceFactory/Factory05.png"
        subtitle="环境叙事"
        title="融化的冰雕"
        description="融化的冰雕与废弃的工业设施暗示了工厂曾经的繁荣与衰落。关卡不完全依赖对白说明背景，而是通过场景状态让玩家感受到冰雕文明逐渐被遗忘的主题。"
      />

      <ImageSection
        image="/images/IceFactory/Factory06.png"
        subtitle="关卡流程"
        title="教学 → 应用 → 综合挑战"
        description="关卡整体遵循教学、应用和综合挑战的结构。玩家先在安全环境中学习单一机制，再在工厂区域中组合使用投掷、破冰、融化、机关和战斗等能力。"
        reverse
      />

      <section className="px-10 md:px-24 py-20">
        <p className="text-cyan-400 tracking-widest mb-3">
          UNITY 实现内容
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Technical Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "交互系统",
              text: "统一处理拾取、投掷、搬运、使用道具和场景交互，让玩家可以通过一致的输入逻辑与关卡中的道具、机关和 NPC 互动。",
            },
            {
              title: "可破坏冰面",
              text: "脆弱冰面与冰墙可以被投掷物或场景冰锥破坏，用于制造通路、解决谜题，或让敌人坠落死亡。",
            },
            {
              title: "火区系统",
              text: "火区会在安全和危险状态之间循环切换，在危险阶段对玩家造成伤害，并根据冰块类型改变其体积，用于构建融化解谜。",
            },
            {
              title: "敌人 AI",
              text: "敌人使用 NavMesh 追踪玩家，并根据距离切换近战或远程攻击，同时与破冰地形结合形成环境战斗玩法。",
            },
            {
              title: "场景机关",
              text: "包含压力板、塔吊、电梯、可掉落冰锥、钥匙开关和道具触发机关，用于推动关卡流程和制造空间变化。",
            },
            {
              title: "镜头与演出",
              text: "使用 Cinemachine 展示关键转场、机关移动和电梯过程，让玩家理解空间变化，同时增强工厂探索的演出感。",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-[#151b2d] p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-7">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 md:px-24 py-10">
        <h2 className="text-4xl font-bold mb-8">关卡特色</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#151b2d] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              线性关卡流程
            </h3>

            <p className="text-gray-400 leading-7">
              关卡整体按照教学、应用、综合挑战逐步推进，依次引入投掷、
              破冰、搬运、火区、机关和战斗内容，让玩家在自然流程中学习并掌握机制。
            </p>
          </div>

          <div className="bg-[#151b2d] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              环境交互机关
            </h3>

            <p className="text-gray-400 leading-7">
              关卡中包含掉落冰锥、压力板、塔吊、电梯、可破坏冰墙、
              火区和道具驱动机关，使解谜、战斗和空间移动都围绕冰雪工厂主题展开。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}