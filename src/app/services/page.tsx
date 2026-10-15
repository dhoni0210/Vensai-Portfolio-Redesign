import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import PracticeFloor from "@/components/PracticeFloor";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2 } from "lucide-react";

export const metadata = {
  title: "16 Practice Disciplines — Technology, Enterprise, Creative & Support Floor",
  description:
    "Explore Vensai Labs' complete 16 practice disciplines across custom software, mobile apps, applied AI, cybersecurity, SAP/ERP systems, e-commerce, and operations.",
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Services Hero */}
      <section className="py-20 bg-grid-pattern border-b border-vensai-border/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-cyan mb-4">
              <span>THE PRACTICE FLOOR · 16 DISCIPLINES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-vensai-text tracking-tight leading-tight">
              One studio. Every kind of capability a serious business demands.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-vensai-muted leading-relaxed">
              Vensai combines the breadth of 16 in-house practices under central project coordination. From core software
              engineering and cloud topology to applied AI, commercial product shoots, and ongoing operational support,
              we eliminate the friction of managing fragmented vendors.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Practice Directory */}
      <PracticeFloor />

      {/* Grid of All 16 Disciplines with Direct Detail Links */}
      <section className="py-24 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-violet">
              DETAILED SPECIFICATIONS
            </span>
            <h2 className="text-3xl font-semibold text-vensai-text mt-1">
              Browse Detailed Practice Capabilities
            </h2>
            <p className="mt-2 text-sm text-vensai-muted">
              Select any discipline to inspect architecture deliverables, applied technologies, and typical use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="p-6 rounded-2xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-violet/80 transition-all hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-vensai-border/50 text-[10px] font-mono text-vensai-muted">
                    <span className="text-vensai-cyan font-bold">{service.order}</span>
                    <span>{service.category}</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-vensai-text group-hover:text-vensai-violet transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-vensai-muted leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-vensai-border/40 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">{service.capabilities.length} Capabilities</span>
                  <span className="text-vensai-cyan group-hover:underline flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
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
          <h2 className="text-3xl font-semibold text-vensai-text">Need multiple practices working together?</h2>
          <p className="text-sm text-vensai-muted leading-relaxed">
            Most client engagements combine two or more disciplines—such as software engineering with commercial studio
            photography and managed IT. Tell us your goals and we'll assemble the right pod.
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
