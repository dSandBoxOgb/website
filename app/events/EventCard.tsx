import { Button } from "@/components/ui/button";
import { Event } from "@/types";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const EventCard = ({
  communityName,
  event,
}: {
  communityName: string;
  event: Event;
}) => {
  return (
    <div className="rounded-xl border  p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
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
          href={`/events/${communityName}/${event.slug}` || "#"}
          aria-label={`More info about ${event.title}`}
        >
          More Info
        </a>
      </Button>
    </div>
  );
};

export default EventCard;
