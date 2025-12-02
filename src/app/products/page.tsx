import Navbar from "@/components/Navbar";

export default function ProductsPage() {
  return (
    <div className="font-bold min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO SECTION */}
      <div className="container mx-auto px-4 md:px-10 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Hero */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Products built for speed, scale & performance.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Discover our suite of modern, high-performance CookMyTech products
              powered by AI, automation, design excellence, and next-gen
              engineering.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-semibold shadow-lg transition">
                Get Started
              </button>
              <button className="bg-black border border-white hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT CATEGORIES */}
      <div className="container mx-auto px-4 md:px-10 lg:px-16 py-20">
        <h2 className="text-center text-4xl md:text-6xl font-extrabold mb-14">
          Our Product Ecosystem
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "CookMyWebsite",
              desc: "Ultra-fast websites, landing pages, and web apps built for conversions.",
              color: "from-purple-400 to-pink-500",
            },
            {
              name: "CookMy-AI",
              desc: "Custom AI agents, automation workflows, chatbots, model integrations.",
              color: "from-blue-400 to-cyan-500",
            },
            {
              name: "CookMyPapers",
              desc: "Research papers, academic writing, case studies, thesis help.",
              color: "from-orange-400 to-red-500",
            },
            {
              name: "CookMyMedia",
              desc: "Brand identity, video editing, social campaigns, content creation.",
              color: "from-green-400 to-emerald-500",
            },
            {
              name: "CookMyCloud",
              desc: "Cloud hosting, deployments, automation, CI/CD, Docker, Kubernetes.",
              color: "from-yellow-400 to-amber-500",
            },
            {
              name: "CookMyStore",
              desc: "E-commerce store setup, automation, product pages & custom dashboards.",
              color: "from-indigo-500 to-purple-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-3xl p-10 space-y-5 hover:scale-105 transition shadow-xl"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl`}
              ></div>
              <h3 className="text-3xl font-bold text-white">{item.name}</h3>
              <p className="text-gray-600">{item.desc}</p>
              <button className="mt-4 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURE GRID */}
      <div className="container mx-auto px-4 md:px-10 lg:px-16 py-24">
        <h2 className="text-center text-4xl md:text-6xl font-bold mb-12">
          Why Our Products Win
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            "Lightning-fast performance",
            "Pixel-perfect UI/UX",
            "Fully scalable architecture",
            "AI-powered automation",
            "World-class engineering",
            "Premium design system",
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-lg hover:scale-105 transition backdrop-blur-xl"
            >
              <div className="w-8 h-8 rounded-full bg-white mb-4" />
              <h3 className="text-xl font-bold">{feature}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCT SHOWCASE CARDS */}
      <div className="container mx-auto px-4 md:px-10 lg:px-16 py-24">
        <h2 className="text-center text-4xl md:text-6xl font-bold mb-14">
          Built with precision.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 hover:scale-105 transition shadow-xl"
            >
              <div className="w-full h-48 bg-gray-700 rounded-2xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">Premium Product UI</h3>
              <p className="text-gray-600">
                Modern layouts, smooth animations, responsive, beautiful.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PRICING SECTION */}
      <div className="container mx-auto px-4 md:px-10 lg:px-16 py-24">
        <h2 className="text-center text-4xl md:text-6xl font-bold mb-14">
          Simple Pricing
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Starter",
              price: "₹9999",
              features: ["1 Product", "Done in 1 week", "Support 15 days"],
            },
            {
              title: "Pro",
              price: "₹24,999",
              features: ["3 Products", "Done in 5 days", "Support 60 days"],
            },
            {
              title: "Enterprise",
              price: "₹49,999",
              features: ["∞ Products", "Done in 72 hours", "Lifetime Support"],
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-3xl p-10 shadow-xl hover:scale-105 transition"
            >
              <h3 className="text-3xl font-bold mb-3">{p.title}</h3>
              <p className="text-5xl font-extrabold mb-6">{p.price}</p>

              <ul className="space-y-3">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-400">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 md:px-10 lg:px-16 py-24">
        <div className="bg-gradient-to-br from-lime-300 to-lime-200 p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-lime-500"></div>
              ))}
            </div>
          </div>

          <div className="relative text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl text-black font-bold">
              Ready to build your next product?
            </h2>
            <p className="text-xl text-black">
              Turn your idea into a professionally built, high-performance
              product.
            </p>

            <button className="bg-black hover:bg-gray-900 text-white px-12 py-4 rounded-full font-semibold text-xl shadow-lg">
              Start Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-16 text-gray-600 border-t border-gray-900">
        © 2025 CookMyTech — All Rights Reserved.
      </div>
    </div>
  );
}
