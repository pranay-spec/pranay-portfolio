import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1E2633] pb-6 gap-4">
        <div>
          <div className="text-xs font-mono text-[#C5F36B] uppercase tracking-widest mb-2">
            01 / SELECTED WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineered Systems &amp; Products
          </h2>
        </div>
        <p className="text-sm text-[#94A3B8] max-w-md">
          Real software applications, probabilistic simulations, and ML pipelines verified through hackathons and open-source repositories.
        </p>
      </div>

      {/* Primary Featured Project Card */}
      <div className="mb-8">
        <ProjectCard project={featuredProject} />
      </div>

      {/* Grid of Other Real Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {secondaryProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
