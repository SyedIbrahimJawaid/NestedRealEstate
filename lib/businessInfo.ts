// lib/businessInfo.ts
// Centralized business information for consistent use across the site

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com";

export const businessInfo = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME ?? "BabyHomePlan",
  legalName: process.env.NEXT_PUBLIC_BUSINESS_LEGAL_NAME ?? "BabyHomePlan.com",
  domain: siteUrl,

  // Contact Information
  email: {
    general: process.env.NEXT_PUBLIC_GENERAL_EMAIL ?? "info@babyhomeplan.com",
    legal: process.env.NEXT_PUBLIC_LEGAL_EMAIL ?? "legal@babyhomeplan.com",
    privacy: process.env.NEXT_PUBLIC_PRIVACY_EMAIL ?? "privacy@babyhomeplan.com",
  },

  // Phone
  telephone: process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "",

  // Licensing
  dreLicense: process.env.NEXT_PUBLIC_DRE_LICENSE ?? "",
  brokerOfRecord: process.env.NEXT_PUBLIC_BROKER_OF_RECORD ?? "",

  // Address
  address: {
    street: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_STREET ?? "",
    locality: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LOCALITY ?? "San Diego",
    region: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_REGION ?? "CA",
    postalCode: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_POSTAL_CODE ?? "",
    country: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_COUNTRY ?? "US",
  },

  // Service Areas
  serviceAreas: [
    "San Diego County",
    "Orange County",
    "Los Angeles County",
  ],

  // Social Media (add when available)
  sameAs: [
    // "https://www.facebook.com/babyhomeplan",
    // "https://www.instagram.com/babyhomeplan",
    // "https://www.linkedin.com/company/babyhomeplan",
  ],
};


