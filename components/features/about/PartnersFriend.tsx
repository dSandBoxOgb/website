
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
    <section className="py-20 bg-[#111111] text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-left mb-16">
            <SectionBadge align="center" />
            <h2 className="subtitle mb-8 text-left">Our Partners & Friends</h2>
          </div>

          {/* Partners Grid - 5 rows using loop */}
          <div className="space-y-8">
            {Array.from({ length: 5 }, (_, rowIndex) => (
              <div 
                key={`row-${rowIndex}`}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center"
              >
                {partners.map((src, idx) => (
                  <div key={`row${rowIndex}-${idx}`} className="flex items-center justify-center p-4 group">
                    <div className="relative flex items-center justify-center w-full h-20">
                      <Image
                        src={src}
                        alt={`partner-${idx + 1}`}
                        width={140}
                        height={60}
                        className="max-w-[120px] h-auto filter grayscale brightness-100 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
