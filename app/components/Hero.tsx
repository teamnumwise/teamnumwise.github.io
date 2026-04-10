export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-violet-100/50 rounded-full blur-[100px]" />
        <div className="absolute inset-0 dot-pattern opacity-[0.25]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200/60">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-sky-700">
                Trusted by 500+ businesses nationwide
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Smart Accounting
              <br />
              <span className="gradient-text">for Growing</span>
              <br />
              Businesses
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-xl">
              Expert bookkeeping, tax preparation, and CFO advisory services
              that give you financial clarity, save you money, and let you focus
              on building your business.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 hover:scale-[1.03] btn-shine"
              >
                Schedule a Consultation
                <svg
                  className="ml-2 w-5 h-5"
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
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-semibold text-base hover:border-sky-300 hover:text-sky-600 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Mini Stats */}
            <div className="flex items-center gap-6 sm:gap-8 pt-4">
              <div>
                <div className="text-2xl font-extrabold text-slate-900">
                  $50M+
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  Tax Savings
                </div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <div className="text-2xl font-extrabold text-slate-900">
                  99.8%
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  Accuracy Rate
                </div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <div className="text-2xl font-extrabold text-slate-900">
                  15+
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative lg:pl-8">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Financial analytics dashboard showing revenue growth charts"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating Card - Revenue */}
            <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 animate-float border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Revenue Growth
                  </div>
                  <div className="text-xs text-emerald-500 font-semibold">
                    +32% this quarter
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card - Tax */}
            <div className="absolute -top-3 -right-3 sm:-right-6 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 animate-float-delay border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-sky-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Tax Filed
                  </div>
                  <div className="text-xs text-sky-500 font-semibold">
                    Saved $12,400
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
