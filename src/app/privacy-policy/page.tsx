import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Privacy Policy | Cookmytech",
  description:
    "Read Cookmytech’s Privacy Policy to learn how we collect, protect and use your personal data across our platforms and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white font-bold">
      <Navbar />

      {/* HERO */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how
            Cookmytech collects, uses and protects your information.
          </p>
        </div>
      </div>

      {/* CONTENT BOX */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pb-20">
        <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 p-10 md:p-14 rounded-3xl border border-white/10 overflow-hidden">
          
          {/* GRID BACKGROUND */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border border-gray-500"></div>
              ))}
            </div>
          </div>

          {/* MAIN TEXT */}
          <div className="relative z-10 space-y-10 leading-relaxed text-gray-200 text-lg">

            <section>
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <p>
                Cookmytech (“we”, “our”, or “us”) operates as a software solutions 
                and digital product ecosystem, including Cookmypapers, CookmyAI, 
                CookmyWebsite, CookmyMedia and related services.
              </p>
              <p className="mt-3">
                This Privacy Policy outlines how we collect, use, protect and handle 
                your personal data when you interact with our website, apps and services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
              <p>We may collect the following information:</p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Login information (if you create an account)</li>
                <li>Usage data (pages visited, clicks, device info)</li>
                <li>Payment or transaction details (via secure gateways)</li>
                <li>Queries submitted through forms or chat</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
              <p>Your data helps us:</p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Provide and improve our products & services</li>
                <li>Respond to inquiries and support requests</li>
                <li>Process payments securely</li>
                <li>Enhance user experience through analytics</li>
                <li>Send updates, promotions or important notices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Cookies & Tracking Technologies</h2>
              <p>
                We use cookies, analytics tools and tracking technologies to improve 
                our website performance and personalize content.
              </p>
              <p className="mt-3">
                You can disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. How We Protect Your Data</h2>
              <p>
                We use modern security measures including encryption, secure servers 
                and access control to keep your data safe. However, no system is 
                100% secure, and we cannot guarantee absolute protection.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Third-Party Sharing</h2>
              <p>We may share your data only with:</p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Trusted payment gateways</li>
                <li>Analytics and marketing tools</li>
                <li>Service providers assisting our operations</li>
              </ul>
              <p className="mt-3">
                We *never sell* your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request deletion or correction of your data</li>
                <li>Opt out of marketing emails</li>
                <li>Disable tracking cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">8. Children's Privacy</h2>
              <p>
                We do not knowingly collect data from children under 13. 
                If such data is discovered, we will delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">9. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy occasionally. Updates will be 
                posted on this page with a revised “Last Updated” date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">10. Contact Us</h2>
              <p>
                For privacy-related questions or data requests, contact us at:
              </p>
              <p className="mt-3 font-semibold text-lime-300">
                privacy@cookmytech.com
              </p>
              <p className="mt-2 text-gray-400">
                Cookmytech Headquarters, Sector 62, Noida, India
              </p>
            </section>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="container mx-auto text-center py-10 text-gray-600 border-t border-gray-900">
        © 2025 Cookmytech. All rights reserved.
      </div>
    </div>
  );
}
