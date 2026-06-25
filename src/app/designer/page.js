import Link from "next/link";

export default function DesignerPage() {
  const cases = [
    {
      title: "《冰雕工厂》Demo 设计文档",
      type: "游戏设计文档 Game Design Document",
      href: "/designer/icefactory",
      image: "/images/IceBanner.png",
      color: "text-cyan-400",
      border: "hover:border-cyan-400",
      description:
        "限时完成的游戏设计文档（GDD），涵盖核心玩法、关卡流程、系统设计、敌人配置以及整体关卡体验设计。",
      tags: ["GDD", "System Design", "Level Flow", "Unity"],
    },
    {
      title: "P5R 斑目宫殿画廊关卡拆解",
      type: "案例研究 Case Study",
      href: "/designer/p5r",
      image: "/images/P5R-Banner.png",
      color: "text-green-400",
      border: "hover:border-green-400",
      description:
        "围绕《女神异闻录5 皇家版》斑目宫殿画廊区域，从空间布局、机制设计、谜题流程、叙事表达与玩家引导等角度进行分析。",
      tags: ["关卡拆解", "Player Guidance", "Pacing", "Case Study"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white px-10 md:px-24 py-20">
      <section className="mb-20">
        <p className="text-cyan-400 tracking-widest mb-3">
          DESIGN PORTFOLIO
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          游戏策划作品集
        </h1>

        <p className="text-gray-400 max-w-4xl leading-8 text-lg">
          通过游戏设计文档（GDD）与关卡拆解展示我的设计思维，
          重点关注玩家体验、空间设计、机制设计、节奏控制以及系统逻辑。
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {cases.map((item) => (
          <Link href={item.href} key={item.title}>
            <div
              className={`group bg-[#151b2d] rounded-2xl overflow-hidden border border-white/10 ${item.border} hover:scale-[1.03] transition cursor-pointer`}
            >
              {/* Banner */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-6">
                  <h2 className="text-3xl font-bold">
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* 内容 */}
              <div className="p-6">
                <p className={`${item.color} text-sm tracking-widest mb-4`}>
                  {item.type}
                </p>

                <p className="text-gray-400 leading-7 mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className={`${item.color} font-bold`}>
                  阅读详情 →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}