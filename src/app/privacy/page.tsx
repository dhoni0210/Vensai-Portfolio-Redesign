import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { AlertCircle, Shield, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Notice — Vensai Labs",
  description: "Privacy Notice and data handling policy for Vensai Labs and Vijetha Softwares Private Limited.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-cyan">
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-vensai-text tracking-tight">
            Privacy Notice
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
            <strong>Draft For Owner & Legal Review:</strong> This document represents a standard privacy notice framework.
            Before production domain cutover, company legal counsel should review and finalize all terms to ensure full
            alignment with Indian Digital Personal Data Protection (DPDP) Act and international data privacy regulations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-sm text-vensai-muted leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">1. Corporate Identity & Controller</h2>
            <p>
              This Privacy Notice explains how <strong className="text-vensai-text">{companyConfig.name}</strong>, a
              digital solutions brand of{" "}
              <strong className="text-vensai-text">{companyConfig.legalName}</strong> (CIN: {companyConfig.cin}),
              collects, processes, and protects information submitted through our website (
              <a href={companyConfig.websiteUrl} className="text-vensai-cyan underline">
                {companyConfig.websiteUrl}
              </a>
              ) and associated project communication channels.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">2. Information We Collect</h2>
            <p>We collect information voluntarily submitted when you request technical services or contact our team:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong className="text-vensai-text">Identity Information:</strong> Full name, company or organization
                name, job title.
              </li>
              <li>
                <strong className="text-vensai-text">Contact Information:</strong> Work email address, telephone number.
              </li>
              <li>
                <strong className="text-vensai-text">Project Specifications:</strong> Service interest, project
                descriptions, expected timelines, and budget ranges.
              </li>
              <li>
                <strong className="text-vensai-text">Technical Telemetry:</strong> Anonymized browser type, operating
                system, and interaction telemetry necessary for website performance.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">3. How We Use Collected Information</h2>
            <p>Information collected is used strictly for legitimate business and client service purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>To evaluate project feasibility and prepare technical delivery proposals.</li>
              <li>To communicate with you regarding submitted inquiries.</li>
              <li>To maintain website stability, security, and spam prevention.</li>
              <li>We do not sell, lease, or monetize client personal data to third parties.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">4. Client Confidentiality & NDAs</h2>
            <p>
              All proprietary business logic, software source code, architectural plans, and sensitive data shared during
              engagement discovery are treated under strict professional confidentiality. Formal Non-Disclosure
              Agreements (NDAs) are executed prior to deep codebase audits or technical access.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">5. Data Retention & Your Rights</h2>
            <p>
              In accordance with applicable data privacy frameworks, you have the right to request access to, correction
              of, or deletion of your personal contact records. You may exercise these rights at any time by contacting us
              at{" "}
              <a href={`mailto:${companyConfig.email}`} className="text-vensai-violet underline">
                {companyConfig.email}
              </a>
              .
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">6. Inquiries & Contact</h2>
            <p>
              For questions regarding this Privacy Notice or our data processing procedures, contact:
            </p>
            <div className="p-4 rounded-xl bg-vensai-card border border-vensai-border space-y-1 text-xs font-mono">
              <div>Vensai Labs / Vijetha Softwares Private Limited</div>
              <div>Email: {companyConfig.email}</div>
              <div>Phone: {companyConfig.phoneDisplay}</div>
              <div>Operations: {companyConfig.deliveryDescription}</div>
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
