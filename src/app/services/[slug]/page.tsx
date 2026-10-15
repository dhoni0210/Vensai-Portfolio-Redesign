import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData, ServiceItem } from "@/data/services";
import { industriesData } from "@/data/industries";
import { companyConfig } from "@/data/company";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CodeXml,
  Sparkles,
  Cloud,
  Shield,
  Building2,
  ShoppingBag,
  Network,
  Compass,
  Headphones,
  Palette,
  TrendingUp,
  Camera,
  Server,
  FileSpreadsheet,
  GraduationCap,
  HelpCircle,
} from "lucide-react";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} — Practice Discipline ${service.order}`,
    description: service.shortDescription,
    alternates: {
      canonical: `${companyConfig.productionCanonical}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${companyConfig.name}`,
      description: service.shortDescription,
      url: `${companyConfig.productionCanonical}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related industries data
  const relatedInds = industriesData.filter((ind) =>
    service.relatedIndustries.includes(ind.id) || service.relatedIndustries.includes(ind.slug)
  );

  return (
    <div className="w-full">
      {/* Breadcrumb Header */}
      <div className="border-b border-vensai-border/60 bg-vensai-surface/60 py-3 px-4 sm:px-6 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-vensai-muted">
          <Link href="/" className="hover:text-vensai-text transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-vensai-border" />
          <Link href="/services" className="hover:text-vensai-text transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-vensai-border" />
          <span className="text-vensai-cyan truncate">{service.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-grid-pattern border-b border-vensai-border/80 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-10 w-[500px] h-[500px] rounded-full bg-vensai-violet/15 blur-[140px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono font-bold text-vensai-violet">
                DISCIPLINE {service.order}
              </span>
              <span className="px-3 py-1 rounded-full bg-vensai-surface border border-vensai-border text-xs font-mono text-vensai-cyan">
                {service.category} PILLAR
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-vensai-text tracking-tight leading-tight">
              {service.headline}
            </h1>

            <p className="text-base sm:text-lg text-vensai-muted leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 shadow-violet-glow transition-all"
              >
                <span>Brief This Practice</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/services"
                className="px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-text bg-vensai-card hover:bg-vensai-elevated border border-vensai-border transition-colors"
              >
                Explore Other 15 Practices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Deliverables Grid */}
      <section className="py-24 bg-vensai-surface/40 border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Detailed Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
                  TECHNICAL SCOPE
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
                  Core Practice Capabilities
                </h2>
                <p className="mt-2 text-sm text-vensai-muted">
                  Engineered and staffed by full-time specialist teams according to required project deliverables.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2">
                {service.capabilities.map((cap, idx) => (
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

            {/* Right: Concrete Deliverables */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-violet">
                  VERIFIED OUTCOMES
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
                  Standard Engagement Deliverables
                </h2>
                <p className="mt-2 text-sm text-vensai-muted">
                  Every engagement produces tangible assets, version-controlled repositories, and verified runbooks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border space-y-4">
                <ul className="space-y-3 text-xs sm:text-sm">
                  {service.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-vensai-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-vensai-cyan shrink-0 mt-2" />
                      <span className="leading-relaxed">{del}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-vensai-border/60">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-vensai-cyan font-bold block mb-2">
                    Technologies Applied
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-vensai-surface border border-vensai-border text-xs font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      {relatedInds.length > 0 && (
        <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
                DOMAIN RELEVANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
                Frequently Applied Sectors
              </h2>
              <p className="mt-2 text-sm text-vensai-muted">
                How this practice adapts to distinct operational and regulatory environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedInds.slice(0, 3).map((ind) => (
                <Link
                  key={ind.id}
                  href={`/industries/${ind.slug}`}
                  className="p-6 rounded-2xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-violet transition-all group hover:-translate-y-1"
                >
                  <span className="text-xs font-mono text-vensai-cyan">{ind.order}</span>
                  <h3 className="mt-2 text-base font-semibold text-vensai-text group-hover:text-vensai-violet transition-colors">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-xs text-vensai-muted line-clamp-2 leading-relaxed">{ind.description}</p>
                  <div className="mt-4 pt-3 border-t border-vensai-border/40 text-xs font-mono text-vensai-violet flex items-center gap-1">
                    <span>Inspect Sector</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Practice FAQs */}
      {service.faqs.length > 0 && (
        <section className="py-20 bg-vensai-surface/40 border-b border-vensai-border/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-violet">
                QUESTIONS & ANSWERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
                Frequently Asked About {service.title}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
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

      {/* Action CTA */}
      <section className="py-20 bg-vensai-bg text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-3xl font-semibold text-vensai-text">
            Ready to deploy {service.title}?
          </h2>
          <p className="text-sm text-vensai-muted leading-relaxed">
            Reach out with your goals, architectural requirements, or existing pain points. Our team will help scope the
            engagement and present a clear delivery roadmap.
          </p>
          <div className="pt-2">
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 shadow-violet-glow transition-all"
            >
              <span>Talk to Vensai About {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
