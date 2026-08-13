"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, HandHeart, CreditCard, MessageCircle } from "lucide-react";

export default function TrustGuarantees() {
  const guarantees = [
    {
      icon: <ShieldCheck size={32} className="text-gold mb-4" strokeWidth={1.5} />,
      title: "Premium Quality",
      desc: "high-density silk that resists pulling and fading over time.",
    },
    {
      icon: <HandHeart size={32} className="text-gold mb-4" strokeWidth={1.5} />,
      title: "Handmade in Zambia",
      desc: "Expertly tailored locally in Lusaka with meticulous attention to detail.",
    },
    {
      icon: <Truck size={32} className="text-gold mb-4" strokeWidth={1.5} />,
      title: "Nationwide Delivery",
      desc: "Fast, reliable shipping to Lusaka, Ndola, Kitwe, Livingstone, and beyond.",
    },
    {
      icon: <CreditCard size={32} className="text-gold mb-4" strokeWidth={1.5} />,
      title: "Secure Payments",
      desc: "Flexible options including Mobile Money, eWallet, and Bank Transfers.",
    },
    {
      icon: <MessageCircle size={32} className="text-gold mb-4" strokeWidth={1.5} />,
      title: "Fast Response",
      desc: "Direct communication with our design team on WhatsApp.",
    },
  ];

  return (
    <section className="py-20 bg-charcoal text-cream border-y-4 border-gold">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center p-4"
            >
              {item.icon}
              <h4 className="font-heading text-lg font-medium text-cream mb-2">
                {item.title}
              </h4>
              <p className="text-xs font-light text-cream/70 leading-relaxed max-w-[200px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
