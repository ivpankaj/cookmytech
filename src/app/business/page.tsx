import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

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
      description:
        "We craft stunning, responsive websites that convert visitors into customers. From sleek landing pages to complex web applications, we cook up the perfect digital solution for your business.",

      features: [
        "Custom Design",
        "SEO Optimized",
        "Mobile First",
        "Fast Loading",
      ],
      image: "/cookmywebsite.png",
      link: "https://website.cookmytech.site",
    },
    {
      name: "cookmy-ai",
      tagline: "Intelligence served fresh",
      description:
        "Harness the power of artificial intelligence for your business. We develop custom AI solutions, chatbots, automation tools, and machine learning models tailored to your specific needs.",

      features: [
        "AI Integration",
        "Smart Automation",
        "Data Analysis",
        "Custom Models",
      ],
      image: "/cookmyai.png",
      link: "https://ai.cookmytech.site",
    },
    {
      name: "cookmypapers",
      tagline: "Documentation made delicious",
      description:
        "Professional document creation and management solutions. From business proposals to technical documentation, we help you create, organize, and manage your paperwork efficiently.",

      features: [
        "Document Design",
        "Template Creation",
        "Digital Filing",
        "Brand Consistency",
      ],
      image: "/cookmypapers.png",
      link: "https://study.cookmytech.site",
    },
  ];

  return (
    <div className="font-sans min-h-screen bg-black text-white">
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
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/business.svg"
              alt="Cookmytech software solutions illustration"
              width={500}
              height={500}
              className="w-full max-w-md lg:max-w-lg"
            />
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
      </div>

      {businesses.map((business, index) => (
        <div
          key={index}
          className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16"
        >
          <div
            className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              index % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Content */}
            <div
              className={`space-y-6 md:space-y-8 ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}
            >
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
                    <div className="text-sm md:text-base text-white">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>

              <Link href={business.link} target="_blank">
                <button className="bg-white hover:bg-gray-100 text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg cursor-pointer mt-4">
                  Learn more
                </button>
              </Link>
            </div>

            {/* Logo Visual */}
            <div
              className={`flex justify-center ${
                index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
              }`}
            >
              <div className="relative bg-gray-900 rounded-2xl p-6 max-w-xs md:max-w-sm shadow-xl border border-gray-800">
                <Image
                  src={business.image}
                  alt={`${business.name} logo`}
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain"
                />
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
              description:
                "We listen to your needs and understand your business goals.",
              color: "from-blue-400 to-cyan-500",
            },
            {
              step: "02",
              title: "Strategy",
              description:
                "We craft a customized plan tailored to your objectives.",
              color: "from-purple-400 to-pink-500",
            },
            {
              step: "03",
              title: "Development",
              description:
                "We build your solution with precision and attention to detail.",
              color: "from-orange-400 to-red-500",
            },
            {
              step: "04",
              title: "Launch",
              description:
                "We deliver your project and provide ongoing support.",
              color: "from-green-400 to-emerald-500",
            },
          ].map((process, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl p-6 md:p-8 hover:scale-105 transition-transform duration-300 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${process.color} opacity-20 rounded-bl-full`}
              ></div>
              <div className="relative z-10">
                <div
                  className={`text-5xl md:text-6xl font-bold bg-gradient-to-br ${process.color} bg-clip-text text-transparent mb-4`}
                >
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
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  500+
                </div>
                <div className="text-base md:text-lg text-white">
                  Projects Completed
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  250+
                </div>
                <div className="text-base md:text-lg text-white">
                  Happy Clients
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  98%
                </div>
                <div className="text-base md:text-lg text-white">
                  Satisfaction Rate
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  24/7
                </div>
                <div className="text-base md:text-lg text-white">
                  Support Available
                </div>
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
              Let's discuss your project and create a digital solution that
              helps your business thrive. Get a free consultation today.
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
                  <div className="text-lg md:text-xl font-bold text-white">
                    Client Name
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    Company Name
                  </div>
                </div>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                "Amazing work! They delivered exactly what we needed and
                exceeded our expectations. Highly recommend their services."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-yellow-400 text-xl">
                    ★
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

 
    </div>
  );
}
