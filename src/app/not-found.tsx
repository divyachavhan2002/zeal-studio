import Link from "next/link";
import { Camera } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <Camera className="w-16 h-16 text-primary mx-auto mb-6" />
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted mb-8 max-w-md mx-auto">
          Looks like this page got lost in the darkroom. Let&apos;s get you back
          to familiar territory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-primary-dark transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3 border-2 border-border text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
