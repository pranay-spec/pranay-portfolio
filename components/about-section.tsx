import { GraduationCap, Users, BookOpen, Compass, Code, Terminal } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full border-t border-[#1E2633]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1E2633] pb-6 gap-4">
        <div>
          <div className="text-xs font-mono text-[#C5F36B] uppercase tracking-widest mb-2">
            04 / BACKGROUND &amp; LEADERSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Identity
          </h2>
        </div>
        <p className="text-sm text-[#94A3B8] max-w-md">
          Academic foundation in Artificial Intelligence, hands-on software development, and student community mentorship.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column: Academic Background & Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-xl border border-[#1E2633] bg-[#11151D] p-6 sm:p-8 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-[#090B10] border border-[#1E2633] text-[#C5F36B]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {SITE_CONFIG.education.institution}
                </h3>
                <div className="text-xs font-mono text-[#C5F36B]">
                  {SITE_CONFIG.education.degree} · Expected {SITE_CONFIG.education.expectedGraduation}
                </div>
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              I am an Artificial Intelligence undergraduate at Vishwakarma Institute of Technology (VIT), Pune. My technical focus centers on bridging machine-learning models with reliable full-stack applications—translating algorithmic solutions into high-performance, verifiable software products.
            </p>

            <div className="pt-4 border-t border-[#1E2633]">
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Relevant Rigorous Coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SITE_CONFIG.education.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs font-mono text-[#CBD5E1] bg-[#090B10] px-3 py-1 rounded border border-[#1E2633]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Leadership & Mentorship */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl border border-[#1E2633] bg-[#11151D] p-6 sm:p-8 card-hover h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#090B10] border border-[#1E2633] text-[#C5F36B]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {SITE_CONFIG.leadership.role}
                  </h3>
                  <div className="text-xs font-mono text-[#94A3B8]">
                    {SITE_CONFIG.leadership.organization}
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                Active student leader driving hands-on technical community initiatives within the Computer Student Association at VIT Pune.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#090B10] border border-[#1E2633]">
                  <Code className="w-4 h-4 text-[#C5F36B] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#CBD5E1]">
                    Supporting practical technical workshops in Flutter, Dart, and AI application development.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#090B10] border border-[#1E2633]">
                  <Compass className="w-4 h-4 text-[#C5F36B] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#CBD5E1]">
                    Mentoring junior students on software engineering workflows, clean code, and project architecture.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#090B10] border border-[#1E2633]">
                  <Terminal className="w-4 h-4 text-[#C5F36B] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#CBD5E1]">
                    Assisting in organizing departmental coding contests, hackathons, and development sprints.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1E2633] text-xs font-mono text-[#64748B]">
              Pune, Maharashtra · On-site &amp; Remote Collaboration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
