"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "templates", name: "Templates" },
    { id: "tools", name: "Tools & Apps" },
    { id: "courses", name: "Courses" },
    { id: "assets", name: "Design Assets" },
  ];

  const products = [
    {
      id: 1,
      name: "Ultimate Website Template Pack",
      category: "templates",
      price: "$49",
      description:
        "50+ premium website templates for startups, portfolios, and businesses. Fully responsive and customizable.",
      color: "from-purple-400 to-pink-500",
      icon: "🎨",
      tag: "Bestseller",
      features: ["50+ Templates", "Lifetime Updates", "Full Support"],
    },
    {
      id: 2,
      name: "AI Content Generator Pro",
      category: "tools",
      price: "$79",
      description:
        "Advanced AI-powered tool to generate blog posts, social media content, and marketing copy in seconds.",
      color: "from-blue-400 to-cyan-500",
      icon: "🤖",
      tag: "New",
      features: ["Unlimited Generation", "10+ Languages", "API Access"],
    },
    {
      id: 3,
      name: "Complete Web Development Course",
      category: "courses",
      price: "$129",
      description:
        "Master full-stack web development with 200+ video lessons, projects, and certification.",
      color: "from-orange-400 to-red-500",
      icon: "📚",
      tag: "Popular",
      features: ["200+ Videos", "30+ Projects", "Certificate"],
    },
    {
      id: 4,
      name: "Premium Icon Library",
      category: "assets",
      price: "$39",
      description:
        "5000+ handcrafted icons in multiple formats. Perfect for web, mobile, and print design.",
      color: "from-green-400 to-emerald-500",
      icon: "⭐",
      tag: "Trending",
      features: ["5000+ Icons", "SVG & PNG", "Commercial License"],
    },
    {
      id: 5,
      name: "SaaS Dashboard Template",
      category: "templates",
      price: "$99",
      description:
        "Modern dashboard template with 100+ components, charts, and dark mode support.",
      color: "from-indigo-400 to-purple-500",
      icon: "📊",
      tag: "New",
      features: ["100+ Components", "Dark Mode", "React & Vue"],
    },
    {
      id: 6,
      name: "Social Media Automation Suite",
      category: "tools",
      price: "$59",
      description:
        "Schedule, post, and analyze your social media content across all major platforms.",
      color: "from-pink-400 to-rose-500",
      icon: "📱",
      tag: "Trending",
      features: ["All Platforms", "Analytics", "Auto-Posting"],
    },
    {
      id: 7,
      name: "Digital Marketing Masterclass",
      category: "courses",
      price: "$149",
      description:
        "Learn SEO, social media marketing, email campaigns, and paid advertising strategies.",
      color: "from-yellow-400 to-orange-500",
      icon: "🎯",
      tag: "Bestseller",
      features: ["150+ Lessons", "Live Q&A", "Marketing Tools"],
    },
    {
      id: 8,
      name: "Motion Graphics Pack",
      category: "assets",
      price: "$69",
      description:
        "1000+ animated elements, transitions, and effects for video editing and motion design.",
      color: "from-cyan-400 to-blue-500",
      icon: "🎬",
      tag: "New",
      features: ["1000+ Elements", "After Effects", "Premiere Pro"],
    },
    {
      id: 9,
      name: "E-commerce Store Builder",
      category: "tools",
      price: "$89",
      description:
        "No-code solution to build and launch your online store in minutes with payment integration.",
      color: "from-red-400 to-pink-500",
      icon: "🛒",
      tag: "Popular",
      features: ["Drag & Drop", "Payment Ready", "Mobile Apps"],
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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
              Digital products that elevate your work.
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
              Premium templates, tools, courses, and design assets crafted by
              experts. Everything you need to level up your digital projects and
              grow your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap cursor-pointer">
                Browse all products
              </button>
              <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap border border-white cursor-pointer">
                View bundles
              </button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/product1.svg"
              alt="Cookmytech software solutions illustration"
              width={500}
              height={500}
              priority
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              50K+
            </div>
            <div className="text-base md:text-lg text-gray-600">
              Happy customers
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              100+
            </div>
            <div className="text-base md:text-lg text-gray-600">
              Digital products
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              4.9★
            </div>
            <div className="text-base md:text-lg text-gray-600">
              Average rating
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              24/7
            </div>
            <div className="text-base md:text-lg text-gray-600">
              Customer support
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all cursor-pointer ${
                selectedCategory === category.id
                  ? "bg-white text-black shadow-lg scale-105"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Product Image/Visual */}
              <div
                className={`relative bg-gradient-to-br ${product.color} p-8 md:p-12 h-64 md:h-72`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 gap-2 h-full">
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className="border border-white"></div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-7xl md:text-8xl">{product.icon}</div>
                </div>

                {product.tag && (
                  <div className="absolute top-4 right-4 bg-white text-black px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                    {product.tag}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {product.name}
                  </h3>
                  <div className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
                    {product.price}
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 pt-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                      <div className="text-xs md:text-sm text-gray-400">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-white hover:bg-gray-100 text-black px-6 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg cursor-pointer mt-4">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Bundle Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-orange-300"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-bold">
                🔥 LIMITED TIME OFFER
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Complete Creator Bundle
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                Get all our premium products in one amazing bundle. Save 60%
                when you buy everything together. Perfect for creators and
                businesses.
              </p>

              <div className="flex items-baseline gap-4">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white line-through opacity-70">
                  $899
                </div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  $349
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  "All Templates",
                  "All Tools",
                  "All Courses",
                  "All Assets",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center gap-2 md:gap-3"
                  >
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <div className="text-sm md:text-base text-white font-semibold">
                      {item}
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-white hover:bg-gray-100 text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg cursor-pointer">
                Get the bundle
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🎨", color: "from-purple-400 to-pink-500" },
                  { icon: "🤖", color: "from-blue-400 to-cyan-500" },
                  { icon: "📚", color: "from-green-400 to-emerald-500" },
                  { icon: "⭐", color: "from-yellow-400 to-orange-500" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 hover:scale-110 transition-transform duration-300 shadow-2xl"
                  >
                    <div
                      className={`w-full h-32 md:h-40 bg-gradient-to-br ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center text-5xl md:text-6xl`}
                    >
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why choose our products?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Premium quality, outstanding support, and continuous updates make
            our products the best choice for professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Lifetime Updates",
              description:
                "Get free updates forever. We constantly improve our products with new features.",
              icon: "🔄",
              color: "from-blue-400 to-cyan-500",
            },
            {
              title: "Premium Support",
              description:
                "24/7 customer support from our expert team. We're here to help you succeed.",
              icon: "💬",
              color: "from-purple-400 to-pink-500",
            },
            {
              title: "Money-Back Guarantee",
              description:
                "Not satisfied? Get a full refund within 30 days, no questions asked.",
              icon: "💰",
              color: "from-green-400 to-emerald-500",
            },
            {
              title: "Commercial License",
              description:
                "Use our products in unlimited client projects and commercial applications.",
              icon: "📝",
              color: "from-orange-400 to-red-500",
            },
            {
              title: "Easy Customization",
              description:
                "All products are fully customizable and well-documented for easy setup.",
              icon: "🎨",
              color: "from-yellow-400 to-orange-500",
            },
            {
              title: "Community Access",
              description:
                "Join our exclusive community of 50K+ creators and get insider tips.",
              icon: "👥",
              color: "from-indigo-400 to-purple-500",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl p-6 md:p-8 hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.color} rounded-2xl md:rounded-3xl flex items-center justify-center text-3xl md:text-4xl mb-4 md:mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Loved by creators worldwide.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their
            projects with our products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl p-6 md:p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full"></div>
                <div>
                  <div className="text-base md:text-lg font-bold text-white">
                    Creator Name
                  </div>
                  <div className="text-sm text-gray-600">Product Designer</div>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                "These products are incredible! They saved me hundreds of hours
                and helped me deliver amazing results to my clients."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-yellow-400 text-lg md:text-xl">
                    ★
                  </div>
                ))}
              </div>
            </div>
          ))}
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
              Ready to elevate your projects?
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed">
              Browse our complete collection of digital products and find the
              perfect tools to bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap cursor-pointer">
                Browse all products
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg whitespace-nowrap cursor-pointer border-2 border-black">
                View bundles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 border-t border-gray-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Templates
              </li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Tools & Apps
              </li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Courses
              </li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Design Assets
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Documentation
              </li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Help Center
              </li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Contact Us
              </li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Refund Policy
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                About
              </li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Blog
              </li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Affiliate
              </li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Partners
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Terms
              </li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Privacy
              </li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Licenses
              </li>
              <li className="hover:text-white transition cursor-pointer text-sm md:text-base">
                Cookies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
