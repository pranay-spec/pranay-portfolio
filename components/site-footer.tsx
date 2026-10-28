"use client";

import { ArrowUp, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1E2633] bg-[#090B10] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs font-mono text-[#94A3B8]">
          <span className="text-white font-semibold">
            {SITE_CONFIG.name}
          </span>
          <span className="hidden sm:inline text-[#64748B]">·</span>
          <span>© 2026 All rights reserved.</span>
          <span className="hidden sm:inline text-[#64748B]">·</span>
          <span className="inline-flex items-center gap-1 text-[#C5F36B]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Schema.org &amp; AI Visibility Verified</span>
          </span>
        </div>

        {/* Right: Quick actions and Back to Top */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#C5F36B] transition-colors"
          >
            GitHub
          </a>
          <span className="text-[#64748B]">/</span>
          <a
            href={SITE_CONFIG.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#C5F36B] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[#64748B]">/</span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="flex items-center gap-1.5 text-[#94A3B8] hover:text-white transition-colors bg-[#11151D] px-2.5 py-1 rounded border border-[#1E2633] hover:border-[#C5F36B]/40"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-[#C5F36B]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
