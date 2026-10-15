"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { companyConfig } from "@/data/company";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled
          ? "bg-vensai-bg/95 backdrop-blur-md border-vensai-border/80 shadow-card-glow"
          : "bg-vensai-bg/85 backdrop-blur-sm border-vensai-border/40"
      }`}
    >
      {/* Top Banner (Full Left to Right) */}
      <div className="hidden lg:block border-b border-vensai-border/40 bg-vensai-surface/60 text-[11px] font-mono tracking-wider py-1.5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 w-full">
        <div className="w-full flex items-center justify-between text-vensai-muted">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-vensai-cyan animate-pulse" />
            <span className="text-vensai-text font-semibold uppercase">{companyConfig.tagline}</span>
            <span className="text-vensai-border">•</span>
            <span className="text-vensai-cyan font-semibold">BUILD | DESIGN | AUTOMATE | SCALE</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>{companyConfig.deliveryDescription}</span>
            <span className="text-vensai-border">•</span>
            <a
              href={`mailto:${companyConfig.email}`}
              className="text-vensai-cyan hover:text-vensai-electric transition-colors"
            >
              {companyConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar (Spanning Full Left to Right with Perfect Alignment) */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 h-18 lg:h-20 flex items-center justify-between gap-4">
        {/* Far Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-vensai-electric rounded-lg p-1 shrink-0"
          aria-label="Vensai Labs Home"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/brand/vensai-symbol.png"
              alt="Vensai Labs V Symbol"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="relative w-28 sm:w-32 h-6 sm:h-7">
              <Image
                src="/brand/vensai-wordmark-dark.png"
                alt="VENSAI LABS"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Center / Evenly Distributed: Desktop Navigation Links (Direct links, NO dropdowns) */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 text-[13px] xl:text-sm font-medium text-vensai-muted"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-lg transition-all duration-150 ${
                  isActive
                    ? "text-vensai-cyan bg-vensai-surface font-semibold shadow-inner"
                    : "hover:text-vensai-text hover:bg-vensai-surface/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Far Right: Desktop CTA Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 xl:px-5 xl:py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-vensai-electric hover:from-blue-500 hover:to-vensai-cyan rounded-lg shadow-blue-glow transition-all"
          >
            <span>Talk to Vensai</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Header Controls (< 1024px) */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <Link
            href="/contact"
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-vensai-electric rounded-lg shadow-sm"
          >
            Talk
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-vensai-border text-vensai-text hover:bg-vensai-surface focus:outline-none focus:ring-2 focus:ring-vensai-electric"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Fully responsive with neat alignment) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-vensai-border bg-vensai-surface/98 backdrop-blur-xl px-5 sm:px-8 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-1 text-sm font-medium">
            <Link
              href="/"
              className={`p-2.5 rounded-lg transition-colors ${
                pathname === "/"
                  ? "text-vensai-cyan bg-vensai-card font-semibold"
                  : "text-vensai-text hover:bg-vensai-card/60"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`p-2.5 rounded-lg transition-colors ${
                pathname.startsWith("/services")
                  ? "text-vensai-cyan bg-vensai-card font-semibold"
                  : "text-vensai-text hover:bg-vensai-card/60"
              }`}
            >
              Services (All 16 Disciplines)
            </Link>
            <Link
              href="/solutions"
              className={`p-2.5 rounded-lg transition-colors ${
                pathname.startsWith("/solutions")
                  ? "text-vensai-cyan bg-vensai-card font-semibold"
                  : "text-vensai-text hover:bg-vensai-card/60"
              }`}
            >
              Flagship Solutions
            </Link>
            <Link
              href="/industries"
              className={`p-2.5 rounded-lg transition-colors ${
                pathname.startsWith("/industries")
                  ? "text-vensai-cyan bg-vensai-card font-semibold"
                  : "text-vensai-text hover:bg-vensai-card/60"
              }`}
            >
              Industries (15 Sectors)
            </Link>
            <Link
              href="/technologies"
              className={`p-2.5 rounded-lg transition-colors ${
                pathname.startsWith("/technologies")
                  ? "text-vensai-cyan bg-vensai-card font-semibold"
                  : "text-vensai-text hover:bg-vensai-card/60"
              }`}
            >
              Technology Ecosystem (60+ Stacks)
            </Link>
            <Link
              href="/work"
              className={`p-2.5 rounded-lg transition-colors ${
                pathname.startsWith("/work")
                  ? "text-vensai-cyan bg-vensai-card font-semibold"
                  : "text-vensai-text hover:bg-vensai-card/60"
              }`}
            >
              Work & Case Studies
            </Link>
            <Link
              href="/about"
              className={`p-2.5 rounded-lg transition-colors ${
                pathname.startsWith("/about")
                  ? "text-vensai-cyan bg-vensai-card font-semibold"
                  : "text-vensai-text hover:bg-vensai-card/60"
              }`}
            >
              About Vensai Labs
            </Link>
            <Link
              href="/insights"
              className={`p-2.5 rounded-lg transition-colors ${
                pathname.startsWith("/insights")
                  ? "text-vensai-cyan bg-vensai-card font-semibold"
                  : "text-vensai-text hover:bg-vensai-card/60"
              }`}
            >
              Insights & Perspectives
            </Link>
            <Link
              href="/careers"
              className={`p-2.5 rounded-lg transition-colors ${
                pathname.startsWith("/careers")
                  ? "text-vensai-cyan bg-vensai-card font-semibold"
                  : "text-vensai-text hover:bg-vensai-card/60"
              }`}
            >
              Careers & Internships
            </Link>
            <Link
              href="/contact"
              className={`p-2.5 rounded-lg transition-colors ${
                pathname.startsWith("/contact")
                  ? "text-vensai-cyan bg-vensai-card font-semibold"
                  : "text-vensai-text hover:bg-vensai-card/60"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-4 border-t border-vensai-border/80 flex flex-col gap-2.5">
            <Link
              href="/contact"
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-vensai-electric rounded-lg shadow-blue-glow"
            >
              Talk to Vensai
            </Link>
            <Link
              href="/services"
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-vensai-text bg-vensai-card border border-vensai-border rounded-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
