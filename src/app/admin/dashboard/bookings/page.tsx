"use client";

import { useState } from "react";
import { Calendar, Clock, User, MapPin, Check, X, Plus } from "lucide-react";

const initialBookings = [
  {
    id: "1",
    client: "Sneha & Arjun Kapoor",
    type: "Wedding",
    date: "2026-04-15",
    time: "10:00 AM",
    location: "Aga Khan Palace, Pune",
    status: "confirmed",
    package: "Premium Wedding",
    amount: "₹75,000",
    notes: "Full day coverage, 2 photographers",
  },
  {
    id: "2",
    client: "Riya Menon",
    type: "Portrait",
    date: "2026-04-18",
    time: "2:00 PM",
    location: "Studio",
    status: "confirmed",
    package: "Portrait Standard",
    amount: "₹15,000",
    notes: "3 outfit changes",
  },
  {
    id: "3",
    client: "TechCorp India",
    type: "Corporate Event",
    date: "2026-04-22",
    time: "9:00 AM",
    location: "JW Marriott, Pune",
    status: "pending",
    package: "Event Coverage",
    amount: "₹45,000",
    notes: "Full day event, need 2nd shooter",
  },
  {
    id: "4",
    client: "Neha & Raj",
    type: "Pre-Wedding",
    date: "2026-05-01",
    time: "5:00 PM",
    location: "Lavasa",
    status: "confirmed",
    package: "Pre-Wedding Premium",
    amount: "₹30,000",
    notes: "Golden hour shoot",
  },
];

export default function BookingsAdminPage() {
  const [bookings, setBookings] = useState(initialBookings);
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? bookings
      : bookings.filter((b) => b.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bookings</h1>
          <p className="text-muted mt-1">
            Manage upcoming shoots and session bookings.
          </p>
        </div>
        <button
          onClick={() => alert("Booking form would open")}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
        >
          <Plus className="w-5 h-5" /> New Booking
        </button>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {["all", "confirmed", "pending", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
              filter === f
                ? "bg-primary text-black"
                : "bg-surface dark:bg-surface-dark text-muted border border-border"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Bookings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((booking) => (
          <div
            key={booking.id}
            className="bg-white dark:bg-gray-900 rounded-xl border border-border p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {booking.client}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {booking.type}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                  booking.status === "confirmed"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : booking.status === "pending"
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {booking.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-sm text-muted">
                <Calendar className="w-4 h-4 text-primary" />
                {booking.date}
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <Clock className="w-4 h-4 text-primary" />
                {booking.time}
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin className="w-4 h-4 text-primary" />
                {booking.location}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted">{booking.package}</p>
                <p className="text-lg font-bold text-primary">
                  {booking.amount}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => alert("Edit booking")}
                  className="px-4 py-2 border border-border rounded-lg text-sm text-foreground hover:bg-surface transition-colors"
                >
                  Edit
                </button>
                {booking.status === "pending" && (
                  <button
                    onClick={() => {
                      setBookings(
                        bookings.map((b) =>
                          b.id === booking.id
                            ? { ...b, status: "confirmed" }
                            : b
                        )
                      );
                    }}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors"
                  >
                    Confirm
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
