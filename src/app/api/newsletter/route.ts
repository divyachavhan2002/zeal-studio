import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const subscribers: string[] = [];

// POST /api/newsletter - Subscribe to newsletter
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (subscribers.includes(email)) {
      return NextResponse.json(
        { success: false, error: "Already subscribed" },
        { status: 400 }
      );
    }

    subscribers.push(email);

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter!",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}

// GET /api/newsletter - List subscribers (admin)
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    subscribers,
    total: subscribers.length,
  });
}
