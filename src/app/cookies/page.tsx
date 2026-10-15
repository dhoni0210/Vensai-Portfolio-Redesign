import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { AlertCircle, ArrowLeft, Cookie } from "lucide-react";

export const metadata = {
  title: "Cookie Policy — Vensai Labs",
  description: "Cookie Policy and tracking preferences for Vensai Labs and Vijetha Softwares Private Limited.",
};

export default function CookiePolicyPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-16 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-cyan">
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-vensai-text tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs font-mono text-vensai-muted">
            Last Updated: January 2026 • Brand of {companyConfig.legalName}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-sm text-vensai-muted leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your computer or mobile device when you visit a website. They allow
              the website to remember your device, preferences, and session state to ensure proper functionality and speed.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">2. How Vensai Labs Uses Cookies</h2>
            <p>We classify our cookies into the following categories:</p>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-xl bg-vensai-card border border-vensai-border space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-vensai-text">Essential / Necessary Cookies</h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-vensai-surface border border-vensai-border text-vensai-cyan">
                    Required
                  </span>
                </div>
                <p className="text-xs text-vensai-muted leading-relaxed">
                  These cookies are required for basic navigation, security, and loading of the website. The website
                  cannot function properly without these cookies.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-vensai-card border border-vensai-border space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-vensai-text">Performance & Telemetry Cookies</h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-vensai-surface border border-vensai-border text-vensai-violet">
                    Optional
                  </span>
                </div>
                <p className="text-xs text-vensai-muted leading-relaxed">
                  These cookies help us understand how visitors interact with the website by providing anonymized metrics
                  on page loads, bounce rates, and navigation errors.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">3. Managing Your Cookie Preferences</h2>
            <p>
              You can control or reset your cookie preferences at any time using your web browser settings. Most browsers
              allow you to delete existing cookies, block all cookies, or prompt you before a cookie is stored.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-vensai-text">4. Inquiries</h2>
            <p>
              If you have questions about our cookie handling or privacy practices, email{" "}
              <a href={`mailto:${companyConfig.email}`} className="text-vensai-violet underline">
                {companyConfig.email}
              </a>
              .
            </p>
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
