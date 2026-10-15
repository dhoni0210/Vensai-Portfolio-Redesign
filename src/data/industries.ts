export interface IndustryItem {
  id: string;
  order: string;
  slug: string;
  name: string;
  headline: string;
  description: string;
  capabilities: string[];
  relevantPractices: { name: string; slug: string }[];
  useCases: string[];
  deliverables: string[];
  icon: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "ecommerce-retail",
    order: "01",
    slug: "ecommerce-retail",
    name: "E-Commerce & Retail",
    headline: "Unified commerce platforms from storefront checkout to doorstep delivery.",
    description:
      "We build robust digital storefronts, multi-warehouse inventory systems, and automated customer operations for direct-to-consumer and omnichannel brands.",
    capabilities: [
      "Omnichannel storefront engineering with Shopify Plus, WooCommerce, and headless Next.js",
      "Real-time ERP and warehouse inventory synchronization",
      "Multi-currency payment gateways and local payment rail integrations",
      "Studio commercial product photography and catalog standardization",
      "Customer order support, return management, and live chat desks",
    ],
    relevantPractices: [
      { name: "E-Commerce Solutions", slug: "ecommerce-solutions" },
      { name: "Integrations & Automation", slug: "integrations-automation" },
      { name: "Creative Production & Studio", slug: "creative-production" },
    ],
    useCases: [
      "High-volume fashion and lifestyle direct-to-consumer commerce",
      "B2B wholesale ordering portals with tiered buyer pricing",
      "Multi-location brick-and-mortar retail inventory sync",
    ],
    deliverables: [
      "Custom responsive storefront theme",
      "Automated shipping and fulfillment integration",
      "Web-optimized visual catalog photography",
    ],
    icon: "ShoppingBag",
  },
  {
    id: "financial-services",
    order: "02",
    slug: "financial-services",
    name: "Financial Services",
    headline: "Secure, audit-ready financial portals, payment rails, and executive telemetry.",
    description:
      "We engineer resilient customer onboarding portals, payment gateways, and executive BI reporting with strict adherence to data security standards.",
    capabilities: [
      "High-security web portals and automated customer onboarding workflows",
      "Authorized vulnerability and penetration testing aligned with OWASP ASVS",
      "Executive BI dashboards and risk analytics with Power BI and Tableau",
      "Role-based access control, cryptographic key management, and audit trails",
      "Automated financial reconciliation and reporting pipelines",
    ],
    relevantPractices: [
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
      { name: "Cybersecurity & Hardening", slug: "cybersecurity" },
      { name: "Enterprise Technology & ERP", slug: "enterprise-technology" },
    ],
    useCases: [
      "KYC/AML verification and document ingestion pipelines",
      "Executive financial telemetry and multi-entity consolidation",
      "Authorized security assessments for lending and fintech platforms",
    ],
    deliverables: [
      "Penetration testing and vulnerability reports",
      "Encrypted customer portal applications",
      "Real-time executive risk dashboards",
    ],
    icon: "Landmark",
  },
  {
    id: "logistics-transportation",
    order: "03",
    slug: "logistics-transportation",
    name: "Logistics & Transportation",
    headline: "Fleet dispatching, driver mobile apps, and end-to-end shipment visibility.",
    description:
      "We design real-time logistics tracking platforms, mobile driver companions, carrier integrations, and operational helpdesks that keep freight moving.",
    capabilities: [
      "Fleet management, route planning, and dispatch scheduling software",
      "Offline-first driver mobile applications with GPS tracking",
      "Carrier API integrations, EDI data exchange, and shipment milestones",
      "Automated bill-of-lading and proof-of-delivery document processing",
      "24/7 operational helpdesk for carrier and shipment exception handling",
    ],
    relevantPractices: [
      { name: "Mobile Applications", slug: "mobile-applications" },
      { name: "Integrations & Automation", slug: "integrations-automation" },
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
    ],
    useCases: [
      "Last-mile courier tracking with automated customer WhatsApp updates",
      "Cross-border freight forwarding documentation pipelines",
      "Driver inspection checklists and telematics sync",
    ],
    deliverables: [
      "Cross-platform driver mobile app (iOS/Android)",
      "Central dispatch web console with live mapping",
      "EDI / API carrier integration gateway",
    ],
    icon: "Truck",
  },
  {
    id: "maritime",
    order: "04",
    slug: "maritime",
    name: "Maritime & Port Operations",
    headline: "Resilient shipboard software, terminal operations, and port logistics systems.",
    description:
      "We develop offline-capable vessel operations software, crew management tools, and port terminal integration systems built for low-connectivity marine environments.",
    capabilities: [
      "Vessel voyage planning, fuel logging, and port operations software",
      "Offline-first desktop and tablet applications for shipboard personnel",
      "Supply chain and maritime ERP integration (SAP, Odoo, custom)",
      "Vessel-to-shore satellite data sync and telemetry compression",
      "Maritime cybersecurity assessment and bridge network isolation",
    ],
    relevantPractices: [
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
      { name: "Enterprise Technology & ERP", slug: "enterprise-technology" },
      { name: "Cybersecurity & Hardening", slug: "cybersecurity" },
    ],
    useCases: [
      "Shipboard maintenance and safety compliance logging offline",
      "Vessel port turnaround scheduling and cargo tallying",
      "Maritime crew certification and rotational scheduling",
    ],
    deliverables: [
      "Low-bandwidth sync desktop software",
      "Port operational status dashboard",
      "Vessel security posture audit",
    ],
    icon: "Anchor",
  },
  {
    id: "healthcare",
    order: "05",
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    headline: "Confidential patient portals, clinic workflows, and compliant data systems.",
    description:
      "We build intuitive patient portals, appointment scheduling engines, medical record workflow tools, and security-hardened healthcare applications.",
    capabilities: [
      "Patient-facing web portals and appointment booking applications",
      "Teleconsultation scheduling and doctor availability engines",
      "Security hardening, data encryption at rest, and HIPAA/GDPR alignment",
      "Laboratory specimen tracking and diagnostic report delivery portals",
      "Dedicated technical support desk for medical staff and patient queries",
    ],
    relevantPractices: [
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
      { name: "Mobile Applications", slug: "mobile-applications" },
      { name: "Cybersecurity & Hardening", slug: "cybersecurity" },
    ],
    useCases: [
      "Multi-specialty clinic patient booking and prescription viewing",
      "Diagnostic lab result dispatch with SMS alerts",
      "Authorized vulnerability reviews for telehealth platforms",
    ],
    deliverables: [
      "HIPAA/GDPR-compliant patient web portal",
      "Mobile companion app for appointment reminders",
      "Role-based healthcare worker admin dashboard",
    ],
    icon: "HeartPulse",
  },
  {
    id: "hospitality",
    order: "06",
    slug: "hospitality",
    name: "Hospitality & Leisure",
    headline: "Bespoke booking engines, digital guest experiences, and property brand design.",
    description:
      "We craft high-converting reservation portals, guest mobile experiences, property management system (PMS) sync, and commercial photography for boutique resorts and hotel chains.",
    capabilities: [
      "Direct booking engines with payment and cancellation rule automation",
      "Guest mobile applications for digital keycard and room service ordering",
      "Property Management System (PMS) and channel manager integrations",
      "High-end commercial architecture and culinary photography",
      "Guest inquiry handling and multilingual customer reservation support",
    ],
    relevantPractices: [
      { name: "Brand & Digital Marketing", slug: "brand-digital-marketing" },
      { name: "Creative Production & Studio", slug: "creative-production" },
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
    ],
    useCases: [
      "Resort direct booking website with dynamic seasonal rate rules",
      "Guest concierge app for dining reservations and activities",
      "Luxury villa architectural and lifestyle photography asset library",
    ],
    deliverables: [
      "Direct reservation engine with payment checkout",
      "Editorial resort website with interactive room tour",
      "High-resolution architectural photography bundle",
    ],
    icon: "Utensils",
  },
  {
    id: "real-estate",
    order: "07",
    slug: "real-estate",
    name: "Real Estate & Infrastructure",
    headline: "Interactive property portals, CRM lead automation, and architectural visuals.",
    description:
      "We create immersive property discovery portals, broker CRM automation, visual floor plan showcases, and digital growth campaigns for developers and agencies.",
    capabilities: [
      "Property listing and interactive development showcases with filtering",
      "CRM integration with automated broker lead distribution and WhatsApp bots",
      "Commercial architectural photography, aerial drone assets, and 3D floorplans",
      "Search visibility (SEO) for regional real estate project keywords",
      "Investor portal for unit allotment, milestone payments, and agreements",
    ],
    relevantPractices: [
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
      { name: "Brand & Digital Marketing", slug: "brand-digital-marketing" },
      { name: "Marketing & Growth", slug: "marketing-growth" },
    ],
    useCases: [
      "Residential development marketing portal with unit selector",
      "Automated lead capture from Meta ads straight to Salesforce/HubSpot",
      "Commercial leasing tenant management portal",
    ],
    deliverables: [
      "Real estate project portal with interactive master plans",
      "Automated broker CRM lead distribution pipelines",
      "Comprehensive architectural visual asset package",
    ],
    icon: "Building",
  },
  {
    id: "manufacturing",
    order: "08",
    slug: "manufacturing",
    name: "Manufacturing & Heavy Industry",
    headline: "SAP/ERP extensions, shop floor telemetry, and dealer network automation.",
    description:
      "We build industrial dashboards, ERP extensions, dealer ordering portals, and computer-vision quality inspection pipelines for manufacturers.",
    capabilities: [
      "SAP BTP and Odoo ERP custom workflow extensions",
      "Production throughput, machine downtime, and inventory telemetry dashboards",
      "Dealer network portals for spare parts ordering and warranty claims",
      "Computer vision models for surface defect detection on production lines",
      "Desktop software for offline manufacturing plant floor workstations",
    ],
    relevantPractices: [
      { name: "Enterprise Technology & ERP", slug: "enterprise-technology" },
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
      { name: "AI & Machine Learning", slug: "ai-machine-learning" },
    ],
    useCases: [
      "Shop floor machine downtime logging and preventative alerts",
      "Multi-tier dealer ordering and invoice reconciliation system",
      "Automated quality inspection with camera feeds and edge models",
    ],
    deliverables: [
      "Executive production analytics dashboard in Power BI",
      "Custom SAP/Odoo side-by-side extension application",
      "Dealer ordering and spare parts catalog portal",
    ],
    icon: "Factory",
  },
  {
    id: "education",
    order: "09",
    slug: "education",
    name: "Education & Institutes",
    headline: "Custom learning management, student mobile apps, and institutional systems.",
    description:
      "Aligning with our identity as VenSai (Venture for Startups and Institutes), we engineer learning management systems, student apps, and student internships.",
    capabilities: [
      "Custom Learning Management Systems (LMS) and course delivery platforms",
      "Student mobile companion apps for schedules, grades, and attendance",
      "AI-assisted knowledge assistants for course syllabi and research libraries",
      "Automated student enrollment, fee collection, and verification workflows",
      "Hands-on technical internships and guided coding bootcamps",
    ],
    relevantPractices: [
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
      { name: "Mobile Applications", slug: "mobile-applications" },
      { name: "AI & Machine Learning", slug: "ai-machine-learning" },
    ],
    useCases: [
      "University student portal for exam registrations and grade transcripts",
      "Institute RAG assistant answering queries from academic papers",
      "Structured summer internship cohorts with code reviews",
    ],
    deliverables: [
      "Responsive learning portal with video streaming and quizzes",
      "Native Android / iOS campus mobile app",
      "Custom LLM academic research assistant",
    ],
    icon: "GraduationCap",
  },
  {
    id: "professional-services",
    order: "10",
    slug: "professional-services",
    name: "Professional Services",
    headline: "Client engagement portals, document automation, and corporate branding.",
    description:
      "We help law firms, accounting practices, consultancies, and engineering agencies streamline client deliverables, automate documents, and establish credible brand identities.",
    capabilities: [
      "Secure client collaboration portals with granular file permissions",
      "Automated document generation and contract lifecycle workflows",
      "Enterprise knowledge search across thousands of case files and briefs",
      "Executive brand identity, website design, and B2B digital positioning",
      "Time-tracking and billing platform integrations with accounting software",
    ],
    relevantPractices: [
      { name: "AI & Machine Learning", slug: "ai-machine-learning" },
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
      { name: "Brand & Digital Marketing", slug: "brand-digital-marketing" },
    ],
    useCases: [
      "Confidential client document room with electronic signature sign-off",
      "Internal AI research assistant searching archived legal opinions",
      "Corporate rebranding and responsive web experience",
    ],
    deliverables: [
      "Client collaboration portal with end-to-end encryption",
      "Internal document retrieval agent using vector embeddings",
      "Complete brand guideline and design system",
    ],
    icon: "Briefcase",
  },
  {
    id: "startups-technology",
    order: "11",
    slug: "startups-technology",
    name: "Startups & Technology",
    headline: "Rapid MVP engineering, scalable SaaS architectures, and dedicated pods.",
    description:
      "We partner with early-stage and venture-backed startups to validate feasibility, design world-class products, and engineer scalable software from pre-seed to Series A.",
    capabilities: [
      "Technical feasibility consulting and architecture roadmap formulation",
      "Rapid MVP prototyping for web and cross-platform mobile products",
      "Multi-tenant SaaS engineering with Stripe billing and auth",
      "Cloud topology setup with automated CI/CD and cost monitoring",
      "Dedicated engineering pods scaling velocity as funding grows",
    ],
    relevantPractices: [
      { name: "Consulting & R&D", slug: "consulting-r-and-d" },
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
      { name: "Mobile Applications", slug: "mobile-applications" },
    ],
    useCases: [
      "3-month MVP sprint from initial wireframes to production launch",
      "SaaS architecture migration to multitenant Kubernetes clusters",
      "Dedicated full-stack engineer allocation for product acceleration",
    ],
    deliverables: [
      "Production-ready MVP codebase with clean documentation",
      "Automated cloud infrastructure repository (Terraform)",
      "Interactive Figma prototypes and design system",
    ],
    icon: "Rocket",
  },
  {
    id: "smes-enterprises",
    order: "12",
    slug: "smes-enterprises",
    name: "SMEs & Mid-Market Enterprises",
    headline: "Digital transformation, legacy modernization, and managed IT operations.",
    description:
      "We assist growing mid-market enterprises in modernizing legacy internal software, automating cross-department handoffs, and managing day-to-day IT infrastructure.",
    capabilities: [
      "Legacy software refactoring and cloud migration with zero data loss",
      "Enterprise systems integration between ERP, CRM, and accounting tools",
      "Managed IT administration, endpoint security, and access controls",
      "Centralized executive reporting with automated Power BI dashboards",
      "Flexible dedicated team allocation to supplement internal IT staff",
    ],
    relevantPractices: [
      { name: "Enterprise Technology & ERP", slug: "enterprise-technology" },
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
      { name: "Integrations & Automation", slug: "integrations-automation" },
    ],
    useCases: [
      "Replacing legacy on-prem desktop tools with secure cloud web apps",
      "Automating inter-departmental purchase request approvals",
      "Managed infrastructure monitoring and quarterly security patching",
    ],
    deliverables: [
      "Modernized web application replacing legacy software",
      "Automated cross-department integration pipeline",
      "Comprehensive IT management runbook and SLA agreement",
    ],
    icon: "Layers",
  },
  {
    id: "communication-media",
    order: "13",
    slug: "communication-media",
    name: "Communication & Media",
    headline: "High-traffic content portals, campaign production, and audience analytics.",
    description:
      "We engineer ultra-fast content portals, digital media distribution tools, commercial visual assets, and audience analytics for publishers and media houses.",
    capabilities: [
      "Sub-second content delivery websites with Next.js edge caching",
      "Headless CMS implementation (Strapi, Sanity, WordPress REST)",
      "High-volume digital campaign visual production and photography",
      "Audience engagement telemetry, paywall integration, and newsletter sync",
      "Video streaming optimization and media asset management",
    ],
    relevantPractices: [
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
      { name: "Creative Production & Studio", slug: "creative-production" },
      { name: "Marketing & Growth", slug: "marketing-growth" },
    ],
    useCases: [
      "Editorial media publication handling millions of monthly page views",
      "Digital magazine subscription portal with Stripe billing",
      "Commercial product showcase photography for brand campaigns",
    ],
    deliverables: [
      "Next.js edge-rendered editorial portal with 95+ Lighthouse score",
      "Headless CMS editorial management configuration",
      "Campaign visual imagery pack",
    ],
    icon: "Tv",
  },
  {
    id: "insurance",
    order: "14",
    slug: "insurance",
    name: "Insurance & Underwriting",
    headline: "Automated claims intake, agent distribution portals, and document KPO.",
    description:
      "We engineer secure policyholder web apps, agent quote calculators, document processing workflows, and KPO back-office teams for insurers and brokers.",
    capabilities: [
      "Policyholder self-service portals and claims photo upload workflows",
      "Agent and broker quotation engines with underwriting rule logic",
      "High-volume document verification and OCR data extraction KPO services",
      "Strict data privacy, encryption, and authorized penetration testing",
      "Tier 1 customer care desk managing claims inquiries and policy updates",
    ],
    relevantPractices: [
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
      { name: "Cybersecurity & Hardening", slug: "cybersecurity" },
      { name: "KPO & BPO Services", slug: "kpo-bpo" },
    ],
    useCases: [
      "Mobile-friendly vehicle accident claim upload and triage portal",
      "Back-office medical claim document verification and reconciliation",
      "Broker commission and premium tracking dashboard",
    ],
    deliverables: [
      "Secure policyholder claim intake web application",
      "Document ingestion and OCR verification pipeline",
      "Security audit and penetration testing compliance report",
    ],
    icon: "ShieldAlert",
  },
  {
    id: "industrial-services",
    order: "15",
    slug: "industrial-services",
    name: "Industrial Services & Field Work",
    headline: "Mobile field service apps, offline telemetry, and equipment maintenance.",
    description:
      "We build robust technician mobile applications, offline asset inspection tools, parts catalog lookup, and IT infrastructure for field maintenance companies.",
    capabilities: [
      "Technician field-service mobile apps with offline job ticketing",
      "Equipment barcode/QR scanning and asset maintenance history lookup",
      "GPS route dispatching and digital customer sign-off capture",
      "Spare parts inventory sync between regional depots and service vans",
      "Centralized IT asset tracking and technician device management",
    ],
    relevantPractices: [
      { name: "Mobile Applications", slug: "mobile-applications" },
      { name: "Software & Product Engineering", slug: "software-product-engineering" },
      { name: "IT Management & Operations", slug: "it-management" },
    ],
    useCases: [
      "HVAC and industrial pump maintenance inspection app with photo capture",
      "Equipment warranty validation and spare parts ordering from the field",
      "Field technician tablet provisioning and remote device lock",
    ],
    deliverables: [
      "Offline-first field service mobile app (iOS/Android)",
      "Centralized service dispatch and work-order management web portal",
      "Depot inventory integration gateway",
    ],
    icon: "Wrench",
  },
];
