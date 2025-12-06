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
  title: "Surya Pillutla - Frontend Developer",
  description: "Frontend Developer specializing in Angular, Next.js, and TypeScript. Building fast, beautiful, and performant web experiences.",
  keywords: ["Frontend Developer", "Angular", "Next.js", "TypeScript", "React", "Web Development"],
  authors: [{ name: "Surya Pillutla" }],
  openGraph: {
    title: "Surya Pillutla - Frontend Developer",
    description: "Frontend Developer specializing in Angular, Next.js, and TypeScript",
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
    title: "Surya Pillutla - Frontend Developer",
    description: "Frontend Developer specializing in Angular, Next.js, and TypeScript",
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
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
