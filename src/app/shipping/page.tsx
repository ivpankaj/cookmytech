import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Shipping & Delivery Policy | Cookmytech",
  description:
    "Read Cookmytech’s Shipping & Delivery Policy to understand how digital products, documents, software tools, and project-based deliverables are delivered.",
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-bold">
      <Navbar />

      {/* HERO */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Shipping & Delivery Policy
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            This policy explains how Cookmytech delivers its digital products,
            services, documents, and project-based work.
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

            {/* SECTION 1 - INTRO */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                1. Overview
              </h2>
              <p>
                Cookmytech provides digital products and services including 
                AI tools, documents, website development, media content, cloud 
                deployment, and SaaS platforms.  
              </p>
              <p className="mt-3">
                Since most of our products are digital, shipping and delivery 
                occur electronically unless otherwise stated.
              </p>
            </section>

            {/* SECTION 2 - DIGITAL DELIVERY */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                2. Digital Product Delivery
              </h2>
              <p>
                For digital services such as Cookmypapers, CookmyAI, CookmyWebsite, 
                and other software tools:
              </p>

              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Delivery is instant or within a few minutes of purchase</li>
                <li>Access is provided via email or account dashboard</li>
                <li>No physical shipping is required</li>
                <li>Support for accessing digital products is available via email</li>
              </ul>

              <p className="mt-3">
                In rare cases, delivery may take up to 
                <span className="text-lime-300 font-semibold"> 24 hours </span>
                due to system or network delays.
              </p>
            </section>

            {/* SECTION 3 - CUSTOM PROJECT DELIVERY */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                3. Delivery for Custom Projects
              </h2>
              <p>
                For custom software development, website projects, media work 
                or cloud deployments:
              </p>

              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Delivery timelines are defined during project discussion</li>
                <li>Milestones are delivered digitally via email or dashboard</li>
                <li>Final delivery is shared only after approvals and payments</li>
                <li>All deliverables remain digital unless specified otherwise</li>
              </ul>
            </section>

            {/* SECTION 4 - PHYSICAL SHIPPING */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                4. Physical Shipping (If Applicable)
              </h2>
              <p>
                At present, Cookmytech does not offer physical products.  
                In case we introduce merchandise or physical deliverables:
              </p>

              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Shipping charges may apply based on location</li>
                <li>Estimated delivery time will be mentioned at checkout</li>
                <li>Tracking details will be shared when dispatched</li>
                <li>Customs or import fees (if any) are the customer's responsibility</li>
              </ul>
            </section>

            {/* SECTION 5 - DELIVERY FAILURE */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                5. Delivery Failure
              </h2>
              <p>You should contact us if:</p>

              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>You did not receive access to your digital product</li>
                <li>You cannot download or view your purchased files</li>
                <li>You did not receive project deliverables within agreed timelines</li>
              </ul>

              <p className="mt-3">
                We aim to resolve delivery issues within  
                <span className="text-lime-300 font-semibold"> 24–48 hours.</span>
              </p>
            </section>

            {/* SECTION 6 - CONTACT */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                6. Contact For Delivery Issues
              </h2>
              <p>If you have questions about delivery or failed access, you may contact:</p>

              <p className="mt-3 font-semibold text-lime-300">
                delivery@cookmytech.com
              </p>

              <p className="text-gray-400 mt-2">
                Cookmytech Headquarters, Sector 62, Noida, India
              </p>
            </section>

            {/* SECTION 7 - POLICY UPDATES */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                7. Updates to This Policy
              </h2>
              <p>
                Cookmytech may update this Shipping & Delivery Policy from time 
                to time. Any changes will be posted on this page with the latest 
                revision date.
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
