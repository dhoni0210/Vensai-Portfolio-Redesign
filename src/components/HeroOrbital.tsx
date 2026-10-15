"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CodeXml,
  Palette,
  Sparkles,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function HeroOrbital() {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      title: "BUILD",
      subtitle: "Software, Mobile & Cloud",
      detail: "Custom web apps, iOS/Android/Flutter, and AWS/Azure infrastructure.",
      icon: CodeXml,
      accent: "text-vensai-cyan",
      borderActive: "border-vensai-cyan shadow-cyan-glow",
      link: "/services/software-product-engineering",
    },
    {
      title: "DESIGN",
      subtitle: "Brand, UI/UX & Studio",
      detail: "Brand identities, enterprise design systems, and commercial photography.",
      icon: Palette,
      accent: "text-vensai-electric",
      borderActive: "border-vensai-electric shadow-blue-glow",
      link: "/services/brand-digital-marketing",
    },
    {
      title: "AUTOMATE",
      subtitle: "AI, RAG & Enterprise ERP",
      detail: "Applied LLM workflows, SAP BTP extensions, and Power BI telemetry.",
      icon: Sparkles,
      accent: "text-vensai-cyan",
      borderActive: "border-vensai-cyan shadow-cyan-glow",
      link: "/services/ai-machine-learning",
    },
    {
      title: "SCALE",
      subtitle: "Managed Care & Operations",
      detail: "24/7 SLA maintenance, cybersecurity audits, and talent cohorts.",
      icon: TrendingUp,
      accent: "text-vensai-electric",
      borderActive: "border-vensai-electric shadow-blue-glow",
      link: "/services/ecommerce-solutions",
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* 1. Luminous Ambient Aura (Causes the whole card to highlight from the dark page) */}
      <div
        className="absolute -inset-2 bg-gradient-to-r from-blue-600/40 via-vensai-cyan/35 to-blue-500/25 rounded-3xl blur-2xl -z-10 pointer-events-none animate-pulse"
        aria-hidden="true"
      />

      {/* 2. Sleek Highlighted Card Container with Luminous Gradient Border */}
      <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-b from-vensai-cyan/70 via-blue-600/40 to-vensai-border/80 shadow-card-glow">
        <div className="relative rounded-[23px] bg-vensai-surface/95 backdrop-blur-2xl p-6 sm:p-7 overflow-hidden border border-white/5">
          {/* Subtle Top Status Badge */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-vensai-border/60">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vensai-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-vensai-cyan" />
              </span>
              <span className="font-mono text-[10px] font-bold text-vensai-cyan tracking-wider uppercase">
                FREELANCE TALENT. REAL SOLUTIONS.
              </span>
            </div>

            <div className="text-[10px] font-mono text-slate-400 bg-vensai-bg/90 px-2.5 py-0.5 rounded-full border border-vensai-border/70">
              EST. 2022 • HCTPL
            </div>
          </div>

          {/* 3. The Centerpiece: Vensai Logo Showcase with Light & Elegant Animation */}
          <div className="relative flex flex-col items-center justify-center py-4">
            {/* Light Concentric Ripple Wave Animation */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 320 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="160"
                cy="90"
                r="65"
                stroke="#00D2FF"
                className="animate-ripple-1"
              />
              <circle
                cx="160"
                cy="90"
                r="65"
                stroke="#0A84FF"
                className="animate-ripple-2"
              />
            </svg>

            {/* Glowing Logo Pedestal with Subtle Breathing Animation */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-b from-vensai-card/90 to-vensai-bg/95 border border-vensai-cyan/50 p-4 flex items-center justify-center shadow-blue-glow group transition-transform duration-300 hover:scale-105">
                {/* Soft breathing radial background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-vensai-cyan/20 to-blue-600/10 blur-md pointer-events-none" />

                {/* The Emblem with Luminous Glow */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 animate-emblem-breathe">
                  <Image
                    src="/brand/vensai-symbol.png"
                    alt="Vensai Labs"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Wordmark & Brand Concept Title */}
              <div className="mt-4 text-center">
                <div className="relative w-36 sm:w-44 h-7 sm:h-8 mx-auto">
                  <Image
                    src="/brand/vensai-wordmark-dark.png"
                    alt="VENSAI LABS"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-xs text-vensai-cyan font-mono font-medium tracking-wide mt-1">
                  Venture for Startups and Institutes
                </p>
                <p className="text-[11px] text-vensai-muted mt-0.5 max-w-xs mx-auto">
                  Technology, talent and operational capabilities under central project management.
                </p>
              </div>
            </div>
          </div>

          {/* 4. The 4 Framework Pillars (Light, Clean, Non-Overloaded 2x2 Interactive Grid) */}
          <div className="mt-5 pt-4 border-t border-vensai-border/60">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest text-center mb-2.5">
              CORE CAPABILITY FRAMEWORK
            </div>

            <div className="grid grid-cols-2 gap-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = selectedPillar === idx;
                return (
                  <button
                    key={pillar.title}
                    type="button"
                    onClick={() => setSelectedPillar(idx)}
                    className={`p-2.5 rounded-xl text-left transition-all border ${
                      isSelected
                        ? `${pillar.borderActive} bg-vensai-card/90`
                        : "border-vensai-border/70 bg-vensai-bg/60 hover:border-vensai-border hover:bg-vensai-card/50"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Icon className={`w-3.5 h-3.5 ${pillar.accent}`} />
                      <span className="text-xs font-bold text-vensai-text font-mono">
                        {pillar.title}
                      </span>
                    </div>
                    <div className="text-[10px] text-vensai-muted mt-1 truncate">
                      {pillar.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Pillar Dynamic Highlight */}
            <div className="mt-2.5 p-3 rounded-xl bg-vensai-bg/80 border border-vensai-border/70 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[10px] font-mono font-semibold text-vensai-cyan uppercase">
                  {pillars[selectedPillar].title} Discipline
                </div>
                <p className="text-[11px] text-vensai-text truncate mt-0.5">
                  {pillars[selectedPillar].detail}
                </p>
              </div>

              <Link
                href={pillars[selectedPillar].link}
                className="shrink-0 p-1.5 rounded-lg bg-vensai-surface hover:bg-vensai-card border border-vensai-border text-vensai-cyan hover:text-white transition-colors"
                aria-label={`Inspect ${pillars[selectedPillar].title}`}
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 5. Minimalist Credibility & Action Bar */}
          <div className="mt-4 pt-3.5 border-t border-vensai-border/50 flex items-center justify-between text-[11px] font-mono text-vensai-muted">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-vensai-cyan" />
              <span>16 Practices</span>
              <span className="text-vensai-border">•</span>
              <span>1 Accountable Partner</span>
            </div>

            <Link
              href="/contact"
              className="text-xs font-semibold text-vensai-cyan hover:text-vensai-electric hover:underline flex items-center gap-1"
            >
              <span>Connect</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
