"use client";

import { Share2 } from "lucide-react";

export default function ShareButton({ title }: { title: string }) {
  return (
    <button
      className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
      onClick={() => {
        if (typeof navigator !== "undefined" && navigator.share) {
          navigator.share({
            title,
            url: window.location.href,
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert("Link copied to clipboard!");
        }
      }}
    >
      <Share2 className="w-4 h-4" /> Share
    </button>
  );
}
