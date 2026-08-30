import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-24 flex flex-col justify-center items-center text-center">
        <div className="border border-black p-12 bg-gray-50 max-w-2xl w-full">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">
            // ERROR 404 — ROUTE NOT FOUND
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-none mb-6">
            404
          </h1>
          <p className="text-sm text-gray-700 leading-relaxed mb-8 max-w-md mx-auto">
            The page or resource you requested does not exist or has been relocated within our software studio directory.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left text-xs">
            <Link href="/" className="p-4 border border-black bg-white hover:bg-black hover:text-white transition-colors">
              <div className="font-bold mb-1">01. Homepage →</div>
              <div className="text-gray-500 hover:text-gray-300">Studio overview & services</div>
            </Link>
            <Link href="/services" className="p-4 border border-black bg-white hover:bg-black hover:text-white transition-colors">
              <div className="font-bold mb-1">02. Services Hub →</div>
              <div className="text-gray-500 hover:text-gray-300">AI & Full-Stack Capabilities</div>
            </Link>
            <Link href="/case-studies" className="p-4 border border-black bg-white hover:bg-black hover:text-white transition-colors">
              <div className="font-bold mb-1">03. Case Studies →</div>
              <div className="text-gray-500 hover:text-gray-300">Production engineering builds</div>
            </Link>
            <Link href="/blog" className="p-4 border border-black bg-white hover:bg-black hover:text-white transition-colors">
              <div className="font-bold mb-1">04. Technical Guides →</div>
              <div className="text-gray-500 hover:text-gray-300">Engineering cost & tech articles</div>
            </Link>
          </div>

          <Link
            href="/contact"
            className="inline-block bg-black text-white text-xs uppercase tracking-widest px-8 py-3.5 border border-black hover:bg-gray-800 transition-colors font-bold"
          >
            Contact Engineering Team →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
