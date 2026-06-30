"use client";

import { Download, FileText } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedInView } from "@/components/animated-in-view";

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Surya_Pillutla_Resume.pdf";
    link.click();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeader
        title="Resume"
        subtitle="Download my resume or view it online"
      />

      <div className="max-w-4xl mx-auto">
        <AnimatedInView className="mb-8 flex justify-center">
          <Button onClick={handleDownload} size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </AnimatedInView>

        <AnimatedInView delay={0.1}>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center border-b border-foreground/10 pb-6">
                  <h1 className="text-4xl font-bold mb-2">Surya Pillutla</h1>
                  <p className="text-xl text-foreground/70 mb-4">
                    Full-Stack Mobile & Front-End Developer
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/60">
                    <a
                      href="mailto:suryapillutla007@gmail.com"
                      className="hover:text-foreground transition-colors"
                    >
                      suryapillutla007@gmail.com
                    </a>
                  </div>
                </div>

                {/* Summary */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Professional Summary
                  </h2>
                  <p className="text-foreground/70 leading-relaxed">
                    Full-Stack Mobile & Front-End Developer specialising in Flutter, Angular, and React, with ~2 years of experience shipping production apps to 10K+ users. Skilled in real-time features (WebSockets, BLE), cloud-native pipelines (AWS Lambda/SQS/S3), and CI/CD automation. Consistent track record of measurable gains — BLE latency down 40%, Lighthouse scores up from 20% to 80%, report generation 60% faster.
                  </p>
                </section>

                {/* Experience */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                  <div className="space-y-8">
                    
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold">
                          Junior Software Engineer
                        </h3>
                        <span className="text-sm text-foreground/60">
                          Jan 2026 – Present
                        </span>
                      </div>
                      <p className="text-foreground/70 font-medium mb-2">
                        NeuroStellar • Chennai, India
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-foreground/70 ml-4">
                        <li>Built a Flutter health-tracking mobile app from scratch integrating Google Health Connect & Apple Health via flutter_health; WorkManager background sync to local Isar DB and Firebase cloud reduced data-loss by ~90% and average sync latency to &lt;2 s.</li>
                        <li>Designed an AWS serverless report-generation pipeline (S3 trigger → SQS → Lambda) with a Dockerised Python service; cut end-to-end generation time by ~60%; added CloudWatch live-tracking dashboard, alarms, and SNS notifications, reducing mean time-to-detect errors by ~50%.</li>
                        <li>Revamped the Flutter Desktop admin console and built internal developer tooling, reducing task-completion time by ~35%.</li>
                        <li>Rearchitected BLE connection logic using Flutter isolates & foreground services; connection time down ~40%, BLE-related crash reports down ~30%.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold">
                          Software Developer
                        </h3>
                        <span className="text-sm text-foreground/60">
                          Dec 2024 – Present
                        </span>
                      </div>
                      <p className="text-foreground/70 font-medium mb-2">
                        7 Dots Smart Solutions • Hyderabad, India
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-foreground/70 ml-4">
                        <li>Led the complete UI revamp of EventReply, improving Lighthouse score from ~20% to 80%+ and achieving ~2.5× faster initial load times through Core Web Vitals optimization, granular code-splitting, lazy loading, and advanced caching.</li>
                        <li>Built and maintained Angular/Ionic applications serving 10,000+ users with 99% crash-free sessions; developed realtime chat and notifications using AWS Lambda WebSockets.</li>
                        <li>Improved admin dashboard performance with a ~45% reduction in median load time using parallel API hydration, optimized RxJS streams, and component-level memoization.</li>
                        <li>Automated Android & iOS build pipelines using GitLab CI/CD, reducing manual deployment time by ~40%.</li>
                        <li>Integrated Sentry for error tracking and release health monitoring, cutting unresolved production issues by ~35%.</li>
                        <li>Implemented Spring Boot REST APIs to support dynamic autocomplete, search utilities, and performance-optimized lookups.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold">
                          Front-End Developer Intern
                        </h3>
                        <span className="text-sm text-foreground/60">
                          Jun 2024 – Nov 2024
                        </span>
                      </div>
                      <p className="text-foreground/70 font-medium mb-2">
                        7 Dots Smart Solutions • Hyderabad, India
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-foreground/70 ml-4">
                        <li>Contributed to Angular and Ionic applications during early production cycles, resolving 15+ high-priority Jira issues.</li>
                        <li>Implemented secure login, buy/sell flows, and event creation modules using Angular, RxJS, and Ionic native features.</li>
                        <li>Improved responsive layout stability and reduced mobile UI inconsistencies by ~30% through targeted component refactoring.</li>
                        <li>Collaborated closely with backend teams to ensure seamless API integration and optimized data fetch patterns.</li>
                      </ul>
                    </div>

                  </div>
                </section>

                {/* Skills */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Frontend</h4>
                      <p className="text-foreground/70">
                        Angular, React, Next.js, TypeScript, Tailwind CSS, Ionic, Flutter
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backend</h4>
                      <p className="text-foreground/70">
                        Node.js, Express, Spring Boot, Prisma, Mongo DB, Python
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tools & DevOps</h4>
                      <p className="text-foreground/70">
                        Git, GitLab CI/CD, Docker, Firebase, Amazon Web Services (AWS), Google Cloud
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Other</h4>
                      <p className="text-foreground/70">
                        Sentry, Web Scraping, RxJS, Jest
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </AnimatedInView>
      </div>
    </div>
  );
}
