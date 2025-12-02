
import Navbar from "@/components/Navbar";

export default function BusinessPage() {
  return (
    <div className="font-bold min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              We build products that cook your success.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              From websites to AI, media, research papers and cloud — we build
              fast, modern and scalable digital solutions under the iconic
              “CookMy” umbrella.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-10 py-4 rounded-full font-semibold text-lg shadow-lg">
                Explore Services
              </button>
              <button className="w-full sm:w-auto border border-white hover:bg-gray-900 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg">
                Contact Us
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-orange-400 to-purple-500 rounded-3xl p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-orange-300"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center min-h-[400px]">
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl w-64 hover:scale-105 transition">
                  <div className="space-y-4">
                    <div className="w-full h-32 bg-gradient-to-br from-orange-500 to-purple-500 rounded-2xl"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-300 rounded"></div>
                      <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    </div>
                    <div className="text-center text-black font-medium">
                      CookMy Business Ecosystem
                    </div>
                  </div>
                </div>

                <div className="absolute -top-8 -left-8 w-28 h-40 bg-gradient-to-b from-orange-300 to-yellow-300 rounded-2xl transform -rotate-12 opacity-70"></div>
                <div className="absolute -bottom-8 -right-8 w-28 h-40 bg-gradient-to-b from-purple-500 to-blue-500 rounded-2xl transform rotate-12 opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Businesses Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
          Our Businesses
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "CookMyWebsite",
              desc: "We build high-speed, modern, SEO-optimized websites and web apps.",
              color: "from-purple-400 to-pink-500",
            },
            {
              name: "CookMy-AI",
              desc: "Custom AI tools, agents, automation and integrations crafted for your business.",
              color: "from-blue-400 to-cyan-500",
            },
            {
              name: "CookMyPapers",
              desc: "We write research papers, case studies and academic content with precision.",
              color: "from-orange-400 to-red-500",
            },
            {
              name: "CookMyMedia",
              desc: "We create media content, branding, video editing, and social media growth.",
              color: "from-green-400 to-emerald-500",
            },
            {
              name: "CookMyStore",
              desc: "Complete e-commerce store setup, branding, and automation in days.",
              color: "from-yellow-400 to-amber-500",
            },
            {
              name: "CookMyCloud",
              desc: "Hosting, deployment, CI/CD, containerization, and cloud optimization.",
              color: "from-indigo-500 to-purple-600",
            },
          ].map((biz, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-3xl p-8 hover:scale-105 hover:shadow-xl transition duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${biz.color} rounded-2xl mb-6`}
              ></div>
              <h3 className="text-3xl font-bold mb-4">{biz.name}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{biz.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              Why people trust CookMy?
            </h2>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
              We deliver fast, high-quality, modern and beautifully engineered
              solutions — powered by real engineering, real creativity and
              real results.
            </p>

            <div className="space-y-4">
              {[
                "Fast delivery with high performance",
                "Unique UI/UX + smooth animations",
                "Real engineering behind every product",
                "Affordable pricing with premium quality",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-white rounded-full"></div>
                  <p className="text-gray-600 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-blue-300"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex justify-center">
                <div className="bg-white rounded-3xl p-8 w-60 shadow-2xl">
                  <div className="w-full h-32 bg-blue-400 rounded-xl mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                  </div>
                  <div className="text-center text-black font-semibold mt-4">
                    High-Quality Engineering
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-24">
        <div className="bg-gradient-to-br from-lime-200 to-lime-300 rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="grid grid-cols-12 h-full gap-2">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-lime-400"></div>
              ))}
            </div>
          </div>

          <div className="relative text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-black">
              Let's cook something amazing.
            </h2>
            <p className="text-xl text-gray-700">
              Tell us your idea — and we build it into a product.
            </p>

            <button className="bg-black hover:bg-gray-900 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 border-t border-gray-800">
        <div className="text-center text-gray-600">
          © 2025 CookMy Group. All rights reserved.
        </div>
      </div>
    </div>
  );
}
