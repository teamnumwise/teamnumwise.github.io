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
    <section id="about" className="relative py-16 lg:py-20 bg-black overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-semibold mb-6">
              Why Choose NumWise
            </span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Numbers That Speak{" "}
            <span className="gradient-text">for Themselves</span>
          </h2>
          <p className="reveal text-lg text-slate-400 leading-relaxed">
            We don&apos;t just track your finances — we transform them into your
            competitive advantage. Here&apos;s why businesses trust NumWise.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${i + 1} text-center p-8 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-all duration-500`}
            >
              <div className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white number-glow mb-3">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="text-sm sm:text-base text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Row */}
        <div className="reveal mt-16 pt-16 border-t border-white/[0.06]">
          <p className="text-center text-sm text-slate-500 mb-8 font-medium uppercase tracking-wider">
            Trusted integrations & partnerships
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 opacity-40">
            {["QuickBooks", "Xero", "Gusto", "Stripe", "Shopify", "FreshBooks"].map(
              (name) => (
                <span
                  key={name}
                  className="text-white font-bold text-lg sm:text-xl tracking-tight"
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
