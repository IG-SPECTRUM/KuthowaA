"use client";

import { motion } from "framer-motion";

export default function WhatsAppCTA() {
  return (
    <section className="relative py-28 bg-charcoal overflow-hidden border-t-4 border-gold">
      {/* Decorative warm background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-lavender-light/60">
            Start Your Transformation
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-light text-cream leading-[1.15]">
            Ready to Elevate <br />
            <span className="text-gold italic font-normal">Your Sleep?</span>
          </h2>

          <p className="text-sm font-light text-cream/70 max-w-xl mx-auto leading-relaxed">
            Tap below to chat directly with our design team on WhatsApp. Let us build your perfect color theme, confirm your size, and get your handcrafted order into production today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I'm%20ready%20to%20order%20some%20premium%20satin%20items!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[#1ebe5d] transition-all duration-300 shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.33 4.982L2 22l5.209-1.364a9.993 9.993 0 004.804 1.226h.004c5.507 0 9.99-4.477 9.99-9.985a9.97 9.97 0 00-2.925-7.064A9.97 9.97 0 0012.012 2zm5.795 14.22c-.253.71-1.47 1.391-2.022 1.488-.5.088-1.15.158-3.344-.75-2.802-1.16-4.607-4.015-4.747-4.202-.14-.188-1.135-1.506-1.135-2.873 0-1.367.717-2.037.973-2.308.257-.271.56-.34.748-.34h.536c.172 0 .4.064.625.603.227.537.777 1.9.845 2.037.069.138.115.3.023.488-.093.188-.139.3-.277.462-.14.163-.294.364-.42.489-.138.138-.284.289-.122.568.163.28 1.227 2.008 2.637 3.26 1.164 1.033 2.147 1.353 2.45 1.48.303.126.48-.103.66-.312.18-.21.777-.905.986-1.213.208-.309.417-.257.702-.15.286.108 1.815.856 2.128 1.012.312.157.52.234.595.364.075.13.075.753-.178 1.463z" />
            </svg>
            Place Your Order via WhatsApp
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[11px] uppercase tracking-widest text-cream/35"
        >
          Custom orders currently take 5–7 days to craft.
        </motion.p>
      </div>
    </section>
  );
}
