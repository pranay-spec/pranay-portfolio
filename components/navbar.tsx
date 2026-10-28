"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

const NAV_LINKS = [
  { name: "Selected Work", href: "#work" },
  { name: "Achievements", href: "#achievements" },
  { name: "Toolkit", href: "#skills" },
  { name: "Background", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090B10]/90 backdrop-blur-md border-b border-[#1E2633] py-3.5 shadow-xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Monogram */}
        <Link
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-mono tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5F36B] rounded px-1.5 py-1"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#C5F36B] group-hover:scale-125 transition-transform" />
          <span className="font-semibold text-white tracking-tight text-base font-sans">
            PRANAY GUJAR
          </span>
          <span className="hidden sm:inline-block text-xs text-[#64748B] font-mono border-l border-[#1E2633] pl-2.5">
            AI / FULL-STACK
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 text-xs font-mono tracking-wide"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-[#94A3B8] hover:text-white rounded-md hover:bg-[#11151D] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C5F36B]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] hover:text-[#C5F36B] transition-colors py-1.5 px-3 rounded border border-[#1E2633] hover:border-[#C5F36B]/40 bg-[#11151D]/60"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href={SITE_CONFIG.links.email}
            className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#090B10] bg-[#C5F36B] hover:bg-[#D4F788] transition-all px-3.5 py-1.5 rounded shadow-sm hover:shadow-md hover:shadow-[#C5F36B]/20"
          >
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded text-[#94A3B8] hover:text-white hover:bg-[#11151D] border border-transparent hover:border-[#1E2633] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5F36B]"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[61px] bg-[#090B10]/98 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between p-6 border-t border-[#1E2633] animate-in fade-in duration-200">
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col gap-2 pt-4"
          >
            <div className="text-[11px] font-mono tracking-widest text-[#64748B] uppercase px-3 pb-2">
              Navigation
            </div>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3.5 text-lg font-medium text-white hover:text-[#C5F36B] hover:bg-[#11151D] rounded-lg transition-colors border border-transparent hover:border-[#1E2633]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="space-y-4 pt-6 border-t border-[#1E2633]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
              <Terminal className="w-3.5 h-3.5 text-[#C5F36B]" />
              <span>{SITE_CONFIG.role}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono text-white bg-[#11151D] border border-[#1E2633] rounded-md"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono text-white bg-[#11151D] border border-[#1E2633] rounded-md"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <a
              href={SITE_CONFIG.links.email}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-mono font-medium text-[#090B10] bg-[#C5F36B] hover:bg-[#D4F788] rounded-md text-center transition-colors"
            >
              pranaygujar685@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
