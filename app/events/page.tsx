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
          {Object.values(communities)
            .flatMap((community) =>
              Object.values(community.events).map((event) => ({
                event,
                community,
              }))
            )
            .map(({ event, community }, index) => (
              <EventCard
                key={index}
                communityName={community.slug}
                event={event}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default page;
