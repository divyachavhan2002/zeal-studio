"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper, {
  SectionHeading,
} from "@/components/ui/SectionWrapper";
import { DEMO_IMAGES } from "@/lib/constants";

const featured = [
  {
    title: "The Royal Wedding",
    category: "Wedding",
    image: DEMO_IMAGES.portfolio.wedding[0],
  },
  {
    title: "Urban Fashion",
    category: "Fashion",
    image: DEMO_IMAGES.portfolio.fashion[0],
  },
  {
    title: "Corporate Gala",
    category: "Events",
    image: DEMO_IMAGES.portfolio.events[0],
  },
  {
    title: "Golden Hour Portrait",
    category: "Portrait",
    image: DEMO_IMAGES.portfolio.portrait[0],
  },
];

export default function FeaturedWork() {
  return (
    <SectionWrapper className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Work"
          title="Featured Projects"
          description="A curated selection of our finest work across different genres of photography."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Link href="/portfolio" className="group block relative overflow-hidden rounded-xl aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.category} photography by Zeal Studio`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-sm font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-1">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-black transition-all"
          >
            View All Work →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
