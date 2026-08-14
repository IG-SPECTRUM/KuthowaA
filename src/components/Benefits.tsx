"use client";

import { motion } from "framer-motion";

export default function Benefits() {
  const comparisonData = [
    {
      factor: "Hair Health",
      cotton: "Rough fibers cause friction, breakage, split ends, and bedhead frizz.",
      silk: "Friction-free slip that lets hair slide smoothly, preventing breakage.",
    },
    {
      factor: "Skin Moisture",
      cotton: "Highly absorbent; drinks up your night creams and strips skin oils.",
      silk: "Hydrophobic structure that keeps hydration and expensive skincare on your skin.",
    },
    {
      factor: "Aesthetic & Feel",
      cotton: "Wrinkles quickly, looks worn and faded after a few standard washes.",
      silk: "Naturally smooth, wrinkle-resistant luxury sheen with rich accent borders.",
    },
    {
      factor: "Temperature Control",
      cotton: "Traps body heat during hot seasons, causing sweat and discomfort.",
      silk: "Silky cool-to-the-touch composition for breathable comfort in any weather.",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-cream-deep border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">The Science of Sleep</span>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal">Why Silk?</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto my-4" />
          <p className="text-sm font-light text-charcoal-light leading-relaxed">
            Our premium high-density silk protects your skin, locks in your curls, and keeps you cool all night long.
          </p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-gold/10 overflow-hidden shadow-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-charcoal text-cream uppercase text-[10px] tracking-widest font-semibold border-b border-charcoal">
                  <th scope="col" className="p-6 w-[25%] font-semibold">Sleep Factor</th>
                  <th scope="col" className="p-6 w-[35%] font-semibold border-l border-cream/5">Standard Cotton</th>
                  <th scope="col" className="p-6 w-[40%] font-semibold border-l border-gold/20 bg-gold/5 text-gold-light">
                    Kuthowa Silk
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/10 text-sm leading-relaxed">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="group">
                    <th 
                      scope="row" 
                      className="p-6 font-semibold md:font-normal text-charcoal bg-cream/20 font-heading text-lg md:text-base border-r border-gold/10 align-top md:align-middle"
                    >
                      {row.factor}
                    </th>
                    <td className="p-6 text-charcoal-light font-light border-r border-gold/10 align-top">
                      {row.cotton}
                    </td>
                    <td className="p-6 text-charcoal font-light bg-lavender-light/35 border-l border-gold/30 align-top group-hover:bg-lavender-light/50 transition-colors">
                      {row.silk}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
