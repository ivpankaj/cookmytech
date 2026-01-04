import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata = {
  title: "Contact Cookmytech | Business Enquiries, Support & Collaboration",
  description:
    "Contact Cookmytech for website development, AI solutions, SaaS tools, cloud deployment, media services and enterprise software development.",
  keywords: [
    "contact cookmytech",
    "software company contact Noida",
    "hire software developers",
    "AI solution provider India",
    "website development enquiry",
  ],
};

const phone = "919911064724";
const message = "Hello CookMyTech, I want to discuss a project.";

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
  message
)}`;

export default function ContactPage() {
  return (
    <div className="font-bold min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Let’s Build Something Amazing Together.
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
              Whether you need a custom website, SaaS platform, AI tool,
              automation system, cloud deployment, research support or a full
              digital transformation — Cookmytech is here to help you bring your
              ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto"
              >
                <span className="block text-center bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-all hover:scale-105">
                  Call Now
                </span>
              </a>

              <a href="mailto:cookmytech@gmail.com">
                <button className="w-full sm:w-auto bg-black border border-white hover:bg-gray-900 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg cursor-pointer">
                  Mail Us
                </button>
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/contact.svg"
              alt="Cookmytech software solutions illustration"
              width={500}
              height={500}
              priority
              className="w-full max-w-md lg:max-w-lg"
            />
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
              <label className="block text-gray-400 mb-2 text-lg">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-4 rounded-xl bg-black border border-gray-800 text-white focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-lg">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-4 rounded-xl bg-black border border-gray-800 text-white focus:outline-none"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-lg">
                Service Interested In
              </label>
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
              <label className="block text-gray-400 mb-2 text-lg">
                Your Message
              </label>
              <textarea
                className="w-full px-4 py-4 rounded-xl bg-black border border-gray-800 text-white h-40 focus:outline-none"
                placeholder="Tell us what you’re looking for..."
              />
            </div>

            <button className="w-full bg-white hover:bg-gray-100 text-black px-10 py-4 rounded-full font-semibold text-xl shadow-lg transition">
              Submit
            </button>
          </div>

          {/* CONTACT INFO CARDS */}
          <div className="space-y-10">
            {/* BUSINESS EMAIL */}
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
                <p className="text-gray-900 text-lg">
                  We respond fast — usually within minutes.
                </p>
                <p className="text-black font-semibold text-xl mt-4">
                  cookmytech@gmail.com
                </p>
              </div>
            </div>

            {/* PHONE */}
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
                <p className="text-black text-lg">Mon–Sat • 10 AM to 8 PM</p>
                <p className="text-black font-semibold text-xl mt-4">
                  +91 9911064724
                </p>
              </div>
            </div>

            {/* ADDRESS */}
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
                  Noida <br />
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
          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-pink-300"></div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl text-black font-bold">
              We're Ready When You Are.
            </h2>
            <p className="text-xl text-black">
              Let’s talk about your project — free consultation, no commitments.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <button className="bg-black hover:bg-gray-900 cursor-pointer text-white px-12 py-4 rounded-full font-semibold text-xl shadow-lg">
                Book a Free Call
              </button>
            </a>
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
