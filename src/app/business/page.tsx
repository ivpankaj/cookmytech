import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Our Services | Software Development, AI, Websites, Cloud & Media",
  description:
    "Explore Cookmytech services including website development, SaaS creation, AI automation, cloud deployment, mobile apps, branding, research and media solutions.",
  keywords: [
    "software development services",
    "AI development India",
    "website development Noida",
    "cloud deployment service",
    "SaaS product development",
    "branding and media",
  ],
};


export default function BusinessPage() {
  const businesses = [
    {
      name: "cookmywebsite",
      tagline: "Your digital recipe for success",
      description: "We craft stunning, responsive websites that convert visitors into customers. From sleek landing pages to complex web applications, we cook up the perfect digital solution for your business.",
      color: "from-orange-400 to-red-500",
      icon: "🌐",
      features: ["Custom Design", "SEO Optimized", "Mobile First", "Fast Loading"]
    },
    {
      name: "cookmy-ai",
      tagline: "Intelligence served fresh",
      description: "Harness the power of artificial intelligence for your business. We develop custom AI solutions, chatbots, automation tools, and machine learning models tailored to your specific needs.",
      color: "from-purple-400 to-pink-500",
      icon: "🤖",
      features: ["AI Integration", "Smart Automation", "Data Analysis", "Custom Models"]
    },
    {
      name: "cookmypapers",
      tagline: "Documentation made delicious",
      description: "Professional document creation and management solutions. From business proposals to technical documentation, we help you create, organize, and manage your paperwork efficiently.",
      color: "from-blue-400 to-cyan-500",
      icon: "📄",
      features: ["Document Design", "Template Creation", "Digital Filing", "Brand Consistency"]
    },
    {
      name: "cookmymedia",
      tagline: "Content that captivates",
      description: "Full-service media production and content creation. We produce engaging videos, graphics, social media content, and marketing materials that tell your brand story effectively.",
      color: "from-green-400 to-emerald-500",
      icon: "🎬",
      features: ["Video Production", "Graphic Design", "Social Content", "Brand Strategy"]
    },
    {
      name: "cookmyapp",
      tagline: "Mobile solutions on demand",
      description: "Native and cross-platform mobile applications that users love. We build intuitive, powerful apps for iOS and Android that drive engagement and grow your business.",
      color: "from-yellow-400 to-orange-500",
      icon: "📱",
      features: ["iOS & Android", "User Experience", "App Store Launch", "Maintenance"]
    },
    {
      name: "cookmystore",
      tagline: "E-commerce excellence",
      description: "Complete e-commerce solutions from store setup to optimization. We build online stores that not only look great but convert browsers into buyers with seamless shopping experiences.",
      color: "from-indigo-400 to-purple-500",
      icon: "🛒",
      features: ["Payment Integration", "Inventory Management", "Analytics", "Marketing Tools"]
    }
  ];

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
              Cook your business to perfection.
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
              From websites to AI solutions, we're your one-stop kitchen for all
              digital needs. We cook up innovative solutions that help your
              business grow and thrive in the digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap cursor-pointer">
                Start your project
              </button>
              <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap border border-white cursor-pointer">
                View portfolio
              </button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-orange-300"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                <div className="absolute top-8 left-8 w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl transform -rotate-12 opacity-80 flex items-center justify-center text-3xl md:text-4xl">
                  🌐
                </div>
                <div className="absolute bottom-8 right-8 w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl transform rotate-12 opacity-80 flex items-center justify-center text-3xl md:text-4xl">
                  🤖
                </div>
                <div className="absolute top-1/4 right-12 w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl transform rotate-6 opacity-80 flex items-center justify-center text-2xl md:text-3xl">
                  📱
                </div>

                <div className="relative bg-white rounded-3xl p-6 shadow-2xl w-56 md:w-64 transform hover:scale-105 transition-transform duration-300">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🍳</div>
                      <div className="text-sm font-bold text-black">Cook My Business</div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-orange-100 rounded-xl p-3">
                        <div className="text-xs font-medium text-black">Website Design</div>
                      </div>
                      <div className="bg-red-100 rounded-xl p-3">
                        <div className="text-xs font-medium text-black">AI Solutions</div>
                      </div>
                      <div className="bg-yellow-100 rounded-xl p-3">
                        <div className="text-xs font-medium text-black">Media Production</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our recipe for success.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Six specialized kitchens, one mission: cooking up digital excellence
            for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl md:rounded-3xl p-4 md:p-6 hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="text-3xl md:text-4xl mb-3">{business.icon}</div>
              <div className="text-sm md:text-base font-bold text-white break-words">
                {business.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Business Sections */}
      {businesses.map((business, index) => (
        <div key={index} className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
            {/* Content */}
            <div className={`space-y-6 md:space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="inline-block">
                <div className={`text-5xl md:text-6xl mb-4`}>{business.icon}</div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {business.name}
              </h2>

              <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 leading-relaxed italic">
                {business.tagline}
              </p>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                {business.description}
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4">
                {business.features.map((feature, fIndex) => (
                  <div
                    key={fIndex}
                    className="bg-gray-900 rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center gap-2 md:gap-3"
                  >
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <div className="text-sm md:text-base text-white">{feature}</div>
                  </div>
                ))}
              </div>

              <button className="bg-white hover:bg-gray-100 text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg cursor-pointer mt-4">
                Learn more
              </button>
            </div>

            {/* Visual */}
            <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className={`relative bg-gradient-to-br ${business.color} rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-12 gap-2 h-full">
                    {[...Array(144)].map((_, i) => (
                      <div key={i} className="border border-white"></div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-center min-h-[350px] md:min-h-[450px]">
                  {/* Different layouts for each business */}
                  {index % 3 === 0 && (
                    <>
                      <div className="relative bg-white rounded-3xl p-6 shadow-2xl w-52 md:w-60 transform hover:scale-105 transition-transform duration-300">
                        <div className="space-y-4">
                          <div className={`w-full h-32 bg-gradient-to-br ${business.color} rounded-2xl flex items-center justify-center text-5xl`}>
                            {business.icon}
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-200 rounded"></div>
                            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-xl w-24 md:w-28 transform rotate-12">
                        <div className={`w-full h-20 bg-gradient-to-br ${business.color} rounded-lg flex items-center justify-center text-3xl`}>
                          {business.icon}
                        </div>
                      </div>
                    </>
                  )}

                  {index % 3 === 1 && (
                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-2xl p-6 hover:scale-110 transition-transform duration-300"
                        >
                          <div className={`w-full h-24 bg-gradient-to-br ${business.color} rounded-xl flex items-center justify-center text-4xl`}>
                            {business.icon}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {index % 3 === 2 && (
                    <>
                      <div className="absolute top-8 left-8 w-32 h-40 md:w-40 md:h-48 bg-white rounded-2xl transform -rotate-12 shadow-2xl p-4">
                        <div className={`w-full h-full bg-gradient-to-br ${business.color} rounded-xl flex items-center justify-center text-5xl`}>
                          {business.icon}
                        </div>
                      </div>
                      <div className="absolute bottom-8 right-8 w-32 h-40 md:w-40 md:h-48 bg-white rounded-2xl transform rotate-12 shadow-2xl p-4">
                        <div className={`w-full h-full bg-gradient-to-br ${business.color} rounded-xl flex items-center justify-center text-5xl`}>
                          {business.icon}
                        </div>
                      </div>
                      <div className="relative bg-white rounded-3xl p-6 shadow-2xl w-48 md:w-56 z-10">
                        <div className={`w-full h-32 bg-gradient-to-br ${business.color} rounded-2xl flex items-center justify-center text-5xl mb-4`}>
                          {business.icon}
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-200 rounded"></div>
                          <div className="h-2 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Process Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our cooking process.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we follow a proven recipe that delivers
            exceptional results every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              step: "01",
              title: "Discovery",
              description: "We listen to your needs and understand your business goals.",
              color: "from-blue-400 to-cyan-500"
            },
            {
              step: "02",
              title: "Strategy",
              description: "We craft a customized plan tailored to your objectives.",
              color: "from-purple-400 to-pink-500"
            },
            {
              step: "03",
              title: "Development",
              description: "We build your solution with precision and attention to detail.",
              color: "from-orange-400 to-red-500"
            },
            {
              step: "04",
              title: "Launch",
              description: "We deliver your project and provide ongoing support.",
              color: "from-green-400 to-emerald-500"
            }
          ].map((process, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl p-6 md:p-8 hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${process.color} opacity-20 rounded-bl-full`}></div>
              <div className="relative z-10">
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${process.color} bg-clip-text text-transparent mb-4`}>
                  {process.step}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-purple-300"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Trusted by businesses worldwide.
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">500+</div>
                <div className="text-base md:text-lg text-white">Projects Completed</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">250+</div>
                <div className="text-base md:text-lg text-white">Happy Clients</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">98%</div>
                <div className="text-base md:text-lg text-white">Satisfaction Rate</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">24/7</div>
                <div className="text-base md:text-lg text-white">Support Available</div>
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
              Ready to cook something amazing?
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed">
              Let's discuss your project and create a digital solution that helps
              your business thrive. Get a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap cursor-pointer">
                Start your project
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap cursor-pointer border-2 border-black">
                Schedule a call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What our clients say.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses have to say
            about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl p-6 md:p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
                <div>
                  <div className="text-lg md:text-xl font-bold text-white">Client Name</div>
                  <div className="text-sm md:text-base text-gray-600">Company Name</div>
                </div>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                "Amazing work! They delivered exactly what we needed and exceeded
                our expectations. Highly recommend their services."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-yellow-400 text-xl">★</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 border-t border-gray-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              {businesses.slice(0, 4).map((business, index) => (
                <li key={index} className="hover:text-white transition cursor-pointer text-sm md:text-base">
                  {business.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">About Us</li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">Portfolio</li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">Careers</li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">Case Studies</li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">Documentation</li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">Pricing</li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">Get in Touch</li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">Support</li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">Partnerships</li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">Press</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-900">
          <div className="text-gray-600 text-sm md:text-base">
            © 2024 Cook My Business. All rights reserved.
          </div>
          <div className="flex gap-4">
            {[...Array(5)].map((_, i) => (
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