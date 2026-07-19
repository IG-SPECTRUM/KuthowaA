"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface LightboxProps {
  isOpen: boolean;
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      dialogRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery"
        tabIndex={-1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-sm outline-none"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-cream/70 hover:text-white transition-colors duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close Lightbox"
        >
          <X size={32} />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-cream/70 hover:text-white transition-colors duration-200 p-2 z-10 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-cream/70 hover:text-white transition-colors duration-200 p-2 z-10 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>
          </>
        )}

        <div
          className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-sm font-light tracking-widest">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
