import React from "react";
import Link from "next/link";
import { CaseStudyItem } from "@/data/caseStudies";
import { Check, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudyItem }) {
  const getBadgeStyle = (status: string) => {
    switch (status) {
      case "Published Client Project":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "Internal Demonstration":
        return "bg-vensai-cyan/10 text-vensai-cyan border-vensai-cyan/30";
      case "Concept Example":
      default:
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-border transition-all shadow-card-glow flex flex-col justify-between">
      <div>
        {/* Status Badge & Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-vensai-border/60">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-vensai-muted uppercase">{caseStudy.order}</span>
            <span className="text-vensai-border">•</span>
            <span className="text-xs text-vensai-muted">{caseStudy.industry}</span>
          </div>
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${getBadgeStyle(
              caseStudy.status
            )}`}
          >
            {caseStudy.status}
          </span>
        </div>

        {/* Title & Summary */}
        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-vensai-text leading-snug">
          {caseStudy.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-vensai-muted leading-relaxed">{caseStudy.summary}</p>

        {/* Challenge, Approach & Solution Blocks */}
        <div className="mt-6 space-y-4 text-xs">
          <div className="p-3.5 rounded-xl bg-vensai-surface border border-vensai-border/60">
            <span className="font-mono uppercase text-vensai-cyan font-bold tracking-wider block mb-1">
              Operational Challenge
            </span>
            <p className="text-vensai-muted leading-relaxed">{caseStudy.challenge}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-vensai-surface border border-vensai-border/60">
            <span className="font-mono uppercase text-vensai-violet font-bold tracking-wider block mb-1">
              Delivered Architecture
            </span>
            <p className="text-vensai-muted leading-relaxed">{caseStudy.solution}</p>
          </div>
        </div>

        {/* Metrics / Verified Outcome Note */}
        <div className="mt-6 pt-4 border-t border-vensai-border/60">
          <span className="text-[10px] font-mono uppercase tracking-widest text-vensai-cyan font-bold block mb-2">
            Verifiable Benchmark Outcomes
          </span>
          <div className="grid grid-cols-3 gap-2">
            {caseStudy.metricsPlaceholder.map((m, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-vensai-surface border border-vensai-border/70 text-center">
                <div className="text-sm sm:text-base font-bold text-vensai-text font-mono">{m.value}</div>
                <div className="text-[10px] text-vensai-muted mt-0.5 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Applied */}
        <div className="mt-5 pt-3">
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.technologies.map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-vensai-bg border border-vensai-border text-[10px] font-mono text-slate-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 pt-4 border-t border-vensai-border/60 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500">Framework Template</span>
        <Link
          href={`/contact?service=${encodeURIComponent(caseStudy.title)}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-vensai-cyan hover:underline"
        >
          <span>Discuss Similar Architecture</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
