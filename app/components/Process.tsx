const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We start with an in-depth conversation to understand your business, challenges, and financial goals. No commitment needed — just clarity.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Custom Strategy",
    description:
      "Our experts analyze your financial data and create a tailored plan — the right services, tools, and approach for your specific business needs.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Seamless Onboarding",
    description:
      "We handle the heavy lifting. Connect your accounts, migrate your data, and get everything set up with zero disruption to your operations.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ongoing Partnership",
    description:
      "From monthly reporting to strategic advice, we become the financial partner you can rely on. Continuous support to drive your growth.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200/60 text-violet-600 text-sm font-semibold mb-6">
              Our Process
            </span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Getting Started is{" "}
            <span className="gradient-text">Simple</span>
          </h2>
          <p className="reveal text-lg text-slate-500 leading-relaxed">
            We&apos;ve streamlined our onboarding process so you can get back to doing
            what you do best — running your business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} relative group`}
            >
              {/* Connector Line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] right-0 h-[2px] z-0">
                  <div className="w-full h-full bg-gradient-to-r from-sky-200 to-slate-200 rounded-full" />
                </div>
              )}

              <div className="relative z-10 text-center">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 text-white text-2xl font-extrabold mb-6 shadow-lg shadow-sky-500/20 group-hover:scale-110 group-hover:shadow-sky-500/30 transition-all duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-[0.95rem]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
