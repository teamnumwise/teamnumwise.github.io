const steps = [
  {
    number: "1",
    title: "Free Consultation",
    description: "We start with an in-depth conversation to understand your business, challenges, and financial goals.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Custom Strategy",
    description: "Our experts analyze your financial data and create a tailored plan — the right services, tools, and approach.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Seamless Onboarding",
    description: "Connect your accounts, migrate your data, and get everything set up with zero disruption to your workflow.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Ongoing Partnership",
    description: "From monthly reporting to strategic advice, we become the financial partner you can rely on to grow.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-[64px] lg:py-[80px] bg-binance-white">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-[64px]">
          <h2 className="text-[28px] font-medium text-binance-ink mb-4 leading-[1.00]">
            Getting Started is Simple
          </h2>
          <p className="text-[16px] font-medium text-binance-slate leading-[1.50]">
            We&apos;ve streamlined our onboarding process so you can get back to doing
            what you do best — running your business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative text-center p-6 bg-binance-white border border-binance-border rounded-[12px] shadow-binance-subtle"
            >
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-[50px] bg-binance-yellow text-binance-ink text-[16px] font-bold mb-4">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-[20px] font-bold text-binance-ink mb-2">
                {step.title}
              </h3>
              <p className="text-[14px] text-binance-slate leading-[1.50] font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
