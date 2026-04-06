import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COURSES, SITE_NAME, SITE_URL } from "@/lib/constants";
import CourseDetailContent from "@/components/courses/CourseDetailContent";

// Generate static params for all courses
export function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

// Dynamic metadata per course
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: `${course.title} | Photography Courses`,
    description: course.description,
    keywords: [
      course.title,
      "Photography Courses in Pune",
      "Best Photography Classes",
      "Wedding Photography Training",
      `${course.level} Photography Course`,
      "Photography Training",
      `${course.title} Pune`,
      SITE_NAME,
    ],
    openGraph: {
      title: `${course.title} — ${course.duration} | ${SITE_NAME}`,
      description: course.description,
      images: [{ url: course.bannerImage, width: 1200, height: 630 }],
      type: "website",
      url: `${SITE_URL}/courses/${course.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | ${SITE_NAME}`,
      description: course.description,
      images: [course.bannerImage],
    },
    alternates: {
      canonical: `${SITE_URL}/courses/${course.slug}`,
    },
  };
}

export default async function CourseDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  // JSON-LD structured data for the course
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    timeRequired: course.duration,
    educationalLevel: course.level,
    image: course.bannerImage,
    url: `${SITE_URL}/courses/${course.slug}`,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Blended",
      instructor: {
        "@type": "Person",
        name: "Zeal Studio Faculty",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseDetailContent course={course} />
    </>
  );
}
