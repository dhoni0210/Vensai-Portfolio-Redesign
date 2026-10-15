import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/privacy-notice',
        destination: '/privacy',
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms',
      },
      {
        source: '/solutions/ecommerce',
        destination: '/solutions/commerce-ecosystems',
      },
      {
        source: '/solutions/consulting',
        destination: '/solutions/feasibility-technical-audits',
      },
      {
        source: '/solutions/support',
        destination: '/solutions/post-deployment-managed-care',
      },
      {
        source: '/services/software-development',
        destination: '/services/software-product-engineering',
      },
      {
        source: '/services/mobile-development',
        destination: '/services/mobile-applications',
      },
      {
        source: '/services/ai-ml',
        destination: '/services/ai-machine-learning',
      },
      {
        source: '/services/cloud-devops',
        destination: '/services/cloud-devops-infrastructure',
      },
      {
        source: '/services/enterprise',
        destination: '/services/enterprise-technology',
      },
      {
        source: '/services/integrations',
        destination: '/services/integrations-automation',
      },
      {
        source: '/services/branding',
        destination: '/services/brand-digital-marketing',
      },
      {
        source: '/services/marketing-growth',
        destination: '/services/brand-digital-marketing',
      },
      {
        source: '/services/internship-programs',
        destination: '/services/internships-training',
      },
    ];
  },
};

export default nextConfig;
