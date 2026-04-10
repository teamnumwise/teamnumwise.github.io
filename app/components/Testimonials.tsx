const testimonials = [
  {
    quote:
      "NumWise transformed our financial operations. Their bookkeeping accuracy is impeccable, and the CFO advisory helped us secure our Series A. They're not just accountants — they're strategic partners.",
    name: "Sarah Mitchell",
    role: "CEO, TechFlow Solutions",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    quote:
      "Switching to NumWise saved us over $180K in taxes last year. Their proactive approach to tax planning and the real-time dashboard give us complete financial visibility. Highly recommend.",
    name: "David Chen",
    role: "Founder, Nexora Labs",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
  {
    quote:
      "As a fast-growing e-commerce brand, we needed rock-solid financials. NumWise handles everything from inventory accounting to sales tax compliance. They've been incredible.",
    name: "Emily Rodriguez",
    role: "COO, BrightSpace Commerce",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
  },
];

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-600 text-sm font-semibold mb-6">
              Testimonials
            </span>
          </div>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Real Stories, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="reveal text-lg text-slate-500 leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            say about working with NumWise.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 leading-relaxed flex-grow mb-8 text-[0.95rem]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
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
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
