"use client";

import { useEffect, useRef, useState } from "react";

function Counter({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2200;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min(
              (timestamp - startTime) / duration,
              1
            );
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = eased * end;
            setCount(
              decimals > 0
                ? parseFloat(current.toFixed(decimals))
                : Math.floor(current)
            );
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Clients Served", prefix: "" },
  { value: 50, suffix: "M+", label: "Tax Savings Delivered", prefix: "$" },
  { value: 99.8, suffix: "%", label: "Accuracy Rate", prefix: "", decimals: 1 },
  { value: 15, suffix: "+", label: "Years of Experience", prefix: "" },
];

export default function Stats() {
  return (
    <section id="about" className="py-[64px] lg:py-[80px] bg-binance-dark">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-[64px]">
          <h2 className="text-[34px] font-bold text-binance-white mb-4 leading-[1.00]">
            Trusted by Growing Businesses
          </h2>
          <p className="text-[16px] font-medium text-binance-slate leading-[1.50]">
            We don&apos;t just track your finances — we transform them into your
            competitive advantage.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-[12px] bg-binance-card border border-binance-card shadow-binance-subtle"
            >
              <div className="text-[40px] font-bold text-binance-white mb-2 leading-[1.08]">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="text-[14px] text-binance-slate font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Row */}
        <div className="mt-[64px] pt-[32px] border-t border-binance-card">
          <p className="text-center text-[12px] text-binance-muted mb-8 font-semibold uppercase tracking-wide">
            Trusted integrations & partnerships
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 opacity-60">
            {["QuickBooks", "Xero", "Gusto", "Stripe", "Shopify", "FreshBooks"].map(
              (name) => (
                <span
                  key={name}
                  className="text-binance-slate font-bold text-[20px] tracking-tight"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
