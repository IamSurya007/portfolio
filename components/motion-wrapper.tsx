"use client";

import { motion, MotionProps } from "framer-motion";
import { useEffect, useState } from "react";

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export function MotionWrapper({ children, className, ...motionProps }: MotionWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}


