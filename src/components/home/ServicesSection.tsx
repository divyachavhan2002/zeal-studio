"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Camera, Users, CalendarDays, Sparkles, Mountain } from "lucide-react";
import SectionWrapper, {
  SectionHeading,
} from "@/components/ui/SectionWrapper";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description:
      "Capturing the magic of your special day with timeless elegance and artistic vision.",
    href: "/services",
  },
  {
    icon: Camera,
    title: "Portrait Sessions",
    description:
      "Professional portraits that reveal your authentic personality and style.",
    href: "/services",
  },
  {
    icon: Sparkles,
    title: "Fashion & Editorial",
    description:
      "High-end fashion shoots for models, designers, and brands that stand out.",
    href: "/services",
  },
  {
    icon: CalendarDays,
    title: "Event Coverage",
    description:
      "Complete documentation of corporate events, parties, and celebrations.",
    href: "/services",
  },
  {
    icon: Users,
    title: "Family Portraits",
    description:
      "Beautiful family moments captured in natural, relaxed settings.",
    href: "/services",
  },
  {
    icon: Mountain,
    title: "Nature & Landscape",
    description:
      "Breathtaking nature photography showcasing the beauty of the natural world.",
    href: "/services",
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper className="py-24 px-4 bg-surface dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Services"
          description="From intimate portraits to grand celebrations, we offer comprehensive photography services tailored to your needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={service.href}
                className="group block p-8 bg-background dark:bg-secondary rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                  Learn More →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
