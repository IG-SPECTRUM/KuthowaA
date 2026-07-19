"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Typed cubic-bezier tuple required by Framer Motion's Variants type
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: EASE },
    },
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
        
        {/* Left Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-charcoal"
          >
            Sleep Beautifully with <br className="hidden sm:inline" />
            <span className="text-gold italic font-normal">Premium Satin</span> Bedding
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-widest text-gold"
          >
            Pillowcases • Bonnets • Bed Runners • Custom Bedding
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg font-light text-charcoal-light max-w-xl leading-relaxed"
          >
            Handcrafted in Zambia. Experience the friction-free benefits of beauty sleep and premium home aesthetics tailored specifically for homes, hotels, and Airbnbs.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#products"
              className="px-8 py-4 text-xs font-semibold uppercase tracking-widest bg-charcoal text-cream border border-charcoal hover:bg-transparent hover:text-charcoal transition-all duration-300 shadow-md shadow-charcoal/10"
            >
              Explore Collection
            </a>
            <a
              href="https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I'd%20like%20to%20discuss%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-xs font-semibold uppercase tracking-widest bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.33 4.982L2 22l5.209-1.364a9.993 9.993 0 004.804 1.226h.004c5.507 0 9.99-4.477 9.99-9.985a9.97 9.97 0 00-2.925-7.064A9.97 9.97 0 0012.012 2zm5.795 14.22c-.253.71-1.47 1.391-2.022 1.488-.5.088-1.15.158-3.344-.75-2.802-1.16-4.607-4.015-4.747-4.202-.14-.188-1.135-1.506-1.135-2.873 0-1.367.717-2.037.973-2.308.257-.271.56-.34.748-.34h.536c.172 0 .4.064.625.603.227.537.777 1.9.845 2.037.069.138.115.3.023.488-.093.188-.139.3-.277.462-.14.163-.294.364-.42.489-.138.138-.284.289-.122.568.163.28 1.227 2.008 2.637 3.26 1.164 1.033 2.147 1.353 2.45 1.48.303.126.48-.103.66-.312.18-.21.777-.905.986-1.213.208-.309.417-.257.702-.15.286.108 1.815.856 2.128 1.012.312.157.52.234.595.364.075.13.075.753-.178 1.463z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
          className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] max-h-[600px] overflow-hidden shadow-2xl shadow-charcoal/10"
        >
          <Image
            src="/images/hero.jpg"
            alt="Luxurious lavender and cream satin bedding set styled with warm gold lighting"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover hover:scale-102 transition-transform duration-700 ease-out"
          />
          {/* Subtle gold overlay border */}
          <div className="absolute inset-4 border border-gold/25 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
