"use client";
import SectionBadge from "@/components/common/section_badge";
import { Button } from "@/components/ui/button";
import { Event } from "@/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function CommunityHighlights({ events }: { events: Event[] }) {
  const { slug } = useParams();
  return (
    <section className="py-20">
      <div className="mb-12 text-center">
        <SectionBadge text="Events" />

        <h2 className="mx-auto max-w-4xl text-4xl font-extrabold  md:text-5xl">
          From Vision To Digital Reality, Catch Up With Our Events
        </h2>
      </div>

      <div className="max-w-9xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events?.map((event, index) => (
          <div
            key={index}
            className={`rounded-xl border  p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            {/* Image Container */}
            <div className="mb-4 h-40 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
              <Image
                src={event.image!}
                alt={event.title}
                className="h-full w-full object-cover shadow border"
                width={400}
                height={300}
              />
            </div>

            {/* Content */}
            <h3 className={`mb-2 text-lg font-bold`}>{event.title}</h3>
            <p className="text-sm leading-relaxed ">{event.description}</p>
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
            <Button asChild className="mt-4 w-full">
              <a
                href={`/events/${slug}/${event.slug}` || "#"}
                aria-label={`More info about ${event.title}`}
              >
                More Info
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
