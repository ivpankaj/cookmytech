import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Support Cookmytech | Donate to Empower Future Innovations",
  description:
    "Support Cookmytech's mission to build AI tools, SaaS platforms, websites and global digital products. Your contribution helps innovation grow.",
  keywords: [
    "donate cookmytech",
    "support software development",
    "fund AI development India",
    "support startup Noida",
  ],
};


export default function DonatePage() {
  return (
    <div className="font-bold min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO SECTION */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Support the Mission.
              <span className="block text-lime-400">Empower Innovation.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              Cookmytech is built with passion, dedication and a mission to 
              create world-class software products for everyone.  
              Your contribution helps us innovate faster, build better tools, 
              support developers, and expand our digital ecosystem.
            </p>

            <button className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 shadow-lg">
              Become a Supporter
            </button>
          </div>

          {/* Right Visualization */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-lime-200 to-lime-400 rounded-3xl p-16 overflow-hidden">
              
              {/* Grid Overlay */}
              <div className="absolute inset-0 opacity-25">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-lime-500"></div>
                  ))}
                </div>
              </div>

              {/* Card */}
              <div className="relative z-10 flex justify-center min-h-[400px]">
                <div className="bg-white w-64 rounded-3xl p-6 shadow-2xl hover:scale-105 transition">
                  <div className="space-y-4">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl"></div>
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    <p className="text-center text-black font-medium mt-2">Support Cookmytech</p>
                  </div>
                </div>

                {/* Floating Boxes */}
                <div className="absolute -top-10 -left-10 w-28 h-40 bg-gradient-to-b from-green-400 to-lime-500 rounded-2xl transform -rotate-12 opacity-70"></div>
                <div className="absolute -bottom-10 -right-10 w-28 h-40 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-2xl transform rotate-12 opacity-70"></div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* DONATION OPTIONS */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Choose How You Want to Support Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {[
            {
              title: "₹199",
              desc: "A small contribution that helps us maintain and improve our ecosystem.",
              color: "from-purple-400 to-pink-500"
            },
            {
              title: "₹499",
              desc: "Support ongoing development, maintenance, and new features.",
              color: "from-blue-400 to-cyan-500"
            },
            {
              title: "₹999",
              desc: "Helps us upgrade servers, launch new tools and offer free resources.",
              color: "from-green-400 to-emerald-500"
            },
            {
              title: "₹1999",
              desc: "Become a premium supporter contributing directly to innovation.",
              color: "from-orange-400 to-red-500"
            },
            {
              title: "₹4999",
              desc: "Sponsor major product improvements or AI developments.",
              color: "from-yellow-400 to-orange-500"
            },
            {
              title: "Custom Amount",
              desc: "Choose your own amount and help us grow even faster.",
              color: "from-gray-400 to-gray-600"
            }
          ].map((plan, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-3xl p-8 hover:scale-105 transition duration-300 cursor-pointer shadow-xl"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${plan.color} rounded-2xl mb-4`}></div>
              <h3 className="text-3xl font-bold mb-2">{plan.title}</h3>
              <p className="text-gray-400">{plan.desc}</p>
            </div>
          ))}

        </div>
      </div>

      {/* PAYMENT METHODS */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Available Payment Options
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-25">
              <div className="grid grid-cols-12 gap-2 h-full">
                {[...Array(144)].map((_, i) => (
                  <div key={i} className="border border-pink-300"></div>
                ))}
              </div>
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl font-bold text-black">UPI</h3>
              <p className="text-black text-lg">Scan & Donate</p>
              <p className="text-black font-semibold text-xl mt-4">
                cookmytech@upi
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-25">
              <div className="grid grid-cols-12 gap-2 h-full">
                {[...Array(144)].map((_, i) => (
                  <div key={i} className="border border-blue-300"></div>
                ))}
              </div>
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl font-bold text-black">Bank Transfer</h3>
              <p className="text-black text-lg">Direct deposit to our account</p>
              <p className="text-black mt-4">
                **Name:** Cookmytech  
                <br />
                **IFSC:** XXXX0001234  
                <br />
                **ACC No:** 12345678910
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-lime-300 to-lime-400 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-25">
              <div className="grid grid-cols-12 gap-2 h-full">
                {[...Array(144)].map((_, i) => (
                  <div key={i} className="border border-lime-500"></div>
                ))}
              </div>
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl font-bold text-black">PayPal</h3>
              <p className="text-black text-lg">International Supporters</p>
              <p className="text-black font-semibold text-xl mt-4">
                paypal.me/cookmytech
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-24">
        <div className="bg-gradient-to-br from-lime-200 to-lime-300 p-16 rounded-3xl relative overflow-hidden">

          <div className="absolute inset-0 opacity-30">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-green-400"></div>
              ))}
            </div>
          </div>

          <div className="relative text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-black">
              Thank You For Supporting Innovation.
            </h2>
            <p className="text-xl text-black leading-relaxed">
              Every contribution — big or small — helps us build better products,
              maintain our ecosystem, and keep innovating for millions of users.
            </p>

            <button className="bg-black hover:bg-gray-900 text-white px-12 py-4 rounded-full font-semibold text-xl shadow-lg">
              Donate Now
            </button>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 border-t border-gray-900 text-center">
        <p className="text-gray-600">© 2025 Cookmytech. All rights reserved.</p>
      </div>

    </div>
  );
}
