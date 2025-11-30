"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import testimonialsData from "@/data/testimonials.json";

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeader
        title="Testimonials"
        subtitle="What people say about working with me"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card hover>
                <CardContent className="pt-6">
                  <Quote className="h-12 w-12 text-foreground/20 mb-6" />
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    &quot;{testimonialsData[currentIndex].content}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">
                      {testimonialsData[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-lg">
                        {testimonialsData[currentIndex].name}
                      </div>
                      <div className="text-sm text-foreground/70">
                        {testimonialsData[currentIndex].role} at {testimonialsData[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/5 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="p-2 rounded-full border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/5 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


