"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock, Download, Eye, Grid, Camera } from "lucide-react";
import { motion } from "framer-motion";
import Lightbox from "@/components/ui/Lightbox";
import { DEMO_IMAGES, SITE_NAME } from "@/lib/constants";

const clientGalleries = [
  {
    id: "priya-rahul-wedding",
    name: "Priya & Rahul Wedding",
    password: "priya2026",
    date: "March 15, 2026",
    images: DEMO_IMAGES.portfolio.wedding.map((src, i) => ({
      src,
      alt: `Priya & Rahul Wedding Photo ${i + 1}`,
    })),
    coverImage: DEMO_IMAGES.portfolio.wedding[0],
  },
];

export default function ClientGalleryPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeGallery, setActiveGallery] = useState(clientGalleries[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === activeGallery.password) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full text-center">
          <Camera className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-2">
            Client Gallery
          </h1>
          <p className="text-gray-400 mb-8">
            Enter the password provided by {SITE_NAME} to access your private
            gallery.
          </p>

          <form
            onSubmit={handleLogin}
            className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10"
          >
            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}
            <div className="relative mb-4">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter gallery password"
                required
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
            >
              Access Gallery
            </button>
            <p className="mt-4 text-gray-500 text-xs">
              Demo password: priya2026
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {activeGallery.name}
          </h1>
          <p className="text-muted">{activeGallery.date}</p>
          <p className="text-muted text-sm mt-2">
            {activeGallery.images.length} Photos
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() =>
              alert(
                "In production, this would download all images as a ZIP file."
              )
            }
            className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
          >
            <Download className="w-5 h-5" /> Download All
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {activeGallery.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              onClick={() => {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        images={activeGallery.images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
