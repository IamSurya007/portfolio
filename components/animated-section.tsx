"use client";

import { motion, MotionProps } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedSectionProps extends Omit<MotionProps, "initial" | "animate"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ 
  children, 
  className, 
  delay = 0,
  ...motionProps 
}: AnimatedSectionProps) {
  const [mounted, setMounted] = useState(true);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // During SSR and initial hydration, render without animation
  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}


