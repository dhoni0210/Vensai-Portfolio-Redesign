export interface DeliveryStage {
  step: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  keyActivities: string[];
  outputs: string[];
}

export const deliveryLifecycleData: DeliveryStage[] = [
  {
    step: "01",
    name: "DISCOVER",
    title: "Discovery & Alignment",
    tagline: "Understand business goals, operational problems, stakeholders and requirements.",
    description:
      "Every successful technical engagement begins by immersing in your operating model. We catalog your current software pain points, interview stakeholders, and document the measurable business outcomes required from the solution.",
    keyActivities: [
      "Stakeholder and end-user interviews",
      "Current-state system and process mapping",
      "Business requirement specification cataloging",
      "Success criteria and KPI definition",
    ],
    outputs: ["Discovery Summary Document", "Functional Requirements Catalog", "Project Alignment Charter"],
  },
  {
    step: "02",
    name: "RESEARCH",
    title: "Technical & Market Research",
    tagline: "Examine available approaches, constraints, market context and technical options.",
    description:
      "We research relevant technology stacks, evaluate open-source frameworks versus managed commercial APIs, study regulatory requirements, and benchmark industry patterns to avoid costly dead-ends.",
    keyActivities: [
      "Technology landscape trade-off evaluation",
      "API and third-party dependency vetting",
      "Regulatory and compliance baseline review",
      "Comparative architectural benchmarking",
    ],
    outputs: ["Technical Options Matrix", "Compliance & Constraint Register", "Technology Recommendations Brief"],
  },
  {
    step: "03",
    name: "ASSESS",
    title: "Feasibility & Risk Assessment",
    tagline: "Evaluate feasibility, risks, dependencies and possible architectures.",
    description:
      "Before writing production code, we assess architectural feasibility, estimate cloud infrastructure costs, identify data bottlenecks, and stress-test risky assumptions with rapid micro-prototypes.",
    keyActivities: [
      "System scalability and throughput modeling",
      "Data model feasibility and integration checks",
      "Risk identification and mitigation planning",
      "Preliminary infrastructure cost projection",
    ],
    outputs: ["Feasibility Report", "Risk Mitigation Matrix", "Proof-of-Concept Prototype (if required)"],
  },
  {
    step: "04",
    name: "PLAN",
    title: "Architecture & Sprint Planning",
    tagline: "Define scope, deliverables, milestones, responsibilities and success criteria.",
    description:
      "We produce concrete system architecture diagrams, database schemas, API specs, interactive UI wireframes, and sprint-by-sprint release schedules with explicit acceptance criteria.",
    keyActivities: [
      "Target-state system architecture blueprints",
      "UI/UX wireframing and design token specification",
      "Database schema and API endpoint contract definition",
      "Sprint roadmap and resource allocation schedule",
    ],
    outputs: ["Architecture Specification Blueprint", "Interactive Figma Prototype", "Sprint Delivery Plan"],
  },
  {
    step: "05",
    name: "BUILD",
    title: "Engineering & Quality Assurance",
    tagline: "Design and develop the solution with appropriate engineering and quality reviews.",
    description:
      "Our full-time engineers execute in disciplined sprints. Code is written with strict typing, automated test suites, peer code reviews, continuous security scanning, and bi-weekly demo checkpoints.",
    keyActivities: [
      "Full-stack software engineering and API development",
      "Automated unit, integration, and regression testing",
      "Code review gates and static security analysis (SAST)",
      "Bi-weekly sprint progress demonstrations",
    ],
    outputs: ["Production-ready Code Repository", "Automated Test Suite", "Sprint Review Release Notes"],
  },
  {
    step: "06",
    name: "DEPLOY",
    title: "Staging, Verification & Release",
    tagline: "Prepare the production environment, validate the release and support handover.",
    description:
      "We provision hardened production infrastructure via Terraform, conduct end-to-end user acceptance testing (UAT) on staging, execute cutover checklists, and oversee zero-downtime production release.",
    keyActivities: [
      "Infrastructure as Code provisioning (Terraform)",
      "Staging environment validation and UAT sign-off",
      "Data migration and DNS cutover execution",
      "Comprehensive runbook and operational handover",
    ],
    outputs: ["Live Production Deployment", "Disaster Recovery Runbook", "Operational Handover Sign-off"],
  },
  {
    step: "07",
    name: "SUPPORT",
    title: "Lifecycle Care & Incident Triage",
    tagline: "Provide agreed maintenance, troubleshooting and operational assistance.",
    description:
      "We stay accountable post-launch. We provide continuous uptime monitoring, Tier 1–3 technical issue triage, scheduled security updates, and routine database backups under clear SLA commitments.",
    keyActivities: [
      "24/7 telemetry and health monitoring",
      "Tier 1–3 technical support ticketing and triage",
      "Scheduled library patching and security updates",
      "Periodic database backup and recovery drills",
    ],
    outputs: ["Configured Support Ticketing Portal", "Monthly SLA & Health Reports", "Continuous Patch Releases"],
  },
  {
    step: "08",
    name: "SCALE",
    title: "Continuous Enhancement & Evolution",
    tagline: "Improve and extend the solution as business needs evolve.",
    description:
      "As your user base and business operations grow, we collaborate on performance profiling, new feature modules, regional expansions, and third-party integrations to keep your systems ahead of demand.",
    keyActivities: [
      "User feedback analysis and telemetry profiling",
      "Cloud autoscaling and database query optimization",
      "New feature backlog grooming and sprint execution",
      "Periodic architecture modernization audits",
    ],
    outputs: ["Feature Enhancement Sprints", "Performance Optimization Audit", "Evolutionary Roadmap"],
  },
];
