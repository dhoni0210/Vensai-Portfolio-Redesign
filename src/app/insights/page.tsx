"use client";

import React, { useState } from "react";
import Link from "next/link";
import { insightsArticles } from "@/data/insights";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";

const insightCategories = [
  "All",
  "Software Engineering",
  "AI & Automation",
  "Cloud & DevOps",
  "Cybersecurity",
  "Enterprise Technology",
  "E-commerce",
  "Business Operations",
] as const;

export default function InsightsPage() {
  const [selectedCat, setSelectedCat] = useState<string>("All");

  const filteredArticles = insightsArticles.filter(
    (art) => selectedCat === "All" || art.category === selectedCat
  );

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-xs font-mono uppercase tracking-widest text-vensai-cyan">
              <span>EDITORIAL & RESEARCH · INSIGHTS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-vensai-text tracking-tight leading-tight">
              Ideas, research and practical perspectives for building better businesses.
            </h1>
            <p className="text-base sm:text-lg text-vensai-muted leading-relaxed">
              Objective technical analyses, system architecture frameworks, and operational strategies written by
              practicing engineering leads.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs & Articles Grid */}
      <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 pb-8 border-b border-vensai-border/60">
            {insightCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedCat === cat
                    ? "bg-vensai-violet text-white shadow-violet-glow"
                    : "bg-vensai-card text-vensai-muted hover:text-vensai-text border border-vensai-border/70"
                }`}
                aria-pressed={selectedCat === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="p-7 rounded-2xl bg-vensai-card border border-vensai-border/80 hover:border-vensai-violet/80 transition-all hover:-translate-y-1 flex flex-col justify-between group shadow-card-glow"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-vensai-border/50 text-[10px] font-mono text-vensai-muted">
                    <span className="text-vensai-cyan font-bold">{article.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-vensai-violet" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h2 className="mt-4 text-lg sm:text-xl font-semibold text-vensai-text group-hover:text-vensai-violet transition-colors leading-snug">
                    <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-vensai-muted leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-vensai-border/40 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">{article.authorTitle}</span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="text-vensai-cyan group-hover:underline inline-flex items-center gap-1 font-bold"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
