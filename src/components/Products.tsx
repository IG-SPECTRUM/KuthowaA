"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Lightbox from "./Lightbox";

interface ProductItem {
  id: string;
  name: string;
  desc: string;
  benefits: string;
  sizes: string;
  priceLabel: string;
  priceValue: string;
  image: string;
  category: "Bedroom" | "Hair Care" | "Hospitality" | "Accessories" | "Gifts";
  waText: string;
}

export default function Products() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const products: ProductItem[] = [
    {
      id: "silk-bedsheet-sets",
      name: "Premium Silk Bed Sheet Sets",
      desc: "Complete luxury set including 1 Flat Sheet, 1 Mattress Cover, and 2 Pillowcases.",
      benefits: "Ultra soft, hair & skin friendly, luxury finish, perfect for gifting or homes.",
      sizes: "Single, 3/4 Quarter, Double, Queen, King",
      priceLabel: "Starting from",
      priceValue: "K550",
      image: "/images/silk_sheet_set.jpg",
      category: "Bedroom",
      waText: "Hi Kuthowa Creatives! I'm interested in the Premium Silk Bed Sheet Set. Could you tell me the available colours and sizes?",
    },
    {
      id: "silk-fleece-blanket",
      name: "Silk Fleece Blankets",
      desc: "Cozy fleece blankets with an elegant silk border for warmth and style.",
      benefits: "Provides luxurious warmth while maintaining a premium aesthetic in your bedroom.",
      sizes: "Single, Double, Queen, King",
      priceLabel: "Starting from",
      priceValue: "K400",
      image: "/images/silk_duvet_cover.jpg",
      category: "Bedroom",
      waText: "Hi Kuthowa Creatives! I'm interested in the Silk Fleece Blankets. Could you tell me the available colours?",
    },
    {
      id: "bed-under-skirt",
      name: "Bed Under Skirts",
      desc: "Beautifully tailored bed skirts available in assorted colors.",
      benefits: "Elegantly conceals the base of your bed for a finished, hotel-quality look.",
      sizes: "Double, Queen, King",
      priceLabel: "Starting from",
      priceValue: "K350",
      image: "/images/silk_mattress_cover.jpg",
      category: "Hospitality",
      waText: "Hi Kuthowa Creatives! I'm interested in the Bed Under Skirts. Could you tell me the available colours?",
    },
    {
      id: "sofa-runner-set",
      name: "Sofa Runner Sets",
      desc: "Elevate your living room with a Sofa Runner and 4 matching Sofa Pillowcases.",
      benefits: "Instantly transforms your living space with coordinated, rich textures.",
      sizes: "Assorted Colors Available",
      priceLabel: "Set Price",
      priceValue: "K500",
      image: "/images/sofa_runner.JPG",
      category: "Hospitality",
      waText: "Hi Kuthowa Creatives! I'm interested in the Sofa Runner Sets. Could you tell me the available colours?",
    },
    {
      id: "ruffled-silk-pillowcases",
      name: "Silk Pillowcases (Ruffled)",
      desc: "Beautiful Silk Pillowcases with elegant ruffled edges for a romantic look.",
      benefits: "Reduces hair breakage, prevents frizz, and keeps skincare products on your skin.",
      sizes: "Standard, Continental",
      priceLabel: "Starting from",
      priceValue: "K120",
      image: "/images/IMG_9478.JPEG",
      category: "Bedroom",
      waText: "Hi Kuthowa Creatives! I'm interested in the Ruffled Silk Pillowcase. Could you tell me the available colours?",
    },
    {
      id: "plain-silk-pillowcases",
      name: "Silk Pillowcases (Plain)",
      desc: "Classic, minimalist silk pillowcases available in assorted colours — ivory, black, blush, lavender and more.",
      benefits: "Provides a frictionless surface for your hair and skin while you sleep.",
      sizes: "Standard, Continental",
      priceLabel: "Starting from",
      priceValue: "K100",
      image: "/images/IMG_9997.JPG",
      category: "Bedroom",
      waText: "Hi Kuthowa Creatives! I'm interested in the Plain Silk Pillowcase. Could you tell me the available colours?",
    },
    {
      id: "silk-pajamas",
      name: "Silk Pajamas",
      desc: "Luxurious silk pajama sets featuring a ruffled top and matching shorts.",
      benefits: "Incredibly soft and comfortable for lounging and sleeping in style.",
      sizes: "S, M, XL, XXL",
      priceLabel: "Set Price",
      priceValue: "K150",
      image: "/images/IMG_0755.JPG",
      category: "Gifts",
      waText: "Hi Kuthowa Creatives! I'm interested in the Silk Pajamas. Could you tell me the available colours and sizes?",
    },
    {
      id: "silk-head-scarfs",
      name: "Silk Head Scarfs",
      desc: "Elegant silk head scarfs available in assorted colours to protect and style your hair.",
      benefits: "Protects your hair throughout the day while adding a chic accessory to your outfit.",
      sizes: "One Size",
      priceLabel: "Each",
      priceValue: "K35",
      image: "/images/IMG_9934.JPEG",
      category: "Accessories",
      waText: "Hi Kuthowa Creatives! I'm interested in the Silk Head Scarfs. Could you tell me the available colours?",
    },
    {
      id: "silk-headbands",
      name: "Silk Ruched Headbands",
      desc: "Chic ruched silk headbands available in bold colours — black, ivory, and royal blue.",
      benefits: "Gentle on hair, no creases or breakage. Perfect for everyday wear and special occasions.",
      sizes: "One Size Fits All",
      priceLabel: "Each",
      priceValue: "K45",
      image: "/images/IMG_9890.JPEG",
      category: "Accessories",
      waText: "Hi Kuthowa Creatives! I'm interested in the Silk Ruched Headbands. Could you tell me the available colours?",
    },
    {
      id: "silk-scrunchies",
      name: "Silk Scrunchies Pack",
      desc: "Set of premium silk scrunchies designed to protect hair from creasing and damage.",
      benefits: "Friction-free, prevents hair breakage, gentle on all hair types, chic wrist accessory.",
      sizes: "Pack of 3 (Assorted Colours)",
      priceLabel: "Pack Price",
      priceValue: "K50",
      image: "/images/IMG_0010.JPEG",
      category: "Accessories",
      waText: "Hi Kuthowa Creatives! I'm interested in the Silk Scrunchies Pack. Could you tell me the available colours?",
    },
    {
      id: "silk-bonnets",
      name: "Silk Bonnets",
      desc: "Premium double-lined silk bonnets with a comfortable adjustable tie band.",
      benefits: "Preserves curls and protective styles overnight without leaving forehead lines.",
      sizes: "One Size Fits All",
      priceLabel: "Each",
      priceValue: "K65",
      image: "/images/bonnet.jpeg",
      category: "Hair Care",
      waText: "Hi Kuthowa Creatives! I'm interested in the Silk Bonnets. Could you tell me the available colours?",
    },
  ];

  const categories = ["All", "Bedroom", "Hair Care", "Hospitality", "Accessories", "Gifts"];
  const filteredProducts = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);
  
  // Use a map to correctly index into the full lightbox array even when filtered
  const lightboxImages = products.map((p) => ({ src: p.image, alt: p.name }));

  const openLightbox = (productId: string) => {
    const index = products.findIndex((p) => p.id === productId);
    setCurrentImageIndex(index !== -1 ? index : 0);
    setLightboxOpen(true);
  };

  // Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": `https://kuthowacreatives.com${product.image}`,
        "description": product.desc,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "ZMW",
          "price": product.priceValue.replace('K', ''),
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  return (
    <section id="products" className="py-24 bg-white border-b border-gold/10">
      {/* Inject SEO Product Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Explore Our Range</span>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal">The Premium Silk Collection</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto my-4" />
          <p className="text-sm font-light text-charcoal-light leading-relaxed">
            Meticulously crafted using high-grade, high-density silk to elevate your beauty sleep and home decor.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-charcoal text-cream border-charcoal"
                  : "bg-transparent text-charcoal-light border-gold/20 hover:border-gold hover:text-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="flex flex-col border border-gold/10 hover:border-gold/30 transition-all duration-300 group bg-cream/30 shadow-sm"
              >
                {/* Product Image */}
                <button 
                  onClick={() => openLightbox(product.id)}
                  className="relative aspect-square w-full overflow-hidden bg-cream cursor-pointer block focus:outline-none focus:ring-4 focus:ring-gold/50"
                  aria-label={`View larger image of ${product.name}`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-cream text-xs font-semibold uppercase tracking-widest bg-charcoal/80 px-4 py-2 transition-opacity duration-300">
                      View Gallery
                    </span>
                  </div>
                </button>

                {/* Product Copy & CTA */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-1 block">
                      {product.category}
                    </span>
                    <h3 className="font-heading text-xl font-medium text-charcoal">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm font-light text-charcoal-light leading-relaxed mb-6">
                    {product.desc}
                  </p>

                  <div className="space-y-4 mb-8 flex-grow">
                    <div>
                      <span className="text-[10px] font-semibold text-charcoal uppercase tracking-wider block mb-1">Benefits</span>
                      <p className="text-xs font-light text-charcoal-light leading-snug">{product.benefits}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-charcoal uppercase tracking-wider block mb-1">Available Sizes</span>
                      <p className="text-xs font-light text-charcoal-light leading-snug">{product.sizes}</p>
                    </div>
                  </div>

                  {/* Price Display & CTA */}
                  <div className="mt-auto pt-6 border-t border-gold/10 flex flex-col items-center">
                    <div className="flex flex-col items-center mb-6">
                      <span className="text-[10px] uppercase tracking-wider text-charcoal-light/60">
                        {product.priceLabel}
                      </span>
                      <span className="font-heading text-3xl font-semibold text-gold">
                        {product.priceValue}
                      </span>
                    </div>
                    
                    <a
                      href={`https://wa.me/260967046463?text=${encodeURIComponent(product.waText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex justify-center items-center gap-2 text-xs font-semibold uppercase tracking-widest py-4 bg-whatsapp text-white shadow-md shadow-whatsapp/20 hover:bg-whatsapp/90 hover:shadow-whatsapp/40 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.33 4.982L2 22l5.209-1.364a9.993 9.993 0 004.804 1.226h.004c5.507 0 9.99-4.477 9.99-9.985a9.97 9.97 0 00-2.925-7.064A9.97 9.97 0 0012.012 2zm5.795 14.22c-.253.71-1.47 1.391-2.022 1.488-.5.088-1.15.158-3.344-.75-2.802-1.16-4.607-4.015-4.747-4.202-.14-.188-1.135-1.506-1.135-2.873 0-1.367.717-2.037.973-2.308.257-.271.56-.34.748-.34h.536c.172 0 .4.064.625.603.227.537.777 1.9.845 2.037.069.138.115.3.023.488-.093.188-.139.3-.277.462-.14.163-.294.364-.42.489-.138.138-.284.289-.122.568.163.28 1.227 2.008 2.637 3.26 1.164 1.033 2.147 1.353 2.45 1.48.303.126.48-.103.66-.312.18-.21.777-.905.986-1.213.208-.309.417-.257.702-.15.286.108 1.815.856 2.128 1.012.312.157.52.234.595.364.075.13.075.753-.178 1.463z" />
                      </svg>
                      Order via WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Lightbox
          isOpen={lightboxOpen}
          images={lightboxImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setCurrentImageIndex((prev) => (prev + 1) % products.length)}
          onPrev={() => setCurrentImageIndex((prev) => (prev - 1 + products.length) % products.length)}
        />
      </div>
    </section>
  );
}
