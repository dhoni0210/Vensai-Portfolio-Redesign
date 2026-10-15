import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import {
  ArrowRight,
  GraduationCap,
  CodeXml,
  Sparkles,
  Cloud,
  Palette,
  ShieldCheck,
  CheckCircle2,
  Mail,
  AlertCircle,
} from "lucide-react";

export const metadata = {
  title: "Careers & Internships — Learn, Contribute and Grow with Vensai",
  description:
    "Explore practical technical internships, guided software engineering cohorts, and expression of interest pathways at Vensai Labs.",
};

export default function CareersPage() {
  const learningTracks = [
    {
      title: "Full-Stack Web & API Engineering",
      desc: "Modern React, Next.js, TypeScript, Node.js, and relational database modeling with PostgreSQL.",
      icon: CodeXml,
    },
    {
      title: "Applied AI & Vector Pipelines",
      desc: "Practical LLM prompt engineering, RAG indexing with pgvector, and evaluation benchmarking.",
      icon: Sparkles,
    },
    {
      title: "Cloud Infrastructure & CI/CD",
      desc: "Docker containerization, GitHub Actions automated deployment pipelines, and Linux basics.",
      icon: Cloud,
    },
    {
      title: "UI/UX & Design Systems",
      desc: "Figma wireframing, component tokens, responsive layouts, and WCAG accessibility standards.",
      icon: Palette,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-cyan">
              <span>TALENT & INSTITUTES · CAREERS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-vensai-text tracking-tight leading-tight">
              Learn, contribute and grow with Vensai.
            </h1>
            <p className="text-base sm:text-lg text-vensai-muted leading-relaxed">
              As part of our founding mission as VenSai (Venture for Startups and Institutes), we bridge academic
              foundations with production software engineering, hands-on mentorship, and real client delivery sprints.
            </p>
          </div>
        </div>
      </section>

      {/* Internship & Learning Overview */}
      <section className="py-24 bg-vensai-surface/40 border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-vensai-violet">
              STRUCTURED LEARNING
            </span>
            <h2 className="text-3xl font-semibold text-vensai-text mt-1">
              Practical Mentorship & Technical Cohorts
            </h2>
            <p className="mt-2 text-sm text-vensai-muted">
              We focus on writing clean, maintainable code, participating in peer code reviews, and understanding real
              client project governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningTracks.map((track, idx) => {
              const Icon = track.icon;
              return (
                <div key={idx} className="p-7 rounded-2xl bg-vensai-card border border-vensai-border space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-vensai-surface border border-vensai-border text-vensai-cyan flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-vensai-text">{track.title}</h3>
                  <p className="text-xs text-vensai-muted leading-relaxed">{track.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Honest Vacancies Status & Expression of Interest */}
      <section className="py-24 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-10 rounded-2xl bg-vensai-card border border-vensai-border/80 shadow-card-glow space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-vensai-cyan/10 border border-vensai-cyan/30 text-vensai-cyan flex items-center justify-center shrink-0 mt-1">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-vensai-cyan">
                  Current Hiring Status
                </span>
                <h3 className="text-2xl font-semibold text-vensai-text">
                  No Public Vacancies Listed At This Time
                </h3>
                <p className="text-xs sm:text-sm text-vensai-muted leading-relaxed">
                  We believe in authentic transparency: we do not display fabricated job requisitions or misleading placement
                  guarantees. New full-time roles and student internship cohorts are announced periodically based on active
                  client delivery requirements.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-vensai-border/60 space-y-4">
              <h4 className="text-base font-semibold text-vensai-text">Submit an Expression of Interest</h4>
              <p className="text-xs text-vensai-muted leading-relaxed">
                If you are a passionate software engineer, AI developer, or UI/UX designer interested in collaborating with
                Vensai Labs on future initiatives, send your resume, GitHub profile, and portfolio link directly to our talent
                coordination team.
              </p>

              <div className="p-4 rounded-xl bg-vensai-surface border border-vensai-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-vensai-text">
                  <Mail className="w-4 h-4 text-vensai-violet" />
                  <span>{companyConfig.email}</span>
                </div>
                <a
                  href={`mailto:${companyConfig.email}?subject=Expression%20of%20Interest%20-%20Vensai%20Talent`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 transition-colors"
                >
                  <span>Email Your Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
