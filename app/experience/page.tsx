"use client";

import { Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Timeline, TimelineItemData } from "@/components/ui/timeline";

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
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SectionHeader
        title="Work Experience"
        subtitle="My professional journey and impact"
      />

      <div className="max-w-4xl mx-auto mb-24">
        <Timeline items={experiences.map((exp, index) => ({
          id: index,
          date: exp.duration,
          title: exp.role,
          subtitle: exp.company,
          location: exp.location,
          highlights: exp.badges,
          details: exp.achievements,
        })) as TimelineItemData[]} />
      </div>
    </div>
  );
}
