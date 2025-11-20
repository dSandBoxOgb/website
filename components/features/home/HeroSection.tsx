

import { JoinWaitlist } from "../WaitlistForm";
import { Button } from "@/components/ui/button";

export default function HeroSection() {

  return (
    <>
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            A{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-tr font-extrabold p-2 from-[#FF4D29] to-[#FFC107]">
              Creativity Playground
            </span>
            <br />
            For Designers
          </h1>

          <div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              dSandBox is a global design and innovation ecosystem built to
              empower designers through creativity, connection, and
              collaboration. We’re shaping the next generation of creative
              thinkers and problem-solvers
            </p>
          </div>

          <div className="flex gap-5 mt-25 justify-center">
            <JoinWaitlist />
            <Button variant="outline">Join Community</Button>
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
