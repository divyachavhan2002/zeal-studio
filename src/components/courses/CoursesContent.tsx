"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Camera,
  Aperture,
  SlidersHorizontal,
  Zap,
  Sparkles,
  Heart,
  Clock,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import SectionWrapper, {
  SectionHeading,
} from "@/components/ui/SectionWrapper";
import { COURSES } from "@/lib/constants";

// Map icon strings to Lucide components
const iconMap: Record<string, React.ElementType> = {
  camera: Camera,
  aperture: Aperture,
  sliders: SlidersHorizontal,
  zap: Zap,
  sparkles: Sparkles,
  heart: Heart,
};

const levelColor: Record<string, string> = {
  Beginner: "bg-green-500/10 text-green-400 border-green-500/20",
  Intermediate: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Advanced: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Beginner to Intermediate":
    "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "All Levels": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

const whyChoose = [
  {
    icon: Users,
    title: "Industry Experts",
    description:
      "Learn directly from award-winning photographers with 8+ years of real-world experience.",
  },
  {
    icon: Camera,
    title: "Hands-On Training",
    description:
      "80% practical sessions — real shoots, live projects, and on-location assignments.",
  },
  {
    icon: Award,
    title: "Certification",
    description:
      "Receive a recognized certificate on completion to kickstart your professional career.",
  },
  {
    icon: BookOpen,
    title: "Small Batches",
    description:
      "Limited seats per batch ensure personalized attention and in-depth mentorship.",
  },
];

export default function CoursesContent() {
  return (
    <div className="page-transition">
      {/* Hero Banner */}
      <section className="relative h-[50vh] bg-secondary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium text-sm tracking-[0.25em] uppercase mb-3 block"
          >
            Learn From The Best
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Photography Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Professional photography courses designed for beginners to advanced
            learners. Start your creative journey today.
          </motion.p>
        </div>
      </section>

      {/* Courses Grid */}
      <SectionWrapper className="py-24 px-4 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Our Programmes"
            title="Explore Our Courses"
            description="From quick crash courses to in-depth diplomas — choose the programme that fits your goals."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course, i) => {
              const IconComponent = iconMap[course.icon] || Camera;
              const lvlClass =
                levelColor[course.level] ||
                "bg-gray-500/10 text-gray-400 border-gray-500/20";
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col"
                >
                  {/* Thumbnail Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                    {/* Duration badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-xs font-semibold text-primary border border-primary/20">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </div>
                    {/* Level badge */}
                    <div
                      className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm ${lvlClass}`}
                    >
                      {course.level}
                    </div>
                  </div>

                  <div className="relative p-6 flex flex-col flex-1">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-[#f43f5e] uppercase tracking-wide leading-snug">
                        {course.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                      {course.description}
                    </p>

                    {/* Highlights preview */}
                    <ul className="space-y-1.5 mb-6">
                      {course.highlights.slice(0, 3).map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-gray-400 text-xs"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button — "More Details" linking to detail page */}
                    <Link
                      href={`/courses/${course.slug}`}
                      className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#f43f5e] text-white font-semibold rounded-lg hover:bg-[#e11d48] transition-all hover:scale-[1.02] text-sm w-full"
                    >
                      More Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper className="py-24 px-4 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            subtitle="Why Zeal Studio"
            title="Why Learn With Us?"
            description="Our photography courses are designed to turn passion into profession with real-world experience."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Enrollment CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Photography Journey?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Enroll now and learn from industry professionals. Limited seats
            available per batch — don&apos;t miss out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f43f5e] text-white font-semibold rounded-full text-lg hover:bg-[#e11d48] transition-all hover:scale-105"
            >
              Enroll Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`https://wa.me/919876543210?text=Hi! I'm interested in your photography courses.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full text-lg hover:bg-white hover:text-black transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
