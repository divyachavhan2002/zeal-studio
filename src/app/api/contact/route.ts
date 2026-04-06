import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// In-memory store for demo - replace with database in production
const inquiries: Array<{
  id: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  message: string;
  status: string;
  createdAt: string;
}> = [];

// POST /api/contact - Submit contact form
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventType, date, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const inquiry = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || "",
      eventType: eventType || "",
      date: date || "",
      message,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    inquiries.push(inquiry);

    // In production, send email notification here
    // await sendEmail({ to: 'hello@zealstudio.com', subject: `New Inquiry from ${name}`, ... })

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll get back to you within 24 hours.",
      inquiry,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}

// GET /api/contact - List all inquiries (admin only)
export async function GET(request: NextRequest) {
  // In production, verify JWT token
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    inquiries,
    total: inquiries.length,
  });
}
