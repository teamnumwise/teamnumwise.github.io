const testimonials = [
  {
    quote:
      "NumWise transformed our financial operations. Their bookkeeping accuracy is impeccable, and the CFO advisory helped us secure our Series A funding round. They're not just accountants — they're strategic partners who genuinely care about our growth.",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechFlow Solutions",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    quote:
      "Switching to NumWise saved us over $180K in taxes last year. Their proactive approach to tax planning and the real-time financial dashboard give us complete visibility into our business. Best decision we've made.",
    name: "David Chen",
    role: "Founder & CEO",
    company: "Nexora Labs",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    quote:
      "As a fast-growing e-commerce brand, we needed rock-solid financials. NumWise handles everything from inventory accounting to multi-state sales tax compliance. They've been an incredible partner.",
    name: "Emily Rodriguez",
    role: "COO",
    company: "BrightSpace Commerce",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    quote:
      "The growth almost killed us multiple times. We had a million dollars in invoices that weren't coming in — the NumWise CFO team stepped in with strategies and cash flow planning. One year later, our consultants are booking 20% more revenue.",
    name: "Jay Boyer",
    role: "General Partner",
    company: "Facktor Healthcare",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    quote:
      "NumWise helped secure our most recent funding round and built data rooms that helped me close our financing. The main reason I'd recommend them is so business owners can spend less time working in the business and more time working on the business.",
    name: "Katie Spies",
    role: "Founder & CEO",
    company: "Maev Nutrition",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    quote:
      "Our investors constantly ask us why our books are always on time and why it's so easy for them to pull financials. There was a four-week timeline between incorporation and closing our first round — NumWise made it happen.",
    name: "Iba Masood",
    role: "Founder",
    company: "Optimal AI",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-binance-yellow"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[64px] lg:py-[80px] bg-binance-dark">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-[64px]">
          <h2 className="text-[34px] font-bold text-binance-white mb-4 leading-[1.00]">
            Real Accountants. Real Results.
          </h2>
          <p className="text-[16px] font-medium text-binance-slate leading-[1.50]">
            Join hundreds of business leaders who trust NumWise to manage their
            finances, optimize their operations, and accelerate growth.
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-[24px] space-y-[24px]">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="break-inside-avoid bg-binance-card rounded-[12px] p-6 border border-binance-card shadow-binance-subtle transition-200 shadow-binance-hover hover:border-binance-yellow/30"
            >
              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <blockquote className="text-binance-slate leading-[1.50] mt-4 mb-6 text-[14px] font-medium">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-binance-border/10">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold text-binance-white text-[14px]">
                    {t.name}
                  </div>
                  <div className="text-[12px] text-binance-muted">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
