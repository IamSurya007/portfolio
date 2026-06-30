"use client";

import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedInView } from "@/components/animated-in-view";
import { motion, AnimatePresence } from "framer-motion";

export const experiences = [
  {
    role: "Junior Software Engineer",
    company: "NeuroStellar",
    duration: "Jan 2026 – Present",
    location: "Chennai, India",
    badges: ["📉 90% less data-loss", "⚡ 60% faster reports", "📉 40% faster BLE"],
    achievements: [
      "Built a Flutter health-tracking mobile app from scratch integrating Google Health Connect & Apple Health via flutter_health; WorkManager background sync to local Isar DB and Firebase cloud reduced data-loss by ~90% and average sync latency to <2 s",
      "Designed an AWS serverless report-generation pipeline (S3 trigger → SQS → Lambda) with a Dockerised Python service; cut end-to-end generation time by ~60%; added CloudWatch live-tracking dashboard, alarms, and SNS notifications, reducing mean time-to-detect errors by ~50%",
      "Revamped the Flutter Desktop admin console and built internal developer tooling, reducing task-completion time by ~35%",
      "Rearchitected BLE connection logic using Flutter isolates & foreground services; connection time down ~40%, BLE-related crash reports down ~30%"
    ],
  },
  {
    role: "Software Developer",
    company: "7 Dots Smart Solutions",
    duration: "Dec 2024 – Present",
    location: "Hyderabad, India",
    badges: ["🚀 Lighthouse 20%→80%", "⚡ 2.5× faster loads", "🛡️ 99% crash-free"],
    achievements: [
      "Led the complete UI revamp of EventReply, improving Lighthouse score from ~20% to 80%+ and achieving ~2.5× faster initial load times through Core Web Vitals optimization, granular code-splitting, lazy loading, and advanced caching.",
      "Built and maintained Angular/Ionic applications serving 10,000+ users with 99% crash-free sessions; developed real-time chat and notifications using AWS Lambda WebSockets.",
      "Improved admin dashboard performance with a ~45% reduction in median load time using parallel API hydration, optimized RxJS streams, and component-level memoization.",
      "Automated Android & iOS build pipelines using GitLab CI/CD, reducing manual deployment time by ~40%.",
      "Integrated Sentry for error tracking and release health monitoring, cutting unresolved production issues by ~35%.",
      "Implemented Spring Boot REST APIs to support dynamic autocomplete, search utilities, and performance-optimized lookups."
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "7 Dots Smart Solutions",
    duration: "Jun 2024 – Nov 2024",
    location: "Hyderabad, India",
    badges: ["🎯 15+ Jira issues", "📱 30% fewer UI bugs"],
    achievements: [
      "Contributed to Angular and Ionic applications during early production cycles, resolving 15+ high-priority Jira issues.",
      "Implemented secure login, buy/sell flows, and event creation modules using Angular, RxJS, and Ionic native features.",
      "Improved responsive layout stability and reduced mobile UI inconsistencies by ~30% through targeted component refactoring.",
      "Collaborated closely with backend teams to ensure seamless API integration and optimized data fetch patterns."
    ],
  },
];

export default function ExperiencePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SectionHeader
        title="Work Experience"
        subtitle="My professional journey and impact"
      />

      <div className="max-w-4xl mx-auto mb-24">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-foreground/10" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <AnimatedInView
                  key={index}
                  delay={index * 0.1}
                  className="relative pl-20"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center -translate-x-1/2 z-10 shadow-lg mt-1">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>

                  <Card 
                    hover 
                    className="cursor-pointer border-foreground/10 bg-background/50 backdrop-blur-xl transition-all duration-300"
                    onClick={() => toggleExpand(index)}
                  >
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70 mb-4">
                            <div className="flex items-center gap-1.5 text-foreground font-medium bg-foreground/5 px-2 py-1 rounded-md border border-foreground/10">
                              <Briefcase className="h-3.5 w-3.5" />
                              {exp.company}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          
                          {/* Highlight Badges */}
                          <div className="flex flex-wrap gap-2 mb-2">
                            {exp.badges.map((badge, bIdx) => (
                              <span key={bIdx} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0 flex justify-end">
                          <button 
                            className="p-2 rounded-full hover:bg-foreground/10 transition-colors text-foreground/60"
                            aria-label={isExpanded ? "Collapse details" : "Expand details"}
                          >
                            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      {/* Expandable Achievements */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t border-foreground/10">
                              <h4 className="font-semibold mb-3 text-foreground/90">Key Achievements:</h4>
                              <ul className="space-y-3">
                                {exp.achievements.map((achievement, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3"
                                  >
                                    <span className="text-primary mt-1 text-lg leading-none">•</span>
                                    <span className="text-foreground/80 leading-relaxed text-sm md:text-base">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </AnimatedInView>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
