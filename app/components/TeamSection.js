import Image from 'next/image'

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Mark Stewart",
      role: "Marketing Director",
      image: "/images/team/mark-stewart.jpg",
      socials: {
        facebook: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Taylor Smith",
      role: "Creative Manager", 
      image: "/images/team/taylor-smith.jpg",
      socials: {
        facebook: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Peter Davies",
      role: "Senior Project Developer",
      image: "/images/team/peter-davies.jpg", 
      socials: {
        facebook: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Danny Cox",
      role: "Art Director",
      image: "/images/team/danny-cox.jpg",
      socials: {
        facebook: "#",
        linkedin: "#", 
        instagram: "#"
      }
    }
  ]

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 opacity-10">
        <div className="w-64 h-64 rounded-full border-4 border-orange-500"></div>
      </div>
      <div className="absolute right-32 top-32 opacity-5">
        <div className="w-32 h-32 rounded-full border-4 border-orange-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-orange-500 mb-16">
          Meet our team
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {member.role}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <a 
                      href={member.socials.facebook}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      <span className="text-sm">f</span>
                    </a>
                    <a 
                      href={member.socials.linkedin}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <span className="text-sm">in</span>
                    </a>
                    <a 
                      href={member.socials.instagram}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors"
                    >
                      <span className="text-sm">ig</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}