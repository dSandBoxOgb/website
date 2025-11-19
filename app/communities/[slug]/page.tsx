import communities from "@/app/communities/community.json";
import SectionBadge from "@/components/common/section_badge";
// Team Component (define this above your main component)
function GlobalTeam() {
  const teamMembers = [
    {
      name: "Lorem Upsum",
      role: "Community Leader",
      image: "/div.framer-1dfq98d.png",
    },
    {
      name: "Lorem Upsum",
      role: "Community Leader",
      image: "/div.framer-1dfq98d.png",
    },
    {
      name: "Lorem Upsum",
      role: "Community Leader",
      image: "/div.framer-1dfq98d.png",
    },
    {
      name: "Lorem Upsum",
      role: "Community Leader",
      image: "/div.framer-1dfq98d.png",
    },
    {
      name: "Lorem Upsum",
      role: "Community Leader",
      image: "/div.framer-1dfq98d.png",
    },
    {
      name: "Lorem Upsum",
      role: "Community Leader",
      image: "/div.framer-1dfq98d.png",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Badge + Title matching design */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="inline-flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF8C00] font-bold text-black">
                  ✶
                </span>
                <span className="text-sm text-[#FF8C00]">Ibadan Community</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-300 md:text-5xl">
              Team
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-gray-800 bg-[#0f0f0f] shadow-sm"
              >
                <div className="h-48 w-full bg-gray-800">
                  <img
                    src={member.image ?? "/team-placeholder.jpg"}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="mb-1 text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Cards Component (add this above your main component)
function CommunityHighlights({
  events,
}: {
  events: {
    title: string;
    description: string;
    image: string;
    time?: string;
    date?: string;
    location?: string;
  }[];
}) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <SectionBadge text="Events" />

          <h2 className="mx-auto max-w-4xl text-4xl font-extrabold text-gray-300 md:text-5xl">
            From Vision To Digital Reality, Catch Up With Our Events
          </h2>
        </div>

        <div className="max-w-9xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events?.map((card, index) => (
            <div
              key={index}
              className={`rounded-xl p-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
            >
              {/* Image Container */}
              <div className="mb-4 h-40 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className={`mb-2 text-lg font-bold`}>{card.title}</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {card.description}
              </p>
              <div className="mt-4 text-sm text-gray-300">
                {/* time */}
                <div className="flex items-center gap-2">
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      clipPath="url(#clip0_451_765)"
                      stroke="#FFFFF7"
                      strokeWidth={1.10388}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7.001 12.834a5.833 5.833 0 100-11.667 5.833 5.833 0 000 11.667z" />
                      <path d="M7 3.5V7l2.333 1.167" />
                    </g>
                    <defs>
                      <clipPath id="clip0_451_765">
                        <path fill="#fff" d="M0 0H14V14H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                  {card.time}
                </div>
                {/* date */}
                <div className="flex items-center gap-2">
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      clipPath="url(#clip0_451_770)"
                      stroke="#FFFFF7"
                      strokeWidth={1.10388}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11.083 2.333H2.917c-.645 0-1.167.523-1.167 1.167v8.167c0 .644.522 1.166 1.167 1.166h8.166c.645 0 1.167-.522 1.167-1.166V3.5c0-.644-.522-1.167-1.167-1.167zM9.332 1.167V3.5M4.668 1.167V3.5M1.75 5.833h10.5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_451_770">
                        <path fill="#fff" d="M0 0H14V14H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                  {card.date}
                </div>
                {/* location */}
                <div className="flex items-center gap-2">
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      clipPath="url(#clip0_451_777)"
                      stroke="#FFFFF7"
                      strokeWidth={1.10388}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12.25 5.833c0 4.083-5.25 7.583-5.25 7.583s-5.25-3.5-5.25-7.583a5.25 5.25 0 1110.5 0z" />
                      <path d="M7.004 7.583a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_451_777">
                        <path fill="#fff" d="M0 0H14V14H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                  {card?.location}
                </div>
              </div>
              <a
                href="#"
                className="mt-6 inline-block w-full rounded-lg bg-[#FF8C00] py-3 text-center font-semibold text-black transition-colors hover:bg-[#E67E00]"
                aria-label={`More info about ${card.title}`}
              >
                More Info
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Ibadan Community Page
export default async function CommunityPreview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const community = communities.find((c) => c.slug === slug);
  return (
    <div className="min-h-screen transition-colors">
      {/* Hero Section */}
      <section className="">
        <div className="hero-section">
          {/* Header Section */}
          <div className="flex items-center justify-center">
            <h1 className="subtitle relative mx-auto inline-block to-white! text-center">
              {community?.name}
              <div
                className="absolute right-0 -bottom-4 left-0 h-7 bg-contain bg-top-left bg-no-repeat"
                style={{
                  backgroundImage: "url('/hero-title-underline.png')",
                }}
              ></div>
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-6xl">
            {/* Small section tag */}
            <SectionBadge align="left" />
            {/* Two-column: text (left) and visual (right) */}
            <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-3">
              {/* Left: Text content */}
              <div className="col-span-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <h1 className="text-4xl font-bold md:text-5xl">
                  {community?.name}
                </h1>
                <div
                  dangerouslySetInnerHTML={{ __html: community?.content || "" }}
                />

                <a
                  href="#join"
                  className="mt-4 inline-block rounded-lg bg-[#FF8C00] px-6 py-3 font-semibold text-black"
                >
                  Join Ogbomoso Community
                </a>
              </div>

              {/* Right: Visual image */}
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <img
                    src={community?.full_image}
                    alt={`${community?.name} workspace`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <GlobalTeam />

      {/* REPLACED CTA Section with Community Highlights Cards */}
      <CommunityHighlights events={community?.events || []} />
    </div>
  );
}
