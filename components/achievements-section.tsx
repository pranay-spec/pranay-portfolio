import { Trophy, Award, Target, Landmark } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/achievements";

export function AchievementsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "calculo-1st":
        return <Trophy className="w-5 h-5 text-[#C5F36B]" />;
      case "frostbyte-top3":
        return <Award className="w-5 h-5 text-[#C5F36B]" />;
      case "missing-amps-top5":
        return <Target className="w-5 h-5 text-[#C5F36B]" />;
      case "arbitrage-arena-finalist":
        return <Landmark className="w-5 h-5 text-[#C5F36B]" />;
      default:
        return <Award className="w-5 h-5 text-[#C5F36B]" />;
    }
  };

  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full border-t border-[#1E2633]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1E2633] pb-6 gap-4">
        <div>
          <div className="text-xs font-mono text-[#C5F36B] uppercase tracking-widest mb-2">
            02 / COMPETITIVE RECORD
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Verified Achievements
          </h2>
        </div>
        <p className="text-sm text-[#94A3B8] max-w-md">
          Recognition earned in competitive hackathons and engineering arenas for technical innovation and system execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((item, idx) => (
          <div
            key={item.id}
            className="rounded-xl border border-[#1E2633] bg-[#11151D] p-6 flex flex-col justify-between card-hover relative overflow-hidden"
          >
            {/* Top row */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-md bg-[#090B10] border border-[#1E2633]">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#C5F36B] tracking-wide uppercase bg-[#C5F36B]/10 px-2.5 py-1 rounded border border-[#C5F36B]/20">
                    {item.rank}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#64748B]">
                  0{idx + 1}
                </span>
              </div>

              {/* Event title & Project context */}
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                {item.event}
              </h3>

              <div className="text-xs font-mono text-[#94A3B8] mb-3 flex items-center gap-2">
                <span>Associated System:</span>
                <span className="text-white font-medium">{item.project}</span>
              </div>

              {item.organization && (
                <div className="text-xs font-mono text-[#64748B] mb-3">
                  Organizer: {item.organization}
                </div>
              )}

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {item.summary}
              </p>
            </div>

            {/* Bottom track label */}
            <div className="pt-4 mt-6 border-t border-[#1E2633] flex items-center justify-between text-xs font-mono">
              <span className="text-[#64748B]">Specialization Track</span>
              <span className="text-[#CBD5E1]">{item.focus}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
