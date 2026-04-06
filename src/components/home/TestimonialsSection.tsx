"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionWrapper, {
  SectionHeading,
} from "@/components/ui/SectionWrapper";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          subtitle="Client Love"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from the couples and clients we've had the pleasure of working with."
        />

        <div className="relative">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-surface dark:bg-surface-dark rounded-2xl p-8 md:p-12 text-center border border-border"
          >
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
              &ldquo;{TESTIMONIALS[active].text}&rdquo;
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: TESTIMONIALS[active].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                )
              )}
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={TESTIMONIALS[active].image}
                  alt={TESTIMONIALS[active].name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-foreground">
                  {TESTIMONIALS[active].name}
                </h4>
                <p className="text-muted text-sm">
                  {TESTIMONIALS[active].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() =>
                setActive(
                  (prev) =>
                    (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                )
              }
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === active ? "bg-primary w-8" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
            <button
              onClick={() =>
                setActive((prev) => (prev + 1) % TESTIMONIALS.length)
              }
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
