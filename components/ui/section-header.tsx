"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  /** Small mono label above the title, e.g. "02 — Experience". */
  eyebrow?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({ title, subtitle, eyebrow, align = "center", className }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-14", centered ? "text-center" : "text-left", className)}
    >
      {eyebrow && (
        <div className={cn("eyebrow mb-4 flex items-center gap-3", centered && "justify-center")}>
          <span className="h-px w-6 bg-primary/60" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-serif text-4xl md:text-[3.25rem] font-medium leading-[1.1] tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg leading-relaxed text-muted max-w-2xl", centered && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
