import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#090B10] text-[#F3F4F6] flex flex-col items-center justify-center p-6 text-center">
      <div className="p-3 rounded-lg bg-[#11151D] border border-[#1E2633] text-[#C5F36B] mb-6">
        <Terminal className="w-8 h-8" />
      </div>
      <div className="text-xs font-mono text-[#64748B] uppercase tracking-widest mb-2">
        ERROR_CODE 404
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
        Route Not Found
      </h1>
      <p className="text-sm text-[#94A3B8] max-w-md mb-8">
        The requested resource does not exist or has been relocated within the engineering portfolio.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#C5F36B] text-[#090B10] font-mono font-semibold text-xs hover:bg-[#D4F788] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
