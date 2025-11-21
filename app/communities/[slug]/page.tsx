import communities from "@/app/communities/community.json";
import SectionBadge from "@/components/common/section_badge";
import GlobalTeam from "@/components/features/about/GlobalTeam";
import Image from "next/image";
import CommunityHighlights from "./CommunityHighlights";
import { Button } from "@/components/ui/button";
import Hero from "@/components/common/Hero";

export default async function CommunityPreview({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const community = communities.find((c) => c.slug === slug);
    return (
        <>
            <Hero title={`${community?.name} Community`} />
            <section className="">
                <div className="mx-auto max-w-6xl">
                    {/* Small section tag */}
                    <SectionBadge align="left" />
                    {/* Two-column: text (left) and visual (right) */}
                    <div className="grid grid-cols-1 items-center md:gap-20 md:grid-cols-3">
                        {/* Left: Text content */}
                        <div className="col-span-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
                            <h1 className="text-4xl font-bold md:text-5xl">
                                {community?.name}
                            </h1>
                            <div
                                dangerouslySetInnerHTML={{ __html: community?.content || "" }}
                            />


                            <Button asChild>
                                <a href="#">
                                    Join {community?.name} Community
                                </a>
                            </Button>
                        </div>

                        {/* Right: Visual image */}
                        <div className="flex w-full mt-10 justify-center md:justify-end">
                            <Image
                                src={community?.full_image || ""}
                                alt={`${community?.name} workspace`}
                                width={400}
                                height={300}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <GlobalTeam />

            {/* REPLACED CTA Section with Community Highlights Cards */}
            <CommunityHighlights events={community?.events || []} />
        </>
    );
}
