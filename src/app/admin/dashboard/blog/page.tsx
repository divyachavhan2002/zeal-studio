"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, Eye, Search, X } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export default function BlogAdminPage() {
  const [posts, setPosts] = useState(BLOG_POSTS);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<{
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    content: string;
  } | null>(null);

  const handleDelete = (slug: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      setPosts(posts.filter((p) => p.slug !== slug));
    }
  };

  const handleNewPost = () => {
    setEditingPost({
      title: "",
      slug: "",
      excerpt: "",
      category: "",
      content: "",
    });
    setShowEditor(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Blog Management
          </h1>
          <p className="text-muted mt-1">
            Create, edit, and manage your blog posts for SEO and engagement.
          </p>
        </div>
        <button
          onClick={handleNewPost}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
        >
          <Plus className="w-5 h-5" /> New Post
        </button>
      </div>

      {/* Posts Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-surface dark:bg-surface-dark">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase hidden sm:table-cell">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase hidden md:table-cell">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase hidden lg:table-cell">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-muted uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.slug} className="border-t border-border">
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-foreground">
                    {post.title}
                  </p>
                  <p className="text-xs text-muted mt-1 line-clamp-1">
                    {post.excerpt}
                  </p>
                </td>
                <td className="px-6 py-4 hidden sm:table-cell">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {post.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted hidden md:table-cell">
                  {formatDate(post.date)}
                </td>
                <td className="px-6 py-4 hidden lg:table-cell">
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">
                    Published
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="p-1.5 text-muted hover:text-primary transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => {
                        setEditingPost({
                          title: post.title,
                          slug: post.slug,
                          excerpt: post.excerpt,
                          category: post.category,
                          content: post.content,
                        });
                        setShowEditor(true);
                      }}
                      className="p-1.5 text-muted hover:text-primary transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.slug)}
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

      {/* Blog Editor Modal */}
      {showEditor && editingPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-2xl w-full relative border border-border my-8">
            <button
              onClick={() => setShowEditor(false)}
              className="absolute top-4 right-4 text-muted hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {editingPost.slug ? "Edit Post" : "New Blog Post"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Blog post saved successfully!");
                setShowEditor(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={editingPost.title}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, title: e.target.value })
                  }
                  placeholder="Post title..."
                  className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  URL Slug
                </label>
                <input
                  type="text"
                  value={editingPost.slug}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, slug: e.target.value })
                  }
                  placeholder="post-url-slug"
                  className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={editingPost.category}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, category: e.target.value })
                  }
                  placeholder="Wedding, Portrait, Industry..."
                  className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Excerpt (for SEO)
                </label>
                <textarea
                  rows={2}
                  value={editingPost.excerpt}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, excerpt: e.target.value })
                  }
                  placeholder="Short description..."
                  className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Content (HTML)
                </label>
                <textarea
                  rows={8}
                  value={editingPost.content}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, content: e.target.value })
                  }
                  placeholder="<h2>Your content here...</h2><p>Write your blog post...</p>"
                  className="w-full px-4 py-2.5 bg-surface dark:bg-surface-dark border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none font-mono text-sm"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-dark transition-all"
                >
                  Save Post
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
