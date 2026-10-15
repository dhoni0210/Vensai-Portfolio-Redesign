import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { AlertCircle, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions — Vensai Labs",
  description: "Terms and Conditions for Vensai Labs, a brand of Vijetha Softwares Private Limited.",
};

export default function TermsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-cyan">
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-vensai-text tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs font-mono text-vensai-muted">
            Last Updated: January 2026 • Brand of {companyConfig.legalName}
          </p>
        </div>
      </section>

      {/* Draft Review Banner */}
      <section className="bg-amber-500/10 border-b border-amber-500/30 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-start sm:items-center gap-3 text-xs text-amber-300">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Draft For Owner & Legal Review:</strong> These terms represent the standard general operating terms
            of Vensai Labs. Client project deliverables, intellectual property ownership, milestone payments, and service
            level agreements are governed by individual, executed Master Services Agreements (MSAs) and Statements of Work
            (SOWs).
          </p>
        </div>
      </section>

      {/* Main Terms */}
      <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-sm text-vensai-muted leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of <strong className="text-vensai-text">{companyConfig.name}</strong>, a
              brand of <strong className="text-vensai-text">{companyConfig.legalName}</strong> (CIN:{" "}
              {companyConfig.cin}), you agree to be bound by these Terms and Conditions. If you disagree with any part of
              these terms, you may not access the website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">2. Professional Services & Contracts</h2>
            <p>
              The content on this website is for informational and requirement scoping purposes. Formal service engagements
              (including Project Based, Dedicated Resource, Dedicated Team, Managed Services, and Consulting) are
              executed under bilateral written agreements (Statements of Work) defining exact deliverables, payment
              schedules, and warranties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise specified in a custom client agreement, all proprietary branding, website designs, text,
              graphics, and orbital visual elements on this website are the intellectual property of Vijetha Softwares
              Private Limited.
            </p>
            <p>
              For custom software and digital products developed under contract for clients, intellectual property
              transfer occurs according to the executed Statement of Work upon receipt of milestone payment.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">4. Limitation of Liability</h2>
            <p>
              In no event shall Vensai Labs, Vijetha Softwares Private Limited, or its directors, employees, or partners be
              liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or
              inability to use the website or services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">5. Governing Law & Jurisdiction</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its
              conflict of law provisions. Any legal dispute shall be subject to the exclusive jurisdiction of the competent
              courts of Andhra Pradesh, India.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">6. Contact Information</h2>
            <p>
              Inquiries regarding these Terms should be directed to:
            </p>
            <div className="p-4 rounded-xl bg-vensai-card border border-vensai-border space-y-1 text-xs font-mono">
              <div>Vensai Labs / Vijetha Softwares Private Limited</div>
              <div>Email: {companyConfig.email}</div>
              <div>Phone: {companyConfig.phoneDisplay}</div>
            </div>
          </div>

          <div className="pt-6 border-t border-vensai-border/60">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-vensai-muted hover:text-vensai-text"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
