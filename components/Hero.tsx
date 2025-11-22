'use client';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        {/* Hero Text */}
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal-800 mb-4 leading-tight tracking-tight">
            The Quarter Zip.
            <br />
            <span className="italic font-light">Elevated.</span>
          </h1>
          <p className="text-lg text-charcoal-600 leading-relaxed">
            Curated from the finest menswear brands. Compare prices, discover styles, and find your perfect fit.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-2 text-right">
          <div className="text-3xl font-bold text-charcoal-800">200+</div>
          <div className="text-sm text-charcoal-600 tracking-wide uppercase">Styles Available</div>
        </div>
      </div>
    </section>
  );
}