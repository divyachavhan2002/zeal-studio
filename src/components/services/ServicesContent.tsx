"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import SectionWrapper, {
  SectionHeading,
} from "@/components/ui/SectionWrapper";
import { SERVICES } from "@/lib/constants";

const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We start with understanding your vision, preferences, and requirements through a detailed discussion.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We plan the shoot logistics — location scouting, timeline, mood boards, and creative direction.",
  },
  {
    step: "03",
    title: "The Shoot",
    description:
      "On the day, our team captures every moment with artistic precision and professional equipment.",
  },
  {
    step: "04",
    title: "Post-Production",
    description:
      "Each image is carefully edited, color-graded, and retouched to perfection before delivery.",
  },
  {
    step: "05",
    title: "Delivery",
    description:
      "Receive your curated gallery through our secure online platform, ready for download and sharing.",
  },
];

export default function ServicesContent() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative h-[50vh] bg-secondary flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Professional photography packages designed to capture your most
            important moments perfectly.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <SectionWrapper className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Packages"
            title="Choose Your Perfect Package"
            description="Transparent pricing with no hidden costs. Every package includes professional editing, online gallery, and high-resolution files."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative p-8 rounded-2xl border transition-all hover:shadow-xl ${
                  i === 0
                    ? "bg-primary/5 border-primary shadow-lg"
                    : "bg-background dark:bg-secondary border-border"
                }`}
              >
                {i === 0 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm mb-4">{service.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">
                    {service.price}
                  </span>
                  <span className="text-muted text-sm ml-1">starting</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    i === 0
                      ? "bg-primary text-black hover:bg-primary-dark"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-black"
                  }`}
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted mt-8 text-sm">
            * Custom packages available. Contact us for a personalized quote
            based on your requirements.
          </p>
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper className="py-24 px-4 bg-surface dark:bg-surface-dark">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="How It Works"
            title="Our Process"
            description="From initial consultation to final delivery, here's what you can expect when working with us."
          />

          <div className="space-y-8">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary text-xl font-bold">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-24 px-4 bg-secondary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Session?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Let&apos;s discuss your project and create something extraordinary
            together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-semibold rounded-full text-lg hover:bg-primary-dark transition-all hover:scale-105"
          >
            Contact Us Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
