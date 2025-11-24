import Image from "next/image";
import { JoinWaitlist } from "../waitlist/WaitlistForm";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <>
      <section>
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative container">
            <h1 className="text-5xl md:text-6xl md:leading-16 leading-14 font-bold text-gray-900 mb-6">
              A{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-tr font-extrabold p-2 from-[#FF4D29] to-[#FFC107]">
                Creativity Playground
              </span>
              <br />
              For Designers
            </h1>
            <Image
              width={10}
              height={10}
              src="/home/hero-flower.png"
              alt="A Creativity Playground For Designers"
              className="= max-w-xl  absolute size-6 -top-2 right-18 mt-1 md:right-32 animate animate-spin duration-1000"
            />

            <Image
              width={800}
              height={800}
              src="/hero-line.png"
              alt="A Creativity Playground For Designers"
              className=" h-auto max-w-60 md:max-w-xl absolute top-16 left-1/2 -translate-x-2/5 -translate-y-1/2 -z-10"
            />
          </div>

          <div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              dSandBox is a global design and innovation ecosystem built to
              empower designers through creativity, connection, and
              collaboration. We’re shaping the next generation of creative
              thinkers and problem-solvers
            </p>
          </div>

          <div className="flex gap-5 mt-10 justify-center">
            <JoinWaitlist />
            <Button variant="outline">Join Community</Button>
          </div>
        </div>
      </section>
      {/* Logos Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20">
        {[
          "beacon-labs-logo.png",
          "oluseun-onigbede-logo.png",
          "blockchain-lautech-logo.png",
          "o3-finance-logo.svg",
          "jt-connect-logo.svg",
        ].map((logo, index) => (
          <Image
            key={index}
            src={`/home/${logo}`}
            alt={logo}
            width={150}
            height={40}
          />
        ))}
      </div>
    </>
  );
}
