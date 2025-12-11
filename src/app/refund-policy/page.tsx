import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Cancellation & Refund Policy | Cookmytech",
  description:
    "Read Cookmytech’s Cancellation & Refund Policy to understand how refunds work for digital products, services, subscriptions and project-based work.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white font-bold">
      <Navbar />

      {/* HERO */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Cancellation & Refund Policy
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Our policy ensures transparency and fairness for all digital products,
            services, and subscriptions offered by Cookmytech.
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

            {/* SECTION 1 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                1. General Refund Policy
              </h2>
              <p>
                Cookmytech provides digital products and services including  
                Cookmypapers, CookmyAI, CookmyWebsite, CookmyMedia, SaaS tools,  
                and custom development projects.  
              </p>
              <p className="mt-3">
                Due to the nature of digital goods and instant access, refunds are 
                provided only under specific conditions mentioned below.
              </p>
            </section>

            {/* SECTION 2 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                2. Refund Eligibility for Digital Products
              </h2>
              <p>You may be eligible for a refund if:</p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>The product was not delivered or accessible</li>
                <li>You were charged incorrectly due to a payment error</li>
                <li>You report a major technical issue within 24 hours of purchase</li>
              </ul>
              <p className="mt-3">
                Refunds are <span className="text-lime-300 font-semibold">not provided</span> for:
              </p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Wrong purchase made by the user</li>
                <li>Change of mind after accessing the product</li>
                <li>Misuse of digital content or files</li>
                <li>Completion of downloadable/consumable products</li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                3. Subscription Refunds (SaaS / Monthly Plans)
              </h2>
              <p>For subscription services, such as AI tools or SaaS features:</p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Refunds are not issued for the current billing cycle</li>
                <li>You may cancel future renewals at any time</li>
                <li>Cancellation stops future charges, not previous payments</li>
              </ul>
            </section>

            {/* SECTION 4 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                4. Custom Services & Project Work
              </h2>
              <p>For custom software development, website projects, media work or research:</p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Upfront advance payments are non-refundable</li>
                <li>If the project has begun, partial refunds may be considered</li>
                <li>Completed milestones are fully billable and non-refundable</li>
              </ul>
              <p className="mt-3">
                Cookmytech reserves the right to evaluate each case individually.
              </p>
            </section>

            {/* SECTION 5 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                5. Cancellation Policy
              </h2>
              <p>You may request cancellation for:</p>
              <ul className="list-disc ml-8 mt-3 space-y-2">
                <li>Subscriptions (will not renew next cycle)</li>
                <li>Custom service work not yet started</li>
                <li>Errors made during payment</li>
              </ul>
              <p className="mt-3">
                We do not cancel or refund digital purchases after access is granted.
              </p>
            </section>

            {/* SECTION 6 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                6. Processing Time for Refunds
              </h2>
              <p>
                Approved refunds are processed within  
                <span className="text-lime-300 font-semibold"> 5–10 business days</span>  
                to the original payment method.
              </p>
            </section>

            {/* SECTION 7 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                7. Contact for Refund Requests
              </h2>
              <p>If you believe you are eligible for a refund, contact us at:</p>

              <p className="mt-3 font-semibold text-lime-300">
                refunds@cookmytech.com
              </p>

              <p className="text-gray-400 mt-2">
                Include your name, order ID, email, and reason for the request.
              </p>
            </section>

            {/* SECTION 8 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                8. Policy Updates
              </h2>
              <p>
                Cookmytech reserves the right to modify this policy at any time.
                Updates will be posted here with the latest revision date.
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
