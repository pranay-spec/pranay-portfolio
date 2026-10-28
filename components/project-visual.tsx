import React from "react";

interface ProjectVisualProps {
  theme: "simulation" | "intelligence" | "disinformation" | "volatility" | "rag";
}

export function ProjectVisual({ theme }: ProjectVisualProps) {
  if (theme === "simulation") {
    // Equinox Flow: Monte Carlo & Agentic Flow Visualization
    return (
      <div className="relative w-full h-full min-h-[260px] bg-[#0B0E14] border border-[#1E2633] rounded-lg p-5 flex flex-col justify-between overflow-hidden">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between border-b border-[#1E2633] pb-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#C5F36B] animate-pulse" />
            <span className="text-white font-medium">MONTE_CARLO_ENGINE</span>
          </div>
          <div className="flex items-center gap-3 text-[#64748B]">
            <span>N = 10,000 RUNS</span>
            <span className="text-[#C5F36B] bg-[#C5F36B]/10 px-2 py-0.5 rounded border border-[#C5F36B]/20">
              FASTAPI LIVE
            </span>
          </div>
        </div>

        {/* Central Monte Carlo Fan Chart Illustration */}
        <div className="relative my-4 flex-1 flex items-center justify-center">
          <svg
            viewBox="0 0 500 180"
            className="w-full h-auto max-h-[160px]"
            fill="none"
            stroke="currentColor"
            aria-label="Monte Carlo probabilistic simulation paths diagram"
          >
            {/* Grid lines */}
            <line x1="40" y1="20" x2="480" y2="20" stroke="#161D29" strokeDasharray="3 3" />
            <line x1="40" y1="65" x2="480" y2="65" stroke="#161D29" strokeDasharray="3 3" />
            <line x1="40" y1="110" x2="480" y2="110" stroke="#161D29" strokeDasharray="3 3" />
            <line x1="40" y1="155" x2="480" y2="155" stroke="#161D29" />

            {/* Shaded confidence interval band (P10 - P90) */}
            <path
              d="M 50 140 Q 150 135 240 100 T 470 30 L 470 145 Q 360 150 240 148 T 50 140 Z"
              fill="rgba(197, 243, 107, 0.07)"
            />

            {/* Individual probabilistic trajectory lines */}
            <path
              d="M 50 140 Q 140 138 230 115 T 470 50"
              stroke="rgba(197, 243, 107, 0.3)"
              strokeWidth="1.2"
            />
            <path
              d="M 50 140 Q 160 142 260 125 T 470 90"
              stroke="rgba(148, 163, 184, 0.35)"
              strokeWidth="1"
            />
            <path
              d="M 50 140 Q 120 120 220 85 T 470 35"
              stroke="rgba(197, 243, 107, 0.55)"
              strokeWidth="1.5"
            />
            <path
              d="M 50 140 Q 170 145 280 140 T 470 130"
              stroke="rgba(148, 163, 184, 0.25)"
              strokeWidth="1"
            />

            {/* P50 Median Expected Value Path */}
            <path
              d="M 50 140 Q 150 130 250 105 T 470 70"
              stroke="#C5F36B"
              strokeWidth="2.5"
            />

            {/* Scenario Terminal Points */}
            <circle cx="470" cy="35" r="4" fill="#C5F36B" />
            <circle cx="470" cy="70" r="4.5" fill="#C5F36B" stroke="#090B10" strokeWidth="2" />
            <circle cx="470" cy="130" r="3" fill="#94A3B8" />

            {/* Annotation tags */}
            <text x="390" y="30" fill="#C5F36B" fontSize="10" fontFamily="monospace">
              P90 Optimistic
            </text>
            <text x="395" y="65" fill="#FFFFFF" fontSize="10" fontFamily="monospace">
              P50 Median
            </text>
            <text x="400" y="125" fill="#64748B" fontSize="10" fontFamily="monospace">
              P10 Adverse
            </text>
          </svg>
        </div>

        {/* Bottom Multi-Agent debate indicator */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#1E2633] text-[11px] font-mono">
          <div className="bg-[#11151D] px-2.5 py-1.5 rounded border border-[#1E2633]">
            <div className="text-[#64748B]">LANGGRAPH</div>
            <div className="text-white font-medium">Agent Consensus</div>
          </div>
          <div className="bg-[#11151D] px-2.5 py-1.5 rounded border border-[#1E2633]">
            <div className="text-[#64748B]">LATENCY</div>
            <div className="text-[#C5F36B] font-medium">&lt; 140ms Stream</div>
          </div>
          <div className="bg-[#11151D] px-2.5 py-1.5 rounded border border-[#1E2633]">
            <div className="text-[#64748B]">SCENARIOS</div>
            <div className="text-white font-medium">3-Decade Twin</div>
          </div>
        </div>
      </div>
    );
  }

  if (theme === "intelligence") {
    // Parallax Edge: Hyperlocal Price Aggregator illustration
    return (
      <div className="relative w-full h-full min-h-[240px] bg-[#0B0E14] border border-[#1E2633] rounded-lg p-4 flex flex-col justify-between overflow-hidden shadow-inner">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between text-xs font-mono border-b border-[#1E2633] pb-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#C5F36B] animate-pulse" />
            <span className="text-white font-medium">PRICE_INTELLIGENCE_ENGINE</span>
          </div>
          <span className="text-[#C5F36B] bg-[#C5F36B]/10 px-2 py-0.5 rounded border border-[#C5F36B]/20 text-[10px]">
            ACTIVE AGGREGATOR
          </span>
        </div>

        {/* Aggregated Platform Price Breakdown Rectangles */}
        <div className="space-y-2 py-3 font-mono text-xs">
          <div className="flex items-center justify-between p-2.5 rounded-md bg-[#11151D] border border-[#1E2633] hover:border-[#C5F36B]/40 transition-colors">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5F36B]" />
              <span className="text-white font-medium">Blinkit (Quick-Commerce)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#64748B] text-[10px]">+₹25 surge fee</span>
              <span className="text-[#C5F36B] font-semibold">₹249</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-md bg-[#11151D] border border-[#1E2633] hover:border-[#1E2633]/80 transition-colors">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]" />
              <span className="text-[#CBD5E1]">Zepto (10-Min Delivery)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#64748B] text-[10px]">+₹15 fee</span>
              <span className="text-white font-semibold">₹255</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-md bg-[#11151D] border border-[#1E2633] hover:border-[#1E2633]/80 transition-colors">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#64748B]" />
              <span className="text-[#94A3B8]">Amazon IN (Standard)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#64748B] text-[10px]">Free Delivery</span>
              <span className="text-white font-semibold">₹235</span>
            </div>
          </div>
        </div>

        {/* Anomaly Detection Highlight Banner */}
        <div className="flex items-center justify-between pt-2.5 border-t border-[#1E2633] text-[11px] font-mono">
          <div className="flex items-center gap-1.5 text-[#C5F36B]">
            <span className="font-semibold">ANOMALY DETECTED:</span>
            <span className="text-white">SURGE VARIANCE +11.2%</span>
          </div>
          <span className="text-[#64748B]">LANDED COST ALGO</span>
        </div>
      </div>
    );
  }

  if (theme === "disinformation") {
    // Sentinel-X: Disinformation analysis radar & stream
    return (
      <div className="relative w-full h-full min-h-[240px] bg-[#0B0E14] border border-[#1E2633] rounded-lg p-4 flex flex-col justify-between overflow-hidden shadow-inner">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between text-xs font-mono border-b border-[#1E2633] pb-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#C5F36B] animate-pulse" />
            <span className="text-white font-medium">SENTINEL_X_THREAT_RADAR</span>
          </div>
          <span className="text-[#C5F36B] bg-[#C5F36B]/10 px-2 py-0.5 rounded border border-[#C5F36B]/20 text-[10px]">
            NLP LIVE STREAM
          </span>
        </div>

        {/* Structured Detection Metrics */}
        <div className="py-2.5 space-y-2.5">
          <div className="p-2.5 rounded-md bg-[#11151D] border border-[#1E2633]">
            <div className="flex justify-between items-center text-[11px] font-mono text-[#94A3B8] mb-1.5">
              <span className="text-white font-medium">Narrative Coherence Verification</span>
              <span className="text-[#C5F36B] font-semibold">88.4% Confidence</span>
            </div>
            <div className="w-full bg-[#090B10] h-1.5 rounded-full overflow-hidden border border-[#1E2633]">
              <div className="bg-[#C5F36B] h-full rounded-full" style={{ width: "88.4%" }} />
            </div>
          </div>

          <div className="p-2.5 rounded-md bg-[#11151D] border border-[#1E2633]">
            <div className="flex justify-between items-center text-[11px] font-mono text-[#94A3B8] mb-1.5">
              <span className="text-white font-medium">Cross-Platform Sentiment Discrepancy</span>
              <span className="text-[#94A3B8] font-semibold">0.34 Index</span>
            </div>
            <div className="w-full bg-[#090B10] h-1.5 rounded-full overflow-hidden border border-[#1E2633]">
              <div className="bg-[#94A3B8] h-full rounded-full" style={{ width: "34%" }} />
            </div>
          </div>
        </div>

        {/* Threat Classification Summary Strip */}
        <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-[#1E2633] text-[10px] font-mono">
          <div className="text-[#94A3B8]">
            PIPELINE: <span className="text-white">Structured NLP Stream</span>
          </div>
          <div className="text-right text-[#C5F36B]">
            CORRELATION ENGINE ACTIVE
          </div>
        </div>
      </div>
    );
  }

  if (theme === "volatility") {
    // Flash Crash Sentinel: Financial time-series volatility
    return (
      <div className="relative w-full h-full min-h-[220px] bg-[#0B0E14] border border-[#1E2633] rounded-lg p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs font-mono border-b border-[#1E2633] pb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5F36B]" />
            <span className="text-white">TIME_SERIES_ANOMALY</span>
          </div>
          <span className="text-[#64748B]">IISC BANGALORE</span>
        </div>

        <div className="my-2 flex-1 flex items-center justify-center">
          <svg viewBox="0 0 300 90" className="w-full h-auto max-h-[80px]" fill="none">
            <path
              d="M 10 50 L 50 48 L 90 53 L 130 45 L 160 52 L 180 20 L 200 80 L 220 75 L 260 60 L 290 62"
              stroke="#94A3B8"
              strokeWidth="1.5"
            />
            {/* Anomaly highlight region */}
            <circle cx="200" cy="80" r="5" fill="rgba(197, 243, 107, 0.3)" stroke="#C5F36B" strokeWidth="1.5" />
            <line x1="200" y1="10" x2="200" y2="85" stroke="#C5F36B" strokeWidth="1" strokeDasharray="2 2" />
            <text x="140" y="15" fill="#C5F36B" fontSize="9" fontFamily="monospace">
              LIQUIDITY DRAWDOWN
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1E2633] text-[10px] font-mono">
          <span className="text-[#94A3B8]">MODEL: LSTM + Transformer</span>
          <span className="text-right text-[#C5F36B]">ARBITRAGE ARENA FINALIST</span>
        </div>
      </div>
    );
  }

  // RAG Video Intelligence
  return (
    <div className="relative w-full h-full min-h-[220px] bg-[#0B0E14] border border-[#1E2633] rounded-lg p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between text-xs font-mono border-b border-[#1E2633] pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C5F36B]" />
          <span className="text-white">RAG_RETRIEVAL_CHAIN</span>
        </div>
        <span className="text-[#64748B]">CHROMADB + GEMINI</span>
      </div>

      <div className="space-y-1.5 py-2 font-mono text-[11px]">
        <div className="flex items-center gap-2 text-[#94A3B8]">
          <span className="text-[#C5F36B]">01</span>
          <span>Video Transcription &amp; Timestamp Sync</span>
        </div>
        <div className="flex items-center gap-2 text-[#94A3B8]">
          <span className="text-[#C5F36B]">02</span>
          <span>Dense Semantic Chunking &amp; Embeddings</span>
        </div>
        <div className="flex items-center gap-2 text-[#94A3B8]">
          <span className="text-[#C5F36B]">03</span>
          <span>Vector Similarity Query in ChromaDB</span>
        </div>
        <div className="flex items-center gap-2 text-[#94A3B8]">
          <span className="text-[#C5F36B]">04</span>
          <span>Grounded Answer Synthesis via Gemini API</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#1E2633] text-[10px] font-mono text-[#64748B]">
        <span>FASTAPI BACKEND</span>
        <span className="text-[#C5F36B]">TIMESTAMP RETRIEVAL</span>
      </div>
    </div>
  );
}
