import Hero from "@/components/common/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CommunitiesHero() {
  return (
    <>
      <Hero title="About Us" />
      <section className="">

        <div className="container mx-auto px-4 py-20">
          {/* Main Content */}
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Left Column - Content */}
              <div className="space-y-8">
                {/* dSandBox tagline */}
                <div className="mb-2 flex items-center gap-3">
                  <Image
                    src="/badge-icon.png"
                    alt="dSandBox logo"
                    className="mr-2 h-4 w-4"
                    width={16}
                    height={16}
                  />
                  <span className="text-sm text-gray-400">dSandBox</span>
                </div>

                <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                  Connect and build together
                </h2>

                {/* Join Community Button */}
                <Button size="lg">Join Our Global Community</Button>

              </div>

              {/* Right Column - Description */}
              <div className="space-y-6 text-xl leading-relaxed dark:text-gray-300 text-black">
                <p>
                  dSandBox exists so our creator community can come together and
                  learn. It&apos;s run by the community, for the community, and
                  everyone is welcome. Join us and make some new friends.
                </p>

                <p>
                  Connect and build with 85,000+ community members around the
                  world - whether you&apos;re new to Webflow or a seasoned designer;
                  there&apos;s a place for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
