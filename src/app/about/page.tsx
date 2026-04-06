import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Our Story & Photography Journey",
  description:
    "Learn about Zeal Studio's photography journey, our passion for visual storytelling, and the team behind the lens. 8+ years of creating timeless memories in Pune.",
  keywords: [
    "about Zeal Studio",
    "photography team Pune",
    "professional photographer",
    "photography story",
  ],
};

export default function AboutPage() {
  return <AboutContent />;
}
