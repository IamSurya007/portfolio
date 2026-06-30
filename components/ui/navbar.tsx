"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Home, User, Briefcase, FolderGit2, Mail, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Minimal Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 pointer-events-none">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold pointer-events-auto bg-background/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-foreground/10">
            Surya Pillutla
          </Link>

          <div className="flex items-center gap-3 pointer-events-auto bg-background/50 backdrop-blur-md p-1.5 rounded-xl border border-foreground/10">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-foreground/10 transition-colors relative"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            )}

            <Button asChild size="sm" className="rounded-lg font-medium">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Bottom Floating Dock Navbar */}
      <div className="fixed bottom-6 left-0 right-0 z-50 px-4 pointer-events-none flex justify-center">
        <nav className="pointer-events-auto bg-background/70 backdrop-blur-xl border border-foreground/10 p-2 rounded-full shadow-lg flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                className={cn(
                  "relative flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 group",
                  isActive
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="dock-active"
                    className="absolute inset-0 bg-foreground/10 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className={cn("h-4 w-4 z-10 transition-transform group-hover:scale-110", isActive && "text-foreground")} />
                <span className={cn("z-10 hidden sm:block", isActive && "font-semibold")}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
