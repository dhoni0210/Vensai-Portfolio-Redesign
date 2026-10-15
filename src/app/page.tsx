import React from "react";
import Link from "next/link";
import HeroOrbital from "@/components/HeroOrbital";
import { companyConfig } from "@/data/company";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Layers,
  Compass,
  ShieldCheck,
  Cpu,
  Workflow,
  Sparkles,
  ShoppingBag,
  Headphones,
  Building2,
  HelpCircle,
  CodeXml,
  Landmark,
  Truck,
  Anchor,
  HeartPulse,
  Factory,
} from "lucide-react";

export const metadata = {
  title: "Vensai Labs | Freelance Talent. Real Solutions. — Enterprise Technology & Business Partner",
  description:
    "Technology, talent and solutions for businesses ready to build and scale. From software, managed IT and cybersecurity to AI, commerce, and operational support.",
};

export default function HomePage() {
  const practiceGroups = [
    {
      group: "BUILD",
      label: "Technology & Engineering",
      count: "5 Practices",
      practices: "Software, Mobile Apps, AI & ML, Cloud & DevOps, Cybersecurity",
      color: "text-vensai-cyan",
      borderColor: "border-vensai-cyan/40",
      bgHover: "hover:border-vensai-cyan",
      link: "/services#practice-floor",
    },
    {
      group: "CONNECT",
      label: "Enterprise & Systems",
      count: "3 Practices",
      practices: "SAP BTP / ERP, E-Commerce Solutions, Integrations & API Automation",
      color: "text-vensai-electric",
      borderColor: "border-vensai-electric/40",
      bgHover: "hover:border-vensai-electric",
      link: "/services#practice-floor",
    },
    {
      group: "RUN",
      label: "Consulting & Operations",
      count: "5 Practices",
      practices: "Feasibility R&D, Operational Support, IT Management, KPO/BPO, Internships",
      color: "text-vensai-cyan",
      borderColor: "border-vensai-cyan/40",
      bgHover: "hover:border-vensai-cyan",
      link: "/services#practice-floor",
    },
    {
      group: "SHAPE",
      label: "Brand, Growth & Studio",
      count: "3 Practices",
      practices: "Brand Strategy, Performance Marketing, Commercial Studio Photography",
      color: "text-vensai-electric",
      borderColor: "border-vensai-electric/40",
      bgHover: "hover:border-vensai-electric",
      link: "/services#practice-floor",
    },
  ];

  const flagshipSolutions = [
    {
      badge: "Flagship 01",
      title: "Commerce Ecosystems Hub",
      tagline: "Unify storefront, inventory, studio photography & support.",
      slug: "commerce-ecosystems",
      icon: ShoppingBag,
    },
    {
      badge: "Flagship 02",
      title: "Feasibility & Technical Audits",
      tagline: "Objective architecture reviews, PoC prototyping & risk analysis.",
      slug: "feasibility-technical-audits",
      icon: Compass,
    },
    {
      badge: "Flagship 03",
      title: "Post-Deployment Managed Care",
      tagline: "SLA-backed uptime, security patching, and Tier 1–3 triage.",
      slug: "post-deployment-managed-care",
      icon: Headphones,
    },
  ];

  const engagementModelsSummary = [
    { title: "Project Based", desc: "Complete initiatives from discovery to deployment.", id: "Project Based" },
    { title: "Dedicated Resource", desc: "Embed full-time Vensai specialists directly into your tools.", id: "Dedicated Resource" },
    { title: "Dedicated Team", desc: "Autonomous multidisciplinary delivery pod managed for outcomes.", id: "Dedicated Team" },
    { title: "Managed Services", desc: "SLA-governed ongoing application and cloud infrastructure care.", id: "Managed Services" },
    { title: "Technical Consulting", desc: "Independent feasibility studies and codebase health audits.", id: "Consulting" },
    { title: "Post-Launch Support", desc: "Continuous maintenance, bug triage, and feature iterations.", id: "Post-Deployment Support" },
  ];

  const keyIndustries = [
    { name: "E-Commerce & Retail", desc: "Omnichannel stores, inventory sync & studio catalogs", slug: "ecommerce-retail", icon: ShoppingBag },
    { name: "Financial Services", desc: "Audit-ready customer portals, payment rails & telemetry", slug: "financial-services", icon: Landmark },
    { name: "Logistics & Transport", desc: "Fleet dispatching, driver mobile apps & carrier APIs", slug: "logistics-transportation", icon: Truck },
    { name: "Maritime Operations", desc: "Resilient shipboard software & port terminal systems", slug: "maritime", icon: Anchor },
    { name: "Healthcare & Life Sciences", desc: "Compliant patient portals & clinic scheduling", slug: "healthcare", icon: HeartPulse },
    { name: "Manufacturing & Heavy Industry", desc: "SAP extensions, production dashboards & dealer tools", slug: "manufacturing", icon: Factory },
  ];

  const deliverySteps = [
    { num: "01", name: "Discover" },
    { num: "02", name: "Research" },
    { num: "03", name: "Assess" },
    { num: "04", name: "Plan" },
    { num: "05", name: "Build" },
    { num: "06", name: "Deploy" },
    { num: "07", name: "Support" },
    { num: "08", name: "Scale" },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-vensai-border/80 bg-grid-pattern">
        {/* Logo-matched Luminous Glow Orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-10 w-[580px] h-[580px] rounded-full bg-blue-600/15 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-10 w-[420px] h-[420px] rounded-full bg-vensai-cyan/15 blur-[130px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-vensai-border bg-vensai-card/90 text-xs font-mono font-semibold tracking-widest uppercase text-vensai-text mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-vensai-cyan animate-pulse" />
            <span>BUILD</span>
            <span className="text-vensai-electric">•</span>
            <span>DESIGN</span>
            <span className="text-vensai-electric">•</span>
            <span>AUTOMATE</span>
            <span className="text-vensai-electric">•</span>
            <span>SCALE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-[52px] font-semibold tracking-tight text-vensai-text leading-[1.18] sm:leading-[1.14]">
                Technology, talent and solutions for businesses ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-vensai-electric to-vensai-cyan">
                  build and scale.
                </span>
              </h1>

              <p className="text-sm sm:text-lg text-vensai-muted leading-relaxed max-w-2xl">
                From software and managed IT to AI, cybersecurity, enterprise systems, e-commerce, research and
                operational support, Vensai brings the right expertise together and manages the engagement from
                requirement to delivery.
              </p>

              {/* Primary CTAs (Mobile-friendly full-width or auto) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-vensai-electric hover:from-blue-500 hover:to-vensai-cyan rounded-lg shadow-blue-glow transition-all text-center"
                >
                  <span>Talk to Vensai</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-vensai-text hover:text-vensai-cyan bg-vensai-card hover:bg-vensai-elevated border border-vensai-border rounded-lg transition-colors text-center"
                >
                  <span>Explore Services</span>
                </Link>
              </div>

              {/* 3 Supporting Proof Points */}
              <div className="pt-6 border-t border-vensai-border/60 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-vensai-electric">
                    <CheckCircle2 className="w-4 h-4 text-vensai-cyan shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-vensai-text font-mono">
                      One Partner
                    </span>
                  </div>
                  <p className="text-xs text-vensai-muted">Single accountable governance.</p>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-vensai-electric">
                    <CheckCircle2 className="w-4 h-4 text-vensai-cyan shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-vensai-text font-mono">
                      Multiple Capabilities
                    </span>
                  </div>
                  <p className="text-xs text-vensai-muted">16 in-house practice disciplines.</p>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-vensai-electric">
                    <CheckCircle2 className="w-4 h-4 text-vensai-cyan shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-vensai-text font-mono">
                      End-to-End Delivery
                    </span>
                  </div>
                  <p className="text-xs text-vensai-muted">Strategy through post-launch care.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Pure Vensai Logo & Abbreviation Animation Card */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <HeroOrbital />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 4 PILLARS (BUILD | DESIGN | AUTOMATE | SCALE) */}
      <section className="py-14 bg-vensai-surface/40 border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/services/software-product-engineering"
              className="p-5 rounded-xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-electric transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-vensai-electric uppercase tracking-widest">
                  PILLAR 01
                </span>
                <h3 className="mt-1 text-base font-bold text-vensai-text group-hover:text-vensai-electric transition-colors">
                  BUILD
                </h3>
                <p className="mt-1 text-xs text-vensai-muted leading-relaxed">
                  Software, mobile apps, scalable SaaS, and cloud infrastructure.
                </p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-vensai-cyan flex items-center gap-1">
                <span>View practice</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <Link
              href="/services/brand-digital-marketing"
              className="p-5 rounded-xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-cyan transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-vensai-cyan uppercase tracking-widest">
                  PILLAR 02
                </span>
                <h3 className="mt-1 text-base font-bold text-vensai-text group-hover:text-vensai-cyan transition-colors">
                  DESIGN
                </h3>
                <p className="mt-1 text-xs text-vensai-muted leading-relaxed">
                  Brand strategy, enterprise UI/UX, and studio commercial photography.
                </p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-vensai-electric flex items-center gap-1">
                <span>View practice</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <Link
              href="/services/ai-machine-learning"
              className="p-5 rounded-xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-electric transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-vensai-electric uppercase tracking-widest">
                  PILLAR 03
                </span>
                <h3 className="mt-1 text-base font-bold text-vensai-text group-hover:text-vensai-electric transition-colors">
                  AUTOMATE
                </h3>
                <p className="mt-1 text-xs text-vensai-muted leading-relaxed">
                  SAP BTP, Power BI, applied AI, RAG, and API event integration.
                </p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-vensai-cyan flex items-center gap-1">
                <span>View practice</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <Link
              href="/services/ecommerce-solutions"
              className="p-5 rounded-xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-cyan transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-vensai-cyan uppercase tracking-widest">
                  PILLAR 04
                </span>
                <h3 className="mt-1 text-base font-bold text-vensai-text group-hover:text-vensai-cyan transition-colors">
                  SCALE
                </h3>
                <p className="mt-1 text-xs text-vensai-muted leading-relaxed">
                  Shopify Plus, managed IT, KPO/BPO operations, and talent cohorts.
                </p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-vensai-electric flex items-center gap-1">
                <span>View practice</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. LIGHTWEIGHT PRACTICE FLOOR TEASER (REDUCED SCROLLING) */}
      <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-vensai-border/60">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-vensai-electric mb-2.5">
                <span className="w-2 h-2 rounded-full bg-vensai-cyan inline-block animate-pulse" />
                <span>THE PRACTICE FLOOR · 16 DISCIPLINES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-vensai-text tracking-tight">
                One studio. 16 practice disciplines.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-vensai-muted leading-relaxed">
                Software, cybersecurity, managed IT, KPO/BPO, commerce, and creative live under one accountable delivery
                model. Choose the capabilities that fit your roadmap.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-vensai-electric hover:from-blue-500 hover:to-vensai-cyan rounded-lg shadow-blue-glow transition-all"
              >
                <span>Explore Full Practice Floor (16 Services)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 4 Groupings Summary Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {practiceGroups.map((grp) => (
              <div
                key={grp.group}
                className={`p-6 rounded-2xl bg-vensai-card border border-vensai-border/80 ${grp.bgHover} transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between pb-2 text-[10px] font-mono text-vensai-muted">
                    <span className={`font-bold ${grp.color}`}>{grp.group}</span>
                    <span>{grp.count}</span>
                  </div>
                  <h3 className="mt-1 text-base font-semibold text-vensai-text">{grp.label}</h3>
                  <p className="mt-2 text-xs text-vensai-muted leading-relaxed">{grp.practices}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-vensai-border/50">
                  <Link
                    href={grp.link}
                    className="text-xs font-mono text-vensai-cyan hover:underline inline-flex items-center gap-1"
                  >
                    <span>Inspect {grp.group}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY VENSAI (3 PILLARS SUMMARY) */}
      <section className="py-20 bg-vensai-surface/40 border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-vensai-border/60">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
                PARTNER ADVANTAGE
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-vensai-text tracking-tight mt-1">
                More than a service provider. A long-term business partner.
              </h2>
              <p className="mt-2 text-sm text-vensai-muted leading-relaxed">
                Vensai combines the flexibility of specialist talent with the accountability of central project governance.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-vensai-text hover:text-vensai-cyan bg-vensai-card hover:bg-vensai-elevated border border-vensai-border rounded-lg transition-colors"
              >
                <span>About Our Delivery Model</span>
                <ArrowRight className="w-3.5 h-3.5 text-vensai-cyan" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border space-y-3">
              <div className="w-9 h-9 rounded-xl bg-vensai-surface border border-vensai-border text-vensai-electric flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-vensai-text">Full-Time Professional Teams</h3>
              <p className="text-xs text-vensai-muted leading-relaxed">
                Dedicated professionals across engineering, AI, design, marketing, and operations coordinated under one
                delivery roof.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border space-y-3">
              <div className="w-9 h-9 rounded-xl bg-vensai-surface border border-vensai-border text-vensai-cyan flex items-center justify-center">
                <Workflow className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-vensai-text">Central Project Governance</h3>
              <p className="text-xs text-vensai-muted leading-relaxed">
                Single accountable partner with defined milestones, continuous quality gates, and transparent communication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border space-y-3">
              <div className="w-9 h-9 rounded-xl bg-vensai-surface border border-vensai-border text-vensai-electric flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-vensai-text">End-to-End Execution & Care</h3>
              <p className="text-xs text-vensai-muted leading-relaxed">
                From initial technical feasibility assessments and sprint builds through post-launch managed care and SLAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DELIVERY LIFECYCLE (SLEEK 8-STAGE WORKFLOW RIBBON) */}
      <section className="py-16 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
                OUR APPROACH · 8-STAGE LIFECYCLE
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-vensai-text mt-0.5">From requirement to reality.</h2>
            </div>
            <Link
              href="/about"
              className="text-xs font-mono text-vensai-electric hover:underline flex items-center gap-1"
            >
              <span>Inspect Delivery Framework</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {deliverySteps.map((step) => (
              <div
                key={step.num}
                className="p-3 rounded-xl bg-vensai-card border border-vensai-border/70 text-center space-y-1 hover:border-vensai-electric transition-colors"
              >
                <div className="font-mono text-[10px] font-bold text-vensai-cyan">{step.num}</div>
                <div className="text-xs font-semibold text-vensai-text uppercase">{step.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FLAGSHIP SOLUTIONS (3 CARDS) */}
      <section className="py-20 bg-vensai-surface/40 border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-vensai-border/60">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-electric">
                FLAGSHIP SOLUTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-vensai-text tracking-tight mt-1">
                Integrated solution architectures.
              </h2>
              <p className="mt-2 text-sm text-vensai-muted">
                Multidisciplinary capabilities coordinated into turnkey business systems.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-vensai-text hover:text-vensai-cyan bg-vensai-card hover:bg-vensai-elevated border border-vensai-border rounded-lg transition-colors"
              >
                <span>View All Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 text-vensai-cyan" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {flagshipSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.slug}
                  className="p-6 rounded-2xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-electric transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-vensai-border/50 text-[10px] font-mono text-vensai-cyan">
                      <span>{sol.badge}</span>
                      <Icon className="w-4 h-4 text-vensai-electric" />
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-vensai-text">{sol.title}</h3>
                    <p className="mt-2 text-xs text-vensai-muted leading-relaxed">{sol.tagline}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-vensai-border/40">
                    <Link
                      href={`/solutions/${sol.slug}`}
                      className="text-xs font-mono text-vensai-cyan hover:underline inline-flex items-center gap-1 font-bold"
                    >
                      <span>Solution Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. COMMERCIAL ENGAGEMENT MODELS (COMPACT GRID) */}
      <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-vensai-border/60">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
                COMMERCIAL FLEXIBILITY
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-vensai-text tracking-tight mt-1">
                Structured to match how your business operates.
              </h2>
              <p className="mt-2 text-sm text-vensai-muted">
                Engage for a defined build, dedicated talent, managed services, or focused consulting.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-vensai-text hover:text-vensai-cyan bg-vensai-card hover:bg-vensai-elevated border border-vensai-border rounded-lg transition-colors"
              >
                <span>Request Custom Scope</span>
                <ArrowRight className="w-3.5 h-3.5 text-vensai-cyan" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {engagementModelsSummary.map((m, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-vensai-card border border-vensai-border/70 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono font-bold text-vensai-electric uppercase">MODEL 0{idx + 1}</div>
                  <h3 className="mt-1 text-sm font-semibold text-vensai-text">{m.title}</h3>
                  <p className="mt-1 text-xs text-vensai-muted leading-relaxed">{m.desc}</p>
                </div>
                <div className="mt-4 pt-2 border-t border-vensai-border/40">
                  <Link
                    href={`/contact?model=${encodeURIComponent(m.id)}`}
                    className="text-xs font-mono text-vensai-cyan hover:underline inline-flex items-center gap-1"
                  >
                    <span>Select {m.title}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES PREVIEW (COMPACT SECTOR SHOWCASE) */}
      <section className="py-20 bg-vensai-surface/40 border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-vensai-border/60">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-electric">
                DOMAIN ADAPTABILITY
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-vensai-text tracking-tight mt-1">
                Tailored solutions across 15 sectors.
              </h2>
              <p className="mt-2 text-sm text-vensai-muted">
                Aligning technology to the operational, data, and regulatory realities of each sector.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-vensai-text hover:text-vensai-cyan bg-vensai-card hover:bg-vensai-elevated border border-vensai-border rounded-lg transition-colors"
              >
                <span>Explore All 15 Industries</span>
                <ArrowRight className="w-3.5 h-3.5 text-vensai-cyan" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyIndustries.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="p-5 rounded-xl bg-vensai-card border border-vensai-border hover:border-vensai-cyan transition-all group flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-vensai-surface border border-vensai-border text-vensai-cyan flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-vensai-text group-hover:text-vensai-cyan transition-colors">
                      {ind.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-vensai-muted leading-relaxed">{ind.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. TECHNOLOGY ECOSYSTEM TEASER */}
      <section className="py-16 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-8 rounded-2xl bg-vensai-card border border-vensai-border">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-vensai-cyan">
                TECHNICAL ECOSYSTEM · 60+ STACKS
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-vensai-text">
                Engineered across modern and enterprise stacks.
              </h2>
              <p className="text-xs sm:text-sm text-vensai-muted leading-relaxed">
                From Next.js, Python/FastAPI, Flutter, and AWS/Azure to SAP BTP, Power BI, and OpenAI RAG pipelines.
                Search and filter our complete technical capability directory.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/technologies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-vensai-electric hover:from-blue-500 hover:to-vensai-cyan shadow-blue-glow transition-all"
              >
                <span>Browse Full Tech Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CASE STUDY FRAMEWORKS TEASER */}
      <section className="py-20 bg-vensai-surface/40 border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-vensai-border/60">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-electric">
                DELIVERY ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-vensai-text tracking-tight mt-1">
                Structured engagements. Transparent delivery.
              </h2>
              <p className="mt-2 text-sm text-vensai-muted">
                Transparent reporting rather than unsupported claims. Inspect our tested architecture blueprints.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-vensai-text hover:text-vensai-cyan bg-vensai-card hover:bg-vensai-elevated border border-vensai-border rounded-lg transition-colors"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5 text-vensai-cyan" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border space-y-3 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Concept Example
                </span>
                <h3 className="mt-2.5 text-base font-semibold text-vensai-text">
                  Enterprise System & Workflow Transformation
                </h3>
                <p className="mt-1 text-xs text-vensai-muted leading-relaxed">
                  Side-by-side SAP BTP extensions, automated dealer requisition workflows, and Power BI telemetry.
                </p>
              </div>
              <div className="pt-3 border-t border-vensai-border/40">
                <Link href="/work" className="text-xs font-mono text-vensai-cyan hover:underline flex items-center gap-1">
                  <span>Inspect Architecture</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border space-y-3 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-vensai-cyan/10 text-vensai-cyan border border-vensai-cyan/30">
                  Internal Demonstration
                </span>
                <h3 className="mt-2.5 text-base font-semibold text-vensai-text">
                  Omnichannel E-Commerce Ecosystem
                </h3>
                <p className="mt-1 text-xs text-vensai-muted leading-relaxed">
                  Shopify Plus storefront, studio catalog production, ERP inventory sync, and customer desk.
                </p>
              </div>
              <div className="pt-3 border-t border-vensai-border/40">
                <Link href="/work" className="text-xs font-mono text-vensai-cyan hover:underline flex items-center gap-1">
                  <span>Inspect Architecture</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border space-y-3 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  Concept Example
                </span>
                <h3 className="mt-2.5 text-base font-semibold text-vensai-text">
                  Cloud Migration & AI Readiness
                </h3>
                <p className="mt-1 text-xs text-vensai-muted leading-relaxed">
                  AWS migration via Terraform, OWASP ASVS hardening, and private enterprise RAG pipelines.
                </p>
              </div>
              <div className="pt-3 border-t border-vensai-border/40">
                <Link href="/work" className="text-xs font-mono text-vensai-cyan hover:underline flex items-center gap-1">
                  <span>Inspect Architecture</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TOP 3 ESSENTIAL FAQS */}
      <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
              CLARITY & GOVERNANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-vensai-card border border-vensai-border space-y-2">
              <h3 className="text-sm sm:text-base font-semibold text-vensai-text">
                How is Vensai Labs different from a freelancer marketplace or a traditional IT agency?
              </h3>
              <p className="text-xs sm:text-sm text-vensai-muted leading-relaxed">
                Vensai combines specialist capabilities with coordinated project delivery. Rather than leaving clients
                to coordinate unrelated individuals, Vensai brings relevant disciplines together under a managed
                engagement model.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-vensai-card border border-vensai-border space-y-2">
              <h3 className="text-sm sm:text-base font-semibold text-vensai-text">
                What engagement models does Vensai Labs offer?
              </h3>
              <p className="text-xs sm:text-sm text-vensai-muted leading-relaxed">
                Project Based, Dedicated Resource, Dedicated Team, Managed Services, Consulting and Post-Deployment Support.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-vensai-card border border-vensai-border space-y-2">
              <h3 className="text-sm sm:text-base font-semibold text-vensai-text">
                Can Vensai help if we have an idea but need feasibility and scoping first?
              </h3>
              <p className="text-xs sm:text-sm text-vensai-muted leading-relaxed">
                Yes. The consulting and R&D offering can cover feasibility assessment, architecture review, technology
                selection, proof-of-concept validation and roadmap development.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/contact"
              className="text-xs font-mono text-vensai-cyan hover:underline inline-flex items-center gap-1"
            >
              <span>Have another question? Speak to our team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FINAL CRISP CTA */}
      <section className="py-20 bg-gradient-to-b from-vensai-surface/60 to-vensai-bg relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[140px]"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-vensai-border bg-vensai-card text-xs font-mono uppercase tracking-widest text-vensai-cyan">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-vensai-text tracking-tight">
            Whatever you're building, let's build it right.
          </h2>
          <p className="text-sm sm:text-base text-vensai-muted max-w-xl mx-auto leading-relaxed">
            Tell us what your business needs. Our team will help understand the requirement, evaluate the right approach
            and identify the expertise needed for delivery.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-vensai-electric hover:from-blue-500 hover:to-vensai-cyan shadow-blue-glow transition-all"
            >
              <span>Talk to Vensai</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-text hover:text-vensai-cyan bg-vensai-card hover:bg-vensai-elevated border border-vensai-border transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
