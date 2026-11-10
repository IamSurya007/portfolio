"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Home, User, Briefcase, FolderGit2, Mail, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { getResumeUrls } from "@/lib/resume";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const { downloadUrl } = getResumeUrls();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 pointer-events-none">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            aria-label="Surya Pillutla, home"
            className="pointer-events-auto group flex items-center gap-3 rounded-full border border-border bg-background/70 backdrop-blur-md p-1.5 sm:pr-4"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-serif text-sm font-semibold text-background">
              S
            </span>
            <span className="hidden font-serif text-[17px] font-medium tracking-tight sm:inline">Surya Pillutla</span>
          </Link>

          <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-border bg-background/70 backdrop-blur-md p-1">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-foreground/5 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isDark ? "dark" : "light"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </motion.span>
                </AnimatePresence>
              )}
            </button>

            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 items-center gap-1.5 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Bottom dock */}
      <div className="fixed bottom-6 left-0 right-0 z-50 px-4 pointer-events-none flex justify-center">
        <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-border bg-background/75 p-1.5 shadow-[0_8px_30px_-8px_rgb(0_0_0/0.25)] backdrop-blur-xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 sm:px-4",
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="dock-active"
                    className="absolute inset-0 rounded-full border border-border bg-surface-2"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon className={cn("relative z-10 h-4 w-4", isActive && "text-primary")} />
                <span className="relative z-10 hidden sm:block">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
