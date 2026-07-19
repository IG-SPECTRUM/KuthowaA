"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WhatsAppBubble() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show bubble after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white text-charcoal text-xs font-medium px-4 py-2.5 shadow-lg shadow-charcoal/10 border border-gold/10 whitespace-nowrap"
              >
                Chat with us on WhatsApp 💬
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bubble Button */}
          <a
            href="https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I'd%20like%20to%20make%20an%20inquiry%20from%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Kuthowa Creatives on WhatsApp"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300 relative"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.33 4.982L2 22l5.209-1.364a9.993 9.993 0 004.804 1.226h.004c5.507 0 9.99-4.477 9.99-9.985a9.97 9.97 0 00-2.925-7.064A9.97 9.97 0 0012.012 2zm5.795 14.22c-.253.71-1.47 1.391-2.022 1.488-.5.088-1.15.158-3.344-.75-2.802-1.16-4.607-4.015-4.747-4.202-.14-.188-1.135-1.506-1.135-2.873 0-1.367.717-2.037.973-2.308.257-.271.56-.34.748-.34h.536c.172 0 .4.064.625.603.227.537.777 1.9.845 2.037.069.138.115.3.023.488-.093.188-.139.3-.277.462-.14.163-.294.364-.42.489-.138.138-.284.289-.122.568.163.28 1.227 2.008 2.637 3.26 1.164 1.033 2.147 1.353 2.45 1.48.303.126.48-.103.66-.312.18-.21.777-.905.986-1.213.208-.309.417-.257.702-.15.286.108 1.815.856 2.128 1.012.312.157.52.234.595.364.075.13.075.753-.178 1.463z" />
            </svg>

            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
