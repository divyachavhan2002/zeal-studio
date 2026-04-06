"use client";

import Link from "next/link";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/icons/SocialIcons";
import {
  SITE_NAME,
  SITE_TAGLINE,
  NAV_LINKS,
  SOCIAL_LINKS,
  EMAIL,
  PHONE_NUMBER,
  ADDRESS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* CTA Section */}
      <div className="bg-primary/10 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s capture your special moments together. Book a session today
            and let our lens tell your story.
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
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Camera className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-wider">
                {SITE_NAME}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">{SITE_TAGLINE}</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Award-winning photography studio specializing in weddings,
              portraits, fashion, and events. Turning moments into timeless art.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/admin"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary">
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get photography tips, exclusive offers, and updates.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
              className="space-y-3"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-2.5 bg-white/10 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary/20 hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary/20 hover:text-primary transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary/20 hover:text-primary transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
