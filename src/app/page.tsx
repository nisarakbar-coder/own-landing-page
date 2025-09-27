"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Stat } from "@/components/ui/stat";
import { BadgeRow } from "@/components/ui/badge-row";
import { Timeline } from "@/components/ui/timeline";
import { ModuleGrid } from "@/components/ui/module-grid";
import { Testimonial } from "@/components/ui/testimonial";
import { Pricing } from "@/components/ui/pricing";
import { LeadForm } from "@/components/ui/lead-form";
import { FAQ } from "@/components/ui/faq";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Layers, 
  Shield, 
  Map, 
  Network, 
  Download,
  ArrowRight,
  CheckCircle,
  Building,
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
  "Turnkey TaaS Stack": Layers,
  "Shariah-First by Design": Shield,
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
          <div className="absolute inset-0 bg-grid bg-network" />
          <Container className="relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                    {HERO.headline}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    {HERO.subcopy}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6">
                    {HERO.primaryCta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    <Download className="mr-2 h-5 w-5" />
                    {HERO.secondaryCta}
                  </Button>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-3">
                  {HERO.kpis.map((kpi, index) => (
                    <motion.div
                      key={kpi.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="text-center p-4 rounded-lg bg-card border"
                    >
                      <div className="text-2xl font-bold text-primary">{kpi.value}</div>
                      <div className="text-sm text-muted-foreground">{kpi.label}</div>
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
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <Building className="w-16 h-16 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg font-semibold">Network Visualization</div>
                      <div className="text-sm text-muted-foreground">
                        Institutional-grade tokenization infrastructure
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4">
                  <BadgeRow badges={HERO.trustBadges} />
                </div>
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
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Why Choose OWN LAB
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Built specifically for institutional RWA tokenization with Shariah compliance at its core.
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {VALUE_PROPS.map((prop, index) => {
                const Icon = valuePropIcons[prop.title as keyof typeof valuePropIcons];
                return (
                  <FeatureCard
                    key={prop.title}
                    title={prop.title}
                    description={prop.description}
                    icon={Icon}
                    delay={index * 0.1}
                  />
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
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our streamlined 4-step process from asset assessment to settlement and monitoring.
              </p>
            </motion.div>
            
            <Timeline steps={HOW_IT_WORKS} />
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
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Platform Modules
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive suite of tools for end-to-end RWA tokenization and management.
              </p>
            </motion.div>
            
            <ModuleGrid modules={PLATFORM_MODULES} />
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
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                {COMPLIANCE.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                  <h3 className="text-xl font-semibold mb-4">Supported Jurisdictions</h3>
                  <div className="space-y-3">
                    {COMPLIANCE.jurisdictions.map((jurisdiction) => (
                      <div key={jurisdiction.name} className="flex items-center justify-between p-3 rounded-lg border">
                        <div>
                          <div className="font-medium">{jurisdiction.name}</div>
                          <div className="text-sm text-muted-foreground">{jurisdiction.status}</div>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${jurisdiction.active ? 'bg-primary' : 'bg-muted'}`} />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-muted">
                  <h4 className="font-semibold mb-2">Shariah Governance</h4>
                  <p className="text-sm text-muted-foreground">{COMPLIANCE.shariahStatement}</p>
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
                  <h3 className="text-xl font-semibold mb-4">Compliance Features</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Independent Shariah scholar review</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Automated compliance monitoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Travel Rule and AML integration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Cross-border settlement support</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-muted">
                  <h4 className="font-semibold mb-2">Travel Rule & AML</h4>
                  <p className="text-sm text-muted-foreground">{COMPLIANCE.travelRule}</p>
                </div>
              </motion.div>
            </div>
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
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Industry Context
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The RWA tokenization market is rapidly expanding with significant growth opportunities.
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {METRICS.map((metric, index) => (
                <Stat
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  description={metric.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-muted-foreground">
                * Industry statistics are indicative and based on current market research
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
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Ideal Customer Profile
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Designed for institutional clients with significant assets under management.
              </p>
            </motion.div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-6">Target Clients</h3>
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
                      <Users className="h-5 w-5 text-primary" />
                      <span>{target}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-6">Use Cases</h3>
                <div className="space-y-4">
                  {ICP.useCases.map((useCase, index) => (
                    <motion.div
                      key={useCase.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-4 rounded-lg border"
                    >
                      <h4 className="font-semibold mb-2">{useCase.title}</h4>
                      <p className="text-sm text-muted-foreground">{useCase.description}</p>
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
            <Pricing
              title={PRICING.title}
              plans={PRICING.plans}
              note={PRICING.note}
            />
          </Container>
        </Section>

        {/* Testimonials Section */}
        <Section id="testimonials">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Hear from institutional clients who have successfully implemented our platform.
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {TESTIMONIALS.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </Container>
        </Section>

        {/* Resources Section */}
        <Section id="resources" background="muted">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Resources & Knowledge
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {resource.type}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                      <p className="text-muted-foreground text-sm">{resource.description}</p>
                    </CardContent>
                  </Card>
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
              <Button variant="outline" size="lg">
                Join our LinkedIn
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </Container>
        </Section>

        {/* Lead Capture Section */}
        <Section id="contact" background="primary">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
                Start your SECP sandbox pilot or GCC rollout with our institutional-grade tokenization platform.
              </p>
            </motion.div>
            
            <div className="max-w-2xl mx-auto">
              <LeadForm />
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section id="faq">
          <Container>
            <FAQ
              title="Frequently Asked Questions"
              items={FAQ_DATA}
            />
          </Container>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
}
