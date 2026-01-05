"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        <div className="relative bg-linear-to-br from-gray-600 to-gray-800 rounded-3xl p-12 md:p-16 overflow-hidden border border-white/10">
          {/* GRID BACKGROUND */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-gray-500"></div>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-14">
            {/* BRAND */}
            <div className="space-y-6">
              <h3 className="text-4xl font-extrabold tracking-tight">
                COOKMYTECH
              </h3>

              <p className="text-gray-300 text-base leading-relaxed max-w-xs">
                Cookmytech is a Noida-based software solutions company offering
                AI tools, SaaS products, website development, automation,
                branding and enterprise-grade digital services.
              </p>

              <Link href="/contact">
                <button
                  className="
                  px-7 py-3
                  bg-white text-black
                  rounded-full
                  font-extrabold tracking-wide
                  transition-all duration-300
                  hover:scale-105 hover:bg-gray-200
                  active:scale-95
                  shadow-lg
                "
                >
                  Start Your Project
                </button>
              </Link>
            </div>

            {/* PRODUCTS */}
            <FooterColumn title="Products">
              <FooterLink
                href="https://website.cookmytech.site"
                target="_blank"
              >
                CookMyWebsite – Website Builder
              </FooterLink>
              <FooterLink href="https://ai.cookmytech.site" target="_blank">
                CookMyAI – AI Tools
              </FooterLink>
              <FooterLink href="https://study.cookmytech.site" target="_blank">
                CookMyPapers – Documentation
              </FooterLink>
              {/* <FooterLink href="/products">CookMyMedia – Branding</FooterLink> */}
            </FooterColumn>

            {/* COMPANY */}
            <FooterColumn title="Company">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="https://ivpankaj.online">
                Founder – Pankaj Verma
              </FooterLink>

              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/donate">Donate</FooterLink>
            </FooterColumn>

            {/* RESOURCES */}
            <FooterColumn title="Resources">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-and-conditions">
                Terms & Conditions
              </FooterLink>
              <FooterLink href="/refund-policy">Refund Policy</FooterLink>
              <FooterLink href="/shipping">Shipping & Delivery</FooterLink>
              <FooterLink href="/contact">Support Center</FooterLink>
            </FooterColumn>
          </div>

          {/* DIVIDER */}
          <div className="relative z-10 border-t border-gray-700/60 mt-14 pt-8"></div>

          {/* BOTTOM */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm font-medium">
              © {new Date().getFullYear()} Cookmytech Pvt. Ltd. | Noida, India
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">
              <SocialIcon href="https://www.facebook.com/share/1Sq2vo2EHz/">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon href="https://x.com/cookmytech">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/cookmytech">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/cookmytech">
                <FaLinkedinIn />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10" />
    </footer>
  );
}

/* ---------- SMALL REUSABLE COMPONENTS ---------- */

function FooterColumn({ title, children }: any) {
  return (
    <div>
      <h4 className="text-xl font-extrabold mb-6 tracking-wide">{title}</h4>
      <ul className="space-y-4">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children, target }: any) {
  return (
    <li>
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="text-gray-300 hover:text-white cursor-pointer"
      >
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ href, children }: any) {
  return (
    <Link href={href} target="_blank">
      <div
        className="
        w-11 h-11
        bg-gray-900
        rounded-full
        flex items-center justify-center
        text-gray-300 text-lg
        transition-all duration-300
        hover:bg-gray-700 hover:scale-110
        active:scale-95
      "
      >
        {children}
      </div>
    </Link>
  );
}
