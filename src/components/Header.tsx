"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Our Story", href: "#about" },
  { label: "Collection", href: "#products" },
  { label: "Why Satin", href: "#benefits" },
  { label: "Our Process", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Handle scroll lock and focus trap
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      drawerRef.current?.focus();
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-cream/95 backdrop-blur-md shadow-md shadow-charcoal/5 border-b border-gold/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="font-heading text-2xl font-semibold tracking-wide text-charcoal">
            <span className="text-gold italic font-normal lowercase first-letter:uppercase">Kuthowa</span> Creatives
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  activeSection === link.href ? "text-gold" : "text-charcoal-light hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I'd%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-widest px-5 py-2.5 bg-whatsapp text-white border border-whatsapp hover:bg-transparent hover:text-whatsapp transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.33 4.982L2 22l5.209-1.364a9.993 9.993 0 004.804 1.226h.004c5.507 0 9.99-4.477 9.99-9.985a9.97 9.97 0 00-2.925-7.064A9.97 9.97 0 0012.012 2zm5.795 14.22c-.253.71-1.47 1.391-2.022 1.488-.5.088-1.15.158-3.344-.75-2.802-1.16-4.607-4.015-4.747-4.202-.14-.188-1.135-1.506-1.135-2.873 0-1.367.717-2.037.973-2.308.257-.271.56-.34.748-.34h.536c.172 0 .4.064.625.603.227.537.777 1.9.845 2.037.069.138.115.3.023.488-.093.188-.139.3-.277.462-.14.163-.294.364-.42.489-.138.138-.284.289-.122.568.163.28 1.227 2.008 2.637 3.26 1.164 1.033 2.147 1.353 2.45 1.48.303.126.48-.103.66-.312.18-.21.777-.905.986-1.213.208-.309.417-.257.702-.15.286.108 1.815.856 2.128 1.012.312.157.52.234.595.364.075.13.075.753-.178 1.463z" />
              </svg>
              Order via WhatsApp
            </a>
          </nav>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 text-charcoal hover:text-gold transition-colors duration-200"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[45] bg-charcoal lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              ref={drawerRef}
              tabIndex={-1}
              onKeyDown={handleKeyDown}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-screen w-full max-w-[320px] bg-cream shadow-2xl z-50 p-8 flex flex-col lg:hidden outline-none focus:outline-none"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-heading text-xl font-semibold text-charcoal">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1 hover:text-gold transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav aria-label="Mobile Navigation" className="flex flex-col gap-6 mb-12">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-semibold uppercase tracking-widest py-1 transition-colors duration-200 ${
                      activeSection === link.href ? "text-gold" : "text-charcoal-light hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <a
                href="https://wa.me/260967046463?text=Hi%20Kuthowa%20Creatives,%20I'd%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest py-4 bg-whatsapp text-white border border-whatsapp hover:bg-transparent hover:text-whatsapp transition-all duration-300 mt-auto"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.33 4.982L2 22l5.209-1.364a9.993 9.993 0 004.804 1.226h.004c5.507 0 9.99-4.477 9.99-9.985a9.97 9.97 0 00-2.925-7.064A9.97 9.97 0 0012.012 2zm5.795 14.22c-.253.71-1.47 1.391-2.022 1.488-.5.088-1.15.158-3.344-.75-2.802-1.16-4.607-4.015-4.747-4.202-.14-.188-1.135-1.506-1.135-2.873 0-1.367.717-2.037.973-2.308.257-.271.56-.34.748-.34h.536c.172 0 .4.064.625.603.227.537.777 1.9.845 2.037.069.138.115.3.023.488-.093.188-.139.3-.277.462-.14.163-.294.364-.42.489-.138.138-.284.289-.122.568.163.28 1.227 2.008 2.637 3.26 1.164 1.033 2.147 1.353 2.45 1.48.303.126.48-.103.66-.312.18-.21.777-.905.986-1.213.208-.309.417-.257.702-.15.286.108 1.815.856 2.128 1.012.312.157.52.234.595.364.075.13.075.753-.178 1.463z" />
                </svg>
                Order via WhatsApp
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
