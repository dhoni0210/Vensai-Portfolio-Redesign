export interface TechnologyItem {
  name: string;
  category: string;
  description: string;
  relatedServiceSlug: string;
  highlight?: boolean;
}

export const technologyCategories = [
  "All",
  "Frontend",
  "Backend",
  "Mobile",
  "Cloud",
  "DevOps",
  "AI / ML",
  "Data",
  "Enterprise",
  "E-commerce",
  "Databases",
  "Security",
  "Analytics",
] as const;

export type TechCategory = typeof technologyCategories[number];

export const technologiesData: TechnologyItem[] = [
  // Frontend
  { name: "React", category: "Frontend", description: "Component-driven interfaces and single-page applications.", relatedServiceSlug: "software-product-engineering", highlight: true },
  { name: "Next.js", category: "Frontend", description: "Server rendering, App Router and SEO-oriented web platforms.", relatedServiceSlug: "software-product-engineering", highlight: true },
  { name: "TypeScript", category: "Frontend", description: "Type-safe frontend and full-stack engineering.", relatedServiceSlug: "software-product-engineering", highlight: true },
  { name: "Tailwind CSS", category: "Frontend", description: "Scalable design-token styling and responsive utility systems.", relatedServiceSlug: "brand-digital-marketing" },
  { name: "Vue.js / Nuxt", category: "Frontend", description: "Reactive and modular web interfaces and lightweight portals.", relatedServiceSlug: "software-product-engineering" },
  { name: "Angular", category: "Frontend", description: "Structured enterprise frontends with dependency injection.", relatedServiceSlug: "software-product-engineering" },
  { name: "HTML5 / CSS3 / WCAG", category: "Frontend", description: "Semantic and accessible web standards meeting WCAG 2.2 AA.", relatedServiceSlug: "brand-digital-marketing" },

  // Backend
  { name: "Node.js / NestJS", category: "Backend", description: "APIs, microservices, and asynchronous event processors.", relatedServiceSlug: "software-product-engineering", highlight: true },
  { name: "Python / FastAPI / Django", category: "Backend", description: "High-performance backend services, data pipelines, and AI APIs.", relatedServiceSlug: "software-product-engineering", highlight: true },
  { name: ".NET Core / C#", category: "Backend", description: "Enterprise backends, Windows desktop applications, and services.", relatedServiceSlug: "software-product-engineering" },
  { name: "Java / Spring Boot", category: "Backend", description: "Robust enterprise services with high reliability.", relatedServiceSlug: "software-product-engineering" },
  { name: "Go", category: "Backend", description: "Concurrent systems, high-throughput microservices, and middleware.", relatedServiceSlug: "software-product-engineering" },
  { name: "PHP / Laravel", category: "Backend", description: "Rapid web backends and custom commerce platforms.", relatedServiceSlug: "software-product-engineering" },
  { name: "REST / GraphQL / gRPC", category: "Backend", description: "API and service integration patterns with strict typed schemas.", relatedServiceSlug: "integrations-automation", highlight: true },

  // Mobile
  { name: "Flutter", category: "Mobile", description: "Cross-platform mobile applications for iOS and Android.", relatedServiceSlug: "mobile-applications", highlight: true },
  { name: "React Native", category: "Mobile", description: "Native cross-platform mobile apps using React ecosystems.", relatedServiceSlug: "mobile-applications", highlight: true },
  { name: "Kotlin for Android", category: "Mobile", description: "Native Android development with Jetpack Compose.", relatedServiceSlug: "mobile-applications" },
  { name: "Swift for iOS", category: "Mobile", description: "Native iOS development with SwiftUI and Combine.", relatedServiceSlug: "mobile-applications" },
  { name: "Firebase", category: "Mobile", description: "Authentication, Firestore real-time sync, and push notifications.", relatedServiceSlug: "mobile-applications" },
  { name: "App Store & Play Console", category: "Mobile", description: "Release pipelines, beta tracks, and compliance approval.", relatedServiceSlug: "mobile-applications" },

  // Cloud
  { name: "Amazon Web Services (AWS)", category: "Cloud", description: "Scalable cloud topologies across EC2, ECS, Lambda, and RDS.", relatedServiceSlug: "cloud-devops-infrastructure", highlight: true },
  { name: "Microsoft Azure", category: "Cloud", description: "Enterprise cloud infrastructure, Azure AD, and App Services.", relatedServiceSlug: "cloud-devops-infrastructure", highlight: true },
  { name: "Google Cloud Platform (GCP)", category: "Cloud", description: "GKE Kubernetes, BigQuery data analytics, and Cloud Run.", relatedServiceSlug: "cloud-devops-infrastructure" },
  { name: "Cloudflare", category: "Cloud", description: "Edge DNS, CDN caching, DDoS mitigation, and Workers.", relatedServiceSlug: "cloud-devops-infrastructure" },
  { name: "Vercel", category: "Cloud", description: "Managed edge deployment with sub-second global invalidation.", relatedServiceSlug: "cloud-devops-infrastructure" },

  // DevOps
  { name: "Docker", category: "DevOps", description: "Reproducible application containerization.", relatedServiceSlug: "cloud-devops-infrastructure", highlight: true },
  { name: "Kubernetes", category: "DevOps", description: "Container orchestration, auto-scaling, and rolling updates.", relatedServiceSlug: "cloud-devops-infrastructure", highlight: true },
  { name: "Terraform", category: "DevOps", description: "Declarative Infrastructure as Code (IaC) provisioning.", relatedServiceSlug: "cloud-devops-infrastructure" },
  { name: "GitHub Actions", category: "DevOps", description: "Automated CI/CD test and deployment workflows.", relatedServiceSlug: "cloud-devops-infrastructure" },
  { name: "GitLab CI", category: "DevOps", description: "Enterprise continuous integration pipelines.", relatedServiceSlug: "cloud-devops-infrastructure" },
  { name: "Prometheus & Grafana", category: "DevOps", description: "Metrics collection and real-time observability dashboards.", relatedServiceSlug: "cloud-devops-infrastructure" },
  { name: "Linux & Nginx", category: "DevOps", description: "High-performance reverse proxies and hardened server administration.", relatedServiceSlug: "cloud-devops-infrastructure" },

  // AI / ML
  { name: "OpenAI APIs", category: "AI / ML", description: "GPT-4o, reasoning models, embeddings, and structured outputs.", relatedServiceSlug: "ai-machine-learning", highlight: true },
  { name: "Anthropic APIs", category: "AI / ML", description: "Claude 3.5 Sonnet integrations for analysis and long-context processing.", relatedServiceSlug: "ai-machine-learning", highlight: true },
  { name: "Gemini APIs", category: "AI / ML", description: "Multimodal Gemini models for document and vision processing.", relatedServiceSlug: "ai-machine-learning" },
  { name: "RAG Architectures", category: "AI / ML", description: "Retrieval-Augmented Generation for grounded factual answering.", relatedServiceSlug: "ai-machine-learning", highlight: true },
  { name: "LangChain & LlamaIndex", category: "AI / ML", description: "Orchestration frameworks for vector indexing and LLM tools.", relatedServiceSlug: "ai-machine-learning" },
  { name: "PyTorch", category: "AI / ML", description: "Deep learning framework for custom model development.", relatedServiceSlug: "ai-machine-learning" },
  { name: "scikit-learn", category: "AI / ML", description: "Classical machine learning for classification and tabular forecasting.", relatedServiceSlug: "ai-machine-learning" },
  { name: "OpenCV", category: "AI / ML", description: "Computer vision and real-time video defect inspection.", relatedServiceSlug: "ai-machine-learning" },
  { name: "MLOps & Monitoring", category: "AI / ML", description: "Model evaluation benchmarks, drift detection, and latency tracking.", relatedServiceSlug: "ai-machine-learning" },

  // Data
  { name: "Apache Airflow", category: "Data", description: "Programmatic workflow orchestration and DAG pipeline scheduling.", relatedServiceSlug: "integrations-automation" },
  { name: "Prefect", category: "Data", description: "Modern data workflow orchestration with automated retries.", relatedServiceSlug: "integrations-automation" },
  { name: "Snowflake", category: "Data", description: "Cloud data warehousing for large-scale enterprise analytics.", relatedServiceSlug: "enterprise-technology" },
  { name: "BigQuery", category: "Data", description: "Serverless, highly scalable multi-cloud data warehouse.", relatedServiceSlug: "enterprise-technology" },
  { name: "Azure Data Factory", category: "Data", description: "Cloud-based ETL and data integration service.", relatedServiceSlug: "enterprise-technology" },
  { name: "Apache Kafka", category: "Data", description: "Distributed event streaming for high-throughput pipelines.", relatedServiceSlug: "integrations-automation", highlight: true },
  { name: "RabbitMQ", category: "Data", description: "Reliable message queuing and asynchronous worker routing.", relatedServiceSlug: "integrations-automation" },

  // Enterprise
  { name: "SAP BTP", category: "Enterprise", description: "SAP Business Technology Platform side-by-side extension development.", relatedServiceSlug: "enterprise-technology", highlight: true },
  { name: "SAP Integration Suite", category: "Enterprise", description: "Enterprise integration scenarios connecting on-prem and cloud systems.", relatedServiceSlug: "enterprise-technology" },
  { name: "Odoo ERP", category: "Enterprise", description: "Custom module engineering, accounting, inventory, and CRM setup.", relatedServiceSlug: "enterprise-technology", highlight: true },
  { name: "Salesforce", category: "Enterprise", description: "CRM customization, Apex integration, and sales workflow automation.", relatedServiceSlug: "enterprise-technology" },
  { name: "HubSpot", category: "Enterprise", description: "Marketing and CRM API synchronization and lead routing.", relatedServiceSlug: "marketing-growth" },
  { name: "Zoho Suite", category: "Enterprise", description: "Zoho CRM, Books, and Inventory customization.", relatedServiceSlug: "enterprise-technology" },
  { name: "Microsoft Power Platform", category: "Enterprise", description: "Power Apps, Power Automate, and Dataverse enterprise solutions.", relatedServiceSlug: "enterprise-technology" },

  // E-commerce
  { name: "Shopify / Shopify Plus", category: "E-commerce", description: "Enterprise theme customization, Liquid templates, and private app APIs.", relatedServiceSlug: "ecommerce-solutions", highlight: true },
  { name: "WooCommerce", category: "E-commerce", description: "Scalable WordPress commerce, custom plugins, and gateway hooks.", relatedServiceSlug: "ecommerce-solutions" },
  { name: "BigCommerce", category: "E-commerce", description: "High-volume commerce platforms and B2B portal integrations.", relatedServiceSlug: "ecommerce-solutions" },
  { name: "Odoo Commerce", category: "E-commerce", description: "Connected e-commerce directly linked to Odoo manufacturing/WMS.", relatedServiceSlug: "ecommerce-solutions" },
  { name: "Headless Commerce", category: "E-commerce", description: "Next.js frontends powered by Commerce layer or custom microservices.", relatedServiceSlug: "ecommerce-solutions" },
  { name: "Stripe", category: "E-commerce", description: "International payment gateway, recurring subscriptions, and invoicing.", relatedServiceSlug: "ecommerce-solutions", highlight: true },
  { name: "Razorpay", category: "E-commerce", description: "Indian domestic payment gateway, UPI auto-pay, and netbanking.", relatedServiceSlug: "ecommerce-solutions", highlight: true },
  { name: "PayPal", category: "E-commerce", description: "Global consumer payments and checkout integration.", relatedServiceSlug: "ecommerce-solutions" },

  // Databases
  { name: "PostgreSQL", category: "Databases", description: "Relational database with advanced JSONB, indexing, and ACID reliability.", relatedServiceSlug: "software-product-engineering", highlight: true },
  { name: "MySQL / MariaDB", category: "Databases", description: "Proven relational database for web applications and commerce.", relatedServiceSlug: "software-product-engineering" },
  { name: "Microsoft SQL Server", category: "Databases", description: "Enterprise relational database for corporate ERP integrations.", relatedServiceSlug: "enterprise-technology" },
  { name: "MongoDB", category: "Databases", description: "Document database for flexible schemas and rapid prototyping.", relatedServiceSlug: "software-product-engineering" },
  { name: "Redis", category: "Databases", description: "In-memory cache, session store, and distributed lock manager.", relatedServiceSlug: "software-product-engineering", highlight: true },
  { name: "pgvector", category: "Databases", description: "Vector similarity search extension for PostgreSQL.", relatedServiceSlug: "ai-machine-learning", highlight: true },
  { name: "Pinecone", category: "Databases", description: "Managed cloud vector database for AI search and embeddings.", relatedServiceSlug: "ai-machine-learning" },
  { name: "Qdrant", category: "Databases", description: "Fast, open-source vector similarity search engine.", relatedServiceSlug: "ai-machine-learning" },

  // Security
  { name: "OWASP ASVS", category: "Security", description: "Application Security Verification Standard benchmarks.", relatedServiceSlug: "cybersecurity", highlight: true },
  { name: "OWASP Top 10", category: "Security", description: "Defensive remediation against the top web application vulnerabilities.", relatedServiceSlug: "cybersecurity", highlight: true },
  { name: "Authorized Penetration Testing", category: "Security", description: "Strictly scoped, legally authorized offensive security verification.", relatedServiceSlug: "cybersecurity" },
  { name: "SAST & SCA", category: "Security", description: "Static code analysis and software supply-chain dependency scanning.", relatedServiceSlug: "cybersecurity" },
  { name: "DAST", category: "Security", description: "Dynamic application security scanning of running endpoints.", relatedServiceSlug: "cybersecurity" },
  { name: "Cloud Security Assessments", category: "Security", description: "IAM least-privilege audits and cloud misconfiguration reviews.", relatedServiceSlug: "cybersecurity" },
  { name: "OAuth 2.0 & OIDC", category: "Security", description: "Industry-standard authentication and authorization protocols.", relatedServiceSlug: "cybersecurity" },
  { name: "RBAC", category: "Security", description: "Granular role-based access control models for multi-user software.", relatedServiceSlug: "cybersecurity" },

  // Analytics
  { name: "Microsoft Power BI", category: "Analytics", description: "Interactive business analytics dashboards and enterprise reporting.", relatedServiceSlug: "enterprise-technology", highlight: true },
  { name: "Tableau", category: "Analytics", description: "Visual data exploration and executive operational dashboards.", relatedServiceSlug: "enterprise-technology" },
  { name: "Google Analytics 4 (GA4)", category: "Analytics", description: "Event-based web and mobile app telemetry.", relatedServiceSlug: "marketing-growth" },
  { name: "Google Tag Manager (GTM)", category: "Analytics", description: "Tag management and client/server event routing.", relatedServiceSlug: "marketing-growth" },
  { name: "Looker Studio", category: "Analytics", description: "Custom client reporting dashboards connected to live data sources.", relatedServiceSlug: "marketing-growth" },
];
