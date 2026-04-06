import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// POST /api/auth/login
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Demo authentication - replace with real database check
    if (email === "admin@zealstudio.com" && password === "admin123") {
      // In production, use proper JWT with jsonwebtoken library
      const token = `jwt_${Date.now()}_${Math.random().toString(36).substr(2)}`;

      return NextResponse.json({
        success: true,
        token,
        user: {
          email,
          name: "Admin",
          role: "admin",
        },
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
