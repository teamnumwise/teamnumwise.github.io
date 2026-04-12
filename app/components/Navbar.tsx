"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-binance-white border-b border-binance-border h-[64px] flex items-center">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <svg
              className="w-8 h-8 text-binance-yellow"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-binance-ink">
              NumWise
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 ml-auto mr-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-semibold text-binance-text hover:text-binance-hover transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a href="#contact" className="btn-primary-pill text-[16px]">
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-binance-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[64px] left-0 right-0 bg-binance-white border-b border-binance-border transition-all duration-300 lg:hidden overflow-hidden ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2 shadow-binance-subtle">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 px-4 rounded-md text-[16px] font-semibold text-binance-text hover:bg-binance-snow"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2 px-4">
            <a
              href="#contact"
              className="btn-primary-pill w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
