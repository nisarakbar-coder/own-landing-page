// OWN LAB Landing Page Constants
// Edit these values to update content across the site

export const BRAND = {
  name: "OWN LAB",
  tagline: "RWA Investment Bank & Tokenization-as-a-Service",
  description: "Turnkey, Shariah-compliant tokenization platform for institutional RWAs. Launch in SECP sandbox, expand to GCC & Malaysia, connect to global liquidity.",
} as const;

export const HERO = {
  eyebrow: "AI-Powered RWA Infrastructure",
  headline: "Agentic AI Driving Shariah-Compliant Tokenization",
  subcopy: "OWN LAB is the institutional gateway for RWA tokenization. Agentic AI automates compliance, onboarding, and lifecycle management—delivering secure, Shariah-aligned, globally scalable infrastructure.",
  primaryCta: "Apply Now",
  stats: [
    { label: "Year 1 AUM Target", value: "$50M+" },
    { label: "Institutional Clients in Pipeline", value: "10+" },
    { label: "AI-Powered Compliance Engine", value: "Active" },
  ],
  trustBadges: [
    { name: "SECP Sandbox Pilot" },
    { name: "Independent Shariah Oversight" },
    { name: "AI Compliance Agents (Always-On)" },
  ],
} as const;

export const WHY_OWN_LAB = {
  title: "Why OWN LAB",
  tiles: [
  {
    title: "Turnkey TaaS + AI",
      description: "Issue, comply, and manage with agentic orchestration.",
  },
  {
      title: "Shariah-First",
      description: "Independently reviewed structures; Sukuk-friendly architecture.",
  },
  {
    title: "Regulatory Pathway",
      description: "Prove value in SECP, scale to GCC & Malaysia.",
  },
  {
    title: "Institutional Connectivity",
      description: "Custody, reporting, audit-ready from day one.",
    },
  ],
  proofLogos: ["DIFC", "ADGM", "Fireblocks", "Chainalysis", "Elliptic", "TRM Labs"],
  sourcesLink: "Sources",
} as const;

export const HOW_IT_WORKS = {
  title: "How It Works",
  kicker: "From asset selection to tokenized distribution.",
  steps: [
    {
      step: 1,
      title: "Select Asset",
      description: "Validate ownership and valuation.",
      detailedDescription: "Our team works with you to identify and validate real-world assets suitable for tokenization, ensuring proper ownership documentation and independent valuation.",
      entity: "Business / Asset Issuer",
      icon: "Building2",
      duration: "1-2 weeks",
      features: ["Asset validation", "Ownership verification", "Valuation assessment"]
    },
    {
      step: 2,
      title: "Define Token",
      description: "Choose type, supply, and rules.",
      detailedDescription: "We help design the token structure, including token type, total supply, governance rules, and economic model that aligns with your business objectives.",
      entity: "Token Issuer / Custodian",
      icon: "Coins",
      duration: "2-3 weeks",
      features: ["Token design", "Smart contract development", "Governance setup"]
    },
    {
      step: 3,
      title: "Compliance",
      description: "KYC/AML, legal, enforceable ownership.",
      detailedDescription: "Full regulatory compliance including KYC/AML procedures, legal documentation, and ensuring enforceable ownership rights across jurisdictions.",
      entity: "Custodian / Regulator",
      icon: "Shield",
      duration: "3-4 weeks",
      features: ["KYC/AML setup", "Legal documentation", "Regulatory compliance"]
    },
    {
      step: 4,
      title: "Distribute",
      description: "Investor subscriptions; secondary workflows.",
      detailedDescription: "Launch token distribution to qualified investors with secondary market infrastructure, trading capabilities, and ongoing investor relations.",
      entity: "Investors / Secondary Market",
      icon: "Users",
      duration: "2-3 weeks",
      features: ["Investor onboarding", "Trading platform", "Secondary markets"]
    },
  ],
} as const;

export const START_PILOT = {
  title: "Apply Now for Pilot or Regional Rollout",
  leftCopy: "Launch in SECP sandbox, expand across GCC & Malaysia. Our team will tailor your path.",
  formFields: {
    name: "Name",
    email: "Email",
    companyName: "Company Name",
    companyWebsite: "Company Website",
    linkedinUrl: "LinkedIn URL",
    position: "Position in the Company",
    companyLinkedin: "Company LinkedIn",
  },
  submitText: "Apply Now",
  successMessage: "Thanks! We'll reach out within one business day.",
} as const;

// Removed unused sections for 4-section page

export const FOOTER = {
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Contact", href: "#contact" },
    ],
  },
  platform: {
    title: "Platform",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" },
      { name: "Documentation", href: "#docs" },
    ],
  },
  compliance: {
    title: "Compliance",
    links: [
      { name: "Shariah Board", href: "#shariah" },
      { name: "Regulatory", href: "#regulatory" },
      { name: "Security", href: "#security" },
      { name: "Audit", href: "#audit" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#docs" },
      { name: "Case Studies", href: "#cases" },
      { name: "Blog", href: "#blog" },
      { name: "Support", href: "#support" },
    ],
  },
  contact: {
    title: "Contact",
    links: [
      { name: "Apply Now", href: "#demo" },
      { name: "Sales", href: "mailto:sales@ownlab.com" },
      { name: "Support", href: "mailto:support@ownlab.com" },
      { name: "Partnerships", href: "mailto:partnerships@ownlab.com" },
    ],
  },
  social: [
    { name: "LinkedIn", href: "https://linkedin.com/company/own-lab", icon: "linkedin" },
    { name: "Twitter", href: "https://twitter.com/own_lab", icon: "twitter" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
} as const;
