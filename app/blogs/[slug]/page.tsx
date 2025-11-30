import { notFound } from "next/navigation";
import { readFile } from "fs/promises";
import { join } from "path";
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

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  let content = "";
  try {
    const filePath = join(process.cwd(), "content", "blogs", `${params.slug}.mdx`);
    content = await readFile(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading blog file:", error);
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
          <p className="text-xl text-foreground/70 mb-6">{blog.description}</p>
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
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground/70 prose-a:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-foreground/5">
          {content ? (
            <div className="whitespace-pre-wrap text-foreground/80 leading-relaxed">
              {content.split("\n").map((line, i) => {
                if (line.startsWith("# ")) {
                  return <h1 key={i} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>;
                } else if (line.startsWith("## ")) {
                  return <h2 key={i} className="text-2xl font-bold mt-6 mb-3">{line.slice(3)}</h2>;
                } else if (line.startsWith("### ")) {
                  return <h3 key={i} className="text-xl font-bold mt-4 mb-2">{line.slice(4)}</h3>;
                } else if (line.startsWith("- ")) {
                  return <li key={i} className="ml-6 list-disc">{line.slice(2)}</li>;
                } else if (line.trim() === "") {
                  return <br key={i} />;
                } else {
                  return <p key={i} className="mb-4">{line}</p>;
                }
              })}
            </div>
          ) : (
            <div className="text-foreground/70">
              <p>Blog content will be displayed here.</p>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

