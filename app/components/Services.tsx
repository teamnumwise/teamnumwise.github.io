const services = [
  {
    title: "Bookkeeping",
    description:
      "Accurate, timely financial records with monthly reconciliation, categorization, and reporting so you always know where your money stands.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "from-sky-500 to-cyan-400",
    bg: "bg-sky-50",
    text: "text-sky-600",
  },
  {
    title: "Accounting",
    description:
      "Comprehensive financial management including AP/AR, financial statements, and general ledger oversight by experienced CPAs.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-violet-500 to-purple-400",
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
  {
    title: "Tax Preparation",
    description:
      "Strategic tax planning and filing that maximizes your deductions and keeps you compliant. Year-round support, not just at tax time.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    title: "CFO Advisory",
    description:
      "Strategic financial guidance from seasoned CFOs. Cash flow forecasting, budgeting, fundraising support, and growth strategy.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: "from-amber-500 to-orange-400",
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
  {
    title: "Payroll Services",
    description:
      "Streamlined payroll processing, tax withholding, benefits administration, and compliance so your team gets paid accurately and on time.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "from-rose-500 to-pink-400",
    bg: "bg-rose-50",
    text: "text-rose-600",
  },
  {
    title: "Financial Reporting",
    description:
      "Clear, actionable financial reports and dashboards with real-time insights. P&L statements, balance sheets, and cash flow analysis.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "from-indigo-500 to-blue-400",
    bg: "bg-indigo-50",
    text: "text-indigo-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/60 text-sky-600 text-sm font-semibold mb-6">
              Our Services
            </span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Stay Ahead</span>
          </h2>
          <p className="reveal text-lg text-slate-500 leading-relaxed">
            From daily bookkeeping to strategic CFO guidance, we provide
            end-to-end financial services tailored to your business stage and
            industry.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group relative bg-white rounded-2xl p-8 border border-slate-100 card-lift cursor-default`}
            >
              {/* Gradient hover overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.text} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-[0.95rem]">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-sky-500 transition-colors">
                Learn more
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          ))}
        </div>
      </div>
    </section>
  );
}
