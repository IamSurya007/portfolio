"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

const blogs = [
  {
    slug: "sample-blog",
    title: "Getting Started with Next.js 15",
    description: "Learn how to build modern web applications with Next.js 15 and the App Router.",
    date: "2024-01-15",
    readTime: "5 min read",
  },
];

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeader
        title="Blogs"
        subtitle="Thoughts, tutorials, and insights about web development"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`} prefetch={true}>
            <Card hover className="h-full">
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>{blog.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}


