"use client";

import React, { useState } from "react";
import Link from "next/link";
import { caseStudiesData, CaseStudyItem } from "@/data/caseStudies";
import CaseStudyCard from "@/components/CaseStudyCard";
import { ArrowRight, Info, Filter } from "lucide-react";

const categories = [
  "All",
  "Software & Products",
  "AI & Automation",
  "Enterprise Systems",
  "E-commerce",
  "Cloud & Security",
  "Brand & Creative",
] as const;

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const filteredStudies = caseStudiesData.filter((cs) => {
    const matchesCategory = selectedCategory === "All" || cs.filterCategory === selectedCategory;
    const matchesStatus = selectedStatus === "All" || cs.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-cyan">
              <span>DELIVERY ARCHITECTURE · CASE STUDIES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-vensai-text tracking-tight leading-tight">
              Real challenges deserve thoughtful solutions.
            </h1>
            <p className="text-base sm:text-lg text-vensai-muted leading-relaxed">
              Every project should communicate the challenge, approach, solution, technologies and verifiable outcomes.
              We believe in transparent, accurate reporting rather than unsupported claims.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Banner */}
      <section className="bg-vensai-surface/60 border-b border-vensai-border/60 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3 text-xs text-vensai-muted">
          <Info className="w-4 h-4 text-vensai-cyan shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-vensai-text">Integrity Disclosure:</strong> To maintain strict client confidentiality
            and avoid fabricating client logos or testimonials, the case studies below represent tested architecture
            frameworks and internal demonstration prototypes.
          </p>
        </div>
      </section>

      {/* Filterable Case Studies Showcase */}
      <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-vensai-border/60">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-vensai-violet text-white shadow-violet-glow"
                      : "bg-vensai-card text-vensai-muted hover:text-vensai-text border border-vensai-border/70"
                  }`}
                  aria-pressed={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-vensai-muted flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-vensai-cyan" />
                <span>Status:</span>
              </span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-vensai-card border border-vensai-border rounded-lg px-3 py-1 text-xs text-vensai-text font-mono focus:outline-none focus:border-vensai-violet"
                aria-label="Filter by project status"
              >
                <option value="All">All Statuses</option>
                <option value="Concept Example">Concept Example</option>
                <option value="Internal Demonstration">Internal Demonstration</option>
                <option value="Published Client Project">Published Client Project</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-16 bg-vensai-card border border-vensai-border rounded-2xl p-8 space-y-3 mt-8">
              <h3 className="text-lg font-semibold text-vensai-text">No Projects In This Specific Category Yet</h3>
              <p className="text-xs text-vensai-muted max-w-md mx-auto">
                Verified client engagements are published only with explicit client authorization and NDA clearance.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedStatus("All");
                }}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-vensai-cyan bg-vensai-surface border border-vensai-border rounded-lg hover:bg-vensai-elevated transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Owner Submission Note / CTA */}
      <section className="py-20 bg-vensai-surface/60 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h2 className="text-3xl font-semibold text-vensai-text">Ready to build your next milestone?</h2>
          <p className="text-sm text-vensai-muted leading-relaxed">
            Discuss your technical goals with our engineering leads. We provide transparent scoping, clear milestones,
            and end-to-end accountability.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 shadow-violet-glow transition-all"
            >
              <span>Talk to Vensai</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
