"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  BarChart3,
  ChevronDown,
  CheckCircle,
  ArrowLeft,
  GraduationCap,
  Lightbulb,
  BookOpen,
  Camera,
  ImageIcon,
} from "lucide-react";
import BookingModal from "@/components/courses/BookingModal";

interface CourseData {
  id: string;
  slug: string;
  title: string;
  duration: string;
  icon: string;
  level: string;
  image: string;
  bannerImage: string;
  description: string;
  highlights: string[];
  skillsCovered: string[];
  whatYouWillLearn: string[];
  curriculum: { module: string; topics: string[] }[];
  studentWorkImages: string[];
}

export default function CourseDetailContent({
  course,
}: {
  course: CourseData;
}) {
  const [openModules, setOpenModules] = useState<Set<number>>(new Set([0]));
  const [bookingOpen, setBookingOpen] = useState(false);

  const toggleModule = (idx: number) => {
    setOpenModules((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className="page-transition bg-[#0d0d0d] min-h-screen">
      {/* ──────────── HERO BANNER ──────────── */}
      <section className="relative h-[55vh] md:h-[60vh] flex items-end overflow-hidden">
        <Image
          src={course.bannerImage}
          alt={course.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/60 to-black/30" />

        {/* Back button */}
        <Link
          href="/courses"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> All Courses
        </Link>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-semibold text-primary border border-primary/30">
                <Clock className="w-4 h-4" />
                {course.duration}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f43f5e]/20 backdrop-blur-sm rounded-full text-sm font-semibold text-[#f43f5e] border border-[#f43f5e]/30">
                <BarChart3 className="w-4 h-4" />
                {course.level}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
              {course.title}
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
              {course.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────── OVERVIEW — SKILLS COVERED ──────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Skills You&apos;ll Master
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {course.skillsCovered.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <Camera className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-gray-300 text-sm font-medium">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ──────────── WHAT YOU WILL LEARN ──────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#f43f5e]/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#f43f5e]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                What You Will Learn
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whatYouWillLearn.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-green-500/20 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────── CURRICULUM — EXPANDABLE MODULES ──────────── */}
      <section className="py-16 px-6 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Curriculum
              </h2>
              <span className="ml-auto text-sm text-gray-500">
                {course.curriculum.length} Modules
              </span>
            </div>

            <div className="space-y-3">
              {course.curriculum.map((mod, idx) => {
                const isOpen = openModules.has(idx);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleModule(idx)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-white font-semibold text-sm md:text-base">
                          {mod.module}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="px-6 pb-5 space-y-2 ml-11">
                        {mod.topics.map((topic, ti) => (
                          <li
                            key={ti}
                            className="flex items-start gap-2 text-gray-400 text-sm"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────── STUDENT WORK PREVIEW ──────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#f43f5e]/10 rounded-lg flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-[#f43f5e]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Student Work Preview
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {course.studentWorkImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt={`Student work from ${course.title} - ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-6">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
              >
                View Full Gallery <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────── CTA SECTION ──────────── */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1a1a1a] to-[#111111]">
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Enroll in {course.title}?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Limited seats per batch. Reserve yours now and start your
            photography journey with {course.duration} of intensive hands-on
            training.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#f43f5e] text-white font-bold rounded-full text-lg hover:bg-[#e11d48] transition-all hover:scale-105 shadow-lg shadow-[#f43f5e]/20"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* ──────────── STICKY BOOK NOW BUTTON ──────────── */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
          onClick={() => setBookingOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-[#f43f5e] text-white font-bold rounded-full shadow-2xl shadow-[#f43f5e]/30 hover:bg-[#e11d48] transition-all hover:scale-105"
        >
          <GraduationCap className="w-5 h-5" />
          Book Now
        </motion.button>
      </div>

      {/* ──────────── BOOKING MODAL ──────────── */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        courseTitle={course.title}
      />
    </div>
  );
}
