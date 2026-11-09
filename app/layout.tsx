import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { AmbientBackground } from "@/components/ambient-background";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/ui/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Surya Pillutla — Full-Stack Engineer",
  description: "Full-stack engineer building reliable mobile, web and cloud systems with Flutter, React/Angular, Node.js and AWS.",
  keywords: ["Full Stack Developer", "Mobile Developer", "Flutter", "Angular", "Next.js", "TypeScript", "React", "Web Development", "AWS", "Node.js"],
  authors: [{ name: "Surya Pillutla" }],
  openGraph: {
    title: "Surya Pillutla — Full-Stack Engineer",
    description: "Full-stack engineer building reliable mobile, web and cloud systems with Flutter, React/Angular, Node.js and AWS.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Surya Pillutla — Full-Stack Engineer",
    description: "Full-stack engineer building reliable mobile, web and cloud systems with Flutter, React/Angular, Node.js and AWS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${serif.variable} ${mono.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AmbientBackground />
          <Navbar />
          <main className="min-h-screen pb-28 pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
