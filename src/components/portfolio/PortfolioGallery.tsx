"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "@/components/ui/Lightbox";
import { PORTFOLIO_CATEGORIES, DEMO_IMAGES } from "@/lib/constants";

interface PortfolioImage {
  src: string;
  alt: string;
  category: string;
}

// Build all images with categories
const allImages: PortfolioImage[] = [
  ...DEMO_IMAGES.portfolio.wedding.map((src, i) => ({
    src,
    alt: `Wedding photography ${i + 1} - Beautiful wedding moments captured by Zeal Studio`,
    category: "Wedding",
  })),
  ...DEMO_IMAGES.portfolio.fashion.map((src, i) => ({
    src,
    alt: `Fashion photography ${i + 1} - High-end fashion shoot by Zeal Studio`,
    category: "Fashion",
  })),
  ...DEMO_IMAGES.portfolio.events.map((src, i) => ({
    src,
    alt: `Event photography ${i + 1} - Event coverage by Zeal Studio`,
    category: "Events",
  })),
  ...DEMO_IMAGES.portfolio.nature.map((src, i) => ({
    src,
    alt: `Nature photography ${i + 1} - Stunning landscape by Zeal Studio`,
    category: "Nature",
  })),
  ...DEMO_IMAGES.portfolio.portrait.map((src, i) => ({
    src,
    alt: `Portrait photography ${i + 1} - Professional portrait by Zeal Studio`,
    category: "Portrait",
  })),
];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-black shadow-lg"
                    : "bg-surface dark:bg-surface-dark text-foreground border border-border hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SEO Content */}
          <div className="text-center mb-12">
            <p className="text-muted max-w-3xl mx-auto">
              Our photography portfolio showcases the finest wedding photography,
              fashion editorials, corporate event coverage, stunning nature
              landscapes, and professional portraits. Each project represents our
              commitment to visual excellence and storytelling through the lens.
              As Pune&apos;s premier photography studio, we bring creativity and
              passion to every shoot.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div
                  key={`${img.category}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="masonry-grid-item"
                >
                  <div
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => openLightbox(i)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400 + (i % 3) * 100}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center">
                          <span className="text-white text-2xl">+</span>
                        </div>
                      </motion.div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-primary text-xs font-medium uppercase tracking-wider">
                        {img.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
