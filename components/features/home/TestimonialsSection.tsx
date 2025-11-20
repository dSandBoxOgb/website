import SectionBadge from "@/components/common/section_badge";
import Image from "next/image";

// components/features/home/TestimonialsSection.tsx
export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <SectionBadge />

          {/* Main Title */}
          <h2 className="subtitle">
            Testimonials From Our Communities Members
          </h2>

          <div className="relative">
            <div className="grid md:grid-cols-2 items-center justify-between gap-12 md:flex-row">
              {/* Left: Large Avatar with Orange Background */}
              <div className="flex justify-center">
                <div className="rounded-full bg-[#ff8c0009]">
                  <Image
                    src="/Group.png"
                    alt="Alexander Gibson"
                    className="h-full w-full object-cover"
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              {/* Right: Testimonial Content */}
              <div className="flex-1">
                {/* 6 Orange Stars */}
                <div className="mb-6 flex items-center">
                  {[1, 2, 3, 4, 5, 6].map((star) => (
                    <svg
                      key={star}
                      className="mr-1 h-6 w-6 text-[#FF8C00]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="mb-8 text-lg leading-relaxed">
                  &ldquo;Es ist ein lang erwiesener Fakt, dass ein Leser vom Text
                  abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt,
                  Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die
                  normale Anordnung von Buchstaben darstellt und somit nach
                  lesbarer Sprache aussieht.&ldquo;
                </blockquote>

                {/* Author Name */}
                <div className="mb-8 text-xl font-semibold text-white">
                  Alexander Gibson
                </div>
              </div>
            </div>
            {/* Navigation Arrows */}
            <div className="absolute right-12 bottom-12 flex space-x-4">
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 bg-transparent text-gray-400 transition-colors hover:border-gray-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8C00] text-white transition-colors hover:bg-[#E67E00]">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
