"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Clock,
  GraduationCap,
  Upload,
  Eye,
  Users,
  Calendar,
  Mail,
  Phone,
  Search,
  Filter,
  Download,
} from "lucide-react";

interface Course {
  id: string;
  slug: string;
  title: string;
  duration: string;
  description: string;
  level: string;
  highlights: string[];
  image: string;
  status: string;
}

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  batchTime: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function CoursesAdminPage() {
  const [activeTab, setActiveTab] = useState<"courses" | "bookings">(
    "courses"
  );
  const [courses, setCourses] = useState<Course[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingCourse, setEditingCourse] = useState<{
    id: string;
    title: string;
    slug: string;
    duration: string;
    description: string;
    level: string;
    highlights: string[];
    image: string;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [bookingFilter, setBookingFilter] = useState("all");

  // Fetch courses from API
  useEffect(() => {
    fetch("/api/courses")
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setCourses(data.courses);
      })
      .catch(() => {});

    fetch("/api/courses/book")
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setBookings(data.bookings);
      })
      .catch(() => {});
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this course?")) return;

    const res = await fetch(`/api/courses?id=${id}`, { method: "DELETE" });
    const data = await res.json();
    if (data.success) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCourse) return;

    if (editingCourse.id) {
      // Update existing
      const res = await fetch("/api/courses", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingCourse),
      });
      const data = await res.json();
      if (data.success) {
        setCourses(
          courses.map((c) =>
            c.id === editingCourse.id ? { ...c, ...editingCourse } : c
          )
        );
      }
    } else {
      // Create new
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingCourse),
      });
      const data = await res.json();
      if (data.success) {
        setCourses([...courses, data.course]);
      }
    }
    setShowEditor(false);
  };

  const handleNewCourse = () => {
    setEditingCourse({
      id: "",
      title: "",
      slug: "",
      duration: "",
      description: "",
      level: "Beginner",
      highlights: [""],
      image: "",
    });
    setShowEditor(true);
  };

  const exportBookingsCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Course",
      "Batch Time",
      "Message",
      "Status",
      "Date",
    ];
    const rows = bookings.map((b) => [
      b.name,
      b.email,
      b.phone,
      b.course,
      b.batchTime,
      b.message,
      b.status,
      new Date(b.createdAt).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "course-bookings.csv";
    a.click();
  };

  const filteredBookings = bookings.filter((b) => {
    if (bookingFilter !== "all" && b.status !== bookingFilter) return false;
    if (
      searchQuery &&
      !b.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !b.course.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !b.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Courses Management
          </h1>
          <p className="text-muted mt-1">
            Manage photography courses, images, and student bookings.
          </p>
        </div>
        <div className="flex gap-3">
          {activeTab === "courses" && (
            <button
              onClick={handleNewCourse}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
            >
              <Plus className="w-5 h-5" /> Add Course
            </button>
          )}
          {activeTab === "bookings" && bookings.length > 0 && (
            <button
              onClick={exportBookingsCSV}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
            >
              <Download className="w-5 h-5" /> Export CSV
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-surface dark:bg-surface-dark rounded-xl p-1 w-fit">
        <button
          onClick={() => setActiveTab("courses")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeTab === "courses"
              ? "bg-primary text-black"
              : "text-muted hover:text-foreground"
          }`}
        >
          <GraduationCap className="w-4 h-4" /> Courses ({courses.length})
        </button>
        <button
          onClick={() => setActiveTab("bookings")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeTab === "bookings"
              ? "bg-primary text-black"
              : "text-muted hover:text-foreground"
          }`}
        >
          <Users className="w-4 h-4" /> Bookings ({bookings.length})
        </button>
      </div>

      {/* ──────────── COURSES TAB ──────────── */}
      {activeTab === "courses" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-900 rounded-xl border border-border overflow-hidden flex flex-col"
            >
              {/* Course Image */}
              <div className="relative h-40 bg-gray-100 dark:bg-gray-800">
                {course.image ? (
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted">
                    <Upload className="w-8 h-8" />
                  </div>
                )}
                <span
                  className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full ${
                    course.status === "active"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                >
                  {course.status === "active" ? "Active" : "Draft"}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {course.title}
                </h3>
                <div className="flex items-center gap-3 text-muted text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                  <span className="px-2 py-0.5 text-xs bg-surface dark:bg-surface-dark rounded-full">
                    {course.level}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                  {course.description}
                </p>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <button
                    onClick={() => {
                      setEditingCourse({
                        id: course.id,
                        title: course.title,
                        slug: course.slug,
                        duration: course.duration,
                        description: course.description,
                        level: course.level,
                        highlights: [...course.highlights],
                        image: course.image,
                      });
                      setShowEditor(true);
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-border rounded-lg text-sm text-foreground hover:bg-surface transition-colors"
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  <a
                    href={`/courses/${course.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 border border-border rounded-lg text-sm text-foreground hover:bg-surface transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 border border-border rounded-lg text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ──────────── BOOKINGS TAB ──────────── */}
      {activeTab === "bookings" && (
        <div className="space-y-4">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                placeholder="Search by name, email, or course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted" />
              <select
                value={bookingFilter}
                onChange={(e) => setBookingFilter(e.target.value)}
                className="px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {filteredBookings.length === 0 ? (
            <div className="text-center py-16 text-muted">
              <Users className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-lg font-medium">No bookings yet</p>
              <p className="text-sm">
                Course bookings will appear here when students register.
              </p>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-surface dark:bg-surface-dark">
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wider">
                        Student
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wider">
                        Course
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wider">
                        Batch Time
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wider">
                        Status
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-muted uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredBookings.map((booking) => (
                      <tr
                        key={booking.id}
                        className="hover:bg-surface/50 dark:hover:bg-surface-dark/50 transition-colors"
                      >
                        <td className="px-4 py-3">
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {booking.name}
                            </p>
                            <div className="flex items-center gap-3 mt-0.5">
                              <span className="flex items-center gap-1 text-xs text-muted">
                                <Mail className="w-3 h-3" />
                                {booking.email}
                              </span>
                              <span className="flex items-center gap-1 text-xs text-muted">
                                <Phone className="w-3 h-3" />
                                {booking.phone}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm text-foreground font-medium">
                            {booking.course}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="flex items-center gap-1 text-sm text-muted">
                            <Calendar className="w-3.5 h-3.5" />
                            {booking.batchTime}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              booking.status === "pending"
                                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                                : booking.status === "confirmed"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted">
                          {new Date(booking.createdAt).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ──────────── EDITOR MODAL ──────────── */}
      {showEditor && editingCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-2xl w-full relative border border-border my-8">
            <button
              onClick={() => setShowEditor(false)}
              className="absolute top-4 right-4 text-muted hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {editingCourse.id ? "Edit Course" : "New Course"}
            </h2>
            <form onSubmit={handleSave} className="space-y-4">
              {/* Image preview & URL */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Course Image
                </label>
                {editingCourse.image && (
                  <div className="relative h-40 rounded-lg overflow-hidden mb-3 bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={editingCourse.image}
                      alt="Course preview"
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  </div>
                )}
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={editingCourse.image}
                    onChange={(e) =>
                      setEditingCourse({
                        ...editingCourse,
                        image: e.target.value,
                      })
                    }
                    placeholder="https://images.unsplash.com/..."
                    className="flex-1 px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
                  />
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-4 py-2.5 border border-border rounded-lg text-sm text-foreground hover:bg-surface transition-colors"
                  >
                    <Upload className="w-4 h-4" /> Upload
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Course Title
                  </label>
                  <input
                    type="text"
                    value={editingCourse.title}
                    onChange={(e) =>
                      setEditingCourse({
                        ...editingCourse,
                        title: e.target.value,
                      })
                    }
                    placeholder="e.g. Foundation Photography Course"
                    className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={editingCourse.slug}
                    onChange={(e) =>
                      setEditingCourse({
                        ...editingCourse,
                        slug: e.target.value,
                      })
                    }
                    placeholder="e.g. foundation-photography"
                    className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={editingCourse.duration}
                    onChange={(e) =>
                      setEditingCourse({
                        ...editingCourse,
                        duration: e.target.value,
                      })
                    }
                    placeholder="e.g. 2 Months"
                    className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Level
                  </label>
                  <select
                    value={editingCourse.level}
                    onChange={(e) =>
                      setEditingCourse({
                        ...editingCourse,
                        level: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Beginner to Intermediate">
                      Beginner to Intermediate
                    </option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={editingCourse.description}
                  onChange={(e) =>
                    setEditingCourse({
                      ...editingCourse,
                      description: e.target.value,
                    })
                  }
                  placeholder="Course description..."
                  className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Highlights (one per line)
                </label>
                <textarea
                  rows={5}
                  value={editingCourse.highlights.join("\n")}
                  onChange={(e) =>
                    setEditingCourse({
                      ...editingCourse,
                      highlights: e.target.value.split("\n"),
                    })
                  }
                  placeholder="Camera operations & manual mode&#10;Composition rules & framing&#10;..."
                  className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none font-mono text-sm"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
                >
                  <Save className="w-4 h-4" /> Save Course
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditor(false)}
                  className="px-6 py-3 border border-border text-foreground rounded-xl hover:bg-surface transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
