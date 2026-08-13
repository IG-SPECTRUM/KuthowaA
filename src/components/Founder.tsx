"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-cream-deep border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/5] max-h-[600px] overflow-hidden shadow-xl"
        >
          <Image
            src="/images/founder.jpg"
            alt="Founder of Kuthowa Creatives"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Subtle gold overlay border */}
          <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="space-y-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Our Origin</span>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal">The Vision Behind Kuthowa</h2>
            <div className="w-12 h-[1px] bg-gold/40" />
          </div>

          <div className="font-light text-charcoal-light leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              &quot;Kuthowa Creatives was born out of a personal struggle to find high-quality, locally made silk products in Zambia. I was tired of importing generic, mass-produced items that took weeks to arrive and lacked that personal touch.&quot;
            </p>
            <p>
              &quot;We started small—creating bespoke Silk Bonnets and pillowcases for friends and family. The response was overwhelming. People didn&apos;t just want satin; they wanted luxury that felt accessible, customizable, and distinctly Zambian.&quot;
            </p>
            <p>
              &quot;Today, we proudly supply homes, boutique hotels, and luxury Airbnbs across the country. Every stitch is a testament to our commitment to quality, empowering local artisans, and redefining modern African luxury.&quot;
            </p>
          </div>
          
          <div className="pt-6 border-t border-gold/10 mt-8">
            <h5 className="font-heading text-xl text-charcoal">Luyando</h5>
            <p className="text-[10px] uppercase tracking-widest text-gold font-semibold mt-1">Founder & Creative Director</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
