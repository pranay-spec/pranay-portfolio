export interface Achievement {
  id: string;
  rank: string;
  event: string;
  project: string;
  projectId?: string;
  organization?: string;
  focus: string;
  summary: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "calculo-1st",
    rank: "1st Place",
    event: "Calculo Innovation Hackathon",
    project: "Equinox Flow",
    projectId: "equinox-flow",
    focus: "Financial Digital Twin & Simulation",
    summary:
      "Awarded first place for architecting an agentic financial digital twin that combines Monte Carlo simulation and LangGraph workflows for multi-scenario forecasting.",
  },
  {
    id: "frostbyte-top3",
    rank: "Top 3 Finish",
    event: "Frostbyte Hackathon",
    project: "Parallax Edge",
    projectId: "parallax-edge",
    focus: "Hyperlocal Price Intelligence",
    summary:
      "Recognized in the top 3 teams for developing a multi-platform price aggregator identifying delivery fee anomalies across Indian quick-commerce ecosystems.",
  },
  {
    id: "missing-amps-top5",
    rank: "Top 5 Finalist",
    event: "Missing Amps Winter Classic",
    project: "Sentinel-X",
    projectId: "sentinel-x",
    focus: "Disinformation & Threat Intelligence",
    summary:
      "Selected among the top 5 solutions for an NLP-driven dashboard that analyzes narrative patterns and high-risk social media misinformation.",
  },
  {
    id: "arbitrage-arena-finalist",
    rank: "National Finalist",
    event: "Arbitrage Arena · IISc Bangalore",
    project: "Flash Crash Sentinel",
    projectId: "flash-crash-sentinel",
    organization: "Indian Institute of Science (IISc), Bangalore",
    focus: "Market Volatility & Anomaly Modeling",
    summary:
      "Qualified as a national finalist in the algorithmic trading and financial risk hackathon, benchmarking LSTM and Transformer architectures on market flash-crash datasets.",
  },
];
