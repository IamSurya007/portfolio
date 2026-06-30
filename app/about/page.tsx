"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Award, Calendar, Rocket, Zap, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedInView } from "@/components/animated-in-view";
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
    description: "Started as Junior Software Engineer focusing on Flutter, AWS serverless pipelines, and BLE integration.",
    icon: Briefcase,
  },
];

const skillCategories = [
  { key: "frontend", title: "Frontend", color: "from-blue-500 to-cyan-500" },
  { key: "backend", title: "Backend", color: "from-purple-500 to-pink-500" },
  { key: "tools", title: "Tools & DevOps", color: "from-green-500 to-emerald-500" },
  { key: "other", title: "Other", color: "from-orange-500 to-red-500" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SectionHeader
        title="About Me"
        subtitle="Passionate developer with a focus on creating exceptional user experiences"
      />

      {/* Bio Section */}
      <AnimatedInView className="max-w-4xl mx-auto mb-16">
        <Card className="mb-8 border-foreground/10 bg-background/50 backdrop-blur-sm">
          <CardContent className="pt-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-4xl font-bold text-white shrink-0 shadow-xl transition-transform hover:scale-105 duration-300">
                SP
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4">Surya Pillutla</h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  Full-Stack Mobile & Front-End Developer specialising in Flutter, Angular, and React, with ~2 years of experience shipping production apps to 10K+ users. Skilled in real-time features (WebSockets, BLE), cloud-native pipelines (AWS Lambda/SQS/S3), and CI/CD automation. Consistent track record of measurable gains — BLE latency down 40%, Lighthouse scores up from 20% to 80%, report generation 60% faster.
                </p>
                <p className="text-foreground/70 leading-relaxed mt-4 text-lg">
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
                  <Icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70 font-medium uppercase tracking-wider">{stat.label}</div>
                </CardContent>
              </Card>
            </AnimatedInView>
          );
        })}
      </div>

      {/* Education */}
      <div className="max-w-4xl mx-auto mb-24">
        <SectionHeader title="Education" subtitle="" className="mb-8" />
        <div className="space-y-6">
          {education.map((edu, index) => (
            <AnimatedInView key={index} delay={index * 0.1}>
              <Card hover className="border-foreground/10 bg-background/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary mb-1">
                        {edu.year}
                      </div>
                      <h4 className="text-xl font-bold mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-foreground/70 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-foreground/60 leading-relaxed">
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
        <SectionHeader title="Tech Journey" subtitle="My path through software development" className="mb-12" />
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-foreground/10 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-foreground/10 -translate-x-1/2 sm:hidden block" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const TimelineIcon = item.icon;
              return (
                <AnimatedInView
                  key={index}
                  delay={index * 0.1}
                  className={`relative flex items-center justify-between sm:justify-center flex-col sm:flex-row w-full ${isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node (Icon) */}
                  <div className="absolute left-8 sm:left-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center -translate-x-1/2 z-10 shadow-lg">
                    <TimelineIcon className="h-4 w-4 text-primary" />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full sm:w-5/12 pl-20 sm:pl-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 text-left'}`}>
                    <Card hover className="bg-background/50 backdrop-blur-xl border-foreground/10">
                      <CardContent className="pt-6">
                        <div className="text-sm font-bold text-primary mb-2">
                          {item.year}
                        </div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-foreground/70 leading-relaxed text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden sm:block w-5/12"></div>
                </AnimatedInView>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skills Section Integrated */}
      <div className="max-w-5xl mx-auto mb-10">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Technologies I work with to build amazing web and mobile experiences"
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
                    <CardTitle className="flex items-center gap-3">
                      <div
                        className={`w-1 h-6 rounded-full bg-gradient-to-b ${category.color}`}
                      />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2.5">
                      {skills.map((skill: any) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-foreground/10 bg-background hover:bg-foreground/5 transition-all duration-200"
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

    </div>
  );
}
