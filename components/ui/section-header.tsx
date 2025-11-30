"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render visible content during SSR/hydration
  if (!mounted) {
    return (
      <div className={cn("text-center mb-12", className)}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("text-center mb-12", className)}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}


