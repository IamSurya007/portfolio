"use client";

import { ArrowRight, Github, Gitlab, Linkedin, Mail, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Balancer } from "react-wrap-balancer";
import { AnimatedSection } from "@/components/animated-section";

const socialLinks = [
  { icon: Github, href: "https://github.com/IamSurya007", label: "GitHub" },
  { icon: Gitlab, href: "https://gitlab.com/IamSurya007", label: "GitLab" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/surya-pillutla-b751b024a/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:suryapillutla007@gmail.com", label: "Email" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
              Hi, I&apos;m Surya Pillutla
            </h1>

            <p className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/80">
              Full Stack Developer
            </p>

            <p className="text-lg md:text-xl text-foreground/70 mb-8">
              <Balancer>
                I build fast, beautiful, and performant web experiences.
              </Balancer>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>2+ years experience</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <Link href="/projects" prefetch={true}>
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact" prefetch={true}>Get In Touch</Link>
            </Button>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.7} className="flex items-center justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-200 hover:scale-110 active:scale-95"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
