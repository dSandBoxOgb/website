// components/features/home/HowWeWork.tsx
import SectionBadge from "@/components/common/section_badge";
import Image from "next/image";


export default function HowWeWork() {
  return (
    <section className="relative py-20">
      {/* Section background image */}
      <Image alt="" height={300} width={300} src="/hww_background_image.png" className="absolute right-0 -z-10 size-40 md:size-80 top-18" />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionBadge />

          {/* Main Title */}
          <h2 className="subtitle">How We Work</h2>

          {/* Description Section */}
          <div className="mx-auto mb-16">
            <p className="text-center max-w-4xl m-auto text-lg abs leading-relaxed text--400">
              dSandBox, Ogbomoso is a design and innovation community built
              exclusively for designers – a space where creativity,
              collaboration, and growth come together.
            </p>
          </div>

          {/* Grid for the Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                img: "/design.png",
                title: "Design",
                desc: "Choose a plan and share your design project details with us: we're here to listen.",
              },
              {
                img: "/connect.png",
                title: "Connect",
                desc: "Sit back and relax our expert designers will turn your vision into reality.",
              },
              {
                img: "/grow.png",
                title: "Grow",
                desc: "Your subscription ensures you have continuous access to our design team.",
              },
            ].map(({ img, title, desc }, index) => (
              <div
                key={index}
                className="rounded-xl hover:scale-105 transition-transform cursor-pointer border border-gray-800 bg-transparent p-8 text-left"
              >
                {/* Icon Container */}
                <Image
                  src={img}
                  alt={`${title} Icon`}
                  className="/bg-black mb-6 h-20 w-20 rounded-full p-2"
                  width={80}
                  height={80}
                />

                <h3 className="mb-4 text-xl font-bold">{title}</h3>
                <p className="text-base leading-relaxed ">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
