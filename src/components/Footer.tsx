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

          {/* MAIN FOOTER CONTENT */}
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* COLUMN 1 — Brand Intro */}
            <div className="space-y-5">
              <h3 className="text-3xl font-extrabold tracking-tight">COOKMYTECH</h3>
              <p className="text-gray-400 text-base leading-relaxed max-w-xs">
                Cookmytech is a Noida-based software solutions company offering 
                AI tools, SaaS products, website development, automation, branding 
                and enterprise-grade digital services.  
                Empowering the ecosystem of: Cookmypapers, CookmyAI, 
                CookmyWebsite, CookmyMedia & more.
              </p>
              <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition font-semibold shadow-md">
                Start Your Project
              </button>
            </div>

            {/* COLUMN 2 — Products */}
            <div>
              <h4 className="text-xl font-bold mb-6">Products</h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "CookMyWebsite – Website Builder",
                  "CookMyAI – AI Tools",
                  "CookMyPapers – Documentation Services",
                  "CookMyMedia – Branding & Media",
                  "CookMyStore – E-Commerce Tools",
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

            {/* COLUMN 3 — Company */}
            <div>
              <h4 className="text-xl font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "About Us",
                  "Careers",
                  "Partnerships",
                  "Founder – Pankaj Verma",
                  "Contact Us",
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

            {/* COLUMN 4 — Resources */}
            <div>
              <h4 className="text-xl font-bold mb-6">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Documentation",
                  "API Access",
                  "Tutorials",
                  "Community",
                  "Support Center",
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

          {/* BOTTOM FOOTER SECTION */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Cookmytech Pvt. Ltd.  
              | Software Solutions Company in Noida, India
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              {[
                "facebook",
                "twitter",
                "instagram",
                "linkedin",
              ].map((platform, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gray-900 hover:bg-gray-700 rounded-full transition cursor-pointer flex items-center justify-center"
                >
                  <span className="text-gray-300 text-xs capitalize">{platform}</span>
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
