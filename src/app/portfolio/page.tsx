import type { Metadata } from "next";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio | Wedding, Fashion & Event Photography",
  description:
    "Browse our stunning photography portfolio featuring weddings, fashion shoots, portraits, events, and nature photography. Based in Pune, serving clients across India.",
  keywords: [
    "photography portfolio",
    "wedding photos",
    "fashion photography",
    "event photography Pune",
    "portrait photography",
  ],
};

export default function PortfolioPage() {
  return (
    <div className="page-transition">
      {/* Hero Banner */}
      <section className="relative h-[50vh] bg-secondary flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of stunning photography across different genres.
            Each image tells a unique story.
          </p>
        </div>
      </section>

      <PortfolioGallery />
    </div>
  );
}
