import React from "react";
import Link from "next/link";
import { engagementModelsData } from "@/data/engagementModels";
import { Check, ArrowRight } from "lucide-react";

export default function EngagementModelsSection() {
  return (
    <section id="engagement-models" className="py-24 bg-vensai-surface/40 border-b border-vensai-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-vensai-violet mb-3">
            <span className="w-2 h-2 rounded-full bg-vensai-cyan inline-block animate-pulse" />
            <span>ENGAGEMENT MODELS · COMMERCIAL FLEXIBILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-vensai-text tracking-tight">
            Structured to match how your business operates.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-vensai-muted leading-relaxed">
            Engage Vensai for a defined project, dedicated professionals, a complete delivery team, ongoing managed
            services or focused consulting. The right arrangement depends on your goals, scope and operating model.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagementModelsData.map((model) => (
            <div
              key={model.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-violet/80 transition-all duration-300 shadow-card-glow hover:-translate-y-1"
            >
              <div>
                {/* Badge & Order */}
                <div className="flex items-center justify-between pb-3 border-b border-vensai-border/60">
                  <span className="font-mono text-xs font-bold text-vensai-cyan uppercase tracking-wider">
                    {model.order}
                  </span>
                  <span className="text-[11px] font-mono text-vensai-muted px-2 py-0.5 rounded bg-vensai-surface border border-vensai-border">
                    {model.shortTitle}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-4 text-lg font-semibold text-vensai-text leading-snug group-hover:text-vensai-violet transition-colors">
                  {model.title}
                </h3>
                <p className="mt-2 text-xs text-vensai-muted leading-relaxed">{model.description}</p>

                {/* Deliverables / Scope Included */}
                <div className="mt-5 pt-4 border-t border-vensai-border/50 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-vensai-muted font-bold block mb-1">
                    What This Includes
                  </span>
                  <ul className="space-y-1.5 text-xs">
                    {model.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-vensai-muted">
                        <Check className="w-3.5 h-3.5 text-vensai-cyan shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="mt-6 pt-4 border-t border-vensai-border/60">
                <Link
                  href={`/contact?model=${encodeURIComponent(model.shortTitle)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-text group-hover:text-white bg-vensai-surface group-hover:bg-vensai-violet border border-vensai-border group-hover:border-vensai-violet transition-all"
                >
                  <span>Select {model.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
