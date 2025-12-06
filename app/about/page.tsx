"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Award, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedInView } from "@/components/animated-in-view";
import { useEffect, useState } from "react";

const stats = [
  { label: "Years of Experience", value: "2+", icon: Calendar },
  { label: "Projects Completed", value: "10+", icon: Code },
  { label: "Technologies Mastered", value: "15+", icon: Award },
];

const education = [
  {
    year: "2020-2024",
    degree: "Bachelor of Technology in Computer Science",
    institution: "Vasireddy Venkatadri International Technological University",
    description:
      "Computer Science program with a focus on software development, data structures, and algorithms.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Started Web Development Journey",
    description: "Began learning HTML, CSS, and JavaScript fundamentals",
  },
  {
    year: "2024",
    title: "Mastered Frontend Frameworks",
    description: "Deep dive into Angular, React, and Next.js",
  },
  {
    year: "2025",
    title: "Performance Optimization Expert",
    description:
      "Specialized in optimizing web applications for speed and efficiency",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeader
        title="About Me"
        subtitle="Passionate frontend developer with a focus on creating exceptional user experiences"
      />

      {/* Bio Section */}
      <AnimatedInView className="max-w-3xl mx-auto mb-16">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-4xl font-bold text-white">
                SP
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Surya Pillutla</h3>
                <p className="text-foreground/70 leading-relaxed">
                  I'm a full-stack developer based in Hyderabad, India, with
                  over 2 years of experience building modern web applications. I
                  work across both frontend and backend technologies,
                  specializing in Angular, Next.js, Node.js, and TypeScript. I'm
                  passionate about creating fast, beautiful, and scalable
                  digital experiences.
                </p>

                <p className="text-foreground/70 leading-relaxed mt-4">
                  My journey in development started with a curiosity about how
                  websites work, and it has grown into a career focused on clean
                  architecture, performance optimization, and great user
                  experience. I enjoy solving complex problems, designing
                  efficient systems, and turning ideas into reliable,
                  production-ready applications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedInView>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <AnimatedInView key={stat.label} delay={index * 0.1}>
              <Card hover>
                <CardContent className="pt-6 text-center">
                  <Icon className="h-8 w-8 mx-auto mb-4 text-foreground/70" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </CardContent>
              </Card>
            </AnimatedInView>
          );
        })}
      </div>

      {/* Education */}
      <AnimatedInView className="max-w-3xl mx-auto mb-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <AnimatedInView key={index} delay={index * 0.1}>
              <Card hover>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 mt-1 text-foreground/70" />
                    <div>
                      <div className="text-sm text-foreground/60 mb-1">
                        {edu.year}
                      </div>
                      <h4 className="text-xl font-semibold mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-foreground/70 font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-foreground/60">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedInView>
          ))}
        </div>
      </AnimatedInView>

      {/* Tech Journey Timeline */}
      <AnimatedInView className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Tech Journey</h3>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-foreground/10" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <AnimatedInView
                key={index}
                delay={index * 0.1}
                className="relative pl-20"
              >
                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-foreground border-4 border-background" />
                <Card hover>
                  <CardContent className="pt-6">
                    <div className="text-sm text-foreground/60 mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-foreground/70">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedInView>
            ))}
          </div>
        </div>
      </AnimatedInView>
    </div>
  );
}
