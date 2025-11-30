"use client";

import { useState } from "react";
import { Send, Mail, MapPin, CheckCircle, Phone } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedInView } from "@/components/animated-in-view";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeader
        title="Get In Touch"
        subtitle="Have a project in mind? Let's work together!"
      />

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <AnimatedInView className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1 text-foreground/70" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a
                      href="mailto:suryapillutla007@gmail.com"
                      className="text-foreground/70 hover:text-foreground transition-colors"
                    >
                      suryapillutla007@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1 text-foreground/70" />
                  <div>
                    <div className="font-semibold mb-1">Phone Number</div>
                    <div className="text-foreground/70">+91 9182342620</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1 text-foreground/70" />
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-foreground/70">Hyderabad, India</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedInView>

        {/* Contact Form */}
        <AnimatedInView delay={0.1}>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </AnimatedInView>
      </div>
    </div>
  );
}


