"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail, MessageCircle, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { WHATSAPP_NUMBER, EMAIL } from "@/lib/constants";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exit-intent popup
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShownPopup]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in your photography services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 blink-animation"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>

      {/* Email Button */}
      <a
        href={`mailto:${EMAIL}`}
        className="fixed bottom-40 right-6 z-40 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all hover:scale-110 blink-animation"
        style={{ animationDelay: "1s" }}
        aria-label="Send Email"
      >
        <Mail className="w-6 h-6" />
      </a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-6 z-40 p-3 bg-primary text-black rounded-full shadow-lg hover:bg-primary-dark transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Exit-Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowExitPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowExitPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-center">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Wait! Don&apos;t Miss Out
                </h3>
                <p className="text-muted mb-6">
                  Get 10% off your first photography session. Enter your email
                  below!
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setShowExitPopup(false);
                    alert("Thank you! We'll send you the discount code.");
                  }}
                  className="space-y-3"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary bg-transparent text-foreground"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Get My 10% Discount
                  </button>
                </form>
                <button
                  onClick={() => setShowExitPopup(false)}
                  className="mt-3 text-sm text-muted hover:text-foreground transition-colors"
                >
                  No thanks, I&apos;ll pay full price
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
