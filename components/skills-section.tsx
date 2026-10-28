"use client";

import { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/skills";
import { Layers, Terminal, Sparkles, Server, Smartphone, Database } from "lucide-react";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<number | "all">("all");

  const getCategoryIcon = (label: string) => {
    switch (label) {
      case "AI / ML":
        return <Sparkles className="w-4 h-4 text-[#C5F36B]" />;
      case "Full-Stack":
        return <Server className="w-4 h-4 text-[#C5F36B]" />;
      case "Languages":
        return <Terminal className="w-4 h-4 text-[#C5F36B]" />;
      case "Mobile":
        return <Smartphone className="w-4 h-4 text-[#C5F36B]" />;
      case "Infrastructure":
        return <Database className="w-4 h-4 text-[#C5F36B]" />;
      default:
        return <Layers className="w-4 h-4 text-[#C5F36B]" />;
    }
  };

  const displayedCategories =
    activeTab === "all"
      ? SKILL_CATEGORIES
      : [SKILL_CATEGORIES[activeTab as number]];

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full border-t border-[#1E2633]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-[#1E2633] pb-6 gap-4">
        <div>
          <div className="text-xs font-mono text-[#C5F36B] uppercase tracking-widest mb-2">
            03 / TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Toolkit
          </h2>
        </div>
        <p className="text-sm text-[#94A3B8] max-w-md">
          Structured by domain. Focused on modern production patterns, applied machine learning, and clean systems engineering.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all ${
            activeTab === "all"
              ? "bg-[#C5F36B] text-[#090B10] font-semibold"
              : "bg-[#11151D] text-[#94A3B8] hover:text-white border border-[#1E2633]"
          }`}
        >
          All Domains ({SKILL_CATEGORIES.length})
        </button>

        {SKILL_CATEGORIES.map((cat, idx) => (
          <button
            key={cat.shortLabel}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeTab === idx
                ? "bg-[#C5F36B] text-[#090B10] font-semibold"
                : "bg-[#11151D] text-[#94A3B8] hover:text-white border border-[#1E2633]"
            }`}
          >
            <span>{cat.shortLabel}</span>
          </button>
        ))}
      </div>

      {/* Grid of categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-xl border border-[#1E2633] bg-[#11151D] p-6 flex flex-col justify-between card-hover"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-md bg-[#090B10] border border-[#1E2633]">
                  {getCategoryIcon(category.shortLabel)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#64748B]">
                    {category.items.length} technologies
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                {category.description}
              </p>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono text-[#CBD5E1] bg-[#090B10] hover:border-[#C5F36B]/40 px-2.5 py-1 rounded border border-[#1E2633] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Architectural focus strengths */}
            {category.keyStrengths && (
              <div className="pt-3 border-t border-[#1E2633]">
                <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-1.5">
                  Applied In
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.keyStrengths.map((str) => (
                    <span
                      key={str}
                      className="text-[11px] font-mono text-[#C5F36B] bg-[#C5F36B]/5 px-2 py-0.5 rounded border border-[#C5F36B]/20"
                    >
                      {str}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
