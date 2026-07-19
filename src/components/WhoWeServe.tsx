"use client";

import { motion } from "framer-motion";
import { Home, Building2, Key, Heart, Gift, Paintbrush, ArrowRight } from "lucide-react";

export default function WhoWeServe() {
  const segments = [
    {
      icon: <Home size={32} strokeWidth={1.5} />,
      title: "Homes & Families",
      desc: "Upgrade daily master suites and children's rooms with gorgeous sleep setups that look and feel premium.",
      linkText: "Shop Bedroom Sets",
      href: "#products",
    },
    {
      icon: <Building2 size={32} strokeWidth={1.5} />,
      title: "Hotels & Lodges",
      desc: "Impress premium guests, improve room ratings, and offer high-durability luxury linens made locally.",
      linkText: "Request B2B Quote",
      href: "https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I'd%20like%20a%20B2B%20quote%20for%20my%20Hotel/Lodge.",
    },
    {
      icon: <Key size={32} strokeWidth={1.5} />,
      title: "Airbnb Hosts",
      desc: "Stand out in Lusaka or Livingstone search results with visually gorgeous bedding that wins five-star reviews.",
      linkText: "Request B2B Quote",
      href: "https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I'd%20like%20a%20B2B%20quote%20for%20my%20Airbnb.",
    },
    {
      icon: <Heart size={32} strokeWidth={1.5} />,
      title: "Bridal Gifts",
      desc: "Exquisite custom-monogrammed satin sets that newlyweds will cherish and enjoy for years to come.",
      linkText: "Curate a Gift",
      href: "https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I'd%20like%20to%20curate%20a%20bridal%20gift.",
    },
    {
      icon: <Gift size={32} strokeWidth={1.5} />,
      title: "Corporate Gifts",
      desc: "Standout branded beauty and sleep wellness packages for employees, clients, and VIP events.",
      linkText: "Discuss Branding",
      href: "https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I'd%20like%20to%20discuss%20corporate%20gifting.",
    },
    {
      icon: <Paintbrush size={32} strokeWidth={1.5} />,
      title: "Interior Designers",
      desc: "Work directly with us to coordinate custom runner tones and custom sizes for specific client bedrooms.",
      linkText: "Partner With Us",
      href: "https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I'm%20an%20interior%20designer%20looking%20to%20partner.",
    },
  ];

  return (
    <section id="who-we-serve" className="py-24 bg-white border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Tailored Solutions</span>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal">Who We Serve</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto my-4" />
          <p className="text-sm font-light text-charcoal-light leading-relaxed">
            Whether elevating your home sanctuary, boosting your listing reviews, or creating the perfect gift, we design for you.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((seg, index) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
              className="group p-8 bg-cream/35 border border-gold/5 hover:border-gold/30 hover:bg-lavender-light/10 transition-all duration-300 shadow-sm flex flex-col h-full"
            >
              <div className="text-gold mb-6 group-hover:scale-110 group-hover:text-gold-light transition-transform duration-500">
                {seg.icon}
              </div>
              <h3 className="font-heading text-xl font-medium text-charcoal mb-3">
                {seg.title}
              </h3>
              <p className="text-xs font-light text-charcoal-light leading-relaxed mb-6 flex-grow">
                {seg.desc}
              </p>
              
              <a 
                href={seg.href} 
                className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-gold hover:text-charcoal transition-colors duration-300 mt-auto"
                {...(seg.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {seg.linkText}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
