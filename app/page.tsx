"use client";

import { ArrowRight, ArrowUpRight, Github, Gitlab, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { experiences } from "@/data/experience";
import projectsData from "@/data/projects.json";

const socialLinks = [
  { icon: Github, href: "https://github.com/IamSurya007", label: "GitHub" },
  { icon: Gitlab, href: "https://gitlab.com/IamSurya007", label: "GitLab" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/surya-pillutla-b751b024a/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:suryapillutla007@gmail.com", label: "Email" },
];

const metrics = [
  { value: "60%", label: "faster report generation on an AWS serverless pipeline" },
  { value: "20→80", label: "Lighthouse score after leading the EventReply revamp" },
  { value: "10K+", label: "users served at 99% crash-free sessions" },
  { value: "~$200", label: "monthly cloud cost cut by moving SageMaker to Lambda" },
];

const featuredProjects = projectsData.slice(0, 3);

export default function Home() {
  return (
    <div className="relative">
      {/* ---------- Hero ---------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-24">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection delay={0}>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-sm text-muted backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="soft-ping absolute inset-0 rounded-full bg-emerald-500" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="whitespace-nowrap">
                Software Engineer at <span className="font-medium text-foreground">NeuroStellar</span>
              </span>
              <span className="hidden text-foreground/20 sm:inline">·</span>
              <span className="hidden sm:inline">Chennai, India</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <p className="eyebrow mb-5">Surya Pillutla — Full-stack engineer</p>
            <h1 className="font-serif text-[2.75rem] leading-[1.05] font-medium tracking-[-0.02em] sm:text-6xl md:text-7xl">
              I build mobile, web &amp; cloud systems that hold up{" "}
              <em className="text-primary">in production.</em>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              Around two years shipping Flutter, React/Angular and AWS serverless products. Most recently, the
              backend, real-time layer and CircleChess integration behind a live EEG chess-tournament platform.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.24} className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/projects" prefetch={true}>
                View my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/contact" prefetch={true}>Get in touch</Link>
            </Button>

            <div className="ml-1 flex items-center gap-1 sm:ml-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---------- Metrics ---------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <AnimatedSection className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.value} className="bg-surface p-7">
                <div className="font-serif text-4xl font-medium tracking-tight">{m.value}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ---------- Experience preview ---------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3 flex items-center gap-3"><span className="h-px w-6 bg-primary/60" />Experience</p>
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Where I&apos;ve worked</h2>
            </div>
            <Link href="/experience" className="group hidden items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground sm:flex">
              Full history <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </AnimatedSection>

          <div className="divide-y divide-border border-y border-border">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.role + exp.company} delay={i * 0.05}>
                <Link
                  href="/experience"
                  className="group grid grid-cols-1 gap-1 py-6 transition-colors sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
                >
                  <div>
                    <span className="font-serif text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
                      {exp.role}
                    </span>
                    <span className="text-muted"> — {exp.company}</span>
                  </div>
                  <span className="eyebrow !tracking-[0.08em]">{exp.duration}</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Selected projects ---------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3 flex items-center gap-3"><span className="h-px w-6 bg-primary/60" />Selected work</p>
              <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Things I&apos;ve built</h2>
            </div>
            <Link href="/projects" className="group hidden items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground sm:flex">
              All projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.08} className="h-full">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_12px_32px_-12px_rgb(0_0_0/0.18)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="eyebrow">0{i + 1}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium leading-snug tracking-tight">{p.title}</h3>
                  <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted">{p.description}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {p.techStack.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-foreground/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AnimatedSection className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/80 px-8 py-14 text-center backdrop-blur-sm md:px-16">
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <h2 className="relative font-serif text-3xl font-medium tracking-tight md:text-5xl">
              Have something worth building?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted">
              Always happy to talk about products, roles or collaborations. Tell me what you&apos;re working on.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact" prefetch={true}>
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="https://github.com/IamSurya007" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
