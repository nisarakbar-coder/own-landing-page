"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Platform",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" },
      { name: "Documentation", href: "#docs" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { name: "Shariah Board", href: "#shariah" },
      { name: "Regulatory", href: "#regulatory" },
      { name: "Security", href: "#security" },
      { name: "Audit", href: "#audit" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#docs" },
      { name: "Case Studies", href: "#cases" },
      { name: "Blog", href: "#blog" },
      { name: "Support", href: "#support" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Book Demo", href: "#demo" },
      { name: "Sales", href: "mailto:sales@ownlab.com" },
      { name: "Support", href: "mailto:support@ownlab.com" },
      { name: "Partnerships", href: "mailto:partnerships@ownlab.com" },
    ],
  },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/own-lab", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/own_lab", icon: Twitter },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer({ className }: FooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("bg-secondary text-secondary-foreground", className)}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary">
              OWN LAB
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              RWA Investment Bank & Tokenization-as-a-Service
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 border-t border-border pt-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground md:mt-0">
              © {new Date().getFullYear()} OWN LAB. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
