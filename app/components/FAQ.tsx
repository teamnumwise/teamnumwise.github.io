"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What makes NumWise different from other accounting firms?",
    a: "NumWise combines the expertise of seasoned CPAs and CFOs with modern technology. We don't just crunch numbers — we provide strategic financial guidance, real-time dashboards, and proactive tax planning.",
  },
  {
    q: "How much do your services cost?",
    a: "Our pricing is customized based on your specific needs, business size, and the services required. Plans start at $500/month for basic bookkeeping and scale based on complexity.",
  },
  {
    q: "What accounting software do you work with?",
    a: "We primarily work with QuickBooks Online, Xero, and NetSuite, but we have experience with virtually every major accounting platform. We can also help migrate your existing data.",
  },
  {
    q: "How quickly can you get started with my business?",
    a: "Our typical onboarding takes 1-2 weeks. We handle everything — connecting your bank accounts, setting up your chart of accounts, migrating historical data, and producing your first set of financials.",
  },
  {
    q: "Is NumWise suitable for startups and small businesses?",
    a: "Absolutely. We work with businesses at every stage — from pre-revenue startups to established companies doing $50M+ in revenue. Our Startup Booster package is specifically designed for early-stage companies.",
  },
  {
    q: "How do you ensure the security of our financial data?",
    a: "We take data security extremely seriously. All data is encrypted in transit and at rest using bank-level encryption. We use secure, SOC 2 compliant cloud systems and enforce multi-factor authentication.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[64px] lg:py-[80px] bg-binance-white border-t border-binance-border">
      <div className="w-full max-w-[800px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-[64px]">
          <h2 className="text-[34px] font-bold text-binance-ink mb-4 leading-[1.00]">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] font-medium text-binance-slate leading-[1.50]">
            Everything you need to know about working with NumWise.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-[16px]">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-[12px] border transition-200 ${
                openIndex === i
                  ? "border-binance-yellow bg-binance-white shadow-binance-subtle"
                  : "border-binance-border bg-binance-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={openIndex === i}
              >
                <span
                  className={`text-[16px] font-semibold transition-colors ${
                    openIndex === i ? "text-binance-yellow" : "text-binance-ink"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-[6px] flex items-center justify-center transition-transform duration-300 ${
                    openIndex === i
                      ? "text-binance-yellow rotate-180"
                      : "text-binance-slate"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
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
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0 text-[14px] font-medium text-binance-slate leading-[1.50]">
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
