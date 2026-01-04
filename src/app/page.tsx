import Navbar from "@/components/Navbar";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

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
             <Link href="/products">
              <button className="bg-white rounded-lg px-6 py-3 md:px-8 md:py-4 text-gray-900 text-base md:text-lg shadow-md cursor-pointer font-semibold hover:bg-gray-200 transition">
                Explore Our Products
              </button></Link>

              <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap border border-white cursor-pointer">
                Get Started for Free
              </button>
            </div>
          </div>

          {/* Right Content - Tech Illustration */}
        <div className="relative flex justify-center lg:justify-end">
  <Image
    src="/header.svg"
    alt="Cookmytech software solutions illustration"
    width={500}
    height={500}
    priority
    className="w-full max-w-md lg:max-w-lg"
  />
</div>

        </div>
      </div>
    </div>
  );
}
