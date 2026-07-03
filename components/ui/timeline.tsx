"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, MapPin, Calendar, Briefcase } from "lucide-react";
import { AnimatedInView } from "@/components/animated-in-view";
import { Card, CardContent } from "@/components/ui/card";

export interface TimelineItemData {
  id: string | number;
  date: string;
  title: string;
  subtitle?: string;
  location?: string;
  description?: string;
  icon?: React.ElementType;
  highlights?: string[];
  details?: string[];
}

export interface TimelineProps {
  items: TimelineItemData[];
}

export function Timeline({ items }: TimelineProps) {
  const [expandedId, setExpandedId] = useState<string | number | null>(null);

  const toggleExpand = (id: string | number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">
      {/* Vertical Line */}
      {/* Mobile: pinned left. Desktop: center. */}
      <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-foreground/10 md:-translate-x-1/2" />

      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const Icon = item.icon || Briefcase;
          const isExpanded = expandedId === item.id;
          const hasDetails = item.details && item.details.length > 0;

          // Alignments
          const alignClass = isEven ? "text-left md:text-right" : "text-left";
          const flexAlignClass = isEven ? "items-start md:items-end" : "items-start";
          const justifyClass = isEven ? "justify-start md:justify-end" : "justify-start";

          return (
            <AnimatedInView
              key={item.id}
              delay={index * 0.1}
              className={`relative flex items-start md:items-center justify-between flex-col md:flex-row w-full ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-[28px] md:left-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center -translate-x-1/2 z-10 shadow-lg mt-0 md:mt-0">
                <Icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>

              {/* Content Card container */}
              <div
                className={`w-full md:w-[45%] pl-[72px] pr-4 md:px-0 ${
                  isEven ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <Card
                  hover={!!hasDetails}
                  className={`bg-background/50 backdrop-blur-xl border-foreground/10 ${
                    hasDetails ? "cursor-pointer transition-all duration-300" : ""
                  }`}
                  onClick={() => {
                    if (hasDetails) toggleExpand(item.id);
                  }}
                >
                  <CardContent className={`pt-6 flex flex-col ${flexAlignClass}`}>
                    {/* Header: Date, Title */}
                    <div className={`text-sm font-bold text-primary mb-2 w-full ${alignClass}`}>
                      {item.date}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 w-full ${alignClass}`}>
                      {item.title}
                    </h3>

                    {/* Metadata (Experience) */}
                    {(item.subtitle || item.location) && (
                      <div
                        className={`flex flex-wrap items-center gap-3 md:gap-4 text-sm text-foreground/70 mb-4 w-full ${justifyClass}`}
                      >
                        {item.subtitle && (
                          <div className="flex items-center gap-1.5 text-foreground font-medium bg-foreground/5 px-2 py-1 rounded-md border border-foreground/10">
                            <Briefcase className="h-3.5 w-3.5" />
                            {item.subtitle}
                          </div>
                        )}
                        {item.location && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Description (About) */}
                    {item.description && (
                      <p className={`text-foreground/70 leading-relaxed text-sm w-full ${alignClass}`}>
                        {item.description}
                      </p>
                    )}

                    {/* Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className={`flex flex-wrap gap-2 mt-3 mb-2 w-full ${justifyClass}`}>
                        {item.highlights.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="text-[11px] md:text-xs font-semibold px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Expand Button */}
                    {hasDetails && (
                      <div className={`mt-2 flex w-full ${justifyClass}`}>
                        <button
                          className="p-1.5 md:p-2 rounded-full hover:bg-foreground/10 transition-colors text-foreground/60 flex items-center gap-2 text-sm font-medium"
                          aria-label={isExpanded ? "Collapse details" : "Expand details"}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(item.id);
                          }}
                        >
                          <span className="hidden sm:inline">
                            {isExpanded ? "Show less" : "Show more"}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4 md:h-5 md:w-5" />
                          ) : (
                            <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                          )}
                        </button>
                      </div>
                    )}

                    {/* Expandable Details */}
                    {hasDetails && (
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden w-full text-left mt-4"
                          >
                            <div className="pt-4 border-t border-foreground/10">
                              <h4 className="font-semibold mb-3 text-foreground/90 text-sm md:text-base">
                                Key Achievements:
                              </h4>
                              <ul className="space-y-3">
                                {item.details!.map((detail, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-left">
                                    <span className="text-primary mt-1 text-lg leading-none">
                                      •
                                    </span>
                                    <span className="text-foreground/80 leading-relaxed text-sm">
                                      {detail}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-[45%]"></div>
            </AnimatedInView>
          );
        })}
      </div>
    </div>
  );
}
