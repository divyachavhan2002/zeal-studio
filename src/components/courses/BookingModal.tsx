"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  GraduationCap,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

const batchTimes = [
  "Morning Batch (9:00 AM – 12:00 PM)",
  "Afternoon Batch (1:00 PM – 4:00 PM)",
  "Evening Batch (5:00 PM – 8:00 PM)",
  "Weekend Batch (Sat & Sun — 10:00 AM – 2:00 PM)",
];

export default function BookingModal({
  isOpen,
  onClose,
  courseTitle,
}: BookingModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: courseTitle,
    batchTime: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/courses/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");

      // After 2 seconds redirect to WhatsApp
      setTimeout(() => {
        const whatsappText = encodeURIComponent(
          `Hi! I just booked the "${form.course}" course.\n\nName: ${form.name}\nBatch: ${form.batchTime}\n\nLooking forward to it!`
        );
        window.open(
          `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`,
          "_blank"
        );
        onClose();
        setStatus("idle");
        setForm({
          name: "",
          email: "",
          phone: "",
          course: courseTitle,
          batchTime: "",
          message: "",
        });
      }, 2500);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to submit booking"
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Header */}
            <div className="relative p-6 pb-4 border-b border-white/10">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#f43f5e]/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#f43f5e]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Book Now</h2>
                  <p className="text-gray-400 text-sm">
                    Reserve your seat for the course
                  </p>
                </div>
              </div>
            </div>

            {/* Success State */}
            {status === "success" ? (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Booking Confirmed!
                </h3>
                <p className="text-gray-400 mb-2">
                  Thank you, {form.name}! Your seat for{" "}
                  <span className="text-[#f43f5e] font-semibold">
                    {form.course}
                  </span>{" "}
                  has been reserved.
                </p>
                <p className="text-gray-500 text-sm">
                  Redirecting you to WhatsApp to confirm...
                </p>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4 text-gray-500" />
                    Full Name <span className="text-[#f43f5e]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f43f5e]/50 focus:ring-1 focus:ring-[#f43f5e]/20 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    Email Address <span className="text-[#f43f5e]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f43f5e]/50 focus:ring-1 focus:ring-[#f43f5e]/20 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    Phone Number <span className="text-[#f43f5e]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f43f5e]/50 focus:ring-1 focus:ring-[#f43f5e]/20 transition-colors"
                  />
                </div>

                {/* Course (auto-filled, read-only) */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <GraduationCap className="w-4 h-4 text-gray-500" />
                    Selected Course
                  </label>
                  <input
                    type="text"
                    name="course"
                    value={form.course}
                    readOnly
                    className="w-full px-4 py-3 bg-[#f43f5e]/5 border border-[#f43f5e]/20 rounded-xl text-[#f43f5e] font-medium cursor-not-allowed"
                  />
                </div>

                {/* Preferred Batch Time */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    Preferred Batch Time{" "}
                    <span className="text-[#f43f5e]">*</span>
                  </label>
                  <select
                    name="batchTime"
                    required
                    value={form.batchTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#f43f5e]/50 focus:ring-1 focus:ring-[#f43f5e]/20 transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#1a1a1a]">
                      Select a batch time
                    </option>
                    {batchTimes.map((t) => (
                      <option key={t} value={t} className="bg-[#1a1a1a]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message (optional) */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <MessageSquare className="w-4 h-4 text-gray-500" />
                    Message{" "}
                    <span className="text-gray-500 font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any questions or special requirements..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f43f5e]/50 focus:ring-1 focus:ring-[#f43f5e]/20 transition-colors resize-none"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#f43f5e] text-white font-bold rounded-xl hover:bg-[#e11d48] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-base"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Confirm Booking
                    </>
                  )}
                </button>

                <p className="text-center text-gray-500 text-xs">
                  By booking, you agree to our terms. We&apos;ll also redirect
                  you to WhatsApp for instant confirmation.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
