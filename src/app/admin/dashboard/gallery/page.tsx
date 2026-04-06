"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Upload,
  Trash2,
  Edit,
  Filter,
  Grid,
  List,
  Plus,
  X,
  Search,
} from "lucide-react";
import { DEMO_IMAGES, PORTFOLIO_CATEGORIES } from "@/lib/constants";

// Flatten demo images for gallery management
const initialImages = Object.entries(DEMO_IMAGES.portfolio).flatMap(
  ([category, images]) =>
    images.map((src, i) => ({
      id: `${category}-${i}`,
      src,
      category: category.charAt(0).toUpperCase() + category.slice(1),
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Photo ${i + 1}`,
      uploadDate: "2026-03-15",
    }))
);

export default function GalleryAdminPage() {
  const [images, setImages] = useState(initialImages);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filterCategory, setFilterCategory] = useState("All");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredImages = images.filter((img) => {
    const matchesCategory =
      filterCategory === "All" || img.category === filterCategory;
    const matchesSearch = img.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      setImages(images.filter((img) => img.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Gallery Management
          </h1>
          <p className="text-muted mt-1">
            Manage your portfolio images. Upload, edit, and organize your work.
          </p>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
        >
          <Plus className="w-5 h-5" /> Upload Images
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white dark:bg-gray-900 p-4 rounded-xl border border-border">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search images..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-surface dark:bg-surface-dark border border-border rounded-lg text-sm focus:outline-none focus:border-primary text-foreground"
          />
        </div>
        <div className="flex items-center gap-3">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 bg-surface dark:bg-surface-dark border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-primary"
          >
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="flex border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setView("grid")}
              className={`p-2 ${
                view === "grid" ? "bg-primary text-black" : "text-muted"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 ${
                view === "list" ? "bg-primary text-black" : "text-muted"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Image count */}
      <p className="text-sm text-muted">
        Showing {filteredImages.length} of {images.length} images
      </p>

      {/* Grid View */}
      {view === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-border"
            >
              <div className="relative aspect-square">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => alert("Edit modal would open here")}
                    className="p-2 bg-white rounded-lg text-gray-800 hover:bg-primary hover:text-black transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(img.id)}
                    className="p-2 bg-white rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-medium text-foreground truncate">
                  {img.title}
                </p>
                <p className="text-xs text-muted">{img.category}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-surface dark:bg-surface-dark">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted uppercase">
                  Image
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted uppercase">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted uppercase hidden sm:table-cell">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted uppercase hidden md:table-cell">
                  Date
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-muted uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredImages.map((img) => (
                <tr key={img.id} className="border-t border-border">
                  <td className="px-4 py-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">
                    {img.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted hidden sm:table-cell">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {img.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted hidden md:table-cell">
                    {img.uploadDate}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => alert("Edit modal")}
                        className="p-1.5 text-muted hover:text-primary transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(img.id)}
                        className="p-1.5 text-muted hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-lg w-full relative border border-border">
            <button
              onClick={() => setShowUploadModal(false)}
              className="absolute top-4 right-4 text-muted hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Upload Images
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Images uploaded successfully!");
                setShowUploadModal(false);
              }}
              className="space-y-4"
            >
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-muted mx-auto mb-4" />
                <p className="text-foreground font-medium mb-1">
                  Drag & drop images here
                </p>
                <p className="text-muted text-sm">or click to browse files</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={() => {}}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Category
                </label>
                <select className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary">
                  {PORTFOLIO_CATEGORIES.filter((c) => c !== "All").map(
                    (cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Alt Text (for SEO)
                </label>
                <input
                  type="text"
                  placeholder="Describe the image..."
                  className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
