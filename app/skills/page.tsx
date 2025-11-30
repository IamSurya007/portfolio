"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import skillsData from "@/data/skills.json";
import { AnimatedInView } from "@/components/animated-in-view";

const skillCategories = [
  { key: "frontend", title: "Frontend", color: "from-blue-500 to-cyan-500" },
  { key: "backend", title: "Backend", color: "from-purple-500 to-pink-500" },
  { key: "tools", title: "Tools & DevOps", color: "from-green-500 to-emerald-500" },
  { key: "other", title: "Other", color: "from-orange-500 to-red-500" },
];

const levelColors: Record<string, string> = {
  Advanced: "bg-green-500/20 text-green-600 dark:text-green-400",
  Intermediate: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
  Basic: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
};

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
                        <div className="group relative">
                          <div className="px-4 py-2 rounded-lg border border-foreground/10 hover:border-foreground/30 bg-background/50 backdrop-blur-sm transition-all duration-200">
                            <div className="font-medium text-sm mb-1">{skill.name}</div>
                            <div
                              className={`text-xs px-2 py-1 rounded-full inline-block ${levelColors[skill.level]}`}
                            >
                              {skill.level}
                            </div>
                          </div>
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


