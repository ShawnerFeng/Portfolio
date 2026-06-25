import ImageSection from "@/components/ImageSection";

export default function FarmPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">

      {/* Hero */}
      <section className="relative h-[70vh] flex items-end px-10 md:px-24 pb-16 overflow-hidden">
        <img
          src="/images/FarmBanner02.png"
          alt="Farm Simulation Demo"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/50 to-transparent" />

        <div className="relative z-10 max-w-4xl">
          <p className="text-green-400 tracking-widest mb-4">
            SYSTEM DESIGN / SIMULATION GAME
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            《农场物语》Demo
          </h1>

          <p className="text-xl text-gray-300 leading-8">
            一个系统功能完善的的模拟经营系统Demo。
            通过种植、交易、建造与NPC行为系统的联动，构建可持续发展的经营世界。
          </p>
        </div>
      </section>

      {/* Role */}
      <section className="px-10 md:px-24 py-20 grid md:grid-cols-4 gap-6">
        <div className="bg-[#151b2d] p-6 rounded-xl">
          <p className="text-gray-400">定位</p>
          <h3 className="text-xl font-bold">系统策划 / Unity开发</h3>
        </div>

        <div className="bg-[#151b2d] p-6 rounded-xl">
          <p className="text-gray-400">核心方向</p>
          <h3 className="text-xl font-bold">模拟经营系统设计</h3>
        </div>

      </section>

      {/* Overview */}
      <section className="px-10 md:px-24 py-10">
        <h2 className="text-4xl font-bold mb-6">核心设计理念</h2>

        <p className="text-gray-400 max-w-5xl leading-8">
          本项目围绕模拟经营游戏的核心循环进行设计：
          玩家通过种植获取资源，通过交易系统转化为经济收益，
          再投入到建造与扩张中形成持续成长的经营闭环。
          同时通过NPC日程系统与A*寻路构建动态世界，
          使整个农场具备持续运转的“生活感”。
        </p>
      </section>

      {/* Video */}
      <section className="px-10 md:px-24 py-10">
        <h2 className="text-4xl font-bold mb-8">系统运行展示</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#151b2d] p-6 rounded-2xl">
            <video controls className="w-full rounded-xl">
              <source src="/videos/FarmDemo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="px-10 md:px-24 pt-20">
        <p className="text-green-400 tracking-widest mb-3">
          CORE SYSTEM LOOP
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          经营系统结构
        </h2>

        <p className="text-gray-400 max-w-4xl leading-8">
          本项目并非单一玩法实现，而是围绕“生产—出售—消费—建造”的完整循环设计。
          各系统既独立运行，又共同驱动玩家的长期经营目标。
        </p>
      </section>

      {/* Image Sections (rewritten style) */}
      <ImageSection
        image="/images/Farm/Farm01.png"
        subtitle="资源入口系统"
        title="种植与资源生产"
        description="种植系统作为整个经营循环的起点，负责提供基础资源产出。
        玩家通过播种、成长与收获获取作物，不同作物具有独立成长周期与产出结构，
        为后续经济流通与建筑扩张提供持续资源来源。"
      />

      <ImageSection
        image="/images/Farm/Farm02.png"
        subtitle="数据中枢系统"
        title="背包与物品管理"
        description="背包系统作为所有系统的数据枢纽，统一管理物品获取、堆叠与消耗逻辑，
        并通过事件驱动与UI进行同步，使种植、交易与建造系统能够共享同一套数据结构。"
        reverse
      />

      <ImageSection
        image="/images/Farm/Farm03.png"
        subtitle="经济调节系统"
        title="交易与资源流通"
        description="交易系统承担经营循环中的经济调节作用，将作物资源转化为金币收益，
        并引导玩家在消费与投资之间进行资源分配，从而驱动整体经营节奏。"
      />

      <ImageSection
        image="/images/Farm/Farm04.png"
        subtitle="成长扩展系统"
        title="建造系统"
        description="建造系统负责玩家长期成长目标，通过建筑扩展解锁新的功能与提高生产能力。
        所有建造结果进入持久化数据体系，保证玩家的经营成果能够持续存在。"
        reverse
      />

      <ImageSection
        image="/images/Farm/Farm05.png"
        subtitle="世界行为系统"
        title="NPC日程与A*行为"
        description="NPC基于Schedule系统进行时间驱动行为决策，并结合A*寻路在地图中执行移动与任务。
        该系统使世界具备基础的“自运行能力”，增强模拟经营的沉浸感。"
      />

      <ImageSection
        image="/images/Farm/Farm06.png"
        subtitle="世界持续性系统"
        title="演出 / 光照 / 存档"
        description="Timeline负责剧情与节奏控制，动态光照模拟昼夜变化，
        Save系统则确保玩家状态与世界状态的持续保存，共同构建可持续运行的游戏世界。"
        reverse
      />

      {/* System Highlights */}
      <section className="px-10 md:px-24 py-20">
        <p className="text-green-400 tracking-widest mb-3">
          SYSTEM DESIGN HIGHLIGHTS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          系统设计亮点
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#151b2d] p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">经营循环驱动</h3>
            <p className="text-gray-400 leading-7">
              所有系统围绕资源生产、经济流通与建造扩展构建闭环，
              玩家行为始终被循环结构驱动。
            </p>
          </div>

          <div className="bg-[#151b2d] p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">模块化系统架构</h3>
            <p className="text-gray-400 leading-7">
              各系统独立设计，通过事件与数据接口实现解耦联动，
              支持后续快速扩展新玩法。
            </p>
          </div>

          <div className="bg-[#151b2d] p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">数据驱动设计</h3>
            <p className="text-gray-400 leading-7">
              作物、NPC行为与物品系统均采用数据配置驱动，
              降低系统耦合，提高可扩展性。
            </p>
          </div>

        </div>
      </section>

      {/* Closing */}
      <section className="px-10 md:px-24 py-10">
        <h2 className="text-4xl font-bold mb-8">设计总结</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#151b2d] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              可持续经营体验
            </h3>

            <p className="text-gray-400 leading-7">
              通过完整的生产—流通—建造循环，
              玩家始终处于资源增长与决策优化的经营节奏中。
            </p>
          </div>

          <div className="bg-[#151b2d] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              系统模拟世界
            </h3>

            <p className="text-gray-400 leading-7">
              NPC行为、时间系统与建筑持久化共同构建持续运行的模拟世界，
              提升整体沉浸感。
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}