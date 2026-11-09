"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { AnimatedInView } from "@/components/animated-in-view";
import { cn } from "@/lib/utils";

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
  /** Marks the current role with an accent node. */
  current?: boolean;
}

export interface TimelineProps {
  items: TimelineItemData[];
  /** How many detail bullets to show before "Show all". */
  previewCount?: number;
}

/**
 * Single-rail timeline: dates sit in a left column on desktop, content on the right.
 * Reads top to bottom like a document rather than zig-zagging.
 */
export function Timeline({ items, previewCount = 3 }: TimelineProps) {
  const [expanded, setExpanded] = useState<Record<string | number, boolean>>({});

  return (
    <div className="relative">
      {items.map((item, index) => {
        const details = item.details ?? [];
        const isOpen = !!expanded[item.id];
        const visible = isOpen ? details : details.slice(0, previewCount);
        const hidden = details.length - previewCount;
        const isLast = index === items.length - 1;

        return (
          <AnimatedInView key={item.id} delay={index * 0.06}>
            <div className="relative grid grid-cols-[20px_1fr] gap-x-5 md:grid-cols-[160px_20px_1fr] md:gap-x-8">
              {/* Date column (desktop) */}
              <div className="hidden pt-[3px] text-right md:block">
                <div className="eyebrow !tracking-[0.08em]">{item.date}</div>
              </div>

              {/* Rail */}
              <div className="relative flex justify-center">
                <span
                  className={cn(
                    "relative z-10 mt-1.5 h-3 w-3 rounded-full border-2",
                    item.current ? "border-primary bg-primary" : "border-foreground/30 bg-background"
                  )}
                >
                  {item.current && <span className="soft-ping absolute inset-0 rounded-full bg-primary" />}
                </span>
                {!isLast && <span className="absolute top-5 bottom-0 w-px bg-border" />}
              </div>

              {/* Content */}
              <div className={cn("pb-14", isLast && "pb-0")}>
                <div className="eyebrow mb-2 md:hidden">{item.date}</div>
                <h3 className="font-serif text-2xl font-medium tracking-tight">{item.title}</h3>

                {(item.subtitle || item.location) && (
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px]">
                    {item.subtitle && <span className="font-medium text-primary">{item.subtitle}</span>}
                    {item.location && (
                      <span className="flex items-center gap-1 text-muted">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                    )}
                  </div>
                )}

                {item.description && (
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">{item.description}</p>
                )}

                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-foreground/80"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                {details.length > 0 && (
                  <div className="mt-5 rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur-sm md:p-6">
                    <ul className="space-y-3">
                      <AnimatePresence initial={false}>
                        {visible.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex gap-3 overflow-hidden text-[15px] leading-relaxed text-foreground/80"
                          >
                            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </AnimatePresence>
                    </ul>

                    {hidden > 0 && (
                      <button
                        onClick={() => setExpanded((e) => ({ ...e, [item.id]: !isOpen }))}
                        className="mt-4 flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
                        aria-expanded={isOpen}
                      >
                        {isOpen ? "Show less" : `Show ${hidden} more`}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </AnimatedInView>
        );
      })}
    </div>
  );
}
