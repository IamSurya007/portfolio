import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/ui/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Surya Pillutla - Full-Stack Mobile & Front-End Developer",
  description: "Full-Stack Mobile & Front-End Developer specializing in Flutter, Angular, Next.js, and TypeScript. Building fast, beautiful, and performant web and mobile experiences.",
  keywords: ["Full Stack Developer", "Mobile Developer", "Flutter", "Angular", "Next.js", "TypeScript", "React", "Web Development"],
  authors: [{ name: "Surya Pillutla" }],
  openGraph: {
    title: "Surya Pillutla - Full-Stack Mobile & Front-End Developer",
    description: "Full-Stack Mobile & Front-End Developer specializing in Flutter, Angular, Next.js, and TypeScript",
    type: "website",
    locale: "en_US",
  },
  icons:{
    icon: '/icon.png',
    shortcut: "/icon.png",
    apple: "/icon.png"
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Pillutla - Full-Stack Mobile & Front-End Developer",
    description: "Full-Stack Mobile & Front-End Developer specializing in Flutter, Angular, Next.js, and TypeScript",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pb-28 pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
