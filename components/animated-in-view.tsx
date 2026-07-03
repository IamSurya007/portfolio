"use client";

import { motion, MotionProps } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
