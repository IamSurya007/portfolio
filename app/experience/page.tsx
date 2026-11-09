"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Timeline, TimelineItemData } from "@/components/ui/timeline";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="Two-plus years shipping mobile, web and cloud systems, from startup product teams to a live brain-signal tournament platform."
      />

      <div className="max-w-5xl mx-auto mb-24">
        <Timeline items={experiences.map((exp, index) => ({
          id: index,
          date: exp.duration,
          title: exp.role,
          subtitle: exp.company,
          location: exp.location,
          highlights: exp.badges,
          details: exp.achievements,
          current: exp.duration.includes("Present"),
        })) as TimelineItemData[]} />
      </div>
    </div>
  );
}
