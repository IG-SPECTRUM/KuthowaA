"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Browse Collection",
      desc: "Explore our Premium Silk range and select your preferred items, sizes, and colors.",
    },
    {
      num: "2",
      title: "Consult via WhatsApp",
      desc: "Tap the order button to instantly chat with us. We'll assist with color matching and sizing.",
    },
    {
      num: "3",
      title: "Custom Crafting",
      desc: "Your bespoke pieces are meticulously handcrafted in our Lusaka studio over 5–7 days.",
    },
    {
      num: "4",
      title: "Quality Check",
      desc: "Every item undergoes a strict quality control inspection to ensure flawless luxury.",
    },
    {
      num: "5",
      title: "Nationwide Delivery",
      desc: "Your order is securely packaged and delivered to your doorstep anywhere in Zambia.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-cream border-b border-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">The Kuthowa Experience</span>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal">Our Process</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto my-4" />
          <p className="text-sm font-light text-charcoal-light leading-relaxed">
            From initial consultation to the moment you unbox your silk, we ensure a seamless and luxurious experience.
          </p>
        </div>

        {/* 5 Steps Layout */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gold/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Step Number Badge */}
                <div className="w-24 h-24 rounded-full border border-gold/20 bg-white flex items-center justify-center mb-6 relative z-10 group-hover:border-gold group-hover:scale-105 transition-all duration-500 shadow-sm shadow-gold/5 flex-shrink-0">
                  <span className="font-heading text-3xl font-light text-gold">
                    {step.num}
                  </span>
                  {/* Outer glowing ring on hover */}
                  <div className="absolute inset-[-4px] rounded-full border border-gold/0 group-hover:border-gold/30 transition-colors duration-500" />
                </div>

                <h3 className="text-sm font-semibold text-charcoal mb-3 uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="text-xs font-light text-charcoal-light leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <a
            href="https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I'd%20like%20to%20start%20my%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-whatsapp text-white text-xs font-semibold uppercase tracking-widest shadow-md shadow-whatsapp/20 hover:bg-whatsapp/90 hover:shadow-whatsapp/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.33 4.982L2 22l5.209-1.364a9.993 9.993 0 004.804 1.226h.004c5.507 0 9.99-4.477 9.99-9.985a9.97 9.97 0 00-2.925-7.064A9.97 9.97 0 0012.012 2zm5.795 14.22c-.253.71-1.47 1.391-2.022 1.488-.5.088-1.15.158-3.344-.75-2.802-1.16-4.607-4.015-4.747-4.202-.14-.188-1.135-1.506-1.135-2.873 0-1.367.717-2.037.973-2.308.257-.271.56-.34.748-.34h.536c.172 0 .4.064.625.603.227.537.777 1.9.845 2.037.069.138.115.3.023.488-.093.188-.139.3-.277.462-.14.163-.294.364-.42.489-.138.138-.284.289-.122.568.163.28 1.227 2.008 2.637 3.26 1.164 1.033 2.147 1.353 2.45 1.48.303.126.48-.103.66-.312.18-.21.777-.905.986-1.213.208-.309.417-.257.702-.15.286.108 1.815.856 2.128 1.012.312.157.52.234.595.364.075.13.075.753-.178 1.463z"/>
            </svg>
            Start Your Order Now
          </a>
        </motion.div>

      </div>
    </section>
  );
}
