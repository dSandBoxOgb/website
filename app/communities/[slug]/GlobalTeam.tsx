import Image from "next/image";

export function GlobalTeam() {
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
    <section className="py-20 bg-red-500 border">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Badge + Title matching design */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="inline-flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 font-bold text-black">
                  ✶
                </span>
                <span className="text-sm text-primary-200">
                  Ibadan Community
                </span>
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
                  <Image
                    src={member.image ?? "/team-placeholder.jpg"}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    width={400}
                    height={300}
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
