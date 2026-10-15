"use client";

import React, { useState } from "react";
import Link from "next/link";
import { technologiesData, technologyCategories, TechCategory } from "@/data/technologies";
import { Search, ArrowRight } from "lucide-react";

interface TechEcosystemProps {
  isCompact?: boolean;
}

export default function TechEcosystem({ isCompact = false }: TechEcosystemProps) {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTechnologies = technologiesData.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (isCompact) {
      return matchesCategory && matchesSearch && (item.highlight || searchQuery.length > 0);
    }
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="technology-ecosystem" className="py-24 bg-vensai-bg border-b border-vensai-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-vensai-border/60">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan mb-3">
              <span className="w-2 h-2 rounded-full bg-vensai-violet inline-block" />
              <span>TECHNICAL CAPABILITIES · TECHNOLOGY ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-vensai-text tracking-tight">
              Engineered across modern and enterprise technology stacks.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-vensai-muted leading-relaxed">
              Our technical capabilities span modern application development, cloud, data, AI, enterprise systems and
              digital commerce. The right tools are selected according to architecture, integration, scalability and
              governance requirements.
            </p>
          </div>
          {isCompact && (
            <div className="shrink-0">
              <Link
                href="/technologies"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-vensai-text hover:text-vensai-cyan bg-vensai-card hover:bg-vensai-elevated border border-vensai-border rounded-lg transition-colors"
              >
                <span>View Full 60+ Directory</span>
                <ArrowRight className="w-3.5 h-3.5 text-vensai-cyan" />
              </Link>
            </div>
          )}
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-2 md:pb-0">
            {technologyCategories.map((cat) => (
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

          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-vensai-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by name..."
              className="w-full bg-vensai-card border border-vensai-border rounded-lg pl-9 pr-3 py-1.5 text-xs text-vensai-text placeholder-vensai-muted focus:outline-none focus:border-vensai-violet"
              aria-label="Filter technologies"
            />
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTechnologies.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-vensai-card border border-vensai-border/70 hover:border-vensai-violet/80 transition-all hover:-translate-y-0.5 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-vensai-text group-hover:text-vensai-violet transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-vensai-surface border border-vensai-border text-vensai-cyan">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-vensai-muted leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-vensai-border/40">
                <Link
                  href={`/services/${item.relatedServiceSlug}`}
                  className="text-[11px] font-mono text-vensai-muted group-hover:text-vensai-cyan inline-flex items-center gap-1 transition-colors"
                >
                  <span>Practice discipline</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTechnologies.length === 0 && (
          <div className="text-center py-12 text-vensai-muted text-xs font-mono">
            No technologies found matching "{searchQuery}" in category "{selectedCategory}".
          </div>
        )}
      </div>
    </section>
  );
}
