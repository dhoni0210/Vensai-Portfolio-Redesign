import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insightsArticles, InsightArticle } from "@/data/insights";
import { companyConfig } from "@/data/company";
import { ArrowRight, ChevronRight, Clock, Calendar, BookOpen, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return insightsArticles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} — Vensai Insights`,
    description: article.summary,
    alternates: {
      canonical: `${companyConfig.productionCanonical}/insights/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | ${companyConfig.name}`,
      description: article.summary,
      url: `${companyConfig.productionCanonical}/insights/${article.slug}`,
      type: "article",
      publishedTime: article.publishedDate,
    },
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedDate,
    author: {
      "@type": "Organization",
      name: companyConfig.name,
      url: companyConfig.productionCanonical,
    },
    publisher: {
      "@type": "Organization",
      name: companyConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${companyConfig.productionCanonical}/brand/vensai-symbol.png`,
      },
    },
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-vensai-border/60 bg-vensai-surface/60 py-3 px-4 sm:px-6 text-xs font-mono">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-vensai-muted">
          <Link href="/" className="hover:text-vensai-text transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-vensai-border" />
          <Link href="/insights" className="hover:text-vensai-text transition-colors">
            Insights
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-vensai-border" />
          <span className="text-vensai-cyan truncate">{article.category}</span>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-16 bg-grid-pattern border-b border-vensai-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-vensai-card border border-vensai-border text-vensai-cyan font-bold uppercase">
              {article.category}
            </span>
            <span className="text-vensai-border">•</span>
            <span className="flex items-center gap-1.5 text-vensai-muted">
              <Clock className="w-3.5 h-3.5 text-vensai-violet" />
              <span>{article.readTime}</span>
            </span>
            <span className="text-vensai-border">•</span>
            <span className="text-slate-500">{article.authorTitle}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-vensai-text tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-vensai-muted leading-relaxed font-medium">
            {article.summary}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20 bg-vensai-bg border-b border-vensai-border/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Service Link */}
          <div className="mt-12 p-6 rounded-2xl bg-vensai-card border border-vensai-border space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-vensai-cyan font-bold">
              Related Practice Discipline
            </span>
            <h3 className="text-lg font-semibold text-vensai-text">
              Looking to implement similar architectures in your organization?
            </h3>
            <p className="text-xs text-vensai-muted leading-relaxed">
              Our multidisciplinary teams design and deploy custom enterprise platforms, cloud infrastructure, and AI
              solutions.
            </p>
            <div className="pt-2">
              <Link
                href={`/services/${article.relatedServiceSlug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vensai-violet hover:text-vensai-cyan transition-colors"
              >
                <span>Inspect Practice Discipline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Back to Insights */}
          <div className="mt-10 pt-6 border-t border-vensai-border/60">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-mono text-vensai-muted hover:text-vensai-text transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all insights</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
