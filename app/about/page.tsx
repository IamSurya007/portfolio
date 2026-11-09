"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Award, Calendar, Rocket, Zap, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedInView } from "@/components/animated-in-view";
import { Timeline, TimelineItemData } from "@/components/ui/timeline";
import skillsData from "@/data/skills.json";
import Image from "next/image";

const stats = [
  { label: "Years of Experience", value: "2+", icon: Calendar },
  { label: "Projects Completed", value: "10+", icon: Code },
  { label: "Technologies Mastered", value: "15+", icon: Award },
];

const education = [
  {
    year: "2020-2024",
    degree: "Bachelor of Technology in Computer Science",
    institution: "Vasireddy Venkatadri Institute of Technology (VVIT), Guntur",
    description:
      "Coursework in data structures and algorithms, DBMS, OOP, operating systems and computer networks.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Started Web Development Journey",
    description: "Began learning HTML, CSS, and JavaScript fundamentals",
    icon: Code,
  },
  {
    year: "2024",
    title: "Mastered Frontend Frameworks",
    description: "Deep dive into Angular, React, and Next.js",
    icon: Rocket,
  },
  {
    year: "2025",
    title: "Performance Optimization Expert",
    description:
      "Specialized in optimizing web applications for speed and efficiency",
    icon: Zap,
  },
  {
    year: "2026",
    title: "Joined NeuroStellar",
    description: "Software Engineer working on Flutter, AWS serverless pipelines, KMS encryption and BLE integration.",
    icon: Briefcase,
  },
  {
    year: "Oct 2026",
    title: "Ran a Live Tournament Platform",
    description: "Built and operated the backend, WebSocket layer and CircleChess integration for a 5-round, 18-player brain-signal chess event, then analysed data loss and AWS cost afterwards.",
    icon: Briefcase,
  },
];

const skillCategories = [
  { key: "frontend", title: "Frontend & Mobile" },
  { key: "backend", title: "Backend & Data" },
  { key: "tools", title: "Cloud & DevOps" },
  { key: "other", title: "Practices & Other" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SectionHeader
        eyebrow="About"
        title="A bit about me"
        subtitle="Full-stack engineer who cares about systems that keep working after launch day."
      />

      {/* Bio Section */}
      <AnimatedInView className="max-w-4xl mx-auto mb-16">
        <Card className="mb-8 border-foreground/10 bg-background/50 backdrop-blur-sm">
          <CardContent className="pt-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center font-serif text-4xl font-medium text-background shrink-0 shadow-[0_12px_32px_-12px_rgb(0_0_0/0.35)]">
                SP
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-3xl font-medium tracking-tight mb-1">Surya Pillutla</h3>
                <p className="eyebrow mb-5">Software Engineer · NeuroStellar</p>
                <p className="text-muted leading-relaxed text-lg">
                  Full-stack engineer with ~2 years of experience building and shipping production systems across Flutter, React/Angular, Node.js/NestJS and AWS/GCP, using AI-assisted tools (Claude Code, Cursor) to accelerate delivery. At NeuroStellar I built the serverless backend, WebSocket layer and CircleChess integration behind a live EEG chess-tournament platform, architected a KMS-backed encryption system for sensitive health data, and cut cloud costs by ~$200/month. Earlier, I took EventReply from a ~20% to 80% Lighthouse score and kept 10K+ user apps at 99% crash-free sessions.
                </p>
                <p className="text-muted leading-relaxed mt-4 text-lg">
                  My journey in development started with a curiosity about how websites work, and it has grown into a career focused on clean architecture, performance optimization, and great user experience. I enjoy solving complex problems, designing efficient systems, and turning ideas into reliable, production-ready applications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedInView>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <AnimatedInView key={stat.label} delay={index * 0.1}>
              <Card hover className="h-full border-foreground/10 bg-background/50 backdrop-blur-sm">
                <CardContent className="pt-6 text-center">
                  <Icon className="h-6 w-6 mx-auto mb-4 text-primary" />
                  <div className="font-serif text-4xl font-medium tracking-tight mb-2">{stat.value}</div>
                  <div className="eyebrow">{stat.label}</div>
                </CardContent>
              </Card>
            </AnimatedInView>
          );
        })}
      </div>

      {/* Skills Section Integrated */}
      <div className="max-w-5xl mx-auto mb-10">
        <SectionHeader
          eyebrow="Toolkit"
          title="Skills & technologies"
          subtitle="What I reach for when building mobile, web and cloud systems."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const skills = (skillsData as any)[category.key] || [];
            return (
              <AnimatedInView
                key={category.key}
                delay={categoryIndex * 0.1}
              >
                <Card hover className="h-full bg-background/50 backdrop-blur-sm border-foreground/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 !text-xl">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2.5">
                      {skills.map((skill: any) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-2/60 hover:border-foreground/20 transition-all duration-200"
                        >
                          <Image src={skill.logo} alt={skill.name} width={16} height={16} className={`inline-block ${skill.invertInDark ? 'dark:invert' : ''}`} unoptimized />
                          <span className="font-medium text-xs sm:text-sm">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedInView>
            );
          })}
        </div>
      </div>

      {/* Education */}
      <div className="max-w-4xl mx-auto mb-24">
        <SectionHeader eyebrow="Education" title="Where I studied" className="mb-10" />
        <div className="space-y-6">
          {education.map((edu, index) => (
            <AnimatedInView key={index} delay={index * 0.1}>
              <Card hover className="border-foreground/10 bg-background/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-soft rounded-xl">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="eyebrow !text-primary mb-2">
                        {edu.year}
                      </div>
                      <h4 className="font-serif text-xl font-medium tracking-tight mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-foreground/80 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedInView>
          ))}
        </div>
      </div>

      {/* Tech Journey Timeline */}
      <div className="max-w-4xl mx-auto mb-24">
        <SectionHeader eyebrow="Journey" title="How I got here" className="mb-12" />
        <Timeline items={timeline.map((item, index) => ({
          id: index,
          date: item.year,
          title: item.title,
          description: item.description,
          icon: item.icon,
        })) as TimelineItemData[]} />
      </div>

    </div>
  );
}
