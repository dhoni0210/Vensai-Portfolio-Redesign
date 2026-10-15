export type CaseStudyStatus = "Concept Example" | "Internal Demonstration" | "Published Client Project";

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  order: string;
  status: CaseStudyStatus;
  statusBadgeColor: string;
  industry: string;
  discipline: string;
  filterCategory: "Software & Products" | "AI & Automation" | "Enterprise Systems" | "E-commerce" | "Cloud & Security" | "Brand & Creative";
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  technologies: string[];
  deliverables: string[];
  outcomesNote: string;
  metricsPlaceholder: { label: string; value: string; note: string }[];
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "enterprise-system-workflow-transformation",
    slug: "enterprise-system-workflow-transformation",
    order: "CASE STUDY 01",
    title: "Enterprise System & Workflow Transformation",
    status: "Concept Example",
    statusBadgeColor: "amber",
    industry: "Manufacturing & Heavy Industry",
    discipline: "Enterprise Systems & Integrations",
    filterCategory: "Enterprise Systems",
    summary:
      "A structured architecture framework demonstrating side-by-side SAP BTP extensions, automated dealer requisition workflows, and unified Power BI analytics.",
    challenge:
      "Legacy manufacturing operations frequently suffer from disparate spreadsheets for dealer orders, delayed inventory visibility, and manual data transcription into corporate ERPs, resulting in shipping delays and inaccurate financial forecasting.",
    approach:
      "We engineered a modern cloud-native side-by-side extension model using SAP BTP and Odoo. By decoupling the dealer ordering portal from core transactional databases via Kafka event queues, we ensured near-instant order acceptance without stressing legacy databases.",
    solution:
      "A responsive dealer ordering portal with real-time stock allocation, automated credit verification, and an executive Power BI telemetry dashboard reporting daily production throughput and shipment lead times.",
    technologies: ["SAP BTP", "SAP Integration Suite", "Odoo ERP", "Power BI", "Node.js", "PostgreSQL", "Apache Kafka"],
    deliverables: [
      "Custom responsive dealer ordering web portal",
      "Bi-directional ERP synchronization middleware",
      "Executive Power BI financial & operational dashboard",
      "Role-based approval workflow automation",
    ],
    outcomesNote:
      "Architectural benchmark: Modeled to handle 50,000+ daily order line items with sub-second response times and zero modification to core ERP tables.",
    metricsPlaceholder: [
      { label: "Order Ingestion Latency", value: "< 850ms", note: "Simulated load at 5k requests/min" },
      { label: "Manual Data Entry Steps", value: "Zero", note: "Automated via Kafka event middleware" },
      { label: "Core ERP Modifications", value: "0 lines", note: "100% cloud side-by-side extension" },
    ],
  },
  {
    id: "omnichannel-ecommerce-ecosystem",
    slug: "omnichannel-ecommerce-ecosystem",
    order: "CASE STUDY 02",
    title: "End-to-End Omnichannel E-Commerce Ecosystem",
    status: "Internal Demonstration",
    statusBadgeColor: "cyan",
    industry: "Retail & Consumer Goods",
    discipline: "E-Commerce Solutions & Creative",
    filterCategory: "E-commerce",
    summary:
      "An integrated direct-to-consumer commerce platform uniting Shopify Plus, studio catalog photography, multi-warehouse sync, and post-order support.",
    challenge:
      "Growing consumer brands struggle with fragmented tools: a storefront hosted in one place, product photography scattered across drives, inventory lagging behind orders, and support tickets lost in an unorganized inbox.",
    approach:
      "We designed an interconnected delivery architecture. Studio catalog packshots were color-profiled and compressed into next-gen AVIF/WebP assets, the storefront was custom-themed for sub-second Core Web Vitals, and webhooks were routed through an automated fulfillment handler.",
    solution:
      "A high-speed responsive Shopify Plus storefront integrated with multi-currency payment rails (Razorpay and Stripe), automated WhatsApp shipping notifications, and a Zendesk customer service desk with automated order lookup.",
    technologies: ["Shopify Plus", "Next.js", "Tailwind CSS", "Stripe", "Razorpay", "Zendesk", "WebP/AVIF Pipelines"],
    deliverables: [
      "Custom high-converting Shopify Plus storefront",
      "Catalog commercial photography production library",
      "Multi-warehouse inventory decrementing webhooks",
      "Customer support ticketing portal with SLA routing",
    ],
    outcomesNote:
      "Performance benchmark: Achieved 98+ Google PageSpeed score on mobile with instantaneous product filtering across 2,000+ SKUs.",
    metricsPlaceholder: [
      { label: "Mobile PageSpeed Score", value: "98/100", note: "Green across all Core Web Vitals" },
      { label: "SKU Catalog Capacity", value: "20,000+", note: "Instantaneous client-side filtering" },
      { label: "Checkout Drop-off Reduction", value: "Benchmark", note: "Optimized one-page express checkout" },
    ],
  },
  {
    id: "cloud-migration-security-ai-readiness",
    slug: "cloud-migration-security-ai-readiness",
    order: "CASE STUDY 03",
    title: "Cloud Migration, Security Hardening & AI Readiness",
    status: "Concept Example",
    statusBadgeColor: "violet",
    industry: "Financial & Professional Services",
    discipline: "Cloud, DevOps, Security & AI",
    filterCategory: "Cloud & Security",
    summary:
      "A defense-in-depth infrastructure modernization moving on-premises workloads to AWS, implementing OWASP hardening, and establishing private RAG pipelines.",
    challenge:
      "Regulated institutions managing sensitive financial and legal records face escalating infrastructure maintenance costs, unpatched vulnerabilities, and an urgent requirement to leverage AI without exposing customer data to public models.",
    approach:
      "We formulated a phased migration blueprint: containerizing microservices with Docker, provisioning private VPCs and Kubernetes clusters via Terraform, conducting authorized penetration testing, and indexing documents into isolated vector databases.",
    solution:
      "An enterprise-grade AWS environment with automated CI/CD pipelines, Prometheus/Grafana observability, OWASP ASVS-aligned security controls, and an on-premise private RAG assistant providing citation-backed answers from internal policy documents.",
    technologies: ["AWS", "Kubernetes", "Terraform", "Docker", "OWASP ASVS", "OpenAI / Anthropic Private Endpoints", "pgvector", "Prometheus"],
    deliverables: [
      "Declarative Terraform Infrastructure as Code repository",
      "OWASP ASVS compliance vulnerability remediation report",
      "Private RAG knowledge search microservice",
      "Automated CI/CD security scanning pipeline (SAST/SCA)",
    ],
    outcomesNote:
      "Compliance benchmark: Enforced zero-trust RBAC access controls, AES-256 data encryption at rest, and zero retention on all LLM queries.",
    metricsPlaceholder: [
      { label: "Infrastructure Automation", value: "100% IaC", note: "Reproducible Terraform configuration" },
      { label: "Security Verification", value: "OWASP ASVS", note: "Level 2 verification standards" },
      { label: "LLM Data Retention", value: "0% Retained", note: "Private enterprise API endpoints" },
    ],
  },
];
