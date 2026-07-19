"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    {
      src: "/images/hero.jpg",
      alt: "Full bedroom dressed in luxurious lavender and cream satin sheets",
      category: "Bespoke Bedding",
      className: "aspect-square sm:col-span-2 sm:row-span-2",
    },
    {
      src: "/images/pillowcase.jpg",
      alt: "Macro detail of soft lavender satin pillowcase texture",
      category: "Premium Pillowcases",
      className: "aspect-square",
    },
    {
      src: "/images/bonnet.jpg",
      alt: "Smiling model wearing a premium gold satin hair bonnet",
      category: "Hair Protection",
      className: "aspect-square",
    },
    {
      src: "/images/runner.jpg",
      alt: "Luxurious cream bed runner draped over a duvet",
      category: "Bed Accents",
      className: "aspect-square",
    },
    {
      src: "/images/satin_sheet_set.jpg",
      alt: "Satin sheet set arranged neatly",
      category: "Sheet Sets",
      className: "aspect-square sm:col-span-2",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Visual Inspiration</span>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal">The Kuthowa Lifestyle</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto my-4" />
          <p className="text-sm font-light text-charcoal-light leading-relaxed">
            A glimpse into the elegance we bring to bedrooms, Airbnbs, and boutiques across Zambia. Follow our journey.
          </p>
        </div>

        {/* Instagram-style Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 mb-12">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden group bg-cream cursor-pointer ${img.className}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="flex items-center gap-2 text-white font-semibold tracking-widest uppercase text-[10px]">
                  {/* Instagram icon SVG */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  {img.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://instagram.com/kuthowacreatives"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-charcoal hover:text-gold transition-colors duration-300"
          >
            {/* Instagram icon SVG */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @kuthowacreatives
          </a>
        </div>
      </div>
    </section>
  );
}
