import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Terms & Conditions | Cookmytech",
  description:
    "Read the Terms & Conditions of Cookmytech. Learn about permitted usage, limitations, responsibilities and legal guidelines for using our products and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-bold">
      <Navbar />

      {/* HERO */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            These Terms & Conditions outline the rules and regulations for using
            Cookmytech and its products, including Cookmypapers, CookmyAI, 
            CookmyWebsite, CookmyMedia and related services.
          </p>
        </div>
      </div>

      {/* CONTENT BOX */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pb-24">
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
          <div className="relative z-10 space-y-10 text-gray-200 text-lg leading-relaxed">

            {/* 1. INTRO */}
            <section>
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <p>
                Welcome to Cookmytech (“we”, “us”, “our”). By accessing or using 
                our website and services, you agree to comply with and be bound 
                by these Terms & Conditions.
              </p>
              <p className="mt-3">
                If you do not agree with any part of these terms, you must discontinue 
                use of our services immediately.
              </p>
            </section>

            {/* 2. ACCEPTABLE USE */}
            <section>
              <h2 className="text-3xl font-bold mb-4">2. Acceptable Use</h2>
              <p>You agree not to use Cookmytech or its services for:</p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Any illegal, harmful or fraudulent activity</li>
                <li>Copying, modifying or redistributing our content without permission</li>
                <li>Attempting to hack, damage or interfere with our servers</li>
                <li>Uploading harmful files, viruses or malicious code</li>
                <li>Impersonating Cookmytech, its employees or representatives</li>
              </ul>
            </section>

            {/* 3. USER ACCOUNTS */}
            <section>
              <h2 className="text-3xl font-bold mb-4">3. User Accounts</h2>
              <p>When creating an account on any Cookmytech product:</p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for keeping your login credentials secure</li>
                <li>We may suspend accounts violating these terms</li>
              </ul>
            </section>

            {/* 4. PAYMENTS & BILLING */}
            <section>
              <h2 className="text-3xl font-bold mb-4">4. Payments & Billing</h2>
              <p>
                If you purchase any paid plans, tools or digital services through 
                Cookmytech or its products:
              </p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>All payments are processed through secure third-party gateways</li>
                <li>Refunds are subject to our Refund Policy (if applicable)</li>
                <li>Prices may change at any time with notice</li>
              </ul>
            </section>

            {/* 5. INTELLECTUAL PROPERTY */}
            <section>
              <h2 className="text-3xl font-bold mb-4">5. Intellectual Property</h2>
              <p>
                All content, branding, designs, code, features and assets across 
                Cookmytech and its sub-products are copyrighted and owned by 
                Cookmytech unless otherwise stated.
              </p>
              <p className="mt-3">
                You may not copy, resell, distribute or reuse our materials 
                without written permission.
              </p>
            </section>

            {/* 6. THIRD-PARTY LINKS */}
            <section>
              <h2 className="text-3xl font-bold mb-4">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or services.  
                We do not control and are not responsible for their content, 
                privacy policies or actions.
              </p>
            </section>

            {/* 7. LIMITATION OF LIABILITY */}
            <section>
              <h2 className="text-3xl font-bold mb-4">7. Limitation of Liability</h2>
              <p>
                Cookmytech is not responsible for any direct, indirect, incidental 
                or consequential damages arising from:
              </p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Use or inability to use our website or services</li>
                <li>Unauthorized access to your data</li>
                <li>Errors, bugs or interruptions in services</li>
                <li>Third-party products or integrations</li>
              </ul>
            </section>

            {/* 8. TERMINATION */}
            <section>
              <h2 className="text-3xl font-bold mb-4">8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to any 
                Cookmytech service at any time for violating these terms.
              </p>
            </section>

            {/* 9. CHANGES TO TERMS */}
            <section>
              <h2 className="text-3xl font-bold mb-4">9. Changes to These Terms</h2>
              <p>
                We may update these Terms & Conditions from time to time. Any 
                changes will be posted on this page with an updated “Last Updated” date.
              </p>
            </section>

            {/* 10. CONTACT */}
            <section>
              <h2 className="text-3xl font-bold mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms & Conditions, you can 
                contact us at:
              </p>
              <p className="mt-3 font-semibold text-lime-300">
                legal@cookmytech.com
              </p>
              <p className="text-gray-400 mt-2">
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
