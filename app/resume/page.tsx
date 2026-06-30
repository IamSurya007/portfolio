"use client";

import { Download, FileText } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedInView } from "@/components/animated-in-view";

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Surya_Pillutla_Resume.pdf";
    link.click();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <SectionHeader
        title="Resume"
        subtitle="View or download my full resume"
      />

      <div className="max-w-5xl mx-auto">
        <AnimatedInView className="mb-6 flex justify-center">
          <Button onClick={handleDownload} size="lg" className="rounded-full px-8">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </AnimatedInView>

        <AnimatedInView delay={0.1}>
          <Card className="overflow-hidden border-foreground/10 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-0 sm:p-2">
              <div className="w-full aspect-[1/1.4] sm:aspect-auto sm:h-[80vh] bg-foreground/5 rounded-lg overflow-hidden flex items-center justify-center relative group">
                <iframe 
                  src="/resume.pdf#toolbar=0" 
                  className="w-full h-full border-0"
                  title="Resume PDF Viewer"
                />
                
                {/* Fallback for browsers that don't support inline PDFs */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm -z-10 group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FileText className="h-16 w-16 text-foreground/40 mb-4" />
                  <p className="text-foreground/70 mb-4 text-center px-4">
                    PDF preview might not be supported on your browser or device.
                  </p>
                  <Button onClick={handleDownload} variant="outline">
                    Download Instead
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedInView>
      </div>
    </div>
  );
}
