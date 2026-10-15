import React from "react";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Industries Served — Domain Adaptability Across 15 Sectors",
  description:
    "Tailored enterprise technology, e-commerce, cloud, and operational solutions adapted to the regulatory and workflow realities of 15 commercial and industrial sectors.",
};

export default function IndustriesIndexPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-cyan">
              <span>DOMAIN ADAPTABILITY · 15 SECTORS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-vensai-text tracking-tight leading-tight">
              Tailored solutions across commercial and industrial sectors.
            </h1>
            <p className="text-base sm:text-lg text-vensai-muted leading-relaxed">
              Every industry operates under distinct operational constraints, data compliance mandates, and customer
              expectations. Vensai aligns engineering, enterprise systems, commerce, creative and support capabilities to
              the realities of each sector.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-24 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((ind) => (
              <Link
                key={ind.id}
                href={`/industries/${ind.slug}`}
                className="p-7 rounded-2xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-violet/80 transition-all hover:-translate-y-1 group flex flex-col justify-between shadow-card-glow"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-vensai-border/50 text-[10px] font-mono text-vensai-muted">
                    <span className="text-vensai-cyan font-bold">SECTOR {ind.order}</span>
                    <span>ENTERPRISE DOMAIN</span>
                  </div>

                  <h2 className="mt-4 text-xl font-semibold text-vensai-text group-hover:text-vensai-violet transition-colors">
                    {ind.name}
                  </h2>
                  <p className="mt-2 text-xs text-vensai-muted leading-relaxed line-clamp-3">{ind.description}</p>

                  <div className="mt-4 pt-3 border-t border-vensai-border/40 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-vensai-cyan font-bold block mb-1">
                      Collaborating Practices
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.relevantPractices.map((p, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-vensai-surface border border-vensai-border text-[10px] font-mono text-slate-300"
                        >
                          {p.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-vensai-border/50 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">{ind.useCases.length} Core Scenarios</span>
                  <span className="text-vensai-violet group-hover:underline flex items-center gap-1 font-bold">
                    <span>Inspect Sector</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-vensai-surface/60 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-3xl font-semibold text-vensai-text">Operating in a specialized domain?</h2>
          <p className="text-sm text-vensai-muted leading-relaxed">
            Our teams adapt to specialized data requirements, offline environments, and compliance standards. Reach out
            to discuss your specific industry requirements.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 shadow-violet-glow transition-all"
            >
              <span>Talk to Vensai</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
