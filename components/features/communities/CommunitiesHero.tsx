export default function CommunitiesHero() {
  return (
    <section className="">
      <div className="hero-section">
        {/* Header Section */}
        <div className="flex items-center justify-center">
          <h1 className="subtitle to-white! relative mx-auto inline-block text-center">
            Our Communities
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
        {/* Main Content */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* dSandBox tagline */}
              <div className="mb-2 flex items-center gap-3">
                <img
                  src="/badge-icon.png"
                  alt="dSandBox logo"
                  className="mr-2 h-4 w-4"
                />
                <span className="text-sm text-gray-400">dSandBox</span>
              </div>

              <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                Connect and build together
              </h2>

              {/* Join Community Button */}
              <button className="rounded-lg bg-[#FF8C00] px-8 py-4 text-lg font-semibold text-black transition-colors hover:bg-[#E67E00]">
                Join Our Global Community
              </button>
            </div>

            {/* Right Column - Description */}
            <div className="space-y-6 text-xl leading-relaxed text-gray-300">
              <p>
                dSandBox exists so our creator community can come together and
                learn. It's run by the community, for the community, and
                everyone is welcome. Join us and make some new friends.
              </p>

              <p>
                Connect and build with 85,000+ community members around the
                world – whether you're new to Webflow or a seasoned designer;
                there's a place for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
