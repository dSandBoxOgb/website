import SectionBadge from "@/components/common/section_badge";
import Image from "next/image";

export default function PartnersFriend() {
  const partners = [
    "/partner 1.png",
    "/partner 2.png",
    "/partner 3.png",
    "/partner 4.png",
    "/partner 5.png",
  ];

  return (
    <section className="">
      <div className="container max-w-6xl m-auto">
        <div className="text-left mb-16">
          <SectionBadge align="center" />
          <h2 className="subtitle">Our Partners & Friends</h2>
        </div>

        <div className="space-y-8">
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
        </div>
      </div>
    </section>
  );
}
