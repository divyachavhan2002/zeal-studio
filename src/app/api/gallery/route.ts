import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Gallery CRUD API
// In production, connect to database and cloud storage (Cloudinary/S3)

const gallery: Array<{
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  altText: string;
  uploadedAt: string;
}> = [];

// GET /api/gallery - Get all images
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let filtered = gallery;
  if (category && category !== "All") {
    filtered = gallery.filter((img) => img.category === category);
  }

  return NextResponse.json({
    success: true,
    images: filtered,
    total: filtered.length,
  });
}

// POST /api/gallery - Upload image
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, category, imageUrl, altText } = body;

    const image = {
      id: Date.now().toString(),
      title,
      category,
      imageUrl,
      altText: altText || title,
      uploadedAt: new Date().toISOString(),
    };

    gallery.push(image);

    return NextResponse.json({
      success: true,
      image,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to upload image" },
      { status: 500 }
    );
  }
}

// DELETE /api/gallery - Delete image
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Image ID required" },
        { status: 400 }
      );
    }

    const index = gallery.findIndex((img) => img.id === id);
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Image not found" },
        { status: 404 }
      );
    }

    gallery.splice(index, 1);

    return NextResponse.json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to delete image" },
      { status: 500 }
    );
  }
}
