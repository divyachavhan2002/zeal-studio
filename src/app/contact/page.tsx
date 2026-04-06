import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Book Your Photography Session",
  description:
    "Get in touch with Zeal Studio for wedding photography, portraits, events, and more. Book your session today. Based in Koregaon Park, Pune.",
  keywords: [
    "contact photographer Pune",
    "book photography session",
    "photography inquiry",
    "wedding photographer contact",
  ],
};

export default function ContactPage() {
  return <ContactContent />;
}
