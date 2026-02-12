// lib/businessInfo.ts
// Centralized business information for consistent use across the site
// Update these values with actual business details

export const businessInfo = {
  name: "BabyHomePlan",
  legalName: "BabyHomePlan.com",
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? "https://babyhomeplan.com",
  
  // Contact Information
  email: {
    general: "info@babyhomeplan.com",
    legal: "legal@babyhomeplan.com",
    privacy: "privacy@babyhomeplan.com",
  },
  
  // Phone (update with actual number)
  telephone: "+1-858-XXX-XXXX", // TODO: Replace with actual phone number
  
  // Licensing
  dreLicense: "XXXXXXXX", // TODO: Replace with actual DRE license number
  brokerOfRecord: "Broker Name", // TODO: Replace with actual broker name
  
  // Address
  address: {
    locality: "San Diego",
    region: "CA",
    country: "US",
    // Full address can be added here if needed
  },
  
  // Service Areas
  serviceAreas: [
    "San Diego County",
    "Orange County", 
    "Los Angeles County"
  ],
  
  // Social Media (add when available)
  sameAs: [
    // "https://www.facebook.com/babyhomeplan",
    // "https://www.instagram.com/babyhomeplan",
    // "https://www.linkedin.com/company/babyhomeplan",
  ],
};


