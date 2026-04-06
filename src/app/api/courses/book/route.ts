import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// In-memory store for demo — replace with database in production
export const courseBookings: Array<{
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  batchTime: string;
  message: string;
  status: string;
  createdAt: string;
}> = [];

// POST /api/courses/book — Submit a course booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, course, batchTime, message } = body;

    if (!name || !email || !phone || !course || !batchTime) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, phone, course, and batch time are required",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const booking = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      course,
      batchTime,
      message: message || "",
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    courseBookings.push(booking);

    // In production:
    // 1. Save to database
    // 2. Send confirmation email to student
    // 3. Send notification email to admin
    // await sendConfirmationEmail({ to: email, course, batchTime })
    // await sendAdminNotification({ booking })

    return NextResponse.json({
      success: true,
      message: `Booking confirmed for ${course}! We'll contact you shortly.`,
      booking,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to submit booking" },
      { status: 500 }
    );
  }
}

// GET /api/courses/book — List all bookings (admin)
export async function GET() {
  return NextResponse.json({
    success: true,
    bookings: courseBookings,
    total: courseBookings.length,
  });
}
