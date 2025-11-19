// "use client";
// import SectionBadge from "@/components/common/section_badge";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function WhoWeAre() {
//   const [activeSection, setActiveSection] = useState<
//     "mantra" | "mission" | "vision" | null
//   >(null);

//   const sections = {
//     mantra: {
//       title: "Our Mantra",
//       content: "Design! Connect!! Grow!!!",
//       icon: "/connect.png",
//     },
//     mission: {
//       title: "Mission Statement",
//       content:
//         "To empower and connect designers in Ogbomoso by creating a collaborative space for learning, experimentation, and professional growth through design-focused events, mentorship, and community building.",
//       icon: "/connect.png",
//     },
//     vision: {
//       title: "Vision Statement",
//       content:
//         "To establish Ogbomoso as a leading creative hub in Africa – where designers thrive, ideas flourish, and design from Ogbomoso shapes experiences across the world.",
//       icon: "/connect.png",
//     },
//   };

//   const [openKey, setOpenKey] = useState<keyof typeof sections | null>(null);

//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") setOpenKey(null);
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <section >
//       <div className="container mx-auto px-4">
//         <div className="mx-auto max-w-6xl">
//           <SectionBadge align="left" />
//           <h2 className="subtitle mb-8 text-left">Who we are</h2>

//           {/* Grid of cards similar to provided screenshot: 2 columns on md+, multiple rows */}
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//             {/* Render cards for each section. Duplicate first item if you want an even grid of 4. */}
//             {Object.keys(sections).concat(Object.keys(sections)[0]).map((key, idx) => {
//               // key may be 'mantra' | 'mission' | 'vision'
//               const sKey = key as keyof typeof sections;
//               const item = sections[sKey];
//               return (
//         <div
//           key={idx}
//           className="relative overflow-hidden rounded-3xl border border-gray-800 bg-black p-6 md:pr-44"
//         >
//                   <div className="mb-3 flex items-start gap-3">
//                     <img
//                       src={item.icon}
//                       alt={item.title}
//                       className="h-5 w-5 object-contain mt-1"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setOpenKey(sKey)}
//                       className="font-semibold text-left"
//                       aria-haspopup="dialog"
//                       aria-expanded={openKey === sKey}
//                     >
//                       {item.title}
//                     </button>
//                   </div>

//                   <p className="text-sm leading-relaxed text-gray-400">
//                     {item.content}
//                   </p>

//                   {/* Decorative orange block: float to the right of the text (vertically centered).
//                       Card has extra right padding on md+ so text doesn't overlap the block. */}
//                   <button
//                     type="button"
//                     onClick={() => setOpenKey(sKey)}
//                     className="absolute right-6 top-1/2 transform -translate-y-1/2 h-28 w-28 md:h-36 md:w-36 rounded-tl-2xl bg-[#FF8C00] shadow-lg transition-transform hover:scale-105 focus:scale-105"
//                     aria-label={`Open ${item.title}`}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//           {/* Modal: show larger visual when openKey is set */}
//           {openKey && (
//             <div
//               role="dialog"
//               aria-modal="true"
//               className="fixed inset-0 z-50 flex items-center justify-center"
//             >
//               {/* overlay */}
//               <div
//                 className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//                 onClick={() => setOpenKey(null)}
//               />

//               <div className="relative z-10 mx-4 w-full max-w-xl">
//                 <div className="transform-gpu rounded-2xl bg-transparent p-6 text-white transition duration-300 ease-out"
//                   style={{ willChange: "transform, opacity" }}>
//                   <div className="flex items-start justify-between">
//                     <h3 className="text-lg font-semibold">
//                       {sections[openKey].title}
//                     </h3>
//                     <button
//                       aria-label="Close"
//                       onClick={() => setOpenKey(null)}
//                       className="ml-4 rounded bg-white/5 px-3 py-1 text-sm"
//                     >
//                       Close
//                     </button>
//                   </div>

//                   <div className="mt-4 flex w-full items-center justify-center">
//                     {/* Prefer a large image if available; fallback to orange block */}
//                     <div className="rounded-2xl overflow-hidden">
//                       {/* Try loading a public image; if missing, show a styled orange panel */}
//                       {/* <Image
//                         src="/fff.png"
//                         alt={sections[openKey].title}
//                         width={600}
//                         height={400}
//                         className="object-cover"
//                       /> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import SectionBadge from "@/components/common/section_badge";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WhoWeAre() {
  const [activeSection, setActiveSection] = useState<
    "mantra" | "mission" | "vision" | null
  >(null);

  const sections = {
    mantra: {
      title: "Our Mantra",
      content: "Design! Connect!! Grow!!!",
      icon: "/connect.png",
      image: "/mantra-image.png", // Add your image paths
    },
    mission: {
      title: "Mission Statement",
      content:
        "To empower and connect designers in Ogbomoso by creating a collaborative space for learning, experimentation, and professional growth through design-focused events, mentorship, and community building.",
      icon: "/connect.png",
      image: "/mission-image.png",
    },
    vision: {
      title: "Vision Statement",
      content:
        "To establish Ogbomoso as a leading creative hub in Africa – where designers thrive, ideas flourish, and design from Ogbomoso shapes experiences across the world.",
      icon: "/connect.png",
      image: "/vision-image.png",
    },
  };

  const [openKey, setOpenKey] = useState<keyof typeof sections | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenKey(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleOpenModal = (key: keyof typeof sections) => {
    setOpenKey(key);
    setIsAnimating(true);
  };

  const handleCloseModal = () => {
    setIsAnimating(false);
    setTimeout(() => setOpenKey(null), 300); // Match the transition duration
  };

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <SectionBadge align="left" />
          <h2 className="subtitle mb-8 text-left">Who we are</h2>

          {/* Grid of cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {Object.keys(sections).concat(Object.keys(sections)[0]).map((key, idx) => {
              const sKey = key as keyof typeof sections;
              const item = sections[sKey];
              return (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-3xl border border-gray-800 bg-black p-6 min-h-[200px]"
                >
                  <div className="mb-3 flex items-start gap-3">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-5 w-5 object-contain mt-1"
                    />
                    <button
                      type="button"
                      onClick={() => handleOpenModal(sKey)}
                      className="font-semibold text-left hover:text-orange-400 transition-colors"
                      aria-haspopup="dialog"
                      aria-expanded={openKey === sKey}
                    >
                      {item.title}
                    </button>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-400 pr-28">
                    {item.content}
                  </p>

                  {/* Orange block positioned at bottom right */}
                  <button
                    type="button"
                    onClick={() => handleOpenModal(sKey)}
                    className="absolute right-6 bottom-6 h-20 w-20 rounded-tl-2xl bg-[#FF8C00] shadow-lg transition-transform hover:scale-105 focus:scale-105 flex items-center justify-center group"
                    aria-label={`Open ${item.title} image`}
                  >
                    <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      View
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Animated Modal */}
          {openKey && (
            <div
              role="dialog"
              aria-modal="true"
              className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
                isAnimating ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Overlay with fade animation */}
              <div
                className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
                  isAnimating ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleCloseModal}
              />

              {/* Modal content with scale animation */}
              <div 
                className={`relative z-10 w-full max-w-4xl max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 ${
                  isAnimating 
                    ? 'scale-100 opacity-100 translate-y-0' 
                    : 'scale-75 opacity-0 translate-y-10'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 bg-gray-900 border-b border-gray-800">
                  <h3 className="text-2xl font-bold text-white">
                    {sections[openKey].title}
                  </h3>
                  <button
                    aria-label="Close"
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Large Image Display */}
                <div className="relative w-full h-[500px] bg-linear-to-br from-[#FF8C00]/20 to-orange-600/20 flex items-center justify-center">
                  {/* Placeholder for your image - replace with actual Image component */}
                  <div className="text-center p-8">
                    <div className="text-8xl mb-6">🖼️</div>
                    <p className="text-2xl font-bold text-white mb-2">
                      {sections[openKey].title}
                    </p>
                    <p className="text-gray-300">
                      Large image would appear here
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                      Image: {sections[openKey].image}
                    </p>
                  </div>
                  
                  {/* Uncomment and use this when you have actual images */}
                  {/* 
                  <Image
                    src={sections[openKey].image}
                    alt={sections[openKey].title}
                    fill
                    className="object-cover"
                    priority
                  /> 
                  */}
                </div>

                {/* Content section */}
                <div className="p-6 bg-gray-900">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {sections[openKey].content}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}