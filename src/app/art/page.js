"use client";

import { useState } from "react";

export default function ArtPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const groups = [
    {
      title: "原神风,雷,水三执政神装图",
      subtitle: "Original / 2026",
      description: "近期原创板绘,由于时间问题还没有画完 (雷神, 水神动作参考英雄联盟s6 SKT赛季冠军皮肤)",
      layout: "recentSingle",
      images: ["/images/Art/recent-01.png"],
    },
    {
      title: "大学时期原创板绘",
      subtitle: "Original / 2023",
      description: "毕业前怀念大学时光 & 大四时纪念姐姐婚礼所画",
      layout: "universityOriginal",
      images: [
        "/images/Art/uni-original-01.jpg",
        "/images/Art/uni-original-02.jpg",
      ],
    },
    {
      title: "大学时期的板绘临摹",
      subtitle: "Digital Study / 2022 - 2023",
      description: "主要用于学习色彩控制和材质表达。依次是 1.塞蕾丝 (《弹丸论破1》)[上左] 2.色彩练习少女[上右] 3.钟馗 (王者荣耀)[下左] 4.月之女祭司 (Dota2)[下中]  5.色彩练习牵牛花 [下右]",
      layout: "universityDigitalStudy",
      images: [
        "/images/Art/uni-digital-study-01.png",
        "/images/Art/uni-digital-study-02.jpg",
        "/images/Art/uni-digital-study-03.jpg",
        "/images/Art/uni-digital-study-04.png",
        "/images/Art/uni-digital-study-05.jpg",
      ],
    },
    {
      title: "大学时期的手绘水粉与水彩临摹",
      subtitle: "Watercolor / 2019 - 2023",
      description: "这段时期很喜欢伊吹五月的画风,主要学习古风角色、构图、氛围和色彩层次。依次是 1.天策( 1~4都是《剑网三》)[上左] 2.明教[上中] 3.五毒 [下左] 4.藏剑 [下中]  5.钢铁侠 [右]",
      layout: "universityHandStudy",
      images: [
        "/images/Art/uni-hand-study-01.jpg",
        "/images/Art/uni-hand-study-02.jpg",
        "/images/Art/uni-hand-study-03.jpg",
        "/images/Art/uni-hand-study-04.jpg",
        "/images/Art/uni-hand-study-05.png",
      ],
    },
    {
      title: "高中时期原创手绘",
      subtitle: "Original / 2015 - 2018",
      description: "题材偏幻想、怪谈和角色设定，使用水彩和马克笔完成。分别是 1.女巫，预言家与猎人 (灵感来自狼人杀) 2.鬼故事之鬼怪藏在床底下  3. 吸血鬼印象 ",
      layout: "highSchoolFocus",
      images: [
        "/images/Art/high-original-01.jpg",
        "/images/Art/high-original-02.jpg",
        "/images/Art/high-original-03.jpg",
      ],
    },
    {
      title: "初中时期原创手绘",
      subtitle: "Original / 2013 - 2015",
      description: "开始从油画棒升级为马克笔并尝试复杂角色造型和装饰设计。左图手部和头部饰品是临摹的，其余部分是原创自由发挥",
      layout: "middleSchoolOriginal",
      images: [
        "/images/Art/middle-original-01.jpg",
        "/images/Art/middle-original-02.jpg",
      ],
    },
    {
      title: "中学时期的水彩临摹作品",
      subtitle: "Study / 2015 - 2018",
      description: "初中以及高中时期，包含动画、游戏和奇幻题材。依次是 1.天空之城 [上左] 2.钢之炼金术士 [上右] 3.驱魔少年 [下左] 4.苍穹之光薇恩 (英雄联盟)[下右] ",
      layout: "middleSchoolStudy",
      images: [
        "/images/Art/middle-study-01.jpg",
        "/images/Art/middle-study-02.jpg",
        "/images/Art/middle-study-03.jpg",
        "/images/Art/middle-study-04.jpg",
      ],
    },
  ];

  const ImageBox = ({ src, className = "" }) => (
    <div
      onClick={() => setSelectedImage(src)}
      className={`bg-black/30 rounded-2xl overflow-hidden cursor-pointer ${className}`}
    >
      <img
        src={src}
        alt="Artwork"
        className="w-full h-full object-cover hover:scale-105 transition duration-300"
      />
    </div>
  );

  const RenderLayout = ({ group }) => {
    const img = group.images;

    if (group.layout === "recentSingle") {
      return (
        <div className="grid grid-cols-1 gap-4 p-4 md:p-6 max-w-6xl mx-auto">
          <ImageBox src={img[0]} className="h-[480px]" />
        </div>
      );
    }

    if (group.layout === "universityOriginal") {
      return (
        <div className="grid md:grid-cols-3 gap-4 p-4 md:p-6 max-w-7xl mx-auto">
          <ImageBox src={img[0]} className="md:col-span-2 h-[580px]" />
          <ImageBox src={img[1]} className="h-[420px] self-center" />
        </div>
      );
    }

    if (group.layout === "universityDigitalStudy") {
      return (
        <div className="space-y-4 p-4 md:p-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            <ImageBox src={img[0]} className="md:col-span-3 h-[480px]" />
            <ImageBox src={img[3]} className="md:col-span-2 h-[480px]" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <ImageBox src={img[1]} className="h-[330px]" />
            <ImageBox src={img[2]} className="h-[330px]" />
            <ImageBox src={img[4]} className="h-[330px]" />
          </div>
        </div>
      );
    }

    if (group.layout === "universityHandStudy") {
      return (
        <div className="p-4 md:p-6 max-w-8xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <ImageBox src={img[0]} className="h-[340px]" />
                <ImageBox src={img[1]} className="h-[340px]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <ImageBox src={img[2]} className="h-[420px]" />
                <ImageBox src={img[3]} className="h-[420px]" />
              </div>
            </div>

            <ImageBox src={img[4]} className="h-[780px]" />
          </div>
        </div>
      );
    }

    if (group.layout === "highSchoolFocus") {
      return (
        <div className="grid md:grid-cols-4 gap-4 p-4 md:p-6 max-w-6xl mx-auto">
          <ImageBox src={img[0]}className="md:col-span-2 md:row-span-2 h-[720px]"/>
          <ImageBox src={img[1]}className="md:col-span-2 h-[350px]"/>
          <ImageBox src={img[2]}className="md:col-span-2 h-[350px]"/>
        </div>
      );
    }

    if (group.layout === "middleSchoolOriginal") {
      return (
        <div className="space-y-4 p-4 md:p-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <ImageBox src={img[0]} className="h-[440px]" />
            <ImageBox src={img[1]} className="h-[440px]" />
          </div>
        </div>
      );
    }

    if (group.layout === "middleSchoolStudy") {
      return (
        <div className="space-y-4 p-4 md:p-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <ImageBox src={img[0]} className="h-[380px]" />
            <ImageBox src={img[1]} className="h-[380px]" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <ImageBox src={img[2]} className="h-[380px]" />
            <ImageBox src={img[3]} className="h-[380px]" />
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white px-10 md:px-24 py-20">
      <section className="mb-20">
        <p className="text-cyan-400 tracking-widest mb-3">ART PORTFOLIO</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">美术作品集</h1>
        <p className="text-gray-400 max-w-4xl leading-8 text-lg">
           我的板绘和手绘作品, 按时期分类。非美术专业, 因为热爱所以坚持！
        </p>
      </section>

      <section className="space-y-24">
        {groups.map((group) => (
          <div
            key={group.title}
            className="bg-[#151b2d] rounded-3xl border border-white/10 overflow-hidden"
          >
            <div className="p-8 md:p-10 border-b border-white/10">
              <p className="text-cyan-400 tracking-widest text-sm mb-3">
                {group.subtitle}
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {group.title}
              </h2>

              <p className="text-gray-400 max-w-8xl leading-8">
                {group.description}
              </p>
            </div>

            <RenderLayout group={group} />
          </div>
        ))}
      </section>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-6"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-8 text-white text-4xl"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
          />
        </div>
      )}
    </main>
  );
}