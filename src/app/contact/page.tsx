import React, { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { companyConfig } from "@/data/company";
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Contact & Project Inquiries — Talk to Vensai Labs",
  description:
    "Discuss your software engineering, managed IT, cybersecurity, AI, or e-commerce requirement with Vensai Labs. Direct inquiry form and contact channels.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-cyan">
              <span>GET IN TOUCH · INQUIRIES & PARTNERSHIPS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-vensai-text tracking-tight leading-tight">
              Whatever you're building, let's talk.
            </h1>
            <p className="text-base sm:text-lg text-vensai-muted leading-relaxed">
              Tell us what your business needs. We'll help understand the requirement, evaluate the right approach and
              bring together the appropriate expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-24 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Verified Contact Info & Governance */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-violet">
                  VERIFIED DIRECT CHANNELS
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-vensai-text">
                  Direct Inquiries & Coordination
                </h2>
                <p className="text-xs sm:text-sm text-vensai-muted leading-relaxed">
                  Inquiries are reviewed by senior solutions leads. We do not use automated sales queues; your message is
                  evaluated directly against our delivery floor.
                </p>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-vensai-card border border-vensai-border/80 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-vensai-surface border border-vensai-border text-vensai-violet flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-vensai-muted block mb-0.5">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${companyConfig.email}`}
                      className="text-sm font-semibold text-vensai-text hover:text-vensai-cyan transition-colors"
                    >
                      {companyConfig.email}
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-vensai-card border border-vensai-border/80 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-vensai-surface border border-vensai-border text-vensai-cyan flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-vensai-muted block mb-0.5">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${companyConfig.phone}`}
                      className="text-sm font-semibold text-vensai-text hover:text-vensai-cyan transition-colors"
                    >
                      {companyConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-vensai-card border border-vensai-border/80 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-vensai-surface border border-vensai-border text-vensai-violet flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-vensai-muted block mb-0.5">
                      Delivery Operations
                    </span>
                    <p className="text-sm font-semibold text-vensai-text">{companyConfig.deliveryDescription}</p>
                  </div>
                </div>
              </div>

              {/* Confidentiality & Governance Guarantee */}
              <div className="p-6 rounded-2xl bg-vensai-surface border border-vensai-border/70 space-y-3">
                <div className="flex items-center gap-2 text-vensai-cyan text-xs font-mono font-bold uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidentiality & Non-Disclosure</span>
                </div>
                <p className="text-xs text-vensai-muted leading-relaxed">
                  All requirement briefs, architecture discussions, and code reviews are handled under mutual
                  non-disclosure agreements (NDAs). Your intellectual property remains 100% yours.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 text-center text-xs font-mono text-vensai-muted bg-vensai-card border border-vensai-border rounded-2xl">
                    Loading inquiry form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
