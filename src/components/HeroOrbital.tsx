"use client";

import React from "react";
import Image from "next/image";

export default function HeroOrbital() {
  return (
    <div className="relative w-full max-w-md mx-auto select-none px-2 sm:px-0">
      {/* 1. Luminous Ambient Aura */}
      <div
        className="absolute -inset-3 bg-gradient-to-r from-blue-600/40 via-vensai-cyan/35 to-blue-500/25 rounded-3xl blur-2xl -z-10 pointer-events-none animate-pulse"
        aria-hidden="true"
      />

      {/* 2. Sleek Highlighted Card Container with Luminous Gradient Border */}
      <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-b from-vensai-cyan/70 via-blue-600/40 to-vensai-border/80 shadow-card-glow">
        <div className="relative rounded-[23px] bg-vensai-surface/95 backdrop-blur-2xl px-6 py-10 sm:px-10 sm:py-14 overflow-hidden border border-white/5 flex flex-col items-center justify-center text-center">
          
          {/* 3. Concentric Subtle Energy Ripple Waves in Logo Cyan and Electric Blue */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="180"
              cy="130"
              r="68"
              stroke="#00D2FF"
              className="animate-ripple-1"
            />
            <circle
              cx="180"
              cy="130"
              r="68"
              stroke="#0A84FF"
              className="animate-ripple-2"
            />
          </svg>

          {/* 4. Logo Centerpiece with Radiant Breathing Glow */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Glowing Glass Pedestal */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-b from-vensai-card/90 to-vensai-bg/95 border-2 border-vensai-cyan/50 p-5 flex items-center justify-center shadow-blue-glow group transition-transform duration-500 hover:scale-105">
              {/* Radial backlight */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/25 via-vensai-cyan/25 to-blue-600/15 blur-lg pointer-events-none" />

              {/* Breathing Emblem */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 animate-emblem-breathe">
                <Image
                  src="/brand/vensai-symbol.png"
                  alt="Vensai Labs Emblem"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Wordmark */}
            <div className="mt-7 sm:mt-8 relative w-44 sm:w-52 h-8 sm:h-9">
              <Image
                src="/brand/vensai-wordmark-dark.png"
                alt="VENSAI LABS"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Vensai Abbreviation Expansion (No extra clutter or details) */}
            <div className="mt-4 space-y-1">
              <div className="text-base sm:text-lg font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-vensai-cyan via-blue-400 to-vensai-electric tracking-wide">
                VenSai
              </div>
              <p className="text-xs sm:text-sm font-mono font-medium text-slate-300 tracking-wider uppercase">
                Venture for Startups and Institutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
