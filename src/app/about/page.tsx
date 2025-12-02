import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="font-bold min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              We're here to help you grow.
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
              Founded in 2016, Linktree has grown to become the world's leading
              link in bio solution, trusted by creators, entrepreneurs, and
              brands worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap cursor-pointer">
                Join our team
              </button>
              <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap border border-white cursor-pointer">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-purple-300"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                <div className="absolute top-8 left-8 w-24 h-32 md:w-32 md:h-40 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-2xl transform -rotate-12 opacity-70"></div>
                <div className="absolute bottom-8 right-8 w-24 h-32 md:w-32 md:h-40 bg-gradient-to-b from-blue-400 to-purple-500 rounded-2xl transform rotate-12 opacity-70"></div>

                <div className="relative bg-white rounded-3xl p-6 shadow-2xl w-56 md:w-64 transform hover:scale-105 transition-transform duration-300">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-3"></div>
                      <div className="text-sm font-bold text-black">About Us</div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-purple-100 rounded-xl p-3">
                        <div className="text-xs font-medium text-black">Our Mission</div>
                      </div>
                      <div className="bg-pink-100 rounded-xl p-3">
                        <div className="text-xs font-medium text-black">Our Values</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">70M+</div>
            <div className="text-base md:text-lg text-gray-600">Users worldwide</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">1B+</div>
            <div className="text-base md:text-lg text-gray-600">Monthly visits</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">195</div>
            <div className="text-base md:text-lg text-gray-600">Countries</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">2016</div>
            <div className="text-base md:text-lg text-gray-600">Founded</div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image First on Mobile, Second on Desktop */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-blue-300"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center min-h-[350px] md:min-h-[450px]">
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl w-52 md:w-60">
                  <div className="space-y-4">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-white rounded-xl p-3 shadow-xl w-20 md:w-24 transform -rotate-12">
                  <div className="w-full h-16 bg-cyan-400 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Our mission is simple.
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              We empower everyone from creators to entrepreneurs to make the
              most of their online presence. One link to connect your audience
              to all of your content.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Simplicity</h3>
                  <p className="text-base md:text-lg text-gray-600">
                    Making it easy to share everything you are in one place.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Growth</h3>
                  <p className="text-base md:text-lg text-gray-600">
                    Helping you grow your audience and achieve your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our values drive us forward.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and help us create the best
            experience for our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Creator First",
              description: "We put creators at the heart of everything we build.",
              color: "from-purple-400 to-pink-500"
            },
            {
              title: "Innovation",
              description: "We're always pushing boundaries and exploring new ideas.",
              color: "from-blue-400 to-cyan-500"
            },
            {
              title: "Community",
              description: "We believe in the power of connection and collaboration.",
              color: "from-green-400 to-emerald-500"
            },
            {
              title: "Transparency",
              description: "We're open and honest in all our communications.",
              color: "from-orange-400 to-red-500"
            },
            {
              title: "Inclusivity",
              description: "We celebrate diversity and welcome everyone.",
              color: "from-yellow-400 to-orange-500"
            },
            {
              title: "Excellence",
              description: "We strive for quality in every detail of our work.",
              color: "from-indigo-400 to-purple-500"
            }
          ].map((value, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl p-6 md:p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-4`}></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Built by a diverse team.
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              We're a global team of creators, designers, engineers, and
              thinkers united by a common goal: empowering people to share their
              passions with the world.
            </p>

            <button className="bg-white hover:bg-gray-100 text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg cursor-pointer">
              View open positions
            </button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-red-300"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-4 min-h-[350px] md:min-h-[450px]">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-4 hover:scale-110 transition-transform duration-300"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="bg-gradient-to-br from-lime-200 to-lime-300 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-green-400"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
              Ready to get started?
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed">
              Join millions of creators, entrepreneurs, and brands using
              Linktree to connect with their audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <div className="flex-1 w-full sm:max-w-xs">
                <div className="bg-white rounded-lg px-4 py-3 md:py-4 text-gray-500 text-base md:text-lg shadow-md">
                  linktr.ee/
                </div>
              </div>
              <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap cursor-pointer">
                Get started for free
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 border-t border-gray-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-white transition cursor-pointer">About</li>
              <li className="hover:text-white transition cursor-pointer">Careers</li>
              <li className="hover:text-white transition cursor-pointer">Press</li>
              <li className="hover:text-white transition cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Community</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-white transition cursor-pointer">Support</li>
              <li className="hover:text-white transition cursor-pointer">Creators</li>
              <li className="hover:text-white transition cursor-pointer">Partners</li>
              <li className="hover:text-white transition cursor-pointer">Events</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-white transition cursor-pointer">Help Center</li>
              <li className="hover:text-white transition cursor-pointer">Guides</li>
              <li className="hover:text-white transition cursor-pointer">API</li>
              <li className="hover:text-white transition cursor-pointer">Status</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-white transition cursor-pointer">Privacy</li>
              <li className="hover:text-white transition cursor-pointer">Terms</li>
              <li className="hover:text-white transition cursor-pointer">Cookies</li>
              <li className="hover:text-white transition cursor-pointer">Security</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-900">
          <div className="text-gray-600 text-sm md:text-base">
            © 2024 Linktree. All rights reserved.
          </div>
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-full transition cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}