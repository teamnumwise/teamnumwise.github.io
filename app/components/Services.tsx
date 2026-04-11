const services = [
  {
    title: "CFO Services",
    description:
      "Get expert guidance on financial strategy, due diligence, and investor relations to drive profitability and growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    bg: "bg-black",
    textColor: "text-white",
    descColor: "text-slate-300",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    arrowBg: "bg-white/20",
    arrowColor: "text-white",
    border: "border border-black",
  },
  {
    title: "Accounting Services",
    description:
      "From day-to-day tasks to financial reporting, we keep your books accurate and up-to-date so you can make informed decisions.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    bg: "bg-black",
    textColor: "text-white",
    descColor: "text-slate-300",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    arrowBg: "bg-white/20",
    arrowColor: "text-white",
    border: "border border-black",
  },
  {
    title: "Business Tax Services",
    description:
      "Stay compliant and optimize your tax position with our proactive planning and expert filing services.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    bg: "bg-black",
    textColor: "text-white",
    descColor: "text-slate-300",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    arrowBg: "bg-white/20",
    arrowColor: "text-white",
    border: "border border-black",
  },
  {
    title: "Bookkeeping Services",
    description:
      "Let us handle the numbers so you can focus on running your business. We make bookkeeping hassle-free.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    bg: "bg-black",
    textColor: "text-white",
    descColor: "text-slate-300",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    arrowBg: "bg-white/20",
    arrowColor: "text-white",
    border: "border border-black",
  },
  {
    title: "409A Valuation Services",
    description:
      "Achieve financial compliance and strategic edge with our specialized 409A valuation services, allowing you to issue equity confidently while focusing on growing your business.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    bg: "bg-black",
    textColor: "text-white",
    descColor: "text-slate-300",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    arrowBg: "bg-white/20",
    arrowColor: "text-white",
    border: "border border-black",
  },
  {
    title: "Payroll Services",
    description:
      "Our expert team ensures accurate, timely payments and tax filings, giving you peace of mind and the reliability your employees deserve.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    bg: "bg-black",
    textColor: "text-white",
    descColor: "text-slate-300",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    arrowBg: "bg-white/20",
    arrowColor: "text-white",
    border: "border border-black",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold mb-6">
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

        {/* Grid - 2 columns like the Indinero reference */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group relative ${service.bg} ${service.border} rounded-3xl p-8 lg:p-10 card-lift cursor-default overflow-hidden`}
            >
              {/* Top row: icon + arrow */}
              <div className="flex items-start justify-between mb-8">
                <div
                  className={`w-14 h-14 rounded-2xl ${service.iconBg} ${service.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                >
                  {service.icon}
                </div>
                <div
                  className={`w-12 h-12 rounded-full ${service.arrowBg} ${service.arrowColor} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                >
                  <svg
                    className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3
                className={`text-xl lg:text-2xl font-bold ${service.textColor} mb-3`}
              >
                {service.title}
              </h3>
              <p
                className={`${service.descColor} leading-relaxed text-[0.95rem] lg:text-base`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
