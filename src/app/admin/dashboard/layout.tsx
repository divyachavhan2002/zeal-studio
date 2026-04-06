"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  Camera,
  LayoutDashboard,
  Image as ImageIcon,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  Home,
  Pen,
  Globe,
  Calendar,
  GraduationCap,
} from "lucide-react";
import { useAdminStore } from "@/lib/store";
import { SITE_NAME } from "@/lib/constants";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Gallery", href: "/admin/dashboard/gallery", icon: ImageIcon },
  { name: "Courses", href: "/admin/dashboard/courses", icon: GraduationCap },
  { name: "Blog Posts", href: "/admin/dashboard/blog", icon: FileText },
  { name: "Inquiries", href: "/admin/dashboard/inquiries", icon: Users },
  { name: "Content", href: "/admin/dashboard/content", icon: Pen },
  { name: "Bookings", href: "/admin/dashboard/bookings", icon: Calendar },
  { name: "SEO Settings", href: "/admin/dashboard/seo", icon: Globe },
  { name: "Settings", href: "/admin/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, logout } = useAdminStore();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for stored token
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
    } else {
      useAdminStore.getState().login(token);
    }
  }, [router]);

  if (!mounted) return null;

  const handleLogout = () => {
    logout();
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-secondary transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <Camera className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-white">{SITE_NAME}</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-white/10 space-y-2">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-all"
            >
              <Home className="w-5 h-5" />
              View Website
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl text-sm font-medium transition-all w-full"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-border">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-foreground"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-surface dark:bg-surface-dark border border-border rounded-lg text-sm focus:outline-none focus:border-primary text-foreground w-64"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-foreground">Admin</p>
                <p className="text-xs text-muted">admin@zealstudio.com</p>
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
