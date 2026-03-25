import Image from 'next/image'

export default function ClientLogos() {
  const clients = [
    { name: 'Apple', logo: '/images/clients/apple-logo.png' },
    { name: 'Amazon', logo: '/images/clients/amazon-logo.png' },
    { name: 'Google', logo: '/images/clients/google-logo.png' },
    { name: 'Microsoft', logo: '/images/clients/microsoft-logo.png' },
    { name: 'Walmart', logo: '/images/clients/walmart-logo.png' },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Our Clients
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="max-w-[120px] max-h-[60px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}