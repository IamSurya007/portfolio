"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedInView } from "@/components/animated-in-view";

export const experiences = [
  {
    role: "Software Developer",
    company: "7 Dots Smart Solutions",
    duration: "Dec 2024 – Present",
    location: "Hyderabad, India",
    achievements: [
      "Led the complete UI revamp of EventReply, improving Lighthouse score from ~20% to 80%+ and achieving ~2.5× faster initial load times through Core Web Vitals optimization, granular code-splitting, lazy loading, and advanced caching.",
      "Built and maintained Angular/Ionic applications serving 10,000+ users with 99% crash-free sessions; developed real-time chat and notifications using AWS Lambda WebSockets.",
      "Improved admin dashboard performance with a ~45% reduction in median load time using parallel API hydration, optimized RxJS streams, and component-level memoization.",
      "Automated Android & iOS build pipelines using GitLab CI/CD, reducing manual deployment time by ~40%.",
      "Integrated Sentry for error tracking and release health monitoring, cutting unresolved production issues by ~35%.",
      "Implemented Spring Boot REST APIs to support dynamic autocomplete, search utilities, and performance-optimized lookups.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "7 Dots Smart Solutions",
    duration: "Jun 2024 – Nov 2024",
    location: "Hyderabad, India",
    achievements: [
      "Contributed to Angular and Ionic applications during early production cycles, resolving 15+ high-priority Jira issues.",
      "Implemented secure login, buy/sell flows, and event creation modules using Angular, RxJS, and Ionic native features.",
      "Improved responsive layout stability and reduced mobile UI inconsistencies by ~30% through targeted component refactoring.",
      "Collaborated closely with backend teams to ensure seamless API integration and optimized data fetch patterns.",
    ],
  },
];


export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeader
        title="Work Experience"
        subtitle="My professional journey and achievements"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedInView
                key={index}
                delay={index * 0.1}
                className="relative pl-20"
              >
                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-background shadow-lg" />
                <Card hover>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-foreground/70 mb-2">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3 text-foreground/90">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3"
                          >
                            <span className="text-blue-500 mt-1.5">▸</span>
                            <span className="text-foreground/70">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedInView>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


