export default function ComparisonSection() {
  const withoutItems = [
    "Our Marketing is all over the place",
    "Nobody even knows we exist",
    "Wasting time and money",
    "There's just too much to do",
    "I don't even know where to start"
  ]

  const withItems = [
    "Laser focused plan",
    "Brand Awareness Boom",
    "Minimum spend, Maximum results",
    "Free Up your Time for What Matters Most",
    "Marketing experts that will guide you every step"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Without Mentality Marketing */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Without Mentality Marketing !
            </h3>
            <div className="space-y-4">
              {withoutItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* With Mentality Marketing */}
          <div className="bg-[#0d3d54] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-orange-500">With</span> Mentality Marketing !
            </h3>
            <div className="space-y-4">
              {withItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}