import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-foreground/70 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
}


