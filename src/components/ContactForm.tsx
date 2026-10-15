"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";
import { engagementModelsData } from "@/data/engagementModels";
import { companyConfig } from "@/data/company";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    description: "",
    company: "",
    phone: "",
    industry: "",
    engagementModel: "",
    budget: "",
    timeline: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Auto-populate from URL query params (e.g. ?service=... or ?model=...)
  useEffect(() => {
    if (!searchParams) return;
    const initialService = searchParams.get("service");
    const initialModel = searchParams.get("model");

    if (initialService) {
      // Find matching service
      const matched = servicesData.find(
        (s) =>
          s.title.toLowerCase() === initialService.toLowerCase() ||
          s.slug.toLowerCase() === initialService.toLowerCase()
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, service: matched.title }));
      } else {
        setFormData((prev) => ({ ...prev, service: initialService }));
      }
    }

    if (initialModel) {
      const matchedModel = engagementModelsData.find(
        (m) =>
          m.shortTitle.toLowerCase() === initialModel.toLowerCase() ||
          m.id.toLowerCase() === initialModel.toLowerCase()
      );
      if (matchedModel) {
        setFormData((prev) => ({ ...prev, engagementModel: matchedModel.shortTitle }));
      }
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    // Client-side quick check
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      setIsSubmitting(false);
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid work email address.");
      setIsSubmitting(false);
      return;
    }
    if (!formData.service) {
      setErrorMessage("Please select a service interest.");
      setIsSubmitting(false);
      return;
    }
    if (!formData.description.trim() || formData.description.trim().length < 10) {
      setErrorMessage("Please provide a project description of at least 10 characters.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMessage(data.message);
        setFormData({
          fullName: "",
          email: "",
          service: "",
          description: "",
          company: "",
          phone: "",
          industry: "",
          engagementModel: "",
          budget: "",
          timeline: "",
          honeypot: "",
        });
      } else {
        setErrorMessage(data.error || "Submission failed. Please verify your entries.");
      }
    } catch (err: any) {
      setErrorMessage("Network error. Please try again or reach out directly to " + companyConfig.email);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-vensai-card border border-vensai-border/80 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
      {successMessage ? (
        <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-semibold text-vensai-text">Inquiry Dispatched Successfully</h3>
          <p className="text-sm text-vensai-muted max-w-md mx-auto leading-relaxed">{successMessage}</p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setSuccessMessage(null)}
              className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-text bg-vensai-surface hover:bg-vensai-elevated border border-vensai-border transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Anti-spam honeypot */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Row 1: Full Name & Work Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-vensai-text mb-1.5">
                Full Name <span className="text-vensai-violet">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Alex Morgan"
                required
                className="w-full bg-vensai-surface border border-vensai-border rounded-lg px-4 py-2.5 text-sm text-vensai-text placeholder-vensai-muted focus:outline-none focus:border-vensai-violet transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-vensai-text mb-1.5">
                Work Email <span className="text-vensai-violet">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                required
                className="w-full bg-vensai-surface border border-vensai-border rounded-lg px-4 py-2.5 text-sm text-vensai-text placeholder-vensai-muted focus:outline-none focus:border-vensai-violet transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Company & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-vensai-muted mb-1.5">
                Company / Organization (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="w-full bg-vensai-surface border border-vensai-border rounded-lg px-4 py-2.5 text-sm text-vensai-text placeholder-vensai-muted focus:outline-none focus:border-vensai-violet transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-vensai-muted mb-1.5">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-vensai-surface border border-vensai-border rounded-lg px-4 py-2.5 text-sm text-vensai-text placeholder-vensai-muted focus:outline-none focus:border-vensai-violet transition-colors"
              />
            </div>
          </div>

          {/* Row 3: Primary Service Interest & Engagement Model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-vensai-text mb-1.5">
                Primary Service Discipline <span className="text-vensai-violet">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-vensai-surface border border-vensai-border rounded-lg px-4 py-2.5 text-sm text-vensai-text focus:outline-none focus:border-vensai-violet transition-colors"
              >
                <option value="">Select a discipline...</option>
                {servicesData.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.order}. {s.title} ({s.category})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="engagementModel" className="block text-xs font-mono uppercase tracking-wider text-vensai-muted mb-1.5">
                Preferred Engagement Model (Optional)
              </label>
              <select
                id="engagementModel"
                name="engagementModel"
                value={formData.engagementModel}
                onChange={handleChange}
                className="w-full bg-vensai-surface border border-vensai-border rounded-lg px-4 py-2.5 text-sm text-vensai-text focus:outline-none focus:border-vensai-violet transition-colors"
              >
                <option value="">Select an arrangement...</option>
                {engagementModelsData.map((m) => (
                  <option key={m.id} value={m.shortTitle}>
                    {m.order}: {m.shortTitle}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Industry & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="industry" className="block text-xs font-mono uppercase tracking-wider text-vensai-muted mb-1.5">
                Industry Sector (Optional)
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full bg-vensai-surface border border-vensai-border rounded-lg px-4 py-2.5 text-sm text-vensai-text focus:outline-none focus:border-vensai-violet transition-colors"
              >
                <option value="">Select sector...</option>
                {industriesData.map((ind) => (
                  <option key={ind.id} value={ind.name}>
                    {ind.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-wider text-vensai-muted mb-1.5">
                Expected Timeline (Optional)
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full bg-vensai-surface border border-vensai-border rounded-lg px-4 py-2.5 text-sm text-vensai-text focus:outline-none focus:border-vensai-violet transition-colors"
              >
                <option value="">Select timeframe...</option>
                <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                <option value="1 - 3 months">1 – 3 months</option>
                <option value="3 - 6 months">3 – 6 months</option>
                <option value="Ongoing / Retainer">Ongoing / Retainer</option>
                <option value="Exploring Feasibility">Exploring Feasibility</option>
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-vensai-text mb-1.5">
              Project Description & Requirements <span className="text-vensai-violet">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us what you're looking to build, modernize, or support. Outline current challenges, target platforms, or technical expectations."
              required
              className="w-full bg-vensai-surface border border-vensai-border rounded-lg px-4 py-2.5 text-sm text-vensai-text placeholder-vensai-muted focus:outline-none focus:border-vensai-violet transition-colors resize-y"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-vensai-muted">
              Handled under client confidentiality. Inquiries route directly to senior technical leads.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 disabled:opacity-60 shadow-violet-glow transition-all"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Dispatch Requirement</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
