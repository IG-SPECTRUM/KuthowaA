"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "My hair has never been less frizzy in the mornings. The quality of Kuthowa's satin is outstanding, and the customer care was incredibly warm and helpful!",
      name: "Chipo M.",
      role: "Homeowner, Lusaka",
      rating: 5,
    },
    {
      quote:
        "We upgraded our Livingstone Airbnb suites with Kuthowa bed runners and lavender pillowcases. Guests love the silky touch, and it shows in our 5-star reviews!",
      name: "Sarah K.",
      role: "Superhost, Livingstone",
      rating: 5,
    },
    {
      quote:
        "Got a custom monogrammed bonnet and pillowcase set as a bridal shower gift. It felt so personal and luxurious. Easily the most thoughtful gift I received.",
      name: "Lombe W.",
      role: "Newlywed, Kitwe",
      rating: 5,
    },
    {
      quote:
        "Ordered six bed runner sets for our lodge. The quality exceeded expectations and the custom color matching was perfect. We will be re-ordering for the entire property.",
      name: "James T.",
      role: "Lodge Manager, South Luangwa",
      rating: 5,
    },
  ];

  const [[current, direction], setCurrent] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = useCallback(
    (newDirection: number) => {
      const next =
        (current + newDirection + testimonials.length) % testimonials.length;
      setCurrent([next, newDirection]);
    },
    [current, testimonials.length]
  );

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => paginate(1), 5000);
    return () => clearInterval(id);
  }, [isAutoPlaying, paginate]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-white border-b border-gold/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Customer Stories</span>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal">Loved by Dreamers</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto my-4" />
          <p className="text-sm font-light text-charcoal-light leading-relaxed">
            Hear why homeowners, bridal shoppers, and hospitality experts choose Kuthowa Creatives.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          {/* Card */}
          <div className="overflow-hidden bg-cream border border-gold/15 p-8 md:p-12 min-h-[300px] flex items-center relative shadow-sm">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col items-center text-center space-y-6"
                role="group"
                aria-roledescription="slide"
                aria-label={`${current + 1} of ${testimonials.length}`}
              >
                {/* Stars */}
                <div className="flex gap-1 justify-center" aria-label={`${testimonials[current].rating} out of 5 stars`}>
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="text-gold fill-gold w-5 h-5" aria-hidden="true" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-heading text-xl md:text-2xl font-light italic text-charcoal leading-relaxed max-w-2xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-sm text-charcoal">
                    {testimonials[current].name}
                  </p>
                  <p className="text-xs text-charcoal-light font-light uppercase tracking-wider mt-1">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => { paginate(-1); setIsAutoPlaying(false); }}
              className="p-3 border border-gold/25 text-charcoal hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-4">
              {/* Play/Pause Button */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 text-charcoal-light hover:text-gold transition-colors"
                aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
              >
                {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>

              {/* Dots */}
              <div className="flex gap-2.5" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrent([i, i > current ? 1 : -1]);
                      setIsAutoPlaying(false);
                    }}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-[3px] transition-all duration-300 ${
                      i === current ? "w-8 bg-gold" : "w-3 bg-gold/25 hover:bg-gold/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => { paginate(1); setIsAutoPlaying(false); }}
              className="p-3 border border-gold/25 text-charcoal hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-sm font-light text-charcoal-light mb-4">Have you experienced Kuthowa?</p>
          <a
            href="https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I'd%20like%20to%20leave%20a%20review."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-xs font-semibold uppercase tracking-widest bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Leave a Review
          </a>
        </div>

      </div>
    </section>
  );
}
