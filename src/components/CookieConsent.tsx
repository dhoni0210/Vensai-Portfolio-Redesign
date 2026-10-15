"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("vensai_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("vensai_cookie_consent", "all");
    setShowBanner(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("vensai_cookie_consent", "essential");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-5 rounded-2xl bg-vensai-card/95 border border-vensai-border/90 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-vensai-violet shrink-0 mt-0.5" />
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-vensai-text">Cookie & Privacy Preferences</h4>
          <p className="text-xs text-vensai-muted leading-relaxed">
            We use essential cookies to maintain system functionality. Performance and telemetry cookies are optional.
            Read our{" "}
            <Link href="/cookies" className="text-vensai-cyan hover:underline">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-vensai-cyan hover:underline">
              Privacy Notice
            </Link>
            .
          </p>
          <div className="pt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 transition-colors"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleEssentialOnly}
              className="px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-muted hover:text-vensai-text bg-vensai-surface hover:bg-vensai-elevated border border-vensai-border transition-colors"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={handleEssentialOnly}
          className="text-vensai-muted hover:text-vensai-text p-1"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
