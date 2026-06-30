"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import skillsData from "@/data/skills.json";
import { AnimatedInView } from "@/components/animated-in-view";
import Image from "next/image";

const skillCategories = [
  { key: "frontend", title: "Frontend", color: "from-blue-500 to-cyan-500" },
  { key: "backend", title: "Backend", color: "from-purple-500 to-pink-500" },
  { key: "tools", title: "Tools & DevOps", color: "from-green-500 to-emerald-500" },
  { key: "other", title: "Other", color: "from-orange-500 to-red-500" },
];



export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeader
        title="Skills & Technologies"
        subtitle="Technologies I work with to build amazing web experiences"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => {
          const skills = (skillsData as any)[category.key] || [];
          return (
            <AnimatedInView
              key={category.key}
              delay={categoryIndex * 0.1}
            >
              <Card hover className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div
                      className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`}
                    />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill: any, index: number) => (
                      <div
                        key={skill.name}
                        className="group relative transition-transform duration-200 hover:scale-105"
                      >
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-foreground/10 hover:border-foreground/30 bg-background/50 dark:bg-white/10 backdrop-blur-sm transition-all duration-200">
                          <Image src={skill.logo} alt={skill.name} width={24} height={24} className={`inline-block ${skill.invertInDark ? 'dark:invert' : ''}`} unoptimized />
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
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
  );
}


