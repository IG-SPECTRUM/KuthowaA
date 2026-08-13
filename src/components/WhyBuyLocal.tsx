"use client";

import { motion } from "framer-motion";

export default function WhyBuyLocal() {
  const pillars = [
    {
      num: "01",
      title: "Zambian Craftsmanship",
      desc: "Every stitch supports skilled local tailors and manufacturing, keeping resources in our community.",
    },
    {
      num: "02",
      title: "Rapid Customization",
      desc: "Skip the weeks of waiting for imports. Choose your specific dimensions, trims, and colors, ready in days.",
    },
    {
      num: "03",
      title: "Personalized Service",
      desc: "We coordinate directly with you to select fabric tones that complement your interior design themes.",
    },
  ];

  return (
    <section id="why-buy-local" className="py-24 bg-cream-deep border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Copy and Pillars */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Our Values</span>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal">Why Buy Local?</h2>
            <div className="w-12 h-[1px] bg-gold/45" />
          </div>

          <p className="font-heading text-xl md:text-2xl text-charcoal font-light leading-relaxed">
            We aren&apos;t importing mass-produced goods, and we aren&apos;t selling cheap market knockoffs. We are building a modern African luxury legacy right here in Zambia.
          </p>

          <div className="space-y-6 pt-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="flex gap-4 items-start"
              >
                <div className="font-heading text-2xl font-semibold text-gold leading-none pt-0.5">
                  {pillar.num}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-charcoal mb-1">{pillar.title}</h4>
                  <p className="text-sm font-light text-charcoal-light leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Founder Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 bg-charcoal text-cream-deep p-8 md:p-12 relative border-t-4 border-gold shadow-xl shadow-charcoal/20"
        >
          {/* Visual double quote mark */}
          <div className="font-heading text-[8rem] text-gold absolute top-[-3.5rem] left-8 opacity-25 leading-none select-none pointer-events-none">
            &ldquo;
          </div>
          
          <div className="relative z-10 space-y-6">
            <p className="font-heading text-lg md:text-xl font-light italic leading-relaxed text-cream-deep/90">
              Kuthowa Creatives was founded with one mission—to make Premium Silk products accessible while celebrating Zambian craftsmanship. By choosing Kuthowa, you are not importing mass-produced products; you are supporting local artisans, securing faster custom orders, and choosing bedding tailored specifically to your home.
            </p>
            
            <div className="pt-6 border-t border-cream-deep/15">
              <h5 className="text-xs font-semibold uppercase tracking-widest text-gold">The Kuthowa Creative Team</h5>
              <p className="text-[10px] uppercase tracking-wider text-cream-deep/60 mt-1">Founded in Lusaka, Zambia</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
