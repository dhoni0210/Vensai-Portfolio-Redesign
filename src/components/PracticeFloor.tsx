"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/services";
import {
  CodeXml,
  Smartphone,
  Sparkles,
  Cloud,
  Shield,
  Building2,
  ShoppingBag,
  Network,
  Compass,
  Headphones,
  Palette,
  TrendingUp,
  Camera,
  Server,
  FileSpreadsheet,
  GraduationCap,
  ArrowRight,
  Search,
} from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  CodeXml,
  Smartphone,
  Sparkles,
  Cloud,
  Shield,
  Building2,
  ShoppingBag,
  Network,
  Compass,
  Headphones,
  Palette,
  TrendingUp,
  Camera,
  Server,
  FileSpreadsheet,
  GraduationCap,
};

export default function PracticeFloor({ showAllByDefault = true }: { showAllByDefault?: boolean }) {
  const [filter, setFilter] = useState<"ALL" | "BUILD" | "CONNECT" | "RUN" | "SHAPE">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPracticeId, setSelectedPracticeId] = useState<string>("software-product-engineering");

  const filteredServices = servicesData.filter((s) => {
    const matchesFilter = filter === "ALL" || s.category === filter;
    const matchesSearch =
      searchQuery === "" ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const activeService = servicesData.find((s) => s.id === selectedPracticeId) || servicesData[0];
  const ActiveIcon = iconMap[activeService.icon] || CodeXml;

  return (
    <section id="practice-floor" className="py-24 bg-vensai-surface/60 border-b border-vensai-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-vensai-border/60">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-vensai-violet mb-3">
              <span className="w-2 h-2 rounded-full bg-vensai-cyan inline-block animate-pulse" />
              <span>THE PRACTICE FLOOR · 16 DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-vensai-text tracking-tight">
              One studio. Every kind of work a serious company asks for.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-vensai-muted leading-relaxed">
              Software, cybersecurity, managed IT, KPO and BPO, internships, commerce, brand and support work together
              under one coordinated delivery model. Explore the disciplines and choose the capabilities that fit your
              business.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-vensai-text hover:text-vensai-cyan bg-vensai-card hover:bg-vensai-elevated border border-vensai-border rounded-lg transition-colors"
            >
              <span>Explore All 16 Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-vensai-cyan" />
            </Link>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "ALL", label: "Whole Floor", count: "16" },
              { id: "BUILD", label: "BUILD • Technology", count: "5" },
              { id: "CONNECT", label: "CONNECT • Enterprise", count: "3" },
              { id: "RUN", label: "RUN • Operations & IT", count: "5" },
              { id: "SHAPE", label: "SHAPE • Brand & Growth", count: "3" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                  filter === tab.id
                    ? "bg-vensai-violet text-white shadow-violet-glow"
                    : "bg-vensai-card text-vensai-muted hover:text-vensai-text border border-vensai-border/70"
                }`}
                aria-pressed={filter === tab.id}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-vensai-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search practices..."
              className="w-full bg-vensai-card border border-vensai-border rounded-lg pl-9 pr-3 py-1.5 text-xs text-vensai-text placeholder-vensai-muted focus:outline-none focus:border-vensai-violet"
              aria-label="Search practices"
            />
          </div>
        </div>

        {/* Directory Layout: Grid on Left + Expanded Inspector on Right */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Practice Cards List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[640px] overflow-y-auto pr-2">
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.icon] || CodeXml;
              const isSelected = service.id === selectedPracticeId;

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedPracticeId(service.id)}
                  className={`cursor-pointer p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "bg-vensai-card border-vensai-violet shadow-card-glow ring-1 ring-vensai-violet/50"
                      : "bg-vensai-surface hover:bg-vensai-card border-vensai-border/70 hover:border-vensai-border"
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedPracticeId(service.id)}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? "bg-vensai-violet text-white" : "bg-vensai-card text-vensai-cyan border border-vensai-border"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-[10px] text-vensai-muted">{service.order}</span>
                  </div>

                  <h3 className="mt-3 text-sm font-semibold text-vensai-text">{service.title}</h3>
                  <p className="mt-1 text-xs text-vensai-muted line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="mt-3 pt-2 border-t border-vensai-border/50 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-vensai-cyan">{service.category}</span>
                    <span className="text-vensai-violet group-hover:underline flex items-center gap-0.5">
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expanded Practice Inspector */}
          <div className="lg:col-span-5 bg-vensai-card border border-vensai-border rounded-2xl p-6 sm:p-8 sticky top-28 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-vensai-border/70">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-vensai-violet/20 border border-vensai-violet/40 text-vensai-violet flex items-center justify-center">
                  <ActiveIcon className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-vensai-cyan font-bold">
                    DISCIPLINE {activeService.order} · {activeService.category}
                  </span>
                  <h3 className="text-lg font-semibold text-vensai-text leading-tight">{activeService.title}</h3>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              <p className="text-vensai-text font-medium leading-relaxed">{activeService.headline}</p>
              <p className="text-vensai-muted leading-relaxed">{activeService.fullDescription}</p>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-vensai-cyan font-bold block mb-2">
                  Core Capabilities
                </span>
                <ul className="space-y-1.5">
                  {activeService.capabilities.slice(0, 4).map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-vensai-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-vensai-violet shrink-0 mt-1" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-vensai-cyan font-bold block mb-2">
                  Technologies Applied
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeService.technologies.slice(0, 6).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-vensai-surface border border-vensai-border text-[11px] font-mono text-vensai-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-vensai-border/70 flex items-center justify-between gap-3">
                <Link
                  href={`/services/${activeService.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 shadow-violet-glow transition-all"
                >
                  <span>Full Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/contact?service=${encodeURIComponent(activeService.title)}`}
                  className="px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-text bg-vensai-surface hover:bg-vensai-elevated border border-vensai-border transition-colors"
                >
                  Brief this Practice
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
