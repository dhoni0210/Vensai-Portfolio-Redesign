import React from "react";
import TechEcosystem from "@/components/TechEcosystem";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Technology Capabilities & Ecosystem — 12 Stacks & Frameworks",
  description:
    "Explore Vensai Labs' comprehensive technical ecosystem across frontend, backend, mobile, cloud, DevOps, AI/ML, enterprise systems, data pipelines, and cybersecurity.",
};

export default function TechnologiesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-cyan">
              <span>TECHNICAL DIRECTORY · 12 CATEGORIES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-vensai-text tracking-tight leading-tight">
              Engineered across modern and enterprise stacks.
            </h1>
            <p className="text-base sm:text-lg text-vensai-muted leading-relaxed">
              We select tools based on system architecture, data sovereignty, integration requirements, and long-term
              maintainability rather than transient trends. Filter and search our complete capability directory below.
            </p>
          </div>
        </div>
      </section>

      {/* Full Interactive Tech Directory */}
      <TechEcosystem isCompact={false} />

      {/* Technical Consulting CTA */}
      <section className="py-20 bg-vensai-surface/60 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-3xl font-semibold text-vensai-text">Uncertain which stack fits your architecture?</h2>
          <p className="text-sm text-vensai-muted leading-relaxed">
            Our Technical Consulting & R&D practice conducts objective trade-off analyses comparing language runtimes,
            database engines, and cloud providers before you write a single line of code.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/solutions/feasibility-technical-audits"
              className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-text bg-vensai-card hover:bg-vensai-elevated border border-vensai-border transition-colors"
            >
              Explore Feasibility Audits
            </Link>
            <Link
              href="/contact?service=Consulting%20%26%20R%26D"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 shadow-violet-glow transition-all"
            >
              <span>Request Stack Advisory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
