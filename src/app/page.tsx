"use client";

import { Navbar } from "@/components/ui/navbar";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TokenizationStack } from "@/components/ui/tokenization-stack";
import { ProcessFlow } from "@/components/ui/process-flow";
import { motion } from "framer-motion";
import { 
  Layers, 
  Shield, 
  Map, 
  Network, 
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import {
  HERO,
  HOW_IT_WORKS,
  WHY_OWN_LAB,
  START_PILOT
} from "@/lib/constants";

const valuePropIcons = {
  "Turnkey TaaS + AI": Layers,
  "Shariah-First": Shield,
  "Regulatory Pathway": Map,
  "Institutional Connectivity": Network,
};

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    linkedinUrl: "",
    position: "",
    companyLinkedin: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const payload = {
        "Name": formData.name,
        "Email": formData.email,
        "Company Name": formData.companyName,
        "Company Website": formData.companyWebsite,
        "LinkedIn URL": formData.linkedinUrl,
        "Position in the Company": formData.position,
        "Company LinkedIn": formData.companyLinkedin,
        "submittedAt": new Date().toISOString(),
        "formMode": "production"
      };

      const response = await fetch("https://ardglobal.app.n8n.cloud/webhook/7cb3e51d-c8da-478a-9660-0e91a4266b9e", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          companyName: "",
          companyWebsite: "",
          linkedinUrl: "",
          position: "",
          companyLinkedin: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main id="main-content">
        {/* 1. HERO Section */}
        <Section id="hero" className="bg-slate-950">
          <Container className="py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              {/* LEFT: Copy */}
              <motion.div
                initial={{opacity:0,y:12}} 
                animate={{opacity:1,y:0}} 
                transition={{duration:.5}} 
                className="md:col-span-6"
              >
                <p className="text-emerald-400 uppercase tracking-wider text-xs md:text-sm">{HERO.eyebrow}</p>
                <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
                    {HERO.headline}
                  </h1>
                <p className="mt-4 text-slate-300 max-w-xl">
                    {HERO.subcopy}
                  </p>

                <div className="mt-6">
                  <Button 
                    size="lg" 
                    className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 cursor-pointer"
                    data-analytics="hero-primary-cta"
                    aria-describedby="demo-description"
                  >
                    {HERO.primaryCta}
                  </Button>
                </div>
                
                {/* Hidden descriptions for accessibility */}
                <div className="sr-only">
                  <div id="demo-description">Apply now to start your pilot program with our AI-powered tokenization platform</div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {HERO.trustBadges.map((badge, index) => (
                    <motion.div
                      key={badge.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.06 }}
                    >
                      <Badge className="bg-emerald-950/40 border border-emerald-500/20 text-emerald-300">
                        {badge.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* RIGHT: Visual + Stats */}
              <motion.div
                initial={{opacity:0,y:12}} 
                animate={{opacity:1,y:0}} 
                transition={{duration:.6, delay:.05}} 
                className="md:col-span-6"
              >
                <TokenizationStack />
                
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {HERO.stats.map((stat, index) => (
                <motion.div
                      key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.06 }}
                >
                      <Card className="bg-slate-900/70 border border-white/10 rounded-2xl p-5">
                        <div className="text-2xl font-semibold">{stat.value}</div>
                        <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
                      </Card>
                </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* 2. HOW IT WORKS Section */}
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
                {HOW_IT_WORKS.title}
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                {HOW_IT_WORKS.kicker}
              </p>
            </motion.div>
            
            {/* Enhanced Process Flow */}
            <ProcessFlow steps={HOW_IT_WORKS.steps} />
          </Container>
        </Section>

        {/* 3. WHY OWN LAB Section */}
        <Section id="why-own-lab" background="muted">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                {WHY_OWN_LAB.title}
              </h2>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {WHY_OWN_LAB.tiles.map((tile, index) => {
                const Icon = valuePropIcons[tile.title as keyof typeof valuePropIcons];
                return (
                <motion.div
                    key={tile.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-glass p-6"
                >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-100">{tile.title}</h3>
                    </div>
                    <p className="text-slate-300 text-sm">{tile.description}</p>
                </motion.div>
                );
              })}
            </div>
            
            {/* Proof row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale">
                {WHY_OWN_LAB.proofLogos.map((logo) => (
                  <div key={logo} className="text-slate-400 font-medium text-sm">
                    {logo}
                      </div>
                    ))}
                  </div>
              <p className="mt-4 text-sm text-slate-500">
                <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  {WHY_OWN_LAB.sourcesLink}
                </a>
              </p>
            </motion.div>
          </Container>
        </Section>

        {/* 4. APPLY NOW Section */}
        <Section id="start-pilot">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-h2 text-slate-100 mb-4">
                {START_PILOT.title}
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                {START_PILOT.leftCopy}
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
                  className="card-glass p-6"
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {submitStatus === "success" && (
                      <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-300 text-sm">
                        {START_PILOT.successMessage}
                      </div>
                    )}
                    
                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-300 text-sm">
                        Something went wrong. Please try again.
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {START_PILOT.formFields.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {START_PILOT.formFields.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {START_PILOT.formFields.companyName}
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {START_PILOT.formFields.companyWebsite}
                      </label>
                      <input
                        type="url"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="https://www.yourcompany.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {START_PILOT.formFields.linkedinUrl}
                      </label>
                      <input
                        type="url"
                        name="linkedinUrl"
                        value={formData.linkedinUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {START_PILOT.formFields.position}
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter your position"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {START_PILOT.formFields.companyLinkedin}
                      </label>
                      <input
                        type="url"
                        name="companyLinkedin"
                        value={formData.companyLinkedin}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="https://linkedin.com/company/yourcompany"
                      />
                    </div>
                    
                    
                    <Button 
                      type="submit"
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-900 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? "Submitting..." : START_PILOT.submitText}
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      
      {/* Copyright */}
      <footer className="bg-slate-950 border-t border-white/10 py-6">
        <Container>
          <div className="text-center text-slate-400 text-sm">
            © 2024 OWN LAB. All rights reserved.
      </div>
        </Container>
      </footer>
    </div>
  );
}