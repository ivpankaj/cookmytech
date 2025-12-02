export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20">
      {/* GRID + GRADIENT BACKGROUND */}
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        <div className="relative bg-linear-to-br from-gray-600 to-gray-800 rounded-3xl p-12 md:p-16 overflow-hidden border border-white/10">

          {/* grid effect */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-gray-500"></div>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* COLUMN 1 */}
            <div className="space-y-5">
              <h3 className="text-3xl font-extrabold tracking-tight">COOKMYTECH</h3>
              <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                Modern products, AI tools, websites, cloud, branding — all under 
                one ecosystem designed to scale your digital presence.
              </p>
              <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition font-semibold shadow-md">
                Get Started
              </button>
            </div>

            {/* COLUMN 2 */}
            <div>
              <h4 className="text-xl font-bold mb-6">Products</h4>
              <ul className="space-y-3 text-gray-500">
                {[
                  "CookMyWebsite",
                  "CookMy-AI",
                  "CookMyPapers",
                  "CookMyMedia",
                  "CookMyStore",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-white hover:translate-x-1 transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div>
              <h4 className="text-xl font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-500">
                {[
                  "About Us",
                  "Careers",
                  "Partnerships",
                  "Media Kit",
                  "Contact",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-white hover:translate-x-1 transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4 */}
            <div>
              <h4 className="text-xl font-bold mb-6">Resources</h4>
              <ul className="space-y-3 text-gray-500">
                {[
                  "Documentation",
                  "API",
                  "Tutorials",
                  "Community",
                  "Support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-white hover:translate-x-1 transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="relative z-10 border-t border-gray-700/50 mt-12 pt-8"></div>

          {/* BOTTOM FOOTER */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CookMyTech. All rights reserved.
            </p>

            <div className="flex gap-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full transition cursor-pointer flex items-center justify-center"
                >
                  {/* Placeholder icon */}
                  <div className="w-4 h-4 bg-white rounded-full opacity-20"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="h-10"></div>
    </footer>
  );
}
