"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the loader after 1.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal text-cream"
        >
          <div className="text-center space-y-4 px-6">
            {/* Elegant luxury emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center relative">
                <span className="font-heading text-2xl font-light tracking-widest text-gold italic">K</span>
                {/* Micro outer gold ring animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-t border-gold rounded-full"
                />
              </div>
            </motion.div>

            {/* Typography Logo */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-heading text-3xl md:text-4xl tracking-widest uppercase font-medium"
            >
              <span className="text-gold italic font-normal lowercase first-letter:uppercase">Kuthowa</span> Creatives
            </motion.h1>

            {/* Small loading indicator */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
              className="h-[1px] bg-gold/50 mx-auto"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-cream-deep font-light"
            >
              Modern African Luxury
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
