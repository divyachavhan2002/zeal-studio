import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COURSES } from "@/lib/constants";

// In-memory mutable store initialised from constants
const coursesStore = COURSES.map((c) => ({
  ...c,
  status: "active" as string,
}));

// GET /api/courses — List all courses
export async function GET() {
  return NextResponse.json({
    success: true,
    courses: coursesStore,
    total: coursesStore.length,
  });
}

// POST /api/courses — Create a new course
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      duration,
      level,
      description,
      highlights,
      image,
      slug,
    } = body;

    if (!title || !duration || !level) {
      return NextResponse.json(
        { success: false, error: "Title, duration, and level are required" },
        { status: 400 }
      );
    }

    const newCourse = {
      id: Date.now().toString(),
      slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title,
      duration,
      icon: "camera",
      level,
      image: image || "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
      bannerImage: image || "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&q=80",
      description: description || "",
      highlights: highlights || [],
      skillsCovered: [],
      whatYouWillLearn: [],
      curriculum: [],
      studentWorkImages: [],
      status: "active",
    };

    coursesStore.push(newCourse);

    return NextResponse.json({
      success: true,
      message: "Course created successfully",
      course: newCourse,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to create course" },
      { status: 500 }
    );
  }
}

// PUT /api/courses — Update an existing course
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Course ID is required" },
        { status: 400 }
      );
    }

    const idx = coursesStore.findIndex((c) => c.id === id);
    if (idx === -1) {
      return NextResponse.json(
        { success: false, error: "Course not found" },
        { status: 404 }
      );
    }

    coursesStore[idx] = { ...coursesStore[idx], ...updates };

    return NextResponse.json({
      success: true,
      message: "Course updated successfully",
      course: coursesStore[idx],
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to update course" },
      { status: 500 }
    );
  }
}

// DELETE /api/courses — Delete a course
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Course ID is required" },
        { status: 400 }
      );
    }

    const idx = coursesStore.findIndex((c) => c.id === id);
    if (idx === -1) {
      return NextResponse.json(
        { success: false, error: "Course not found" },
        { status: 404 }
      );
    }

    coursesStore.splice(idx, 1);

    return NextResponse.json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to delete course" },
      { status: 500 }
    );
  }
}
