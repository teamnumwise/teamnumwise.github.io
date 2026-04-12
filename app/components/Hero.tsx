"use client";

const TICKER_ITEMS = [
  { symbol: "BTC", price: "$62,481.20", change: "+2.31%", up: true },
  { symbol: "ETH", price: "$3,142.08",  change: "+1.87%", up: true },
  { symbol: "BNB", price: "$582.40",    change: "-0.42%", up: false },
  { symbol: "SOL", price: "$148.90",    change: "+4.12%", up: true },
  { symbol: "XRP", price: "$0.5821",    change: "-1.05%", up: false },
  { symbol: "ADA", price: "$0.4391",    change: "+0.78%", up: true },
];

export default function Hero() {
  return (
    <div className="mt-[64px]">
      {/* ── Crypto Price Ticker Strip ── */}
      <div className="bg-binance-white w-full border-b border-binance-border overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="flex items-center w-full overflow-x-auto scrollbar-hide py-2">
            {TICKER_ITEMS.map((item, index) => (
              <div 
                key={item.symbol} 
                className={`flex items-center gap-2 pr-6 whitespace-nowrap ${
                  index !== 0 ? 'pl-6 border-l border-binance-border' : ''
                }`}
              >
                <span className="text-[14px] font-semibold text-binance-ink">{item.symbol}</span>
                <span className="text-[14px] font-medium text-binance-ink">{item.price}</span>
                <span
                  className="text-[12px] font-semibold"
                  style={{ color: item.up ? "#0ECB81" : "#F6465D" }}
                >
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative bg-binance-white overflow-hidden py-[48px] lg:py-[80px]">
        <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-[48px] lg:gap-[64px] items-center">

            {/* ── Left: Text Content ── */}
            <div className="flex flex-col gap-[24px]">
              
              {/* Headline */}
              <h1 className="font-bold text-binance-ink text-[40px] md:text-[60px] leading-[1.08] tracking-tight">
                Smart Accounting<br />
                for Growing<br />
                Businesses
              </h1>

              {/* Subtitle */}
              <p className="text-binance-slate text-[20px] font-medium leading-[1.50] max-w-[480px]">
                Expert bookkeeping, tax preparation, and CFO advisory services
                that give you financial clarity, save you money, and let you focus
                on building your business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-[16px] pt-[8px]">
                <a href="#contact" className="btn-primary-pill text-binance-ink hover:text-binance-white w-full sm:w-auto">
                  Schedule a Consultation
                </a>
                <a href="#services" className="btn-secondary-pill w-full sm:w-auto">
                  Explore Services
                </a>
              </div>

              {/* Mini Stats */}
              <div className="flex flex-wrap items-center gap-x-[32px] gap-y-[16px] pt-[24px] mt-[16px] border-t border-binance-border">
                {[
                  { value: "$50M+",  label: "Tax Savings" },
                  { value: "99.8%",  label: "Accuracy Rate" },
                  { value: "15+",    label: "Years Experience" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-bold text-binance-ink text-[24px] leading-[1.08]">
                      {stat.value}
                    </div>
                    <div className="text-binance-slate text-[14px] font-medium mt-[4px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Product Mockup ── */}
            <div className="relative flex items-center justify-center lg:justify-end xl:translate-x-12 mt-8 lg:mt-0">
              
              {/* Subtle Back Glow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-[60px] opacity-40 mix-blend-multiply"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "radial-gradient(circle, #F0B90B 0%, #F8D12F 60%, transparent 100%)",
                  zIndex: 0
                }}
              />

              {/* Main Device Layout */}
              <div className="relative z-10 w-full max-w-[500px] aspect-[4/3] rounded-[24px] shadow-binance-hover border-4 border-binance-white bg-binance-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="NumWise Dashboard"
                  className="w-full h-full object-cover opacity-90"
                  loading="eager"
                />
                
                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-binance-dark/80 via-transparent to-transparent" />
                
                {/* In-Mockup Overlay Data */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between bg-binance-card/90 backdrop-blur-md rounded-[12px] p-4 border border-binance-border/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-[8px] bg-binance-yellow/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-binance-yellow" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-binance-white text-[14px] font-bold">NumWise Portfolio</div>
                        <div className="text-binance-slate text-[12px] font-medium">Real-time sync</div>
                      </div>
                    </div>
                    <div className="text-crypto-green font-bold text-[16px]">+24.5%</div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 1 - Bottom Left */}
              <div className="absolute z-20 bg-binance-white rounded-[12px] p-[16px] shadow-binance-pill border border-binance-border -bottom-6 -left-6 sm:bottom-4 sm:-left-12 min-w-[180px]">
                <div className="flex items-center gap-[12px]">
                  <div className="flex flex-shrink-0 items-center justify-center w-[40px] h-[40px] rounded-[6px] bg-crypto-green/10">
                    <svg className="w-5 h-5 text-crypto-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-binance-ink">Revenue Growth</div>
                    <div className="text-[12px] font-bold text-crypto-green mt-0.5">+32% this quarter</div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 2 - Top Right */}
              <div className="absolute z-20 bg-binance-white rounded-[12px] p-[14px] shadow-binance-pill border border-binance-border -top-6 -right-6 sm:-top-8 sm:-right-8 min-w-[160px]">
                <div className="text-[12px] font-bold text-binance-slate mb-1">TAX SAVED YTD</div>
                <div className="text-[24px] font-bold text-binance-ink leading-[1.08]">$142,800</div>
                <div className="flex items-center gap-1 mt-1 text-[12px] font-bold text-crypto-green">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  vs last year
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
