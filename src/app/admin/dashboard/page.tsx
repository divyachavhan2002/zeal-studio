"use client";

import { motion } from "framer-motion";
import {
  Image as ImageIcon,
  FileText,
  Users,
  TrendingUp,
  Eye,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Total Images",
    value: "1,247",
    change: "+12%",
    trend: "up",
    icon: ImageIcon,
    color: "bg-blue-500",
    href: "/admin/dashboard/gallery",
  },
  {
    title: "Blog Posts",
    value: "24",
    change: "+3",
    trend: "up",
    icon: FileText,
    color: "bg-green-500",
    href: "/admin/dashboard/blog",
  },
  {
    title: "Inquiries",
    value: "48",
    change: "+18%",
    trend: "up",
    icon: Users,
    color: "bg-purple-500",
    href: "/admin/dashboard/inquiries",
  },
  {
    title: "Page Views",
    value: "12.5K",
    change: "+8%",
    trend: "up",
    icon: Eye,
    color: "bg-orange-500",
    href: "/admin/dashboard",
  },
];

const recentInquiries = [
  {
    name: "Priya Sharma",
    email: "priya@gmail.com",
    type: "Wedding",
    date: "2026-04-05",
    status: "New",
  },
  {
    name: "Vikram Patel",
    email: "vikram@gmail.com",
    type: "Corporate Event",
    date: "2026-04-04",
    status: "Replied",
  },
  {
    name: "Anjali Desai",
    email: "anjali@gmail.com",
    type: "Portrait",
    date: "2026-04-03",
    status: "New",
  },
  {
    name: "Rohit Kumar",
    email: "rohit@gmail.com",
    type: "Fashion",
    date: "2026-04-02",
    status: "Booked",
  },
];

const upcomingBookings = [
  {
    client: "Sneha & Arjun",
    type: "Wedding",
    date: "Apr 15, 2026",
    time: "10:00 AM",
  },
  {
    client: "Riya Menon",
    type: "Portrait",
    date: "Apr 18, 2026",
    time: "2:00 PM",
  },
  {
    client: "TechCorp India",
    type: "Corporate Event",
    date: "Apr 22, 2026",
    time: "9:00 AM",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted mt-1">
          Welcome back! Here&apos;s an overview of your studio.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={stat.href}
              className="block p-6 bg-white dark:bg-gray-900 rounded-2xl border border-border hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.change}
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {stat.value}
              </h3>
              <p className="text-muted text-sm mt-1">{stat.title}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Inquiries */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">
              Recent Inquiries
            </h2>
            <Link
              href="/admin/dashboard/inquiries"
              className="text-primary text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentInquiries.map((inquiry) => (
              <div
                key={inquiry.email}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {inquiry.name}
                  </p>
                  <p className="text-muted text-xs">{inquiry.type}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    inquiry.status === "New"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      : inquiry.status === "Replied"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  }`}
                >
                  {inquiry.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Bookings */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">
              Upcoming Bookings
            </h2>
            <Link
              href="/admin/dashboard/bookings"
              className="text-primary text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingBookings.map((booking) => (
              <div
                key={booking.client}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {booking.client}
                    </p>
                    <p className="text-muted text-xs">{booking.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-foreground text-sm">{booking.date}</p>
                  <p className="text-muted text-xs">{booking.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-6">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            href="/admin/dashboard/gallery"
            className="p-4 bg-surface dark:bg-surface-dark rounded-xl text-center hover:bg-primary/10 transition-colors border border-border"
          >
            <ImageIcon className="w-8 h-8 text-primary mx-auto mb-2" />
            <span className="text-sm font-medium text-foreground">
              Upload Photos
            </span>
          </Link>
          <Link
            href="/admin/dashboard/blog"
            className="p-4 bg-surface dark:bg-surface-dark rounded-xl text-center hover:bg-primary/10 transition-colors border border-border"
          >
            <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
            <span className="text-sm font-medium text-foreground">
              New Blog Post
            </span>
          </Link>
          <Link
            href="/admin/dashboard/inquiries"
            className="p-4 bg-surface dark:bg-surface-dark rounded-xl text-center hover:bg-primary/10 transition-colors border border-border"
          >
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <span className="text-sm font-medium text-foreground">
              View Leads
            </span>
          </Link>
          <Link
            href="/admin/dashboard/seo"
            className="p-4 bg-surface dark:bg-surface-dark rounded-xl text-center hover:bg-primary/10 transition-colors border border-border"
          >
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
            <span className="text-sm font-medium text-foreground">
              SEO Settings
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
