import Link from "next/link";
import { ArrowDown, ArrowUpRight, ShieldCheck, Cpu, Code2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { SystemCanvas } from "@/components/system-canvas";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden border-b border-[#1E2633]/60 bg-grid-subtle"
    >
      {/* Background canvas element */}
      <SystemCanvas />

      {/* Subtle radial ambient vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(197,243,107,0.06),rgba(9,11,16,0.95))]"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-start">
        {/* Top Eyebrow Metadata Tag */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#11151D] border border-[#1E2633] mb-6 text-xs font-mono text-[#94A3B8] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#C5F36B] animate-pulse" />
          <span className="text-[#C5F36B] font-semibold">{SITE_CONFIG.locationShort}</span>
          <span className="text-[#64748B]">/</span>
          <span>{SITE_CONFIG.specialization}</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl mb-6">
          I build <span className="text-[#C5F36B]">intelligent systems</span> that solve real problems.
        </h1>

        {/* Secondary Headline & Bio */}
        <p className="text-lg sm:text-xl text-[#CBD5E1] font-normal leading-relaxed max-w-2xl mb-4">
          From financial simulation to AI-powered intelligence, I turn ambitious ideas into working software.
        </p>

        <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed mb-8">
          I&apos;m Pranay, an Artificial Intelligence undergraduate at VIT Pune, building full-stack applications, machine-learning systems, and data-driven products.
        </p>

        {/* CTAs and Availability Status */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <Link
            href="#work"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#C5F36B] text-[#090B10] font-mono font-semibold text-sm hover:bg-[#D4F788] transition-all shadow-md shadow-[#C5F36B]/15"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </Link>

          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-md bg-[#11151D] hover:bg-[#161C27] text-white border border-[#1E2633] hover:border-[#C5F36B]/40 font-mono text-sm transition-all"
          >
            <span>View GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-[#94A3B8]" />
          </a>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-[#94A3B8] border border-[#1E2633]/80 rounded-md bg-[#0D1017]/60">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5F36B]" />
            <span>Open for Internships &amp; Research</span>
          </div>
        </div>

        {/* Key Signals / Proof Points strip */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#1E2633]/80">
          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#11151D]/60 border border-[#1E2633]/60">
            <div className="p-2 rounded bg-[#090B10] border border-[#1E2633] text-[#C5F36B]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                Hackathon Recognition
              </div>
              <div className="text-sm font-semibold text-white mt-0.5">
                1st Place · Calculo Innovation
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#11151D]/60 border border-[#1E2633]/60">
            <div className="p-2 rounded bg-[#090B10] border border-[#1E2633] text-[#C5F36B]">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                Core Focus
              </div>
              <div className="text-sm font-semibold text-white mt-0.5">
                Full-Stack &amp; Applied AI Systems
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#11151D]/60 border border-[#1E2633]/60">
            <div className="p-2 rounded bg-[#090B10] border border-[#1E2633] text-[#C5F36B]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                Academic Background
              </div>
              <div className="text-sm font-semibold text-white mt-0.5">
                B.Tech in AI · VIT Pune &apos;28
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
