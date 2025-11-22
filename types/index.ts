export type ActionResult = { error?: string; success?: string };

export interface Event {
  slug: string;
  image?: string;
  title: string;
  description?: string;
  time?: string;
  date?: string;
  location?: string;
}

export type EventsMap = Record<string, Event>;

export interface Community {
  slug: string;
  name: string;
  description?: string;
  content?: string;
  image?: string;
  full_image?: string;
  comingSoon?: boolean;
  events?: EventsMap;
}

export type CommunitiesMap = Record<string, Community>;