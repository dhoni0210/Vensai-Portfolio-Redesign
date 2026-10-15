import React from "react";
import Link from "next/link";
import { solutionsData } from "@/data/solutions";
import { ArrowRight, CheckCircle2, ShoppingBag, Compass, Headphones } from "lucide-react";

export const metadata = {
  title: "Flagship Solutions — Multidisciplinary Delivery Ecosystems | Vensai Labs",
  description:
    "Integrated enterprise solution architectures from Vensai Labs: Commerce Ecosystems Hub, Feasibility & Technical Audits, and Post-Deployment Managed Care.",
};

const iconMap = [ShoppingBag, Compass, Headphones];

export default function SolutionsIndexPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-cyan">
              <span className="w-2 h-2 rounded-full bg-vensai-cyan animate-pulse" />
              <span>COORDINATED DELIVERY · 3 FLAGSHIP SOLUTIONS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-vensai-text tracking-tight leading-tight">
              Flagship Solutions. Built for complex business challenges.
            </h1>
            <p className="text-base sm:text-lg text-vensai-muted leading-relaxed">
              When business objectives span multiple technical disciplines—like unifying e-commerce with warehouse
              integrations and studio photography, or conducting rigorous architecture audits before capital
              commitments—Vensai coordinates the entire initiative under a single accountable delivery framework.
            </p>
          </div>
        </div>
      </section>

      {/* All 3 Flagship Solutions Showcase */}
      <section className="py-16 sm:py-24 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {solutionsData.map((solution, idx) => {
            const Icon = iconMap[idx % iconMap.length];

            return (
              <div
                key={solution.id}
                id={solution.slug}
                className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-cyan/60 transition-all shadow-card-glow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left: Solution Info & Architecture */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-vensai-surface border border-vensai-border text-vensai-cyan flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </span>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-vensai-cyan">
                        {solution.badge}
                      </span>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-vensai-text">
                        {solution.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-medium text-vensai-electric leading-snug">
                    {solution.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-vensai-muted leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Architecture Pillars Grid */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.architectureComponents.map((comp, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3.5 rounded-xl bg-vensai-surface/80 border border-vensai-border/60 space-y-1.5"
                      >
                        <div className="text-xs font-semibold text-vensai-text flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-vensai-cyan shrink-0" />
                          <span>{comp.title}</span>
                        </div>
                        <p className="text-[11px] text-vensai-muted leading-relaxed">
                          {comp.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Key Deliverables Chips */}
                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Key Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {solution.deliverables.map((deliv, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-1 rounded-lg bg-vensai-surface border border-vensai-border text-slate-300 font-mono text-[11px]"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Actions & Routing */}
                <div className="lg:col-span-4 flex flex-col justify-center space-y-3 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-vensai-border/60 lg:pl-8 w-full">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-vensai-muted font-bold">
                    Engagement Options
                  </span>

                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-vensai-electric hover:from-blue-500 hover:to-vensai-cyan shadow-blue-glow transition-all"
                  >
                    <span>Inspect Full Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/contact?service=${encodeURIComponent(solution.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-text bg-vensai-surface hover:bg-vensai-elevated border border-vensai-border transition-colors"
                  >
                    <span>Discuss Solution Scope</span>
                  </Link>

                  <div className="pt-4 border-t border-vensai-border/40 text-[11px] font-mono text-vensai-muted space-y-1">
                    <div>• Single Accountable Partner</div>
                    <div>• Defined Milestone Governance</div>
                    <div>• SLA & Post-Launch Support</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
