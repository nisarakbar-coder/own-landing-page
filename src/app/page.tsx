"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { LeadForm } from "@/components/ui/lead-form";
import { FAQ } from "@/components/ui/faq";
import { Button } from "@/components/ui/button";
import { StatStrip } from "@/components/ui/stat-strip";
import { StatsBar } from "@/components/ui/stats-bar";
import { TrustLogos } from "@/components/ui/trust-logos";
import { PricingTiers } from "@/components/ui/pricing-tiers";
import { JurisdictionTimeline } from "@/components/ui/jurisdiction-timeline";
import { motion } from "framer-motion";
import { 
  Layers, 
  Shield, 
  Map, 
  Network, 
  Download,
  ArrowRight,
  CheckCircle,
  Users
} from "lucide-react";
import {
  HERO,
  VALUE_PROPS,
  HOW_IT_WORKS,
  PLATFORM_MODULES,
  COMPLIANCE,
  METRICS,
  ICP,
  PRICING,
  TESTIMONIALS,
  RESOURCES,
  FAQ as FAQ_DATA
} from "@/lib/constants";

const valuePropIcons = {
  "Turnkey TaaS": Layers,
  "Shariah-First": Shield,
  "Regulatory Pathway": Map,
  "Institutional Connectivity": Network,
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main id="main-content">
        {/* Hero Section */}
        <Section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid bg-mesh" />
          <Container className="relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <div className="text-eyebrow mb-4">{HERO.eyebrow}</div>
                  <h1 className="text-h1 text-slate-100 mb-6">
                    {HERO.headline}
                  </h1>
                  <p className="text-lg leading-8 text-slate-300 max-w-2xl">
                    {HERO.subcopy}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 bg-emerald-500 hover:bg-emerald-600 text-slate-900">
                    {HERO.primaryCta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/20 text-slate-100 hover:bg-white/10">
                    <Download className="mr-2 h-5 w-5" />
                    {HERO.secondaryCta}
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {HERO.trustBadges.map((badge, index) => (
                    <motion.div
                      key={badge.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="stat-chip"
                    >
                      <span className="text-emerald-400">{badge.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* 3D Glassmorphism Card Stack */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-2xl blur-xl" />
                  <div className="relative aspect-square rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center">
                        <Network className="w-16 h-16 text-emerald-400" />
                    </div>
                    <div className="space-y-2">
                        <div className="text-lg font-semibold text-slate-100">Tokenization Stack</div>
                        <div className="text-sm text-slate-400">
                          Institutional-grade infrastructure
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* StatStrip */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8"
                >
                  <StatStrip stats={HERO.stats as readonly { label: string; value: string; }[]} />
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* Value Props Section */}
        <Section id="why" background="muted">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                Why Choose OWN LAB
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Built specifically for institutional RWA tokenization with Shariah compliance at its core.
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {VALUE_PROPS.map((prop, index) => {
                const Icon = valuePropIcons[prop.title as keyof typeof valuePropIcons];
                return (
                  <motion.div
                    key={prop.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card-glass p-6 rounded-2xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-100">{prop.title}</h3>
                    </div>
                    <p className="text-slate-300 text-sm mb-4">{prop.description}</p>
                    <a href="#platform" className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors">
                      Learn more →
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* How It Works Section */}
        <Section id="how-it-works">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Our streamlined 4-step process from asset assessment to settlement and monitoring.
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {HOW_IT_WORKS.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-glass p-6 rounded-2xl text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-900 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">{step.title}</h3>
                  <p className="text-slate-300 text-sm mb-2">{step.description}</p>
                  <p className="text-emerald-400 text-xs font-medium">{step.microcopy}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-slate-400">
                Custodial & non-custodial flows supported; KYC/AML baked in.
              </p>
            </motion.div>
          </Container>
        </Section>

        {/* Platform Modules Section */}
        <Section id="platform" background="muted">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                Platform Modules
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Comprehensive suite of tools for end-to-end RWA tokenization and management.
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PLATFORM_MODULES.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-glass p-6 rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">{module.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg" className="border-white/20 text-slate-100 hover:bg-white/10">
                View API & Docs →
              </Button>
            </motion.div>
          </Container>
        </Section>

        {/* Compliance Section */}
        <Section id="compliance">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                {COMPLIANCE.title}
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Regulatory compliance and Shariah governance built into every aspect of our platform.
              </p>
            </motion.div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-6">Built for Regulated Markets</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {COMPLIANCE.jurisdictions.map((jurisdiction) => (
                      <div key={jurisdiction.name} className="card-glass p-4 rounded-2xl">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-slate-100">{jurisdiction.name}</div>
                          <div className={`w-3 h-3 rounded-full ${jurisdiction.active ? 'bg-emerald-500' : 'bg-slate-600'}`} />
                        </div>
                        <div className="text-sm text-slate-400">{jurisdiction.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="card-glass p-6 rounded-2xl">
                  <h4 className="font-semibold text-slate-100 mb-3">Shariah Governance</h4>
                  <p className="text-sm text-slate-300 mb-4">{COMPLIANCE.shariahStatement}</p>
                  <Button variant="outline" size="sm" className="border-white/20 text-slate-100 hover:bg-white/10">
                    Download Governance Brief (PDF)
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-6">Travel Rule & AML</h3>
                  <div className="space-y-3">
                    {[
                      "Allowlists",
                      "Travel Rule", 
                      "AML Screening",
                      "Cross-border settlement"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                        <span className="text-slate-300">{feature}</span>
                    </div>
                    ))}
                  </div>
                </div>
                
                <div className="card-glass p-6 rounded-2xl">
                  <h4 className="font-semibold text-slate-100 mb-3">Provider Integration</h4>
                  <p className="text-sm text-slate-300 mb-4">{COMPLIANCE.travelRule}</p>
                  <div className="flex gap-2">
                    {["Chainalysis", "Elliptic", "TRM Labs"].map((provider) => (
                      <div key={provider} className="px-3 py-1 bg-slate-800 rounded-lg text-xs text-slate-400">
                        {provider}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <JurisdictionTimeline jurisdictions={COMPLIANCE.jurisdictions as readonly { name: string; status: string; active: boolean; }[]} />
            </motion.div>
          </Container>
        </Section>

        {/* Metrics Section */}
        <Section id="metrics" background="muted">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                Industry Context
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                The RWA tokenization market is rapidly expanding with significant growth opportunities.
              </p>
            </motion.div>
            
            <StatsBar stats={METRICS as readonly { label: string; value: string; description: string; }[]} />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-slate-400">
                Industry snapshot, Sept 2025. <span className="text-emerald-400 cursor-pointer hover:underline">Sources</span>
              </p>
            </motion.div>
          </Container>
        </Section>

        {/* ICP & Use Cases Section */}
        <Section id="icp">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                Ideal Customer Profile
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Designed for institutional clients with significant assets under management.
              </p>
            </motion.div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-glass p-6 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-slate-100 mb-6">Target Clients</h3>
                <div className="space-y-4">
                  {ICP.targets.map((target, index) => (
                    <motion.div
                      key={target}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <Users className="h-5 w-5 text-emerald-500" />
                      <span className="text-slate-300">{target}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-glass p-6 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-slate-100 mb-6">Use Cases</h3>
                <div className="space-y-4">
                  {ICP.useCases.map((useCase, index) => (
                    <motion.div
                      key={useCase.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-slate-800/50 border border-white/10"
                    >
                      <h4 className="font-semibold text-slate-100 mb-2">{useCase.title}</h4>
                      <p className="text-sm text-slate-400">{useCase.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* Pricing Section */}
        <Section id="pricing" background="muted">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                {PRICING.title}
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Transparent pricing with volume discounts and OWN token payment options.
              </p>
            </motion.div>
            
            <PricingTiers
              plans={PRICING.plans as readonly { name: string; price: string; description: string; features: readonly string[]; cta: string; popular?: boolean; }[]}
              note={PRICING.note}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg" className="border-white/20 text-slate-100 hover:bg-white/10">
                Compare features →
              </Button>
            </motion.div>
          </Container>
        </Section>

        {/* Trust Section */}
        <Section id="trust" background="muted">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                Trusted by Leading Institutions
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Partner with regulatory bodies and technology leaders in the RWA space.
              </p>
            </motion.div>
            
            <TrustLogos 
              logos={[
                { name: "DIFC", href: "https://difc.ae" },
                { name: "ADGM", href: "https://adgm.com" },
                { name: "Fireblocks", href: "https://fireblocks.com" },
                { name: "Chainalysis", href: "https://chainalysis.com" },
                { name: "Elliptic", href: "https://elliptic.co" },
                { name: "TRM Labs", href: "https://trmlabs.com" }
              ]}
              className="mb-16"
            />
            
            <div className="grid gap-8 md:grid-cols-2">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card-glass p-6 rounded-2xl"
                >
                  <blockquote className="text-slate-300 mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <span className="text-emerald-400 font-semibold text-sm">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-100">{testimonial.author}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Resources Section */}
        <Section id="resources">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                Resources & Knowledge
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Access our comprehensive guides and case studies to learn more about RWA tokenization.
              </p>
            </motion.div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {RESOURCES.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-glass p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                      <div className="mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400">
                          {resource.type}
                        </div>
                      </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">{resource.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm" className="w-full border-white/20 text-slate-100 hover:bg-white/10">
                    Download →
                  </Button>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg" className="border-white/20 text-slate-100 hover:bg-white/10">
                Join our LinkedIn
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </Container>
        </Section>

        {/* Lead Capture Section */}
        <Section id="contact" background="muted">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Start your SECP sandbox pilot or GCC rollout with our institutional-grade tokenization platform.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold text-slate-100">Why Choose OWN LAB?</h3>
                  <ul className="space-y-4">
                    {[
                      "SECP sandbox pilot ready in 4-6 weeks",
                      "Shariah-compliant by design",
                      "Multi-jurisdiction regulatory pathway",
                      "Institutional-grade security & custody",
                      "White-label platform options"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="card-glass p-6 rounded-2xl"
                >
              <LeadForm />
                </motion.div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section id="faq">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Common questions about our platform, compliance, and implementation process.
              </p>
            </motion.div>
            
            <FAQ
              title=""
              items={FAQ_DATA}
            />
          </Container>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
}
