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
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
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
    <section
      id="testimonials"
      className="py-16 lg:py-20 bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-semibold mb-6">
              Client Success Stories
            </span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Real Accountants. Real Insights.{" "}
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="reveal text-lg text-slate-500 leading-relaxed">
            Join hundreds of business leaders who trust NumWise to manage their
            finances, optimize their operations, and accelerate growth.
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} break-inside-avoid group bg-white rounded-2xl p-7 lg:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-500`}
            >
              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <blockquote className="text-slate-600 leading-relaxed mt-5 mb-7 text-[0.95rem]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-sm text-slate-400">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="reveal mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 border border-slate-100">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-slate-900">500+</span>{" "}
              <span className="text-slate-500">businesses trust NumWise</span>
            </div>
            <div className="flex gap-0.5 ml-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 text-amber-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
