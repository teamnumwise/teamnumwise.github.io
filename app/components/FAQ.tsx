"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What makes NumWise different from other accounting firms?",
    a: "NumWise combines the expertise of seasoned CPAs and CFOs with modern technology. We don't just crunch numbers — we provide strategic financial guidance, real-time dashboards, and proactive tax planning. Our integrated team approach means you get bookkeepers, controllers, and advisors at a fraction of the cost of hiring in-house.",
  },
  {
    q: "How much do your services cost?",
    a: "Our pricing is customized based on your specific needs, business size, and the services required. Plans start at $500/month for basic bookkeeping and scale based on complexity. We offer month-to-month engagements with transparent, fixed pricing — no hidden fees or surprise charges.",
  },
  {
    q: "What accounting software do you work with?",
    a: "We primarily work with QuickBooks Online, Xero, and NetSuite, but we have experience with virtually every major accounting platform. We can also help migrate your existing data to a more suitable platform if needed, ensuring a seamless transition.",
  },
  {
    q: "How quickly can you get started with my business?",
    a: "Our typical onboarding takes 1-2 weeks. We handle everything — connecting your bank accounts, setting up your chart of accounts, migrating historical data, and producing your first set of clean financials. Many clients see their first reports within the first month.",
  },
  {
    q: "Is NumWise suitable for startups and small businesses?",
    a: "Absolutely. We work with businesses at every stage — from pre-revenue startups to established companies doing $50M+ in revenue. Our Startup Booster package is specifically designed for early-stage companies, providing essential bookkeeping, tax prep, and fundraising-ready financials.",
  },
  {
    q: "How do you ensure the security of our financial data?",
    a: "We take data security extremely seriously. All data is encrypted in transit and at rest using bank-level (256-bit) encryption. We use secure, SOC 2 compliant cloud systems, enforce multi-factor authentication, and follow strict access controls. Our team undergoes regular security training and background checks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-amber-600 text-sm font-semibold mb-6">
              FAQ
            </span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="reveal text-lg text-slate-500 leading-relaxed">
            Everything you need to know about working with NumWise. Can&apos;t
            find what you&apos;re looking for?{" "}
            <a href="#contact" className="text-sky-500 hover:text-sky-600 font-medium">
              Reach out to us
            </a>
            .
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-2xl border transition-all duration-300 ${
                openIndex === i
                  ? "border-sky-200 bg-sky-50/30 shadow-sm"
                  : "border-slate-100 bg-white hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                aria-expanded={openIndex === i}
              >
                <span
                  className={`font-semibold transition-colors ${
                    openIndex === i ? "text-sky-700" : "text-slate-900"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? "bg-sky-500 text-white rotate-180"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`accordion-body overflow-hidden ${
                  openIndex === i
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-slate-500 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
