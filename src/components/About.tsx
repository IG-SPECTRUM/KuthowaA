"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream border-b border-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">About Kuthowa Creatives</span>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal">Our Story</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto my-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] relative w-full max-w-md mx-auto lg:mx-0 overflow-hidden border border-gold/10 shadow-2xl shadow-charcoal/5">
              <Image
                src="/images/satin_duvet_cover.jpg"
                alt="Kuthowa Creatives craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-heading text-2xl text-cream italic font-light">
                  &quot;Making luxury accessible, one home at a time.&quot;
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-12 -right-8 w-full h-full border border-gold/20" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-charcoal mb-4">
                Born in Lusaka, Zambia
              </h3>
              <p className="text-sm font-light text-charcoal-light leading-relaxed mb-6">
                Kuthowa Creatives was born from a simple belief: you shouldn&apos;t have to import expensive bedding from overseas to experience true luxury. We are a proudly Zambian brand dedicated to elevating the everyday sleep experience through high-quality, handcrafted satin products.
              </p>
              <p className="text-sm font-light text-charcoal-light leading-relaxed">
                Whether you&apos;re a homeowner looking to upgrade your bedroom, a newlywed building your first home, or an Airbnb host aiming to secure 5-star reviews, our collection is meticulously designed to offer premium comfort without the exorbitant price tag.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gold/10">
              <div>
                <h4 className="font-heading text-xl text-charcoal mb-2">Why Choose Us</h4>
                <p className="text-xs font-light text-charcoal-light leading-relaxed">
                  Unlike mass-produced imports, every Kuthowa product is stitched locally with precision. This means faster delivery times, custom sizing tailored to your specific bed, and unmatched quality control.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-xl text-charcoal mb-2">Our Promise</h4>
                <p className="text-xs font-light text-charcoal-light leading-relaxed">
                  We source only high-density, durable satin that feels incredible against the skin, regulates temperature, and withstands regular washing—ensuring your investment lasts for years.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
