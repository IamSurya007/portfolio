"use client";

import { motion, MotionProps } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedInViewProps extends Omit<MotionProps, "initial" | "whileInView"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedInView({ 
  children, 
  className, 
  delay = 0,
  ...motionProps 
}: AnimatedInViewProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and initial hydration, render visible content
  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}


