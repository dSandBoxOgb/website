import SectionBadge from "@/components/common/section_badge"
import { Section } from "lucide-react"

export default function GlobalTeam() {
  const teamMembers = [
    { name: "Thelma Opurum", role: "Founder", image: '/Ellipse 1.png' },
    { name: "Daniel Onaolapo", role: "Lead Creative Director", image: '/Ellipse 1.png' },
    { name: "Kelvin Ajayi", role: "Lead Developer", image: '/Ellipse 1.png' },
    { name: "El-Ameen Falana", role: "Community Lead", image: '/Ellipse 1.png' },
    { name: "Blessing Bamidele", role: "Operations Lead", image: '/Ellipse 1.png' },
     { name: "Blessing Bamidele", role: "Operations Lead", image: '/Ellipse 1.png' },
  ]

  return (
    // Section: Dark background and white text
    <section className="py-20 bg-[#111111] text-white">
      <div className="container mx-auto px-4">
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center gap-3">
          
            <SectionBadge align="left"/>
            </div>
          </div>
        <h2 className="subtitle mb-8 text-left">Our Global Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
          
            <div key={index} className="bg-black-900 rounded-lg border ">
              <div className="flex items-center justify-center pt-6">
                <div className="h-28 w-28 rounded-full bg-[#FF8C00] overflow-hidden shadow-md">
                  <img
                    src={member.image ?? '/team-placeholder.jpg'}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

