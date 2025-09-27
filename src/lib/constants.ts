// OWN LAB Landing Page Constants
// Edit these values to update content across the site

export const BRAND = {
  name: "OWN LAB",
  tagline: "RWA Investment Bank & Tokenization-as-a-Service",
  description: "Turnkey, Shariah-compliant tokenization platform for institutional RWAs. Launch in SECP sandbox, expand to GCC & Malaysia, connect to global liquidity.",
} as const;

export const HERO = {
  eyebrow: "AI-POWERED RWA INFRASTRUCTURE",
  headline: "Agentic AI Driving Shariah-Compliant Tokenization",
  subcopy: "OWN LAB is the institutional gateway for Real-World Asset tokenization. Our agentic AI automates compliance, onboarding, and lifecycle management—delivering secure, Shariah-aligned, globally scalable infrastructure.",
  primaryCta: "Book a Demo",
  secondaryCta: "Download Investor One-Pager",
  stats: [
    { label: "Year 1 AUM Target", value: "$50M+" },
    { label: "Institutional Clients in Pipeline", value: "10+" },
    { label: "AI-Powered Compliance Engine", value: "Active" },
  ],
  trustBadges: [
    { name: "SECP Sandbox Pilot", status: "Active", active: true },
    { name: "Independent Shariah Oversight", status: "Certified", active: true },
    { name: "AI Compliance Agents (Always-On)", status: "Deployed", active: true },
  ],
} as const;

export const VALUE_PROPS = [
  {
    title: "Turnkey TaaS + AI",
    description: "Issue, comply, and manage assets with AI-powered orchestration.",
    icon: "layers",
  },
  {
    title: "Shariah-First Intelligence",
    description: "AI agents monitor structures for Shariah compliance in real time.",
    icon: "shield-check",
  },
  {
    title: "Regulatory Pathway",
    description: "Agentic AI tracks evolving rules across SECP, GCC, Malaysia.",
    icon: "map",
  },
  {
    title: "Institutional Connectivity",
    description: "AI-driven reporting, audit prep, and cross-border settlement insights.",
    icon: "network",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Assess & Structure",
    description: "AI agents scan asset docs for compliance gaps and Shariah screening.",
    microcopy: "AI-powered due diligence and Shariah review",
  },
  {
    step: 2,
    title: "Tokenize & Issue",
    description: "Smart contracts deployment with AI-driven KYC/AML automation.",
    microcopy: "AI-enhanced smart contracts and KYC/AML",
  },
  {
    step: 3,
    title: "Distribute & Manage",
    description: "AI personalizes investor onboarding, subscriptions, and support.",
    microcopy: "AI concierge for investor onboarding",
  },
  {
    step: 4,
    title: "Settle & Monitor",
    description: "AI agents reconcile transactions and flag anomalies in real-time.",
    microcopy: "AI-driven transaction reconciliation",
  },
] as const;

export const PLATFORM_MODULES = [
  {
    title: "Issuer Portal",
    description: "AI-assisted structuring and document drafting with automated compliance checks.",
    features: ["AI Document Drafting", "Smart Structuring", "Compliance Checks", "Cap Table AI"],
  },
  {
    title: "Investor Portal",
    description: "AI concierge for onboarding, Q&A, and personalized investor support.",
    features: ["AI Concierge", "Smart Onboarding", "Q&A Automation", "Portfolio AI"],
  },
  {
    title: "Compliance Engine",
    description: "Agentic AI monitoring for Travel Rule, AML, and Shariah compliance in real-time.",
    features: ["AI Compliance Agents", "Real-time Monitoring", "Shariah AI", "Audit AI"],
  },
  {
    title: "Custody & Settlement",
    description: "AI-driven transaction reconciliation with automated risk assessment.",
    features: ["AI Reconciliation", "Smart Settlement", "Risk AI", "Multi-Jurisdiction AI"],
  },
  {
    title: "Secondary Workflows",
    description: "AI liquidity-matching suggestions and automated trading insights.",
    features: ["AI Liquidity Matching", "Smart Trading", "Market AI", "Liquidity AI"],
  },
  {
    title: "Reporting & Audit",
    description: "Automated reporting with AI anomaly detection and predictive insights.",
    features: ["AI Anomaly Detection", "Predictive Reporting", "Smart Analytics", "Audit AI"],
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
  shariahStatement: "Agentic AI continuously monitors jurisdictional rules and Shariah standards, ensuring always-on compliance.",
  travelRule: "AI agents integrate with leading Travel Rule and AML providers for autonomous cross-border compliance.",
} as const;

export const METRICS = [
  { label: "$30B+ on-chain RWAs (ex-stablecoins, 2025)", value: "$30B+", description: "Industry context" },
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
    "AI reduces compliance overhead for institutions",
    "AI agents scale investor servicing across borders",
  ],
  useCases: [
    { title: "Real Estate", description: "AI-powered REIT tokenization and fractional ownership" },
    { title: "Private Credit", description: "AI-driven Shariah-compliant lending platforms" },
    { title: "Sukuk", description: "AI-enhanced Islamic bond tokenization" },
    { title: "Commodities", description: "AI-optimized gold and precious metals tokenization" },
  ],
} as const;

export const PRICING = {
  title: "Transparent Pricing",
  plans: [
    {
      name: "Starter",
      price: "$50k–$75k/yr",
      description: "AI-assisted compliance & onboarding with SECP sandbox access",
      features: [
        "AI Compliance Agents",
        "AI-assisted Onboarding",
        "Core Issuance Tools",
        "Base Reporting",
        "Email Support"
      ],
      cta: "Start Pilot",
      popular: false,
    },
    {
      name: "Growth",
      price: "$100k–$150k/yr",
      description: "Multi-jurisdiction AI monitoring with advanced automation",
      features: [
        "Multi-Jurisdiction AI",
        "AI Compliance Monitoring",
        "Fireblocks Integration",
        "SSO/SAML",
        "Priority Support",
        "AI Analytics"
      ],
      cta: "Scale Up",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Custom AI agent workflows & private deployments with dedicated support",
      features: [
        "Custom AI Agents",
        "Private AI Deployments",
        "Dedicated Shariah AI",
        "SLA Guarantees",
        "White-Label AI",
        "Dedicated Support"
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ],
  note: "AI modules included by default—no extra per-agent fee. Pay in OWN for up to 20% discount.",
} as const;

export const TESTIMONIALS = [
  {
    quote: "AI compliance agents reduced our onboarding time by 40%.",
    author: "Ahmed Hassan",
    role: "VP, Islamic Banking",
    company: "Regional Islamic Bank",
  },
  {
    quote: "OWN LAB's AI agents enabled seamless REIT tokenization with full Shariah compliance.",
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
