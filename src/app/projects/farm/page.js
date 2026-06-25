import ImageSection from "@/components/ImageSection";

export default function FarmPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <section className="relative h-[70vh] flex items-end px-10 md:px-24 pb-16 overflow-hidden">
        <img
          src="/images/FarmBanner.png"
          alt="Farm Simulation Demo"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/50 to-transparent" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-green-400 tracking-widest mb-4">
            UNITY 模拟经营系统项目
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            《农场物语》Demo
          </h1>

          <p className="text-xl text-gray-300 leading-8">
            一款功能完整的 Unity 模拟经营类农场 Demo，实现种植、背包、交易、
            建造、地图系统、NPC 行为、Timeline 演出、动态灯光和 Save 存档等系统。
          </p>
        </div>
      </section>

      <section className="px-10 md:px-24 py-20 grid md:grid-cols-4 gap-6">
        <div className="bg-[#151b2d] p-6 rounded-xl">
          <p className="text-gray-400">职责</p>
          <h3 className="text-xl font-bold">系统设计 / Unity 开发</h3>
        </div>

        <div className="bg-[#151b2d] p-6 rounded-xl">
          <p className="text-gray-400">引擎</p>
          <h3 className="text-xl font-bold">Unity</h3>
        </div>

        <div className="bg-[#151b2d] p-6 rounded-xl">
          <p className="text-gray-400">技术</p>
          <h3 className="text-xl font-bold">C# / A* / Save / Timeline</h3>
        </div>

        <div className="bg-[#151b2d] p-6 rounded-xl">
          <p className="text-gray-400">类型</p>
          <h3 className="text-xl font-bold">模拟经营 Demo</h3>
        </div>
      </section>

      <section className="px-10 md:px-24 py-10">
        <h2 className="text-4xl font-bold mb-6">项目概述</h2>
        <p className="text-gray-400 max-w-5xl leading-8">
          本项目是一款模拟经营类农场 Demo，围绕“种植 → 收获 → 交易 → 建造 →
          场景扩展”的经营循环展开。项目重点在于多个系统之间的联动：
          背包系统负责物品数据管理，交易系统与货币结算联动，建造系统支持跨场景持久化，
          NPC 则通过 Schedule 与 A* 寻路实现动态行为。
        </p>
      </section>

      <section className="px-10 md:px-24 py-10">
        <h2 className="text-4xl font-bold mb-8">Demo 演示视频</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#151b2d] p-6 rounded-2xl">
            <video controls className="w-full rounded-xl">
              <source src="/videos/FarmDemo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="px-10 md:px-24 pt-20">
        <p className="text-green-400 tracking-widest mb-3">
          SYSTEM SHOWCASE
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          系统设计展示
        </h2>

        <p className="text-gray-400 max-w-4xl leading-8">
          《农场物语》Demo 的重点不是单一玩法，而是多个模拟经营系统的组合。
          这一部分展示种植、背包、交易、建造、NPC 行为和存档演出等核心系统，
          以及它们如何共同构成完整的农场经营体验。
        </p>
      </section>

      <ImageSection
        image="/images/Farm/Farm01.png"
        subtitle="种植系统"
        title="Planting System"
        description="种植系统包含播种、浇水、成长阶段和收获逻辑。作物数据通过数据库统一管理，不同作物可以配置不同成长周期、阶段表现和产出结果。"
      />

      <ImageSection
        image="/images/Farm/Farm02.png"
        subtitle="背包系统"
        title="Inventory System"
        description="背包系统负责管理玩家物品数据，支持物品拾取、堆叠、快捷栏显示和 UI 刷新。系统通过事件派发更新界面，使物品数据与前端展示保持同步。"
        reverse
      />

      <ImageSection
        image="/images/Farm/Farm03.png"
        subtitle="交易系统"
        title="Trading System"
        description="交易系统与背包和货币数据联动，玩家可以购买种子、出售作物并完成金币结算。该系统构成了农场经营循环中的资源回收与再投入环节。"
      />

      <ImageSection
        image="/images/Farm/Farm04.png"
        subtitle="建造系统"
        title="Building System"
        description="建造系统支持蓝图预览、位置检测和场景物体生成。建造完成后的物体会进入持久化数据中，保证玩家切换场景后建筑不会丢失。"
        reverse
      />

      <ImageSection
        image="/images/Farm/Farm05.png"
        subtitle="NPC 行为"
        title="NPC Schedule"
        description="NPC 通过 Schedule 数据在不同时间触发行为决策，并结合 A* 寻路移动到目标位置。该系统让 NPC 能够在日常时间轴中自动执行不同活动。"
      />

      <ImageSection
        image="/images/Farm/Farm06.png"
        subtitle="演出与存档"
        title="Timeline / Lighting / Save"
        description="项目中使用 Timeline 控制剧情演出和开场动画，动态灯光系统实现昼夜变化，Save 系统则负责保存玩家数据、场景状态和建造结果。"
        reverse
      />

      <section className="px-10 md:px-24 py-20">
        <p className="text-green-400 tracking-widest mb-3">
          UNITY IMPLEMENTATION
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Technical Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "种植系统",
              text: "通过作物数据、成长阶段和收获逻辑构建基础经营循环，使玩家能够从播种到产出形成完整体验。",
            },
            {
              title: "背包系统",
              text: "使用统一的物品数据结构管理 ID、数量、堆叠和快捷栏，并通过事件系统驱动 UI 刷新。",
            },
            {
              title: "交易系统",
              text: "商店系统与背包、货币数据联动，实现购买、出售、价格计算和库存变化。",
            },
            {
              title: "建造系统",
              text: "支持蓝图校验、场景生成和建造物持久化，保证玩家切换场景后建筑状态仍能保存。",
            },
            {
              title: "NPC 行为系统",
              text: "NPC 根据 Schedule 数据在每分钟触发行为判断，并通过 A* 寻路完成跨区域移动。",
            },
            {
              title: "Timeline 与 Save",
              text: "Timeline 用于控制剧情演出，动态灯光用于昼夜变化，Save 系统用于保存玩家进度和世界状态。",
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
        <h2 className="text-4xl font-bold mb-8">项目特点</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#151b2d] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              模块化系统设计
            </h3>

            <p className="text-gray-400 leading-7">
              项目将种植、背包、交易、建造、NPC 和存档拆分为相对独立的模块，
              再通过事件系统和数据管理进行联动，便于后续扩展和维护。
            </p>
          </div>

          <div className="bg-[#151b2d] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              完整经营循环
            </h3>

            <p className="text-gray-400 leading-7">
              玩家可以通过种植获得作物，通过交易获得金币，再利用资源进行建造和场景推进，
              从而形成较完整的模拟经营闭环。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}