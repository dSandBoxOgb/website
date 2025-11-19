import Hero from "@/components/common/Hero";
// import { CabinetGrotesk } from "@/components/ui/fonts";
// import classNames from "classnames";

export default function HeroSection() {
  const DARK_ORANGE = "#FF8C00";
  const DARK_ORANGE_HOVER = "#E67E00"; // Slightly darker for hover effect


  // return <Hero title="About Us"/>
  return (
    <>
      {/* // 1. Set the main section to a dark background and ensure text defaults to white */}
      <section
        className="hero-section"
      >

        {/* --- Hero Content --- */}
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-4 text-center ">
          <div className="w-full">
            {/* Main Heading replaced by an image */}
            <div className="mb-8 flex flex-col items-center justify-center">
              <div className="relative">
                <div
                  // className={classNames(
                  //   CabinetGrotesk.className,
                  //   "leading24 relative text-3xl font-bold md:text-5xl lg:text-8xl",
                  // )}
                >
                  A{" "}
                  <span className="relative whitespace-nowrap text-gray-400 opacity-95">
                    <div
                      className="absolute top-[2%] -right-[0.05em] h-[0.25em] w-[0.25em] bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: "url('flower-hero.png')" }}
                    ></div>
                    Creativity Playground
                    <div
                      className="absolute right-0 -bottom-4 left-0 h-5 w-full bg-cover bg-top-left bg-no-repeat"
                      style={{
                        backgroundImage: "url('hero-title-underline.png')",
                      }}
                    ></div>
                  </span>{" "}
                  <br />
                  <span className="mt-[0.5em] inline-block">For Designers</span>
                </div>
              </div>
              <img
                src="/frame 9.png"
                alt="A Creativity Playground For Designers"
                className="hidden h-auto w-full max-w-xl"
              />
            </div>

            {/* Description */}
            <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-300">
              dSandBox is a global design and innovation ecosystem built to
              empower designers through creativity, connection, and
              collaboration. We're shaping the next generation of creative
              thinkers and problem-solvers
            </p>

            {/* CTA Buttons */}
            <div className=" flex flex-col justify-center gap-4 sm:flex-row">
              {/* Primary Button: Solid Dark Orange */}
              <button className="bg-main-600 hover:bg-main-700 rounded-lg px-8 py-4 font-semibold text-white shadow-lg shadow-orange-900/30 transition-colors">
                Try dSandBox App
              </button>

              {/* Secondary Button: Dark Border/Outline */}
              <button className="border-main-600 text-main-600 rounded-lg border-2 px-8 py-4 font-semibold transition-colors hover:border-white hover:text-white">
                Our Community
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Logos Section */}
      <div className="bg-black py-12">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20">
          {[
            "sponsor-1.png",
            "sponsor-2.png",
            "sponsor-3.png",
            "sponsor-4.png",
            "sponsor-5.png",
            "sponsor-6.png",
          ].map((logo, index) => (
            <div
              key={index}
              className="text-lg font-medium text-gray-400 w-36 h-9 transition-colors hover:text-gray-300 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${logo})` }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
