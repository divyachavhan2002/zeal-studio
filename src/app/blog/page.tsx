import type { Metadata } from "next";
import BlogListing from "@/components/blog/BlogListing";

export const metadata: Metadata = {
  title: "Photography Blog | Tips, Trends & Inspiration",
  description:
    "Discover photography tips, industry trends, behind-the-scenes stories, and creative inspiration from Zeal Studio's professional photography blog.",
  keywords: [
    "photography blog",
    "wedding photography tips",
    "photography trends 2026",
    "portrait posing guide",
    "photography inspiration",
  ],
};

export default function BlogPage() {
  return <BlogListing />;
}
