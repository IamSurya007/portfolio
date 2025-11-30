"use client";

import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json";
import { AnimatedInView } from "@/components/animated-in-view";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeader
        title="Projects"
        subtitle="A collection of projects I've built and worked on"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <AnimatedInView
            key={project.id}
            delay={index * 0.1}
          >
            <Card hover className="h-full flex flex-col">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground/30">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-foreground/10 text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedInView>
        ))}
      </div>
    </div>
  );
}


