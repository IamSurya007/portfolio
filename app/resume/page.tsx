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
                    Frontend Developer
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/60">
                    <span>Hyderabad, India</span>
                    <span>•</span>
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
                    Frontend Developer with 2+ years of experience building modern web
                    applications using Angular, Next.js, and TypeScript. Specialized in
                    performance optimization, improving Lighthouse scores from ~20% to 80%+,
                    and implementing best practices for scalable applications.
                  </p>
                </section>

                {/* Experience */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold">
                          Frontend Developer
                        </h3>
                        <span className="text-sm text-foreground/60">2+ years</span>
                      </div>
                      <p className="text-foreground/70 font-medium mb-2">
                        7-Dot Smart Solutions • Hyderabad, India
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-foreground/70 ml-4">
                        <li>Built and optimized features for Ionic/Angular apps</li>
                        <li>Improved Lighthouse score from ~20% to 80%+</li>
                        <li>Implemented code-splitting, caching, lazy loading</li>
                        <li>Integrated AWS S3, CloudFront, WebSockets</li>
                        <li>Improved performance 2.5× through optimization</li>
                        <li>Created admin dashboards, automation, invitations system</li>
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
                        Angular, React, Next.js, TypeScript, Tailwind CSS, Ionic
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backend</h4>
                      <p className="text-foreground/70">
                        Node.js, Express, Spring Boot (basic), Prisma
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tools & DevOps</h4>
                      <p className="text-foreground/70">
                        Git, GitLab CI/CD, AWS S3, CloudFront
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Other</h4>
                      <p className="text-foreground/70">
                        RxJS, DSA basics, Jest
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


