"use client";

import { useState } from "react";
import { Save, Plus, Trash2, Globe, Search as SearchIcon } from "lucide-react";

export default function SEOAdminPage() {
  const [saved, setSaved] = useState(false);
  const [pages, setPages] = useState([
    {
      path: "/",
      title: "Zeal Studio | Professional Photography Studio in Pune",
      description:
        "Premium photography studio specializing in weddings, portraits, fashion, and events. Based in Pune, serving clients across India.",
      keywords: "photography studio, wedding photographer, Pune photographer",
    },
    {
      path: "/portfolio",
      title: "Portfolio | Wedding, Fashion & Event Photography",
      description:
        "Browse our stunning photography portfolio featuring weddings, fashion shoots, portraits, events, and nature photography.",
      keywords: "photography portfolio, wedding photos, fashion photography",
    },
    {
      path: "/services",
      title: "Photography Services & Pricing | Wedding, Portrait, Events",
      description:
        "Explore our professional photography services and packages. Wedding photography, portrait sessions, fashion shoots.",
      keywords:
        "photography services, wedding photography packages, photography pricing",
    },
    {
      path: "/about",
      title: "About Us | Our Story & Photography Journey",
      description:
        "Learn about Zeal Studio's photography journey, our passion for visual storytelling, and the team behind the lens.",
      keywords: "about Zeal Studio, photography team, professional photographer",
    },
    {
      path: "/blog",
      title: "Photography Blog | Tips, Trends & Inspiration",
      description:
        "Discover photography tips, industry trends, behind-the-scenes stories, and creative inspiration.",
      keywords:
        "photography blog, photography tips, wedding photography trends",
    },
    {
      path: "/contact",
      title: "Contact Us | Book Your Photography Session",
      description:
        "Get in touch with Zeal Studio for wedding photography, portraits, events, and more.",
      keywords:
        "contact photographer, book photography session, photography inquiry",
    },
  ]);

  const [globalKeywords, setGlobalKeywords] = useState(
    "photography, wedding photographer, Pune, Maharashtra, portrait, fashion photography, event coverage, professional photographer"
  );

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handlePageChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...pages];
    (updated[index] as Record<string, string>)[field] = value;
    setPages(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">SEO Settings</h1>
          <p className="text-muted mt-1">
            Optimize your website for search engines. Manage meta titles,
            descriptions, and keywords.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
        >
          <Save className="w-5 h-5" />
          {saved ? "Saved!" : "Save All"}
        </button>
      </div>

      {/* Global Keywords */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          Global Keywords
        </h2>
        <p className="text-muted text-sm mb-4">
          These keywords help search engines understand your website. Separate
          with commas.
        </p>
        <textarea
          rows={3}
          value={globalKeywords}
          onChange={(e) => setGlobalKeywords(e.target.value)}
          className="w-full px-4 py-3 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none"
        />
      </div>

      {/* Per-Page SEO */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Page-Level SEO</h2>
        {pages.map((page, i) => (
          <div
            key={page.path}
            className="bg-white dark:bg-gray-900 rounded-xl border border-border p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-mono">
                {page.path}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={page.title}
                  onChange={(e) =>
                    handlePageChange(i, "title", e.target.value)
                  }
                  className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
                />
                <p className="text-xs text-muted mt-1">
                  {page.title.length}/60 characters
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Keywords
                </label>
                <input
                  type="text"
                  value={page.keywords}
                  onChange={(e) =>
                    handlePageChange(i, "keywords", e.target.value)
                  }
                  className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-foreground mb-2">
                Meta Description
              </label>
              <textarea
                rows={2}
                value={page.description}
                onChange={(e) =>
                  handlePageChange(i, "description", e.target.value)
                }
                className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary text-sm resize-none"
              />
              <p className="text-xs text-muted mt-1">
                {page.description.length}/160 characters
              </p>
            </div>

            {/* Google Preview */}
            <div className="mt-4 p-4 bg-surface dark:bg-surface-dark rounded-lg">
              <p className="text-xs text-muted mb-2">Google Search Preview:</p>
              <p className="text-blue-600 text-sm font-medium truncate">
                {page.title}
              </p>
              <p className="text-green-700 dark:text-green-500 text-xs">
                zealstudio.com{page.path}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1 line-clamp-2">
                {page.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
