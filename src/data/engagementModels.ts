export interface EngagementModelItem {
  id: string;
  order: string;
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  idealFor: string;
  includes: string[];
  ctaLabel: string;
}

export const engagementModelsData: EngagementModelItem[] = [
  {
    id: "project-based",
    order: "MODEL 01",
    shortTitle: "Project Based",
    title: "Complete projects from discovery to deployment.",
    headline: "End-to-end delivery with defined scope and milestones.",
    description:
      "For defined initiatives where Vensai manages agreed requirements, architecture, design, engineering, testing, and production delivery under central project governance.",
    idealFor: "New product MVPs, complete e-commerce rebuilds, mobile applications, and bounded system integrations.",
    includes: [
      "Defined scope, clear acceptance criteria, and milestones",
      "Agreed delivery schedule with milestone-based sign-offs",
      "Central project coordination and rigorous QA reviews",
      "Multidisciplinary execution pod (dev, design, DevOps)",
      "Production deployment and post-launch handover documentation",
    ],
    ctaLabel: "Start a Project",
  },
  {
    id: "dedicated-resource",
    order: "MODEL 02",
    shortTitle: "Dedicated Resource",
    title: "Access dedicated Vensai professionals.",
    headline: "Embed specialist capabilities directly into your internal workflow.",
    description:
      "Extend your internal team’s velocity by embedding full-time Vensai professionals (software engineers, AI specialists, UI/UX designers, or QA analysts) who collaborate daily within your existing toolchain.",
    idealFor: "Internal product teams needing to accelerate feature delivery or add specialized expertise without hiring overhead.",
    includes: [
      "100% dedicated professional allocation",
      "Daily collaboration in your Jira, GitHub, and Slack channels",
      "Senior technical mentorship and peer code reviews",
      "Predictable monthly billing with flexible resource continuity",
      "Seamless scaling up or down as project phases shift",
    ],
    ctaLabel: "Hire a Specialist",
  },
  {
    id: "dedicated-team",
    order: "MODEL 03",
    shortTitle: "Dedicated Team",
    title: "Build a complete project team.",
    headline: "An autonomous, multidisciplinary delivery pod managed for outcomes.",
    description:
      "Combine relevant engineering, UI/UX design, QA testing, DevOps, and project management capabilities into an autonomous pod dedicated exclusively to your product roadmap.",
    idealFor: "Funded startups, SaaS companies, and enterprise divisions launching or scaling major digital products.",
    includes: [
      "Custom team composition tailored to technical requirements",
      "Dedicated technical lead and delivery project manager",
      "Agile sprint planning, standups, and bi-weekly demos",
      "Full ownership of feature backlogs and release cadence",
      "Flexibility to adjust capabilities as milestones evolve",
    ],
    ctaLabel: "Assemble a Team",
  },
  {
    id: "managed-services",
    order: "MODEL 04",
    shortTitle: "Managed Services",
    title: "Long-term technology and operational support.",
    headline: "Ongoing management of applications, cloud infrastructure, and data systems.",
    description:
      "Contracted ongoing management of applications, cloud infrastructure, cybersecurity monitoring, commerce operations, or back-office KPO/BPO workflows governed by transparent SLAs.",
    idealFor: "Enterprises needing reliable operational uptime and continuous monitoring without staffing an in-house 24/7 team.",
    includes: [
      "Defined service scope with agreed SLA response windows",
      "24/7 infrastructure observability and proactive alerting",
      "Scheduled vulnerability patching and security updates",
      "Incident response and root-cause analysis runbooks",
      "Monthly operational performance reviews and cost optimizations",
    ],
    ctaLabel: "Explore Managed Services",
  },
  {
    id: "consulting",
    order: "MODEL 05",
    shortTitle: "Consulting",
    title: "Research, feasibility, audits and strategic technology advice.",
    headline: "Independent technical diligence before major capital investments.",
    description:
      "Focused advisory and R&D engagements to assess requirements, technical architectures, AI feasibility, security postures, and cost projections before making large-scale build commitments.",
    idealFor: "Technical leaders, founders, and executives evaluating complex architectural shifts or novel AI initiatives.",
    includes: [
      "Independent technical and codebase health assessments",
      "Target-state system architecture and data flow blueprints",
      "Proof-of-Concept (PoC) prototyping to de-risk assumptions",
      "Infrastructure cost modeling across multi-year horizons",
      "Actionable implementation roadmap and risk mitigation matrix",
    ],
    ctaLabel: "Request an Audit",
  },
  {
    id: "post-deployment-support",
    order: "MODEL 06",
    shortTitle: "Post-Deployment Support",
    title: "Maintenance, technical support and customer operations.",
    headline: "Long-term lifecycle care, bug triage, and continuous system enhancement.",
    description:
      "Structured post-launch care covering technical bug fixes, Tier 1–3 support ticketing, scheduled preventive maintenance, and continuous incremental feature enhancements.",
    idealFor: "Live software, e-commerce stores, and enterprise platforms requiring ongoing stability after public release.",
    includes: [
      "Issue triage, bug reproduction, and hotfix deployment",
      "Preventive maintenance, dependency updates, and SSL renewals",
      "Incremental feature improvements and performance tuning",
      "Dedicated customer helpdesk coverage where agreed",
      "Transparent incident tracking and monthly release notes",
    ],
    ctaLabel: "Discuss Support Plans",
  },
];
