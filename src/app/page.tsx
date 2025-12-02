import Navbar from "@/components/Navbar";

export default function LinktreeLandingPage() {
  return (
    <div className="font-bold min-h-screen bg-black">
      {/* Navigation Bar */}

      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              A link in bio built for you.
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
              Join 70M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4">
              <div className="flex-1 w-full sm:w-auto">
                <div className="bg-white rounded-lg px-4 py-3 md:py-4 text-gray-500 text-base md:text-lg shadow-md">
                  linktr.ee/
                </div>
              </div>
              <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap border border-white cursor-pointer">
                Get started for free
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative bg-linear-to-br from-lime-200 to-lime-300 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
              {/* Grid Pattern Background */}
              <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-green-400"></div>
                  ))}
                </div>
              </div>

              {/* Mock Phone/Content Preview */}
              <div className="relative z-10 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                {/* Couple Image Placeholder */}
                <div className="absolute bottom-0 left-1/4 w-32 h-48 md:w-40 md:h-56 bg-linear-to-b from-green-600 to-green-700 rounded-2xl transform -rotate-6 opacity-60"></div>
                <div className="absolute bottom-0 right-1/4 w-32 h-48 md:w-40 md:h-56 bg-linear-to-b from-yellow-600 to-yellow-700 rounded-2xl transform rotate-6 opacity-60"></div>

                {/* Phone Mockup */}
                <div className="relative bg-white rounded-3xl p-4 shadow-2xl w-48 md:w-56 transform hover:scale-105 transition-transform duration-300">
                  <div className="space-y-3">
                    {/* Profile Header */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-400 rounded-full mx-auto mb-2"></div>
                      <div className="text-xs font-bold">pistakio</div>
                      <div className="flex justify-center gap-2 mt-2">
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-2">
                      <div className="bg-orange-200 rounded-xl p-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-400 rounded"></div>
                        <div className="text-xs font-medium">
                          Hazelnut Spread
                        </div>
                      </div>
                      <div className="bg-orange-200 rounded-xl p-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-400 rounded"></div>
                        <div className="text-xs font-medium">
                          Smoked Pistachios
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Product Card */}
                <div className="absolute top-4 right-4 bg-white rounded-2xl p-3 shadow-xl w-24 md:w-28 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-20 bg-gray-800 rounded-lg mb-2"></div>
                  <div className="text-xs font-bold text-center">pistakio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
