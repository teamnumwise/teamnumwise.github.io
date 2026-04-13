const footerLinks = {
  services: [
    { name: "Bookkeeping", href: "#services" },
    { name: "Accounting", href: "#services" },
    { name: "Tax Preparation", href: "#services" },
    { name: "CFO Advisory", href: "#services" },
    { name: "Payroll Services", href: "#services" },
    { name: "Financial Reporting", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  industries: [
    { name: "Technology & SaaS", href: "#" },
    { name: "E-Commerce", href: "#" },
    { name: "Healthcare", href: "#" },
    { name: "Professional Services", href: "#" },
    { name: "Startups", href: "#" },
    { name: "Non-Profits", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-binance-dark pt-[80px] pb-[32px] border-t border-binance-card">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Top Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-[64px]">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <svg
                className="w-8 h-8 text-binance-yellow"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-[20px] font-bold text-binance-white tracking-tight">
                NumWise
              </span>
            </a>
            <p className="text-binance-slate text-[14px] leading-[1.50] font-medium mb-6 max-w-sm">
              Expert accounting, bookkeeping, and financial advisory services
              that help growing businesses gain clarity, save money, and scale
              confidently.
            </p>
            <div className="mb-8">
              <a 
                href="mailto:info@numwise.co" 
                className="text-binance-white hover:text-binance-yellow transition-200 text-[14px] font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-binance-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@numwise.co
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                {
                  name: "Twitter",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  name: "Facebook",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-[6px] bg-binance-card hover:bg-binance-snow/10 flex items-center justify-center text-binance-slate hover:text-binance-white transition-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-binance-white font-bold text-[16px] mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[14px] text-binance-slate hover:text-binance-white transition-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-binance-white font-bold text-[16px] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[14px] text-binance-slate hover:text-binance-white transition-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-binance-white font-bold text-[16px] mb-4">
              Industries
            </h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[14px] text-binance-slate hover:text-binance-white transition-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-binance-card rounded-[12px] p-8 mb-[64px] border border-binance-border/10 shadow-binance-subtle">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-binance-white font-bold text-[20px] mb-2 leading-[1.00]">
                Stay updated
              </h4>
              <p className="text-binance-slate text-[14px] font-medium leading-[1.50]">
                Get expert tips, tax deadlines, and growth strategies delivered to
                your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow md:w-64 px-4 py-2.5 rounded-[8px] bg-binance-dark border border-binance-border/20 text-binance-white placeholder-binance-slate text-[14px] focus:border-binance-yellow focus:outline-none transition-200"
              />
              <button className="px-6 py-2.5 rounded-[6px] bg-binance-yellow text-binance-ink text-[14px] font-semibold hover:bg-binance-focus hover:text-white transition-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-binance-card flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-binance-slate">
            &copy; {new Date().getFullYear()} NumWise. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[12px]">
            <a href="#" className="text-binance-slate hover:text-binance-white transition-200">
              Privacy Policy
            </a>
            <a href="#" className="text-binance-slate hover:text-binance-white transition-200">
              Terms of Service
            </a>
            <a href="#" className="text-binance-slate hover:text-binance-white transition-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
