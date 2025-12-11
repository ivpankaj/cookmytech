import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About Cookmytech | Leading Software & AI Solutions Company",
  description:
    "Cookmytech was founded by Pankaj Verma in 2025 to build world-class digital products including websites, AI tools, SaaS solutions and cloud-powered systems.",
  keywords: [
    "about cookmytech",
    "pankaj verma founder",
    "software company story",
    "Noida tech company",
    "AI startup India",
  ],
};


export default function AboutPage() {
  return (
    <div className="font-bold min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building the Future of Technology
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-xl">
              Cookmytech was founded in 2025 by{" "}
              <span className="text-lime-400 font-semibold">Pankaj Verma</span>,
              a passionate software developer with a vision to simplify and
              innovate the digital world.  
              Today, Cookmytech powers an ecosystem of AI tools, SaaS products,
              web platforms and digital services built for startups, creators,
              businesses and enterprises worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 shadow-lg">
                Know More About Founder
              </button>
              <button className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900">
                Visit LinkedIn
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-purple-300"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center min-h-[420px]">
                <div className="absolute top-8 left-8 w-28 h-40 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-2xl transform -rotate-12 opacity-70"></div>
                <div className="absolute bottom-8 right-8 w-28 h-40 bg-gradient-to-b from-blue-400 to-purple-500 rounded-2xl transform rotate-12 opacity-70"></div>

                <div className="relative bg-white rounded-3xl p-6 shadow-2xl w-64 transform hover:scale-105 transition">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto"></div>
                    <div className="text-lg font-bold text-black">About Cookmytech</div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="bg-purple-100 rounded-xl p-3">
                      <p className="text-sm font-medium text-black">Software Solutions</p>
                    </div>
                    <div className="bg-pink-100 rounded-xl p-3">
                      <p className="text-sm font-medium text-black">AI Tools & SaaS Products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* STATS SECTION */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="text-center">
            <div className="text-5xl font-bold">50K+</div>
            <div className="text-gray-500 text-lg">Active Users</div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold">1M+</div>
            <div className="text-gray-500 text-lg">Monthly Impressions</div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold">20+</div>
            <div className="text-gray-500 text-lg">Countries Served</div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold">2025</div>
            <div className="text-gray-500 text-lg">Founded</div>
          </div>

        </div>
      </div>

      {/* MISSION SECTION */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE SIDE */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-blue-300"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex justify-center min-h-[380px]">
                <div className="relative bg-white p-6 rounded-3xl shadow-2xl w-60">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 w-3/4 rounded"></div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-white rounded-xl p-3 shadow-xl w-24 transform -rotate-12">
                  <div className="w-full h-16 bg-cyan-400 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-5xl font-bold">Our Mission</h2>

            <p className="text-lg md:text-xl text-gray-400">
              Our mission is to build meaningful, scalable and intelligent
              digital solutions that help individuals, creators and businesses
              grow.  
              Whether it’s AI automation, software systems, SaaS platforms or 
              custom applications — we make technology simple, powerful and accessible.
            </p>

            <div className="space-y-6 pt-4">

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-400">We build future-ready solutions that evolve with the industry.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Scalability</h3>
                  <p className="text-gray-400">Our platforms are designed to grow as your business grows.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* VALUES SECTION */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-24">
        <h2 className="text-center text-5xl font-bold mb-12">Our Core Values</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Integrity",
              description: "We operate with transparency, honesty and trust.",
              color: "from-indigo-400 to-purple-500",
            },
            {
              title: "Innovation",
              description: "We constantly explore new technologies and solutions.",
              color: "from-blue-400 to-cyan-500",
            },
            {
              title: "Quality",
              description: "We deliver excellence in every detail.",
              color: "from-green-400 to-emerald-500",
            },
            {
              title: "Customer First",
              description: "Your success is our priority in everything we build.",
              color: "from-orange-400 to-red-500",
            },
            {
              title: "Inclusivity",
              description: "We welcome diversity and respect every voice.",
              color: "from-yellow-400 to-orange-500",
            },
            {
              title: "Growth",
              description: "We believe learning and scaling never stop.",
              color: "from-pink-400 to-red-400",
            }
          ].map((value, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl p-8 hover:scale-105 transition duration-300"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl mb-4`}
              ></div>
              <h3 className="text-3xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-400 text-lg">{value.description}</p>
            </div>
          ))}

        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">
            <h2 className="text-5xl font-bold">Built by passionate engineers & creators</h2>

            <p className="text-lg md:text-xl text-gray-400">
              Cookmytech is driven by a strong and diverse team working across 
              engineering, product design, AI, marketing and strategy.  
              Together, we build meaningful products that make technology more accessible.
            </p>

            <button className="bg-white text-black px-10 py-4 rounded-full hover:bg-gray-200 shadow-lg">
              View Careers
            </button>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-red-300"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-4 min-h-[380px]">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-4 hover:scale-110 transition"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl"></div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* CTA SECTION */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-24">
        <div className="bg-gradient-to-br from-lime-200 to-lime-300 rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-green-400"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-6xl font-bold text-black">Ready to build with us?</h2>

            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Whether you're launching a startup, creating a product or building at scale —
              Cookmytech has the solutions to bring your ideas to life.
            </p>

            <button className="bg-black text-white px-10 py-4 rounded-full hover:bg-gray-900 shadow-lg">
              Get Started
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
