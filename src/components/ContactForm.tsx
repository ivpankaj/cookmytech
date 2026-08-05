"use client";

import { useState, FormEvent } from "react";
import TechIcon from "./TechIcon";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // Send directly from client browser to FormSubmit service targeting imvpankaj@gmail.com
      const res = await fetch("https://formsubmit.co/ajax/imvpankaj@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[CookMyTech Inquiry] New message from ${formData.name}`,
          _template: "table",
          _captcha: "false",
          Name: formData.name,
          Email: formData.email,
          "Project Type": formData.project || "Not specified",
          Message: formData.message,
          SubmittedAt: new Date().toLocaleString(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", project: "", message: "" });
      } else {
        // Fallback to local API route if external service fails
        const localRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (localRes.ok) {
          setSubmitted(true);
          setFormData({ name: "", email: "", project: "", message: "" });
        } else {
          setErrorMsg("Failed to send message. Please try again.");
        }
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { label: "Gmail", slug: "gmail", href: "mailto:imvpankaj@gmail.com" },
    { label: "LinkedIn", slug: "linkedin", href: "https://linkedin.com/company/cookmytech" },
    { label: "GitHub", slug: "github", href: "https://github.com/cookmytech" },
    { label: "X", slug: "x", href: "https://x.com/cookmytech" },
  ];

  return (
    <section id="contact" className="border-b border-black bg-white font-mono">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Get In Touch
          </div>
          <h2
            className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-none"
            style={{ fontWeight: 800 }}
          >
            START A PROJECT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* FORM */}
          <div className="py-12 lg:pr-12 lg:border-r border-black">
            {submitted ? (
              <div className="p-8 border border-black bg-gray-50 text-center space-y-4">
                <h3 className="font-display text-2xl font-bold">MESSAGE RECEIVED</h3>
                <p className="text-sm text-gray-600">
                  Thank you for reaching out! Our engineering team will review your project brief and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-black text-white text-xs uppercase tracking-widest px-6 py-3 border border-black hover:bg-white hover:text-black transition-colors font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Contact CookMyTech Engineering Team">
                {errorMsg && (
                  <div className="p-4 mb-6 border border-red-600 bg-red-50 text-red-700 text-xs font-bold uppercase">
                    {errorMsg}
                  </div>
                )}

                <div className="border border-black border-b-0">
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-widest text-gray-500 px-4 pt-3 font-bold"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-transparent px-4 pb-3 pt-1 text-sm placeholder-gray-400 focus:bg-gray-50 transition-colors"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="border border-black border-b-0">
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-widest text-gray-500 px-4 pt-3 font-bold"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full bg-transparent px-4 pb-3 pt-1 text-sm placeholder-gray-400 focus:bg-gray-50 transition-colors"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="border border-black border-b-0">
                  <label
                    htmlFor="project"
                    className="block text-xs uppercase tracking-widest text-gray-500 px-4 pt-3 font-bold"
                  >
                    Project Type
                  </label>
                  <input
                    id="project"
                    name="project"
                    type="text"
                    value={formData.project}
                    onChange={handleChange}
                    placeholder="Web App, AI SaaS, Architecture, API..."
                    className="w-full bg-transparent px-4 pb-3 pt-1 text-sm placeholder-gray-400 focus:bg-gray-50 transition-colors"
                  />
                </div>

                <div className="border border-black">
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest text-gray-500 px-4 pt-3 font-bold"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about what you're building..."
                    className="w-full bg-transparent px-4 pb-3 pt-1 text-sm placeholder-gray-400 resize-none focus:bg-gray-50 transition-colors"
                    required
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white text-xs uppercase tracking-widest py-4 border border-black hover:bg-white hover:text-black transition-colors duration-150 mt-[-1px] font-bold disabled:opacity-50"
                >
                  {loading ? "SENDING MESSAGE..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>

          {/* CONTACT INFO */}
          <div className="py-12 lg:pl-12 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-600 leading-loose mb-10 max-w-sm">
                We typically respond within one business day. If you have an urgent launch deadline, let us know — we match your team's urgency.
              </p>

              <div className="space-y-0">
                {[
                  { label: "Direct Email", value: "imvpankaj@gmail.com" },
                  { label: "Response Time", value: "< 24 hours" },
                  { label: "Availability", value: "Accepting projects now" },
                  { label: "Location", value: "Remote / Worldwide" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-4 border-b border-black text-sm"
                  >
                    <span className="text-gray-500 text-xs uppercase tracking-widest font-mono">
                      {item.label}
                    </span>
                    <span className="font-mono font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-0">
              {socialLinks.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit CookMyTech on ${s.label}`}
                  className={`flex items-center gap-2 text-xs uppercase tracking-widest px-4 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-150 group ${
                    i > 0 ? "ml-[-1px]" : ""
                  }`}
                >
                  <TechIcon name={s.slug} size={16} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
