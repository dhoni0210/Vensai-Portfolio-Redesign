import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-grid-pattern">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-vensai-card border border-vensai-border/80 shadow-2xl backdrop-blur-xl">
        <div className="w-14 h-14 rounded-2xl bg-vensai-violet/20 border border-vensai-violet/40 text-vensai-cyan mx-auto flex items-center justify-center">
          <Compass className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-vensai-violet">
            ERROR 404 · ROUTE NOT FOUND
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold text-vensai-text">Page Not Located</h1>
          <p className="text-xs sm:text-sm text-vensai-muted leading-relaxed">
            The requested destination is not available. Explore our practice floor or return to the main homepage.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-vensai-violet hover:bg-purple-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-vensai-text bg-vensai-surface hover:bg-vensai-elevated border border-vensai-border transition-colors"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
