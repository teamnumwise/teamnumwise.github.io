"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

/* ======= Industries Section ======= */
const industries = [
  {
    name: "Technology & SaaS",
    desc: "R&D credits, revenue recognition, SaaS metrics",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "E-Commerce",
    desc: "Inventory, multi-channel sales tax, marketplace integrations",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    desc: "Compliance, revenue cycles, practice management",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Professional Services",
    desc: "Project accounting, capacity planning, profitability",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Startups",
    desc: "Fundraising financials, burn rate, cap table",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Non-Profits",
    desc: "Fund accounting, grant management, compliance",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function IndustriesSection() {
  return (
    <section className="py-[64px] lg:py-[80px] bg-binance-snow border-t border-binance-border">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-[64px]">
          <h2 className="text-[34px] font-bold text-binance-ink mb-4 leading-[1.00]">
            Industry-Specific Expertise
          </h2>
          <p className="text-[16px] font-medium text-binance-slate leading-[1.50]">
            Every industry has unique financial challenges. Our specialized teams
            bring deep domain expertise to deliver solutions tailored to your
            sector.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group bg-binance-white rounded-[12px] p-6 shadow-binance-subtle border border-binance-border transition-200 shadow-binance-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[6px] bg-binance-snow flex items-center justify-center text-binance-yellow">
                  {ind.icon}
                </div>
                <h3 className="text-[20px] font-bold text-binance-ink">
                  {ind.name}
                </h3>
              </div>
              <p className="text-[14px] font-medium text-binance-slate leading-[1.50]">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======= CTA Section ======= */
function CTASection() {
  const benefits = [
    "Dedicated account manager & CPA team",
    "Real-time financial dashboard access",
    "Month-to-month — no long-term contracts",
    "Onboarding completed in under 2 weeks",
    "SOC 2 compliant & 256-bit encryption",
  ];

  return (
    <section id="contact" className="py-[64px] lg:py-[80px] bg-binance-dark border-t border-binance-card">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="rounded-[24px] bg-binance-card p-8 lg:p-16 border border-binance-border/10 shadow-binance-subtle flex flex-col items-center text-center">
          <h2 className="text-[40px] md:text-[48px] font-bold text-binance-white tracking-tight mb-6 leading-[1.08]">
            Know Your Numbers.
            <br />
            <span className="text-binance-yellow">Grow Your Vision.</span>
          </h2>

          <p className="text-[18px] text-binance-slate font-medium leading-[1.50] mb-8 max-w-2xl">
            Schedule a free consultation and discover how NumWise can bring clarity to your
            finances, save you money, and fuel your next stage of growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full justify-center">
            <a href="#" className="btn-primary-pill text-[16px] px-10">
              Schedule a Free Consultation
            </a>
            <a
              href="tel:+18001234567"
              className="btn-secondary-pill text-binance-white bg-transparent border-binance-slate hover:bg-binance-hover hover:border-binance-hover hover:text-white text-[16px] px-10"
            >
              (800) 123-4567
            </a>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 text-binance-slate text-[14px] font-medium">
                <svg className="w-4 h-4 text-crypto-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======= Main Page ======= */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Process />
        <IndustriesSection />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
