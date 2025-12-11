import Navbar from "@/components/Navbar";

export const metadata = {
  title:
    "Cookmytech | Software Solutions, AI Tools & Website Development in Noida",
  description:
    "Cookmytech is a leading software solutions company in Noida offering website development, AI tools, SaaS platforms, branding, research tools, and digital transformation services.",
  keywords: [
    "software company in Noida",
    "website development Noida",
    "AI tools India",
    "SaaS development",
    "custom software solutions",
    "Cookmytech",
    "digital services India",
  ],
};

export default function LandingPage() {
  return (
    <div className="font-bold min-h-screen bg-black">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-3xl lg:text-3xl xl:text-5xl font-extrabold text-white leading-tight">
              Transforming Your Ideas
              <span className="block text-lime-400">
                Into Powerful Software
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-xl">
              Cookmytech is a modern software solutions company based in Noida,
              delivering high-quality products including AI tools, SaaS
              platforms, custom websites, automation systems and digital
              services. A parent company powering brands like Cookmypapers,
              CookmyAI, CookmyWebsite and CookmyMedia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4">
              <button className="bg-white rounded-lg px-6 py-3 md:px-8 md:py-4 text-gray-900 text-base md:text-lg shadow-md cursor-pointer font-semibold hover:bg-gray-200 transition">
                Explore Our Products
              </button>

              <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap border border-white cursor-pointer">
                Get Started for Free
              </button>
            </div>
          </div>

          {/* Right Content - Tech Illustration */}
          <div className="relative">
            <div className="relative bg-linear-to-br from-lime-200 to-lime-300 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-green-400"></div>
                  ))}
                </div>
              </div>

              {/* Modern Tech Mockup */}
              <div className="relative z-10 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                {/* Floating Cards */}
                <div className="absolute bottom-0 left-1/4 w-32 h-48 md:w-40 md:h-56 bg-linear-to-b from-green-600 to-green-700 rounded-2xl transform -rotate-6 opacity-60" />
                <div className="absolute bottom-0 right-1/4 w-32 h-48 md:w-40 md:h-56 bg-linear-to-b from-yellow-600 to-yellow-700 rounded-2xl transform rotate-6 opacity-60" />

                {/* Product Mockup */}
                <div className="relative bg-white rounded-3xl p-4 shadow-2xl w-48 md:w-56 transform hover:scale-105 transition-transform duration-300">
                  <div className="space-y-3">
                    {/* Profile Header */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-lime-400 rounded-full mx-auto mb-2"></div>
                      <div className="text-xs font-bold">Cookmytech</div>
                      <div className="flex justify-center gap-2 mt-2">
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>

                    {/* Product Cards */}
                    <div className="space-y-2">
                      <div className="bg-lime-100 rounded-xl p-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-lime-400 rounded"></div>
                        <div className="text-xs font-medium">
                          CookmyAI – AI Solutions
                        </div>
                      </div>

                      <div className="bg-lime-100 rounded-xl p-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-lime-400 rounded"></div>
                        <div className="text-xs font-medium">
                          CookmyWebsite – Website Builder
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extra Floating Card */}
                <div className="absolute top-4 right-4 bg-white rounded-2xl p-3 shadow-xl w-24 md:w-28 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-20 bg-gray-800 rounded-lg mb-2"></div>
                  <div className="text-xs font-bold text-center">
                    Cookmypapers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
