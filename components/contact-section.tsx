"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SITE_CONFIG } from "@/lib/site-config";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full border-t border-[#1E2633]"
    >
      <div className="relative rounded-2xl border border-[#1E2633] bg-[#11151D] p-8 sm:p-12 lg:p-16 overflow-hidden bg-dot-subtle">
        {/* Glow accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#C5F36B]/5 blur-3xl"
        />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#090B10] border border-[#1E2633] mb-6 text-xs font-mono text-[#C5F36B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5F36B] animate-pulse" />
            <span>05 / INQUIRIES &amp; ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Have an interesting problem?{" "}
            <span className="text-[#C5F36B]">Let&apos;s build something meaningful.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-2xl">
            Currently exploring software engineering, AI/ML, and full-stack development internship opportunities. Whether you want to discuss algorithmic systems, hackathon collaborations, or technical roles, my inbox is open.
          </p>

          {/* Email action banner */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href={SITE_CONFIG.links.email}
              className="flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#C5F36B] text-[#090B10] font-mono font-semibold text-sm hover:bg-[#D4F788] transition-all shadow-md shadow-[#C5F36B]/15"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address to clipboard"
              className="flex items-center gap-2 px-4 py-3.5 rounded-md bg-[#090B10] hover:bg-[#161C27] text-white border border-[#1E2633] hover:border-[#C5F36B]/40 font-mono text-sm transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#C5F36B]" />
                  <span className="text-[#C5F36B]">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#94A3B8]" />
                  <span>Copy: {SITE_CONFIG.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#1E2633] text-xs font-mono">
            {/* GitHub */}
            <a
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg bg-[#090B10] border border-[#1E2633] hover:border-[#C5F36B]/50 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-[#94A3B8] group-hover:text-white" />
                <div>
                  <div className="text-[#64748B] text-[10px]">GITHUB</div>
                  <div className="text-white font-medium">pranay-spec</div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#C5F36B]" />
            </a>

            {/* LinkedIn */}
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg bg-[#090B10] border border-[#1E2633] hover:border-[#C5F36B]/50 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-[#94A3B8] group-hover:text-white" />
                <div>
                  <div className="text-[#64748B] text-[10px]">LINKEDIN</div>
                  <div className="text-white font-medium">pranay-gujar</div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#C5F36B]" />
            </a>

            {/* Location & Phone */}
            <div className="p-3.5 rounded-lg bg-[#090B10] border border-[#1E2633] flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#C5F36B] shrink-0" />
              <div>
                <div className="text-[#64748B] text-[10px]">BASE OF OPERATIONS</div>
                <div className="text-white font-medium">{SITE_CONFIG.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
