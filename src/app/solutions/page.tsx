import React from "react";
import Link from "next/link";
import { solutionsData } from "@/data/solutions";
import { ArrowRight, CheckCircle2, ShoppingBag, Compass, Headphones } from "lucide-react";

export const metadata = {
  title: "Flagship Solutions — Multidisciplinary Delivery Ecosystems",
  description:
    "Integrated enterprise solution architectures from Vensai Labs: Commerce Ecosystems Hub, Feasibility & Technical Audits, and Post-Deployment Managed Care.",
};

const iconMap = [ShoppingBag, Compass, Headphones];

export default function SolutionsIndexPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-violet">
              <span>COORDINATED DELIVERY · 3 FLAGSHIP SOLUTIONS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-vensai-text tracking-tight leading-tight">
              Flagship Solutions. Designed for complex business challenges.
            </h1>
            <p className="text-base sm:text-lg text-vensai-muted leading-relaxed">
              When business objectives span multiple technical disciplines—like unifying e-commerce with warehouse
              integrations and studio photography, or conducting rigorous architecture audits before capital
              commitments—Vensai coordinates the entire initiative under a single accountable delivery framework.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="py-24 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          {solutionsData.map((solution, idx) => {
            const Icon = iconMap[idx % iconMap.length];

            return (
              <div
                key={solution.id}
                className="p-8 sm:p-10 rounded-2xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-violet/80 transition-all shadow-card-glow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-vensai-surface border border-vensai-border text-vensai-cyan flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-vensai-cyan">
                      {solution.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text">{solution.title}</h2>
                  <p className="text-sm font-medium text-vensai-violet">{solution.tagline}</p>
                  <p className="text-xs sm:text-sm text-vensai-muted leading-relaxed">{solution.description}</p>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs">
                    {solution.architectureComponents.map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 rounded-lg bg-vensai-surface border border-vensai-border text-slate-300 font-mono text-[11px]"
                      >
                        {comp.title}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center space-y-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-vensai-border/60 lg:pl-8">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-vensai-muted font-bold">
                    Engagement Options
                  </span>
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 shadow-violet-glow transition-all"
                  >
                    <span>View Solution Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent(solution.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-text bg-vensai-surface hover:bg-vensai-elevated border border-vensai-border transition-colors"
                  >
                    Discuss Solution Scope
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
