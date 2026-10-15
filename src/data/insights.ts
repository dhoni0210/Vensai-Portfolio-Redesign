export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: "Software Engineering" | "AI & Automation" | "Cloud & DevOps" | "Cybersecurity" | "Enterprise Technology" | "E-commerce" | "Business Operations";
  publishedDate: string;
  readTime: string;
  summary: string;
  authorTitle: string;
  relatedServiceSlug: string;
  content: string[];
}

export const insightsArticles: InsightArticle[] = [
  {
    id: "evaluating-rag-vs-fine-tuning-enterprises",
    slug: "evaluating-rag-vs-fine-tuning-enterprises",
    title: "Evaluating RAG vs. Fine-Tuning: An Architectural Framework for Enterprise Knowledge",
    category: "AI & Automation",
    publishedDate: "2026-03-12",
    readTime: "7 min read",
    authorTitle: "Applied AI Practice Lead",
    relatedServiceSlug: "ai-machine-learning",
    summary:
      "Why fine-tuning often fails for factual enterprise question-answering, and how hybrid dense-sparse RAG architectures deliver verifiable citations and access control.",
    content: [
      "When organizations evaluate Large Language Models for internal documentation, legal archives, or customer support, the initial impulse is frequently to 'fine-tune' an open model on proprietary files. In practice, this approach introduces significant hazards: fine-tuned weights cannot reliably guarantee zero hallucination, cannot respect real-time role-based access permissions, and require expensive retraining every time a policy document is updated.",
      "Retrieval-Augmented Generation (RAG) decouples parametric memory (the model's linguistic reasoning) from non-parametric knowledge (your database of vectorized chunks). When an employee queries the system, the architecture first performs semantic search against an isolated vector store (such as pgvector or Pinecone) alongside traditional keyword BM25 scoring.",
      "The retrieved passages are passed into the prompt with strict contextual constraints: 'Answer strictly using only the provided context. If the answer cannot be determined from the excerpts, respond that information is unavailable.' This architecture guarantees citation attribution, eliminates stale training cycles, and ensures users only see data they are explicitly cleared to access.",
    ],
  },
  {
    id: "side-by-side-sap-btp-extensions",
    slug: "side-by-side-sap-btp-extensions",
    title: "Building Clean Side-by-Side Extensions with SAP BTP and Event-Driven Queues",
    category: "Enterprise Technology",
    publishedDate: "2026-02-18",
    readTime: "6 min read",
    authorTitle: "Enterprise Systems Practice Lead",
    relatedServiceSlug: "enterprise-technology",
    summary:
      "Preserving core ERP stability while deploying agile web interfaces and dealer workflows using modern cloud-native side-by-side patterns.",
    content: [
      "Historically, customizing SAP or enterprise ERP systems meant writing proprietary ABAP code directly into the transactional core. Over multiple fiscal quarters, these in-app modifications turn ERP upgrades into high-risk, multi-million-dollar migration nightmares.",
      "The modern architectural pattern recommended by SAP and enterprise architects is side-by-side extension via SAP Business Technology Platform (BTP). Instead of modifying core tables, modern cloud applications run in isolated containers, communicating with SAP via standard OData APIs and asynchronous event brokers such as Apache Kafka or SAP Event Mesh.",
      "When a dealer places an order on a custom mobile portal, the transaction is validated, recorded in an isolated Postgres store, and emitted as an event. The ERP ingests the order asynchronously during optimal batch processing windows. Core stability is preserved, and the digital experience remains lightning fast.",
    ],
  },
  {
    id: "defensive-cloud-security-iam-least-privilege",
    slug: "defensive-cloud-security-iam-least-privilege",
    title: "Defensive Cloud Security: Enforcing IAM Least-Privilege in Growing Engineering Teams",
    category: "Cybersecurity",
    publishedDate: "2026-01-24",
    readTime: "8 min read",
    authorTitle: "Security & Infrastructure Lead",
    relatedServiceSlug: "cybersecurity",
    summary:
      "A systematic approach to remediating wildcard permissions, stale access keys, and cross-account risks in AWS and Azure environments.",
    content: [
      "In early-stage and high-velocity engineering teams, Cloud IAM policies are often configured with wildcard privileges ('*') to avoid blocking deployment sprints. Over time, these permissive credentials accumulate, creating severe attack vectors where a compromised developer laptop or CI runner can exfiltrate entire production databases.",
      "Transitioning to least-privilege access requires automated telemetry. By analyzing CloudTrail or Azure Activity logs over a 90-day window, security engineers can identify the exact subset of API actions actually invoked by specific roles.",
      "Automated policy generation tools can then generate tightened IAM roles, replace long-lived static secret keys with OpenID Connect (OIDC) federation for GitHub Actions, and enforce Multi-Factor Authentication on all sensitive administrative actions.",
    ],
  },
  {
    id: "headless-vs-monolithic-commerce-architecture",
    slug: "headless-vs-monolithic-commerce-architecture",
    title: "Headless vs. Monolithic Shopify: Choosing the Right Commerce Architecture",
    category: "E-commerce",
    publishedDate: "2025-11-30",
    readTime: "5 min read",
    authorTitle: "E-Commerce Practice Lead",
    relatedServiceSlug: "ecommerce-solutions",
    summary:
      "When does a brand actually benefit from a Next.js headless storefront, and when does standard Shopify Plus Liquid remain the superior business choice?",
    content: [
      "The commerce industry has seen widespread evangelism for 'headless commerce', promising infinite design freedom and sub-second page transitions. However, decoupling the frontend from Shopify introduces maintenance overhead: third-party app plugins that inject UI snippets must be custom-coded, checkout redirects require careful handling, and hosting infrastructure must be maintained.",
      "Headless architectures shine when a brand requires complex multi-brand digital experiences, interactive 3D product customizers, international regional routing, or tight integration with offline enterprise inventory systems that traditional Liquid templates cannot handle cleanly.",
      "Conversely, for single-brand retailers focused on fast launch, standard app ecosystem compatibility, and minimal developer maintenance, a well-optimized native Shopify Plus theme using WebP imagery and clean Liquid sections often provides 95% of the performance at a fraction of the operational cost.",
    ],
  },
  {
    id: "zero-downtime-postgres-migrations",
    slug: "zero-downtime-postgres-migrations",
    title: "Zero-Downtime PostgreSQL Schema Migrations in High-Throughput Web Applications",
    category: "Software Engineering",
    publishedDate: "2025-10-14",
    readTime: "6 min read",
    authorTitle: "Software & Architecture Lead",
    relatedServiceSlug: "software-product-engineering",
    summary:
      "Avoiding table locks, transaction deadlocks, and dropped connections when altering high-volume database tables in production.",
    content: [
      "Running 'ALTER TABLE users ADD COLUMN' or adding an unindexed foreign key to a production table with millions of rows can hold an exclusive table lock (AccessExclusiveLock). In high-concurrency applications, this queues up all incoming read and write requests, quickly exhausting the connection pool and taking the entire application offline.",
      "Zero-downtime migrations follow the expand-contract pattern: first, add the new column as nullable with no default value (which takes microseconds in modern Postgres); second, write code that populates both old and new columns; third, backfill historical records in small batches; and fourth, switch readers and deprecate the old column.",
      "Furthermore, all index creation in production should explicitly use the 'CREATE INDEX CONCURRENTLY' statement to allow concurrent inserts and updates without blocking user traffic.",
    ],
  },
];
