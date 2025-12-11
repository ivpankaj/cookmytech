import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Careers | Join Cookmytech — Build with Us",
  description:
    "Careers at Cookmytech — we're hiring engineers, designers, product builders and creators. Send your contributions and resumes to cookmypapers@gmail.com.",
  keywords: [
    "careers cookmytech",
    "jobs Noida",
    "software jobs",
    "AI jobs",
    "design jobs",
    "hire developers",
  ],
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white font-bold">
      <Navbar />

      {/* HERO */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
              Build products that matter.
              <span className="block text-lime-400">Join Cookmytech.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl">
              We're a fast-growing software & AI company based in Noida building
              tools, platforms and services used by creators, startups and
              enterprises. If you love building, shipping and learning — we
              should talk.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="mailto:cookmypapers@gmail.com"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 shadow-lg"
              >
                Apply / Send CV
              </a>
              <a
                href="#open-roles"
                className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900"
              >
                See Open Roles
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-purple-300" />
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex justify-center min-h-[360px]">
                <div className="bg-white w-64 rounded-3xl p-6 shadow-2xl hover:scale-105 transition">
                  <div className="space-y-4">
                    <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl" />
                    <div className="h-3 bg-gray-300 rounded" />
                    <div className="h-3 bg-gray-300 rounded w-3/4" />
                    <p className="text-center text-black font-medium mt-2">Careers at Cookmytech</p>
                  </div>
                </div>

                <div className="absolute -top-8 -left-8 w-24 h-36 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-2xl transform -rotate-12 opacity-70"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-36 bg-gradient-to-b from-blue-400 to-purple-500 rounded-2xl transform rotate-12 opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY JOIN */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Why join Cookmytech?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">Impact</h3>
            <p className="text-gray-400">Work on products used by creators, startups and enterprises worldwide.</p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">Growth</h3>
            <p className="text-gray-400">Fast learning, mentorship, ownership and career growth across engineering and product.</p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">Flexibility</h3>
            <p className="text-gray-400">Hybrid work model from Noida HQ with flexible hours and remote-friendly roles.</p>
          </div>
        </div>
      </div>

      {/* OPEN ROLES */}
      <div id="open-roles" className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h2 className="text-4xl font-bold mb-8">Open Roles</h2>

        <div className="space-y-6">
          {[
            {
              title: "Frontend Engineer (React / Tailwind)",
              location: "Noida / Remote",
              type: "Full-time",
              desc: "Build responsive UIs, optimize performance and collaborate with product teams."
            },
            {
              title: "Backend Engineer (Node.js / PostgreSQL)",
              location: "Noida / Remote",
              type: "Full-time",
              desc: "Design APIs, scale services, and maintain data integrity for our platforms."
            },
            {
              title: "ML Engineer / Researcher",
              location: "Noida / Remote",
              type: "Full-time",
              desc: "Develop ML models, build AI products (CookmyAI) and productionize models."
            },
            {
              title: "Product Designer (UI/UX)",
              location: "Noida / Remote",
              type: "Full-time",
              desc: "Design delightful product experiences for web and mobile."
            },
            {
              title: "Technical Content Writer",
              location: "Remote",
              type: "Contract / Part-time",
              desc: "Create docs, tutorials and guides for Cookmypapers and developer audiences."
            }
          ].map((role, idx) => (
            <div key={idx} className="bg-gray-900 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <h3 className="text-2xl font-bold">{role.title}</h3>
                <p className="text-gray-400 mt-1">{role.location} • {role.type}</p>
                <p className="text-gray-400 mt-3 max-w-2xl">{role.desc}</p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-3">
                <a
                  href={"mailto:cookmypapers@gmail.com?subject=Application%20for%20" + encodeURIComponent(role.title)}
                  className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
                >
                  Apply
                </a>
                <button className="border border-white px-6 py-3 rounded-full hover:bg-gray-900">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW TO APPLY */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h2 className="text-4xl font-bold mb-6">How to apply</h2>
        <div className="bg-gray-900 rounded-3xl p-8 space-y-6">
          <p className="text-gray-400">
            Send your CV, portfolio or a short note about your experience and what you want to build to:
          </p>

          <a
            href="mailto:cookmypapers@gmail.com"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            cookmypapers@gmail.com
          </a>

          <div className="text-gray-400">
            <p className="mb-2"><strong>What to include:</strong></p>
            <ul className="list-disc ml-6 space-y-2">
              <li>CV / Resume</li>
              <li>Portfolio or links to projects / GitHub</li>
              <li>Short cover note (why you’re a fit)</li>
              <li>Preferred role & compensation expectations (optional)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CULTURE */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h2 className="text-4xl font-bold mb-6">Culture & Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-2">Learning</h3>
            <p className="text-gray-400">Mentorship, learning budget and monthly study sessions.</p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-2">Flexibility</h3>
            <p className="text-gray-400">Hybrid work model, flexible hours and remote-first mindset.</p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-2">Comp & Perks</h3>
            <p className="text-gray-400">Competitive salary, performance bonuses, and project ownership.</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h2 className="text-4xl font-bold mb-6">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-3xl p-6">
            <h4 className="font-semibold">Can I apply if I'm remote?</h4>
            <p className="text-gray-400 mt-2">Yes — many of our roles are remote-friendly. Some roles require occasional HQ visits.</p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-6">
            <h4 className="font-semibold">How long does hiring take?</h4>
            <p className="text-gray-400 mt-2">Typically 2–4 weeks depending on the role and interviews.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="bg-gradient-to-br from-lime-200 to-lime-300 p-12 rounded-3xl text-center">
          <h3 className="text-3xl font-bold text-black mb-4">Ready to build with us?</h3>
          <p className="text-black mb-6">Send your CV or portfolio to <strong>cookmypapers@gmail.com</strong></p>
          <a
            href="mailto:cookmypapers@gmail.com"
            className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-900"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 border-t border-gray-900 text-center">
        <p className="text-gray-600">© {new Date().getFullYear()} Cookmytech. All rights reserved.</p>
      </div>
    </div>
  );
}
