export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Engagements" | "Technical" | "Security";
}

export const faqsData: FAQItem[] = [
  {
    id: "differentiation",
    category: "General",
    question: "How is Vensai Labs different from a freelancer marketplace or a traditional IT agency?",
    answer:
      "Vensai combines specialist capabilities with coordinated project delivery. Rather than leaving clients to coordinate unrelated individuals, Vensai brings relevant disciplines together under a managed engagement model.",
  },
  {
    id: "engagement-models",
    category: "Engagements",
    question: "What engagement models does Vensai Labs offer?",
    answer:
      "Project Based, Dedicated Resource, Dedicated Team, Managed Services, Consulting and Post-Deployment Support.",
  },
  {
    id: "feasibility-scoping",
    category: "Technical",
    question: "Can Vensai help if we have an idea but need feasibility and scoping first?",
    answer:
      "Yes. The consulting and R&D offering can cover feasibility assessment, architecture review, technology selection, proof-of-concept validation and roadmap development.",
  },
  {
    id: "multidisciplinary-scope",
    category: "General",
    question: "Do you handle technology development and creative or operational work?",
    answer:
      "Vensai's service portfolio includes software, enterprise systems, e-commerce, brand and creative capabilities, marketing support and customer or operational support.",
  },
  {
    id: "post-deployment-care",
    category: "Engagements",
    question: "What happens after deployment?",
    answer:
      "Depending on the engagement, support may include troubleshooting, maintenance, security updates, cloud and application monitoring, feature improvements and operational assistance.",
  },
  {
    id: "confidentiality-ip",
    category: "Security",
    question: "How does Vensai protect confidentiality and intellectual property?",
    answer:
      "Confidentiality, data handling and ownership must be governed by the applicable client agreement. Provide accurate descriptions of Vensai's actual policies and do not invent certifications or legal guarantees.",
  },
];
