import communities from "@/app/communities/community.json";
import SectionBadge from "@/components/common/section_badge";
import classNames from "classnames";
import Link from "next/link";

export default function ExploreCommunities() {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <SectionBadge />
          <h2 className="subtitle">Explore Our Communities</h2>
        </div>

        <div className="mx-auto grid h-full max-w-6xl grid-cols-1 items-stretch justify-center gap-8 md:grid-cols-3">
          {communities.map((c) => (
            <Link
              key={c.slug}
              href={c.comingSoon ? "#" : `/communities/${c.slug}`}
              className={`group relative block transform rounded-lg shadow-lg transition-all duration-200 hover:scale-[1.01] ${
                c.comingSoon ? "opacity-60" : ""
              }`}
              aria-disabled={c.comingSoon}
            >
              {c.comingSoon && (
                <div
                  className="absolute inset-0 rounded-lg -z-10 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/ibadan.png')" }}
                ></div>
              )}
              <div
                className={classNames("h-full rounded-lg p-0", {
                  "bg-[#0f0f0f]/95": c.comingSoon,
                  "bg-[#0f0f0f]": !c.comingSoon,
                })}
              >
                <div
                  className={classNames("h-48 rounded-t-lg bg-cover bg-center")}
                  style={{ backgroundImage: `url('${c.image}')` }}
                />

                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">
                    {c.name} Community
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-300">
                    {c.description}
                  </p>

                  <div className="flex">
                    <span
                      className={`inline-block rounded-md px-4 py-2 text-sm font-medium ${
                        c.comingSoon
                          ? "cursor-not-allowed bg-gray-700 text-gray-300"
                          : "bg-[#FF8C00] text-black hover:brightness-95"
                      }`}
                    >
                      {c.comingSoon ? "Coming Soon" : "View Community"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
