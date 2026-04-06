"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Camera,
  Heart,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";
import SectionWrapper, {
  SectionHeading,
} from "@/components/ui/SectionWrapper";
import { DEMO_IMAGES } from "@/lib/constants";

const achievements = [
  {
    icon: Award,
    title: "50+ Awards",
    description: "Recognized for excellence in photography across national and international platforms.",
  },
  {
    icon: Camera,
    title: "10,000+ Photos",
    description: "Delivered over ten thousand professionally edited photographs to happy clients.",
  },
  {
    icon: Heart,
    title: "500+ Weddings",
    description: "Captured the magic of over five hundred weddings and celebrations.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "A team of passionate photographers, editors, and creative directors.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every shot is carefully composed and timed to capture the perfect moment.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our heart into every project, treating each one as a work of art.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Pushing creative boundaries to deliver unique, memorable visuals.",
  },
];

export default function AboutContent() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative h-[50vh] bg-secondary flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            The story behind the lens — our passion, our journey, our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <SectionWrapper className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <Image
                  src={DEMO_IMAGES.about}
                  alt="Zeal Studio photographer at work capturing moments"
                  width={600}
                  height={700}
                  className="rounded-2xl object-cover w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-black p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">8+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Crafting Visual Stories Since 2018
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Zeal Studio was born from a simple yet powerful belief — that
                  every moment deserves to be captured beautifully. Founded in
                  2018 in the heart of Pune, we started as a one-person passion
                  project and have grown into a full-service photography studio
                  trusted by hundreds of clients.
                </p>
                <p>
                  Our journey has been one of relentless pursuit of excellence.
                  From our first wedding shoot to covering grand fashion events,
                  every project has taught us something new and pushed us to
                  evolve our craft.
                </p>
                <p>
                  Today, we are proud to be one of Pune&apos;s most sought-after
                  photography studios, known for our distinctive style that
                  blends candid authenticity with artistic composition. Our work
                  has been featured in leading publications and has earned
                  recognition at national photography awards.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block mt-8 px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-primary-dark transition-all hover:scale-105"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Achievements */}
      <SectionWrapper className="py-24 px-4 bg-surface dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Our Achievements"
            title="Numbers That Speak"
            description="Our track record of excellence and dedication to the craft of photography."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-8 bg-background dark:bg-secondary rounded-2xl border border-border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="What Drives Us"
            title="Our Core Values"
            description="The principles that guide every photograph we take and every client we serve."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <val.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {val.title}
                </h3>
                <p className="text-muted">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-24 px-4 bg-secondary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Whether it&apos;s your dream wedding, a fashion project, or a
            corporate event — we&apos;re ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-primary-dark transition-all hover:scale-105"
            >
              Book a Session
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
