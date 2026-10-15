# Vensai Labs — Website Rebuild (Independent Edition)

> **Freelance Talent. Real Solutions.**  
> *BUILD | DESIGN | AUTOMATE | SCALE*  
> **VenSai — Venture for Startups and Institutes**

A modern, production-quality, dark-futuristic technology website for **Vensai Labs**, built independently from scratch.

---

## 1. Operating Rules & Independence Notice

- This project is a **completely independent build** residing strictly inside this repository directory.
- The existing live production site at [https://vensailabs.in/](https://vensailabs.in/) and its production Git remotes have remained **100% untouched**.
- No production secrets, credentials, or environment variables are exposed.
- All company details, legal identities, and service positioning reflect the verified public source of truth.

---

## 2. Technology Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Site Generation + Dynamic API boundaries)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing across components and data layers)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom dark-futuristic color token system
- **Icons**: [Lucide React](https://lucide.dev/) (Lightweight, consistent SVG line icons)
- **Fonts**: Space Grotesk (headings) and Inter (body, navigation, labels)
- **Brand Assets**: Authentic brand marks (`vensai-symbol.png`, `vensai-wordmark-dark.png`, `vensai-full-dark.png`) retrieved from public site assets and stored locally in `/public/brand/`.

### Design System Color Tokens
- Main Background: `#080A10` (`bg-vensai-bg`)
- Secondary Surface: `#0D1019` (`bg-vensai-surface`)
- Card Surface: `#141824` (`bg-vensai-card`)
- Elevated Surface: `#1B2030` (`bg-vensai-elevated`)
- Primary Violet: `#8B5CF6` (`text-vensai-violet`, `bg-vensai-violet`)
- Secondary Cyan: `#22D3EE` (`text-vensai-cyan`, `border-vensai-cyan`)
- Primary Text: `#F8FAFC` (`text-vensai-text`)
- Secondary Text: `#A1A1AA` (`text-vensai-muted`)
- Subtle Borders: `#303649` (`border-vensai-border`)

---

## 3. Centralized Content Architecture

All website data is centralized in typed data modules under `src/data/` for rapid maintenance:

| Data File | Description |
|---|---|
| `src/data/company.ts` | **Single source of truth** for company name, phone, email, parent company (*Vijetha Softwares Pvt Ltd*), CIN (`U72900AP2022PTC122120`), collaboration (`HCTPL`), socials, and legal paths. |
| `src/data/services.ts` | Complete catalog of all **16 Practice Disciplines** categorized under *BUILD*, *CONNECT*, *RUN*, and *SHAPE*. |
| `src/data/solutions.ts` | Detailed architecture specs for the **3 Flagship Solutions**: Commerce Ecosystems Hub, Feasibility & Technical Audits, Post-Deployment Managed Care. |
| `src/data/industries.ts` | Comprehensive specifications for all **15 Industry Sectors**, use cases, and deliverables. |
| `src/data/technologies.ts` | Searchable and filterable database of **60+ technologies** across 12 stack categories. |
| `src/data/engagementModels.ts` | All **6 Commercial Frameworks** (Project Based, Dedicated Resource, Dedicated Team, Managed Services, Consulting, Post-Deployment Support). |
| `src/data/deliveryLifecycle.ts` | All **8 Delivery Stages** (01 Discover, 02 Research, 03 Assess, 04 Plan, 05 Build, 06 Deploy, 07 Support, 08 Scale). |
| `src/data/caseStudies.ts` | Case study delivery frameworks with transparent status tags (*Concept Example*, *Internal Demonstration*). |
| `src/data/insights.ts` | Deep editorial articles across AI, Cloud, Cybersecurity, ERP, and Software Engineering. |
| `src/data/faqs.ts` | Verified questions and answers regarding governance, talent, and support. |

---

## 4. Complete Route Structure

### Public Pages
- `/` — Homepage (Hero with custom interactive orbital visual, Brand framework, 16 Practice directory, Why Vensai, Delivery lifecycle, 6 Engagement models, Industries preview, Tech preview, Case studies, FAQs, Footer)
- `/services/` — Practice Floor index
- `/services/[slug]/` — 16 dedicated service detail pages (e.g. `/services/software-product-engineering`, `/services/ai-machine-learning`, `/services/cybersecurity`, etc.)
- `/solutions/` — Solutions overview
- `/solutions/[slug]/` — 3 dedicated flagship solution pages (`/solutions/commerce-ecosystems`, `/solutions/feasibility-technical-audits`, `/solutions/post-deployment-managed-care`)
- `/industries/` — Industries directory
- `/industries/[slug]/` — 15 dedicated sector pages (e.g. `/industries/ecommerce-retail`, `/industries/financial-services`, `/industries/maritime`, etc.)
- `/technologies/` — Full interactive searchable and filterable technology directory
- `/work/` — Portfolio showcase with status badges (*Published*, *Internal Demonstration*, *Concept Example*)
- `/about/` — Corporate background, VenSai concept, governance, and parent company attribution
- `/insights/` — Editorial index with category filtering and reading times
- `/insights/[slug]/` — Full article reader with structured data
- `/careers/` — Structured learning tracks, transparent vacancy status, and expression of interest route
- `/contact/` — Inquiries page with dynamic service & model prefilling
- `/privacy/` — Privacy Notice with owner review banner
- `/terms/` — Terms and Conditions with owner review banner
- `/cookies/` — Cookie Policy and preferences

### Backward-Compatible Aliases & Rewrites
Configured in `next.config.mjs` to seamlessly route legacy links:
- `/privacy-notice` ➔ `/privacy`
- `/terms-and-conditions` ➔ `/terms`
- `/solutions/ecommerce` ➔ `/solutions/commerce-ecosystems`
- `/solutions/consulting` ➔ `/solutions/feasibility-technical-audits`
- `/solutions/support` ➔ `/solutions/post-deployment-managed-care`
- `/services/software-development` ➔ `/services/software-product-engineering`
- `/services/ai-ml` ➔ `/services/ai-machine-learning`
- `/services/cloud-devops` ➔ `/services/cloud-devops-infrastructure`
- `/services/enterprise` ➔ `/services/enterprise-technology`
- `/services/integrations` ➔ `/services/integrations-automation`
- `/services/branding` ➔ `/services/brand-digital-marketing`
- `/services/internship-programs` ➔ `/services/internships-training`

---

## 5. Local Development & Preview Commands

Ensure [Node.js](https://nodejs.org/) (v18+) is installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
Validates TypeScript types, lints, and pre-renders static HTML pages.

### 4. Run Production Build Locally
```bash
npm start
```
Starts the optimized production server on [http://localhost:3000](http://localhost:3000).

---

## 6. Contact Form Integration & Production Setup

The contact form is wired to the API endpoint `/api/contact` with both client-side and server-side validation, anti-spam honeypot detection, and prefilling capabilities via URL query parameters (`?service=...` and `?model=...`).

### Setting Up Live Email Delivery
In production, to route form submissions directly to `contact@vensailabs.in`, connect an email provider in `/api/contact/route.ts`:
- **Resend**: Add `RESEND_API_KEY` to your environment variables.
- **SMTP**: Add `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`.

The submission boundary and audit logging are already fully implemented.

---

## 7. Pre-Deployment Owner Verification Checklist

Before migrating this project to the live production domain:
1. **Corporate Details**: Verify the telephone number (`+91 8309057182`), contact email (`contact@vensailabs.in`), and CIN (`U72900AP2022PTC122120`) in `src/data/company.ts`.
2. **Legal Review**: Have company legal counsel review the draft legal pages (`/privacy`, `/terms`, `/cookies`) and remove the draft banners.
3. **Domain Cutover**: Point DNS records to your deployment platform (e.g. Vercel, AWS ECS, or Cloudflare Pages) once final approval is granted.
