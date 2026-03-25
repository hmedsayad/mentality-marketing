import Image from 'next/image'

export default function ServicesSection() {
  const services = [
    {
      title: "Feeling lost ?",
      description: "I'm feeling lost and want to make sure I'm getting the best results possible.",
      image: "/images/services/feeling-lost.jpg"
    },
    {
      title: "Need Quality ?",
      description: "We need quality content that gets results without all the work.",
      image: "/images/services/need-quality.jpg"
    },
    {
      title: "Feeling Late ?",
      description: "I want to take me and my team to the next level today!",
      image: "/images/services/feeling-late.jpg"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-orange-500 mb-16 text-center">
          SERVICES
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}