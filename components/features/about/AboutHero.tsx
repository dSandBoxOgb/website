import Hero from "@/components/common/Hero";
import SectionBadge from "@/components/common/section_badge";
import Image from "next/image";

export default function AboutHero() {
  return (<>
    <Hero title="About Us" />
    <section className="">
      <div className="py-20">
        <SectionBadge align="left" />
        <div className="mb-20 grid justify-between items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-lg  leading-relaxed ">
            <h2 className="subtitle text-left!">About dSandbox</h2>
            <p>
              dSandBox is a global design community ecosystem created to empower
              designers through creativity, connection, and collaboration.
            </p>
            <p>
              We bring designers together – from students to professionals – to
              learn, share ideas, and grow collectively through community
              events, workshops, and creative challenges.
            </p>
            <p>
              Starting from Ogbomoso, Nigeria, one of the fastest-rising tech
              and innovation hubs in the South-West, dSandBox is building local
              communities that connect to a larger global network of designers.
            </p>
            <p>
              Beyond community, dSandBox also builds innovative tools like dMuse
              – an AI-powered creative companion designed to help designers
              overcome creative blocks, discover design ideas, and boost their
              workflow.
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
      </div>
    </section>
  </>
  );
}
