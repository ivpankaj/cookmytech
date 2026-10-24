import { constructMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import ProjectCarousel from "@/components/ProjectCarousel";
import FeaturedGuides from "@/components/FeaturedGuides";
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = constructMetadata({
  title: "CookMyTech | AI & Software Development Services",
  description:
    "Build custom AI applications, AI agents, RAG systems, SaaS platforms and scalable web applications with CookMyTech. Explore our engineering services and discuss your software project.",
  path: "/",
});

export default function CookMyTechLanding() {
  return (
    <>
      <JsonLd />
      <div className="bg-white text-black min-h-screen font-mono flex flex-col">
        <Navbar />
        <main id="main-content">
          <Hero />
          <TechMarquee />
          <Services />
          <WhyUs />
          <Process />
          <TechStack />
          <ProjectCarousel />
          <FeaturedGuides />
          <section
            className="border-b border-black bg-black text-white py-14 sm:py-20 font-mono text-center"
            aria-label="Call to Action"
          >
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
              <h2
                className="font-display text-[clamp(1.75rem,7vw,6rem)] font-bold leading-tight sm:leading-none mb-6 sm:mb-8 break-words"
                style={{ fontWeight: 800 }}
              >
                <span className="block">READY TO BUILD YOUR</span>
                <span className="block text-gray-500">SOFTWARE PRODUCT?</span>
              </h2>
              <p className="text-sm text-gray-400 mb-8 sm:mb-10 max-w-md mx-auto leading-relaxed">
                Send us your project specifications. Our senior engineering team will respond within 24 hours with an actionable technical plan and fixed estimate.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-black text-xs uppercase tracking-wider sm:tracking-widest px-8 sm:px-12 py-3.5 sm:py-4 border border-white hover:bg-transparent hover:text-white transition-colors duration-150 font-bold max-w-full"
              >
                Get in Touch →
              </a>
            </div>
          </section>
          <FaqSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}