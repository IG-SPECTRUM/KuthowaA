"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "How do I wash and care for my satin products?",
      answer:
        "We recommend hand washing or using a gentle machine cycle in cold water with a mild, pH-balanced detergent. Air dry flat and iron on a low silk setting from the reverse side to preserve the luxurious sheen and structural integrity of the fabric.",
    },
    {
      question: "Can I request custom colors or coordinate matching sets?",
      answer:
        "Absolutely! We specialize in tailored designs. In your WhatsApp chat, share your bed dimensions, preferred accent colors, and any custom border details. Our design team will source matching fabric swatches and confirm before production begins.",
    },
    {
      question: "How long do custom orders take to complete?",
      answer:
        "Standard custom orders are handcrafted and ready within 5–7 business days from order confirmation. Bulk commercial orders for lodges and hotels may require 10–14 days depending on quantity. We will always confirm your production timeline upfront.",
    },
    {
      question: "Do you offer bulk discounts for lodges, Airbnbs, or hotels?",
      answer:
        "Yes, we offer commercial bulk packages with custom contract pricing for hospitality clients. We can configure bed runners, decorative cushions, pillow sets, and duvets in your brand's specific color scheme.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Mobile Money (Airtel Money, MTN MoMo), FNB eWallet, bank transfers, and cash on delivery for Lusaka-based orders. Bulk corporate orders can be invoiced and settled via bank transfer with agreed payment terms.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Simply tap the 'Order via WhatsApp' button on any product. This will open a direct chat with our design team. Let us know the items, colors, and sizes you need. We'll confirm your total and schedule your order for production.",
    },
    {
      question: "Do you ship outside Lusaka?",
      answer:
        "Yes! We deliver locally in Lusaka and ship nationwide across Zambia to Ndola, Kitwe, Livingstone, Chipata, and beyond via reliable local couriers. Shipping costs are calculated based on your location and order weight.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-cream border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Answers to Your Questions
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto my-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Urgency + Delivery Card */}
          <div className="lg:col-span-4 space-y-6">
            {/* Urgency banner */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-charcoal text-cream-deep border-t-4 border-gold p-8 shadow-xl shadow-charcoal/20"
            >
              <div className="inline-block bg-gold text-charcoal text-[9px] font-bold uppercase tracking-widest px-2 py-1 mb-5">
                🚨 Order Status
              </div>

              <h4 className="font-heading text-xl text-gold-light mb-2 font-light">
                Current Production Wait: 5–7 Days
              </h4>
              <p className="text-xs font-light text-cream-deep/80 leading-relaxed mb-6">
                Due to high demand for our handcrafted stitching, production slots fill quickly each week. Place your order today to secure priority crafting and scheduling.
              </p>

              <div className="border-t border-cream-deep/10 pt-6">
                <h4 className="font-heading text-xl text-gold-light mb-2 font-light">
                  Delivery Across Zambia
                </h4>
                <p className="text-xs font-light text-cream-deep/80 leading-relaxed">
                  We deliver in Lusaka and ship nationwide to Ndola, Kitwe, Livingstone, Chipata, and beyond via reliable local couriers.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className={`border transition-colors duration-200 ${
                    isOpen ? "border-gold/30 bg-white" : "border-gold/10 bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-sm font-semibold text-charcoal leading-snug pr-2">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 text-gold transition-transform duration-200 ${
                        isOpen ? "rotate-0" : ""
                      }`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm font-light text-charcoal-light leading-relaxed border-t border-gold/10 pt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
