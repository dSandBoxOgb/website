import SectionBadge from "@/components/common/section_badge";

export default function AboutSection() {
  return (
    <section className="py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl text-center">
          <SectionBadge />

          <h2 className="subtitle">About dSandBox</h2>
          <div className="space-y-8 text-lg leading-relaxed text-gray-300">
            <p>
              dSandBox, Ogbomoso is a design and innovation community built
              exclusively for designers — a space where creativity,
              collaboration, and growth come together.
            </p>

            <p>
              We provide a sandbox for designers to learn, experiment, and build
              meaningful experiences through workshops, design meetups,
              portfolio reviews, and collaborative design challenges.
            </p>

            <p>
              Our goal is to nurture and showcase world-class design talent from
              Ogbomoso, helping creatives sharpen their skills, connect with
              industry peers, and grow into globally recognized designers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
