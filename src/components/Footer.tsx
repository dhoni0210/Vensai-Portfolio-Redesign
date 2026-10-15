import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyConfig } from "@/data/company";
import { servicesData } from "@/data/services";
import { solutionsData } from "@/data/solutions";
import { industriesData } from "@/data/industries";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#05070B] border-t border-vensai-border/80 text-vensai-muted text-sm">
      {/* Upper CTA Banner */}
      <div className="border-b border-vensai-border/50 bg-vensai-surface/40 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan">
              READY TO BUILD?
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-vensai-text mt-1">
              Whatever you're building, let's build it right.
            </h3>
            <p className="text-sm text-vensai-muted max-w-xl mt-2">
              From enterprise systems and custom SaaS to AI, managed cloud, and commerce, talk to our team about your
              requirements.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/services"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-vensai-text hover:text-vensai-cyan border border-vensai-border rounded-lg bg-vensai-card hover:bg-vensai-elevated transition-colors"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-vensai-electric hover:from-blue-500 hover:to-vensai-cyan rounded-lg shadow-blue-glow transition-all"
            >
              <span>Talk to Vensai</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-9 h-9">
                <Image
                  src="/brand/vensai-symbol.png"
                  alt="Vensai Labs V Symbol"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-36 h-8">
                <Image
                  src="/brand/vensai-wordmark-dark.png"
                  alt="VENSAI LABS"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <div className="text-xs font-mono tracking-wider uppercase text-vensai-cyan font-bold">
              {companyConfig.tagline}
            </div>

            <p className="text-xs text-vensai-muted leading-relaxed">
              <strong className="text-vensai-text">{companyConfig.concept}</strong>. Vensai Labs brings engineering,
              managed IT, KPO and BPO, internships, commerce, brand and support together and manages engagements from
              requirement to delivery.
            </p>

            <div className="pt-2 border-t border-vensai-border/40 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-vensai-electric shrink-0" />
                <a
                  href={`mailto:${companyConfig.email}`}
                  className="hover:text-vensai-text transition-colors text-vensai-muted"
                >
                  {companyConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-vensai-cyan shrink-0" />
                <a
                  href={`tel:${companyConfig.phone}`}
                  className="hover:text-vensai-text transition-colors text-vensai-muted"
                >
                  {companyConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-vensai-electric shrink-0 mt-0.5" />
                <span className="text-vensai-muted">{companyConfig.deliveryDescription}</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <div>A brand of {companyConfig.legalName}</div>
              <div>
                CIN: <span className="font-mono text-vensai-muted">{companyConfig.cin}</span>
              </div>
              <div>In collaboration with {companyConfig.collaboration}</div>
            </div>
          </div>

          {/* 16 Practice Floor Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-vensai-text font-bold">
              Practice Floor (16)
            </h4>
            <ul className="space-y-1.5 text-xs">
              {servicesData.slice(0, 8).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-vensai-cyan transition-colors flex items-center gap-1.5"
                  >
                    <span className="font-mono text-[10px] text-vensai-border">{s.order}</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              {servicesData.slice(8, 16).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-vensai-cyan transition-colors flex items-center gap-1.5"
                  >
                    <span className="font-mono text-[10px] text-vensai-border">{s.order}</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Industries Column */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-vensai-text font-bold mb-3">
                Flagship Solutions
              </h4>
              <ul className="space-y-2 text-xs">
                {solutionsData.map((sol) => (
                  <li key={sol.id}>
                    <Link
                      href={`/solutions/${sol.slug}`}
                      className="hover:text-vensai-cyan transition-colors block"
                    >
                      <span className="text-vensai-text hover:text-vensai-cyan font-medium">{sol.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-vensai-text font-bold mb-3">
                Key Industries
              </h4>
              <ul className="space-y-1.5 text-xs grid grid-cols-1">
                {industriesData.slice(0, 6).map((ind) => (
                  <li key={ind.id}>
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="hover:text-vensai-text transition-colors"
                    >
                      {ind.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/industries"
                    className="text-vensai-cyan hover:underline font-medium inline-flex items-center gap-1 mt-1"
                  >
                    <span>View all 15 industries</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company & Social Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-vensai-text font-bold mb-3">Company</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/about" className="hover:text-vensai-text transition-colors">
                    About Vensai
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-vensai-text transition-colors">
                    Work & Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/technologies" className="hover:text-vensai-text transition-colors">
                    Technology Directory
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="hover:text-vensai-text transition-colors">
                    Insights & Perspectives
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-vensai-text transition-colors">
                    Careers & Internships
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-vensai-text transition-colors">
                    Contact & Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-vensai-text font-bold mb-3">Connect</h4>
              <div className="flex flex-col space-y-2 text-xs">
                <a
                  href={companyConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-vensai-cyan transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={companyConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-vensai-cyan transition-colors inline-flex items-center gap-1"
                >
                  <span>X / Twitter</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={companyConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-vensai-cyan transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-vensai-text font-bold mb-3">Legal</h4>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href={companyConfig.legal.privacyNoticePath} className="hover:text-vensai-text transition-colors">
                    Privacy Notice
                  </Link>
                </li>
                <li>
                  <Link href={companyConfig.legal.termsAndConditionsPath} className="hover:text-vensai-text transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href={companyConfig.legal.cookiePolicyPath} className="hover:text-vensai-text transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-vensai-border/40 bg-vensai-dark py-6 px-6 text-xs text-vensai-muted">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            © {currentYear} {companyConfig.name}, a brand of {companyConfig.legalName}. CIN:{" "}
            <span className="font-mono text-slate-400">{companyConfig.cin}</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase text-vensai-border">
            <span className="text-vensai-electric">{companyConfig.framework.join(" | ")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
