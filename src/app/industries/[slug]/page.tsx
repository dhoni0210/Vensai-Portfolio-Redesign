import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industriesData, IndustryItem } from "@/data/industries";
import { companyConfig } from "@/data/company";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Workflow, ShieldCheck } from "lucide-react";

export function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);
  if (!industry) return {};

  return {
    title: `${industry.name} — Industry Practice & Solutions`,
    description: industry.headline,
    alternates: {
      canonical: `${companyConfig.productionCanonical}/industries/${industry.slug}`,
    },
    openGraph: {
      title: `${industry.name} | ${companyConfig.name}`,
      description: industry.headline,
      url: `${companyConfig.productionCanonical}/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="border-b border-vensai-border/60 bg-vensai-surface/60 py-3 px-4 sm:px-6 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-vensai-muted">
          <Link href="/" className="hover:text-vensai-text transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-vensai-border" />
          <Link href="/industries" className="hover:text-vensai-text transition-colors">
            Industries
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-vensai-border" />
          <span className="text-vensai-cyan truncate">{industry.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-grid-pattern border-b border-vensai-border/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-5">
            <span className="px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono font-bold text-vensai-violet">
              INDUSTRY SECTOR {industry.order}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-vensai-text tracking-tight leading-tight">
              {industry.name}
            </h1>
            <p className="text-base sm:text-lg text-vensai-cyan font-medium">{industry.headline}</p>
            <p className="text-sm sm:text-base text-vensai-muted leading-relaxed">{industry.description}</p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?industry=${encodeURIComponent(industry.name)}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 shadow-violet-glow transition-all"
              >
                <span>Consult Our Sector Lead</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/industries"
                className="px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-text bg-vensai-card hover:bg-vensai-elevated border border-vensai-border transition-colors"
              >
                View Other 14 Sectors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Scenarios */}
      <section className="py-24 bg-vensai-surface/40 border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Domain Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
                  SECTOR CAPABILITIES
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
                  How Vensai Supports {industry.name}
                </h2>
                <p className="mt-2 text-sm text-vensai-muted">
                  Capabilities specifically configured for compliance, data handling, and operational workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2">
                {industry.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-vensai-card border border-vensai-border/70 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-vensai-violet shrink-0 mt-0.5" />
                    <span className="text-sm text-vensai-text leading-relaxed">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Operational Scenarios & Relevant Practices */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-violet">
                  REAL-WORLD WORKFLOWS
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
                  Typical Use Cases
                </h2>
                <p className="mt-2 text-sm text-vensai-muted">
                  Common technical scenarios solved by our multidisciplinary delivery pods.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border space-y-4">
                <ul className="space-y-3 text-xs sm:text-sm">
                  {industry.useCases.map((uc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-vensai-text">
                      <span className="w-1.5 h-1.5 rounded-full bg-vensai-cyan shrink-0 mt-2" />
                      <span className="leading-relaxed">{uc}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-vensai-border/60">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-vensai-cyan font-bold block mb-2">
                    Primary Collaborating Practices
                  </span>
                  <div className="space-y-2">
                    {industry.relevantPractices.map((p, idx) => (
                      <Link
                        key={idx}
                        href={`/services/${p.slug}`}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-vensai-surface hover:bg-vensai-elevated border border-vensai-border text-xs transition-colors group"
                      >
                        <span className="text-vensai-text group-hover:text-vensai-violet font-medium">{p.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-vensai-cyan" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
              CONCRETE OUTPUTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
              Sector Deliverable Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.deliverables.map((del, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-vensai-card border border-vensai-border flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-vensai-cyan shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-vensai-text leading-relaxed">{del}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-vensai-surface/60 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-3xl font-semibold text-vensai-text">
            Discuss {industry.name} Requirements
          </h2>
          <p className="text-sm text-vensai-muted leading-relaxed">
            Connect with our solutions architects to review your industry workflows, data privacy boundaries, and
            timeline.
          </p>
          <div className="pt-2">
            <Link
              href={`/contact?industry=${encodeURIComponent(industry.name)}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 shadow-violet-glow transition-all"
            >
              <span>Brief Our {industry.name} Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
