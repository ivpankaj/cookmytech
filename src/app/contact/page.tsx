
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="font-bold min-h-screen bg-black text-white">
      <Navbar />

    <div className="mt-20 flex justify-center">

</div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Let's build something amazing together.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Whether you want a website, AI tool, media production, research
              paper, cloud deployment or a full digital transformation — our
              team is ready to help you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-full font-semibold text-lg shadow-lg">
                Call Now
              </button>
              <button className="w-full sm:w-auto bg-black border border-white hover:bg-gray-900 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg">
                Mail Us
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-pink-300"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex justify-center items-center min-h-[400px]">
                <div className="bg-white w-64 rounded-3xl p-6 shadow-2xl hover:scale-105 transition">
                  <div className="space-y-4">
                    <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl"></div>
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    <p className="text-center text-black font-medium mt-2">
                      Reach Out Anytime
                    </p>
                  </div>
                </div>

                <div className="absolute -top-10 -left-8 w-28 h-40 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-2xl transform -rotate-12 opacity-70"></div>
                <div className="absolute -bottom-10 -right-8 w-28 h-40 bg-gradient-to-b from-blue-400 to-purple-500 rounded-2xl transform rotate-12 opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-10">
          Contact Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* FORM */}
          <div className="bg-gray-900 rounded-3xl p-10 shadow-xl space-y-6">
            <div>
              <label className="block text-gray-400 mb-2 text-lg">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-4 rounded-xl bg-black border border-gray-800 text-white focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-lg">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-4 rounded-xl bg-black border border-gray-800 text-white focus:outline-none"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-lg">Service Interested In</label>
              <select className="w-full px-4 py-4 rounded-xl bg-black border border-gray-800 text-white focus:outline-none">
                <option>CookMyWebsite</option>
                <option>CookMy-AI</option>
                <option>CookMyPapers</option>
                <option>CookMyMedia</option>
                <option>CookMyCloud</option>
                <option>CookMyStore</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-lg">Your Message</label>
              <textarea
                className="w-full px-4 py-4 rounded-xl bg-black border border-gray-800 text-white h-40 focus:outline-none"
                placeholder="Tell us what you’re looking for..."
              />
            </div>

            <button className="w-full bg-white hover:bg-gray-100 text-black px-10 py-4 rounded-full font-semibold text-xl shadow-lg transition">
              Submit
            </button>
          </div>

          {/* Right Section - Contact Info Cards */}
          <div className="space-y-10">

            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-25">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-blue-300"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-3xl font-bold">Business Enquiries</h3>
                <p className="text-gray-900 text-lg">We respond within 1 hour.</p>
                <p className="text-black font-semibold text-xl mt-4">
                  contact@cookmygroup.com
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-lime-300 to-lime-400 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-25">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-lime-500"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-3xl font-bold text-black">Call Us</h3>
                <p className="text-black text-lg">Mon–Sat • 10AM to 8PM</p>
                <p className="text-black font-semibold text-xl mt-4">
                  +91 98989 98989
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-25">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-yellow-500"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-3xl font-bold">Office Address</h3>
                <p className="text-black text-lg">
                  CookMy Group HQ <br />
                  Sector 62, Noida <br />
                  Uttar Pradesh, India
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-24">
        <div className="bg-gradient-to-br from-purple-300 to-pink-400 p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-pink-300"></div>
              ))}
            </div>
          </div>

          <div className="relative text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl text-black font-bold">
              We're Ready When You Are.
            </h2>
            <p className="text-xl text-black">
              Let’s talk about your project — no charges for consultation.
            </p>

            <button className="bg-black hover:bg-gray-900 text-white px-12 py-4 rounded-full font-semibold text-xl shadow-lg">
              Book a Free Call
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 border-t border-gray-900 text-center">
        <p className="text-gray-600">© 2025 CookMy Group. All rights reserved.</p>
      </div>
    </div>
  );
}
