"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion() {
  const [openIds, setOpenIds] = useState<string[]>([faqsData[0].id]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faqs" className="py-24 bg-vensai-surface/40 border-b border-vensai-border/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-vensai-violet mb-3">
            <span className="w-2 h-2 rounded-full bg-vensai-cyan inline-block animate-pulse" />
            <span>CLARITY & GOVERNANCE · FAQS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-vensai-text tracking-tight">
            How Vensai Labs engages, delivers and supports.
          </h2>
          <p className="mt-3 text-sm text-vensai-muted">
            Direct answers on project management, talent coordination, confidentiality, and post-launch maintenance.
          </p>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-vensai-border/80 bg-vensai-card transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-vensai-violet"
                >
                  <span className="text-sm sm:text-base font-semibold text-vensai-text leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-vensai-cyan shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-vensai-muted leading-relaxed border-t border-vensai-border/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
