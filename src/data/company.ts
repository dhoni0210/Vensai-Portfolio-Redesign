/**
 * Centralized Company Configuration for Vensai Labs
 *
 * All components, navigation, footers, metadata and legal pages read from this
 * configuration to ensure consistency and single-point maintenance.
 *
 * NOTE FOR PRODUCTION DEPLOYMENT:
 * The owner must verify the contact, legal and corporate details before switching
 * the production domain.
 */

export interface CompanyConfig {
  name: string;
  legalName: string;
  cin: string;
  collaboration: string;
  tagline: string;
  concept: string;
  framework: string[];
  websiteUrl: string;
  productionCanonical: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  deliveryDescription: string;
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  legal: {
    privacyNoticePath: string;
    termsAndConditionsPath: string;
    cookiePolicyPath: string;
  };
  meta: {
    defaultTitle: string;
    defaultDescription: string;
    author: string;
  };
}

export const companyConfig: CompanyConfig = {
  name: "Vensai Labs",
  legalName: "Vijetha Softwares Private Limited",
  cin: "U72900AP2022PTC122120",
  collaboration: "HCTPL",
  tagline: "Freelance Talent. Real Solutions.",
  concept: "VenSai — Venture for Startups and Institutes",
  framework: ["BUILD", "DESIGN", "AUTOMATE", "SCALE"],
  websiteUrl: "https://vensailabs.in",
  productionCanonical: "https://vensailabs.in",
  email: "contact@vensailabs.in",
  phone: "+918309057182",
  phoneDisplay: "+91 8309057182",
  deliveryDescription: "Global Delivery Operations • Remote & On-Site Client Engagement",
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
  },
  legal: {
    privacyNoticePath: "/privacy",
    termsAndConditionsPath: "/terms",
    cookiePolicyPath: "/cookies",
  },
  meta: {
    defaultTitle: "Vensai Labs | Freelance Talent. Real Solutions. — Enterprise Technology & Business Partner",
    defaultDescription:
      "Vensai Labs brings engineering, managed IT, cybersecurity, KPO & BPO, internships, commerce, brand and support together under coordinated project management.",
    author: "Vensai Labs",
  },
};
