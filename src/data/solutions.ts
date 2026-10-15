export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  overview: string;
  architectureComponents: {
    title: string;
    description: string;
    items: string[];
  }[];
  deliverables: string[];
  workflowStages: {
    step: string;
    title: string;
    description: string;
  }[];
  relatedServices: {
    title: string;
    slug: string;
  }[];
  faqs: { question: string; answer: string }[];
}

export const solutionsData: SolutionItem[] = [
  {
    id: "commerce-ecosystems",
    slug: "commerce-ecosystems",
    title: "Commerce Ecosystems Hub",
    badge: "Flagship Solution 01",
    tagline: "Unify storefront, inventory, studio photography, fulfillment, and post-sale care.",
    description:
      "A complete commerce delivery system that connects your online storefront (Shopify Plus, WooCommerce, or headless) with physical warehouse inventory, studio catalog photography, automated shipping labels, and responsive customer helpdesks.",
    overview:
      "Modern e-commerce requires far more than launching a theme. High-performing retailers need synchronized inventories across sales channels, studio-quality product imagery that renders instantly, automated payment reconciliation, carrier logistics integrations, and proactive order-support operations. Vensai coordinates all of these disciplines under a unified delivery framework.",
    architectureComponents: [
      {
        title: "Storefront & Checkout Engineering",
        description: "High-speed responsive storefronts engineered for conversion and low bounce rates.",
        items: ["Shopify Plus or headless Next.js frontend", "Multi-currency checkout with local payment gateways (Razorpay, Stripe, PayPal)", "Mobile-first layout optimized for sub-second Core Web Vitals"],
      },
      {
        title: "Catalog Production & Visual Assets",
        description: "Studio-shot commercial imagery and standardized asset catalogs.",
        items: ["High-resolution pure-white and contextual product photography", "Lossless WebP/AVIF automated asset pipelines", "Standardized SKU visual hierarchy across catalogs"],
      },
      {
        title: "Inventory & ERP Orchestration",
        description: "Bi-directional data flows between digital channels and physical warehouses.",
        items: ["Real-time inventory decrementing across stores and marketplaces", "Automated low-stock threshold alerts to suppliers", "Integration with Odoo ERP, SAP, or custom WMS systems"],
      },
      {
        title: "Logistics & Customer Operations",
        description: "From order placement to porch delivery and post-delivery satisfaction.",
        items: ["Automated shipping label generation and courier dispatch APIs", "Real-time tracking links sent via WhatsApp and SMS", "Tier 1 and Tier 2 customer service desk managing returns and inquiries"],
      },
    ],
    deliverables: [
      "Production-ready e-commerce store with custom theme components",
      "Studio photography asset package formatted for web speed",
      "Middleware API layer connecting store to ERP/WMS",
      "Carrier tracking and automated notification webhooks",
      "Operational SOP manual for customer support and order triage",
    ],
    workflowStages: [
      { step: "01", title: "Commerce Audit & Scoping", description: "Review existing catalogs, payment rails, warehouse bottlenecks, and target user journeys." },
      { step: "02", title: "Visual Catalog Production", description: "Shoot, color-grade, and export web-optimized commercial product photography." },
      { step: "03", title: "Storefront & Integration Engineering", description: "Build theme, integrate payment gateways, and connect ERP/inventory webhooks." },
      { step: "04", title: "End-to-End Test Orders", description: "Execute synthetic transactions across multiple payment methods and fulfillment routes." },
      { step: "05", title: "Launch & Support Onboarding", description: "Perform live cutover and train order-management and customer-care teams." },
    ],
    relatedServices: [
      { title: "E-Commerce Solutions", slug: "ecommerce-solutions" },
      { title: "Creative Production & Studio", slug: "creative-production" },
      { title: "Customer & Operational Support", slug: "customer-operational-support" },
      { title: "Integrations & Automation", slug: "integrations-automation" },
    ],
    faqs: [
      {
        question: "Can we migrate our catalog and customer history from Magento or WooCommerce to Shopify?",
        answer: "Yes. We execute sanitized data migrations including customer passwords, order histories, SEO redirects, and product metadata without data loss.",
      },
      {
        question: "Does Vensai handle physical returns management?",
        answer: "We configure the automated returns portal, generate courier return labels, and handle customer communication while your warehouse inspects incoming parcels.",
      },
    ],
  },
  {
    id: "feasibility-technical-audits",
    slug: "feasibility-technical-audits",
    title: "Feasibility & Technical Audits",
    badge: "Flagship Solution 02",
    tagline: "Rigorous technical validation, architectural audits, and PoC prototyping before capital commitment.",
    description:
      "A structured consulting engagement designed for executives, founders, and technical leaders who need independent verification of novel software architectures, AI feasibility, codebase health, security vulnerabilities, and deployment roadmaps.",
    overview:
      "Embarking on a complex software build or legacy refactor without independent technical diligence carries severe financial and operational risk. Our Feasibility & Technical Audits practice examines your proposed architecture, data structures, regulatory constraints, third-party dependencies, and estimated total cost of ownership. We deliver actionable blueprints that de-risk the build.",
    architectureComponents: [
      {
        title: "Architectural & Scalability Review",
        description: "Assessing system topology against future throughput, latency, and resilience demands.",
        items: ["Microservices vs modular monolith trade-off analysis", "Database partitioning, indexing, and connection-pool profiling", "Single points of failure and cloud redundancy evaluation"],
      },
      {
        title: "Codebase & Technical Debt Audit",
        description: "Static and dynamic inspection of existing software repositories.",
        items: ["Code maintainability, dependency obsolescence, and cyclomatic complexity", "Security vulnerability scanning (SAST/SCA) and license compliance", "Automated test coverage analysis and refactoring prioritization"],
      },
      {
        title: "AI & Data Feasibility Assessment",
        description: "Evaluating whether proprietary data can support reliable intelligence models.",
        items: ["Data completeness, structuring, and privacy boundary review", "RAG vector pipeline accuracy and token consumption modeling", "Latency benchmarks comparing edge vs API inference"],
      },
      {
        title: "Cost & Delivery Roadmapping",
        description: "Clear timelines, team compositions, and infrastructure budget projections.",
        items: ["Estimated cloud hosting costs (AWS/Azure/GCP) across 3 years", "Phased milestone roadmap with sprint-by-sprint deliverable gates", "Risk mitigation matrix for key technical dependencies"],
      },
    ],
    deliverables: [
      "Comprehensive Technical Feasibility & Architecture Audit Document (PDF)",
      "Target-State Architecture Blueprint diagrams (C4 model / UML)",
      "Security and technical debt remediation backlog prioritized by severity",
      "Functional Proof-of-Concept (PoC) codebase validating critical assumptions",
      "Executive presentation summarizing findings and investment recommendations",
    ],
    workflowStages: [
      { step: "01", title: "Stakeholder Discovery", description: "Interview business sponsors, lead architects, and domain experts to catalog constraints." },
      { step: "02", title: "Repository & Infrastructure Inspection", description: "Deep inspection of code repositories, cloud topologies, and database schemas." },
      { step: "03", title: "PoC Prototyping (if applicable)", description: "Build isolated micro-benchmarks or model pipelines to test uncertain variables." },
      { step: "04", title: "Synthesis & Threat Modeling", description: "Aggregate architectural findings, cost projections, and security risk factors." },
      { step: "05", title: "Final Debrief & Roadmap", description: "Deliver the written audit report and conduct an interactive architecture debrief." },
    ],
    relatedServices: [
      { title: "Consulting & R&D", slug: "consulting-r-and-d" },
      { title: "Cybersecurity & Hardening", slug: "cybersecurity" },
      { title: "Cloud & DevOps Infrastructure", slug: "cloud-devops-infrastructure" },
      { title: "AI & Machine Learning", slug: "ai-machine-learning" },
    ],
    faqs: [
      {
        question: "How long does a typical technical audit take?",
        answer: "A standard codebase and architecture audit typically takes 2 to 3 weeks depending on the number of services and repositories involved.",
      },
      {
        question: "Do we have to commit to development with Vensai after the audit?",
        answer: "No. The audit report and PoC code are completely standalone deliverables with full client IP ownership. You may execute with an internal team or third-party vendor.",
      },
    ],
  },
  {
    id: "post-deployment-managed-care",
    slug: "post-deployment-managed-care",
    title: "Post-Deployment Managed Care",
    badge: "Flagship Solution 03",
    tagline: "Proactive uptime monitoring, security patching, Tier 1–3 triage, and continuous feature evolution.",
    description:
      "A coordinated lifecycle care arrangement tailored to mission-critical applications and cloud systems. We provide continuous performance monitoring, scheduled security patches, rapid bug resolution, and operational helpdesks so your systems stay reliable as your business scales.",
    overview:
      "Production launch is never the finish line—it is the beginning of real operational demands. Servers encounter memory leaks, operating systems require CVE patching, third-party APIs update their schemas, and end users submit tickets. Post-Deployment Managed Care replaces reactive panic with structured, SLA-governed support and preventive maintenance.",
    architectureComponents: [
      {
        title: "24/7 Telemetry & Health Monitoring",
        description: "Continuous automated observability across applications and cloud infrastructure.",
        items: ["Prometheus metrics, Grafana dashboards, and synthetic HTTP pings", "Error tracking via Sentry with automated alert escalation to on-call leads", "Database slow-query profiling and disk-space threshold alarms"],
      },
      {
        title: "Preventive Maintenance & Security Patching",
        description: "Keeping all software dependencies and server kernels up to date.",
        items: ["Monthly scheduled vulnerability scans and library patch cycles", "SSL/TLS certificate auto-renewal and DNS health checks", "Automated daily encrypted database backups with periodic restore testing"],
      },
      {
        title: "Multi-Tiered Technical Support",
        description: "Structured triage ensuring user issues reach the right engineers fast.",
        items: ["Tier 1: User assistance, access provisioning, and FAQ support", "Tier 2: Data corrections, configuration adjustments, and log diagnostics", "Tier 3: Code-level bug fixes, regression hotfixes, and patch deployments"],
      },
      {
        title: "Incremental Feature Enhancements",
        description: "Continuous evolution based on user analytics and stakeholder feedback.",
        items: ["Dedicated monthly engineering hours for UI tweaks and micro-features", "Bi-weekly sprint planning and backlog grooming", "Staging environment verification before production release"],
      },
    ],
    deliverables: [
      "Custom SLA agreement defining response and resolution target windows",
      "Dedicated client ticketing portal and integrated Slack/Teams support bridge",
      "Monthly Infrastructure Health & Incident Summary reports",
      "Quarterly disaster recovery drill simulation results",
      "Continuous CI/CD pipeline maintenance and container security scans",
    ],
    workflowStages: [
      { step: "01", title: "Handover & Knowledge Transfer", description: "Audit production environments, document credential vaults, and verify runbooks." },
      { step: "02", title: "Monitoring & Alert Baseline", description: "Install telemetry agents, configure alert thresholds, and establish on-call rotations." },
      { step: "03", title: "Ticketing Desk Onboarding", description: "Set up client portal, integrate support channels, and publish escalation paths." },
      { step: "04", title: "Active Governance & Patching", description: "Execute ongoing bug triage, preventive updates, and sprint enhancements." },
      { step: "05", title: "Monthly Operational Reviews", description: "Meet with stakeholders to review uptime statistics, open tickets, and roadmap." },
    ],
    relatedServices: [
      { title: "Customer & Operational Support", slug: "customer-operational-support" },
      { title: "IT Management & Operations", slug: "it-management" },
      { title: "Cloud & DevOps Infrastructure", slug: "cloud-devops-infrastructure" },
      { title: "Cybersecurity & Hardening", slug: "cybersecurity" },
    ],
    faqs: [
      {
        question: "Can Vensai support an application that was built by another agency?",
        answer: "Yes. We conduct a preliminary codebase and infrastructure audit to verify code health and establish runbooks before onboarding the system into managed care.",
      },
      {
        question: "What SLA response times do you support?",
        answer: "SLA response times are tailored to the contract, ranging from business-hour response windows to rapid critical-incident response with guaranteed triage.",
      },
    ],
  },
];
