"use client";

import React, { useState } from "react";
import { deliveryLifecycleData } from "@/data/deliveryLifecycle";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function DeliveryLifecycleSection() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStage = deliveryLifecycleData[activeStep];

  return (
    <section className="py-24 bg-vensai-bg border-b border-vensai-border/80 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-vensai-violet/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-vensai-cyan mb-3">
            <span className="w-2 h-2 rounded-full bg-vensai-violet inline-block" />
            <span>OUR APPROACH · END-TO-END DELIVERY LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-vensai-text tracking-tight">
            From requirement to reality.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-vensai-muted leading-relaxed">
            Every engagement follows a structured delivery framework that helps validate feasibility, align
            stakeholders, manage execution and plan for support from the beginning.
          </p>
        </div>

        {/* Desktop Connected 8-Stage Timeline Navigation */}
        <div className="mt-12 hidden md:block">
          <div className="relative flex items-center justify-between pb-8 border-b border-vensai-border/60">
            {/* Connecting Track Line */}
            <div className="absolute top-5 left-6 right-6 h-0.5 bg-vensai-border/80 -z-1" />
            <div
              className="absolute top-5 left-6 h-0.5 bg-gradient-to-r from-vensai-violet to-vensai-cyan transition-all duration-300 -z-1"
              style={{ width: `${(activeStep / (deliveryLifecycleData.length - 1)) * 95}%` }}
            />

            {deliveryLifecycleData.map((stage, idx) => {
              const isActive = idx === activeStep;
              const isPassed = idx < activeStep;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group relative focus:outline-none"
                  aria-pressed={isActive}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-vensai-violet text-white shadow-violet-glow scale-110 ring-2 ring-vensai-cyan"
                        : isPassed
                        ? "bg-vensai-card text-vensai-cyan border border-vensai-cyan/50"
                        : "bg-vensai-surface text-vensai-muted border border-vensai-border group-hover:border-vensai-muted"
                    }`}
                  >
                    {stage.step}
                  </div>
                  <span
                    className={`mt-2 text-[11px] font-mono uppercase tracking-wider font-semibold transition-colors ${
                      isActive ? "text-vensai-cyan" : "text-vensai-muted group-hover:text-vensai-text"
                    }`}
                  >
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Showcase */}
          <div className="mt-8 bg-vensai-card border border-vensai-border rounded-2xl p-8 shadow-card-glow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vensai-surface border border-vensai-border text-xs font-mono text-vensai-cyan">
                <span>STAGE {currentStage.step} OF 08</span>
                <span>•</span>
                <span className="text-vensai-text">{currentStage.name}</span>
              </div>
              <h3 className="text-2xl font-semibold text-vensai-text">{currentStage.title}</h3>
              <p className="text-sm text-vensai-text font-medium leading-relaxed">{currentStage.tagline}</p>
              <p className="text-xs text-vensai-muted leading-relaxed">{currentStage.description}</p>

              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-vensai-cyan font-bold block mb-2">
                  Key Stage Activities
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {currentStage.keyActivities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2 text-vensai-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-vensai-violet shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-vensai-surface border border-vensai-border/80 rounded-xl p-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-vensai-violet font-bold block">
                Stage Deliverables & Verification
              </span>
              <ul className="space-y-2 text-xs">
                {currentStage.outputs.map((out, i) => (
                  <li key={i} className="flex items-center gap-2.5 p-2 rounded-lg bg-vensai-card border border-vensai-border/60 text-vensai-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-vensai-cyan" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex items-center justify-between text-xs font-mono">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded border border-vensai-border disabled:opacity-40 hover:bg-vensai-elevated transition-colors"
                >
                  Previous
                </button>
                <span className="text-vensai-muted">
                  {currentStage.step} / {deliveryLifecycleData.length < 10 ? `0${deliveryLifecycleData.length}` : deliveryLifecycleData.length}
                </span>
                <button
                  type="button"
                  disabled={activeStep === deliveryLifecycleData.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(deliveryLifecycleData.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded bg-vensai-violet text-white disabled:opacity-40 hover:bg-purple-600 transition-colors"
                >
                  Next Stage
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="mt-10 md:hidden space-y-4">
          {deliveryLifecycleData.map((stage) => (
            <div key={stage.step} className="p-5 rounded-xl bg-vensai-card border border-vensai-border/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-vensai-surface border border-vensai-border text-xs font-mono font-bold text-vensai-cyan">
                  {stage.step} — {stage.name}
                </span>
              </div>
              <h4 className="text-base font-semibold text-vensai-text">{stage.title}</h4>
              <p className="text-xs text-vensai-muted leading-relaxed">{stage.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
