import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Layers,
  Compass,
  ShieldCheck,
  Building2,
  Workflow,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "About Vensai Labs — Business Solutions Partner & Engineering Studio",
  description:
    "Learn about Vensai Labs, a brand of Vijetha Softwares Private Limited in collaboration with HCTPL. Full-time professional teams across software, AI, cloud, enterprise systems, and support.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-violet">
              <span>ABOUT VENSAI LABS · CORPORATE IDENTITY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-vensai-text tracking-tight leading-tight">
              More than a service provider. A partner for what comes next.
            </h1>
            <p className="text-base sm:text-lg text-vensai-muted leading-relaxed">
              Vensai Labs brings engineering, enterprise technology, design, consulting, creative production and
              operational support together to help businesses build, improve and scale. Our approach is built around
              understanding the requirement, assembling the appropriate capabilities, managing delivery and supporting
              the solution according to the engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Core Identity & Framework */}
      <section className="py-24 bg-vensai-surface/40 border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
                BRAND CONCEPT
              </span>
              <h2 className="text-3xl font-semibold text-vensai-text tracking-tight">
                VenSai: Venture for Startups and Institutes
              </h2>
              <p className="text-sm text-vensai-muted leading-relaxed">
                The name <strong className="text-vensai-text">VenSai</strong> reflects our core founding thesis: bridging
                the agility and ambition of early-stage startups with the structured research, student talent, and
                continuous learning of academic institutes.
              </p>
              <p className="text-sm text-vensai-muted leading-relaxed">
                Rather than operating as a disconnected freelancer marketplace or a rigid single-discipline consultancy,
                Vensai combines the flexibility of specialist talent with the coordination, accountability, and quality
                assurance of a professional business partner.
              </p>
              <div className="pt-2">
                <div className="p-4 rounded-xl bg-vensai-card border border-vensai-border space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-vensai-violet font-bold">
                    The 4 Operating Pillars
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-vensai-text font-mono">
                    <div className="p-2 rounded bg-vensai-surface border border-vensai-border/60">
                      BUILD: Engineering & Cloud
                    </div>
                    <div className="p-2 rounded bg-vensai-surface border border-vensai-border/60">
                      DESIGN: Identity & UI/UX
                    </div>
                    <div className="p-2 rounded bg-vensai-surface border border-vensai-border/60">
                      AUTOMATE: Systems & AI
                    </div>
                    <div className="p-2 rounded bg-vensai-surface border border-vensai-border/60">
                      SCALE: Commerce & Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border/80 space-y-3">
                <div className="flex items-center gap-3 text-vensai-cyan">
                  <Users className="w-5 h-5" />
                  <h3 className="text-base font-semibold text-vensai-text">Full-Time Professional Teams</h3>
                </div>
                <p className="text-xs text-vensai-muted leading-relaxed">
                  We employ dedicated professionals across software engineering, cloud, cybersecurity, enterprise ERP,
                  creative production, and customer support. Clients work with coordinated teams rather than managing
                  unrelated contractors.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border/80 space-y-3">
                <div className="flex items-center gap-3 text-vensai-violet">
                  <Workflow className="w-5 h-5" />
                  <h3 className="text-base font-semibold text-vensai-text">Central Project Governance</h3>
                </div>
                <p className="text-xs text-vensai-muted leading-relaxed">
                  Every project has defined milestones, transparent sprint reviews, continuous testing gates, and direct
                  accountability to project leadership.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border/80 space-y-3">
                <div className="flex items-center gap-3 text-vensai-cyan">
                  <Compass className="w-5 h-5" />
                  <h3 className="text-base font-semibold text-vensai-text">Technical Diligence & Feasibility</h3>
                </div>
                <p className="text-xs text-vensai-muted leading-relaxed">
                  We emphasize honest feasibility assessments and architectural reviews before recommending major
                  investments. If an approach is impractical, we say so upfront.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Attribution Details */}
      <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
              CORPORATE STRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
              Legal Identity & Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border space-y-2">
              <span className="text-xs font-mono text-vensai-muted">Parent Company</span>
              <h3 className="text-base font-semibold text-vensai-text">{companyConfig.legalName}</h3>
              <p className="text-xs text-vensai-muted">
                Vensai Labs is a premier digital solutions and freelancing agency brand of Vijetha Softwares Private
                Limited.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border space-y-2">
              <span className="text-xs font-mono text-vensai-muted">Corporate Identity Number (CIN)</span>
              <h3 className="text-base font-mono font-semibold text-vensai-cyan">{companyConfig.cin}</h3>
              <p className="text-xs text-vensai-muted">
                Registered in Andhra Pradesh, India under the Ministry of Corporate Affairs (MCA).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-vensai-card border border-vensai-border space-y-2">
              <span className="text-xs font-mono text-vensai-muted">Collaboration & Delivery</span>
              <h3 className="text-base font-semibold text-vensai-text">In Collaboration with {companyConfig.collaboration}</h3>
              <p className="text-xs text-vensai-muted">{companyConfig.deliveryDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-vensai-surface/60 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-3xl font-semibold text-vensai-text">Partner with Vensai Labs</h2>
          <p className="text-sm text-vensai-muted leading-relaxed">
            Whether you need a full delivery team, specialist engineering talent, or strategic technology consulting,
            let's discuss your requirements.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 shadow-violet-glow transition-all"
            >
              <span>Talk to Vensai</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-text bg-vensai-card hover:bg-vensai-elevated border border-vensai-border transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
