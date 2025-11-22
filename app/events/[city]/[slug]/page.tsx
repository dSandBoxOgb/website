import Hero from "@/components/common/Hero";
import SectionBadge from "@/components/common/section_badge";
import Image from "next/image";
import DescriptionSection from "./DescriptionSection";
import communities from "@/app/communities/community.json";
import { notFound } from "next/dist/client/components/navigation";
import { Community, Event as IEvent } from "@/types";
import { Calendar, Clock, MapPin } from "lucide-react";

export default async function EventDetails({
  params,
}: {
  params: Promise<{
    city: keyof typeof communities;
    slug: keyof Community["events"];
  }>;
}) {
  const { city, slug } = await params;

  const community = communities[city];

  if (!community) return notFound();

  const event = community.events?.[slug] as IEvent;

  if (!event) return notFound();

  return (
    <div className="my-20">
      <Hero title="Events" />
      <section className="py-5!">
        <div className="md:flex gap-10 space-y-5 justify-between">
          <div className="flex-1">
            <div>
              <SectionBadge align="left" text="Events" />
            </div>
            <p className="text-3xl font-bold">{event.title}</p>

            <div>
              <div className="mt-4 text-sm 0">
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  {event.time}
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {event.date}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  {event?.location}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-2">
            <div className="mb-4 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
              <Image
                src={event.image!}
                alt="Event Image"
                className="h-full w-full object-cover shadow border"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      <DescriptionSection text={event?.description} />
    </div>
  );
}
