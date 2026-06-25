import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white px-10 md:px-24 py-20">
      <section className="mb-20">
        <p className="text-cyan-400 tracking-widest mb-3">PROJECT PORTFOLIO</p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          项目经历
        </h1>

        <p className="text-gray-400 max-w-4xl leading-8 text-lg">
          以下项目展示了我在关卡设计、Unity 游戏开发、游戏系统设计以及 AI
          方向的实践经历。其中包含独立完成的游戏 Demo、课程项目，游戏设计分析作品见Design页面。
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Ice Sculpture Factory */}
        <Link href="/projects/icefactory">
          <div className="bg-[#151b2d] rounded-2xl overflow-hidden hover:scale-[1.03] transition cursor-pointer border border-white/10 hover:border-cyan-400">
            <img
              src="/images/IceBanner.png"
              className="w-full h-68 object-cover"
              alt="Ice Sculpture Factory"
            />

            <div className="p-6">
              <p className="text-cyan-400 text-sm mb-2">
                Unity / Level Design 
              </p>

              <h2 className="text-2xl font-bold mb-3">
                《冰雕工厂》Demo
              </h2>

              <p className="text-gray-400 leading-7 mb-5">
                第三人称动作解谜 Demo，
                独立完成关卡设计、玩法设计与程序开发，实现投掷、破冰、
                机关交互、敌人 AI、Boss 战以及完整关卡流程。
              </p>

              <span className="text-cyan-400 font-bold">
                查看项目 →
              </span>
            </div>
          </div>
        </Link>

        {/* Farm */}
        <Link href="/projects/farm">
          <div className="bg-[#151b2d] rounded-2xl overflow-hidden hover:scale-[1.03] transition cursor-pointer border border-white/10 hover:border-green-400">
            <img
              src="/images/FarmBanner.png"
              className="w-full h-68 object-cover"
              alt="Farm Simulation"
            />

            <div className="p-6">
              <p className="text-green-400 text-sm mb-2">
                Unity / Simulation
              </p>

              <h2 className="text-2xl font-bold mb-3">
                《农场物语》Demo
              </h2>

              <p className="text-gray-400 leading-7 mb-5">
                模拟经营 Demo，
                实现种植、背包、交易、建造、NPC 日程、
                跨场景移动以及存档等完整经营系统。
              </p>

              <span className="text-green-400 font-bold">
                查看项目 →
              </span>
            </div>
          </div>
        </Link>

        {/* AI */}
        <Link href="/projects/ai">
          <div className="bg-[#151b2d] rounded-2xl overflow-hidden hover:scale-[1.03] transition cursor-pointer border border-white/10 hover:border-purple-400">
            <img
              src="/images/AIBanner.png"
              className="w-full h-68 object-cover"
              alt="AI Projects"
            />

            <div className="p-6">
              <p className="text-purple-400 text-sm mb-2">
                Python / AI / Transformer
              </p>

              <h2 className="text-2xl font-bold mb-3">
                AI 课程项目
              </h2>

              <p className="text-gray-400 leading-7 mb-5">
                包括目标检测、命名实体识别（NER）、
                图像处理以及游戏自动化测试等实践项目。
              </p>

              <span className="text-purple-400 font-bold">
                查看项目 →
              </span>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}