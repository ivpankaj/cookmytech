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
import FaqSection from "@/components/FaqSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = constructMetadata({
  title: "AI & Full-Stack Software Development Studio",
  description:
    "CookMyTech is a premier AI & full-stack software development studio. We build custom AI software, autonomous AI agents, enterprise RAG applications, SaaS platforms, Next.js apps, MERN stack solutions, and cloud architectures.",
  path: "/",
  keywords: [
    "CookMyTech",
    "AI Development Studio",
    "Full-Stack Development Studio",
    "AI Software Engineering",
    "SaaS Development Company",
    "AI Agent Development",
    "RAG Systems",
    "Next.js Development",
    "MERN Stack Studio",
  ],
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
          <section
            className="border-b border-black bg-black text-white py-20 font-mono text-center"
            aria-label="Call to Action"
          >
            <div className="max-w-screen-xl mx-auto px-6">
              <h2
                className="font-display text-[clamp(2rem,8vw,6rem)] font-bold leading-none mb-8"
                style={{ fontWeight: 800 }}
              >
                <span className="block">READY TO BUILD YOUR</span>
                <span className="block text-gray-500">SOFTWARE PRODUCT?</span>
              </h2>
              <p className="text-sm text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
                Send us your project specifications. Our senior engineering team will respond within 24 hours with an actionable technical plan and fixed estimate.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-black text-xs uppercase tracking-widest px-12 py-4 border border-white hover:bg-transparent hover:text-white transition-colors duration-150 font-bold"
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