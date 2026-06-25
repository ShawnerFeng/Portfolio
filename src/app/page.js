export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
    <section className="relative min-h-[60vh] flex flex-col justify-center px-10 md:px-24 py-10 overflow-hidden">

      {/* 背景图 */}
      <img
        src="/images/temp02.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* 黑色渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0b0f19]/40 to-[#0b0f19]" />

      {/* 内容 */}
      <div className="relative z-10">

        <p className="text-cyan-400 mb-4 tracking-widest">
          PORTFOLIO
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          潇枫的个人作品集
        </h1>

        <p className="max-w-5xl text-gray-300 text-lg leading-8 mb-8">
          展示我的游戏 Demo、设计文档 GDD、关卡设计分析、
          美术作品、游戏经历与视频内容。
        </p>

        <div className="flex gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition"
          >
            View Projects
          </a>

          <a
            href="/resume"
            className="px-6 py-3 border border-white/40 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Contact Me
          </a>
        </div>

      </div>

    </section>

    <section id="projects" className="px-10 md:px-24 py-12">
    <div className="flex justify-between items-end mb-8">
      <h2 className="text-4xl font-bold">游戏项目和策划作品集</h2>

      <a
        href="/projects"
        className="text-cyan-400 font-bold hover:text-cyan-300 transition"
      >
        View All →
      </a>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Ice */}
      <a
        href="/projects/icefactory"
        className="group bg-[#151b2d] rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400 transition"
      >
        <div className="relative overflow-hidden">

          <img
            src="/images/IceBanner.png"
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
          />

          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

          {/* 标题 */}
          <div className="absolute bottom-6 left-6">
            <h3 className="text-3xl font-bold">
              《冰雕工厂》
            </h3>
          </div>

        </div>

        <div className="p-6">
          <p className="text-gray-400 leading-7">
            第三人称冰雪工厂解谜动作 Demo，
            包含投掷、破冰、火区、敌人 AI、
            机关与关卡流程。
          </p>
        </div>

      </a>

      {/* Farm */}
      <a
        href="/projects/farm"
        className="group bg-[#151b2d] rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400 transition"
      >
        <div className="relative overflow-hidden">

          <img
            src="/images/FarmBanner.png"
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

          <div className="absolute bottom-6 left-6">
            <h3 className="text-3xl font-bold">
              《农场物语》
            </h3>
          </div>

        </div>

        <div className="p-6">
          <p className="text-gray-400 leading-7">
            Unity 农场经营 Demo，
            包含种植、背包、交易、
            建造、NPC 行为与存档系统。
          </p>
        </div>

      </a>

      {/* Designer */}
      <a
        href="/designer"
        className="group bg-[#151b2d] rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400 transition"
      >
        <div className="relative overflow-hidden">

          <img
            src="/images/P5R-Banner.png"
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

          <div className="absolute bottom-6 left-6">
            <h3 className="text-3xl font-bold">
              游戏策划作品集
            </h3>
          </div>

        </div>

        <div className="p-6">
          <p className="text-gray-400 leading-7">
            包含P5R斑目美术馆关卡拆解，
            以及《冰雕工厂》Demo设计文档GDD。
          </p>
        </div>

      </a>

    </div>
  </section>

      <section id="art" className="px-10 md:px-24 py-12">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-4xl font-bold">美术作品集</h2>
          <a href="/art" className="text-cyan-400 font-bold">
            View Gallery →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#151b2d] rounded-xl overflow-hidden">
            <img
              src="/images/FengPic01.png"
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">原神风,雷,水三执政神装图 </h3>
              <p className="text-gray-400">
                近期原创板绘 2026
              </p>
            </div>
          </div>

          <div className="bg-[#151b2d] rounded-xl overflow-hidden">
            <img
              src="/images/FengPic02.jpg"
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">天策(《剑网三》)</h3>
              <p className="text-gray-400">
                临摹手绘 伊吹五月 2021
              </p>
            </div>
          </div>

          <div className="bg-[#151b2d] rounded-xl overflow-hidden">
            <img
              src="/images/Art/middle-study-01.jpg"
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">天空之城</h3>
              <p className="text-gray-400">
                临摹手绘 2016
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="videos" className="px-10 md:px-24 py-12">
        <h2 className="text-4xl font-bold mb-8">Demo演示视频</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#151b2d] p-5 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">《冰雕工厂》Demo</h3>
            <video controls className="w-full rounded-xl">
              <source src="/videos/ice-factory-demo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="bg-[#151b2d] p-5 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">《农场物语》Demo</h3>
            <video controls className="w-full rounded-xl">
              <source src="/videos/FarmDemo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section id="contact" className="px-10 md:px-24 py-16">
        <div className="bg-[#151b2d] rounded-2xl p-8 border border-white/10">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-gray-400">Email: 769940513@qq.com</p>
        </div>
      </section>
    </main>
  );
}