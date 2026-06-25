export default function GameExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white px-10 md:px-24 py-20">

      <section className="mb-16">
        <p className="text-cyan-400 tracking-widest mb-3">
          GAME EXPERIENCE
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          游戏经历
        </h1>

        <p className="text-gray-400 max-w-4xl leading-8 text-lg">
            我玩过多种类型游戏,涵盖RPG、动作、类魂、策略和模拟等类型。我的游戏经历不仅帮助我分析关卡和游戏系统设计，也影响了我对玩家引导、节奏把控、探索体验和游戏系统的思考方式。
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10">

        <div className="bg-[#151b2d] rounded-2xl overflow-hidden border border-white/10">
          <img
            src="/images/Game/Game01.png"
            className="w-full object-cover"
          />

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3">
              游戏展示橱窗
            </h2>

            <p className="text-gray-400 leading-8">
              正在完善
            </p>
          </div>
        </div>

        <div className="bg-[#151b2d] rounded-2xl overflow-hidden border border-white/10">
          <img
            src="/images/Game/Game02.png"
            className="w-full object-cover"
          />

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3">
              游戏展示橱窗
            </h2>

            <p className="text-gray-400 leading-8">
              正在完善
            </p>
          </div>
        </div>

      </section>

    </main>
  );
}