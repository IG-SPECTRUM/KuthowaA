"use client";

import { motion } from "framer-motion";
import { Droplets, Wind, Sun, AlertTriangle } from "lucide-react";

export default function CareGuide() {
  const instructions = [
    {
      icon: <Droplets className="text-gold w-6 h-6" />,
      title: "Gentle Washing",
      desc: "Hand wash in cold water or machine wash on a delicate cycle (30°C/85°F) using a mesh laundry bag. Use a mild, pH-neutral liquid detergent.",
    },
    {
      icon: <AlertTriangle className="text-gold w-6 h-6" />,
      title: "What to Avoid",
      desc: "Never use bleach, fabric softeners, or harsh stain removers. Avoid washing with heavy items like denim or items with zippers/hooks.",
    },
    {
      icon: <Wind className="text-gold w-6 h-6" />,
      title: "Drying",
      desc: "Do not wring or twist the satin. Roll in a towel to gently extract excess water. Never tumble dry.",
    },
    {
      icon: <Sun className="text-gold w-6 h-6" />,
      title: "Air Drying & Ironing",
      desc: "Lay flat or hang to air dry away from direct sunlight. If necessary, iron inside-out on the lowest setting (cool iron) while slightly damp.",
    },
  ];

  return (
    <section id="care-guide" className="py-24 bg-charcoal border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Header & Intro */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Product Care</span>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-cream">Satin Care Guide</h2>
            <div className="w-12 h-[1px] bg-gold/45" />
          </div>

          <p className="font-light text-cream-deep/80 leading-relaxed text-sm md:text-base">
            Kuthowa&apos;s high-density silk is crafted for longevity. With the right care, your bespoke bedding, bonnets, and accessories will maintain their lustrous shine and frictionless glide for years to come. Follow these simple steps to preserve the integrity of your silk.
          </p>

          <a
            href="https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I%20have%20a%20question%20about%20caring%20for%20my%20satin."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs font-semibold uppercase tracking-widest text-gold hover:text-white transition-colors duration-300"
          >
            Have Questions? Ask Us &rarr;
          </a>
        </div>

        {/* Right Side: Care Instructions Grid */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {instructions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="bg-charcoal-light/50 p-8 border border-gold/10 hover:border-gold/30 transition-colors duration-300"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-heading text-lg text-cream mb-2">{item.title}</h3>
                <p className="text-xs font-light text-cream-deep/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
