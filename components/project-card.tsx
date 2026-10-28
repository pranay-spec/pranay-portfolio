import React from "react";
import { ArrowUpRight, Award, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isPrimary = project.featured;

  if (isPrimary) {
    // Equinox Flow: Featured Primary Layout
    return (
      <article className="relative rounded-xl border border-[#1E2633] bg-[#11151D] p-6 sm:p-8 card-hover overflow-hidden">
        {/* Subtle accent border highlight on top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5F36B] via-[#C5F36B]/60 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Context, Problem, Achievements & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
            <div>
              {/* Category & Verified Achievement Header */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="text-xs font-mono font-medium text-[#C5F36B] uppercase tracking-wider bg-[#C5F36B]/10 px-2.5 py-1 rounded border border-[#C5F36B]/20">
                  {project.category}
                </span>

                {project.achievement && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white bg-[#161C27] px-2.5 py-1 rounded border border-[#1E2633]">
                    <Award className="w-3.5 h-3.5 text-[#C5F36B]" />
                    <span>{project.achievement}</span>
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                {project.title}
                <span className="text-base sm:text-lg font-normal text-[#94A3B8] block sm:inline sm:ml-2">
                  — {project.subtitle}
                </span>
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Architectural Breakdown */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                  Technical Architecture &amp; Implementation
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1]">
                  {project.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5F36B] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-[#CBD5E1] bg-[#090B10] px-2.5 py-1 rounded border border-[#1E2633]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links and Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#1E2633]/80">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#C5F36B] text-[#090B10] font-mono font-semibold text-xs sm:text-sm hover:bg-[#D4F788] transition-all shadow-sm"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#161C27] hover:bg-[#1E2633] text-white border border-[#1E2633] font-mono text-xs sm:text-sm transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#94A3B8]" />
                <span>Source Code</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Visual Representation */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ProjectVisual theme={project.visualTheme} />
          </div>
        </div>
      </article>
    );
  }

  // Standard Secondary Project Card Layout
  return (
    <article className="rounded-xl border border-[#1E2633] bg-[#11151D] p-6 flex flex-col justify-between card-hover">
      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono text-[#C5F36B] uppercase tracking-wider bg-[#C5F36B]/10 px-2 py-0.5 rounded border border-[#C5F36B]/20">
            {project.category}
          </span>

          {project.achievement && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-white bg-[#161C27] px-2 py-0.5 rounded border border-[#1E2633]">
              <Award className="w-3 h-3 text-[#C5F36B]" />
              <span>{project.achievement}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white tracking-tight mb-1">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-[#94A3B8] mb-3">{project.subtitle}</p>

        {/* Visual representation */}
        <div className="my-4">
          <ProjectVisual theme={project.visualTheme} />
        </div>

        {/* Description */}
        <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Architecture bullets */}
        <ul className="space-y-1.5 text-xs text-[#CBD5E1] mb-5">
          {project.architectureDetails.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#C5F36B] font-mono">›</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-[#CBD5E1] bg-[#090B10] px-2 py-0.5 rounded border border-[#1E2633]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action links */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#1E2633] text-xs font-mono">
        <div className="flex items-center gap-2.5">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#C5F36B] text-[#090B10] font-mono font-semibold text-xs hover:bg-[#D4F788] transition-all shadow-sm hover:shadow-md hover:shadow-[#C5F36B]/20"
            >
              <span>Launch Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0D1017] border border-[#1E2633] text-[#64748B] text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#64748B]" />
              <span>Benchmark &amp; Research</span>
            </span>
          )}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#161C27] hover:bg-[#1E2633] text-white border border-[#1E2633] hover:border-[#C5F36B]/40 font-mono text-xs transition-all"
        >
          <GithubIcon className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span>Source Code</span>
          <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
        </a>
      </div>
    </article>
  );
}
