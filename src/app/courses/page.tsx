import type { Metadata } from "next";
import CoursesContent from "@/components/courses/CoursesContent";

export const metadata: Metadata = {
  title: "Photography Courses | Learn Professional Photography",
  description:
    "Enroll in professional photography courses at Zeal Studio, Pune. Foundation, Advanced, Fashion, Wedding photography diplomas & crash courses. Hands-on training by industry experts.",
  keywords: [
    "photography course Pune",
    "learn photography",
    "wedding photography course",
    "fashion photography diploma",
    "photography classes near me",
    "digital editing course",
    "photography coaching",
  ],
};

export default function CoursesPage() {
  return <CoursesContent />;
}
