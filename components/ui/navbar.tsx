"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Surya Pillutla
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={true}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-foreground/10 text-foreground"
                        : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-foreground/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-foreground/10 bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-foreground/10 text-foreground"
                        : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


