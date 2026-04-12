const services = [
  {
    title: "CFO Services",
    description: "Get expert guidance on financial strategy, due diligence, and investor relations to drive profitability and growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Accounting Services",
    description: "From day-to-day tasks to financial reporting, we keep your books accurate and up-to-date so you can make informed decisions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Business Tax Services",
    description: "Stay compliant and optimize your tax position with our proactive planning and expert filing services.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
  {
    title: "Bookkeeping Services",
    description: "Let us handle the numbers so you can focus on running your business. We make bookkeeping hassle-free.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "409A Valuation Services",
    description: "Achieve financial compliance and strategic edge with our specialized 409A valuation services, allowing you to issue equity confidently.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Payroll Services",
    description: "Our expert team ensures accurate, timely payments and tax filings, giving you peace of mind and reliability.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[64px] lg:py-[80px] bg-binance-dark">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-[64px]">
          <h2 className="text-[34px] font-bold text-binance-white mb-4 leading-[1.00]">
            Everything You Need to Stay Ahead
          </h2>
          <p className="text-[16px] font-medium text-binance-slate leading-[1.50]">
            From daily bookkeeping to strategic CFO guidance, we provide
            end-to-end financial services tailored to your business stage and
            industry.
          </p>
        </div>

        {/* Grid - 3 columns as per Binance design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-binance-card rounded-[12px] p-6 shadow-binance-subtle border border-binance-card transition-200 shadow-binance-hover hover:border-binance-yellow/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[6px] bg-binance-yellow/10 flex items-center justify-center text-binance-yellow">
                  {service.icon}
                </div>
                <h3 className="text-[20px] font-bold text-binance-white">
                  {service.title}
                </h3>
              </div>

              <p className="text-binance-slate text-[14px] leading-[1.50] font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
