// OWN LAB Landing Page Constants
// Edit these values to update content across the site

export const BRAND = {
  name: "OWN LAB",
  tagline: "RWA Investment Bank & Tokenization-as-a-Service",
  description: "Turnkey, Shariah-compliant tokenization platform for institutional RWAs. Launch in SECP sandbox, expand to GCC & Malaysia, connect to global liquidity.",
} as const;

export const HERO = {
  headline: "Institutional-grade Tokenization for Shariah-compliant RWAs",
  subcopy: "OWN LAB is an RWA investment bank providing a turnkey, compliant, and scalable tokenization stack. Launch pilots in Pakistan's SECP sandbox, expand to GCC & Malaysia, and connect to Western liquidity pools.",
  primaryCta: "Book a Demo",
  secondaryCta: "Download One-Pager",
  kpis: [
    { label: "Target: $50M AUM in Year 1", value: "$50M" },
    { label: "10 Institutional Clients", value: "10+" },
    { label: "White-Label Platform", value: "Ready" },
  ],
  trustBadges: [
    { name: "SECP Sandbox", status: "Active" },
    { name: "Shariah Board", status: "Certified" },
    { name: "Fireblocks Custody", status: "Integrated" },
  ],
} as const;

export const VALUE_PROPS = [
  {
    title: "Turnkey TaaS Stack",
    description: "Complete issuance, compliance, custody, and secondary workflows in one platform.",
    icon: "layers",
  },
  {
    title: "Shariah-First by Design",
    description: "Scholar-reviewed structures with screened revenue models and Sukuk-friendly architecture.",
    icon: "shield-check",
  },
  {
    title: "Regulatory Pathway",
    description: "Pakistan (SECP) → GCC (DIFC/ADGM/Bahrain) → Malaysia expansion strategy.",
    icon: "map",
  },
  {
    title: "Institutional Connectivity",
    description: "Integrated custodians, comprehensive reporting, and audit-ready infrastructure.",
    icon: "network",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Assess & Structure",
    description: "Asset due diligence, Shariah screening, and legal wrapper creation.",
  },
  {
    step: 2,
    title: "Tokenize & Issue",
    description: "Smart contracts deployment, KYC/AML, and wallet assignment.",
  },
  {
    step: 3,
    title: "Distribute & Manage",
    description: "Investor onboarding, subscriptions, and comprehensive reporting.",
  },
  {
    step: 4,
    title: "Settle & Monitor",
    description: "Cash flows, secondary workflows, and compliance reporting.",
  },
] as const;

export const PLATFORM_MODULES = [
  {
    title: "Issuer Portal",
    description: "Create offerings, manage tranches, handle documentation, and maintain cap tables.",
    features: ["Offer Creation", "Tranche Management", "Documentation", "Cap Table"],
  },
  {
    title: "Investor Portal",
    description: "KYC/AML onboarding with custodial and non-custodial wallet options.",
    features: ["KYC/AML", "Wallet Choice", "Subscriptions", "Portfolio View"],
  },
  {
    title: "Compliance Engine",
    description: "Automated allowlists, travel rule compliance, and AML screening.",
    features: ["Allowlists", "Travel Rule", "AML Screening", "Audit Trail"],
  },
  {
    title: "Custody & Settlement",
    description: "Fireblocks integration with whitelisted jurisdictions and secure settlement.",
    features: ["Fireblocks Integration", "Secure Settlement", "Multi-Jurisdiction", "Risk Management"],
  },
  {
    title: "Secondary Workflows",
    description: "OTC trading, bulletin boards, and ATS/venue integrations.",
    features: ["OTC Trading", "Bulletin Board", "ATS Integration", "Liquidity Pools"],
  },
  {
    title: "Reporting & Audit",
    description: "Comprehensive statements, cash-flow tracking, and ESG/green sukuk reporting.",
    features: ["Financial Statements", "Cash Flow", "Tax Packs", "ESG Reporting"],
  },
] as const;

export const COMPLIANCE = {
  title: "Built for Regulated Markets",
  jurisdictions: [
    { name: "Pakistan", status: "SECP Sandbox (pilot)", active: true },
    { name: "UAE", status: "DIFC/ADGM (partners)", active: true },
    { name: "KSA", status: "In progress", active: false },
    { name: "Malaysia", status: "Islamic markets", active: true },
  ],
  shariahStatement: "Reviewed by independent Shariah scholars. Structures include Sukuk-style profit-sharing and screened revenue models.",
  travelRule: "Integrates with leading Travel Rule and AML providers for cross-border compliance.",
} as const;

export const METRICS = [
  { label: "$30B+ on-chain RWAs (2025)", value: "$30B+", description: "Industry context" },
  { label: "114+ tokenization platforms", value: "114+", description: "Industry growth" },
  { label: "0.5%–1% typical issuance fee", value: "0.5%–1%", description: "Fee range" },
  { label: "$50k–$150k annual licensing", value: "$50k–$150k", description: "Platform cost" },
] as const;

export const ICP = {
  title: "Ideal Customer Profile",
  targets: [
    "Asset managers (AUM $200M+)",
    "Islamic banks",
    "REITs",
    "Sovereign funds",
  ],
  useCases: [
    { title: "Real Estate", description: "REIT tokenization and fractional ownership" },
    { title: "Private Credit", description: "Shariah-compliant lending platforms" },
    { title: "Sukuk", description: "Islamic bond tokenization" },
    { title: "Commodities", description: "Gold and precious metals tokenization" },
  ],
} as const;

export const PRICING = {
  title: "Transparent Pricing",
  plans: [
    {
      name: "Platform Licensing",
      price: "$50k–$150k/yr",
      description: "SaaS platform access",
    },
    {
      name: "Transaction Fees",
      price: "0.5%–1%",
      description: "Per issuance",
    },
    {
      name: "Advisory & Shariah",
      price: "Project-based",
      description: "Certification services",
    },
    {
      name: "Secondary & Reporting",
      price: "Usage-based",
      description: "Trading and reporting features",
    },
  ],
  note: "Volume and enterprise discounts available. OWN token payment discounts up to 20%.",
} as const;

export const TESTIMONIALS = [
  {
    quote: "OWN LAB's platform enabled us to tokenize our REIT portfolio while maintaining full Shariah compliance. The regulatory pathway from Pakistan to GCC was seamless.",
    author: "Ahmed Hassan",
    role: "VP, Islamic Banking",
    company: "Regional REIT",
  },
  {
    quote: "The turnkey approach saved us months of development time. We launched our pilot in the SECP sandbox within weeks.",
    author: "Sarah Al-Rashid",
    role: "Head of Digital Assets",
    company: "GCC Investment Bank",
  },
] as const;

export const RESOURCES = [
  {
    title: "RWA Shariah Playbook",
    type: "PDF",
    description: "Comprehensive guide to Shariah-compliant tokenization",
  },
  {
    title: "SECP Pilot Overview",
    type: "Guide",
    description: "Step-by-step SECP sandbox application process",
  },
  {
    title: "Case Study: REIT Tokenization",
    type: "Case Study",
    description: "Real-world implementation example",
  },
] as const;

export const FAQ = [
  {
    question: "What blockchain networks do you support?",
    answer: "We support Ethereum, Polygon, and other EVM-compatible networks. We're also exploring Layer 2 solutions for cost optimization and can integrate with specific networks based on regulatory requirements in each jurisdiction.",
  },
  {
    question: "Do you offer custodial or non-custodial solutions?",
    answer: "Both. We provide flexible custody options including integrated custodians like Fireblocks for institutional clients, as well as non-custodial solutions for clients who prefer to manage their own keys while maintaining compliance.",
  },
  {
    question: "How does your Shariah governance model work?",
    answer: "We work with independent Shariah scholars who review all structures, smart contracts, and business models. Our platform includes built-in Shariah compliance checks and maintains audit trails for all transactions and profit distributions.",
  },
  {
    question: "Can we bring our own custodian or banking partner?",
    answer: "Yes, our platform is designed to integrate with multiple custodians and banking partners. We can work with your existing relationships while ensuring compliance with local regulations and our Shariah requirements.",
  },
  {
    question: "What secondary market options do you provide?",
    answer: "We offer OTC trading, bulletin board functionality, and integrations with ATS venues. Our platform supports both private and public secondary trading with appropriate compliance controls and reporting.",
  },
  {
    question: "What are your typical pricing and implementation timelines?",
    answer: "Platform licensing ranges from $50k-$150k annually with transaction fees of 0.5%-1% per issuance. Implementation typically takes 2-4 months for pilot programs, with full deployment in 6-12 months depending on complexity and regulatory requirements.",
  },
  {
    question: "How do you handle data residency and reporting requirements?",
    answer: "We maintain data residency compliance for each jurisdiction and provide comprehensive reporting including financial statements, cash flow tracking, tax documentation, and ESG reporting. All data is stored securely with appropriate encryption and access controls.",
  },
  {
    question: "What security audits and certifications do you have?",
    answer: "Our platform undergoes regular security audits by third-party firms. We maintain SOC 2 compliance and work with leading security providers. All smart contracts are audited before deployment, and we maintain comprehensive security documentation for regulatory review.",
  },
] as const;

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
      { name: "Book Demo", href: "#demo" },
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
