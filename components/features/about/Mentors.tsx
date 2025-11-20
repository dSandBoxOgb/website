

import SectionBadge from "@/components/common/section_badge"
import Image from "next/image"

export default function Mentors() {
  const mentors = [
    { name: "Moshood Oshindele", role: "Lead Developer", image: '/Ellipse 1.png' },
    { name: "Oluwasseun Temidayo", role: "Lead Developer", image: '/Ellipse 1.png' },
    { name: "Oluwatobi Awe", role: "Lead Developer", image: '/Ellipse 1.png' },
    { name: "Moshood Oshindele", role: "Lead Development", image: '/Ellipse 1.png' },
    { name: "Oluwasseun Temidayo", role: "Lead Development", image: '/Ellipse 1.png' },
    { name: "Oluwatobi Awe", role: "Lead Development", image: '/Ellipse 1.png' },
  ]

  return (
    <section className="py-20 bg-[#111111] text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-left mb-12">
            <SectionBadge align="center" />
            <h2 className="subtitle mb-8 text-left">Our Mentors</h2>
          </div>
          
          {/* Mentors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div 
                key={index} 
                className="bg-transparent rounded-lg p-6 text-center"
              >
                {/* Circular Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700 hover:border-orange-500 transition-colors duration-300">
                    <Image
                      src={mentor.image || '/team-placeholder.jpg'}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                      width={128}
                      height={128}
                    />
                  </div>
                </div>

                {/* Name and Role */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white mb-2">{mentor.name}</h3>
                  <p className="text-gray-400 text-lg font-medium">{mentor.role}</p>
                </div>

                {/* Optional: Social links or additional info can go here */}
                <div className="mt-4 flex justify-center space-x-4">
                  {/* Add social icons if needed */}
                  {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">...</svg>
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}