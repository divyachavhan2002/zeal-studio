import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Blog CRUD API

const blogPosts: Array<{
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}> = [];

// GET /api/blog - List blog posts
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  let filtered = blogPosts;
  if (status) {
    filtered = blogPosts.filter((p) => p.status === status);
  }

  return NextResponse.json({
    success: true,
    posts: filtered,
    total: filtered.length,
  });
}

// POST /api/blog - Create blog post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, title, excerpt, content, category, image } = body;

    if (!title || !content) {
      return NextResponse.json(
        { success: false, error: "Title and content are required" },
        { status: 400 }
      );
    }

    const post = {
      id: Date.now().toString(),
      slug: slug || title.toLowerCase().replace(/\s+/g, "-"),
      title,
      excerpt: excerpt || "",
      content,
      category: category || "General",
      image: image || "",
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    blogPosts.push(post);

    return NextResponse.json({ success: true, post });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to create post" },
      { status: 500 }
    );
  }
}

// PUT /api/blog - Update blog post
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    const index = blogPosts.findIndex((p) => p.id === id);
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 }
      );
    }

    blogPosts[index] = {
      ...blogPosts[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      post: blogPosts[index],
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to update post" },
      { status: 500 }
    );
  }
}

// DELETE /api/blog - Delete blog post
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Post ID required" },
        { status: 400 }
      );
    }

    const index = blogPosts.findIndex((p) => p.id === id);
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 }
      );
    }

    blogPosts.splice(index, 1);

    return NextResponse.json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to delete post" },
      { status: 500 }
    );
  }
}
