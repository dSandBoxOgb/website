import SectionBadge from "@/components/common/section_badge";

export default function AboutHero() {
  return (
    <section className="">
      <div className="hero-section">
        {/* Header Section */}
        <div className="flex items-center justify-center">
          <h1 className="subtitle relative mx-auto inline-block text-center">
            About Us
            <div
              className="absolute right-0 -bottom-4 left-0 h-5 w-full bg-cover bg-top-left bg-no-repeat"
              style={{
                backgroundImage: "url('hero-title-underline.png')",
              }}
            ></div>
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        {/* Main Content with Text on Left and Image on Right */}
        <SectionBadge align="left" />
        <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
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
            <div className="w-full max-w-md">
              <img
                src="/Group 3.png"
                alt="About dSandBox"
                className="h-auto w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
