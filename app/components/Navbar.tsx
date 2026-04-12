"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from document class
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

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

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-binance-slate hover:text-binance-ink hover:bg-binance-snow transition-200"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                /* Sun Icon for Dark Mode (to switch to light) */
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                /* Moon Icon for Light Mode (to switch to dark) */
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
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
