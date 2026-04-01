"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/app/components/ui/Logo";

const links = [
  { label: "À propos", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projets", href: "#projects" },
  { label: "Expériences", href: "#experience" },
  { label: "Me contacter", href: "#contact", primary: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Logo size={34} />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  link.primary
                    ? "ml-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary text-white hover:bg-primary-dark transition-all duration-200 shadow-sm shadow-primary/30"
                    : "px-3 py-1.5 rounded-full text-sm text-muted hover:text-primary hover:bg-primary-light transition-all duration-200"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-muted hover:text-primary"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-border px-6 pb-4"
          >
            <ul className="flex flex-col gap-1 pt-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={
                      link.primary
                        ? "block px-3 py-2 rounded-lg text-sm font-medium text-primary bg-primary-light hover:bg-primary hover:text-white transition-all"
                        : "block px-3 py-2 rounded-lg text-sm text-muted hover:text-primary hover:bg-primary-light transition-all"
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
