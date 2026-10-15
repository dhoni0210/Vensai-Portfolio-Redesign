import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { solutionsData } from "@/data/solutions";
import { companyConfig } from "@/data/company";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, HelpCircle, Workflow } from "lucide-react";

export function generateStaticParams() {
  return solutionsData.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);
  if (!solution) return {};

  return {
    title: `${solution.title} — Flagship Solution Architecture`,
    description: solution.description,
    alternates: {
      canonical: `${companyConfig.productionCanonical}/solutions/${solution.slug}`,
    },
    openGraph: {
      title: `${solution.title} | ${companyConfig.name}`,
      description: solution.description,
      url: `${companyConfig.productionCanonical}/solutions/${solution.slug}`,
    },
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
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
          <Link href="/solutions" className="hover:text-vensai-text transition-colors">
            Solutions
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-vensai-border" />
          <span className="text-vensai-cyan truncate">{solution.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-grid-pattern border-b border-vensai-border/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-5">
            <span className="px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono font-bold text-vensai-cyan">
              {solution.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-vensai-text tracking-tight leading-tight">
              {solution.title}
            </h1>
            <p className="text-base sm:text-lg text-vensai-violet font-medium">{solution.tagline}</p>
            <p className="text-sm sm:text-base text-vensai-muted leading-relaxed">{solution.overview}</p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?service=${encodeURIComponent(solution.title)}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 shadow-violet-glow transition-all"
              >
                <span>Deploy This Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/solutions"
                className="px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-text bg-vensai-card hover:bg-vensai-elevated border border-vensai-border transition-colors"
              >
                Explore Other Flagships
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Components */}
      <section className="py-24 bg-vensai-surface/40 border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-violet">
              CONNECTED CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
              Integrated Architectural Pillars
            </h2>
            <p className="mt-2 text-sm text-vensai-muted">
              How diverse engineering, creative, and operational disciplines synchronize under this solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.architectureComponents.map((comp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-vensai-card border border-vensai-border space-y-4 hover:border-vensai-border transition-all"
              >
                <div className="flex items-center justify-between pb-3 border-b border-vensai-border/50 text-[10px] font-mono text-vensai-muted">
                  <span className="text-vensai-cyan font-bold">PILLAR 0{idx + 1}</span>
                  <span>ARCHITECTURE</span>
                </div>
                <h3 className="text-lg font-semibold text-vensai-text">{comp.title}</h3>
                <p className="text-xs text-vensai-muted leading-relaxed">{comp.description}</p>
                <ul className="space-y-2 text-xs pt-2">
                  {comp.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-vensai-text">
                      <CheckCircle2 className="w-3.5 h-3.5 text-vensai-violet shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Stages */}
      <section className="py-24 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
              EXECUTION PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
              Solution Delivery Workflow
            </h2>
            <p className="mt-2 text-sm text-vensai-muted">
              A structured step-by-step roadmap from requirements discovery through live cutover and operational handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {solution.workflowStages.map((wf) => (
              <div key={wf.step} className="p-5 rounded-xl bg-vensai-card border border-vensai-border space-y-2">
                <span className="font-mono text-xs font-bold text-vensai-violet">{wf.step}</span>
                <h4 className="text-sm font-semibold text-vensai-text">{wf.title}</h4>
                <p className="text-xs text-vensai-muted leading-relaxed">{wf.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Related Services */}
      <section className="py-20 bg-vensai-surface/40 border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
              ENGAGEMENT ASSETS
            </span>
            <h3 className="text-2xl font-semibold text-vensai-text">Deliverables Included</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm pt-2">
              {solution.deliverables.map((del, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-vensai-card border border-vensai-border/70 text-vensai-text">
                  <CheckCircle2 className="w-4 h-4 text-vensai-cyan shrink-0 mt-0.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-violet">
              COLLABORATING PRACTICES
            </span>
            <h3 className="text-2xl font-semibold text-vensai-text">Coordinated Disciplines</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {solution.relatedServices.map((rel, idx) => (
                <Link
                  key={idx}
                  href={`/services/${rel.slug}`}
                  className="p-4 rounded-xl bg-vensai-card border border-vensai-border hover:border-vensai-violet transition-all group"
                >
                  <span className="text-xs font-semibold text-vensai-text group-hover:text-vensai-violet transition-colors">
                    {rel.title}
                  </span>
                  <div className="mt-2 text-[11px] font-mono text-vensai-cyan flex items-center gap-1">
                    <span>Inspect Practice</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution FAQs */}
      {solution.faqs.length > 0 && (
        <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-violet">
                CLARITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {solution.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-vensai-card border border-vensai-border space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-vensai-text">
                    <HelpCircle className="w-4 h-4 text-vensai-cyan shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-vensai-muted leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-vensai-surface/60 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-3xl font-semibold text-vensai-text">Discuss {solution.title}</h2>
          <p className="text-sm text-vensai-muted leading-relaxed">
            Schedule an initial requirement review with our technical solutions team to evaluate scope, timeline, and
            architecture.
          </p>
          <div className="pt-2">
            <Link
              href={`/contact?service=${encodeURIComponent(solution.title)}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 shadow-violet-glow transition-all"
            >
              <span>Initiate Solution Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
