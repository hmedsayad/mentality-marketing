import Image from 'next/image'

export default function ProcessSection() {
  const steps = [
    {
    number: "1",
    title: "Free Audit & Consult",
    description: "Blast off with a free consultation and marketing audit to identify your marketing gaps.",
    bgColor: "bg-[#0d3d54]"
    },
    {
      number: "2", 
      title: "Customized Plan",
      description: "We create a customized marketing plan tailored to your business goals and budget.",
      bgColor: "bg-orange-500"
    },
    {
      number: "3",
      title: "Take Flight & Succeed",
      description: "Watch your business soar with our proven marketing strategies and ongoing support.",
      bgColor: "bg-orange-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-orange-500 mb-4 text-center">
          Launch Your Marketing in 3 Steps!
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Steps */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 relative">
                  {/* Circle with number */}
                  <div className={`${step.bgColor} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 relative z-10 shadow-lg`}>
                    {step.number}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/process-meeting.jpg"
                alt="Business meeting consultation"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}