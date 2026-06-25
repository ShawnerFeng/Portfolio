export default function ImageSection({
  title,
  subtitle,
  description,
  image,
  reverse = false,
}) {
  return (
    <section className="px-10 md:px-24 py-16">
      <div
        className={`grid md:grid-cols-2 gap-10 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <img
            src={image}
            alt={title}
            className="w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>

        <div>
          <p className="text-cyan-400 tracking-widest text-sm mb-3">
            {subtitle}
          </p>

          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            {title}
          </h3>

          <p className="text-gray-400 leading-8 text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}