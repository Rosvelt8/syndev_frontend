"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Globe, Shield, Code, Gavel, FileText, LayoutGrid, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/charte", label: "Charte", icon: Shield },
  { href: "/contrats", label: "Contrats", icon: FileText },
  { href: "/tarifs", label: "Tarifs", icon: Gavel },
  { href: "/signalement", label: "Signalement", icon: Shield },
  { href: "/blog", label: "Blog", icon: Code },
  { href: "/communaute", label: "Communauté", icon: Globe },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-border" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(185,28,28,0.4)] group-hover:scale-110 transition-transform">
            <Code className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-foreground">
            SYN<span className="text-primary group-hover:red-glow transition-all">DEV</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 bg-secondary/50 hover:bg-secondary rounded-xl transition-all text-muted-foreground hover:text-foreground border border-border"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="w-4 h-4" />
            <span>FR</span>
          </button>
          <Link
            href="/rejoindre"
            className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(185,28,28,0.3)] hover:shadow-[0_0_30px_rgba(185,28,28,0.5)] hover:-translate-y-0.5 transition-all"
          >
            Rejoindre
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-muted-foreground hover:text-foreground flex items-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="w-5 h-5 text-primary" />
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-2 text-muted-foreground"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                <span>Mode {theme === "dark" ? "Clair" : "Sombre"}</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-5 h-5" />
                <span>FR / EN</span>
              </button>
            </div>
            <Link
              href="/rejoindre"
              className="w-full py-3 bg-primary text-center text-white font-bold rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Rejoindre le collectif
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
