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
              Kuthowa Creatives was born from a simple belief: <strong className="font-semibold text-charcoal">luxury should not have to be imported to be exceptional.</strong>
            </p>
            <p>
              We saw an opportunity to create something different in Zambia—a home and lifestyle brand that combines the beauty of premium textiles with the creativity, craftsmanship, and talent found within our own communities.
            </p>
            <p>
              What began with bespoke silk bonnets and pillowcases has grown into a vision for a modern African home-textiles brand, creating thoughtfully designed products for bedrooms, homes, hospitality spaces, and everyday living.
            </p>
            <p>
              At Kuthowa, we believe luxury is more than a beautiful product. It is the feeling of coming home to a space that reflects you. It is the freedom to choose your colours, fabrics, finishes, and details. It is quality you can feel, craftsmanship you can trust, and products created with purpose.
            </p>
            <p>
              Our ambition is to build Kuthowa into a <strong className="font-semibold text-charcoal">leading African home and lifestyle brand</strong>, known for premium textiles, distinctive design, customization, and exceptional customer experience.
            </p>
            <p>
              We are committed to growing beyond products—to building a platform that creates opportunities for local artisans, supports local manufacturing, develops creative talent, and demonstrates that African businesses can create products that compete not only locally, but globally.
            </p>
            <p className="font-medium text-charcoal">
              We are not simply making bedding. We are creating a new standard for modern African living—where local craftsmanship meets contemporary luxury, and where every space has the freedom to feel beautifully, authentically yours.
            </p>
          </div>
          
          <div className="pt-6 border-t border-gold/10 mt-8 flex flex-col sm:flex-row sm:gap-12 gap-6">
            <div>
              <h5 className="font-heading text-xl text-charcoal">Esnart Chikobe</h5>
              <p className="text-[10px] uppercase tracking-widest text-gold font-semibold mt-1">Founder & CEO</p>
            </div>
            <div>
              <h5 className="font-heading text-xl text-charcoal">Paul Banda</h5>
              <p className="text-[10px] uppercase tracking-widest text-gold font-semibold mt-1">Chief Technology Officer (CTO)</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
