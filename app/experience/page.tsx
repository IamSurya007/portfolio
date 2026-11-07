"use client";

import { Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Timeline, TimelineItemData } from "@/components/ui/timeline";

export const experiences = [
  {
    role: "Software Engineer",
    company: "NeuroStellar",
    duration: "Jan 2026 – Present",
    location: "Chennai, India",
    badges: ["⚡ 60% faster reports", "📉 40% faster BLE", "💸 ~$200/mo saved", "🏆 Live tournament shipped"],
    achievements: [
      "Built the AWS serverless backend for Orbit's chess-tournament platform (22 Lambda functions, 15 DynamoDB tables, HTTP + WebSocket API Gateway, SQS, EventBridge, Cognito JWT auth) that records EEG headband data during live rounds and turns it into a leaderboard and per-round review; operated it live at a 5-round, 18-player event on 2026-10-11",
      "Integrated the CircleChess game platform through HMAC-signed, de-duplicated webhooks with auto-stop on game finish, game-to-recording linking and roster checks; load-tested with 24 simulated phones and 12 simultaneous game-finished webhooks (0 Lambda errors, 24/24 connected in 2 s)",
      "Designed the real-time WebSocket layer (heartbeats, ack'd Start/Stop commands, live dashboard fan-out); root-caused stale connections from API Gateway limits during the live event and shipped a fix that retries and prunes dead connections",
      "Built an AWS serverless report-generation pipeline (S3 → SQS → Lambda) with a Dockerized Python service, cutting end-to-end processing time by ~60%; added CloudWatch/SNS alerting for ~50% faster error detection",
      "Designed a per-user AWS KMS-wrapped master key + per-file data key encryption architecture (AES-256-GCM) for sensitive EEG data, enabling offline on-device encryption with independent server-side decryption",
      "Rearchitected the Flutter app's BLE layer with isolates and foreground services (connection time down ~40%, BLE crash reports down ~30%); added a band-health watchdog and MTU/slow-stream recovery after a data-loss analysis of the live event",
      "Shipped an offline-first Flutter app overhaul: Isar_plus sync queue (replacing AWS DataStore), health-data sync via flutter_health + WorkManager, UI redesign, privacy/consent flow, and Play Store / TestFlight release pipeline (GitHub Actions)",
      "Built an LLM coach assistant (Groq, Pinecone retrieval, Python Lambda) where numbers are computed in code and safety rules run before any model call; backed by 187 offline tests and a 308-question behavioural test set",
      "Revamped the Flutter Desktop admin console (live control of all phones, roster import, tournament setup) and cut cloud costs: right-sized Lambda memory 1024→256 MB, traced a surprise AWS bill to CloudTrail data events, and saved ~$200/month by replacing SageMaker with a Dockerized Lambda (validated on GCP Cloud Run)"
    ],
  },
  {
    role: "Software Developer",
    company: "7 Dots Smart Solutions",
    duration: "Dec 2024 – Nov 2025",
    location: "Hyderabad, India",
    badges: ["🚀 Lighthouse 20%→80%", "⚡ 2.5× faster loads", "🛡️ 99% crash-free"],
    achievements: [
      "Led the complete UI revamp of EventReply, improving Lighthouse score from ~20% to 80% and achieving ~2.5× faster loads through Core Web Vitals optimization, code-splitting, lazy loading, caching and WCAG-aware fixes.",
      "Built an Ionic/Angular application from scratch with social-media and real-time chat features over WebSockets on a serverless AWS Lambda backend, maintaining 99% crash-free sessions across apps serving 10,000+ users.",
      "Built a MongoDB-backed web-scraping pipeline that harvested ~200K business records from public directories for lead generation.",
      "Cut median admin dashboard load time by ~45%; automated Android & iOS builds with GitLab CI/CD, reducing manual deployment time by ~40%.",
      "Integrated Sentry release health and alerting (unresolved production issues down ~35%), wrote Jest unit/integration tests for critical flows, and built Spring Boot REST APIs for autocomplete and search utilities."
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "7 Dots Smart Solutions",
    duration: "Jun 2024 – Nov 2024",
    location: "Hyderabad, India",
    badges: ["🎯 15+ Jira issues", "📱 30% better layout stability"],
    achievements: [
      "Implemented a modular Angular admin console, reducing load time and improving maintainability.",
      "Built an Ionic/Angular application from scratch with secure login, buy/sell and event-creation modules, improving layout stability by ~30%.",
      "Resolved 15+ high-priority Jira issues during early production cycles and collaborated with backend teams on API integration and data-fetch patterns."
    ],
  },
  {
    role: "MERN/NLP Intern",
    company: "Solomons Internationals",
    duration: "Apr 2024 – Jun 2024",
    location: "Tenali, India",
    badges: ["🧠 NLP backend", "🚢 Shipped to prod"],
    achievements: [
      "Built the Flask backend for a full NLP-model example inside an educational MERN platform, integrated it with an Express server and connected it end-to-end to the React frontend; shipped to production."
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
