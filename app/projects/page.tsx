"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import projectsData from "@/data/projects.json";
import { AnimatedInView } from "@/components/animated-in-view";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SectionHeader
        eyebrow="Projects"
        title="Things I've built"
        subtitle="Personal products, client work and experiments, from finance apps with RAG search to production event platforms."
      />

      <div className="mx-auto mb-24 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <AnimatedInView key={project.id} delay={(index % 2) * 0.08} className="h-full">
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface/75 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_12px_32px_-12px_rgb(0_0_0/0.18)]">
              <div className="mb-6 flex items-center justify-between">
                <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
                <div className="flex items-center gap-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code`}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 items-center gap-1 rounded-full border border-border px-3.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    Live
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <h2 className="font-serif text-2xl font-medium leading-snug tracking-tight">{project.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-foreground/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </AnimatedInView>
        ))}
      </div>
    </div>
  );
}
