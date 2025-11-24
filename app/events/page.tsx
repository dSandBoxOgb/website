import Hero from "@/components/common/Hero";
import { Input } from "@/components/ui/input";
import EventCard from "./EventCard";
import communities from "@/app/communities/community.json";

const page = () => {
  return (
    <>
      <Hero title="Events" />

      <section className="space-y-5 py-15 p-5">
        <div className="flex justify-end">
          <Input placeholder="Search" className="w-64" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* {Object.values(communities)
            .flatMap((community) =>
              Object.values(community.events).map((event) => ({
                event,
                community,
              }))
            )
            .map(({ event, community }, index) => ( */}
          <EventCard
            // key={index}
            communityName={"#"}
            event={{
              image: "/events/dSign-a-thon.png",
              slug: "https://chat.whatsapp.com/IOlMEOJ078j32sSzKlsQQw?mode=wwt",
              title: "dSign-A-Thon",
              description:
                "The dSign-A-Thon is an open creative challenge designed to inspire designers of all levels to think differently, push boundaries, and showcase their skills.",
              time: "11:00 AM - 3:00 PM",
              date: "Friday 28, 2025",
              location: "Oluseun Onigbede Innovation Hub, Ogbomoso",
            }}
          />
          {/* ))} */}
        </div>
      </section>
    </>
  );
};

export default page;
