export default function ResumePage() {
  const skills = [
    "Unity",
    "C#",
    "Python",
    "MySQL",
    "AI",
    "Blender",
    "Android Studio",
  ];

  const games = [
    {
      category: "MOBA",
      titles: "英雄联盟、Dota2、王者荣耀",
    },
    {
      category: "角色扮演 RPG",
      titles:
        "原神、博德之门3、艾尔登法环、黑魂1/2/3、只狼、女神异闻录5、魔兽世界、洛克王国：世界",
    },
    {
      category: "动作 ACT",
      titles:
        "生化危机2/3/4/8/9、鬼泣5、怪物猎人：世界、怪物猎人：荒野、战神、双影奇境、双人成行、森林、森林之子",
    },
    {
      category: "模拟",
      titles: "饥荒、动物森友会、僵尸毁灭工程",
    },
    {
      category: "策略",
      titles: "金铲铲之战、部落冲突、皇室战争",
    },
    {
      category: "卡牌",
      titles: "炉石传说、杀戮尖塔、阴阳师",
    },
    {
      category: "非对称对抗",
      titles: "黎明杀机、第五人格",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white px-10 md:px-24 py-20">
      <section className="mb-20">
        <p className="text-cyan-400 tracking-widest mb-3">ABOUT ME</p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          简历
        </h1>

        <p className="text-gray-400 max-w-5xl leading-8 text-lg">
          我主要关注关卡设计、系统设计以及 Unity 游戏开发，拥有独立完成游戏 Demo 的经历，
          并具备 AI、计算机视觉与自动化测试相关项目经验。希望未来从事关卡策划或系统策划相关工作。
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-20">
        {[
          ["求职方向", "关卡策划 / 系统策划", "Unity 游戏开发"],
          ["联系方式", "Email", "769940513@qq.com"],
        ].map(([label, main, sub]) => (
          <div
            key={label}
            className="bg-[#151b2d] p-6 rounded-2xl border border-white/10"
          >
            <p className="text-cyan-400 mb-3">{label}</p>
            <h3 className="text-xl font-bold mb-2">{main}</h3>
            <p className="text-gray-400">{sub}</p>
          </div>
        ))}
      </section>

      <section className="mb-20">
        <p className="text-cyan-400 tracking-widest mb-3">EDUCATION</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">教育经历</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#151b2d] p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">香港大学</h3>
            <p className="text-gray-400 mb-2">
              计算机科学与技术（创新设计与科技）硕士
            </p>
            <p className="text-gray-500 mb-6">2024.09 - 2025.11</p>
            <p className="text-gray-400 leading-8">
              核心课程包括深度学习、神经网络与算法、网络安全、
              智能手机应用开发以及多媒体技术。
            </p>
          </div>

          <div className="bg-[#151b2d] p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">武汉理工大学</h3>
            <p className="text-gray-400 mb-2">
              通信工程（通信卓越工程师）本科
            </p>
            <p className="text-gray-500 mb-6">2019.09 - 2023.06</p>
            <p className="text-gray-400 leading-8">
              本科阶段学习通信工程、嵌入式系统、网络技术与硬件相关课程，
              并参与国家级大学生创新创业项目。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <p className="text-cyan-400 tracking-widest mb-3">INTERNSHIP</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">实习经历</h2>

        <div className="space-y-6">
          <div className="bg-[#151b2d] p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-2">
              Medmind Technology（香港）
            </h3>
            <p className="text-gray-500 mb-4">2025.01 - 2025.04</p>
            <p className="text-gray-400 leading-8">
              参与老年人记忆训练游戏 Neurogym2 的自动化运行与检测工具设计，
              结合 Unity 自动运行与深度学习图像识别，实现关键 Bug 的自动识别与记录，
              部分渲染类问题识别准确率达到 98% 以上。
            </p>
          </div>

          <div className="bg-[#151b2d] p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-2">
              武汉邮电科学研究院烽火学院
            </h3>
            <p className="text-gray-500 mb-4">2022.08 - 2022.09</p>
            <p className="text-gray-400 leading-8">
              参与 5G 移动通信优化与企业网络工程设计，完成信号覆盖方案、
              网络拓扑规划以及 VLAN、ACL、NAT 等网络配置实践。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <p className="text-cyan-400 tracking-widest mb-3">PROJECTS</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">项目经历</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="/projects/icefactory"
            className="bg-[#151b2d] p-6 rounded-2xl border border-white/10 hover:border-cyan-400 transition"
          >
            <h3 className="text-2xl font-bold mb-3">《冰雕工厂》Demo</h3>
            <p className="text-gray-400 leading-7 mb-5">
              第三人称动作解谜 Demo，包含投掷、破冰、火焰、敌人 AI、
              机关交互与完整线性关卡流程。
            </p>
            <span className="text-cyan-400 font-bold">查看项目 →</span>
          </a>

          <a
            href="/projects/farm"
            className="bg-[#151b2d] p-6 rounded-2xl border border-white/10 hover:border-green-400 transition"
          >
            <h3 className="text-2xl font-bold mb-3">《农场物语》Demo</h3>
            <p className="text-gray-400 leading-7 mb-5">
              模拟经营 Demo，实现种植、背包、交易、建造、NPC 日程、
              跨场景移动与存档系统。
            </p>
            <span className="text-green-400 font-bold">查看项目 →</span>
          </a>

          <a
            href="/projects/ai"
            className="bg-[#151b2d] p-6 rounded-2xl border border-white/10 hover:border-purple-400 transition"
          >
            <h3 className="text-2xl font-bold mb-3">AI 课程项目</h3>
            <p className="text-gray-400 leading-7 mb-5">
              包含目标检测、NER、图像处理、语音识别以及游戏自动化测试相关实践。
            </p>
            <span className="text-purple-400 font-bold">查看项目 →</span>
          </a>
        </div>
      </section>

      <section className="mb-20">
        <p className="text-cyan-400 tracking-widest mb-3">SKILLS</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">技能</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-white/10 text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <p className="text-cyan-400 tracking-widest mb-3">GAME EXPERIENCE</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">游戏经历</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              key={game.category}
              className="bg-[#151b2d] p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-3">{game.category}</h3>
              <p className="text-gray-400 leading-8">{game.titles}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-cyan-400 tracking-widest mb-3">CONTACT</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">联系方式</h2>

        <div className="bg-[#151b2d] p-8 rounded-2xl border border-white/10">
          <p className="text-gray-400 leading-8">
            Email：769940513@qq.com
          </p>
        </div>
      </section>
    </main>
  );
}