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
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "E-Commerce",
    desc: "Inventory, multi-channel sales tax, marketplace integrations",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Healthcare",
    desc: "Compliance, revenue cycles, practice management",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Professional Services",
    desc: "Project accounting, capacity planning, profitability",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Startups",
    desc: "Fundraising financials, burn rate, cap table",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Non-Profits",
    desc: "Fund accounting, grant management, compliance",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80",
  },
];

function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-600 text-sm font-semibold mb-6">
              Industries We Serve
            </span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Industry-Specific{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="reveal text-lg text-slate-500 leading-relaxed">
            Every industry has unique financial challenges. Our specialized teams
            bring deep domain expertise to deliver solutions tailored to your
            sector.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group relative rounded-2xl overflow-hidden cursor-default`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/20" />
              </div>

              {/* Content */}
              <div className="relative p-8 flex flex-col justify-end min-h-[240px]">
                <div className="text-white/70 mb-3 group-hover:text-sky-400 transition-colors">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {ind.name}
                </h3>
                <p className="text-sm text-slate-300">{ind.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-sky-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======= CTA Section ======= */
function CTASection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/[0.04] rounded-2xl rotate-12" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/[0.04] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-8">
            Ready to Get Started?
          </span>
        </div>

        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Transform Your{" "}
          <span className="gradient-text">Financial Operations</span>{" "}
          Today
        </h2>

        <p className="reveal text-lg lg:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          Join 500+ businesses that trust NumWise for their accounting,
          bookkeeping, and strategic financial needs. Schedule a free
          consultation to see how we can help.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold text-lg shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 hover:scale-[1.03] btn-shine"
          >
            Schedule a Free Consultation
            <svg
              className="ml-3 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="tel:+18001234567"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold text-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Us
          </a>
        </div>

        {/* Trust Badges */}
        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            SOC 2 Compliant
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            256-bit Encryption
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            No Long-term Contracts
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======= Main Page ======= */
export default function Home() {
  // Initialize scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
