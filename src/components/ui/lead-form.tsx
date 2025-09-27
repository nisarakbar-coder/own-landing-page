"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle } from "lucide-react";

interface LeadFormProps {
  className?: string;
}

const aumRanges = [
  "Under $50M",
  "$50M - $200M", 
  "$200M - $500M",
  "$500M - $1B",
  "$1B - $5B",
  "Over $5B"
];

const regions = [
  "Pakistan",
  "GCC",
  "Malaysia", 
  "Other"
];

export function LeadForm({ className }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    aum: "",
    region: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    if (!formData.aum) newErrors.aum = "AUM range is required";
    if (!formData.region) newErrors.region = "Region is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          aum: "",
          region: "",
          message: ""
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error - could show toast notification
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn("text-center", className)}
      >
        <Card>
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
            <p className="text-muted-foreground">
              We'll be in touch soon to discuss your tokenization needs.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Start your SECP sandbox pilot or GCC rollout</CardTitle>
          <CardDescription>
            Get in touch with our team to discuss your tokenization requirements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={errors.name ? "border-destructive" : ""}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Work Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company *
                </label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className={errors.company ? "border-destructive" : ""}
                  placeholder="Your Company"
                />
                {errors.company && (
                  <p className="text-sm text-destructive mt-1">{errors.company}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-2">
                  Role *
                </label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  className={errors.role ? "border-destructive" : ""}
                  placeholder="VP, Digital Assets"
                />
                {errors.role && (
                  <p className="text-sm text-destructive mt-1">{errors.role}</p>
                )}
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="aum" className="block text-sm font-medium mb-2">
                  AUM Range *
                </label>
                <select
                  id="aum"
                  value={formData.aum}
                  onChange={(e) => handleChange("aum", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md ${errors.aum ? "border-destructive" : "border-input"}`}
                >
                  <option value="">Select AUM Range</option>
                  {aumRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                {errors.aum && (
                  <p className="text-sm text-destructive mt-1">{errors.aum}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="region" className="block text-sm font-medium mb-2">
                  Region *
                </label>
                <select
                  id="region"
                  value={formData.region}
                  onChange={(e) => handleChange("region", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md ${errors.region ? "border-destructive" : "border-input"}`}
                >
                  <option value="">Select Region</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                {errors.region && (
                  <p className="text-sm text-destructive mt-1">{errors.region}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell us about your tokenization goals and requirements..."
                rows={4}
              />
            </div>
            
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="consent"
                required
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground">
                I consent to OWN LAB contacting me about their services and agree to the{" "}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Inquiry"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
