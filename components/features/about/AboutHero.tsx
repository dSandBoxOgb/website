import Hero from "@/components/common/Hero";
import SectionBadge from "@/components/common/section_badge";
import Image from "next/image";

export default function AboutHero() {
  return (
    <>
      <Hero title="About Us" />
      <section className="">
        <SectionBadge align="left" />
        <div className="mb-20 grid justify-between items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-lg  leading-relaxed ">
            <h2 className="subtitle text-left!">About dSandbox</h2>
            <p>
              dSandBox is a creativity playground for designers — a global
              design community built to inspire, connect, and empower creatives
              at every stage of their journey. We exist to give designers a
              home. A space where ideas grow, talent is nurtured, and creativity
              is celebrated.
            </p>
            <p>
              Whether you&apos;re just starting your design journey or already
              building meaningful experiences, dSandBox gives you the support,
              opportunities, and community you need to thrive.
            </p>

            <p>
              Starting in Ogbomoso, one of South-West Nigeria’s fast-rising tech
              and creative cities, dSandBox is now growing into a Pan-African
              design ecosystem — connecting designers, building talent, and
              shaping the future of African creativity.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <div className="w-full p-10">
              <Image
                src="/Group 3.png"
                alt="About dSandBox"
                className="h-auto w-full rounded-xl"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
